import { useEffect, useState } from "react";

type FinishProps = {
  finishQuiz: (selectedAnswer: string) => void;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};


const Quiz = ({ finishQuiz, time, setTime }: FinishProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (answer: string) => {
    setSelected(answer);
  };

    useEffect(() => {
      if (time <= 0) {
        finishQuiz(""); 
        return;
      }
  
      const timer = setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [time]);

  return (
    <div className="flex justify-center items-center container min-h-screen">
      <div className="p-8 bg-base-100 w-96 shadow-sm bg-sky-100">
        <h2 className="text-center text-lg font-bold">この中で一番新しいアニメは？</h2>
        <h3>{time}</h3>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {["ワンピース", "鬼滅の刃", "ハンター×ハンター", "ブルーロック"].map((title) => (
            <button
              key={title}
              className={`btn btn-wide ${selected === title ? "btn-primary" : ""}`}
              onClick={() => handleSelect(title)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="btn btn-accent rounded-full w-16 h-16"
            onClick={() => selected && finishQuiz(selected)}
            disabled={!selected}
          >
            決定
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
