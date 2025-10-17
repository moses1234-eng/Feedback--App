 import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Feedback App</h1>
      <FeedbackForm onAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
    </div>
  );
}

export default App;
