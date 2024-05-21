import React, { useState } from "react";
import MainImg from "../styles/img/main.png";
import "../styles/_home.sass";
import Star from "../styles/svg/star.svg";
import GymPic from "../styles/img/main-pic-content.png";

export default function Home() {
  const [contentUsage, setContentUsage] = useState(0);
  const [isClicked, setIsClicked] = useState(0);

  const content = [
    {
      id: 0,
      title: "Affordable Tranning & Eating Plans",
      text: "Achieve your health and fitness goals affordably with our comprehensive training and eating plans, tailored to fit your budget without compromising on quality. Access affordable training and eating plans designed to support your fitness journey without breaking the bank. Take charge of your health and well-being with our budget-friendly options, ensuring you reach your goals without financial strain.",
      top: "-60px",
    },
    {
      id: 1,
      title: "5 Star Rated Personal Trainer",
      text: "Achieve your fitness goals with our 5-star rated personal trainer, known for exceptional results and personalized programs.Experience top-tier training from our highly acclaimed 5-star rated personal trainer, dedicated to your success.4oone moreChatGPTTransform your fitness journey with guidance from our 5-star rated personal trainer, trusted by countless satisfied clients.",
      top: "0px",
    },
    {
      id: 2,
      title: "14 day Free Return on Purchase",
      text: "Enjoy peace of mind with our 14-day free return policy on all purchases. Shop confidently with our 14-day free return guarantee, ensuring hassle-free returns.",
      top: "60px",
    },
  ];

  const animationMain = (e) => {
    setContentUsage(e);
    setIsClicked(e);
  };

  return (
    <div className="wrapper">
      <section className="section">
        <div className="main-content">
          <div className="mc-wrapper">
            <h2 className="main-content-title">
              Transform Your Fitness Into Shape
            </h2>
            <p>{content[contentUsage].text}</p>
          </div>
          <div className="m-info-w">
            {/* <div className="m-info-image"> */}
            <div
              className={`m-info-image ${
                isClicked == 0 ? "movingMain-0" : ""
              } ${isClicked == 1 ? "movingMain-1" : ""} ${
                isClicked == 2 ? "movingMain-2" : ""
              }`}
            >
              <img src={GymPic} />
            </div>
            <div className="m-info-content">
              <ul>
                {content.map((i) => (
                  <li
                    key={i.id}
                    onClick={() => animationMain(i.id)}
                    className={`${contentUsage == i.id ? "activity" : ""} ${
                      contentUsage == i.id ? "activity" : ""
                    } ${contentUsage == i.id ? "activity" : ""}`}
                  >
                    {i.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-info-w-starwrapper">
              <img className="star-svg" src={Star} />
            </div>
          </div>
        </div>
        <div className="main-img-wrap">
          <img className="main-img" src={MainImg} />
        </div>
      </section>
    </div>
  );
}
//{`box ${isClicked ? 'animate' : ''}`} onClick={handleClick}
