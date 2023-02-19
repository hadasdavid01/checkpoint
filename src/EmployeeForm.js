import React, { useState, useEffect } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

function EmployeeForm() {
  const history = useHistory();
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      fetch('/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "id":id, "firstName": firstName, "lastName": lastName, "email": email, "nickName":nickName}),
      }).then(response => response.json()).then(resp => setStatus(resp.status))
      if (status === 200) {
        setSuccess(true);
        setError('');
        // Reset the form fields
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setNickName('');
        history.push('/employees');
      } else {
        console.error('Error saving employee');
        setSuccess(false);
        setError('Error saving employee. Please try again later.');
      }
    } catch (error) {
      console.error('Error saving employee:', error);
      setSuccess(false);
      setError('Error saving employee. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeout;
    if (success || error) {
      timeout = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [success, error]);

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add new employee</h2>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        First name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        NickName:
        <input type="text" value={nickName} onChange={(e) => setNickName(e.target.value)} />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save employee'}
      </button>
      {success && <div className="success-message">Employee saved successfully!</div>}
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default EmployeeForm;
