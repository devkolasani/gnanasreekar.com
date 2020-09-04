import React, { createContext, useState } from "react";

// Assets
import OSC1 from "../assets/images/OS1.png";
import OSC2 from "../assets/images/OS2.png";
import OSC3 from "../assets/images/OS3.png";
import CEMS1 from "../assets/images/CEMS1.png";
import CEMS2 from "../assets/images/CEMS2.png";
import CEMS3 from "../assets/images/CEMS3.png";
import MRMS1 from "../assets/images/MRMS1.png";
import MRMS2 from "../assets/images/MRMS2.png";
import MRMS3 from "../assets/images/MRMS3.png";
import COVID1 from "../assets/images/COVID1.png";
import COVID2 from "../assets/images/COVID2.png";
import COVID3 from "../assets/images/COVID3.png";

// Work Context
export const WorkContext = createContext();

const WorkContextProvider = (props) => {
  const workstore = [
    {
      id: "01",
      name: "MRMS",
      description:
        "MRMS(Learning Management System) is an android app that helps you keep track of everything happening at school by teachers and students as well as parents.",
      linkname: "Play Store",
      link: "https://play.google.com/store/apps/details?id=com.rgs.mrms",
      images: [MRMS1, MRMS2, MRMS3],
    },
    {
      id: "02",
      name: "CEMS",
      description:
        "CEMS(Campus Electricity Management System) is an android app that helps you track electricity usage on campus with analytics.",
      linkname: "GitHub",
      link: "https://github.com/gnanasreekar/CEMS",
      images: [CEMS1, CEMS2, CEMS3],
    },
    {
      id: "03",
      name: "COVID-19",
      description:
        "COVID-19 is an android app that helps you keep track of current cases in India with statewise analytics.",
      linkname: "GitHub",
      link: "https://github.com/gnanasreekar/Covid-19",
      images: [COVID1, COVID2, COVID3],
    },
    {
      id: "04",
      name: "OneSignal Client",
      description:
        "OneSignal Client to send Push notifications from Mobile With OneSignal API",
      linkname: "play Store",
      link: "https://play.google.com/store/apps/details?id=com.rgs.onesignal",
      images: [OSC1, OSC2, OSC3],
    },
  ];

  // States
  const [works] = useState(workstore);
  const [index, setIndex] = useState(0);
  const [work, setWork] = useState(workstore[index]);

  const prevWork = () => {
    if (index === 0) {
      setIndex(works.length - 1);
    } else {
      setIndex(index - 1);
    }
    setWork(works[index]);
  };

  const nextWork = () => {
    setIndex((index + 1) % works.length);
    setWork(works[index]);
  };

  return (
    <WorkContext.Provider value={{ work, prevWork, nextWork }}>
      {props.children}
    </WorkContext.Provider>
  );
};

export default WorkContextProvider;
