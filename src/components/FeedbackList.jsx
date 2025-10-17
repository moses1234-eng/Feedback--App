 function FeedbackList({ feedback, onDelete }) {
  if (feedback.length === 0) return <p>No feedback yet</p>;

  return (
    <ul>
      {feedback.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackList;
