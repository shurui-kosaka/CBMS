import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidepic from "../portal/Sidepic";
import axios from "axios";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DashboardLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate('/cbmsdashboard')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="bg-[#232121] items-center flex flex-col-reverse md:flex-col h-screen">
      <Navbar />
      <div className='flex-1 relative overflow-y-auto w-full'>
        <Helmet>
          <title>CBMS Dashboard Login</title>
        </Helmet>
        <div className='flex flex-col md:flex-row h-full'>
          {/*BACKGROUND PICTURE*/}
          <div className='flex-1 absolute md:relative h-full'>
            <div className='flex-1 h-full'>
              <Sidepic />
            </div>
          </div>
          {/*LOGIN PAGE*/}
          <div className='flex flex-1 flex-col relative h-full w-full justify-center animate__animated animate__fadeIn' style={{ flex: '32%' }}>
            <div className="flex flex-col w-[100%] h-[100%] items-center justify-center pb-[4rem] bg-[rgba(36,36,36,0.95)] md:bg-transparent">
              <form className="flex flex-col items-start w-[80%] md:w-[40%] h-[80%] justify-center" onSubmit={submit}>
                <h1 className="text-white font-bold text-3xl md:text-4xl mb-[2rem]">Login to CBMS<br />Dashboard.</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded-[10px] bg-[rgba(255,255,255,0.37)] h-10 text-white p-4 mb-4 w-full'
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='rounded-[10px] bg-[rgba(255,255,255,0.37)] h-10 text-white p-4 mb-4 w-full'
                  required
                />
                <div className="w-full flex justify-center my-5">
                  <button
                    type="submit"
                    className='font-bold text-black w-[30%] md:w-[20%] bg-[#09E91F] rounded-[100px] px-3 py-2 hover:scale-110 transition ease-in-out delay-10 duration-100 hover:cursor-pointer'
                  // value="Signup"
                  // onClick={submit}
                  >Login</button>
                </div>
                <div className="w-full flex justify-center">
                  <Link to="/">
                    <p className="underline hover:underline-offset-4 text-xs">Having problems with Login?</p>
                  </Link>
                </div>
              </form>

              {/* <Link to="/signup">Don't have an account? Click here to sign-up!</Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLogin;
