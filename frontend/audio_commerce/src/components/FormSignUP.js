import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import OtpInput from 'react-otp-input';

function FormSignUP() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      alert("Account Created Successfully");
      navigate("/");
    }
  }, [loggedIn, navigate]);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };

  const validateForm = () => {
    const { email, username, password, confirmPassword } = form;
    const newErrors = {};
    const regexLC = /^(?=.*[a-z])/;
    const regexUC = /(?=.*[A-Z])/;
    const regexSC = /(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]/;
    const regexNum = /(?=.*\d)/;

    if (!email) newErrors.email = 'Email is a required field';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please ensure the email is formatted correctly';

    if (!username) newErrors.username = 'Username is a required field';
    else if (username.length < 5 || username.length > 15) newErrors.username = 'Usernames should be between 5 and 15 characters long';

    if (!password) newErrors.password = 'Password is a required field';
    else if (password.length < 8) newErrors.password = 'Password should contain at least 8 characters';
    else if (!regexLC.test(password)) newErrors.password = 'Password must contain one lower case letter';
    else if (!regexUC.test(password)) newErrors.password = 'Password must contain one upper case letter';
    else if (!regexSC.test(password)) newErrors.password = 'Password must contain one special character (@ , $ , . , # , ! , % , * , ? , & , ^)';
    else if (!regexNum.test(password)) newErrors.password = 'Password must contain one number (0-9)';

    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is a required field';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        // Generate and send OTP to user's email
        // const response = await axios.post('http://localhost:5000/api/users/send-otp', {
        //   email: form.email,
        // });
        // setOtpSent(true);
        // setOtpMessage(response.data.message);

        const userResponse = await axios.post('http://localhost:5000/api/users/register', {
          name: form.username,
          email: form.email,
          password: form.password,
        });

        // Clear the form after successful submission
        setForm({
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        });
        setMessage('User created successfully!');
        setLoggedIn(true);

      } catch (error) {
        setMessage('Error sending OTP.');
      }
    }
  };

  const verifyOtp = async () => {
    try {
      // Verify OTP with the server
      const response = await axios.post('http://localhost:5000/api/users/verify-otp', {
        email: form.email,
        otp: otp,
      });

      if (response.data.verified) {
        // OTP is valid, complete sign-up process
        const userResponse = await axios.post('http://localhost:5000/api/users/register', {
          name: form.username,
          email: form.email,
          password: form.password,
        });

        // Clear the form after successful submission
        setForm({
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        });
        setMessage('User created successfully!');
        setLoggedIn(true);
      } else {
        setOtpMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setOtpMessage('Error verifying OTP.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          value={form.email}
          onChange={e => setField('email', e.target.value)}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Username"
          value={form.username}
          onChange={e => setField('username', e.target.value)}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={form.password}
          onChange={e => setField('password', e.target.value)}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={e => setField('confirmPassword', e.target.value)}
          isInvalid={!!errors.confirmPassword}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>

      {otpSent ? (
        <>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Label>Enter OTP</Form.Label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              isInputNum={true}
              separator={<span>-</span>}
            />
            <Form.Text className="text-muted">
              {otpMessage}
            </Form.Text>
          </Form.Group>
          <Button variant="dark" onClick={verifyOtp}>
            Verify OTP
          </Button>
        </>
      ) : (
        <Button variant="dark" type="submit">
          Create Account
        </Button>
      )}

      <p className="create-account-title">
        Already have an account?
      </p>
      <Button variant="link" className="create-link-btn">
        <Link to="/login" className='link-to-signup'>
          Login
        </Link>    
      </Button>
      {message && <p>{message}</p>}
    </Form>
  );
}

export default FormSignUP;
