
import React, { useState, useEffect, useRef } from 'react';
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


export default HeroVerticalRopes;