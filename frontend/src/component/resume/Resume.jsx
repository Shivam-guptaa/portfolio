import React, { useState } from 'react'
import style from './Resume.module.css'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCircleCheck, faAward, faRotate } from '@fortawesome/free-solid-svg-icons'
const Resume = () => {
  const [projects, setProjects] = useState(true);
  const [expertise, setExpertise] = useState(true);
  const [education, setEducation] = useState(true);
  const [achievements, setAchievements] = useState(true);
  const [internship, setInternship] = useState(true);

  const handleProjects = () => {
    setProjects(!projects);
  }

  const handleInternship = () => {
    setInternship(!internship);
  }

  const handleAchieve = () => {
    setAchievements(!achievements);
  }

  const handleEdu = () => {
    setEducation(!education);
  }

  const handleExpertise = () => {
    setExpertise(!expertise);
  }

  const softskill = ["Creativity", "Teamwork", "Problem_Solving", "Adaptability", "Leadership","Work_Ethic", "Communication", "Attention_to_Detail"];
  const achieve=
  [
    <span><b><u>200+ Data Structure & Algorithm</u></b> problems solved.</span>,
    <span>Google Cloud Computing - By <b><u>NPTEL</u></b> ,2024.</span>,
    <span>Introduction to MongoDB by <b><u>MongoDB</u></b> ,2024.</span>,
    <span>Winner of <b><u>Pithu Tournament</u></b>, 2025.</span>,
    <span>Finalist in <b><u>24hr Hackathon</u></b>, 2024.</span>
  ];
  return (
    <div>
      <div className={style.container}>
        <motion.div
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
         className={style.detailContainer} style={{borderRight:"1px solid #808080", paddingRight:"30px"}}>  
        <div className={style.title}>
              <h1>Projects</h1>
              {
                projects ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleProjects} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleProjects} style={{cursor:"pointer"}}/>
              }
            </div>
              {
                projects && 
                <div>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2024</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: Python, Pandas, Scikit-learn, NLTK, Matplotlib</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>Topic Modelling and Clustering of Customer Reviews</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2024</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: Python, TensorFlow, Keras, NLTK, Matplotlib</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>Comparative Analysis of RNN, LSTM, and CNN-LSTM Models for Next-Word Prediction</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2025</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: React, Node.js, Express.js, MongoDB, JWT Authentication, CSS Modules</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>Internship Platform</div>
                      <div style={{fontSize:"14px", cursor:"pointer"}}><a href='https://github.com/Shivam-guptaa/Internship-website' target='_blank'>(Click Me!)</a></div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.projectDetail}>
                    <div className={style.projectYear}>
                      <span>2025</span>
                      <FontAwesomeIcon icon={faRotate} spin style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#4d4d4d", fontSize:"14px"}}><i>Skills: HTML, CSS, JavaScript, React.js, CSS Modules, React Router DOM, Axios, Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, dotenv, Git, GitHub, Postman, Nodemon, VS Code</i></div>
                      <div style={{fontSize:"1.3rem", fontWeight:"600"}}>E-Commerce Platform</div>
                      <div style={{fontSize:"14px"}}><a href='https://github.com/Shivam-guptaa/ecommerce-mern' target='_blank'>(Click Me!)</a></div>
                    </div>
                  </div>
                </div>
              }
        </motion.div>
        <motion.div 
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        className={style.detailContainer}>
          <div className={style.title}>
              <h1>Softskill</h1>
              {
                expertise ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleExpertise} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleExpertise} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              expertise &&
              <div className={style.expertise}>
                {
                  softskill.map((skill, index) => {
                    return (
                      <div key={index} className={(index === 2 || index === 6) ? style.color : style.skill}>
                        <span>#{skill}</span>
                      </div>
                    )
                  })
                }
              </div>
            }

            <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>

            <div className={style.title}>
              <h1 style={{marginTop:"0"}}>Internship</h1>
              {
                internship ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleInternship} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleInternship} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              internship &&
              <div className={style.intern}>
                <div className={style.internDetail}>
                    <div className={style.internYear}>
                      <span>2023</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div>
                      <div style={{color:"#666666", fontSize:"14px"}}>Real Fight for Right, Delhi</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>Social Worker</div>
                      <div style={{fontSize:"14px"}}>(Duration: 40+ hours)</div>
                    </div>
                  </div>
              </div>
            }

            <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>

            <div className={style.title}>
              <h1 style={{marginTop:"0"}}>Achievements</h1>
              {
                achievements ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleAchieve} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleAchieve} style={{cursor:"pointer"}}/>
              }
            </div>
            {
              achievements &&
              <div className={style.achievement}>
                {
                  achieve.map((ach, index) => {
                    return (
                      <div key={index} className={style.achieve}>
                        <FontAwesomeIcon icon={faAward} style={{marginRight:"10px"}}/>
                        <span>{ach}</span>
                      </div>
                    )
                  })
                }
              </div>
            }

        </motion.div>
        <motion.div 
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        className={style.detailContainer} style={{borderLeft:"1px solid #808080", paddingLeft:"30px"}}>
            <div className={style.title}>
              <h1>Education</h1>
              {
                education ? 
                <FontAwesomeIcon icon={faChevronDown} onClick={handleEdu} style={{cursor:"pointer"}}/>
                : 
                <FontAwesomeIcon icon={faChevronUp} onClick={handleEdu} style={{cursor:"pointer"}}/>
              }
            </div>
              {
                education && 
                <div className={style.education}>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2022-present</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>Lovely Professional University, Punjab</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>Computer Science Engineer</div>
                      <div style={{fontSize:"14px"}}>(CGPA: 7.9/10)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2021-2022</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>Virendra Public School</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>XII<sup>th</sup></div>
                      <div style={{fontSize:"14px"}}>(Percentage: 74/100)</div>
                    </div>
                  </div>
                  <hr style={{border:"1px solid #808080", margin:"20px 0px 20px 0px"}}/>
                  <div className={style.eduDetail}>
                    <div className={style.year}>
                      <span>2019-2020</span>
                      <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"22px"}}/>
                    </div>
                    <div className={style.eduContent}>
                      <div style={{color:"#d3d3d3", fontSize:"14px"}}>Virendra Public School</div>
                      <div style={{fontSize:"1.3rem", fontWeight:"500"}}>X<sup>th</sup></div>
                      <div style={{fontSize:"14px"}}>(Percentage: 82/100)</div>
                    </div>
                  </div>
                </div>
              }
        </motion.div>
      </div>      
    </div>
  )
}

export default Resume
