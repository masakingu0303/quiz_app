type StartProps = {
    startQuiz: () => void;  
  };
  
  const Start = ({ startQuiz }: StartProps) => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <button className="btn btn-primary" onClick={startQuiz}>Start</button>
      </div>
    );
  };
  
  export default Start;
  