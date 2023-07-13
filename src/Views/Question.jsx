import "../Styles/question.scss";

const Question = ({question}) => {
    return(
        <div className="question-container">
            <p>{question}</p>
        </div>
    )
}

export default Question