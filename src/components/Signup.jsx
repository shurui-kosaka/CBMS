import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidepic from "./portal/Sidepic";
import axios from "axios";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5173/signup", {
                email, password
            })
            if (res.status !== 200)
                return console.log("Something went wrong")

            alert("success")
        }
        catch (e) {
            alert("wrong details")
            console.log(e);
        }
    }

    return (
        <div className="bg-[#232121] items-center flex flex-col-reverse md:flex-col h-screen">
            <Navbar />
            <div className='flex-1 relative overflow-y-auto w-full'>
                <Helmet>
                    <title>Dashboard Login</title>
                </Helmet>
                <div className='flex flex-col md:flex-row h-full'>
                    {/*BACKGROUND PICTURE*/}
                    <div className='flex-1 absolute md:relative h-full'>
                        <div className='flex-1 h-full'>
                            <Sidepic />
                        </div>
                    </div>
                    {/*LOGIN PAGE*/}
                    <div className='flex flex-1 flex-col relative h-full w-full justify-center' style={{ flex: '32%' }}>
                        <div className="flex flex-col w-[100%] h-[100%] items-center justify-center pb-[4rem] bg-[rgba(36,36,36,0.95)]">
                            <form className="flex flex-col items-start w-[80%] md:w-[40%] h-[80%] justify-center" action="POST">
                                <h1 className="text-white font-bold text-3xl md:text-4xl mb-[2rem]">Sign up</h1>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='rounded-[10px] bg-[rgba(255,255,255,0.37)] h-10 text-white p-4 mb-4 w-full'
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='rounded-[10px] bg-[rgba(255,255,255,0.37)] h-10 text-white p-4 mb-4 w-full'
                                    required
                                />
                                <div className="w-full flex justify-center my-5">
                                    <input
                                        type="submit"
                                        className='font-bold text-black w-[30%] md:w-[20%] bg-[#09E91F] rounded-[100px] px-3 py-2 hover:scale-110 transition ease-in-out delay-10 duration-100 hover:cursor-pointer'
                                        value="Signup"
                                        onClick={submit}
                                    />
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
