import { useState } from "react";
import "./App.css";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  }

  //   function handleReset() {
  //     setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  //   }

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options feedbacks={feedbacks} updateFeedback={updateFeedback}></Options>
      <Feedback feedbacks={feedbacks}></Feedback>
    </>
  );
}

export default App;
