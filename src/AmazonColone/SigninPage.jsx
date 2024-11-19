import React, { useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  const [Dataform, setdataform] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setdataform({
      ...Dataform,
      [name]: value
    });
  };

  const [error, seterror] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationerror = {};

    if (!Dataform.username.trim()) {
      validationerror.username = 'Username is required';
    }

    if (!Dataform.email.trim()) {
      validationerror.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Dataform.email)) {
      validationerror.email = 'Email is not valid';
    }

    if (!Dataform.password.trim()) {
      validationerror.password = 'Password is required';
    } else if (Dataform.password.length < 6) {
      validationerror.password = 'Password should be at least 6 characters';
  
    }

    if (Dataform.confirmpassword !== Dataform.password) {
      validationerror.confirmpassword = 'Passwords do not match';
    }

    seterror(validationerror);

    if (Object.keys(validationerror).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <Fragment>
      <div className='flex flex-col justify-center items-center'>
        <img src="/Amfrom.webp" alt="Logo" className='w-40 h-auto' />
        <form className='w-[40%] border-2 border-black p-2' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <h1 className='font-semibold'>Create an Account</h1>
            <label>Your Name</label>
            <input
              type="text"
              autoComplete='off'
              onChange={handelchange}
              name='username'
              placeholder='Enter your first & last name'
              className='border-2 border-gray-900'
            />
            {error.username && <span>{error.username}</span>}

            <label>Mobile No or Email</label>
            <input
              type="email"
              name='email'
              onChange={handelchange}
              className='border-2 border-gray-900'
            />
            {error.email && <span>{error.email}</span>}

            <label>Password</label>
            <input
              type="password"
              onChange={handelchange}
              name='password'
              className='border-2 border-gray-900'
            />
            {error.password && <span>{error.password}</span>}
            <p className='text-[10px]'>Password must be at least 6 characters</p>

            <label>Confirm Password</label>
            <input
              type="password"
              onChange={handelchange}
              name='confirmpassword'
              className='border-2 border-gray-900'
            />
            {error.confirmpassword && <span>{error.confirmpassword}</span>}

            <button className='bg-yellow-400 text-center w-[100%] rounded-full' type="submit">Continue</button>
            <div className='h-40 flex flex-col justify-between'>
              <p className='text-[12px]'>By creating an account, you agree to Amazon's <a href="#" className='text-blue-600'>Conditions of Use</a> and <a href="#" className='text-blue-600'>Privacy Notice</a></p>
              <div>
                <h1>Buying for work?</h1>
                <Link>Create a free business account</Link>
              </div>
              <p>Already have an account? <Link className='
              text-blue-700'>Sign in</Link></p>
            </div>
          </div>
        </form>
        <nav className='flex justify-center gap-2 text-blue-700'>
          <Link>Contact</Link>
          <Link>Privacy Policy</Link>
          <Link>Help</Link>
        </nav>
        <div className='text-[10px] font-semibold'>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
      </div>
    </Fragment>
  );
};

export default SigninPage;
