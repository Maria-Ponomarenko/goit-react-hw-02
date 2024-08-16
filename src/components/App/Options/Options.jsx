export default function Options({ onClick, totalFeedback, resetFeedback }) {
  return (
    <div>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
