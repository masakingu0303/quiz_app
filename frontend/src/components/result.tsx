type RestartProps = {
    restartQuiz: () => void;
}

const Result = ({ restartQuiz }: RestartProps) => {
    return (
        <div>
            <h2>結果</h2>
            <button className="btn btn-primary" onClick={restartQuiz}>最初の画面に戻る</button>
        </div>
    )
}

export default Result;