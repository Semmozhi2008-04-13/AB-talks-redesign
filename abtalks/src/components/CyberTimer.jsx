import React, { useState, useEffect } from 'react';

const CyberTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to 2 digits
  const formatNumber = (num) => String(num).padStart(2, '0');

  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-20 md:w-20 md:h-24 bg-[#0a0a0a] border border-cyan-500/30 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,204,0.3)]">
        <span className="text-2xl md:text-4xl font-digital text-cyan-400 text-glow tracking-wider">
          {formatNumber(value)}
        </span>
      </div>
      <span className="mt-3 text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 text-white">
      <TimerBox value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-4xl font-digital text-cyan-400/50 pb-8">:</span>
      <TimerBox value={timeLeft.hours} label="Hrs" />
      <span className="text-2xl md:text-4xl font-digital text-cyan-400/50 pb-8">:</span>
      <TimerBox value={timeLeft.minutes} label="Min" />
      <span className="text-2xl md:text-4xl font-digital text-cyan-400/50 pb-8">:</span>
      <TimerBox value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

export default CyberTimer;