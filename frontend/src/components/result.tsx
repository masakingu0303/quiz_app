type RestartProps = {
    restartQuiz: () => void;
    isCorrect: boolean | null;
};

const Result = ({ restartQuiz, isCorrect }: RestartProps) => {
    return (
        <div>
            <h2>結果</h2>
            {isCorrect ? (
                <div>正解</div>
            ) : (
                <div></div>
            )}
            <button className="btn btn-primary" onClick={restartQuiz}>
                最初の画面に戻る
            </button>
        </div>
    )
}

export default Result;