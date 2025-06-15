import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";

const App = () => {
  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [time, setTime] = useState(10);
  
  const startQuiz = () => {
    setIsCorrect(null);
    setScreen("quiz");
  }

  const finishQuiz = (answer: string) => {
    const correctAnswer = 'ブルーロック'
    setIsCorrect(answer === correctAnswer);
    setTime(10);
    setScreen('result');
  }

  const restartQuiz = () => setScreen("start");

  return (
    <>
    {screen === 'start' &&   <Start startQuiz={startQuiz}/>}
    {screen === 'quiz' &&   <Quiz finishQuiz={finishQuiz} time={time} setTime={setTime}/>}
    {screen === 'result' &&   <Result restartQuiz={restartQuiz} isCorrect={isCorrect}/>}
    </>
  )
}

export default App;
