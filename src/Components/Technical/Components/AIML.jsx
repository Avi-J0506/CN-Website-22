import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./assets/aiml.png";
import linelogo from "./logo2.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const AIML = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div
      className={`${style.domainHeadingbg} top-64 lg:top-0 h-full lg:h-3/5  absolute flex flex-col justify-center items-center pb-40`}
    >
      {/* Our Domain section */}
      <section className=" text-[#EE4623] tracking-widest mt-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl lg:mt-32 md:mt-96 ">TECHNICAL</p>
          <p className="text-3xl md:text-5xl font-medium pb-6">
            {/* <motion.div
              animate={{
                x: 0,
                y: 0,
                scale: 2  ,
                rotate: 0,
              }}
              transition={{ duration: 0.5, ease: "ease-out" }}
            > */}
            AI-ML
            {/* </motion.div> */}
          </p>
        </div>
      </section>
      <div className="flex flex-col  lg:flex-row mt-8 items-center justify-center  lg:pb-0 ">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80  lg:mb-0 lg:ml-20 lg:mr-20 md rounded-xl "
            data-aos="zoom-out"
            src={leftlogo}
            alt=""
          />
        </div>
        <div
          className=" flex text-center justify-center items-center lg:w-1/2 mx-2 md:mx-5 my-10"
          data-aos="zoom-in"
        >
          <img className=" mx-2 bottom-0 h-80" src={linelogo} alt="" />
          <p className=" text-white mx-10 text-base md:text-md lg:leading-7 lg:text-sm lg:text-left h-80 overflow-y-auto md:h-60">
            Welcome to the AI/ML Domain of CN SRM! Our aim is to create an
            inclusive community for students interested in Artificial
            Intelligence and Machine Learning.
            <br />
            <br />
            <strong>
              <u>About us</u>
            </strong>
            <br />
            We are a group of like-minded individuals who share a passion for AI
            and ML technologies. Our mission is to provide students with the
            resources and opportunities to expand their knowledge and skills in
            this rapidly growing field.
            <br />
            <br />
            <strong>
              <u>What we offer</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                Regular meetings and workshops to learn and discuss the latest
                advancements in AI and ML.
              </li>
              <li>
                Hands-on projects to apply learned concepts and gain practical
                experience.
              </li>
              <li>
                Access to cutting-edge technologies and resources through
                partnerships with industry leaders.
              </li>
              <li>
                Opportunities to network and collaborate with peers, industry
                professionals, and academic experts.
              </li>
            </ul>
            <br />
            Join a community of like-minded individuals and share your passion
            for AI and ML. Attend exclusive events and workshops led by industry
            experts. Participate in cutting-edge AI and ML projects and gain
            valuable hands-on experience. Opportunities to network and
            collaborate with peers, industry professionals, and academic
            experts.
            <br />
            <br />
            Whether you're just starting out or already have experience, we have
            something for everyone.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-6  lg:bottom-0" />
    </div>
  );
};

export default AIML;
