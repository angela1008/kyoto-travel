import { Calendar, MapPin, Train, DollarSign, ChevronRight, Utensils, Camera, Leaf, CreditCard, Users, Heart, Sparkles, Hotel, Info, Plane, ExternalLink, Coins, AlertTriangle, Briefcase, Coffee, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const flightInfo = {
  departure: {
    date: '2026-03-17 (二)',
    flight: 'tigerlight IT212',
    route: 'TPE 桃園國際機場 (T1) ➔ KIX 大阪關西國際機場 (T1)',
    time: '14:40 出發 ➔ 17:55 抵達',
  },
  return: {
    date: '2026-03-20 (五)',
    flight: 'tigersmart IT213',
    route: 'KIX 大阪關西國際機場 (T1) ➔ TPE 桃園國際機場 (T1)',
    time: '18:55 出發 ➔ 21:20 抵達',
  }
};

const precautions = [
  {
    title: '機場報到時間',
    icon: AlertTriangle,
    content: '請務必準時抵達機場。於班機起飛前 2.5 小時開始辦理櫃台報到及行李託運手續，請旅客務必於起飛前 45 分鐘完成報到。',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50'
  },
  {
    title: '行李規範',
    icon: Briefcase,
    content: '每位旅客僅可攜帶一件手提行李〔尺寸小於 54cm x 38cm x 23cm（含輪子及手把）〕與一件個人隨身物品，合計二件總重不得超過 10 公斤。',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    title: '機上餐飲',
    icon: Coffee,
    content: '請配合勿飲食非機上販賣的餐點。',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }
];

const itinerary = [
  {
    day: 1,
    date: '3/17 (二)',
    title: '抵達京都：梅小路飯店入住',
    mapLink: 'https://www.google.com/maps/dir/Kansai+International+Airport/Kyoto+Station/The+Royal+Park+Hotel+Kyoto+Umekoji',
    activities: [
      { time: '17:55', text: '抵達關西機場 (KIX) (快速買些簡單食物)', icon: MapPin, link: 'https://maps.google.com/?q=Kansai+International+Airport' },
      { time: '19:14', text: '搭乘 JR Haruka 特急 (外國人優惠票 ¥2,200)', icon: Train, link: 'https://maps.google.com/?q=Kyoto+Station' },
      { time: '20:32', text: '抵達京都車站，吃晚餐：UNO RAMEN', icon: Utensils, link: 'https://maps.app.goo.gl/8dGgNukajca4DQX66' },
      { time: '21:30', text: '到便利商店買個隔天早餐', icon: Coffee, link: 'https://maps.google.com/?q=Convenience+Store+Kyoto+Station' },
      { time: '22:03', text: '搭乘 JR 嵯峨野線至「梅小路京都西站」', icon: Train, link: 'https://maps.google.com/?q=Umekoji-Kyotonishi+Station' },
      { time: '22:30', text: '飯店 Check-in：梅小路皇家花園飯店', icon: Hotel, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
    ],
    tips: '【交通：Haruka 優惠票 + ICOCA】Haruka 優惠票包含京都市內 JR 站轉乘，轉一站到梅小路不需額外付費。',
  },
  {
    day: 2,
    date: '3/18 (三)',
    title: '京都經典巡禮：和服攝影與御守解鎖',
    mapLink: 'https://www.google.com/maps/dir/The+Royal+Park+Hotel+Kyoto+Umekoji/tekuteku+Kyoto+Kiyomizu+Shop/Gion+Hanamikoji/Fushimi+Inari+Taisha/Heian+Jingu/Okazaki+Shrine/Kiyomizu-dera/Vegetarian+Cafe+Ren+Shij%C5%8D+%C5%8Cmiya',
    activities: [
      { time: '07:30', text: '起床、吃早餐儲備體力', icon: Calendar, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
      { time: '08:42', text: '【最慢】搭上 JR 嵯峨野線前往京都車站', icon: Train, link: 'https://maps.google.com/?q=Umekoji-Kyotonishi+Station' },
      { time: '09:30', text: '抵達 tekuteku 清水店 (和服體驗換裝)', icon: Sparkles, link: 'https://maps.google.com/?q=tekuteku+Kyoto+Kiyomizu+Shop' },
      { time: '11:30', text: '祇園、花見小路與攝影師會合拍照', icon: Camera, link: 'https://maps.google.com/?q=Gion+Hanamikoji' },
      { time: '12:30', text: '【午餐】ZIRAEL Vegan 或 cafe vegan terrace (評估是否先還和服)', icon: Utensils, link: 'https://maps.app.goo.gl/6FaLwVfU2ytVwdu97' },
      { time: '13:30', text: '午餐結束，出發前往伏見稻荷', icon: Train, link: 'https://maps.google.com/?q=Fushimi+Inari+Taisha' },
      { time: '14:00', text: '伏見稻荷大社：千本鳥居、買御守', icon: MapPin, link: 'https://maps.google.com/?q=Fushimi+Inari+Taisha' },
      { time: '15:30', text: '平安神宮 & 岡崎神社 (買御守)', icon: MapPin, link: 'https://maps.google.com/?q=Okazaki+Shrine' },
      { time: '17:00', text: '前往清水寺、二年坂三年坂散步 或 還和服', icon: Camera, link: 'https://maps.google.com/?q=Kiyomizu-dera' },
      { time: '18:30', text: '【Deadline】tekuteku 還和服', icon: Sparkles, link: 'https://maps.google.com/?q=tekuteku+Kyoto+Kiyomizu+Shop' },
      { time: '18:30', text: '【晚餐】Vegetarian Cafe Ren (可預約)', icon: Utensils, link: 'https://maps.app.goo.gl/cuKYAputktoF2Dxr8' },
      { time: '20:00', text: '回飯店休息', icon: Hotel, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
    ],
    tips: '【交通：ICOCA 全程刷卡】今日行程緊湊，建議留意巴士班次。和服務必於 18:30 前歸還。',
  },
  {
    day: 3,
    date: '3/19 (四)',
    title: '嵐山小火車與北區世界遺產',
    mapLink: 'https://www.google.com/maps/dir/The+Royal+Park+Hotel+Kyoto+Umekoji/Umabori+Station/Torokko+Kameoka+Station/Arashiyama+Bamboo+Grove/Kinkaku-ji/Shimogamo+Jinja/Demachiyanagi+Station/VEGAN+IZAKAYA+Nijiya',
    activities: [
      { time: '08:30', text: '起床、化妝、吃早餐', icon: Calendar, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
      { time: '09:30', text: '【最慢】一定要搭上梅小路京都西站的 JR', icon: Train, link: 'https://maps.google.com/?q=Umekoji-Kyotonishi+Station' },
      { time: '10:00', text: '抵達馬堀站 ➔ 步行15分鐘 ➔ 小火車龜岡站', icon: Train, link: 'https://maps.google.com/?q=Torokko+Kameoka+Station' },
      { time: '10:30', text: '搭乘嵐山小火車 (龜岡 ➔ 嵐山)', icon: Camera, link: 'https://maps.google.com/?q=Sagano+Romantic+Train' },
      { time: '10:50', text: '嵐山竹林小徑、天龍寺散步', icon: MapPin, link: 'https://maps.google.com/?q=Arashiyama+Bamboo+Grove' },
      { time: '12:00', text: '【午餐】嵯峨豆腐 稻 北店', icon: Utensils, link: 'https://maps.app.goo.gl/qZ4pAQ9mRKXJQ3wA7' },
      { time: '14:00', text: '金閣寺 (舍利殿) 參拜', icon: MapPin, link: 'https://maps.google.com/?q=Kinkaku-ji' },
      { time: '15:30', text: '下鴨神社 (世界遺產)', icon: MapPin, link: 'https://maps.google.com/?q=Shimogamo+Jinja' },
      { time: '17:00', text: '出町跳石 (鴨川跳烏龜)', icon: Camera, link: 'https://maps.google.com/?q=Demachiyanagi+Stepping+Stones' },
      { time: '17:30', text: '【晚餐】虹屋 nijiya (現場排隊)', icon: Utensils, link: 'https://maps.app.goo.gl/f4kheKVTCrtvGCNL6' },
      { time: '19:00', text: '鴨川 or 京都車站、京都塔走走', icon: Camera, link: 'https://maps.google.com/?q=Kyoto+Tower' },
      { time: '21:00', text: '回飯店休息', icon: Hotel, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
    ],
    tips: '【交通：ICOCA + 巴士】嵐山到金閣寺建議搭乘巴士。晚餐虹屋熱門，建議提早前往排隊。',
  },
  {
    day: 4,
    date: '3/20 (五)',
    title: '奈良小鹿與難波逛街採買',
    mapLink: 'https://www.google.com/maps/dir/The+Royal+Park+Hotel+Kyoto+Umekoji/Nara+Park/Kintetsu-Nara+Station/Namba+Station/Kansai+International+Airport',
    activities: [
      { time: '08:00', text: '起床、吃早餐、整理行李、Checkout', icon: Calendar, link: 'https://maps.google.com/?q=The+Royal+Park+Hotel+Kyoto+Umekoji' },
      { time: '09:21', text: '【最慢】搭上 JR 經京都車站前往奈良 (¥800)', icon: Train, link: 'https://maps.google.com/?q=Nara+Station' },
      { time: '10:30', text: '奈良公園餵小鹿、東大寺大佛', icon: MapPin, link: 'https://maps.google.com/?q=Todai-ji' },
      { time: '12:00', text: '【午餐】奈良在地蔬食', icon: Utensils, link: 'https://maps.google.com/?q=Nara+Vegetarian+Food' },
      { time: '13:30', text: '搭乘 近鐵奈良線 (45分鐘) ➔ 難波 (¥680)', icon: Train, link: 'https://maps.google.com/?q=Kintetsu-Nara+Station' },
      { time: '14:20', text: '道頓堀、心齋橋逛街採買', icon: Camera, link: 'https://maps.google.com/?q=Dotonbori' },
      { time: '16:08', text: '【最慢】搭南海本線 (50分鐘) ➔ 關西機場 (¥970)', icon: Train, link: 'https://maps.google.com/?q=Namba+Station' },
      { time: '16:58', text: '抵達關西機場 (KIX)', icon: MapPin, link: 'https://maps.google.com/?q=Kansai+Airport+Terminal+1' },
      { time: '17:15', text: '前往 JR 關西機場站辦理 ICOCA 退卡', icon: CreditCard, link: 'https://maps.google.com/?q=Kansai+Airport+Station' },
      { time: '18:55', text: '虎航 IT 213 起飛回台', icon: Plane, link: 'https://maps.google.com/?q=Kansai+Airport+Terminal+1' },
    ],
    tips: '【交通：ICOCA 全程刷卡】今日不搭 Haruka，改搭近鐵與南海電鐵。請務必於 16:08 前抵達南海難波站。',
  },
];

export default function Itinerary() {
  return (
    <div className="space-y-12">
      {/* 班機資訊 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
            <Plane className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">✈️ 班機資訊</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">去程</span>
              <span className="text-sm font-bold text-slate-800">{flightInfo.departure.date}</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{flightInfo.departure.flight}</h4>
            <p className="text-sm text-slate-600">{flightInfo.departure.route}</p>
            <p className="text-sm font-bold text-sky-600 mt-2">{flightInfo.departure.time}</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">回程</span>
              <span className="text-sm font-bold text-slate-800">{flightInfo.return.date}</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{flightInfo.return.flight}</h4>
            <p className="text-sm text-slate-600">{flightInfo.return.route}</p>
            <p className="text-sm font-bold text-rose-600 mt-2">{flightInfo.return.time}</p>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">⚠️ 重要注意事項</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {precautions.map((item, idx) => (
            <div key={idx} className={`${item.bgColor} p-5 rounded-2xl border border-slate-100 shadow-sm`}>
              <div className="flex items-center gap-2 mb-3">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <h4 className={`font-bold ${item.color}`}>{item.title}</h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 交通費計算區 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <Coins className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">💰 每日預估交通費加總 (每人)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { day: 1, cost: '¥2,350', detail: 'Haruka (¥2200) + JR (¥150)' },
            { day: 2, cost: '¥1,500', detail: 'JR (¥200) + 京阪 (¥440) + 巴士 (¥800)' },
            { day: 3, cost: '¥2,280', detail: 'JR (¥200) + 小火車 (¥880) + 嵐電/地鐵/巴士 (¥1200)' },
            { day: 4, cost: '¥2,450', detail: 'JR (¥800) + 近鐵 (¥680) + 南海 (¥970)' },
          ].map((item) => (
            <div key={item.day} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Day {item.day}</span>
                <span className="text-lg font-bold text-slate-800">{item.cost}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>💡 總結建議：</strong> 全程使用 <strong>ICOCA</strong> 即可。
            第一天建議預購 <strong>Haruka 優惠票</strong>，最後一天則直接刷 ICOCA 搭乘近鐵與南海電鐵，這樣安排最符合您的行程且靈活。
          </p>
        </div>
      </section>

      {/* 住宿確認：梅小路皇家花園飯店 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
            <Hotel className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">住宿確認：梅小路皇家花園飯店</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-3">
              <h4 className="font-bold text-slate-800 text-lg">The Royal Park Hotel Kyoto Umekoji</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                飯店位於 JR 「梅小路京都西站」出口旁，這對您的行程非常有利：<br/>
                1. 往返京都車站只需 3 分鐘 (1站)。<br/>
                2. 往嵐山方向可直達，不需去京都車站人擠人。<br/>
                3. 旁邊就是梅小路公園，環境清幽適合長輩散步。<br/>
                <a href="https://www.royalparkhotels.co.jp/zh-CHT/the/kyotoumekoji/stay/rooms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline inline-flex items-center gap-1 mt-2">
                  查看房型詳情 <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <div className="w-full md:w-48 h-32 bg-slate-100 rounded-xl overflow-hidden">
              <img 
                src="https://www.royalparkhotels.co.jp/the/kyotoumekoji/assets/images/stay/rooms/webp/img_superiortwin.webp" 
                alt="Superior Twin Room" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 行程規劃 */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">優化行程規劃 (3人全程大眾運輸版)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itinerary.map((day, idx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                    Day {day.day}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{day.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">{day.title}</h3>
                  <a 
                    href={day.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 bg-slate-100 rounded-lg text-slate-500 hover:text-emerald-600 transition-colors"
                    title="查看當日路線地圖"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {day.activities.map((act, i) => (
                  <div key={i} className="flex gap-3 group">
                    <div className="mt-1">
                      <act.icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-slate-400 block">{act.time}</span>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm text-slate-600">{act.text}</p>
                        {act.link && (
                          <a
                            href={act.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-emerald-600 transition-colors"
                            title="查看地圖"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 italic">💡 建議：{day.tips}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
