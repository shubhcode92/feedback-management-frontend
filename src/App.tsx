import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './'

const App: React.FC = () => {
  return (
    <div><center>
      <FeedbackForm />
      <FeedbackList />
      </center>
    </div>
  );
};

export default App;
