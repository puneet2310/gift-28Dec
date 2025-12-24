import React, { useState } from 'react';
import { Stethoscope, Pill, Thermometer, Activity, HeartPulse } from 'lucide-react';

const MoodClinic = () => {
  const [prescription, setPrescription] = useState(null);

  const MOODS = [
    {
      id: 1,
      icon: "😡",
      label: "Angry Bird",
      diagnosis: "Acute Grumpiness Syndrome",
      rx: "Unlimited 'Sorrys' from Husband & 1 large Pizza."
    },
    {
      id: 2,
      icon: "🥺",
      label: "Needy Baby",
      diagnosis: "Severe Vitamin 'U' Deficiency",
      rx: "10 Tight Hugs (Virtual) & 2 hours of Cuddling (Pending)."
    },
    {
      id: 3,
      icon: "😭",
      label: "Crying Monster",
      diagnosis: "Over-Emotional Overload",
      rx: "Immediate Video Call & Baby Talk Therapy."
    },
    {
      id: 4,
      icon: "😴",
      label: "Sleepy Panda",
      diagnosis: "Hibernation Mode Active",
      rx: "Warm blanket & forehead kisses."
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10 bg-blue-50/50">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-bold mb-4 border border-blue-200">
            <Stethoscope className="w-5 h-5" /> <span>Emergency Care</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Dr. Puneet's Mood Clinic</h2>
          <p className="text-gray-600">
            "Specialized healthcare for my favorite baby girl. Tell me, where does it hurt?"
          </p>
        </div>

        {/* Mood Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {MOODS.map((mood) => (
            <button 
              key={mood.id}
              onClick={() => setPrescription(mood)}
              className="bg-white p-6 rounded-3xl shadow-lg border-4 border-transparent hover:border-blue-200 transform hover:-translate-y-2 transition-all group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{mood.icon}</div>
              <h3 className="font-bold text-gray-700 text-lg">{mood.label}</h3>
            </button>
          ))}
        </div>

        {/* PRESCRIPTION CARD (Pops up) */}
        {prescription && (
          <div className="max-w-md mx-auto animate-zoom-in">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-8 border-blue-500 relative">
              {/* Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
                <Activity className="w-4 h-4" /> OFFICIAL RX
              </div>

              <div className="text-left mt-4 border-b-2 border-dashed border-gray-200 pb-6 mb-6">
                 <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Patient Name</p>
                 <p className="text-xl font-serif font-bold text-gray-800">Bubu (The Baby)</p>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <p className="flex items-center gap-2 font-bold text-red-500 text-sm uppercase">
                    <Thermometer className="w-4 h-4" /> Diagnosis:
                  </p>
                  <p className="text-lg text-gray-800 font-medium">{prescription.diagnosis}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="flex items-center gap-2 font-bold text-blue-600 text-sm uppercase mb-1">
                    <Pill className="w-4 h-4" /> Treatment Plan:
                  </p>
                  <p className="text-xl font-handwriting text-blue-900 leading-relaxed">
                    "{prescription.rx}"
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-end">
                <div className="text-left">
                   <p className="text-[10px] text-gray-400">Date: Today</p>
                   <p className="text-[10px] text-gray-400">Ref: LUV-143</p>
                </div>
                <div className="text-right">
                   <p className="font-handwriting text-2xl text-blue-600 transform -rotate-12">Dr. Puneet</p>
                   <p className="text-[10px] uppercase font-bold text-gray-400 border-t border-gray-300 pt-1">Chief Love Officer</p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MoodClinic;