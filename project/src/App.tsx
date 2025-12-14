import { Heart, Sparkles, Camera, Coffee, MessageCircle, Map } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-rose-100">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-100 via-amber-100 to-peach-100 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 opacity-20">
              <Sparkles className="w-8 h-8 text-rose-400" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20">
              <Heart className="w-8 h-8 text-rose-400" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
              <Heart className="w-64 h-64 text-rose-300" />
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif text-rose-800 mb-2 relative z-10">
              Happy Birthday Jenni 🎂✨
            </h1>
            <p className="text-xl text-rose-600 font-light relative z-10">
              To My Bestest Best Friend 💕🥰
            </p>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">

            <div className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Nee epovume happy-aa 😊, sandhosama iru 🌸. Nee aasapadra ellame
                unaku kandippa kedaikum nu naan manasara namburen 🤞💫.
                En life-kulla nee vandhadhuku naan romba lucky-aa feel panren 💖.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Map className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Enaku school naale namma 9th, 10th, 12th days dhan nyabagam varum 🎒📚.
                Adhula nee romba periya part 💛.
                Namma evlo jolly-aa irundhom 😂, pesunom 🗣️, sirichom —
                ellame romba miss panren 😔.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Camera className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
              <p className="text-lg">
                First time unna pathapo “yaaru indha ponnu 😅,
                romba arrogant-aa iruka?” nu nenachen 🙈.
                Aana adhu ellame marichu namma pesa aarambichom 💬,
                adhu en character-aye maathiduchu 🌱.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Nee dhan reason ippo enaku neraya friends irukaanga 🤍.
                Matavanga life-la naan neraya maathirukalam,
                aana en life-la ennai maathinadhu nee dhan 💯✨.
                Innum varaikum unna madhiri comfortable-aa
                ellame share panra friend 🤗
                vera yaarum kedaikala 😢.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Coffee className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Namma late-night talks 🌙💬 miss panren,
                sanda 😅 miss panren,
                namma emotional exchanges 🫂 miss panren.
                School mudinja apram neraya friends irundhaalum,
                ippo avlo touch-la yaarum illa 😕.
                Aana nee marama irupa nu naan namburen 🤞💖.
              </p>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6 sm:p-8 my-8 border border-rose-100">
              <p className="text-xl text-center font-light text-rose-800 leading-relaxed">
                Ippo namma rendu perum life-la busy-aa irundhaalum ⏳,
                namma mela irukura love marala nu naan namburen 💞.
                Enaku thirumba school life-a oru dhadava relive panna
                chance kedaicha 😌,
                adha dhan naan choose pannuven 🏫✨.
              </p>
            </div>

            <div className="text-center pt-6">
              <p className="text-2xl font-serif text-rose-700 mb-4">
                Thanks di, ellathukum 💖🥹
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Un birthday-ku naan ready pannina video appo dhan
                namma photos ellam paathen 📸💭.
                Namma evlo kashta pattom,
                andha road-la edutha photos ellame
                romba smile-a kondu vandhuchu 😊.
                Nee dhan epovume
                <b> first, best, bestessssst friend di Love u a lot</b> 😘💫.
              </p>
              <div className="flex items-center justify-center gap-2 text-rose-500">
                <Heart className="w-6 h-6 fill-rose-400" />
                <p className="text-xl font-light">
                  I will be there for you, always 🤍🫂
                </p>
                <Heart className="w-6 h-6 fill-rose-400" />
              </div>
            </div>

            <div className="text-center pt-8 border-t border-rose-100">
              <p className="text-lg text-gray-500 italic">
                Once again… 🎉
              </p>
              <p className="text-2xl font-serif text-rose-700 mt-2">
                Happy Birthday Jenni 🎂💖✨
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-amber-100 via-rose-100 to-orange-100 p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <p className="text-rose-700 font-light">
                Vayasu aagudhu nu feel pannaadha 😌 — epovume azhaga dhan irupa 💕✨
              </p>
              <Sparkles className="w-5 h-5 text-rose-500" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
