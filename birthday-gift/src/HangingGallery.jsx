import React, { useState, useEffect, useRef } from 'react';
const PHOTOS = [
  "../hanging/13.jpg",
  "../hanging/3.jpg",
  "../hanging/12.jpg",
  "../hanging/1.jpg",
  "../hanging/4.jpg",
  "../hanging/9.jpg",
  "../hanging/7.jpg",
  "../hanging/8.jpg",
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

const HangingGallery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10 relative h-[500px] overflow-hidden">
       <div className="absolute top-10 left-0 right-0 h-1 bg-white/50 transform -rotate-1 rounded-full shadow-sm"></div>
       <div className="absolute top-64 left-0 right-0 h-1 bg-white/50 transform rotate-1 rounded-full shadow-sm"></div>
       <div className="flex justify-around absolute top-10 left-0 right-0">
          {APP_DATA.carouselPhotos.slice(0, 4).map((photo, idx) => (
             <div key={idx} className={`relative group origin-top animate-sway ${idx === 0 || idx === 3 ? 'hidden md:block' : ''}`} style={{ animationDelay: `${idx * 0.5}s` }}>
                <div className="w-0.5 h-16 bg-rose-900/40 mx-auto"></div>
                <div className="w-4 h-8 bg-amber-700 mx-auto -mt-2 rounded-sm shadow-sm relative z-10"></div>
                <div className="bg-white p-2 shadow-lg -mt-2 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 w-32 h-32 md:w-40 md:h-40"><img src={photo} className="w-full h-full object-cover" alt="hanging" /></div>
             </div>
          ))}
       </div>
       <div className="flex justify-around absolute top-64 left-10 right-10">
          {APP_DATA.carouselPhotos.slice(4, 8).map((photo, idx) => (
             <div key={idx} className={`relative group origin-top animate-sway ${idx === 0 || idx === 3 ? 'hidden md:block' : ''}`} style={{ animationDelay: `${(idx + 2) * 0.5}s` }}>
                <div className="w-0.5 h-12 bg-rose-900/40 mx-auto"></div>
                <div className="w-4 h-8 bg-amber-700 mx-auto -mt-2 rounded-sm shadow-sm relative z-10"></div>
                <div className="bg-white p-2 shadow-lg -mt-2 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 w-32 h-32 md:w-40 md:h-40"><img src={photo} className="w-full h-full object-cover" alt="hanging" /></div>
             </div>
          ))}
       </div>
       <style>{` @keyframes sway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } } .animate-sway { animation: sway 4s infinite ease-in-out; } `}</style>
    </div>
  );
};

export default HangingGallery;