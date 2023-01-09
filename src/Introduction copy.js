import React from "react";
import { Link } from "react-router-dom";

const componentArray = [
  <IntroductionText1 />,
  <IntroductionText2 />,
  <IntroductionText3 />,
  <IntroductionAnimation1 />,
];

function Introduction() {
  const [index, setIndex] = React.useState(0);

  const next = () => {
    let nextIndex = index + 1;
    if (nextIndex > componentArray.length - 1) {
      nextIndex = 3;
    }
    setIndex(nextIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [index]);

  switch (index){
    case 0 :
      return <IntroductionText text={1}/>;
    case 1 :
      return <IntroductionText text={2}/>;
    case 2 :
      return <IntroductionText text={3} />;
    case 3 :
      return <IntroductionAnimation1 />;
    default:
      return <IntroductionText1 />;
  }
}

export default Introduction;

function IntroductionText({text}){
  const textData = ["Suddenly you appear","You do not know who or what you are","Something breathes you into life"]
  return (
    <>
      <div className="intro-text">{textData[text-1]}</div>
      <style jsx>{`
        body {
          background-color: black;
        }
        .intro-text {
          color: azure;
          font-size: 2rem;
          font-family: sans-serif;
          position: relative;
          top: 300px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

function IntroductionText1() {
  return (
    <>
      <div className="intro-text">Suddenly you appear</div>
      <style jsx>{`
        body {
          background-color: black;
        }
        .intro-text {
          color: azure;
          font-size: 2rem;
          font-family: sans-serif;
          position: relative;
          top: 300px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

function IntroductionText2() {
  return (
    <>
      <div className="intro-text">You do not know who or what you are</div>
      <style jsx>{`
        body {
          background-color: black;
        }
        .intro-text {
          color: azure;
          font-size: 2rem;
          font-family: sans-serif;
          position: relative;
          top: 300px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

function IntroductionText3() {
  return (
    <>
      <div className="intro-text">Something breathes you into life</div>
      <style jsx>{`
        body {
          background-color: black;
        }
        .intro-text {
          color: azure;
          font-size: 2rem;
          font-family: sans-serif;
          position: relative;
          top: 300px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

function IntroductionAnimation1() {
  return (
    <>
      <div class="container">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <button class="white flame">
          <Link className="link-styling" to="/game">
            O
          </Link>
        </button>
        <div class="blue circle"></div>
        <div class="black circle"></div>
      </div>
      <div className="intro-text2">Touch the flame</div>
      <style jsx>{`
        body {
          background: black;
        }
        .link-styling {
          text-decoration: none;
          color: white;
        }
        .intro-text2 {
          color: azure;
          font-size: 2rem;
          font-family: sans-serif;
          position: absolute;
          top: 500px;
          right: 160px;
        }
        .container {
          margin: 80px auto;
          width: 60px;
          height: 250px;
          position: relative;
          transform-origin: center bottom;
          animation-name: flicker;
          animation-duration: 3ms;
          animation-delay: 200ms;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        .flame {
          bottom: 0;
          position: absolute;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 50%;
          border-top-left-radius: 50%;
          transform: rotate(-45deg) scale(1.5, 1.5);
        }

        .yellow {
          left: 15px;
          width: 30px;
          height: 30px;
          background: gold;
          box-shadow: 0px 0px 9px 4px gold;
        }

        .orange {
          left: 10px;
          width: 40px;
          height: 40px;
          background: orange;
          box-shadow: 0px 0px 9px 4px orange;
        }

        .red {
          left: 5px;
          width: 50px;
          height: 50px;
          background: OrangeRed;
          box-shadow: 0px 0px 5px 4px OrangeRed;
        }

        .white {
          left: 15px;
          bottom: -4px;
          width: 30px;
          height: 30px;
          background: white;
          box-shadow: 0px 0px 9px 4px white;
          border: none;
        }

        button:hover {
          cursor: pointer;
        }

        .circle {
          border-radius: 50%;
          position: absolute;
        }

        .blue {
          width: 10px;
          height: 10px;
          left: 25px;
          bottom: -25px;
          background: SlateBlue;
          box-shadow: 0px 0px 15px 10px SlateBlue;
        }

        .black {
          width: 40px;
          height: 40px;
          left: 10px;
          bottom: -60px;
          background: black;
          box-shadow: 0px 0px 15px 10px black;
        }

        @keyframes flicker {
          0% {
            transform: rotate(-1deg);
          }
          20% {
            transform: rotate(1deg);
          }
          40% {
            transform: rotate(-1deg);
          }
          60% {
            transform: rotate(1deg) scaleY(1.04);
          }
          80% {
            transform: rotate(-2deg) scaleY(0.92);
          }
          100% {
            transform: rotate(1deg);
          }
        }
      `}</style>
    </>
  );
}
