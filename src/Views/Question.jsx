import "../Styles/question.scss";

const Question = ({question}) => {
    console.log(question);
    return(
        <div className="question-container">
            <p>{question}</p>
        </div>
    )
}

export default Question