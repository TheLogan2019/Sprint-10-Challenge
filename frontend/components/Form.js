import React from "react";
import { connect } from "react-redux";
import { inputChange, postQuiz } from "../state/action-creators";

export function Form(props) {
  const { postQuiz, question, trueAnswer, falseAnswer } = props;

  const onChange = (evt) => ({
    [evt.target.getAttribute("name")]: evt.target.value,
  });
  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(question, trueAnswer, falseAnswer);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        name="newQuestion"
        value={question}
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        name="newTrueAnswer"
        value={trueAnswer}
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        name="newFalseAnswer"
        value={falseAnswer}
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />

      {question !== "" && trueAnswer !== "" && falseAnswer !== "" ? (
        <button id="submitNewQuizBtn">Submit new quiz</button>
      ) : (
        <button id="submitNewQuizBtn" disabled>
          Submit new quiz
        </button>
      )}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
    question: state.form.question,
    trueAnswer: state.form.trueAnswer,
    falseAnswer: state.form.falseAnswer,
  };
};

export default connect(mapStateToProps, { inputChange, postQuiz })(Form);
