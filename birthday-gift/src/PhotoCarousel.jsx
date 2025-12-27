
import React, { useState, useEffect, useRef } from 'react';
const PHOTOS = [
  "../corousel/1.jpg",
  "../corousel/10.jpg",
  "../corousel/2.jpg",
  "../corousel/7.jpg",
  "../corousel/3.jpg",
  "../corousel/9.webp",
  "../corousel/5.jpg",
  "../corousel/6.jpg",
  "../corousel/11.jpg",
  "../corousel/12.jpg",
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

export default PhotoCarousel;