import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    await axios.post('http://localhost:3000/feedback', { name, feedback });
    setName('');
    setFeedback('');
  };

  return (


    <>
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5rem',
      width: '370px',
      height: '500px',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      backgroundImage: 'linear-gradient(to top, #FFF7ED, #FED7AA)',
    }}>
      <form action="/" onSubmit={handleSubmit} id="form">
        <div style={{
          textAlign: 'center',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}>
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
          }}>Feedback Form</h1>
        </div>
        <div style={{
          paddingBottom: '2.5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          fontWeight: 600,
        }}>
          <label>Name</label>
          <br />
          <input
            value={name}
            style={{
              marginTop: '0.25rem',
              display: 'block',
              width: '100%',
              padding: '0.625rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 2px #3b82f6';
              e.target.style.borderColor = '#3b82f6';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
              e.target.style.borderColor = '#d1d5db';
            }}
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div style={{
          paddingBottom: '2.5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          fontWeight: 600,
        }}>
          <label>Feedback</label>
          <br />
          <textarea
            value={feedback}
            rows={4}
            style={{
              marginTop: '0.25rem',
              display: 'block',
              width: '100%',
              padding: '0.625rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 2px #3b82f6';
              e.target.style.borderColor = '#3b82f6';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
              e.target.style.borderColor = '#d1d5db';
            }}
            placeholder="Write Here..."
            required
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          ></textarea>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#34D399',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              color: '#ffffff',
              transition: 'background-color 0.2s',
              outline: 'none',
              boxShadow: '0 0 0 2px #3b82f6',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </>
  );
};

export default FeedbackForm;
