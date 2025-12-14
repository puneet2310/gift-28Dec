import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Image, Mic, Star, ArrowLeft, Key, Gift, Calendar, Video, Lock, Unlock, HelpCircle, CheckCircle, Volume2, VolumeX, Play, Pause, MessageCircle, RefreshCw, Sparkles, Pin, ChevronDown, Mail, Feather, Stamp, Leaf, Type, Quote } from 'lucide-react';

// ==========================================
// 1. DATA & CONFIGURATION
// ==========================================

const PHOTOS = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=300&h=400&fit=crop",
];

const APP_DATA = {
  wifeName: "My Love",
  birthdayMessage: "Happy Birthday, My Queen!",
  musicPath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
  
  boyCharPath: "https://static.vecteezy.com/system/resources/previews/024/785/828/original/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png", 
  girlCharPath: "https://static.vecteezy.com/system/resources/previews/024/785/747/original/3d-happy-cartoon-girl-on-transparent-background-generative-ai-png.png",
  
  carouselPhotos: PHOTOS,

  stackMemories: [
    { img: PHOTOS[0], text: "Do you remember this day? The sun was setting perfectly on your face, and I knew right then I'd love you forever." },
    { img: PHOTOS[1], text: "Our first coffee date! You were so nervous you spilled sugar everywhere, but I thought it was the cutest thing ever." },
    { img: PHOTOS[2], text: "That trip to the mountains... getting lost with you was better than finding the destination." },
    { img: PHOTOS[3], text: "Just a random Tuesday. You were laughing at a bad movie, and I realized this is what happiness looks like." },
    { img: PHOTOS[4], text: "Your smile in this picture lights up my darkest days. You are my sunshine." },
    { img: PHOTOS[5], text: "We danced in the rain that night. Completely soaked, completely happy, completely in love." },
    { img: PHOTOS[6], text: "I took this when you weren't looking. You were reading your favorite book, lost in another world." },
    { img: PHOTOS[7], text: "Happy Birthday, my love. Here's to a lifetime of making more memories just like these." },
  ],
  
  proposalVideo: "/assets/proposal.mp4",

  timeline: [
    { date: "August 14, 2021", title: "First Glance", desc: "The moment our eyes met at the coffee shop. I knew something was special." },
    { date: "September 1, 2021", title: "First Date", desc: "Pizza, bad jokes, and the best night ever. You laughed at everything." },
    { date: "December 25, 2021", title: "First Trip", desc: "Getting lost in the mountains together and loving every second." },
    { date: "February 14, 2022", title: "I Love You", desc: "Said it under the stars. The universe stood still." },
    { date: "Today", title: "Happy Birthday", desc: "Celebrating the most amazing woman in the world. My everything." },
  ],

  reasonsList: [
    "The way you laugh at my silly jokes.",
    "Your morning coffee ritual is the cutest thing.",
    "How you support my dreams no matter what.",
    "Your kindness to strangers.",
    "The sparkle in your eyes when you're happy.",
    "Your warm hugs that fix everything.",
    "How you make a house a home.",
    "Your resilience in tough times.",
    "The way you scrunch your nose when you think.",
    "Just being absolutely, unapologetically YOU."
  ],

  quiz: [
    { question: "Where did we first meet?", options: ["The Library", "Central Coffee Shop", "At a Party", "Online"], correctAnswer: 1 },
    { question: "What is my favorite nickname for you?", options: ["Honey", "Princess", "Babu", "Sunshine"], correctAnswer: 2 },
    { question: "How much do I love you?", options: ["A lot", "To the moon", "Infinity & Beyond", "More than pizza"], correctAnswer: 2 }
  ],

  messages: [
    { id: 1, title: "To My Best Friend", text: "Thank you for being the most amazing partner anyone could ask for. You make every day brighter just by being in it." },
    { id: 2, title: "My Strength", text: "Your smile is the only thing I need to get through a bad day. You are my rock, my safe place, and my greatest adventure." },
    { id: 3, title: "The Little Things", text: "I love how you wrinkle your nose when you laugh, how you sing in the car, and how you make even the simplest moments feel magical." },
    { id: 4, title: "Our Future", text: "I can't wait to grow old with you, creating a million more memories along the way. Happy Birthday, my love!" },
  ],

  voiceNotes: [
    { id: 1, duration: "0:45", date: "10:00 AM", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, duration: "1:20", date: "10:05 AM", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 3, duration: "0:15", date: "10:10 AM", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  ],

  customTextChat: [
    "I haven't told you this enough lately, but I truly believe I am the luckiest man alive. Every moment with you is a treasure.",
    "Just a reminder that you are the most beautiful, smart, and kind-hearted woman I know. Never forget how much I cherish you.",
    "This website took a long time, but it's nothing compared to the lifetime I want to spend making you happy. I love you!",
  ],

  imageMessages: [
    PHOTOS[0], 
    PHOTOS[4], 
  ],
};

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================

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

const PhotoCarousel = () => {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const interval = setInterval(() => { setRotation(prev => prev - 45); }, 3000);
    return () => { clearInterval(interval); window.removeEventListener('resize', checkMobile); };
  }, []);
  
  const translateZ = isMobile ? '160px' : '280px';
  const width = isMobile ? '120px' : '140px';
  const height = isMobile ? '180px' : '200px';

  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-visible perspective-1000 py-10 z-20">
      <div className="relative transform-style-3d transition-transform duration-1000 ease-out" style={{ width: width, height: height, transform: `rotateY(${rotation}deg)` }}>
        {APP_DATA.carouselPhotos.map((photo, index) => {
          const rotateY = index * 45; 
          return (
            <div key={index} className="absolute inset-0 bg-white p-2 shadow-[0_0_20px_rgba(255,182,193,0.6)] rounded-2xl border-2 border-white overflow-hidden transform-gpu hover:scale-110 transition-transform duration-300 group" style={{ transform: `rotateY(${rotateY}deg) translateZ(${translateZ})`, backfaceVisibility: 'visible', opacity: 0.95 }}>
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img src={photo} alt={`Memory ${index}`} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-10 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-rose-500/20 rounded-full blur-[60px] transform rotateX(90deg)"></div>
      <style>{` .perspective-1000 { perspective: 1000px; } .transform-style-3d { transform-style: preserve-3d; } `}</style>
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

const HangingGallery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10 relative h-[500px] overflow-hidden">
       <div className="absolute top-10 left-0 right-0 h-1 bg-white/50 transform -rotate-1 rounded-full shadow-sm"></div>
       <div className="absolute top-64 left-0 right-0 h-1 bg-white/50 transform rotate-1 rounded-full shadow-sm"></div>
       <div className="flex justify-around absolute top-10 left-0 right-0">
          {APP_DATA.carouselPhotos.slice(0, 4).map((photo, idx) => (
             <div key={idx} className={`relative group origin-top animate-sway ${idx === 0 || idx === 3 ? 'hidden md:block' : ''}`} style={{ animationDelay: `${idx * 0.5}s` }}>
                <div className="w-0.5 h-16 bg-white/80 mx-auto"></div>
                <div className="w-4 h-8 bg-amber-700 mx-auto -mt-2 rounded-sm shadow-sm relative z-10"></div>
                <div className="bg-white p-2 shadow-lg -mt-2 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 w-32 h-32 md:w-40 md:h-40"><img src={photo} className="w-full h-full object-cover" alt="hanging" /></div>
             </div>
          ))}
       </div>
       <div className="flex justify-around absolute top-64 left-10 right-10">
          {APP_DATA.carouselPhotos.slice(4, 8).map((photo, idx) => (
             <div key={idx} className={`relative group origin-top animate-sway ${idx === 0 || idx === 3 ? 'hidden md:block' : ''}`} style={{ animationDelay: `${(idx + 2) * 0.5}s` }}>
                <div className="w-0.5 h-12 bg-white/80 mx-auto"></div>
                <div className="w-4 h-8 bg-amber-700 mx-auto -mt-2 rounded-sm shadow-sm relative z-10"></div>
                <div className="bg-white p-2 shadow-lg -mt-2 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 w-32 h-32 md:w-40 md:h-40"><img src={photo} className="w-full h-full object-cover" alt="hanging" /></div>
             </div>
          ))}
       </div>
       <style>{` @keyframes sway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } } .animate-sway { animation: sway 4s infinite ease-in-out; } `}</style>
    </div>
  );
};

const HeroVerticalRopes = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const ropes = isMobile ? [
      { x: '10%', photos: [APP_DATA.carouselPhotos[0], APP_DATA.carouselPhotos[2]], speed: '3s' },
      { x: '90%', photos: [APP_DATA.carouselPhotos[1], APP_DATA.carouselPhotos[3]], speed: '4s' }
  ] : [
      { x: '2%', photos: [APP_DATA.carouselPhotos[0], APP_DATA.carouselPhotos[2]], speed: '3s' },
      { x: '12%', photos: [APP_DATA.carouselPhotos[1]], speed: '4s' },
      { x: '88%', photos: [APP_DATA.carouselPhotos[5]], speed: '3.5s' },
      { x: '98%', photos: [APP_DATA.carouselPhotos[6], APP_DATA.carouselPhotos[7]], speed: '4.5s' },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
       {ropes.map((rope, i) => (
         <div key={i} className="absolute top-0 h-[80vh] w-1 bg-amber-800/80 shadow-sm animate-swing-rope origin-top" style={{ left: rope.x, animationDuration: rope.speed }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-900"></div>
            {rope.photos.map((photo, j) => (
               <div key={j} className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ top: `${80 + j * 180}px` }}>
                  <div className="w-3 h-8 bg-amber-600 rounded-sm mb-[-10px] z-20 shadow-md border-r border-amber-900 relative"></div>
                  <div className={`relative p-1 bg-white shadow-xl transition-all duration-500 ${(i + j) % 2 === 0 ? 'rotate-3' : '-rotate-3'}`} style={{ width: isMobile ? '70px' : '100px' }}>
                     <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-1 border border-gray-100"><img src={photo} alt="Mem" className="w-full h-full object-cover" /></div>
                  </div>
               </div>
            ))}
         </div>
       ))}
       <style>{` @keyframes swingRope { 0%, 100% { transform: rotate(1deg); } 50% { transform: rotate(-1deg); } } .animate-swing-rope { animation: swingRope infinite ease-in-out; } `}</style>
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
       <div className="w-full md:w-1/2 h-48 md:h-64 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_30px_rgba(244,63,94,0.3)] border border-white/20 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute -top-10 -left-10 w-24 h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-xl opacity-80"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-xl opacity-80"></div>
          <div className="absolute top-4 right-4 text-rose-200 opacity-80"><Quote className="w-12 h-12" /></div>
          <p className="font-handwriting text-2xl md:text-3xl text-rose-100 leading-relaxed text-center drop-shadow-md">"{displayedText}"<span className="animate-pulse text-yellow-400">|</span></p>
       </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
       <div className="absolute top-0 right-0 opacity-10"><Heart size={200} /></div>
       <h2 className="text-3xl md:text-5xl font-serif text-center text-rose-900 mb-16 relative z-10">Our Love Story</h2>
       <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200 transform md:-translate-x-1/2 rounded-full"></div>
          {APP_DATA.timeline.map((item, idx) => (
             <div key={idx} className={`relative flex items-center justify-between md:justify-normal mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-rose-500 transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(244,63,94,0.6)] group-hover:scale-125 transition-transform duration-300">
                   <div className="absolute inset-0 flex items-center justify-center"><div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div></div>
                </div>
                <div className="hidden md:block w-1/2"></div>
                <div className={`ml-12 md:ml-0 w-full md:w-[45%] bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-rose-400 hover:-translate-y-2 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-8 text-right md:border-l-0 md:border-r-4' : 'md:ml-8 text-left'}`}>
                   <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold mb-2 shadow-sm">{item.date}</span>
                   <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                   <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
                </div>
             </div>
          ))}
       </div>
    </section>
  )
}

const ReasonsGenerator = () => {
  const [reason, setReason] = useState("Why do I love you? Let me count the ways...");
  const [animate, setAnimate] = useState(false);
  const [rotation, setRotation] = useState(0);
  const generateReason = () => {
    setAnimate(true);
    setRotation(Math.random() * 4 - 2); 
    setTimeout(() => {
        const random = APP_DATA.reasonsList[Math.floor(Math.random() * APP_DATA.reasonsList.length)];
        setReason(random);
        setAnimate(false);
    }, 400);
  };
  return (
    <section className="py-24 px-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-rose-100/50 backdrop-blur-sm -z-10"></div>
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
    <section className="min-h-screen py-24 px-4 relative z-10 bg-[#fdfcf8] overflow-hidden">
       <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
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

const MemoryMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isWon, setIsWon] = useState(false);

  // 1. Shuffle Cards on Load
  const shuffleCards = () => {
    // Take first 6 photos and duplicate them to make 12 cards
    const selectedPhotos = APP_DATA.carouselPhotos.slice(0, 6);
    const shuffledCards = [...selectedPhotos, ...selectedPhotos]
      .sort(() => Math.random() - 0.5)
      .map((src, index) => ({ src, id: Math.random(), matched: false }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setIsWon(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  // 2. Handle a Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // 3. Compare 2 Selected Cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000); // Wait 1 sec before flipping back
      }
    }
  }, [choiceOne, choiceTwo]);

  // 4. Check Win Condition
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setIsWon(true);
      if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 100 });
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <section className="py-20 px-4 bg-rose-50 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-8">
          <div className="inline-block p-3 bg-white rounded-full shadow-md mb-4 animate-bounce">
            <Sparkles className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-2">Memory Match</h2>
          <p className="text-rose-700/80 text-lg">Find the matching pairs of our memories! ❤️</p>
          <p className="text-sm text-gray-400 mt-2 font-bold tracking-widest uppercase">Turns: {turns}</p>
        </div>

        {/* GAME GRID */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {cards.map(card => (
            <div 
              key={card.id} 
              className="relative aspect-[3/4] cursor-pointer perspective-1000"
              onClick={() => !disabled && !card.matched && handleChoice(card)}
            >
              <div className={`w-full h-full transition-all duration-500 transform-style-3d ${card === choiceOne || card === choiceTwo || card.matched ? 'rotate-y-180' : ''}`}>
                
                {/* FRONT (Hidden / Pattern) */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl shadow-lg flex items-center justify-center backface-hidden border-4 border-white">
                  <Heart className="w-10 h-10 text-white/50 fill-white/50" />
                </div>

                {/* BACK (Photo Reveal) */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden rotate-y-180 backface-hidden border-4 border-rose-200">
                  <img src={card.src} alt="memory" className="w-full h-full object-cover" />
                  {card.matched && (
                    <div className="absolute inset-0 bg-rose-500/20 flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* WIN MESSAGE */}
        {isWon && (
          <div className="mt-10 animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl inline-block border-4 border-rose-200">
              <h3 className="text-3xl font-bold text-rose-600 mb-2">You Won! 🎉</h3>
              <p className="text-gray-600 mb-6">You know our memories perfectly.</p>
              <button onClick={shuffleCards} className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all">
                Play Again
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};


const ScrollPage = () => {
  return (
    <div className="min-h-screen bg-rose-50 relative overflow-x-hidden">
      {/* 1. Global Background: Fixed and Full Screen */}
      <FloatingElements />
      
      {/* 2. Hero Section: Transparent gradient allowing floating elements to show */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-b from-rose-100/50 via-rose-50/20 to-transparent">
         {/* Vertical Ropes Added Here */}
         <HeroVerticalRopes />
         
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

      {/* 2.5 New Celebration Page */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-b from-rose-50 to-rose-100/50">
         <div className="w-full max-w-4xl z-10 flex justify-center">
            <CelebrationAnimation />
         </div>
      </section>
      
      {/* 3. Timeline: Semi-transparent backdrop */}
      <TimelineSection />

      {/* 3.1. Carousel (Moved here) */}
      <section className="bg-gradient-to-b from-gray-900 to-rose-950 text-white relative z-10 py-16 overflow-hidden">
         <SectionFloatingElements />
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         <div className="text-center mb-8 relative z-10">
            <h3 className="text-3xl font-serif text-rose-200 drop-shadow-md">Our Beautiful Journey</h3>
            <p className="text-rose-300/70">Spinning through time...</p>
         </div>
         <PhotoCarousel />
      </section>
      
      {/* 4. Messages (REDESIGNED: Compact 2x2 Grid) */}
      <MessagesSection />

      {/* 5. Proposal */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-rose-950/90 to-purple-900/90 relative text-white z-10 backdrop-blur-sm">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
         <SectionFloatingElements />
         <div className="max-w-4xl w-full z-10 text-center">
            <Heart className="w-16 h-16 text-rose-500 fill-current mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-serif mb-12">One Special Question...</h2>
            <div className="border-4 border-rose-500/30 rounded-3xl p-2 bg-rose-900/40 backdrop-blur-md">
               <VideoFrame src={APP_DATA.proposalVideo} icon={Heart} placeholderText="The Proposal" />
            </div>
            <p className="mt-8 text-xl font-light italic text-rose-200">"I want to spend every birthday with you."</p>
         </div>
      </section>
      
      <ReasonsGenerator />
      
      {/* 6. Stack Gallery (Moved here with Dark Theme & Typewriter) */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-rose-950 text-white relative z-10 overflow-hidden">
         <SectionFloatingElements />
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-200 mb-4 drop-shadow-sm">A Lifetime of Memories</h2>
            <p className="text-rose-300/70">Click the stack to reveal more...</p>
         </div>
         <StackGallery />
      </section>

      {/* 7. Voice Notes (Digital Chat Gallery) */}
      <section className="py-24 px-4 bg-white/30 backdrop-blur-sm relative z-10">
         <h2 className="text-3xl md:text-5xl font-serif text-center text-rose-900 mb-12">Digital Love Messages</h2>
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:h-auto">
            
            {/* Column 1: Long Custom Text Chat (Left) */}
            <InstaCard title="Her Diary ❤️" icon={<MessageCircle className="w-6 h-6 text-rose-500" />}>
               <CustomTextChat messages={APP_DATA.customTextChat} />
            </InstaCard>

            {/* Column 2: Voice Notes (Center) */}
            <InstaCard title="Voice Notes 🎤" icon={<Mic className="w-6 h-6 text-rose-500" />}>
               <VoiceNoteList notes={APP_DATA.voiceNotes} />
            </InstaCard>
            
            {/* Column 3: Image Messages (Right) */}
            <InstaCard title="Photo Drops 📸" icon={<Image className="w-6 h-6 text-rose-500" />}>
               <ImageMessagesList images={APP_DATA.imageMessages} />
            </InstaCard>

         </div>
      </section>

      <MemoryMatchGame/>
      
      {/* 8. Hanging Gallery (Moved to very end) */}
      <section className="bg-gradient-to-b from-gray-900 to-rose-950 text-white relative z-10 py-16 overflow-hidden">
         <SectionFloatingElements />
         
         {/* Hanging Photos */}
         <div className="py-12 border-b border-rose-800/30">
            <h3 className="text-center text-rose-200 text-3xl font-serif mb-8 drop-shadow-md">Hanging Memories</h3>
            <HangingGallery />
         </div>
      </section>

      <MemoryMatchGame/>

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
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => { setTilt({ x: 0, y: 0 }); };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-950 via-pink-900 to-rose-950 text-white relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="z-10 relative group max-w-lg mx-4 perspective-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <WatchingTeddy />
        <div ref={cardRef} className="relative transition-transform duration-100 ease-out transform-style-3d" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 rounded-[2.5rem] blur-md opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600"></div>
              <div className="absolute top-6 right-6"><div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse border border-white/30">SPECIAL DAY</div></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" style={{ transform: `translate(${tilt.y * 2}px, ${tilt.x * 2}px)` }}></div>
              <div className="px-10 py-16 flex flex-col items-center text-center">
                  <div className="mb-8 relative"><div className="absolute inset-0 bg-rose-500 blur-2xl opacity-40 animate-pulse rounded-full"></div><Heart className="w-24 h-24 text-rose-400 fill-rose-500/20 drop-shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-[ping_3s_ease-in-out_infinite]" style={{ animationDuration: '2s' }} /><Heart className="w-24 h-24 text-white absolute top-0 left-0 animate-bounce" style={{ animationDuration: '2s' }} /></div>
                  <h2 className="text-rose-300 tracking-widest text-sm font-bold uppercase mb-2">You Are Invited To</h2>
                  <h1 className="text-5xl md:text-7xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-rose-100 to-rose-300 drop-shadow-sm leading-tight">For {APP_DATA.wifeName}</h1>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mb-8"></div>
                  <p className="text-lg text-rose-100/90 font-light italic mb-10">"A digital journey through our most beautiful memories."</p>
                  <div className="relative z-20 w-full">
                    <button onClick={() => { setShowQuiz(true); if (!isPlaying) toggleMusic(); }} className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-600 to-pink-600 font-pj rounded-xl focus:outline-none focus:ring-4 focus:ring-rose-300 shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:shadow-[0_0_40px_rgba(225,29,72,0.8)] hover:-translate-y-1 overflow-hidden">
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                      <div className="flex items-center gap-3"><Lock className="w-5 h-5 group-hover:hidden transition-all" /><Unlock className="w-5 h-5 hidden group-hover:block transition-all" /><span>Tap to Unlock</span></div>
                    </button>
                  </div>
                  <p className="mt-6 text-xs text-rose-300/60 uppercase tracking-widest">Password Hint: It's all about us</p>
              </div>
            </div>
        </div>
      </div>
      {showQuiz && <LoveQuiz onClose={() => setShowQuiz(false)} onComplete={onUnlock} />}
      <div className="absolute bottom-5 text-rose-400/50 text-xs tracking-widest uppercase">Made with 🧸 and ❤️</div>
      <style>{` .perspective-container { perspective: 1000px; } .transform-style-3d { transform-style: preserve-3d; } `}</style>
    </div>
  );
};


export default function App() {
  const [currentView, setCurrentView] = useState('entrance');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => { if (audioRef.current) { audioRef.current.volume = 0.4; } }, []);
  const toggleMusic = () => { if (audioRef.current) { if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play().catch(e => console.log('Audio error:', e)); } setIsPlaying(!isPlaying); } };
  return (
    <div className="font-sans text-gray-900 selection:bg-rose-200 selection:text-rose-900">
      <FloatingElements />
      <audio ref={audioRef} src={APP_DATA.musicPath} loop onError={(e) => console.log("Audio load error", e)} />
      <div className="fixed top-6 right-6 z-50">
        <button onClick={toggleMusic} className="bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition-all hover:scale-110 shadow-lg">
          {isPlaying ? <div className="flex items-center gap-2"><Volume2 className="w-6 h-6" /></div> : <div className="flex items-center gap-2"><VolumeX className="w-6 h-6 opacity-70" /></div>}
        </button>
      </div>
      {currentView === 'entrance' ? <EntranceGate onUnlock={() => setCurrentView('scrollPage')} isPlaying={isPlaying} toggleMusic={toggleMusic} /> : <ScrollPage />}
    </div>
  );
}





