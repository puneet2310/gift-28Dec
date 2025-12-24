
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

const TimelineSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-transparent -z-10"></div>
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

export default TimelineSection;