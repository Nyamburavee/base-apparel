import logo from './logo.svg';
import './App.css';
import {React} from "react"
import { useState } from 'react';

function App() {
const [email, setEmail] = useState('');
const [error, setError] = useState(false);

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!validateEmail(email)) {
    setError(true);
  } else {setError(false)};
}

const validateEmail = (email) =>{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
  return (
    <div className="container w-full m-h-screen overflow-hidden flex md:flex-col overflow-auto  lg:flex-row">
      <div className="logo  mb-32 mt-5 ">
          <img className='image w-80 ml-30 ' src='logo.svg'/> 
        </div>
      <div className="main flex flex-col px-32 justify-center lg:order-2 md:order-3 ">
        
        <h6 className='we text-red-400 text-6xl tracking-widest'>WE'RE</h6>
        <h6 className='coming font-bold text-6xl tracking-widest'>COMING</h6>
        <h6 className='soon font-bold text-6xl tracking-widest'>SOON</h6>
        <p className='update my-8 text-wrap text-red-300'>Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch date.
        </p>

        
        <form onSubmit={handleSubmit} noValidate>
          <div className='outer flex border h-14 rounded-full overflow-hidden md:mb-20'>
            <input type='Email' 
              value={email}
              name='email'
              placeholder='Email Address'
              onChange={(e)=> setEmail(e.target.value)}
              className={'input p-5 mr-auto outline-none w-10/12 '}

            />

              { error && ( <div className='error-img py-4 mr-4'>
                <img src='icon-error.svg' />
              </div> ) }

            <button type='submit'
             className='button justify-center items-center bg-rose-400 w-24 rounded-full flex active:bg-red-200 '>
              <img src='icon-arrow.svg'/>
            </button>
          </div>
        </form>
        { error && ( <p className='text-red-400 p-4'>Please provide a valid email</p> ) }

    </div>
      <div className="side h-full w-full relative md:order-2 ">
        <img src='hero-desktop.jpg' alt='hero-desktop' className='hidden inset-0 w-full h-full lg:block object-cover'/>
        <img src='hero-mobile.jpg' alt='hero-mobile' className='block lg:hidden w-full h-full object-cover'/>
      </div>

    </div>
  );
}

export default App;
