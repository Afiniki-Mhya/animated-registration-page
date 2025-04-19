"use client";
import {
  Instagram,
  LockKeyhole,
  MailOpen,
  Mails,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useState } from "react";



export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false);
 

  const handleFlip = () => {
   
    gsap.to(
      [".register .header", ".register .registerP", ".register .button"],
      {
        opacity: 0,
        duration: 0.3,
      }
    );

    const direction = isSignUp ? 0 : 180;
    const loginX = isSignUp ? 0 : 700;
    const registerX = isSignUp ? 0 : -900;
    const bgColor = isSignUp ? "#40E0D0" : "#008080";

    gsap.to(".register", {
      duration: 1.5,
      x: registerX,
      rotate: direction,
      backgroundColor: bgColor,
      ease: "power3.out",
      onComplete: () => {
        setIsSignUp((prev) => !prev);

        const tl = gsap.timeline();
        tl.set(
          [".register .header", ".register .registerP", ".register .button"],
          {
            rotate: direction,
          }
        );

        tl.to(".register .header", { opacity: 1, duration: 0.4 })
          .to(".register .registerP", { opacity: 1, duration: 0.4 }, "+=0.1")
          .to(".register .button", { opacity: 1, duration: 0.4 }, "+=0.1");
      },
    });

    gsap.to(".login", {
      duration: 1.5,
      x: loginX,
      delay: 0.1,
    });

    gsap.to(".regBtn", {
      duration: 1.5,
      backgroundColor: bgColor,
      delay: 0.3,
    });

    
  };

  return (
    <main className="bg-[#F2F2F2] min-h-screen text-center text-black flex  ">
      {/* LOGIN */}
      <div className="login px-56 flex flex-col justify-center">
        <h1 className="text-center text-4xl font-bold">
          {isSignUp ? "Registration" : "Login Form"}
        </h1>

        <span className="flex gap-3 py-6 items-center justify-center">
          {[Mails, Instagram, Twitter, Youtube].map((Icon, idx) => (
            <Link
              key={idx}
              href=""
              className="bg-[#F0F0F0] border-[2px] hover:border-[2px] hover:border-to-r from-[#40E0D0] to-[#008080] border-gray-400 rounded-md p-1"
            >
              <Icon size={18} className=" hover:animate-bounce hover:size-6 ease-out hover:text-[#008080] " />
            </Link>
          ))}
        </span>

        <p className="text-sm text-gray-500 pb-3">
          Welcome, we are happy to have you
          {isSignUp ? <span> here.</span> : <span> back.</span>}
        </p>

        {/* inputs */}
        <div className="flex flex-col gap-3">
          {/* Email */}
          <div className="relative w-[310] max-w-full">
            <div className="flex items-center bg-gray-300 rounded-md px-2 py-2">
              <MailOpen className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Email"
                required
                className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
              />
            </div>
          </div>

          {/* Username */}
          <div className="relative w-[310] max-w-full">
            <div className="flex items-center bg-gray-300 rounded-md px-2 py-2">
              <User className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Username"
                required
                className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
              />
            </div>
          </div>

          {/* password */}
          <div className="relative w-[310] max-w-full">
            <div className="flex items-center bg-gray-300 rounded-md px-2 py-2">
              <LockKeyhole className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Password"
                required
                className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
              />
            </div>
          </div>
        </div>

        {!isSignUp && (
          <Link href="" className="text-sm text-right">
            Forgot password
          </Link>
        )}

        <span className="underline text-sm text-center py-4">
          {isSignUp ? (
            <span className="pt-4">Already have an account?</span>
          ) : (
            <span>Do not have an account?</span>
          )}
          <Link href="" className="text-base text-blue-600 ml-2">
            {isSignUp ? <span>Log in</span> : <span>Sign in</span>}
          </Link>
        </span>

        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleFlip();
          }}
          className="regBtn bg-[#40E0D0] text-center py-2 rounded-md"
        >
          {isSignUp ? <span>SIGN IN</span> : <span>LOG IN</span>}
        </Link>
      </div>

      {/* SIGN IN/REGISTER */}
      <div
        className={`register bg-[#40E0D0] text-black flex-1 flex ${
          isSignUp ? "flex-col-reverse" : "flex-col"
        }  rounded-bl-[60%] rounded-tl-[60%] items-center justify-center`}
      >
        <h1 className="header text-3xl font-extrabold">
          {isSignUp ? "Welcome back!" : "Come join us!"}
        </h1>

        <p className="registerP w-1/2 py-4">
          {isSignUp
            ? "Log in to continue exploring amazing features and offers tailored just for you."
            : "We are so excited to have you here. If you haven't already, create an account to get access to exclusive deals and offers."}
        </p>


        <Link
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleFlip();
          }}
          className="button  bg-[#F2F2F2] w-40 text-center py-2 rounded-md"
        >
          {isSignUp ? <span>LOG IN</span> : <span>SIGN IN</span>}
        </Link>

        {/* <Link
          href=""
          className="button bg-[#F2F2F2] w-40 text-center py-2 rounded-md"
        >
          {isSignUp ? <span>LOG IN</span> : <span>SIGN IN</span>}
        </Link> */}
      </div>
    </main>
  );
}
