import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [fadeInStart1, setFadeInStart1] = useState(false);
  const [fadeInStart2, setFadeInStart2] = useState(false);
  const [fadeInStart3, setFadeInStart3] = useState(false);
  const [fadeOutStart, setFadeOutStart] = useState(false);
  const [hiddenOutStart, setHiddenOutStart] = useState(false);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeInStart1(true), 500);
    setTimeout(() => setFadeInStart2(true), 700); 
    setTimeout(() => setFadeInStart3(true), 1000); 
    setTimeout(() => setFadeOutStart(true), 900); 
    setTimeout(() => setHiddenOutStart(true), 1400);

    
    setTimeout(() => setSpin(true), 1500);
  }, []);

  return (
    <div className="bg-gray-200 font-bold flex flex-col items-center">
      <div className="bg-[#0065FF] pl-11 xl:ml-0 overflow-hidden py-11 sm:max-w-[600px] max-w-[320px] w-full">
        <h1 className={`text-white font-bold sm:text-[60px] text-[30px] sm:max-w-[350px] sm:leading-[60px] max-w-[180px] leading-[30px] transition-opacity duration-1000  ${fadeInStart1 ? 'animate-fade-in ' : 'opacity-0'}`}>
          Sevimli taomlaringizga buyurtma bering
        </h1>
        <button className={`bg-[#E1FFA6] rounded-3xl sm:text-[45px] text-[23px] sm:p-2 sm:w-[222px] w-[110px] sm:h-[92px] h-[50px] mt-8 transition-opacity duration-1000 ${fadeInStart2 ? 'animate-fade-in' : 'opacity-0'}`}>
          Batafsil
        </button>

        <div className="flex justify-end relative text-white">
          <img
            src="image/Group 383.svg"
            alt="Animated graphic"
            className={`relative sm:left-[250px] left-[120px] transition-opacity ${fadeOutStart ? 'animate-fade-out' : 'opacity-0'} ${spin ? 'animate-spin' : ''}`}
          />
          <button id="button" className={`absolute sm:top-[250px] top-[120px] sm:w-[449px] w-[260px] sm:h-[160px] h-[80px] sm:left-5 -left-3 sm:text-[46px] text-[24px] rounded-3xl -rotate-12 transition-opacity duration-1000 ${hiddenOutStart ? 'animate-scale-in' : 'opacity-0'}`}>
            Click "Taomlar yetkazish" xizmati
          </button>
        </div>

        <div className={`flex items-center mt-[65px] transition-opacity duration-1000 ${fadeInStart3 ? 'animate-fade-in' : 'opacity-0'}`}>
          <img src="image/_e.svg" alt="Icon" className="sm:w-[85px] w-14" />
          <div className="font-bold sm:ml-4 ml-2 sm:text-[45px] text-[20px]">
            <p className="text-white">Taomlar yetkazish</p>
            <p>click</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
