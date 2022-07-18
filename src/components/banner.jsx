import { useState, useEffect } from "react";

export default function Banner() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <img
          alt="banner image"
          className="w-screen brightness-[45%] h-screen object-cover"
          src="/banner_bg_small.jpeg"
        />
      </div>
      <div className="relative text-center max-w-[950px] my-0 mx-auto py-60 px-0">
        <h2 className="text-6xl font-bold text-white">
          Unlimited movies, TV shows, and more.
        </h2>
        <h2 className="text-white text-4xl my-4 mx-auto">
          Watch anywhere. Cancel anytime.
        </h2>
        <h2 className="text-white text-xl font-normal">
          Ready to watch ? Enter your email to create or restart your
          membership.
        </h2>
        {/* email form */}
        <form className="flex items-center mx-auto my-0 pt-8">
          <input
            className="py-4 pl-2 focus:ring-8 px-96  max-w-[500px] h-22 "
            type="text"
            placeholder="Email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-[red] px-10 font-semibold text-2xl  text-white p-4"
            type="submit"
          >
            Get started
          </button>
        </form>
      </div>
    </>
  );
}
