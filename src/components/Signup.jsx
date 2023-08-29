import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import axios from "axios"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidepic from "./portal/Sidepic"

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/signup';

function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const userRef = useRef();
    // const errRef = useRef();

    async function submit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/dashboardlogin')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-[#232121] items-center flex flex-col-reverse md:flex-col h-screen">
            <Navbar />
            <div className='flex-1 relative overflow-y-auto w-full'>
                <Helmet>
                    <title>Signup</title>
                </Helmet>
                <div className='flex flex-col md:flex-row h-full'>
                    {/*BACKGROUND PICTURE*/}
                    <div className='flex-1 absolute md:relative h-full'>
                        <div className='flex-1 h-full'>
                            <Sidepic />
                        </div>
                    </div>
                    {/*SIGNUP PAGE*/}
                    <div className='flex flex-1 flex-col relative h-full w-full justify-center' style={{ flex: '32%' }}>
                        <div className="flex flex-col w-[100%] h-[100%] items-center justify-center pb-[4rem] bg-[rgba(36,36,36,0.95)]">
                            <form className="flex flex-col items-start w-[80%] md:w-[40%] h-[80%] justify-center" onSubmit={submit}>
                                <h1 className="text-white font-bold text-3xl md:text-4xl mb-[2rem]">Sign up</h1>
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    name="email"
                                    onChange={(e) => setName(e.target.value)}
                                    className='rounded-[10px] bg-[rgba(255,255,255,0.37)] h-10 text-white p-4 mb-4 w-full'
                                    required
                                />
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
                                    >Signup</button>
                                </div>
                            </form>
                            <Link to="/">Already have an account? Click here to go log-in!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup
