import { css, keyframes } from "@emotion/react";
import React from "react";

const snowDrop = keyframes`
  $window-height-threshold: 1.5;

  0% {
    transform: translate(0, 0);
    opacity: 0.5;
    margin-left: 0;
  }

  10% {
  margin-left: 15px;
}

20% {
  margin-left: 20px;
}

25% {
  transform: translate(0, 250px );
  opacity: 0.75;
}

30% {
  margin-left: 15px;
}

40% {
  margin-left: 0;
}

50% {
  transform: translate(0, 500px );
  opacity: 1;
  margin-left: -15px;
}

60% {
  margin-left: -20px;
}

70% {
  margin-left: -15px;
}

75% {
  transform: translate(0, 750px);
  opacity: 0.5;
}

80% {
  margin-left: 0;
}

100% {
  transform: translate(0, 1000px);
  opacity: 1;
}
`;

const Snowfall = () => {
  const snowSizeBase = 10;
  const browserBuffer = 50;
  const leftPosition = 100 + browserBuffer;
  const animateSpeedBase = 10000;
  const minimumFallingSpeed = 5000;
  const animateDelayBase = 5000;
  const blurBase = 3;
  const snowdropsLength = 100;

  return (
    <div
      css={css`
        overflow: hidden;
        height: 100%;
        width: 100%;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          position: relative;
        `}
      >
        {[...Array(snowdropsLength).keys()].map((i) => {
          const size = Math.abs(
            Math.random() * snowSizeBase - Math.random() * snowSizeBase
          );
          const left = Math.abs(
            Math.random() * leftPosition - Math.random() * leftPosition
          );
          const duration = Math.abs(
            Math.random() * animateSpeedBase + minimumFallingSpeed
          );
          const delay = Math.abs(Math.random() * animateDelayBase);
          const blur = Math.abs(
            Math.random() * blurBase - Math.random() * blurBase
          );

          return (
            <div
              key={i}
              css={css`
                opacity: 0;
                position: absolute;
                top: 0;
                border-radius: 100%;
                background-color: #ffffff;
                background-repeat: no-repeat;
                background-size: 100% auto;
                animation-name: ${snowDrop};
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                left: ${left}%;
                width: ${size}px;
                height: ${size}px;
                animation-duration: ${duration}ms;
                animation-delay: ${delay}ms;
                filter: blur(${blur}px);
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Snowfall;
