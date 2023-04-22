import React from "react";
import loginimg from "./png/My project (5).png";
import Spotify from "../../utils/Spotify";
import Typewriter from "typewriter-effect";

export default function LoginPage() {
  const handleLoginClick = () => {
    window.location.href = `${Spotify.apiUrl}?client_id=${
      Spotify.clientId
    }&redirect_uri=${Spotify.redirectUrl}&scope=${Spotify.scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <div className="w-screen h-full bg-black text-white absolute flex flex-col justify-center items-center">
      <img src={loginimg} alt="png_login" className="w-1/3 h-auto" />
      <button
        onClick={handleLoginClick}
        className="bg-emerald-400 text-white rounded-full py-2 px-4 text-lg hover:bg-emerald-300 w-40"
      >
        Login to Spotify
      </button>
      <div className="mt-4 text-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Welcome to the Music App")

              .pauseFor(100)
              .deleteAll()
              .typeString("Enjoy your favorite tunes!")
              .start();
          }}
        />
      </div>
    </div>
  );
}
