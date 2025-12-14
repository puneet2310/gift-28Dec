import React, { useState } from 'react';
import { Heart, X, Gift, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

// --- Local Configuration for this Component ---
const ASSETS = {
  // Using the same 3D characters for consistency
  boyChar: "https://static.vecteezy.com/system/resources/previews/024/785/828/original/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png",
  girlChar: "https://static.vecteezy.com/system/resources/previews/024/785/747/original/3d-happy-cartoon-girl-on-transparent-background-generative-ai-png.png",
};

const MYSTERY_GIFTS = [
  {
    id: 1,
    label: "Gift 1",
    emoji: "🌹",
    bgColor: "bg-red-100",
    title: "A Promise",
    content: "I promise to always be your biggest fan and your safe place. No matter what life throws at us, I'm right here by your side."
  },
  {
    id: 2,
    label: "Gift 2",
    emoji: "💍",
    bgColor: "bg-blue-100",
    title: "A Memory",
    content: "Remember our first trip? That moment I realized I never wanted to travel through life with anyone else but you."
  },
  {
    id: 3,
    label: "Gift 3",
    emoji: "🍫",
    bgColor: "bg-purple-100",
    title: "A Wish",
    content: "My only wish for you today is that you see yourself the way I see you: Absolutely perfect, strong, and incredibly loved."
  }
];

const BackgroundDecor = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i} 
        className="absolute text-2xl opacity-30 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 10}s`,
          animationDelay: `-${Math.random() * 5}s`
        }}
      >
        {['🌸', '❤️', '✨', '🧸'][i % 4]}
      </div>
    ))}
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      .animate-float { animation: float linear infinite; }
    `}</style>
  </div>
);

export default function GiftFlow({ onFinished }) {
  const [step, setStep] = useState('ask'); // 'ask' | 'angry' | 'choose' | 'opened'
  const [openedGift, setOpenedGift] = useState(null);

  // --- Handlers ---
  
  const handleNo = () => {
    setStep('angry');
  };

  const handleYes = () => {
    setStep('choose');
  };

  const handleRetry = () => {
    setStep('ask');
  };

  const handleOpenGift = (gift) => {
    setOpenedGift(gift);
    setStep('opened');
  };

  const handleBackToChoice = () => {
    setOpenedGift(null);
    setStep('choose');
  };

  // --- Renders ---

  // 1. The Question Screen
  if (step === 'ask') {
    return (
      <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <BackgroundDecor />
        
        <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-4 border-white text-center relative z-10 animate-fade-in">
           {/* Character */}
           <div className="h-48 flex justify-center items-end mb-6">
              <img src={ASSETS.boyChar} alt="Boy asking" className="h-full object-contain drop-shadow-xl animate-bounce-subtle" />
           </div>

           <h2 className="text-2xl font-bold text-rose-600 mb-2 font-serif uppercase tracking-widest">Pls Accept The Gift</h2>
           <p className="text-gray-500 mb-8 text-sm">I have a surprise for you!</p>

           <div className="flex gap-6 justify-center">
              <button 
                onClick={handleYes}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold shadow-lg transform hover:scale-110 transition-all flex items-center gap-2 group"
              >
                <CheckCircle className="w-5 h-5 group-hover:animate-ping" /> YES
              </button>
              
              <button 
                onClick={handleNo}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold shadow-lg transform hover:scale-110 transition-all flex items-center gap-2"
              >
                <X className="w-5 h-5" /> NO
              </button>
           </div>
        </div>
        <style>{` .animate-bounce-subtle { animation: bounce 2s infinite; } `}</style>
      </div>
    );
  }

  // 2. The Angry "How Dare You" Screen
  if (step === 'angry') {
    return (
      <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
         <div className="max-w-md w-full bg-white/90 rounded-3xl p-8 shadow-2xl border-4 border-red-200 text-center animate-shake z-10">
            <div className="h-48 flex justify-center items-end mb-6 relative">
               <img src={ASSETS.boyChar} alt="Boy angry" className="h-full object-contain filter hue-rotate-15 contrast-125 sepia-[.3]" />
               <div className="absolute top-0 right-10 text-6xl animate-ping">💢</div>
               <div className="absolute top-10 left-10 text-6xl animate-ping" style={{ animationDelay: '0.2s' }}>😤</div>
            </div>

            <h2 className="text-3xl font-black text-red-600 mb-4 uppercase tracking-widest">HOW DARE YOU!</h2>
            <p className="text-red-400 mb-8 font-medium">You cannot say no to my love! 🥺</p>

            <button 
              onClick={handleRetry}
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" /> OKAY, I'M SORRY! TRY AGAIN
            </button>
         </div>
         <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px) rotate(-5deg); }
              75% { transform: translateX(10px) rotate(5deg); }
            }
            .animate-shake { animation: shake 0.4s ease-in-out infinite; }
         `}</style>
      </div>
    );
  }

  // 3. The "Choose a Gift" Screen
  if (step === 'choose') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <BackgroundDecor />
        <div className="max-w-xl w-full z-10 text-center">
            <div className="mb-8 animate-fade-in-down">
               <div className="inline-block px-4 py-1 bg-white rounded-full text-rose-500 text-xs font-bold tracking-widest shadow-sm mb-4">SURPRISE UNLOCKED</div>
               <h2 className="text-4xl font-serif text-rose-900 mb-2">Present For You</h2>
               <p className="text-rose-400">Pick a gift to open your special message</p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
               {MYSTERY_GIFTS.map((gift, idx) => (
                  <button 
                    key={gift.id}
                    onClick={() => handleOpenGift(gift)}
                    className="relative group aspect-[3/4] bg-white rounded-2xl shadow-xl border-2 border-rose-100 hover:border-rose-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center justify-center p-4 overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-gradient-to-t from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">{gift.emoji}</div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-rose-500">{gift.label}</span>
                     
                     <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-rose-400">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </button>
               ))}
            </div>

            <div className="mt-12 opacity-50 text-xs text-rose-900">
               Click any gift to see what's inside!
            </div>
            
            {/* Optional: Skip/Finish Button if this is part of a larger flow */}
            {onFinished && (
               <button onClick={onFinished} className="mt-6 text-rose-400 underline text-sm hover:text-rose-600">
                  Continue to Main Site
               </button>
            )}
        </div>
      </div>
    );
  }

  // 4. The "Opened Gift" Modal
  if (step === 'opened' && openedGift) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
         <div className={`max-w-md w-full ${openedGift.bgColor} rounded-[2.5rem] p-8 shadow-2xl relative border-8 border-white transform transition-all duration-500 scale-100`}>
            <button 
              onClick={handleBackToChoice}
              className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-white rounded-full text-gray-500 hover:text-gray-800 transition-colors"
            >
               <X className="w-6 h-6" />
            </button>

            <div className="text-center pt-8">
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl shadow-inner mx-auto mb-6">
                  {openedGift.emoji}
               </div>
               
               <h3 className="text-3xl font-serif text-gray-800 mb-6">{openedGift.title}</h3>
               
               <div className="bg-white/60 p-6 rounded-2xl border border-white/40 shadow-sm">
                 <p className="font-handwriting text-xl text-gray-700 leading-relaxed">
                    "{openedGift.content}"
                 </p>
               </div>

               <div className="mt-8">
                  <button 
                    onClick={handleBackToChoice}
                    className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-colors"
                  >
                    Open Another
                  </button>
               </div>
            </div>
         </div>
      </div>
    );
  }

  return null;
}