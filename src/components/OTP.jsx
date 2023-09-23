import React, { useState } from 'react';
import "../components_css/OTP.css";
// import SinchVerification from 'sinch-verification';

const OTPVerification = () => {
  // const sinch = new SinchVerification({
  //   key: 'YOUR_APP_KEY',
  //   secret: 'YOUR_APP_SECRET',
  // });
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [otpSent, setOTPSent] = useState(false);

  const handleMobileNumberSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   // Send OTP to the provided mobile number using Sinch
    //   const response = await sinch.sendVerificationCode({
    //     identity: { type: 'number', endpoint: mobileNumber },
    //   });
  
    //   if (response.result === 'SUCCESSFUL') {
    //     // OTP sent successfully
    //     setOTPSent(true);
    //   } else {
    //     console.error('Failed to send OTP:', response.reason);
    //   }
    // } catch (error) {
    //   console.error('Error sending OTP:', error);
    // }
    
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();

    // Verify the entered OTP here
    // You should compare it with the OTP sent to the user's mobile

    // For example:
    /*
    if (otp === '123456') {
      // OTP is correct, proceed with user verification
      console.log('OTP is correct');
    } else {
      // Incorrect OTP, handle accordingly
      console.error('Incorrect OTP');
    }
    */
  };

  return (
    <div className='otp-verification-container'>
      {otpSent ? (
        <form onSubmit={handleOTPVerification} className='otp-verification-form'>
          <label htmlFor='otp'>Enter OTP:</label>
          <input
            type='text'
            id='otp'
            name='otp'
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />
          <button type='submit'>Verify OTP</button>
        </form>
      ) : (
        <form onSubmit={handleMobileNumberSubmit} className='otp-verification-form'>
          <label htmlFor='mobileNumber'>Enter Mobile Number:</label>
          <input
            type='text'
            id='mobileNumber'
            name='mobileNumber'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <button type='submit'>Send OTP</button>
        </form>
      )}
    </div>
  );
};

export default OTPVerification;
