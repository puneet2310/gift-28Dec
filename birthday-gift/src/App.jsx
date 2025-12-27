import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Image, ImageIcon, Mic, Star, Lightbulb, ArrowLeft, Key, Gift, Calendar, Video, Lock, Unlock, HelpCircle, CheckCircle, Volume2, VolumeX, Play, Pause, MessageCircle, RefreshCw, Sparkles, Pin, ChevronDown, Mail, Feather, Stamp, Leaf, Type, Quote } from 'lucide-react';

// ==========================================
// 1. DATA & CONFIGURATION
// ==========================================

const PHOTOS = [
  "../1.jpg",
  "../2.jpg",
  "../3.jpg",
  "../4.jpg",
  "../5.jpg",
  "../6.jpg",
  "../6.jpg",
  "../6.jpg",
];
const stackp = [
  "../stack/1.jpg",
  "../stack/2.jpg",
  "../stack/3.jpg",
  "../stack/4.webp",
  "../stack/5.jpg",
  "../stack/6.jpg",
  "../stack/7.jpg",
  "../stack/8.jpg",
  "../stack/9.jpg",
  "../stack/10.jpg",
  "../stack/11.jpg",
  "../stack/12.jpg",
  "../stack/13.jpg",
  "../stack/14.jpg",
  "../stack/15.jpg",
  "../stack/16.jpg",
  "../stack/17.jpg",
  "../stack/18.jpg",
  "../stack/19.jpg",
  "../stack/20.jpg",
  "../stack/21.jpg",
  "../stack/22.jpg",
  "../stack/23.jpg",
];

const APP_DATA = {
  wifeName: "My Love",
  birthdayMessage: "Happy Birthday, My Queen!",
  musicPath: "../yaar.mp3", 
  startDate: "2021-08-02T00:00:00",
  boyCharPath: "https://static.vecteezy.com/system/resources/previews/024/785/828/original/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png", 
  girlCharPath: "https://static.vecteezy.com/system/resources/previews/024/785/747/original/3d-happy-cartoon-girl-on-transparent-background-generative-ai-png.png",
  
  carouselPhotos: PHOTOS,

  stackMemories: [
    { img: stackp[0], text: " Haayee yy smile... Yhi to hai jo hr pal ekdm hmko khus kr deta hai kwl aapki smile soch kr... Hehehehe" },
    { img: stackp[1], text: " You know what ??... Apki aisi cute cute photo dekh kr ekdm mja aa jati hai... kyu kyu gussa aa rha ky... abhi to ek aur hai aage dikhega... ekdm mst wali... Gussana mt babuuuuuu..." },
    { img: stackp[2], text: " Yy sb pic jb hm milte the ekdm starting starting me... hehehheee... Haayeee alllah(❁´◡`❁)" },
    { img: stackp[3], text: " Yy t-shirt sch me kitna acha lgta hai meko... aur aisee bus me saath me aana... Kitna pyaara sa pal hota hai jb bus me saath aate hai... Ufff" },
    { img: stackp[4], text: " Aisi selfiee... jisme aap ho ekdm cute si smile ho... aur bs aap ho... hme to khuch nhi chahyie bs aapki smile miljaye ek cute si, aur ek pyaari si nazar se aap jo dekhti hai,,, mai to usi me flat ho jata hu... hehehee " },
    { img: stackp[5], text: " Ab yy to ekdm ky khu ji... hot si ekdm, jo mere pass hai hehehheee... I am so special baby for you... Hai na ?" },
    { img: stackp[6], text: " Haayee bindi aur yy normal si bina filter ki pic... meko to ekdm gira deti hai sch me... haayeee alllah meri jaan tu kitni cute hai yrr sch me mn krta hai ekmd laptop me se niklu aur ekdm ghus jau andr tmhre me..." },
    { img: stackp[7], text: " Yy mulakat... jo aapse is mohabbat ke daur me hui hai... mn krta hai is daur ko yhi rok ke bs usi me rh jayee... na mn kre aapse dur jane ka, na mn kree khuch aur krne... bs aap aa jao saath me... zindagi ka safar yu hi suhana ho jaye." },
    { img: stackp[8], text: " Hahahaa... ab acchi acchi photo dekh li khuch pglu pglu bhi dekho cute cute... dekho kitni sundr lg rhi ho... mn krta hai ekdm gaal nochu tmhra baith kr hehehhee... ekdm pkd kr nochne lgu" },
    { img: stackp[9], text: " Haayeeee... yy aisee cute sa jb face bnati ho... aise narazgi wala chehra... hayeee allah... mn kre ekdm aa krr pucchiii le luu dher sara ekdm preshn kr du fir ek pyaari si smile niklwa du andr se aapke... Hehehee(❁´◡`❁)" },
    { img: stackp[10], text: " Some video call moments... wo cute cute moments screenshot me capture krne ki aadat... kitna mst lgta hai aapki aisi cute cute photos apne gallery me rkh lu aur bs ek din 100% storage tmhre photo se bhr jao." },
    { img: stackp[11], text: " To ky jrurt hai ab is photo ko explain krne ki ??? Hm to khuch kh hi nhi skte is photo ke baare me yrr... Is photo pr mai yy kh skta hu ki btao ky chahyie tmko... hehehheee" },
    { img: stackp[12], text: " Aisa lg rha meri dulhan hai mere saamne... lg rha ki shaadi ke baad tm mayke gyi ho aur vc ho rha... hehehheeee" },
    { img: stackp[13], text: " Kahe muh bnayi ho hmar jaan ho... Na na maaro na hmko... hm bure nhi hai bs aise higlti se mera phone ss le leta hai... Mai thode na liya hu, mera phone liya hai mere se bina ouche aur fir mujhe dikha diya, meri glti thode na hai, isilye no gussa" },
    { img: stackp[14], text: " Haayeee yrrr... kitna pyaar a rha ekdm... aisa feel ho rha na ki jaise heart me se koi chemical release ho rha ekdm dhk dhk ho rha hai... ekdm bs mn kr rha hai aa kr baith jau tmhre pass... ufff hehehehhehe" },
    { img: stackp[15], text: " Yy mulakat kitna pyaara tha...  mere liye kitna pyaara pyaara gift diya gya tha, mai to utna acha nhi bna paya hu... aise hardcopy me nhi de paya tereko... solly baby" },
    { img: stackp[16], text: " Heelooo my dear panda... my winter panda cutiee baby... sch me apki simle na... ho hi nhi skti aapki smile se achi kisi aur ki smile... uff babyyy you arre the Miss Universe babyy !!" },
    { img: stackp[17], text: " Bs dekhta rhu is tasweer ko... aur muskurata rhu dekh dekh kr bs aapko... hehehheee babyyy... !! Happpy Birthday !!!" },
    { img: stackp[18], text: " Yy wala suit meko bhut acha lgta hai... mn rta hai is suit me aapko saamne se dekhu aur fir ekdm yaar se gle lga lu yrrrr.... aaaaaannn babyyy i love youuuu.... bula loo mujhe apne pass babyyy" },
    { img: stackp[19], text: " Yy need se uth kr video call... hehehee ky hi to mst lgta hai.. aise niharat rhu bs aapko ji... hehehhehe i lovee you baby" },
    { img: stackp[20], text: " Ooo meri do chhoti wali babyy... my small babyyy hehehhee... tu to hr look me mujhe psnd hai yrrr... hayeee rabba... love you baby... you are my cute cute jaan... my cutiee sweetieeee" },
    { img: stackp[21], text: " Haayee geele bikhre baal... hehehee mai to sch me aise words me hr cheez explain hi na kr pau.... Bs bhutt saaraa love you love youuuu" },
    { img: stackp[22], text: " Happy Birthday, my love. Apki saari wishess aise  hi puri hoti rhe... aur aage bdhti rho meri jaan !!" },
    // { img: stackp[23], text: "Happy Birthday, my love. Here's to a lifetime of making more memories just like these." },
    // { img: stackp[7], text: "Happy Birthday, my love. Here's to a lifetime of making more memories just like these." },
  ],
  
  proposalVideo1: "../rec.mp4",
  proposalVideo2: "../rec2.mp4",

  timeline: [
    { date: "August 14, 2021", title: "First Glance", desc: "The moment our eyes met at the coffee shop. I knew something was special." },
    { date: "September 1, 2021", title: "First Date", desc: "Pizza, bad jokes, and the best night ever. You laughed at everything." },
    { date: "December 25, 2021", title: "First Trip", desc: "Getting lost in the mountains together and loving every second." },
    { date: "February 14, 2022", title: "I Love You", desc: "Said it under the stars. The universe stood still." },
    { date: "Today", title: "Happy Birthday", desc: "Celebrating the most amazing woman in the world. My everything." },
  ],

  reasonsList: [
    "Yy bhi koi baat hai puchne ki kyu special ho tm ?? Butt fir bhi bta hi deta hu mai...",
    "Hr subh ki good morning aur good night sirf tmse hi... hr din ka same ritual... hehehhee",
    "Tmhri itni care krna mere liye... ki mai khuch bolu ya na bolu to tmhe pata chl jata hai... uff babyyy meri jaan tu kitni special hai yrrr(❁´◡`❁)",
    "Kisi bhi baat ko mnwana ho... yy to chutki ka khel hai aapke liye... heheheee",
    "Aapke pyar krne ki adayein pyaari pyaari... thodu si baat se preshn ho jati ho... ",
    "Kitne pyaare-pyaare gifts bnati deti ho... btao koi bnayega aise kisi ldke ke liye... are ghnata koi bnata hai... yy to aapki ekdm cuteness hai... hehehhee",
    "Aur meri gltiyo ko maaf kr dena... haan mnana to pdta hi hai... lkin haan maaf to kr hi deti ho tm... hehehe baby meri cutieee",
    "Aur wo pyaari si smile aapki... jisko dekhne ke liye tarsu mai... aur aap patt pattt photo de kr hmko khus kr deti hai...",
    "Aur pta hai... jb aise apna muh bnati ho cute wala... ummm aisee muh bna kr... ekdm mst lgti ho babyyy",
    "Bas being you... that's more than enough for me to fall in love with you every single day all over again."
  ],

  quiz: [
    { question: "Where did we first meet?", options: ["The Library", "School", "At a Party", "Online"], correctAnswer: 1 },
    { question: "What is my favorite nickname for you?", options: ["Chinti", "Palkuu", "Babu", "Shona"], correctAnswer: 1 },
    { question: "How much do I love you?", options: ["A lot", "To the moon", "Infinity & Beyond", "More than pizza"], correctAnswer: 2 }
  ],

  messages: [
    { id: 1, title: "To My Best Friend", text: "Thank you for being the most amazing partner anyone could ask for. Tmhri presence hi mere liye sb khuch hai... jha tm ho bs wo mere liye sbse best place hai. Hmesa mere saath rhi ho meko hmesa shi rste pr chlati hai.. koi glti hai to daat lgati hai... ekdm best best best friend you are... Hehehehe" },
    { id: 2, title: "My Strength", text: "Your smile is the only thing I need to get through a bad day. You are my rock, my safe place, and my greatest adventure." },
    { id: 3, title: "The Little Things", text: "Teri chhoti chhoti cute cute si hrkate hi ekdm mujhe daily aur pyar me kuda deta hai... wo natkhat hrkate... chidhana preshn krna fir pyr krna... hehehhee yy sb ekdm mt pucho babyyyy... Ummaaa lovee youuu babyyy" },
    { id: 4, title: "Our Future", text: "I can't wait to grow old with you, creating a million more memories along the way. Happy Birthday, my love!" },
  ],

  voiceNotes: [
    { id: 1, duration: "0:45", date: "10:00 AM", src: "1st.m4a" },
    { id: 2, duration: "1:20", date: "10:05 AM", src: "W.m4a" },
    { id: 3, duration: "0:15", date: "10:10 AM", src: "3.m4a" },
  ],

  customTextChat: [
    "Happy birthday my dear love! Happpy birthday so so mucch my loveeee... Bhagwan aapki saari wishes puri kre meri jaan, meri cutiee piee ka aaj bday hai... heheheee meri jaan hai yy to... (❁´◡`❁) Aisi hi mukurati rho aage bdhti rho meri cutiee meri jaan... yy 4 saal ka safar aise hi krte krtee lifeitme ka safar bna rhe... My cutiee Happpy Birhtday ",
    "My bestie ji... Btayiee aapko kaun sa kaise gift chahyie bubu... hehee ab chotu motu gift to mai bhi de hi skta hu... hehehhee. Aj ka din best din hai bcoz today is the birthday of my love... haayee meri raani, mera shona, mera kuchu puchu, love youuuu so mucch... Happpy Birthdayyy tooo youuu !!!",
    "Apke pass aa kr bday mnane ka spna spna hi rhega... pta nhi kb aisa pyaaara sa mauka ayega ki acche se aapke saath me rh kr bday mna payee... aaaannnnn aise bday mnana hai... sb rhe butt mai bhi rhu ekdm mst bday celebrate krenge... haayee ekdm mje aayenge... cuteee day hoga wo sb to ekdm. ",
  ],

  imageMessages: [
    '../1.jpg', 
    '../2.jpg',  
  ],
};

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================
const TimeTogether = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date(APP_DATA.startDate);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - start;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(244,63,94,0.15)] rounded-2xl p-3 w-16 md:w-24 h-20 md:h-28 flex items-center justify-center mb-2 group hover:-translate-y-1 transition-transform duration-300">
        <span className="font-serif text-2xl md:text-4xl text-rose-600 font-bold group-hover:scale-110 transition-transform">{String(value).padStart(2, '0')}</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-400 rounded-full animate-ping opacity-75 hidden group-hover:block"></div>
      </div>
      <span className="text-xs md:text-sm font-bold text-rose-800/60 tracking-widest uppercase">{label}</span>
    </div>
  );

  return (
    <div className="w-full py-12 flex justify-center px-4">
      <div className="bg-white/30 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden max-w-4xl w-full text-center hover:shadow-rose-200/50 transition-shadow duration-500">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-50"></div>
        
        <div className="mb-8">
           <div className="inline-flex items-center gap-2 bg-rose-100/80 px-4 py-1.5 rounded-full text-rose-600 text-sm font-bold mb-4 shadow-sm">
              <Calendar className="w-4 h-4" /> <span>Counting Every Moment</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-2">Time Since We Met</h2>
           <p className="font-handwriting text-xl text-rose-700/80">"And I've loved you for every second of it."</p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
           <TimeUnit value={time.days} label="Days" />
           <div className="text-rose-300 text-4xl font-serif pt-4 md:pt-8 animate-pulse">:</div>
           <TimeUnit value={time.hours} label="Hours" />
           <div className="text-rose-300 text-4xl font-serif pt-4 md:pt-8 animate-pulse">:</div>
           <TimeUnit value={time.minutes} label="Mins" />
           <div className="text-rose-300 text-4xl font-serif pt-4 md:pt-8 animate-pulse">:</div>
           <TimeUnit value={time.seconds} label="Secs" />
        </div>
        
        <div className="absolute -bottom-10 -right-10 opacity-10 text-rose-900 transform rotate-12">
           <Heart size={150} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};
const FloatingElements = () => {
  const elements = ['❤️', '🧸', '🌹', '✨', '💌', '💑', '🧁'];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="absolute opacity-30 animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100 + 100}%`, fontSize: `${Math.random() * 2 + 1.5}rem`, animation: `float ${Math.random() * 8 + 10}s linear infinite`, animationDelay: `-${Math.random() * 10}s` }}>
          {elements[Math.floor(Math.random() * elements.length)]}
        </div>
      ))}
      <style>{` @keyframes float { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.5; } 90% { opacity: 0.5; } 100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; } } `}</style>
    </div>
  );
};

const SectionFloatingElements = () => {
  const elements = ['🧸', '🌹', '✨'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="absolute opacity-50 animate-float-section" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 2 + 1.5}rem`, animation: `floatSection ${Math.random() * 10 + 10}s linear infinite`, animationDelay: `-${Math.random() * 10}s` }}>
          {elements[Math.floor(Math.random() * elements.length)]}
        </div>
      ))}
      <style>{` @keyframes floatSection { 0% { transform: translateY(100px) rotate(0deg) opacity: 0; } 20% { opacity: 0.6; } 80% { opacity: 0.6; } 100% { transform: translateY(-100px) rotate(360deg); opacity: 0; } } .animate-float-section { animation: floatSection 15s linear infinite; } `}</style>
    </div>
  );
};

const VideoFrame = ({ src, placeholderText, icon: Icon }) => (
  <div className="relative w-full aspect-video bg-black/80 rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200/30 group">
    <video src={src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" controls loop muted playsInline onError={(e) => console.log("Video source not found, showing placeholder")}>Your browser does not support the video tag.</video>
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
       <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity"><Icon className="w-8 h-8 text-white" /></div>
    </div>
  </div>
);

// ==========================================
// 3. CARD & DISPLAY COMPONENTS
// ==========================================

const EnvelopeCard = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full h-64 flex items-center justify-center cursor-pointer group perspective-1000" onClick={() => setIsOpen(!isOpen)}>
      <div className={`absolute w-11/12 h-[90%] bg-[#fffaf0] rounded-lg shadow-sm border border-[#e6dccf] p-4 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out z-10 ${isOpen ? '-translate-y-24 z-30' : 'translate-y-0'}`}>
          <h3 className="font-serif text-[#8b5a2b] font-bold mb-2 text-lg">{message.title}</h3>
          <p className="font-handwriting text-[#5c4033] text-sm leading-relaxed">"{message.text}"</p>
      </div>
      <div className="absolute inset-0 bg-[#d2b48c] rounded-lg shadow-xl z-20 overflow-hidden flex items-end justify-center border-t-4 border-[#c19a6b]">
         <div className="w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[100px] border-b-[#c19a6b]/50 absolute bottom-0"></div>
         <div className="mb-6 font-serif text-[#5c4033]/50 font-bold tracking-widest text-xs uppercase">Tap to Read</div>
      </div>
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#bc9365] rounded-t-lg origin-top transition-all duration-500 z-40 ${isOpen ? 'rotate-x-180 opacity-0' : 'rotate-x-0'} shadow-md flex items-center justify-center`}><Heart className="text-[#8b4513] fill-[#8b4513] w-6 h-6" /></div>
    </div>
  );
};

const WaxSealCard = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`relative w-full transition-all duration-500 cursor-pointer ${isOpen ? 'h-80' : 'h-40'}`} onClick={() => setIsOpen(!isOpen)}>
       <div className={`absolute inset-0 bg-[#f4e4bc] shadow-lg border border-[#e0cda7] p-6 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden ${isOpen ? 'rounded-lg' : 'rounded-lg bg-[repeating-linear-gradient(45deg,#f4e4bc,#f4e4bc_10px,#ebdcb4_10px,#ebdcb4_20px)]'}`}>
          {!isOpen && (<div className="absolute z-10 flex flex-col items-center"><div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center shadow-md border-4 border-red-900/50"><div className="text-white font-serif font-bold text-xs">LOVE</div></div><p className="mt-2 font-serif text-[#8b5a2b] text-sm">Tap to Unfold</p></div>)}
          <div className={`transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 blur-sm'}`}><Feather className="w-8 h-8 text-[#8b5a2b] mx-auto mb-3" /><h3 className="text-xl font-serif text-[#5c4033] mb-2 text-center">{message.title}</h3><p className="font-handwriting text-gray-700 text-center text-lg">{message.text}</p></div>
       </div>
    </div>
  );
};

const LeafCard = ({ message }) => {
  return (
    <div className="relative w-full h-full min-h-[250px] bg-[#fffcf5] p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-[8px_8px_0px_rgba(139,90,43,0.2)] border border-[#e6dccf] group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
       <div className="absolute top-0 right-0 w-24 h-24 bg-[#e8f5e9] rounded-bl-full -z-0"></div>
       <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fce4ec] rounded-tr-full -z-0"></div>
       <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
          <div className="mb-4 text-[#556b2f]"><Leaf className="w-8 h-8" /></div>
          <h3 className="font-serif text-2xl text-[#5c4033] mb-4 border-b-2 border-[#d2b48c] pb-2 inline-block">{message.title}</h3>
          <p className="font-handwriting text-lg text-gray-600 leading-relaxed">"{message.text}"</p>
       </div>
    </div>
  );
};

const PostcardStyle = ({ message }) => {
  return (
    <div className="relative w-full bg-[#f3e5ab] p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer">
       <div className="border-2 border-dashed border-[#8b5a2b]/30 h-full p-4 flex flex-col relative">
          <div className="absolute top-0 right-0 w-16 h-20 border-2 border-[#8b5a2b]/50 flex items-center justify-center bg-white/50 rotate-3"><Stamp className="w-8 h-8 text-[#8b5a2b] opacity-50" /></div>
          <div className="mt-8"><h3 className="font-serif text-xl text-[#5c4033] font-bold mb-2">Dearest {APP_DATA.wifeName},</h3><p className="font-handwriting text-lg text-gray-800 leading-relaxed">{message.text}</p><p className="mt-4 text-right font-serif text-[#8b5a2b] font-bold">- {message.title}</p></div>
       </div>
    </div>
  );
};

// ==========================================
// 4. ANIMATION & INTERACTIVE COMPONENTS
// ==========================================
const FlappyLove = () => {
  const [gameState, setGameState] = useState('START'); // START, PLAYING, GAME_OVER
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [birdPos, setBirdPos] = useState(250);
  const [objPos, setObjPos] = useState(500);
  const [objHeight, setObjHeight] = useState(200);
  const [gravity, setGravity] = useState(0);
  
  const GAME_HEIGHT = 500;
  const GAME_WIDTH = 500; // Responsive width handled in CSS
  const OBSTACLE_WIDTH = 60;
  const OBSTACLE_GAP = 170; // Gap size for the bird to fly through
  const BIRD_SIZE = 40;
  const JUMP_STRENGTH = -8; // How high it jumps
  const GRAVITY_STRENGTH = 0.6; // How fast it falls
  const SPEED = 3.5; // Horizontal speed

  const requestRef = useRef();

  // Game Loop
  const updateGame = () => {
    setBirdPos((prev) => prev + gravity);
    setGravity((prev) => prev + GRAVITY_STRENGTH);

    setObjPos((prev) => {
      if (prev < -OBSTACLE_WIDTH) {
        setScore((s) => s + 1);
        setObjHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 100)) + 50);
        return 500; // Reset to right side
      }
      return prev - SPEED;
    });

    requestRef.current = requestAnimationFrame(updateGame);
  };

  // Collision Detection
  useEffect(() => {
    let cleanup;
    if (gameState === 'PLAYING') {
      requestRef.current = requestAnimationFrame(updateGame);
      
      // Check Collisions
      const birdTop = birdPos;
      const birdBottom = birdPos + BIRD_SIZE;
      const birdLeft = 50; // Fixed horizontal position
      const birdRight = 50 + BIRD_SIZE;

      const objTopBottom = objHeight;
      const objBottomTop = objHeight + OBSTACLE_GAP;
      const objLeft = objPos;
      const objRight = objPos + OBSTACLE_WIDTH;

      const hitTopPipe = birdLeft < objRight && birdRight > objLeft && birdTop < objTopBottom;
      const hitBottomPipe = birdLeft < objRight && birdRight > objLeft && birdBottom > objBottomTop;
      const hitGround = birdBottom >= GAME_HEIGHT;
      const hitCeiling = birdTop <= 0;

      if (hitTopPipe || hitBottomPipe || hitGround || hitCeiling) {
        setGameState('GAME_OVER');
        cancelAnimationFrame(requestRef.current);
        if (score > highScore) setHighScore(score);
      }
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, birdPos, objPos, gravity, objHeight, score, highScore]);

  const handleClick = () => {
    if (gameState === 'PLAYING') {
      setGravity(JUMP_STRENGTH);
    } else if (gameState === 'START' || gameState === 'GAME_OVER') {
      setBirdPos(250);
      setGravity(0);
      setObjPos(500);
      setScore(0);
      setGameState('PLAYING');
    }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/80 rounded-full shadow-md mb-6 animate-bounce">
          <Gamepad2 className="w-8 h-8 text-purple-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-4">Flappy Love</h2>
        <p className="text-rose-800/70 mb-8 font-handwriting text-lg">
          It's tough, like love sometimes! Tap to fly and avoid the vines.
        </p>

        {/* Game Container */}
        <div 
          onClick={handleClick}
          className="relative w-full h-[500px] bg-gradient-to-b from-sky-200 to-sky-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer select-none mx-auto max-w-[500px]"
        >
          {/* Background Clouds */}
          <div className="absolute top-10 left-10 text-6xl opacity-40 animate-pulse">☁️</div>
          <div className="absolute top-20 right-20 text-5xl opacity-30 animate-pulse delay-700">☁️</div>

          {/* Bird (Heart) */}
          <div 
            className="absolute left-[50px] text-4xl drop-shadow-lg transition-transform"
            style={{ 
              top: `${birdPos}px`, 
              width: `${BIRD_SIZE}px`, 
              height: `${BIRD_SIZE}px`,
              transform: `rotate(${gravity * 5}deg)` // Tilt animation
            }}
          >
            🧚‍♀️
          </div>

          {/* Obstacles */}
          {gameState !== 'START' && (
            <>
              {/* Top Pipe */}
              <div 
                className="absolute top-0 bg-gradient-to-b from-green-400 to-green-600 border-b-4 border-green-700 rounded-b-xl"
                style={{ 
                  left: `${objPos}px`, 
                  width: `${OBSTACLE_WIDTH}px`, 
                  height: `${objHeight}px` 
                }}
              ></div>
              {/* Bottom Pipe */}
              <div 
                className="absolute bottom-0 bg-gradient-to-t from-green-400 to-green-600 border-t-4 border-green-700 rounded-t-xl"
                style={{ 
                  left: `${objPos}px`, 
                  width: `${OBSTACLE_WIDTH}px`, 
                  height: `${GAME_HEIGHT - objHeight - OBSTACLE_GAP}px` 
                }}
              ></div>
            </>
          )}

          {/* UI Layer */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10">
            {gameState === 'START' && (
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center animate-bounce">
                <h3 className="text-2xl font-bold text-rose-600 mb-2">Ready to Fly?</h3>
                <p className="text-gray-600">Tap anywhere to start!</p>
              </div>
            )}
            
            {gameState === 'PLAYING' && (
              <div className="absolute top-10 text-6xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                {score}
              </div>
            )}

            {gameState === 'GAME_OVER' && (
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border-4 border-rose-200">
                <h3 className="text-3xl font-bold text-rose-600 mb-2">Ouch! 🤕</h3>
                <p className="text-gray-600 mb-4">You hit a vine!</p>
                <div className="flex gap-8 justify-center mb-6">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Score</p>
                    <p className="text-4xl font-bold text-gray-800">{score}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Best</p>
                    <p className="text-4xl font-bold text-yellow-500">{highScore}</p>
                  </div>
                </div>
                <button className="bg-rose-500 text-white px-6 py-2 rounded-full font-bold shadow-lg animate-pulse">
                  Tap to Retry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
import confetti from 'canvas-confetti'; // Remove if you don't have this package
import LoveSudoku from './LoveSudoku';
import RelationshipContract from './RelationshipContract';
import MoodClinic from './ModdyClinic';
import CrackTheCode from './CrackTheCode';
import MemoryMatchGame from './MemoryMatchGame';
import HangingGallery from './HangingGallery';
import HeroVerticalRopes from './HeroVerticalRopes';
import TimelineSection from './TimeLineSection';
import PhotoCarousel from './PhotoCarousel';

const CakeCeremony = () => {
  const [step, setStep] = useState(0); 
  const [candlesExtinguished, setCandlesExtinguished] = useState(0);
  const [isListening, setIsListening] = useState(false);
  
  // Refs to handle logic instantly without waiting for re-renders
  const sectionRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);
  const candleCountRef = useRef(0); 
  const isFinishedRef = useRef(false); // This stops the loop

  // 1. Scroll Detection
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && step === 0) {
        setStep(1); 
      }
    }, { threshold: 0.5 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [step]);

  // 2. Animation Sequence
  useEffect(() => {
    if (step === 1) setTimeout(() => setStep(2), 3000); 
    if (step === 2) setTimeout(() => setStep(3), 2000); 
    if (step === 3) setTimeout(() => setStep(4), 1500); 
  }, [step]);

  // 3. Microphone Logic
  const startListening = async () => {
    if (isFinishedRef.current) return; // Don't start if already done

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;
      setIsListening(true);
      detectBlow();
    } catch (err) {
      alert("Please allow microphone access to blow out the candles! 🎂");
    }
  };

  const detectBlow = () => {
    // STOPPING CONDITION: If we are finished, stop checking immediately.
    if (isFinishedRef.current || candleCountRef.current >= 5) return;
    
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    
    const checkVolume = () => {
      // Check stop condition again inside the loop
      if (isFinishedRef.current || candleCountRef.current >= 5) return;

      if (analyserRef.current) {
        analyserRef.current.getByteFrequencyData(dataArray);
        const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
        
        // Threshold
        if (volume > 40) { 
          blowOneCandle();
          // Wait a bit before checking again to prevent instant clearing
          setTimeout(() => requestAnimationFrame(checkVolume), 500); 
        } else {
          requestAnimationFrame(checkVolume);
        }
      }
    };
    checkVolume();
  };

  const blowOneCandle = () => {
    candleCountRef.current += 1;
    setCandlesExtinguished(prev => prev + 1);

    if (candleCountRef.current >= 5) {
      isFinishedRef.current = true; // LOCK the loop
      finishCeremony();
    }
  };
  
  const finishCeremony = () => {
    setStep(5);
    setIsListening(false);
    
    if (audioContextRef.current) audioContextRef.current.close();
    
    // Fire Confetti exactly 3 times then stop
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } }), 500);
      setTimeout(() => confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } }), 1000);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 bg-rose-50/50">
      
      <div className={`text-center max-w-2xl px-6 transition-all duration-1000 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">Let's Celebrate Together</h2>
        <p className="text-xl text-gray-700 font-handwriting leading-relaxed">
          "I might not be there to hold your hand today, but my heart is right beside you. 
          Close your eyes, make a wish, and let's cut this cake together." ❤️
        </p>
      </div>

      <div className={`relative mt-16 transition-all duration-1000 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        
        {/* Simple Cake Container */}
        <div className="relative w-72 h-64 flex items-end justify-center">
          
          {/* Plate */}
          <div className="absolute bottom-0 w-80 h-4 bg-gray-200 rounded-full shadow-xl"></div>
          
          {/* Cake Base Layer */}
          <div className={`absolute bottom-4 w-64 h-24 bg-[#5D4037] rounded-lg shadow-inner flex items-center justify-center transition-all duration-700 delay-300 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
             <div className="w-full h-2 bg-[#8D6E63] absolute top-2 opacity-50"></div>
          </div>

          {/* Cake Top Layer */}
          <div className={`absolute bottom-28 w-56 h-20 bg-[#4E342E] rounded-lg shadow-lg z-10 transition-all duration-700 delay-700 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
          </div>

          {/* Candles */}
          <div className="absolute bottom-48 flex gap-6 z-20">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center transition-all duration-500`}
                style={{ 
                  transitionDelay: `${i * 200}ms`,
                  transform: step >= 3 ? 'translateY(0)' : 'translateY(-200px)',
                  opacity: step >= 3 ? 1 : 0
                }}
              >
                {/* Flame */}
                <div className={`w-4 h-6 bg-orange-400 rounded-full blur-[2px] mb-1 transition-all duration-300 ${candlesExtinguished > i ? 'opacity-0 scale-0' : 'animate-flicker opacity-100'}`}>
                  <div className="w-2 h-3 bg-yellow-200 rounded-full mx-auto mt-2"></div>
                </div>
                {/* Stick */}
                <div className="w-2 h-12 bg-gradient-to-b from-pink-300 to-rose-400 border border-rose-500 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 h-24 flex justify-center items-center">
          {step === 4 && !isListening && (
            <button 
              onClick={startListening} 
              className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-600 hover:scale-105 transition-all animate-bounce flex items-center gap-2"
            >
              <Mic className="w-5 h-5" /> Enable Mic & Blow!
            </button>
          )}

          {isListening && step < 5 && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 h-6 items-end">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-1 bg-rose-500 animate-pulse" style={{height: `${Math.random() * 20 + 5}px`}}></div>
                ))}
              </div>
              <p className="text-rose-600 font-bold text-sm">Blow into the mic...</p>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in-up text-center">
              <h3 className="text-3xl font-serif text-rose-900 mb-2">Happy Birthday! 🥳</h3>
              <p className="text-gray-600">You did it! I love you so much.</p>
            </div>
          )}
        </div>

      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.9) skewX(2deg); opacity: 0.9; }
          25% { transform: scale(1.1) skewX(-2deg); opacity: 1; }
        }
        .animate-flicker { animation: flicker 0.1s infinite alternate; }
      `}</style>
    </section>
  );
};
const TextRotator = () => {
  const words = ["Bestie", "Love", "Queen"];
  const [index, setIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState('opacity-100');
  useEffect(() => {
    const interval = setInterval(() => { setFadeProp('opacity-0'); setTimeout(() => { setIndex((prev) => (prev + 1) % words.length); setFadeProp('opacity-100'); }, 500); }, 2500); 
    return () => clearInterval(interval);
  }, []);
  return <span className={`block text-5xl md:text-8xl text-rose-600 font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600 transition-opacity duration-500 ${fadeProp} leading-tight pb-4`}>My {words[index]}! 👸👑</span>;
}

const AliveCharacter = ({ type, action, position, imgSrc }) => {
  const isGirl = type === 'girl';
  let animClass = "animate-breathe"; 
  if (action === 'walking') animClass = "animate-hop-walk";
  if (action === 'cutting') animClass = "animate-lean-forward";
  if (action === 'celebrating') animClass = "animate-jump-joy";
  if (action === 'hugging') animClass = "animate-breathe"; 
  const handleError = (e) => {
    if (type === 'boy') e.target.src = "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
    if (type === 'girl') e.target.src = "https://cdn-icons-png.flaticon.com/512/2922/2922561.png";
  };
  return (
    <div className={`absolute bottom-20 transition-all duration-[1000ms] ease-linear z-20 ${position}`} style={{ width: '180px', height: '240px' }}>
       <div className={`relative w-full h-full ${animClass} ${action === 'hugging' ? (isGirl ? '-rotate-12' : 'rotate-12') : ''}`}>
         <img src={imgSrc} alt={type} onError={handleError} className={`w-full h-full object-contain filter drop-shadow-2xl ${action === 'hugging' ? 'scale-110' : ''}`} />
         {isGirl && action === 'cutting' && <div className="absolute top-1/2 -right-4 text-6xl animate-chop origin-bottom-left z-30">🔪</div>}
         {action === 'celebrating' && <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-7xl animate-bounce">🙌</div>}
         {action === 'hugging' && <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-5xl animate-pulse">❤️</div>}
       </div>
       <style>{` @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02) translateY(-2px); } } @keyframes hopWalk { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-15px) rotate(2deg) scaleY(1.05); } } @keyframes leanForward { 0% { transform: rotate(0); } 100% { transform: rotate(-10deg) translateY(5px); } } @keyframes chop { 0%, 100% { transform: rotate(-45deg); } 50% { transform: rotate(-10deg); } } @keyframes jumpJoy { 0%, 100% { transform: translateY(0) scale(1, 1); } 40% { transform: translateY(-30px) scale(0.9, 1.1); } 50% { transform: translateY(-30px) scale(1.1, 0.9); } 60% { transform: translateY(0) scale(1.1, 0.9); } } .animate-breathe { animation: breathe 3s infinite ease-in-out; } .animate-hop-walk { animation: hopWalk 0.5s infinite ease-in-out; } .animate-lean-forward { animation: leanForward 0.5s forwards ease-out; } .animate-chop { animation: chop 0.8s infinite ease-in-out; } .animate-jump-joy { animation: jumpJoy 0.8s infinite ease-in-out; } `}</style>
    </div>
  );
};

const CelebrationAnimation = () => {
  const [phase, setPhase] = useState('start'); 
  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 500)); setPhase('walking');
      await new Promise(r => setTimeout(r, 2000)); setPhase('standing');
      await new Promise(r => setTimeout(r, 500)); setPhase('cake');
      await new Promise(r => setTimeout(r, 1500)); setPhase('cut');
      await new Promise(r => setTimeout(r, 2000)); setPhase('celebrate');
      await new Promise(r => setTimeout(r, 2500)); setPhase('hugging');
    };
    sequence();
  }, []);
  return (
    <div className="w-full h-full min-h-[600px] relative perspective-container overflow-hidden rounded-[3rem] shadow-2xl bg-gradient-to-b from-sky-100 via-rose-50 to-rose-100 border-8 border-white">
       <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>🎈</div>
       <div className="absolute top-20 right-10 text-6xl animate-bounce" style={{ animationDuration: '4s' }}>🎈</div>
       <div className="absolute bottom-0 w-full h-[200px] bg-green-100/80 transform-style-3d origin-bottom transform rotateX(40deg) z-0 border-t-8 border-green-200/50">
          <div className={`absolute top-16 left-[28%] w-32 h-8 bg-black/10 rounded-full filter blur-xl transition-all duration-[2000ms] ${phase === 'start' ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`absolute top-16 right-[28%] w-32 h-8 bg-black/10 rounded-full filter blur-xl transition-all duration-[2000ms] ${phase === 'start' ? 'opacity-0' : 'opacity-100'}`}></div>
       </div>
       <AliveCharacter type="boy" imgSrc={APP_DATA.boyCharPath} action={phase === 'walking' ? 'walking' : phase === 'celebrate' ? 'celebrating' : phase === 'hugging' ? 'hugging' : 'idle'} position={phase === 'start' ? '-right-64 opacity-0' : phase === 'walking' ? 'right-[15%] opacity-100' : phase === 'hugging' ? 'right-[35%] opacity-100 z-30' : 'right-[25%] opacity-100'} />
       <AliveCharacter type="girl" imgSrc={APP_DATA.girlCharPath} action={phase === 'walking' ? 'walking' : phase === 'cut' ? 'cutting' : phase === 'celebrate' ? 'celebrating' : phase === 'hugging' ? 'hugging' : 'idle'} position={phase === 'start' ? '-left-64 opacity-0' : phase === 'walking' ? 'left-[15%] opacity-100' : phase === 'hugging' ? 'left-[35%] opacity-100 z-30' : 'left-[25%] opacity-100'} />
       <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-700 z-10 ${phase === 'start' || phase === 'walking' || phase === 'standing' ? '-top-[300px] opacity-0' : 'top-[auto] opacity-100 bounce-drop'} ${phase === 'hugging' ? 'opacity-0 scale-0' : 'opacity-100'}`}>
          <div className="w-64 h-40 bg-amber-800 rounded-xl relative shadow-2xl flex items-end justify-center">
             <div className="absolute -top-3 -left-3 w-72 h-6 bg-amber-900 rounded-md shadow-md"></div>
             <div className="absolute bottom-4 mb-4 text-[9rem] filter drop-shadow-xl transition-transform hover:scale-110 cursor-pointer z-20">🎂</div>
             <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-orange-400 rounded-full blur-[2px] animate-pulse z-30"></div>
             {phase === 'cut' && <div className="absolute -top-24 text-7xl animate-ping z-40">✨</div>}
          </div>
       </div>
       {(phase === 'celebrate' || phase === 'hugging') && (
         <div className="absolute inset-0 z-50 pointer-events-none">
           {[...Array(50)].map((_, i) => (<div key={i} className="absolute text-3xl animate-confetti-fall" style={{ left: `${Math.random() * 100}%`, top: `-10%`, animationDelay: `${Math.random() * 2}s`, animationDuration: `${Math.random() * 3 + 2}s` }}>{['🎊', '🎉', '✨', '❤️', '🍰', '🎁'][i % 6]}</div>))}
         </div>
       )}
       <div className="absolute top-10 w-full text-center font-bold text-4xl text-rose-600 animate-pulse z-40 font-serif drop-shadow-sm tracking-wide bg-white/30 backdrop-blur-sm py-2">
          {phase === 'walking' && "Here they come... ❤️"}
          {phase === 'standing' && "Ready for the surprise? 🎁"}
          {phase === 'cake' && "Yummy! 🎂"}
          {phase === 'cut' && "Make a wish! ✨"}
          {phase === 'celebrate' && "Hip Hip Hooray!!! 🙌"}
          {phase === 'hugging' && "Best Birthday Hug! 🤗"}
       </div>
       <style>{` .perspective-container { perspective: 1000px; } .bounce-drop { animation: bounceDrop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); } @keyframes bounceDrop { 0% { transform: translate(-50%, -300%); opacity: 0; } 60% { transform: translate(-50%, 10%); opacity: 1; } 100% { transform: translate(-50%, 0); opacity: 1; } } @keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(600px) rotate(720deg); opacity: 0; } } .animate-confetti-fall { animation: confettiFall linear forwards; } `}</style>
    </div>
  );
};




const PolaroidGallery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10 relative">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {APP_DATA.carouselPhotos.map((photo, index) => {
            const randomRotate = (index % 3 === 0) ? -2 : (index % 3 === 1) ? 3 : -1;
            const randomY = (index % 2 === 0) ? 0 : 20;
            return (
                <div key={index} className="group relative bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-2xl rounded-sm transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer" style={{ transform: `rotate(${randomRotate}deg) translateY(${randomY}px)`, width: '160px' }}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-6 md:h-8 bg-white/30 rotate-1 backdrop-blur-sm border-l border-r border-white/40 shadow-sm z-10"></div>
                  <div className="w-full h-32 md:h-48 bg-gray-100 overflow-hidden relative">
                      <img src={photo} alt="Memory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute bottom-2 md:bottom-3 left-0 right-0 text-center">
                      <p className="font-handwriting text-gray-600 text-sm md:text-lg group-hover:text-rose-500 transition-colors">#{index + 1}</p>
                  </div>
                </div>
            )
          })}
      </div>
    </div>
  );
};


// --- STACK GALLERY WITH DYNAMIC TEXT ---

const StackGallery = () => {
  const [topIndex, setTopIndex] = useState(0);
  const total = APP_DATA.stackMemories.length; 
  const [displayedText, setDisplayedText] = useState('');

  const handleNext = () => { setTopIndex((prev) => (prev + 1) % total); };

  useEffect(() => {
     setDisplayedText('');
     const fullText = APP_DATA.stackMemories[topIndex].text;
     let i = 0;
     const timer = setInterval(() => {
        if (i < fullText.length) { setDisplayedText((prev) => prev + fullText.charAt(i)); i++; } else { clearInterval(timer); }
     }, 30);
     return () => clearInterval(timer);
  }, [topIndex]); 

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[500px] relative gap-12 px-4">
       
       {/* PHOTO STACK SECTION */}
       <div className="relative w-72 h-96 cursor-pointer flex-shrink-0" onClick={handleNext}>
          {APP_DATA.stackMemories.map((memory, idx) => {
             const diff = (idx - topIndex + total) % total; 
             if (diff > 3) return null; 
             return (
               <div key={idx} className={`absolute inset-0 bg-white p-3 shadow-2xl rounded-xl border border-gray-200 transition-all duration-700 ease-in-out transform ${diff === 0 ? 'z-30 scale-100 rotate-0 hover:rotate-2' : ''} ${diff === 1 ? 'z-20 scale-95 translate-y-4 rotate-3 opacity-90' : ''} ${diff === 2 ? 'z-10 scale-90 translate-y-8 -rotate-2 opacity-80' : ''} ${diff === 3 ? 'z-0 scale-85 translate-y-12 rotate-1 opacity-0' : ''} `}>
                  <img src={memory.img} className="w-full h-full object-cover rounded-lg pointer-events-none" alt="stack" />
                  {diff === 0 && <div className="absolute bottom-4 right-4 bg-rose-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">Tap Me!</div>}
               </div>
             )
          })}
       </div>

       {/* TEXT SECTION */}
       {/* Changes made:
           1. Removed fixed 'h-48' and replaced with 'min-h-[200px] h-auto'.
           2. Changed 'overflow-hidden' to 'overflow-visible' so text isn't cut off.
           3. Added 'flex-col' to center text properly.
       */}
       <div className="w-full md:w-1/2 min-h-[200px] md:h-64 h-auto bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_30px_rgba(244,63,94,0.1)] border border-white/40 flex flex-col items-center justify-center relative overflow-visible group">
          
          <div className="absolute -top-10 -left-10 w-24 h-24 border-t-4 border-l-4  rounded-tl-xl opacity-80"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-4 border-r-4  rounded-br-xl opacity-80"></div>
          <div className="absolute top-4 right-4 text-rose-400 opacity-80"><Quote className="w-12 h-12" /></div>
          
          {/* Changes made to Text:
             1. Changed 'text-2xl' to 'text-xl md:text-3xl'. 
                (Smaller text on mobile fits more content).
          */}
          <p className="font-handwriting text-xl md:text-3xl text-rose-900 leading-relaxed text-center drop-shadow-sm">
            "{displayedText}"
            <span className="animate-pulse text-yellow-400">|</span>
          </p>
       </div>
    </div>
  );
};


const ReasonsGenerator = () => {
  const [reason, setReason] = useState("Why do I love you? Let me count the ways...");
  const [animate, setAnimate] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  // NEW: State to track which number we are on. Starts at 0 (the first item).
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateReason = () => {
    setAnimate(true);
    setRotation(Math.random() * 4 - 2); 

    setTimeout(() => {
        // 1. Get the reason at the current index
        const nextReason = APP_DATA.reasonsList[currentIndex];
        
        // 2. Set the reason
        setReason(nextReason);
        
        // 3. Update the index for the NEXT click. 
        // The % operator ensures that when we reach the end, it loops back to 0.
        setCurrentIndex((prevIndex) => (prevIndex + 1) % APP_DATA.reasonsList.length);
        
        setAnimate(false);
    }, 400);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-transparent -z-10"></div>
       <div className="max-w-xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-sm"><Sparkles className="w-4 h-4" /><span>Infinite Reasons</span></div>
          
          <h2 className="text-4xl font-serif text-gray-800 mb-12">Why You Are Special</h2>
          
          <div className="relative h-64 mb-10 group">
             <div className="absolute inset-0 bg-white rounded-2xl shadow-md transform rotate-3 scale-95 opacity-60 z-0"></div>
             <div className="absolute inset-0 bg-white rounded-2xl shadow-md transform -rotate-2 scale-98 opacity-80 z-10"></div>
             <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center p-8 z-20 border border-rose-100 transition-all duration-500 ease-out" style={{ transform: `rotate(${rotation}deg)` }}>
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(#000000_1px,transparent_1px)] bg-[size:100%_2rem] mt-8"></div>
                
                <p className={`text-2xl md:text-3xl font-handwriting text-gray-700 leading-snug transition-all duration-500 ${animate ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>"{reason}"</p>
                
                <div className="absolute bottom-4 right-4 text-rose-300"><Heart className="w-6 h-6 fill-current opacity-50" /></div>
             </div>
          </div>
          
          <button onClick={generateReason} className="group relative inline-flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-rose-300/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span><RefreshCw className={`w-5 h-5 ${animate ? 'animate-spin' : ''}`} /><span>Another Reason</span>
          </button>
       </div>
    </section>
  )
}

const VoiceNoteBubble = ({ duration, date, src }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => { if (!audioRef.current) return; if (playing) { audioRef.current.pause(); } else { audioRef.current.play().catch(e => console.log('Audio playback error', e)); } };
  const handlePlay = () => setPlaying(true);
  const handlePause = () => setPlaying(false);
  const handleEnded = () => setPlaying(false);
  return (
    <div className="flex flex-col gap-1 items-start">
      <audio ref={audioRef} src={src} onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded} onError={(e) => console.log("Audio source error", e)} />
      <div className="flex items-end gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500 p-[2px]"><div className="w-full h-full bg-white rounded-full flex items-center justify-center"><span className="text-xs">🤴</span></div></div>
        <div className="bg-rose-100 text-gray-800 rounded-2xl rounded-bl-none p-3 px-4 min-w-[200px] shadow-md">
           <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">{playing ? <Pause className="w-4 h-4 fill-current text-rose-500" /> : <Play className="w-4 h-4 fill-current ml-0.5 text-rose-500" />}</button>
              <div className="flex flex-col gap-1 flex-1">
                 <div className="flex items-center gap-[2px] h-6 opacity-80">{[...Array(15)].map((_, i) => (<div key={i} className={`w-1 bg-rose-400 rounded-full ${playing ? 'animate-pulse' : ''}`} style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />))}</div>
                 <span className="text-[10px] opacity-70 font-medium">{duration}</span>
              </div>
           </div>
        </div>
      </div>
      <span className="text-[10px] text-gray-400 ml-10">{date}</span>
    </div>
  );
};

const CustomTextChat = ({ messages }) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((text, idx) => (
        <div key={idx} className="flex items-end justify-start animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500 p-[2px] flex-shrink-0 mr-2"><div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs">👨</div></div>
          <div className="bg-rose-100 text-gray-800 rounded-2xl rounded-bl-none p-3 text-sm shadow-sm">{text}</div>
        </div>
      ))}
      <div className="text-left text-[10px] text-gray-400 ml-10">Sent now</div>
    </div>
  );
};

const VoiceNoteList = ({ notes }) => {
  return (
    <div className="flex flex-col gap-4">
       <div className="flex items-end justify-start mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500 p-[2px] flex-shrink-0 mr-2"><div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs">👨</div></div>
          <div className="bg-rose-100 text-gray-800 rounded-2xl rounded-bl-none p-3 px-4 max-w-[85%] text-sm shadow-sm">Hey love! I recorded a few things for you. Listen when you have a moment... 🌹</div>
       </div>
       {notes.map((note) => (<VoiceNoteBubble key={note.id} duration={note.duration} date={note.date} src={note.src} />))}
       <div className="text-left text-[10px] text-gray-400 ml-10 mt-2">Seen just now</div>
    </div>
  );
};

const ImageMessagesList = ({ images }) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      {images.map((imgSrc, idx) => (
        <div key={idx} className="flex items-end gap-2 animate-fade-in-up" style={{ animationDelay: `${idx * 0.3}s` }}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-500 p-[2px] flex-shrink-0"><div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs">👨</div></div>
            <div className="bg-rose-100 rounded-xl rounded-bl-none p-1 shadow-lg max-w-[70%] overflow-hidden"><img src={imgSrc} alt={`Hubby Pic ${idx + 1}`} className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform" /></div>
        </div>
      ))}
      <div className="text-left text-[10px] text-gray-400 ml-10">Sent now</div>
    </div>
  );
};

const InstaCard = ({ children, title, icon }) => (
  <div className="bg-white/90 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 backdrop-blur-md h-[550px] flex flex-col">
    <div className="bg-white/50 p-4 border-b border-gray-100 flex items-center gap-4 sticky top-0 z-20 backdrop-blur-sm">
       <div className="relative">
         <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><div className="w-full h-full bg-gradient-to-tr from-rose-400 to-orange-400 flex items-center justify-center text-white">👨</div></div>
         <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
       </div>
       <div><h3 className="font-bold text-gray-900">{title || "Hubby ❤️"}</h3><p className="text-xs text-gray-500">Active now</p></div>
       <div className="ml-auto">{icon || <Video className="w-6 h-6 text-rose-500" />}</div>
    </div>
    <div className="p-4 bg-white/50 flex-1 overflow-y-auto">
       <div className="text-center text-xs text-gray-400 mb-6">Today</div>
       {children}
    </div>
    <div className="p-3 border-t border-gray-100 flex items-center gap-3 bg-white/50">
       <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white"><Video className="w-4 h-4" /></div>
       <div className="flex-1 bg-white rounded-full h-10 px-4 flex items-center text-gray-400 text-sm shadow-inner">Message...</div>
       <Heart className="w-6 h-6 text-rose-500" />
    </div>
  </div>
);

// --- MESSAGES SECTION (Replaces Story Mode) ---
const MessagesSection = () => {
  return (
    <section className="min-h-screen py-24 px-4 relative z-10 bg-transparent overflow-hidden">
       <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
       <SectionFloatingElements /> 
       <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="inline-block p-2 bg-rose-50 rounded-full mb-4"><Mail className="w-8 h-8 text-rose-400" /></div>
             <h2 className="text-4xl md:text-6xl font-serif text-[#5c4033] mb-4">Notes From The Heart</h2>
             <p className="text-[#8b5a2b] font-handwriting text-xl">Open these to see how much you mean to me...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
             <div className="flex flex-col gap-2"><span className="text-xs text-center text-gray-400 uppercase tracking-widest mb-2">Style 1: The Letter</span><EnvelopeCard message={APP_DATA.messages[0]} /></div>
             <div className="flex flex-col gap-2"><span className="text-xs text-center text-gray-400 uppercase tracking-widest mb-2">Style 2: The Secret</span><WaxSealCard message={APP_DATA.messages[1]} /></div>
             <div className="flex flex-col gap-2"><span className="text-xs text-center text-gray-400 uppercase tracking-widest mb-2">Style 3: The Nature</span><LeafCard message={APP_DATA.messages[2]} /></div>
             <div className="flex flex-col gap-2"><span className="text-xs text-center text-gray-400 uppercase tracking-widest mb-2">Style 4: The Vintage</span><PostcardStyle message={APP_DATA.messages[3]} /></div>
          </div>
       </div>
    </section>
  );
};

const WatchingTeddy = () => {
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = Math.min(6, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 20);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      setEyePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div ref={containerRef} className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 z-50">
       <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <circle cx="20" cy="25" r="15" fill="#8B4513" /> <circle cx="80" cy="25" r="15" fill="#8B4513" /> <circle cx="20" cy="25" r="8" fill="#CD853F" /> <circle cx="80" cy="25" r="8" fill="#CD853F" />
          <circle cx="50" cy="50" r="35" fill="#8B4513" /> <ellipse cx="50" cy="60" rx="14" ry="10" fill="#CD853F" /> <ellipse cx="50" cy="56" rx="6" ry="4" fill="#3E2723" /> <path d="M 45 65 Q 50 70 55 65" stroke="#3E2723" strokeWidth="2" fill="none" />
          <g> <circle cx="38" cy="45" r="8" fill="white" /> <circle cx="62" cy="45" r="8" fill="white" /> <circle cx={38 + eyePos.x} cy={45 + eyePos.y} r="4" fill="black" /> <circle cx={62 + eyePos.x} cy={45 + eyePos.y} r="4" fill="black" /> <circle cx={36 + eyePos.x} cy={43 + eyePos.y} r="1.5" fill="white" /> <circle cx={60 + eyePos.x} cy={43 + eyePos.y} r="1.5" fill="white" /> </g>
       </svg>
       <div className="absolute -top-10 -right-20 bg-white px-3 py-1 rounded-xl rounded-bl-none text-xs font-bold text-rose-600 shadow-md animate-bounce opacity-0 hover:opacity-100 transition-opacity">I'm watching you! 👀</div>
    </div>
  );
};
const LoveQuiz = ({ onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [isWrong, setIsWrong] = useState(false);

  const handleAnswer = (optionIndex) => {
    if (optionIndex === APP_DATA.quiz[step].correctAnswer) {
      setIsWrong(false);
      if (step < APP_DATA.quiz.length - 1) {
        setStep(step + 1);
      } else {
        onComplete();
      }
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 1000);
    }
  };

  const currentQ = APP_DATA.quiz[step];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className={`bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all ${isWrong ? 'animate-shake' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center text-rose-500 font-bold">
            <Lock className="w-5 h-5 mr-2" />
            Security Question {step + 1}/{APP_DATA.quiz.length}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif text-center">{currentQ.question}</h3>
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full p-4 rounded-xl border-2 border-rose-100 text-rose-900 font-medium hover:bg-rose-50 hover:border-rose-300 transition-all text-left flex justify-between items-center group"
            >
              {option}
              <Heart className="w-4 h-4 opacity-0 group-hover:opacity-100 text-rose-400" />
            </button>
          ))}
        </div>
        {isWrong && <p className="text-center text-red-500 mt-4 text-sm font-bold animate-pulse">Oops! Try again, my love! ❤️</p>}
      </div>
      <style>{`
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};


const SlidingPuzzle = () => {
  const [tiles, setTiles] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isShuffling, setIsShuffling] = useState(true);

  // 3x3 Grid
  const GRID_SIZE = 3;
  // Use the first photo from your gallery
  const PHOTO_URL = APP_DATA.carouselPhotos[0]; 

  // Initialize Solved State
  const initGame = () => {
    // Create 0-8 array. 8 is the "empty" tile.
    const solved = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i);
    setTiles(solved);
    setIsSolved(true);
    setMoves(0);
    setIsShuffling(true);
    
    // Shuffle after a short delay so she sees the full image first
    setTimeout(() => shuffleTiles(solved), 2000);
  };

  useEffect(() => {
    initGame();
  }, []);

  // Shuffle Logic (Simulate random moves to ensure solvability)
  const shuffleTiles = (currentTiles) => {
    let tempTiles = [...currentTiles];
    let emptyIdx = tempTiles.indexOf(GRID_SIZE * GRID_SIZE - 1);
    let previousIdx = -1;

    // Perform 100 random valid moves
    for (let i = 0; i < 100; i++) {
      const neighbors = getNeighbors(emptyIdx);
      // Don't undo the move we just made
      const validNeighbors = neighbors.filter(n => n !== previousIdx);
      const randomNeighbor = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
      
      // Swap
      [tempTiles[emptyIdx], tempTiles[randomNeighbor]] = [tempTiles[randomNeighbor], tempTiles[emptyIdx]];
      previousIdx = emptyIdx;
      emptyIdx = randomNeighbor;
    }

    setTiles(tempTiles);
    setIsSolved(false);
    setMoves(0);
    setIsShuffling(false);
  };

  const getNeighbors = (index) => {
    const neighbors = [];
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;

    if (row > 0) neighbors.push(index - GRID_SIZE); // Up
    if (row < GRID_SIZE - 1) neighbors.push(index + GRID_SIZE); // Down
    if (col > 0) neighbors.push(index - 1); // Left
    if (col < GRID_SIZE - 1) neighbors.push(index + 1); // Right

    return neighbors;
  };

  const handleTileClick = (index) => {
    if (isSolved || isShuffling) return;

    const emptyIdx = tiles.indexOf(GRID_SIZE * GRID_SIZE - 1);
    const neighbors = getNeighbors(emptyIdx);

    // If clicked tile is adjacent to empty space
    if (neighbors.includes(index)) {
      const newTiles = [...tiles];
      // Swap
      [newTiles[index], newTiles[emptyIdx]] = [newTiles[emptyIdx], newTiles[index]];
      setTiles(newTiles);
      setMoves(m => m + 1);
      checkWin(newTiles);
    }
  };

  const checkWin = (currentTiles) => {
    const isWin = currentTiles.every((val, index) => val === index);
    if (isWin) {
      setIsSolved(true);
      if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 120 });
    }
  };

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-rose-50 to-white -z-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- LEFT SIDE: THE PUZZLE GAME --- */}
        <div className="w-full md:w-2/3">
          <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-xl flex flex-col items-center">
            
            {/* Game Frame */}
            <div className="relative p-4 bg-white rounded-xl shadow-inner border-2 border-rose-100">
              
              <div 
                className="grid grid-cols-3 gap-1 bg-rose-900 p-1 rounded-lg w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                style={{ pointerEvents: isSolved ? 'none' : 'auto' }}
              >
                {tiles.map((tileNumber, index) => {
                  // Check if this is the "Empty" tile (last number)
                  const isEmpty = tileNumber === GRID_SIZE * GRID_SIZE - 1;
                  
                  // Calculate background position
                  // Col = tileNumber % 3, Row = floor(tileNumber / 3)
                  const x = (tileNumber % GRID_SIZE) * 100 / (GRID_SIZE - 1);
                  const y = (Math.floor(tileNumber / GRID_SIZE)) * 100 / (GRID_SIZE - 1);

                  return (
                    <div
                      key={index}
                      onClick={() => handleTileClick(index)}
                      className={`
                        relative w-full h-full rounded-md overflow-hidden transition-all duration-200
                        ${isEmpty && !isSolved ? 'opacity-0 cursor-default' : 'cursor-pointer hover:brightness-110 shadow-sm'}
                      `}
                      style={{
                        backgroundColor: '#eee',
                        backgroundImage: `url(${PHOTO_URL})`,
                        backgroundSize: `${GRID_SIZE * 100}%`,
                        backgroundPosition: `${x}% ${y}%`
                      }}
                    >
                      {/* Grid Numbers (Optional hint) */}
                      {!isSolved && !isEmpty && (
                        <div className="absolute bottom-1 right-1 text-[10px] text-white/50 bg-black/20 px-1 rounded">
                          {tileNumber + 1}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Success Overlay on the Image */}
              {isSolved && !isShuffling && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-rose-500/10 rounded-xl animate-fade-in">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-rose-200">
                    <p className="font-serif text-rose-600 font-bold flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" /> Perfect Match!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="mt-8 flex gap-6 items-center">
              <button 
                onClick={initGame}
                disabled={isShuffling}
                className="px-6 py-3 bg-white border-2 border-rose-100 text-rose-500 rounded-full font-bold shadow-sm hover:bg-rose-50 transition-all flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} /> Shuffle
              </button>
              <div className="bg-rose-50 px-6 py-3 rounded-full border border-rose-100">
                <p className="text-sm font-bold text-rose-400 uppercase tracking-widest">Moves: <span className="text-rose-600 text-lg">{moves}</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: THE NOTE --- */}
        <div className="w-full md:w-1/3 flex flex-col justify-center min-h-[400px]">
           <div className="relative bg-[#fffcf5] p-8 md:p-12 rounded-tr-[3rem] rounded-bl-[3rem] shadow-[8px_8px_0px_rgba(225,29,72,0.1)] border border-[#e6dbcf] rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Paper Texture */}
               <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] rounded-tr-[3rem] rounded-bl-[3rem] pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-center mb-6">
                   <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center border-2 border-rose-200">
                      <ImageIcon className="w-6 h-6 text-rose-500" />
                   </div>
                 </div>

                 <h3 className="font-serif text-2xl text-[#5c4033] mb-4 font-bold text-center border-b-2 border-[#5c4033]/10 pb-4">
                   Picture Perfect Logic
                 </h3>
                 
                 <p className="font-handwriting text-xl text-[#8b5a2b] leading-relaxed text-center mb-8">
                   "Life is like a puzzle, finding the right pieces to make a beautiful picture. <br/><br/>
                   Use your logic to slide the tiles and restore this memory of us!"
                 </p>

                 {isSolved && !isShuffling && (
                   <div className="bg-white/60 p-4 rounded-xl border border-[#8b5a2b]/10 text-center animate-zoom-in">
                     <div className="flex justify-center mb-2">
                       <Star className="w-6 h-6 text-yellow-500 fill-yellow-500 animate-bounce" />
                     </div>
                     <p className="font-bold text-rose-600">Solved in {moves} moves!</p>
                     <p className="text-[10px] uppercase text-gray-400 font-bold mt-1">📸 Screenshot this victory!</p>
                   </div>
                 )}
               </div>
           </div>
        </div>

      </div>
    </section>
  );
};

const GiftPage = () => {
  const [stage, setStage] = useState(1); // 1: Question, 2: Angry, 3: Selection, 4: Reveal
  const [shaking, setShaking] = useState(false);

  // ASSETS (You can replace these URLs with the specific stickers you want)
  const cuteCatUrl = "https://media1.tenor.com/m/m-Xk_v1nZuwAAAAC/cat-cute.gif";
  
  // Option 2: Angry Cat with gun/weapon (Classic Meme)
  const angryCatUrl = "https://media1.tenor.com/m/eWJ-4Kj2iO0AAAAC/cat-gun.gif";
  
  // Option 3: Gift Box Icon
  const giftBoxUrl = "https://cdn-icons-png.flaticon.com/512/4213/4213958.png";
  const handleNo = () => {
    setStage(2);
  };

  const handleYes = () => {
    setStage(3);
    if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 70 });
  };

  const handleGiftOpen = () => {
    setStage(4);
    if (typeof confetti === 'function') {
      confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff0f3] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
         <FloatingElements />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* STAGE 1: THE QUESTION */}
        {stage === 1 && (
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl text-center border-4 border-rose-100 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-8 font-bold">Please Accept My Gift? 🥺</h2>
            
            <div className="w-48 h-48 mx-auto mb-8">
              <img src={cuteCatUrl} alt="Cute Cat" className="w-full h-full object-contain" />
            </div>

            <div className="flex gap-6 justify-center">
              <button 
                onClick={handleYes}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-xl shadow-lg transform hover:scale-110 transition-all flex items-center gap-2"
              >
                YES ❤️
              </button>
              <button 
                onClick={handleNo}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-xl shadow-lg transform hover:scale-110 transition-all"
              >
                NO
              </button>
            </div>
          </div>
        )}

        {/* STAGE 2: ANGRY CAT (If she clicked No) */}
        {stage === 2 && (
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl text-center border-4 border-red-200 animate-shake">
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 uppercase tracking-widest">How Dare You! 😡</h2>
            
            <div className="w-56 h-56 mx-auto mb-8">
              <img src={angryCatUrl} alt="Angry Cat" className="w-full h-full object-contain" />
            </div>

            <button 
              onClick={() => setStage(1)}
              className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all animate-bounce"
            >
              Try Again 🔫
            </button>
          </div>
        )}

        {/* STAGE 3: SELECT GIFT */}
        {stage === 3 && (
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-2">A Present For You</h2>
            <p className="text-rose-700 mb-12 font-handwriting text-xl">Pick a box... any box!</p>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  onClick={handleGiftOpen}
                  className="w-32 h-32 md:w-48 md:h-48 cursor-pointer transform hover:-translate-y-4 hover:rotate-3 transition-all duration-300 group relative"
                >
                  <img src={giftBoxUrl} alt="Gift" className="w-full h-full object-contain drop-shadow-xl group-hover:drop-shadow-2xl" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 font-bold whitespace-nowrap">
                    Open Me!
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 4: FINAL REVEAL (THE BOOK) */}
        {stage === 4 && (
          <div className="relative w-full max-w-5xl mx-auto animate-zoom-in perspective-1000">
            {/* The Book Container */}
            <div className="bg-[#fdf6e3] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row overflow-hidden border-8 border-[#8b4513] relative">
              
              {/* Book Spine (Middle Shadow) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 bg-gradient-to-r from-black/5 via-black/20 to-black/5 transform -translate-x-1/2 z-20 pointer-events-none mix-blend-multiply"></div>

              {/* LEFT PAGE: PHOTO */}
              <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#d2b48c] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] relative flex items-center justify-center">
                 <div className="absolute top-4 left-4 text-[#8b4513]/20"><Sparkles size={40} /></div>
                 
                 {/* Photo Frame */}
                 <div className="relative p-4 bg-white shadow-lg rotate-[-2deg] border border-gray-200 transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-800/20 rounded-full blur-sm"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><Pin className="w-8 h-8 text-red-700 drop-shadow-md" fill="currentColor" /></div>
                    
                    {/* YOUR PHOTO HERE */}
                    <div className="w-64 h-80 bg-gray-100 overflow-hidden border border-gray-100">
                       <img src={PHOTOS[5]} alt="Us" className="w-full h-full object-cover" />
                    </div>
                    
                    <p className="text-center font-handwriting text-gray-500 mt-4 text-xl">My Forever & Always ❤️</p>
                 </div>
              </div>

              {/* RIGHT PAGE: LETTER */}
              <div className="w-full md:w-1/2 p-8 md:p-12 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] relative">
                 {/* Decorative Corner */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d2b48c]/30 to-transparent rounded-bl-full"></div>
                 
                 <div className="h-full flex flex-col relative">
                    <h3 className="font-serif text-3xl text-[#5c4033] mb-6 font-bold flex items-center gap-2">
                       My Dearest Love, <Feather className="w-6 h-6 text-rose-400" />
                    </h3>
                    
                    <div className="prose prose-p:font-handwriting prose-p:text-2xl prose-p:leading-relaxed text-[#5c4033] flex-grow overflow-y-auto custom-scrollbar">
                       <p>
                         Do you remember our first date? The moment our eyes met, I knew something was special.
                       </p>
                       <p>
                         Thank you for being the most amazing person in my life. Your smile lights up my world, and your love makes me a better person.
                       </p>
                       <p>
                         Here is to another year of laughing at bad jokes, eating pizza, and making beautiful memories.
                       </p>
                       <p className="font-bold mt-4">
                         Happy Birthday, {APP_DATA.wifeName}!
                       </p>
                    </div>

                    <div className="mt-8 text-right">
                       <p className="font-serif text-[#8b4513] italic text-sm">With all my love,</p>
                       <p className="font-handwriting text-3xl font-bold text-[#8b4513] mt-2">Your Hubby ✒️</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        )}

      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #d2b48c; border-radius: 20px; }
      `}</style>
    </div>
  );
};


const ScrollPage = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#fff0f3] relative overflow-x-hidden">
      {/* 1. Global Background: Fixed and Full Screen */}
      <FloatingElements />
      
      {/* 2. Hero Section: Transparent gradient allowing floating elements to show */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-b from-rose-100/50 via-rose-50/20 to-transparent">
         {/* Vertical Ropes Added Here */}
         <HeroVerticalRopes/>
         
         <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-rose-200/50 to-transparent pointer-events-none z-0"></div>
         <div className="text-center mb-12 relative z-10 w-full max-w-4xl">
            <div className="absolute left-4 top-0 md:left-20 animate-bounce" style={{ animationDuration: '2s' }}> <span className="text-6xl drop-shadow-md">🎂</span> </div>
            <div className="absolute right-4 top-10 md:right-20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }}> <span className="text-6xl drop-shadow-md">🧁</span> </div>
            <span className="inline-block py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm text-rose-600 text-sm font-bold tracking-widest mb-6 border border-rose-200 shadow-sm animate-fade-in-down">✨ TODAY IS SPECIAL ✨</span>
            <h1 className="font-serif text-rose-900 drop-shadow-lg leading-tight">
               <span className="block text-3xl md:text-7xl mb-2 animate-[pop_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">Happy Birthday</span>
               <TextRotator />
            </h1>
            <p className="text-rose-700/80 max-w-md mx-auto mt-6 text-xl font-light italic animate-fade-in-up delay-700">Make a wish, my love...</p>
         </div>
      </section>

      <CakeCeremony />

      {/* <--- PASTE THE COMPONENT HERE ---> */}
      <section className="relative z-10">
         <TimeTogether />
      </section>

      
      {/* 3. Timeline: Semi-transparent backdrop */}
      <TimelineSection />

      {/* 3.1. Carousel (Moved here) */}
      <section className="relative z-10 py-16 overflow-hidden text-rose-900">
         <SectionFloatingElements />
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         <div className="text-center mb-8 relative z-10">
            <h3 className="text-3xl font-serif text-rose-900 drop-shadow-md">Our Beautiful Journey</h3>
            <p className="text-rose-800/70">Spinning through time...</p>
         </div>
         <PhotoCarousel />
      </section>
      
      {/* 4. Messages (REDESIGNED: Compact 2x2 Grid) */}
      <MessagesSection />


      {/* 5. Proposal */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative text-rose-900 z-10 backdrop-blur-sm">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
    <SectionFloatingElements />
    
    {/* Changed max-w-4xl to max-w-6xl to give side-by-side videos more room */}
    <div className="max-w-6xl w-full z-10 text-center">
        <Heart className="w-16 h-16 text-rose-500 fill-current mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl md:text-5xl font-serif mb-12">One Special Question...</h2>
        
        {/* --- LAYOUT WRAPPER START --- */}
        {/* grid-cols-1: Stacked on mobile */}
        {/* md:grid-cols-2: Side-by-side on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            
            {/* Video 1 */}
            <div className="border-4 border-rose-500/30 rounded-3xl p-2 bg-rose-200/40 backdrop-blur-md">
                <VideoFrame src={APP_DATA.proposalVideo1} icon={Heart} placeholderText="The Proposal" />
            </div>

            {/* Video 2 */}
            <div className="border-4 border-rose-500/30 rounded-3xl p-2 bg-rose-200/40 backdrop-blur-md">
                <VideoFrame src={APP_DATA.proposalVideo2} icon={Heart} placeholderText="The Proposal" />
            </div>

        </div>
        {/* --- LAYOUT WRAPPER END --- */}

        <p className="mt-8 text-xl font-light italic text-rose-900">"I want to spend every birthday with you."</p>
    </div>
</section>
      
      <ReasonsGenerator />
      
      {/* 6. Stack Gallery (Moved here with Dark Theme & Typewriter) */}
      <section className="py-24 px-4 relative z-10 overflow-hidden text-rose-900">
         <SectionFloatingElements />
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-4 drop-shadow-sm">A Lifetime of Memories</h2>
            <p className="text-rose-800/70">Click the stack to reveal more...</p>
         </div>
         <StackGallery />
      </section>

      {/* 7. Voice Notes (Digital Chat Gallery) */}
      <section className="py-24 px-4 bg-transparent backdrop-blur-sm relative z-10">
         <h2 className="text-3xl md:text-5xl font-serif text-center text-rose-900 mb-12">Digital Love Messages</h2>
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:h-auto">
            
            {/* Column 1: Long Custom Text Chat (Left) */}
            <InstaCard title="Bestie ❤️" icon={<MessageCircle className="w-6 h-6 text-rose-500" />}>
               <CustomTextChat messages={APP_DATA.customTextChat} />
            </InstaCard>

            {/* Column 2: Voice Notes (Center) */}
            <InstaCard title="Chintu 🎤" icon={<Mic className="w-6 h-6 text-rose-500" />}>
               <VoiceNoteList notes={APP_DATA.voiceNotes} />
            </InstaCard>
            
            {/* Column 3: Image Messages (Right) */}
            <InstaCard title="Hubby ❤️" icon={<Image className="w-6 h-6 text-rose-500" />}>
               <ImageMessagesList images={APP_DATA.imageMessages} />
            </InstaCard>

         </div>
      </section>
      
      {/* 8. Hanging Gallery (Moved to very end) */}
      <section className=" text-rose-900 relative z-10 py-16 overflow-hidden">
         <SectionFloatingElements />
         
         {/* Hanging Photos */}
         <div className="py-12 border-b border-rose-800/30">
            <h3 className="text-center text-rose-900 text-3xl font-serif mb-8 drop-shadow-md">Hanging Memories</h3>
            <HangingGallery />
         </div>
      </section>

      <MemoryMatchGame/>

      <CrackTheCode/>

      <LoveSudoku/>

      <RelationshipContract/>

      <MoodClinic/>

      

      <footer className="bg-white/80 backdrop-blur-md py-8 text-center text-rose-400 text-sm relative z-10">Made with infinite love</footer>
    </div>
  );
};
const EntranceGate = ({ onUnlock, isPlaying, toggleMusic }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => { setTilt({ x: 0, y: 0 }); };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff5f5] relative overflow-hidden">
      
      {/* 1. MOVING MESH GRADIENT (The Blobs) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* 2. FLOATING ELEMENTS (Added Here) */}
      <div className="absolute inset-0 z-0">
        <FloatingElements />
      </div>

      {/* 3. MAIN INTERFACE */}
      <div className="z-10 relative group max-w-lg mx-4 perspective-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <WatchingTeddy />
        
        <div ref={cardRef} className="relative transition-transform duration-300 ease-out transform-style-3d" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
            
            {/* Glowing Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            {/* Glass Card */}
            <div className="relative bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden">
              
              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              
              {/* Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-50"></div>

              <div className="px-10 py-12 flex flex-col items-center text-center relative z-10">
                  
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-80"></div>
                    <Heart className="w-20 h-20 text-rose-500 fill-rose-100 drop-shadow-sm animate-[pulse_3s_ease-in-out_infinite]" />
                    <div className="absolute -bottom-2 right-0 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-rose-500 shadow-sm border border-rose-100">FOR YOU</div>
                  </div>

                  <h2 className="text-gray-500 tracking-[0.2em] text-xs font-bold uppercase mb-3">Welcome to your</h2>
                  
                  <h1 className="text-5xl md:text-6xl font-serif mb-4 text-rose-900 drop-shadow-sm leading-tight">
                    Special Place
                  </h1>
                  
                  <p className="text-gray-600 font-handwriting text-xl mb-8 leading-relaxed max-w-xs">
                    "I made this little corner of the internet just to celebrate you."
                  </p>

                  <div className="relative w-full">
                    <button onClick={() => { setShowQuiz(true); if (!isPlaying) toggleMusic(); }} className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-400 to-rose-500 font-pj rounded-2xl focus:outline-none shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:scale-[1.02] overflow-hidden">
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
                      <div className="flex items-center gap-2">
                        <Lock className="w-5 h-5 group-hover:hidden transition-all" />
                        <Unlock className="w-5 h-5 hidden group-hover:block transition-all" />
                        <span className="tracking-wide">Enter My Love</span>
                      </div>
                    </button>
                  </div>
                  
                  <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Key className="w-3 h-3" /> Password Hint: It's all about us
                  </p>
              </div>
            </div>
        </div>
      </div>
      
      {showQuiz && <LoveQuiz onClose={() => setShowQuiz(false)} onComplete={onUnlock} />}
      
      <div className="absolute bottom-6 text-rose-300/80 text-xs tracking-widest font-medium z-10">MADE WITH INFINITE LOVE</div>
      
      <style>{`
        .perspective-container { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

const MagicCake = () => {
  const [candles, setCandles] = useState([true, true, true, true, true]); // 5 candles
  const [isListening, setIsListening] = useState(false);
  const [blownOut, setBlownOut] = useState(false);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);

  // Initialize Microphone
  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;
      setIsListening(true);
      detectBlow();
    } catch (err) {
      console.log("Mic access denied or error", err);
      alert("Microphone access needed to blow out candles! Or just tap them 😉");
    }
  };

  const detectBlow = () => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    
    const checkVolume = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      // Calculate average volume
      const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
      
      // Threshold for "Blowing" sound (adjust based on sensitivity)
      if (volume > 40 && !blownOut) { 
        extinguishCandles();
      } else {
        requestAnimationFrame(checkVolume);
      }
    };
    checkVolume();
  };

  const extinguishCandles = () => {
    setCandles(candles.map(() => false));
    setBlownOut(true);
    // Stop listening
    if (audioContextRef.current) audioContextRef.current.close();
    setIsListening(false);
  };

  // Manual fallback
  const handleManualBlow = () => extinguishCandles();

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden text-center">
      <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 max-w-2xl mx-auto shadow-2xl border border-white/50 relative">
        <h2 className="text-3xl md:text-5xl font-serif text-rose-900 mb-8">Make a Wish! ✨</h2>
        
        {!isListening && !blownOut && (
          <button onClick={startListening} className="mb-8 px-6 py-3 bg-rose-500 text-white rounded-full font-bold animate-bounce shadow-lg">
            <div className="flex items-center gap-2">
              <Mic className="w-5 h-5" /> Tap to Enable Mic & BLOW!
            </div>
          </button>
        )}

        {isListening && !blownOut && (
          <p className="mb-8 text-rose-600 font-bold animate-pulse">🎤 Listening... Blow on your screen!</p>
        )}

        {/* The Cake */}
        <div className="relative w-64 h-64 mx-auto mt-10">
          {/* Cake Base */}
          <div className="absolute bottom-0 w-64 h-32 bg-rose-200 rounded-lg shadow-inner flex items-end justify-center">
             <div className="w-full h-4 bg-rose-300 rounded-full opacity-50 mb-10"></div>
          </div>
          <div className="absolute bottom-32 w-56 h-24 bg-rose-100 left-4 rounded-lg shadow-sm"></div>
          
          {/* Candles */}
          <div className="absolute bottom-56 flex justify-center gap-6 w-full px-8">
            {candles.map((isLit, i) => (
              <div key={i} className="relative flex flex-col items-center cursor-pointer" onClick={handleManualBlow}>
                {/* Flame */}
                <div className={`w-4 h-8 bg-orange-400 rounded-full blur-[2px] transition-all duration-300 ${isLit ? 'animate-flicker opacity-100' : 'opacity-0 scale-0'}`}>
                   <div className="w-2 h-4 bg-yellow-200 rounded-full mx-auto mt-2 blur-[1px]"></div>
                </div>
                {/* Candle Stick */}
                <div className="w-3 h-16 bg-gradient-to-b from-blue-200 to-white rounded-sm border border-gray-200"></div>
              </div>
            ))}
          </div>
        </div>

        {blownOut && (
          <div className="mt-12 animate-fade-in-up">
            <h3 className="text-2xl font-handwriting text-rose-600 font-bold">Yay! May all your wishes come true! 💖</h3>
            <p className="text-sm text-gray-500 mt-2">(Confetti explosion happening!)</p>
          </div>
        )}
      </div>
      
      {/* Flicker Animation Style */}
      <style>{`
        @keyframes flicker {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.9) skewX(2deg); opacity: 0.8; }
          25% { transform: scale(1.1) skewX(-2deg); opacity: 1; }
        }
        .animate-flicker { animation: flicker 0.1s infinite alternate; }
      `}</style>
    </section>
  );
};
export default function App() {
  const [currentView, setCurrentView] = useState('entrance'); // 'entrance', 'scrollPage', 'giftPage'
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => { if (audioRef.current) { audioRef.current.volume = 0.4; } }, []);
  
  const toggleMusic = () => { 
    if (audioRef.current) { 
      if (isPlaying) { audioRef.current.pause(); } 
      else { audioRef.current.play().catch(e => console.log('Audio error:', e)); } 
      setIsPlaying(!isPlaying); 
    } 
  };

  return (
    <div className="font-sans text-gray-900 selection:bg-rose-200 selection:text-rose-900">
      <FloatingElements />
      <audio ref={audioRef} src={APP_DATA.musicPath} loop onError={(e) => console.log("Audio load error", e)} />
      
      <div className="fixed top-6 right-6 z-50">
        <button onClick={toggleMusic} className="bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition-all hover:scale-110 shadow-lg">
          {isPlaying ? <div className="flex items-center gap-2"><Volume2 className="w-6 h-6" /></div> : <div className="flex items-center gap-2"><VolumeX className="w-6 h-6 opacity-70" /></div>}
        </button>
      </div>

      {/* VIEW CONTROLLER */}
      {currentView === 'entrance' && (
        <EntranceGate 
          onUnlock={() => setCurrentView('scrollPage')} 
          isPlaying={isPlaying} 
          toggleMusic={toggleMusic} 
        />
      )}
      
      {currentView === 'scrollPage' && (
        <ScrollPage 
          onNext={() => setCurrentView('giftPage')} 
        />
      )}

      {currentView === 'giftPage' && (
        <GiftPage />
      )}

    </div>
  );
}