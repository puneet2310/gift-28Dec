
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Music, Image, ImageIcon, Mic, Star, Lightbulb, ArrowLeft, Key, Gift, Calendar, Video, Lock, Unlock, HelpCircle, CheckCircle, Volume2, VolumeX, Play, Pause, MessageCircle, RefreshCw, Sparkles, Pin, ChevronDown, Mail, Feather, Stamp, Leaf, Type, Quote } from 'lucide-react';

const CrackTheCode = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [history, setHistory] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // 🔒 SECRET CODE (Change this!)
  const SECRET_CODE = "1408"; 

  const handleInput = (num) => {
    if (isWon) return;
    const nextIndex = code.findIndex(val => val === '');
    if (nextIndex !== -1) {
      const newCode = [...code];
      newCode[nextIndex] = num;
      setCode(newCode);
    }
  };

  const handleDelete = () => {
    if (isWon) return;
    // Find the last filled index to delete
    const filledIndices = code.map((val, idx) => (val !== '' ? idx : -1)).filter(i => i !== -1);
    const lastIndex = filledIndices.length > 0 ? filledIndices[filledIndices.length - 1] : -1;

    if (lastIndex !== -1) {
      const newCode = [...code];
      newCode[lastIndex] = '';
      setCode(newCode);
    }
  };

  const checkCode = () => {
    if (code.includes('')) return; // Incomplete

    setAttempts(prev => prev + 1);
    const guess = code.join('');
    
    // WIN CONDITION
    if (guess === SECRET_CODE) {
      setIsWon(true);
      if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 120 });
      return;
    }

    // LOGIC
    let green = 0; 
    let yellow = 0; 
    
    const secretArr = SECRET_CODE.split('');
    const guessArr = guess.split('');
    const secretRemaining = [];
    const guessRemaining = [];

    // Check Greens
    guessArr.forEach((digit, i) => {
      if (digit === secretArr[i]) {
        green++;
      } else {
        secretRemaining.push(secretArr[i]);
        guessRemaining.push(digit);
      }
    });

    // Check Yellows
    guessRemaining.forEach((digit) => {
      const index = secretRemaining.indexOf(digit);
      if (index !== -1) {
        yellow++;
        secretRemaining.splice(index, 1);
      }
    });

    setHistory([{ guess, green, yellow }, ...history]);
    setCode(['', '', '', '']); 
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>

        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-rose-600 text-sm font-bold mb-4 shadow-sm border border-rose-100">
             <Star className="w-4 h-4 fill-rose-500" /> <span>Dil ka lock</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">Lock for the Heart</h2>
          <p className="font-handwriting text-xl text-rose-800/70">"Lock todo.... Gallu ka dil le jao"</p>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">


        
        {/* --- LEFT SIDE: THE NOTE (Instructions) --- */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
           <div className="relative bg-[#fffcf5] p-8 md:p-12 rounded-tr-[3rem] rounded-bl-[3rem] shadow-[8px_8px_0px_rgba(225,29,72,0.1)] border border-[#e6dbcf] rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Paper Texture */}
               <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] rounded-tr-[3rem] rounded-bl-[3rem] pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-center mb-6">
                   <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center border-2 border-rose-200 animate-pulse">
                      <Lock className="w-6 h-6 text-rose-500" />
                   </div>
                 </div>

                 <h3 className="font-serif text-2xl text-[#5c4033] mb-4 font-bold text-center border-b-2 border-[#5c4033]/10 pb-4">
                   The Secret Code
                 </h3>
                 
                 {/* YOUR CUSTOM TEXT */}
                 <p className="font-handwriting text-2xl text-rose-800 leading-relaxed text-center mb-8">
                   "Baby socho kuch apne pyaar se related hai meri bubu... <br/>
                   <span className="text-sm text-[#8b5a2b] block mt-4 font-sans opacity-80">(Hint: It's a special 4-digit date!)</span>"
                 </p>

                 {/* Attempts Counter */}
                 <div className="flex justify-between items-center bg-white/60 p-4 rounded-xl border border-[#8b5a2b]/10">
                   <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Attempts Used</span>
                   <span className="text-3xl font-serif text-rose-600 font-bold">{attempts}</span>
                 </div>
               </div>
           </div>
        </div>

        {/* --- RIGHT SIDE: THE GAME SETUP --- */}
        <div className="w-full md:w-1/2">
          
          {!isWon ? (
            <div className="bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-xl">
              
              {/* Code Display Screen */}
              <div className={`flex justify-center gap-3 mb-8 ${shake ? 'animate-shake' : ''}`}>
                {code.map((digit, i) => (
                  <div key={i} className="w-14 h-16 bg-white rounded-2xl shadow-inner border-2 border-rose-100 flex items-center justify-center text-3xl font-bold text-rose-600">
                    {digit}
                  </div>
                ))}
              </div>

              {/* History Log (Mini) */}
              <div className="h-24 overflow-y-auto mb-6 pr-2 custom-scrollbar space-y-2">
                {history.length === 0 && <p className="text-center text-rose-300 text-sm italic">Guesses will appear here...</p>}
                {history.map((entry, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/80 p-2 px-4 rounded-lg shadow-sm text-sm">
                    <span className="font-mono font-bold text-gray-600 tracking-widest">{entry.guess}</span>
                    <div className="flex gap-2">
                      <span className="text-green-600 font-bold flex items-center gap-1">{entry.green} <CheckCircle size={12}/></span>
                      <span className="text-yellow-600 font-bold flex items-center gap-1">{entry.yellow} <HelpCircle size={12}/></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Love Themed Keypad */}
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button 
                    key={num} 
                    onClick={() => handleInput(num.toString())}
                    className="h-14 bg-white text-rose-900 rounded-xl shadow-[0_4px_0_rgba(253,164,175,0.3)] active:shadow-none active:translate-y-1 transition-all font-bold text-xl hover:bg-rose-50 border border-rose-100"
                  >
                    {num}
                  </button>
                ))}
                
                {/* Delete Button */}
                <button 
                  onClick={handleDelete}
                  className="h-14 bg-rose-100 text-rose-500 rounded-xl shadow-[0_4px_0_rgba(253,164,175,0.3)] active:shadow-none active:translate-y-1 transition-all font-bold flex items-center justify-center hover:bg-rose-200"
                >
                  ⌫
                </button>
                
                <button 
                  onClick={() => handleInput("0")}
                  className="h-14 bg-white text-rose-900 rounded-xl shadow-[0_4px_0_rgba(253,164,175,0.3)] active:shadow-none active:translate-y-1 transition-all font-bold text-xl hover:bg-rose-50 border border-rose-100"
                >
                  0
                </button>

                {/* GO Button (Love Theme) */}
                <button 
                  onClick={checkCode}
                  className="h-14 bg-gradient-to-br from-rose-400 to-rose-600 text-white rounded-xl shadow-[0_4px_0_rgba(190,18,60,0.3)] active:shadow-none active:translate-y-1 transition-all font-bold flex items-center justify-center gap-2 hover:brightness-110"
                >
                  GO <Heart className="w-4 h-4 fill-white" />
                </button>
              </div>

            </div>
          ) : (
            
            // --- WIN STATE (Screenshot Card) ---
            <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border-4 border-rose-200 text-center animate-zoom-in overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300"></div>
               
               <div className="mb-6 flex justify-center">
                 <div className="p-4 bg-green-50 rounded-full animate-bounce border-2 border-green-100">
                   <Unlock className="w-10 h-10 text-green-500 fill-green-500/20" />
                 </div>
               </div>

               <h3 className="text-3xl font-serif text-rose-900 font-bold mb-2">Unlocked My Heart! 💖</h3>
               <p className="text-gray-600 mb-8 font-medium">You know our special dates perfectly.</p>

               <div className="bg-rose-50 p-6 rounded-2xl mb-8 border border-rose-100 rotate-[-2deg]">
                 <p className="font-handwriting text-3xl text-rose-600 mb-2">Cracked in {attempts} Tries</p>
                 <p className="text-[10px] text-rose-400 uppercase font-bold tracking-widest">📸 Take a screenshot & send to me!</p>
               </div>

               <div className="text-xs text-gray-400 uppercase tracking-widest">Code: {SECRET_CODE}</div>
            </div>
          )}

        </div>

      </div>
      
      <style>{`
        .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #fca5a5; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default CrackTheCode;