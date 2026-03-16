import { motion } from 'motion/react';
import { Plane, Map, Info } from 'lucide-react';
import Itinerary from './components/Itinerary';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
          alt="Kyoto Temple"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            孝親蔬食自由行 (3人同行)
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            京都・奈良 <span className="text-rose-300">慢活之旅</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            專為長輩設計的蔬食行程。減少步行距離，善用計程車接駁，在京都古都與奈良小鹿間享受溫馨的家族時光。
          </p>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 space-y-12">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">目的地</h3>
              <p className="text-sm text-slate-500">大阪、京都、嵐山</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">最佳季節</h3>
              <p className="text-sm text-slate-500">春秋兩季 (櫻花/紅葉)</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">簽證/貨幣</h3>
              <p className="text-sm text-slate-500">免簽 / 日圓 (JPY)</p>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <Itinerary />

        {/* Footer Info */}
        <footer className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">行前準備清單</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  護照效期需在 6 個月以上
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  填寫 Visit Japan Web (入境審查與海關申報)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  購買網卡或租借 Wi-Fi 機
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  投保旅遊平安險與不便險
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">關於此規劃</h3>
              <p className="text-slate-400 leading-relaxed">
                此行程專為長輩設計，重點在於減少步行、安排蔬食餐飲，並確保交通動線順暢，讓全家人都能輕鬆享受京都與奈良的古都氛圍。
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            © 2026 大阪京都自由行規劃助手 | Powered by Google Maps Grounding
          </div>
        </footer>
      </main>
    </div>
  );
}
