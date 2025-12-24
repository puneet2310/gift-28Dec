import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Image, ImageIcon, Mic, Star, Lightbulb, ArrowLeft, Key, Gift, Calendar, Video, Lock, Unlock, HelpCircle, CheckCircle, Volume2, VolumeX, Play, Pause, MessageCircle, RefreshCw, Sparkles, Pin, ChevronDown, Mail, Feather, Stamp, Leaf, Type, Quote } from 'lucide-react';

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
  startDate: "2021-08-14T00:00:00",
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


const MemoryMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isWon, setIsWon] = useState(false);

  // 1. Shuffle Cards
  const shuffleCards = () => {
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

  // 2. Handle Choice (BUG FIXED HERE)
  const handleChoice = (card) => {
    // FIX: If the user clicks the same card they just opened, do nothing.
    if (choiceOne && choiceOne.id === card.id) {
        return;
    }
    
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // 3. Compare Cards
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
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // 4. Check Win
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setIsWon(true);
      if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 100, origin: { x: 0.7 } });
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-rose-600 text-sm font-bold mb-4 shadow-sm border border-rose-100">
             <Star className="w-4 h-4 fill-rose-500" /> <span>Interactive Memories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">The Memory Game</h2>
          <p className="font-handwriting text-xl text-rose-800/70">"Every picture tells a story... can you match them all?"</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- RIGHT SIDE: STATIONERY NOTE --- */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center min-h-[300px]">
            
            {!isWon ? (
              <div className="relative bg-[#fffcf5] p-8 md:p-10 rounded-tr-[3rem] rounded-bl-[3rem] shadow-[8px_8px_0px_rgba(225,29,72,0.1)] border border-[#e6dbcf] rotate-1 hover:rotate-0 transition-transform duration-500">
                 {/* Paper Texture Overlay */}
                 <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] rounded-tr-[3rem] rounded-bl-[3rem] pointer-events-none"></div>
                 
                 <div className="relative z-10">
                   <div className="flex justify-center mb-6">
                     <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center border-2 border-rose-200">
                        <Pin className="w-6 h-6 text-rose-500 fill-rose-500" />
                     </div>
                   </div>

                   <h3 className="font-serif text-2xl text-[#5c4033] mb-4 font-bold text-center border-b-2 border-[#5c4033]/10 pb-4">
                     A Little Challenge
                   </h3>
                   
                   <p className="font-handwriting text-xl text-[#8b5a2b] leading-relaxed text-center mb-8">
                     "Flip the cards to find the matching moments. These are the memories I cherish the most!" <br/>
                     "Also take the screenshot and send me, Mujhe bhi to jaan-na hai ki kitne turn me aap jeeti hai Heehehe!!"
                   </p>

                   <div className="flex justify-between items-center bg-white/60 p-4 rounded-xl border border-[#8b5a2b]/10">
                     <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Moves Taken</span>
                     <span className="text-3xl font-serif text-rose-600 font-bold">{turns}</span>
                   </div>
                 </div>
              </div>
            ) : (
              
              // --- WIN STATE (Elegant Card) ---
              <div className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border-4 border-rose-100 text-center overflow-hidden animate-zoom-in">
                 <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300"></div>
                 
                 <div className="mb-6 flex justify-center">
                   <div className="p-4 bg-green-50 rounded-full animate-bounce">
                     <Star className="w-12 h-12 text-green-500 fill-green-500" />
                   </div>
                 </div>

                 <h3 className="text-3xl font-serif text-rose-900 font-bold mb-2">Wonderful! 🎉</h3>
                 <p className="text-gray-600 mb-8 font-medium">You found all the memories perfectly!</p>

                 <div className="bg-rose-50 p-6 rounded-2xl mb-8 border border-rose-100 rotate-[-2deg]">
                   <p className="font-handwriting text-3xl text-rose-600 mb-2">{turns} Turns</p>
                   <p className="text-[10px] text-rose-400 uppercase font-bold tracking-widest">📸 Screenshot this & send it to me!</p>
                 </div>

                 <button 
                   onClick={shuffleCards} 
                   className="w-full py-4 bg-rose-500 text-white rounded-xl font-bold shadow-lg hover:bg-rose-600 transition-all flex items-center justify-center gap-2 hover:shadow-rose-300/50"
                 >
                   <RefreshCw className="w-5 h-5" /> Play Again
                 </button>
              </div>
            )}

          </div>

          {/* --- LEFT SIDE: ELEGANT CARD GRID --- */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-xl relative">
               {/* Frame Screws (Visual Detail) */}
               <div className="absolute top-6 left-6 w-3 h-3 bg-rose-200 rounded-full"></div>
               <div className="absolute top-6 right-6 w-3 h-3 bg-rose-200 rounded-full"></div>
               <div className="absolute bottom-6 left-6 w-3 h-3 bg-rose-200 rounded-full"></div>
               <div className="absolute bottom-6 right-6 w-3 h-3 bg-rose-200 rounded-full"></div>

               <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {cards.map(card => (
                  <div 
                    key={card.id} 
                    className="relative aspect-[3/4] cursor-pointer perspective-1000 group"
                    // LOGIC UPDATED: Prevent clicks if disabled or card is already matched
                    onClick={() => !disabled && !card.matched && handleChoice(card)}
                  >
                    <div className={`w-full h-full transition-all duration-700 transform-style-3d shadow-md hover:shadow-xl rounded-xl ${card === choiceOne || card === choiceTwo || card.matched ? 'rotate-y-180' : ''}`}>
                      
                      {/* FRONT (Pattern - Royal Rose Style) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-900 to-rose-700 rounded-xl flex items-center justify-center backface-hidden border-2 border-rose-300/30">
                        <div className="w-[85%] h-[85%] border border-rose-400/30 rounded-lg flex items-center justify-center">
                           <Heart className="w-6 h-6 text-rose-200/50 fill-rose-200/50" />
                        </div>
                      </div>

                      {/* BACK (Photo - Polaroid Style) */}
                      <div className="absolute inset-0 bg-white p-2 rounded-xl overflow-hidden rotate-y-180 backface-hidden shadow-inner flex flex-col items-center">
                        <div className="w-full h-[85%] overflow-hidden rounded-md bg-gray-100">
                           <img src={card.src} alt="memory" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[15%] flex items-center justify-center">
                           {card.matched ? <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> : <div className="w-8 h-1 bg-gray-100 rounded-full"></div>}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>

          

        </div>
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

export default MemoryMatchGame;