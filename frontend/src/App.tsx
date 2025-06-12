import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";

const App = () => {
  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start");
  
  const startQuiz = () => setScreen("quiz");
  const finishQuiz = () => setScreen("result");
  const restartQuiz = () => setScreen("start");
  return (
    <>
    {screen === 'start' &&   <Start startQuiz={startQuiz}/>}
    {screen === 'quiz' &&   <Quiz finishQuiz={finishQuiz}/>}
    {screen === 'result' &&   <Result restartQuiz={restartQuiz}/>}
    </>
  )
}

export default App;
