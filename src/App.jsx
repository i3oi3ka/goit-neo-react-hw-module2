import { useEffect, useState } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (feedbacks !== null) {
      return feedbacks;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  function updateFeedback(feedbackType) {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  }

  function resetFeedback() {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  }

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = Object.values(feedbacks).reduce(
    (result, item) => result + item,
    0
  );

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <section>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </section>
  );
}

export default App;
