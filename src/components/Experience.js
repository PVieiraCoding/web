import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
             <Details
              position="Founder"
              company="Pedro Vieira - A simplicidade em soluções informáticas"
              companyLink="https://www.facebook.com/PVieiraIT/"
              time="2020-Present"
              address="Amadora, PT"
              work="Founder of this home and remote IT assistance company."
            />    
            <Details
              position="IT Technician"
              company="Asistencia Dental Especializada (ADE)"
              companyLink="https://www.adegroup.eu/"
              time="2012-Present"
              address="Lisbon, PT"
              work="Systems Administration and Network maintenance, responsible for an online management platform for a vast network of dental clinics."
            />
            <Details
              position="IT Technician"
              company="Control Panel, Lda"
              companyLink="http://www.controlpanel.pt/"
              time="2006-2012"
              address="Queluz, PT"
              work="Computer maintenance (Software and Hardware). Creation and Design of Web Pages and Social Media management. <br>Resolution of IT service requests over phone, through email, and remote support for enterprises, schools and others."
            />
            <Details
              position="IT Technician"
              company="Escola Profissional Gustave Eiffel"
              companyLink="https://gustaveeiffel.pt/"
              time="2009-2009"
              address="Amadora, PT"
              work="Computer maintenance (Software and Hardware) and Network maintenance. <br>Resolution of IT service requests over phone, through email, and remote support."
            />
            <Details
              position="IT Teacher"
              company="Superprof"
              companyLink="https://appurl.io/kDoRavNtUE"
              time="2017-Present"
              address="Amadora, PT"
              work="I will be happy to help in any IT area to whom you have been willing to expand your knowledge."
            />
            <Details
              position="Editor"
              company="Wikipedia, the Free Encyclopedia"
              companyLink="https://appurl.io/BY9CcLE9Iq"
              time="2017-Present"
              address="Amadora, PT"
              work="Editor in Wikipédia Lusófona. <br>I contribute in various areas, from watching recent changes (vandalism) and improve the quality of articles, among other factors."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
