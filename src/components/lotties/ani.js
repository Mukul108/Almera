import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/lottie/animation_lmp8g75s.json";


function Ani() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie options={defaultOptions} height={400} width={400} />;
  }
  
