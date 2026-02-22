import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-urgency text-urgency-foreground shadow-2xl">
      <div className="container max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="font-bold text-sm sm:text-base">⚠️ Oferta especial termina em:</span>
        <div className="flex items-center gap-2">
          <span className="bg-black/20 rounded px-3 py-1 font-bold text-xl sm:text-2xl tabular-nums min-w-[50px] text-center">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="font-bold text-xl">:</span>
          <span className="bg-black/20 rounded px-3 py-1 font-bold text-xl sm:text-2xl tabular-nums min-w-[50px] text-center">
            {String(seconds).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm opacity-90 hidden md:inline">
          Cada minuto pode estar custando dinheiro do seu bolso.
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
