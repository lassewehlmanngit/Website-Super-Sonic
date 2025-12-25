import React from 'react';

export const WinterVillage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-[300px] pointer-events-none z-10 select-none">
      
      {/* Ground Snow */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white rounded-t-[50%] scale-x-150 translate-y-8 blur-sm opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-white z-20"></div>

      {/* --- SCENE CONTENT --- */}
      <div className="absolute bottom-[30px] w-full flex justify-between items-end px-4 md:px-20 max-w-[1600px] mx-auto left-0 right-0">

        {/* LEFT FOREST GROUP */}
        <div className="hidden md:flex items-end -space-x-8 opacity-90">
             {/* Pine Tree 1 */}
             <div className="relative w-16 h-32 flex flex-col items-center">
                 <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-[#1a2e1a] translate-y-2"></div>
                 <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[60px] border-b-[#1a2e1a] -mt-6"></div>
                 <div className="w-4 h-6 bg-zinc-800"></div>
             </div>
             {/* Pine Tree 2 */}
             <div className="relative w-20 h-40 flex flex-col items-center -ml-4 z-0">
                 <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[60px] border-b-[#233a23] translate-y-2"></div>
                 <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-[#233a23] -mt-8"></div>
                 <div className="w-5 h-8 bg-zinc-800"></div>
             </div>
        </div>

        {/* VILLAGE GROUP */}
        <div className="flex items-end space-x-2 md:space-x-8 z-10">
            
            {/* House 1 (Small) */}
            <div className="relative w-24 md:w-32 group">
                 {/* Smoke */}
                 <div className="absolute -top-16 left-4 flex flex-col items-center gap-1 opacity-60">
                     <div className="w-2 h-2 bg-zinc-400 rounded-full animate-fade-in-up [animation-duration:2s] [animation-delay:0s] opacity-0"></div>
                     <div className="w-3 h-3 bg-zinc-400 rounded-full animate-fade-in-up [animation-duration:2.5s] [animation-delay:0.5s] opacity-0"></div>
                     <div className="w-4 h-4 bg-zinc-300 rounded-full animate-fade-in-up [animation-duration:3s] [animation-delay:1s] opacity-0"></div>
                 </div>
                 {/* Roof */}
                 <div className="w-0 h-0 border-l-[48px] md:border-l-[64px] border-l-transparent border-r-[48px] md:border-r-[64px] border-r-transparent border-b-[40px] md:border-b-[50px] border-b-zinc-800 relative z-10">
                    <div className="absolute top-[6px] -left-[42px] md:-left-[56px] w-[84px] md:w-[112px] h-[6px] bg-white rounded-full"></div> {/* Snow on roof */}
                 </div>
                 {/* Body */}
                 <div className="w-20 md:w-24 h-20 md:h-24 bg-[#e8e4dc] mx-auto relative shadow-inner border-2 border-zinc-200">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#8b5a2b] rounded-t-sm"></div> {/* Door */}
                     <div className="absolute top-4 left-2 w-6 h-6 bg-yellow-100 border-2 border-[#8b5a2b] grid grid-cols-2 gap-[1px]">
                        <div className="bg-[#8b5a2b] col-span-2 h-[1px] absolute top-1/2 w-full"></div>
                        <div className="bg-[#8b5a2b] row-span-2 w-[1px] absolute left-1/2 h-full"></div>
                     </div> {/* Window */}
                 </div>
            </div>

            {/* CHRISTMAS TREE (Animated) */}
            <div className="relative w-24 md:w-32 flex flex-col items-center mb-[-5px] z-20">
                 <div className="absolute -top-2 text-yellow-400 text-2xl animate-pulse">★</div>
                 
                 {/* Layers */}
                 <div className="relative">
                    <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-green-700 translate-y-1">
                        <div className="absolute top-[15px] left-[-5px] w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="absolute top-[25px] right-[-8px] w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                    </div>
                 </div>
                 <div className="relative -mt-4">
                    <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[50px] border-b-green-800 translate-y-1">
                        <div className="absolute top-[20px] left-[-12px] w-2 h-2 bg-yellow-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        <div className="absolute top-[30px] right-[-10px] w-2 h-2 bg-purple-500 rounded-full animate-pulse [animation-delay:0.7s]"></div>
                    </div>
                 </div>
                 <div className="relative -mt-4">
                    <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[60px] border-b-green-900">
                        <div className="absolute top-[30px] left-[-15px] w-2 h-2 bg-orange-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                         <div className="absolute top-[20px] right-[-12px] w-2 h-2 bg-pink-500 rounded-full animate-pulse [animation-delay:0.9s]"></div>
                    </div>
                 </div>
                 
                 <div className="w-6 h-8 bg-[#4a3728]"></div>
            </div>

            {/* House 2 (Tall) */}
            <div className="relative w-24 md:w-32 hidden xs:block">
                 {/* Chimney */}
                 <div className="absolute top-[-10px] right-6 w-4 h-8 bg-zinc-700"></div>
                 {/* Smoke */}
                 <div className="absolute -top-24 right-6 flex flex-col items-center gap-1 opacity-60">
                     <div className="w-3 h-3 bg-zinc-300 rounded-full animate-fade-in-up [animation-duration:3s] [animation-delay:0.2s] opacity-0"></div>
                     <div className="w-5 h-5 bg-zinc-300 rounded-full animate-fade-in-up [animation-duration:4s] [animation-delay:1.5s] opacity-0"></div>
                 </div>

                 {/* Roof */}
                 <div className="w-0 h-0 border-l-[40px] md:border-l-[50px] border-l-transparent border-r-[40px] md:border-r-[50px] border-r-transparent border-b-[60px] md:border-b-[80px] border-b-[#2c3e50] relative z-10 mx-auto">
                    <div className="absolute top-[6px] -left-[20px] w-[40px] h-[6px] bg-white/90 rotate-45 rounded-full"></div>
                 </div>
                 {/* Body */}
                 <div className="w-16 md:w-20 h-24 md:h-28 bg-[#dcdde1] mx-auto border-2 border-zinc-300 flex flex-col items-center justify-end pb-0">
                     <div className="w-10 h-10 mb-4 bg-sky-200 border border-sky-300 animate-pulse [animation-duration:4s]"></div>
                 </div>
            </div>

        </div>

        {/* RIGHT FOREST GROUP */}
        <div className="hidden lg:flex items-end -space-x-6 opacity-90">
             <div className="relative w-24 h-48 flex flex-col items-center">
                 <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-[#1e331e]"></div>
                 <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-[#1e331e] -mt-10"></div>
                 <div className="w-6 h-10 bg-[#3d2b1f]"></div>
             </div>
        </div>

      </div>

      {/* YETI FAMILY WALKING ANIMATION */}
      {/* Container moves across screen */}
      <div className="absolute bottom-[20px] z-30 animate-marquee [animation-duration:45s] flex items-end gap-2 opacity-90">
           
           {/* Papa Yeti */}
           <div className="relative w-12 h-16 bg-white rounded-t-[1.5rem] rounded-b-[0.5rem] shadow-sm animate-swing [animation-duration:2s]">
                <div className="absolute top-4 left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-6 bg-zinc-100 rounded-[1rem]"></div> {/* Tummy */}
                {/* Arms */}
                <div className="absolute top-6 -left-2 w-3 h-8 bg-white rounded-full rotate-12"></div>
                <div className="absolute top-6 -right-2 w-3 h-8 bg-white rounded-full -rotate-12"></div>
           </div>

           {/* Mama Yeti */}
           <div className="relative w-10 h-14 bg-white rounded-t-[1.5rem] rounded-b-[0.5rem] shadow-sm animate-swing [animation-duration:1.8s] [animation-delay:0.5s]">
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-200 rounded-full opacity-50 blur-[1px]"></div> {/* Bow hint */}
                <div className="absolute top-3 left-2.5 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-3 right-2.5 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-5 bg-zinc-100 rounded-[0.8rem]"></div>
                <div className="absolute top-5 -left-1.5 w-2.5 h-6 bg-white rounded-full rotate-12"></div>
                <div className="absolute top-5 -right-1.5 w-2.5 h-6 bg-white rounded-full -rotate-12"></div>
           </div>

           {/* Baby Yeti */}
           <div className="relative w-6 h-8 bg-white rounded-t-[0.8rem] rounded-b-[0.3rem] shadow-sm animate-swing [animation-duration:1.2s] [animation-delay:1s]">
                <div className="absolute top-2 left-1.5 w-0.5 h-0.5 bg-black rounded-full"></div>
                <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-black rounded-full"></div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-3 bg-zinc-100 rounded-[0.5rem]"></div>
           </div>

      </div>

    </div>
  );
};

