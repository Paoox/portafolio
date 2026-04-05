import React from "react";
import "../styles/SliderTechIcons.css";

import { FaAws } from "react-icons/fa";
import { FaJava, FaPython } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { SiMui } from "react-icons/si";
import { TbBrandReactNative, TbSdk } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { IoLogoIonic} from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiJavascript,
  SiReact,
  SiSpring,
  SiDocker,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiOracle,
  SiVercel,
  SiRailway,
  SiNgrok,
  SiN8N,
  SiFigma,
  SiCanva,
  SiSlack,
  SiNotion,
  SiTrello,
  SiPostman,
  SiGit,
  SiInsomnia,
  SiPytorch,
  SiSelenium,
  SiIntellijidea,
  SiTensorflow,
  SiOpencv,
  SiClaude,
  SiGnometerminal
} from "react-icons/si";

export default function SliderTechIcons() {
  const icons = [
    <SiJavascript color="#f7df1e" />,
    <SiReact color="#61dafb" />,
    <TbBrandReactNative color="#371ce5" />,
    <SiSpring color="#6DB33F" />,
    <SiNodedotjs color="#339933" />,
    <SiPostgresql color="#336791" />,
    <SiMongodb color="#47A248" />,
    <SiDocker color="#0db7ed" />,
    <SiVite color="#646cff" />,
    <SiGithub color="#a19c9cff" />,
    <SiN8N color="#ef4f4f" />,
    <SiNgrok color="#2e20ebff" />,
    <SiOracle color="#F80000" />,
    <SiVercel color="#968787ff" />,
    <SiRailway color="#166d66ff" />,
    <SiHtml5 color="#e34f26" />,
    <SiCss3 color="#1572b6" />,
    <SiTailwindcss color="#38B2AC" />,
    <SiGit color="#f1502f" />,
    <BiLogoVisualStudio color="#007ACC" />,
    <SiPostman color="#FF6C37" />,
    <SiNotion color="#766b6bff" />,
    <SiTrello color="#0079bf" />,
    <SiSlack color="#5e245fff" />,
    <SiFigma color="#F24E1E" />,
    <SiCanva color="#00C4CC" />,
    <FaAws color="#FF9900" />,
    <FaJava color="#7b7b7fff" />,
    <SiMui color="#cdcdcfff" />,
    <SiInsomnia color="#5849BE" />,
    <FaPython color="#c4c42c" />,
    <SiPytorch color="#f79b07" />,
    <SiSelenium color="#90f44e" />,
    <SiIntellijidea color="#fe3d77" />,
    <SiTensorflow color="#dab13e" />,
    <GoCopilot color="#d073f6" />,
    <AiOutlineOpenAI color="#046c86" />,
    <SiOpencv color="#fb224a" />,
    <IoLogoIonic color="#26a5ef" />,
    <TbSdk color="#7005ce" />,
    <RiGeminiFill color="#09c4a4" />,
    <SiClaude color="#D27354" />,
    <SiGnometerminal color="#6a1bae" />,
  ];

  return (
    <section id="slider-container">
      <div className="slider-track">
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div className="slider-item" key={index}>
            {React.cloneElement(icon, { size: 40 })}
          </div>
        ))}
      </div>
    </section>
  );
}
