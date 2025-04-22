import React from 'react';
import { motion } from 'framer-motion';
import style from './Certificates.module.css';
import Certificate1 from '../../assets/Certificate1.png';
import Certificate2 from '../../assets/Certificate2.png';
import Certificate3 from '../../assets/Certificate3.png';
import Certificate4 from '../../assets/Certificate4.png';
import Certificate5 from '../../assets/Certificate5.png';
import Certificate6 from '../../assets/Certificate6.png';

const Certificates = () => {
  const letterAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const certificates = [
    { image: Certificate1, title: (
      <>
        Dynamic Programming , <br />Greedy Algorithms
      </>
    ), issuer: "Coursera", date: "2024" },
    { image: Certificate2, title: "Cloud Computing", issuer: "NPTEL", date: "2024" },
    { image: Certificate3, title:(
      <>
        Introduction to MongoDB<br />(for Students)
      </>
    ), issuer: "MongoDB, Inc.", date: "2024" },
    { image: Certificate4, title: "Understanding Cloud Fundamentals", issuer: "LinkedIn", date: "2023" },
    { image: Certificate5, title: (
      <>
        Understanding Cloud Fundamentals<br /> Linear Programming
      </>), issuer: "Coursera", date: "2024" },
    { image: Certificate6, title: "Global INFOSEC Security Summit 2023", issuer: "National Information Security Council", date: "2023" }
  ];

  const title = "Certificates";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={style.container}
    >
      <div className={style.titleWrapper}>
        {title.split("").map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="initial"
            animate="animate"
            className={style.titleLetter}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className={style.certificatesGrid}>
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={style.certificateCard}
          >
            <img src={cert.image} alt={cert.title} className={style.certImage} />
            <div className={style.certInfo}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;