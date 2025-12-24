import React, { useState, useEffect } from 'react';
import { 
  Clock, Heart, MapPin, Smile, Infinity as InfinityIcon, Calculator, 
  Utensils, Thermometer, MicOff, ShoppingBag, AlertTriangle, Search, Coffee , Shirt, Layers, Video, Wifi, Camera, BatteryCharging, Moon, Train, Signal, Calendar
} from 'lucide-react';

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


const LoveStats = () => {
  // 📅 CONFIGURATION: Enter your start date here!
  const START_DATE = new Date("2023-01-01T00:00:00"); 

  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - START_DATE;
      setTimeElapsed({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const StatCard = ({ icon, value, label, subtext, color }) => (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-4 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-1">{value}</h3>
      <p className="text-rose-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">{label}</p>
      <p className="text-gray-500 text-xs italic leading-tight opacity-80">{subtext}</p>
    </div>
  );

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden bg-rose-50/20">
       {/* Background Grid */}
       <div className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'linear-gradient(#be185d 1px, transparent 1px), linear-gradient(90deg, #be185d 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
       </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-rose-600 font-bold mb-4 border border-rose-200">
            <Calculator className="w-5 h-5" /> <span>Relationship Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Love by the Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            "They say love can't be measured, but I ran the calculations anyway."
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Live Timer (Span 2 Cols) */}
          
          {/* --- THE FUNNY & LOVABLE CARDS --- */}

          {/* 2. The Fries Thief */}
          {/* 9. The Late Night Ninja */}


          {/* 4. The Arguments (Classic) */}
          <StatCard 
            icon={<AlertTriangle className="w-6 h-6 text-white" />}
            color="bg-red-500"
            value="0"
            label="Arguments I Won"
            subtext="Because clearly, I am wrong even when I am right."
          />
<StatCard 
  icon={<MicOff className="w-6 h-6 text-white" />}
  color="bg-gray-800"
  value="0.2 Seconds"
  label="Mute Reflex Speed"
  subtext="How fast I mute you when I hear footsteps outside my door at 3 AM."
/>


  



    {/* 1. The Video Call Freeze */}
    <StatCard 
    icon={<Video className="w-6 h-6 text-white" />}
    color="bg-indigo-500"
    value="4,000+"
    label="Screenshots Taken"
    subtext="Mostly of you when the video freezes and you look funny."
    />

    {/* 2. The Network Struggle */}
    <StatCard 
    icon={<Wifi className="w-6 h-6 text-white" />}
    color="bg-red-400"
    value="1 Million"
    label="Times I Said"
    subtext="'Hello? Am I audible? Baby? Hello??' (More than I said I Love You)."
    />

    {/* 3. The Sleep Schedule */}
    <StatCard 
    icon={<Moon className="w-6 h-6 text-white" />}
    color="bg-slate-700"
    value="Ruined"
    label="My Sleep Cycle"
    subtext="Staying awake just to talk to you for '5 more minutes' (it takes 2 hours)."
    />

    {/* 4. The Data Sponsor */}
    <StatCard 
    icon={<Signal className="w-6 h-6 text-white" />}
    color="bg-green-500"
    value="500 GB"
    label="Data Invested"
    subtext="Just to see your pixelated face in 144p quality."
    />

    {/* 5. The Charging Life */}
    <StatCard 
    icon={<BatteryCharging className="w-6 h-6 text-white" />}
    color="bg-yellow-500"
    value="Always 10%"
    label="My Battery Health"
    subtext="Because my phone is permanently plugged in during our marathon calls."
    />



    {/* 8. The Countdown */}
    <StatCard 
    icon={<Calendar className="w-6 h-6 text-white" />}
    color="bg-rose-500"
    value="Too Many"
    label="Days Missing You"
    subtext="But 0 days where I didn't think about you."
    />

        </div>
      </div>
    </section>
  );
};

export default LoveStats;