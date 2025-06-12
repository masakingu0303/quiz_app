type FinishProps = {
    finishQuiz: () => void;
}

const Quiz = ({ finishQuiz } :FinishProps) => {
    return (
        <div className="flex justify-center items-center container min-h-screen">
            <div className="p-8 bg-base-100 w-96 shadow-sm bg-sky-100">
                <h2 className="text-center text-lg font-bold">この中で一番新しいアニメは？</h2>
                {/* <div className="text-center">ゲージ</div> */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <button className="btn btn-wide">ワンピース</button>
                    <button className="btn btn-wide">鬼滅の刃</button>
                    <button className="btn btn-wide">ハンター×ハンター</button>
                    <button className="btn btn-wide">ブルーロック</button>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="btn btn-accent rounded-full w-16 h-16" onClick={finishQuiz}>
                        決定
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Quiz;