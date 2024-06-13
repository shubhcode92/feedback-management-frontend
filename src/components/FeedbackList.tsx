import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get('http://localhost:3000/feedback');
      setFeedbacks(response.data);
    };

    fetchFeedback();
  }, []);

  return (
    <div style={{ 
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '600px', 
      margin: '80px auto', 
      padding: '20px', 
      backgroundColor: '#F3F4F6', 
      borderRadius: '8px', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundImage: 'linear-gradient(to top, #FFF7ED, #FED7AA)',
    }}>
      <h2 style={{ color: '#1F2937', marginBottom: '20px' }}>Feedback List</h2>
      {feedbacks.map((fb, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h4 style={{ color: '#2563EB', marginBottom: '8px' }}>{`Name: ${fb.name}`}</h4>
          <p style={{ color: '#4B5563' }}>{`Feedback: ${fb.feedback}`}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;

