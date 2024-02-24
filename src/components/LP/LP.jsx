import React, { useEffect, useRef } from "react";
import "./LP.css";
import mandoIntro from "../../Assets/Mando-Intro.mp4";

const LP = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      window.scrollTo({
        top: document.querySelector(".app").offsetTop,
        behavior: "smooth",
      });
    };
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <>
      <div className="container">
        <video ref={videoRef} autoPlay muted className="backgroundVideo">
          <source src={mandoIntro} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default LP;
