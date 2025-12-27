import React, { useState } from 'react';
import { Scroll, PenTool, Check, Heart, AlertCircle, Sparkles } from 'lucide-react';

const RelationshipContract = () => {
  const [signedName, setSignedName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [checks, setChecks] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false
  });

  const toggleCheck = (key) => {
    if (!isSigned) {
      setChecks(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleSign = () => {
    if (signedName.trim().length > 0 && Object.values(checks).every(v => v)) {
      setIsSigned(true);
      if (typeof confetti === 'function') confetti({ particleCount: 400, spread: 160 });
    } else {
      alert("You must agree to all terms of affection first! 😤❤️");
    }
  };

  return (
    // FIX: Removed 'bg-[#fdfbf7]' so the sparkles from ScrollPage are visible!
    <section className="py-24 px-4 relative z-10">
      
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-rose-600 font-bold mb-4 border border-rose-200 shadow-sm">
            <Scroll className="w-5 h-5" /> <span>Official Love Document</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-950 mb-4 drop-shadow-sm">The Love Agreement</h2>
          <p className="text-rose-800/80 font-handwriting text-xl">
            "A binding promise to keep annoying and loving each other forever."
          </p>
        </div>

        {/* The Contract Paper */}
        {/* Using bg-white/90 allows a tiny bit of background to bleed through while keeping text readable */}
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_rgba(225,29,72,0.15)] border-4 border-rose-100 relative overflow-hidden transform transition-all hover:scale-[1.01]">
          
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
             <div className="bg-rose-500 text-white text-xs font-bold py-1 text-center transform rotate-45 translate-x-8 translate-y-6 shadow-md w-40">
               OFFICIAL
             </div>
          </div>

          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#f43f5e 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>

          {/* STAMP (Visible after signing) */}
          {isSigned && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-zoom-in pointer-events-none">
              <div className="border-8 border-rose-500 text-rose-500 rounded-full w-64 h-64 flex flex-col items-center justify-center transform -rotate-12 opacity-90 mix-blend-multiply bg-white/10 backdrop-blur-sm">
                <Heart className="w-12 h-12 fill-rose-500 mb-2 animate-pulse" />
                <span className="text-4xl font-black uppercase tracking-widest text-center leading-tight">OFFICIALLY<br/>YOURS</span>
              </div>
            </div>
          )}

          {/* Contract Header */}
          <div className="border-b-2 border-rose-100 pb-6 mb-8 text-center relative z-10">
            <h3 className="text-3xl font-serif font-bold uppercase tracking-widest text-rose-900 mb-2">Renewal of Vows</h3>
            <p className="font-mono text-xs text-rose-400">Ref: LDR-FOREVER-2025 | Valid Until: Infinity</p>
          </div>

          {/* The Parties */}
          <div className="mb-8 font-serif text-lg leading-relaxed text-gray-700 text-center relative z-10">
            <p className="mb-4">
              This agreement is made between <br/>
              <span className="font-bold text-rose-600 text-xl border-b-2 border-rose-200 px-2">Puneet</span> 
              <span className="text-sm italic text-gray-400 mx-2">&</span> 
              <span className="font-bold text-rose-600 text-xl border-b-2 border-rose-200 px-2">Bubu</span>.
            </p>
            <p className="italic text-gray-500 text-base">
              "By signing this, the Wife agrees to tolerate the Husband's bad jokes and late-night gaming for lifetime."
            </p>
          </div>

          {/* CLAUSES */}
          <div className="space-y-4 mb-10 relative z-10">
            
            {/* Clause 1 */}
            <div 
              onClick={() => toggleCheck('c1')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 group ${checks.c1 ? 'bg-rose-50 border-rose-400 shadow-sm' : 'bg-white border-rose-100 hover:border-rose-300'}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checks.c1 ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-400'}`}>
                {checks.c1 && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <h4 className="font-bold text-rose-900">1. The "Aur Batao" Treaty</h4>
                <p className="text-sm text-gray-600">Mai promise krta hu ki jb jb aap "Aur-Batao" bolengi mai hmesa aap ka jwb dunga bina chidchidaye hue.</p>
              </div>
            </div>

            {/* Clause 2 */}
            <div 
              onClick={() => toggleCheck('c2')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 group ${checks.c2 ? 'bg-rose-50 border-rose-400 shadow-sm' : 'bg-white border-rose-100 hover:border-rose-300'}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checks.c2 ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-400'}`}>
                {checks.c2 && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <h4 className="font-bold text-rose-900">2. The Screenshot Immunity</h4>
                <p className="text-sm text-gray-600">Mai aapko apne video call face ke badsurat screenshots lene ki ijazat deta hu (lekin kabhi post mat karna! Plazzzz).</p>
              </div>
            </div>

            {/* Clause 3 */}
            <div 
              onClick={() => toggleCheck('c3')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 group ${checks.c3 ? 'bg-rose-50 border-rose-400 shadow-sm' : 'bg-white border-rose-100 hover:border-rose-300'}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checks.c3 ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-400'}`}>
                {checks.c3 && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <h4 className="font-bold text-rose-900">3. The "Always Have Right to Irritate You"</h4>
                <p className="text-sm text-gray-600">Mujhe hmesa aapko pyaar ke saath hi aapko chidchidwane ka mauka milna chahyieee... Heheheheee Bolo bolo.</p>
              </div>
            </div>

            {/* Clause 4 */}
            <div 
              onClick={() => toggleCheck('c4')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 group ${checks.c4 ? 'bg-rose-50 border-rose-400 shadow-sm' : 'bg-white border-rose-100 hover:border-rose-300'}`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${checks.c4 ? 'bg-rose-500 border-rose-500' : 'border-rose-200 bg-white group-hover:border-rose-400'}`}>
                {checks.c4 && <Check className="w-3 h-3 text-white" />}
              </div>
              <div>
                <h4 className="font-bold text-rose-900">4. The Forever Promise</h4>
                <p className="text-sm text-gray-600">Mai wada karta hu ki doori, lag, aur time difference ke bawajood aap se pyaar karta rahunga. Aur aapko bhi hmesa saath dena pdega mera !!</p>
              </div>
            </div>

          </div>

          {/* SIGNATURE AREA */}
          <div className="bg-rose-50/50 p-6 rounded-2xl border-2 border-dashed border-rose-200 relative z-10">
            <p className="font-serif text-rose-800 font-bold mb-4 flex items-center gap-2">
              <PenTool className="w-5 h-5" /> Sign Here to being by lifetime partner ❤️:
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Type your name (e.g., Mrs. Puneet)" 
                value={signedName}
                onChange={(e) => setSignedName(e.target.value)}
                disabled={isSigned}
                className="flex-1 px-5 py-3 rounded-xl border border-rose-200 font-handwriting text-2xl text-rose-600 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
              />
              <button 
                onClick={handleSign}
                disabled={isSigned}
                className={`px-8 py-3 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg flex items-center gap-2
                  ${isSigned ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700'}
                `}
              >
                {isSigned ? <Sparkles className="w-5 h-5" /> : <PenTool className="w-5 h-5" />}
                {isSigned ? "Signed & Sealed" : "Seal with Love"}
              </button>
            </div>
            
            {!isSigned && (
              <p className="text-xs text-rose-400/80 mt-3 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" /> Note: Ticking all boxes is mandatory for birthday cake.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RelationshipContract;