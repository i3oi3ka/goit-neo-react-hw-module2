export function Feedback({ feedbacks }) {
  console.log(feedbacks);
  return (
    <>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
    </>
  );
}

export default Feedback;
