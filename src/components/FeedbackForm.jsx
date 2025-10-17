 import { useState } from 'react';

function FeedbackForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      text,
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Give Your Feedback</h2>
      <input
        type="text"
        placeholder="Write feedback"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default FeedbackForm;

