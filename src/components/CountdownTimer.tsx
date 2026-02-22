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

  const TimeBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="bg-urgency text-urgency-foreground text-3xl sm:text-5xl font-bold rounded-lg px-4 py-3 min-w-[70px] sm:min-w-[90px] text-center tabular-nums shadow-lg">
        {value}
      </span>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section className="py-12 sm:py-16 bg-warm">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <p className="text-urgency font-bold text-lg sm:text-xl mb-6">
          ⚠️ Oferta especial termina em:
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 mb-6">
          <TimeBlock value={String(minutes).padStart(2, "0")} label="Minutos" />
          <span className="text-urgency text-4xl sm:text-5xl font-bold self-start pt-3">:</span>
          <TimeBlock value={String(seconds).padStart(2, "0")} label="Segundos" />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
          Não deixe para depois. Cada minuto pode estar custando dinheiro do seu bolso.
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
