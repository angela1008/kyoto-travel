import React, { useState } from 'react';
import { Search, MapPin, Loader2, ExternalLink } from 'lucide-react';
import { getMapsGroundingResponse } from '../services/geminiService';
import Markdown from 'react-markdown';

export default function MapExplorer() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; groundingChunks: any[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      // Get user location if possible
      let lat, lng;
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
        });
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      } catch (e) {
        console.log("Geolocation not available or denied");
      }

      const response = await getMapsGroundingResponse(query, lat, lng);
      setResult(response);
    } catch (err) {
      setError('搜尋時發生錯誤，請稍後再試。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-bottom border-slate-100">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-emerald-600" />
          探索景點與美食 (Google Maps 支援)
        </h2>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="例如：心齋橋附近推薦的拉麵店..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : '搜尋'}
          </button>
        </form>
      </div>

      <div className="p-6 bg-slate-50/50 min-h-[200px]">
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin mb-2" />
            <p>正在搜尋地圖資訊...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        {!loading && !result && !error && (
          <div className="text-center py-12 text-slate-400">
            <p>輸入你想查詢的地點、餐廳或交通資訊</p>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="markdown-body">
              <Markdown>{result.text}</Markdown>
            </div>

            {result.groundingChunks && result.groundingChunks.length > 0 && (
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">參考來源與地點</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.groundingChunks.map((chunk: any, idx: number) => {
                    const mapsData = chunk.maps;
                    if (!mapsData) return null;
                    return (
                      <a
                        key={idx}
                        href={mapsData.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-slate-700 truncate max-w-[180px]">
                            {mapsData.title || '查看地圖'}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
