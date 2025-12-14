import { Heart, Sparkles, Camera, Coffee, MessageCircle, Map } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 via-amber-100 to-orange-100 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-rose-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-200 via-rose-200 via-amber-200 to-orange-200 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 opacity-30">
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-30">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <Heart className="w-64 h-64 text-rose-400" />
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif text-rose-800 mb-2 relative z-10">
              Happy Birthday Jenni 💕🎂✨🎉
            </h1>
            <p className="text-xl text-rose-700 font-light relative z-10">
              To My Bestest Best Friend 💕🥰💖
            </p>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">

            <div className="flex items-start gap-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border-l-4 border-pink-400">
              <MessageCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Nee epovume happy-aa 😊, sandhosama iru 🌸✨.
                Nee aasapadra ellame unaku kandippa kedaikum nu naan manasara namburen 🤞💫.
                En life-kulla nee vandhadhuku naan romba lucky-aa feel panren 💛🌟
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border-l-4 border-amber-500">
              <Map className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Enaku school naale namma <b>9th, 10th, 12th</b> days dhan nyabagam varum 🎒📚🏫.
                Adhula nee romba periya part 💛.
                Namma evlo jolly-aa irundhom 😂, pesunom 🗣️, sirichom 😄…
                ellame romba romba miss panren naan 😔💭
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-l-4 border-purple-400">
              <Camera className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Unna pakura munadi girls-kitta pesa kudaathu nu oru mindset-la irundhen 🤷‍♀️.
                First time unna pathapo 📸
                "Yaaru indha ponnu, romba arrogant-aa iruka?" nu nenachen 🙈😅
                Aana adhu ellame marichu, namma pesa aarambichom 💬…
                Adhu en character-aye maathiduchu 🌱✨
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border-l-4 border-rose-500">
              <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Nee dhan reason ippo enaku neraya friends irukaanga 🤍👥.
                Matavanga life-la naan neraya maathirukalam…
                Aana <b>en life-la ennai maathinadhu nee dhan</b> 💯✨
                Innum varaikum en life-la
                unna madhiri oru <b>comfortable-aa ellame share panra friend</b> 🤗
                vera yaarum kedaikala…
                Idhukku mela kedaikuma-nu kooda therila 🤷‍♀️💕
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border-l-4 border-orange-500">
              <Coffee className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Namma late-night talks 🌙💬 miss panren,
                sanda 😅 miss panren,
                namma emotional exchanges 🫂💕 miss panren…
                ellame miss panren 😭💔
                School mudinappo kooda neraya friends irundhanga 👥.
                Aana ippo avlo touch-la yaarum illa 😕.
                Konjam peru namma nenacha madhiri illa 🤷‍♀️.
                Aana <b>nee marama irupa nu naan namburen</b> 🤞💖
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100 rounded-2xl p-6 sm:p-8 my-8 border-2 border-rose-300 shadow-lg">
              <p className="text-xl text-center font-light text-rose-800 leading-relaxed">
                Ippo namma rendu perum life-la busy-aa irukom ⏳,
                so time spend panradhu konjam kami-aa aayiduchu ⏰.
                Aana  love for each other marala nu naan namburen 💛💞
                Ippo enaku konjam free time irukumbodhu 🕐
                namma memories ellam paakumbodhu 📸💭
                romba missing-aa iruku 😢.
                Enaku thirumba school life-a oru dhadava relive panna chance kedaicha 🏫
                namma spend pana moments dhan naan choose pannuven 🥹✨
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-400">
              <MessageCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Indha note eludumbodhe konjam emotional-aa iruku 💭💕.
                Unakum padicha apdi feel aagum nu namburen 🤗.
                Romba naal aachu indha madhiri oru letter 📝
                unna-ku naan eludhi…
                Adha eludumbodhe enaku romba happy-aa iruku 💌✨
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border-l-4 border-yellow-400">
              <Camera className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Un birthday-ku naan ready pannina video-vum apdi dhan 🎬🎥.
                Appo dhan namma photos ellam paathen 📸💭.
                Namma evlo kashta pattom 💪,
                andha road-la edutha photo ellam 🛣️
                romba smile-a kondu vandhuchu 😊😄
                Unaku eppadi  therila 🤷‍♀️,
                aana enaku <b>nee dhan epovume first, best, bestessssst friend di</b> 😘💖
                Insta-la paakura ella friends reels-layum 📱
                nee dhan nyabagam varum…
                Adhan unaku anupuren 😜🎁
                Ellame paathu vidu 👀,
                un free time-la kandippa paaru, seriyaa? 😌✨
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border-l-4 border-rose-500">
              <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Konjam emotional-aa pesinaalum paravailla 💕.
                Life-la olunga iru 🌟.
                En pecha appo-appo kelu 😄📞
                Yaar kittayum vambukku poi maatikaadha 🚫.
                Seriya… 💭
                First-la nee un kastam ellam solla maata 🤐,
                ketu ketu vaanganum 👂.
                Ippovum maathiruka maata nu-kooda theriyum 🤷‍♀️.
                Aana <b>dhaivaseinju edhachu na solradhukku irundhaa enta sollu</b> 💬.
                Naan kandippaa kepen 👂💖.
              </p>
            </div>

            <div className="text-center pt-6 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-300">
              <div className="flex items-center justify-center gap-2 text-rose-600 mb-6">
                <Heart className="w-6 h-6 fill-rose-500" />
                <p className="text-xl font-light">
                  <b>I will be there for you, always</b> 🤍🫂💖
                </p>
                <Heart className="w-6 h-6 fill-rose-500" />
              </div>
              <p className="text-2xl font-serif text-rose-800 mb-4">
                Thanks di, ellathukum 🙏💕
              </p>
              <p className="text-lg text-rose-700 font-medium">
                Love you a lot 💕💖🥰
              </p>
            </div>

            <div className="text-center pt-8 border-t-2 border-rose-200">
              <p className="text-lg text-rose-600 italic font-medium">
                Once again, <b>Happy Birthday</b> 🎉🎂✨🎈🎁
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-pink-200 via-rose-200 via-amber-200 to-orange-200 p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-600" />
              <p className="text-rose-800 font-light">
                Vayasu aagudhu nu feel pannaadha…
                Epovume azhaga dhan irupa 😌💖✨🌟
              </p>
              <Sparkles className="w-5 h-5 text-pink-600" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
