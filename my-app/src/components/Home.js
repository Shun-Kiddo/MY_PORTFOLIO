// src/components/Home.js
import React, { useEffect, useRef ,useState} from 'react';
import '../home_style.css';

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
document.head.appendChild(link);

const names = ['JAYSON', 'SHUN KIDDO'];
const Home = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
    return () => document.body.classList.remove('loaded'); 
  }, []);

  const [displayedText, setDisplayedText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const typingSpeed = 200; // ms per character
  const pauseTime = 2500;  // pause after full name typed

  useEffect(() => {
    let timeout;

    if (typing) {
      // Typing characters
      if (displayedText.length < names[nameIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(names[nameIndex].slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setTyping(false), pauseTime);
      }
    } else {
      // Deleting characters
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        // Switch to next name and start typing again
        setNameIndex((prev) => (prev + 1) % names.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, nameIndex]);


  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);

  const scrollToProfile = (e) => {
    e.preventDefault();
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEducation = (e) => {
    e.preventDefault();
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkill = (e) => {
    e.preventDefault();
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <a href="/home.html">
            <img src="/img/Jayson_logo2.png" alt="lms-logo" className="logo" />
          </a>
          <a href="/home.html" className="logo-name">Jayson Mancol</a>
        </div>

        <nav className="menu">
          <a className="profile" href="#" onClick={scrollToProfile}>Profile</a>
          <a className="education" href="#" onClick={scrollToEducation}>Education</a>
          <a className="skill" href="#" onClick={scrollToSkill}>Skills</a>
          <a className="contact" href="#">Contact</a>
        </nav>
      </div>

      <section className="Profile" id="Profile" ref={profileRef}>
        <div className="overlay"></div>
        
        <div className="profile-content">
          <div className="intro">
            <h2 className="greetings">
              <span className="hello">
                HELLO <span className="hand">
                  <img className="hand-waving" src="/img/waving-hand.svg" alt="waving hand" />
                </span>
              </span>{' '}I'M <span className="name">{displayedText}</span> 
            </h2>
            <h2 className='greetings1'>WELCOME TO MY WORLD!</h2>
              <div className='social-media-icons'>
                  <a href="https://www.facebook.com/Shun.Kiddo" class="fa fa-facebook" target='blank'></a>
                  <a href="#" class="fa fa-twitter" target='blank'></a>
                  <a href="https://www.linkedin.com/in/jayson-flores-mancol" class="fa fa-linkedin" target='blank'></a>
                  <a href="https://www.instagram.com/shun_kiddo" class="fa fa-instagram" target='blank'></a>
              </div>
            <a href="#" className="about-me-button">About Me</a>
          </div>

          <div className="profile-img">
            <div className="profile-pic">
              <div className="card-inner">
                <div className="card-front">
                  <div className="overlay-picture-jayson"></div>
                  <img
                    src="/img/jayson-side-view.jpg"
                    alt="jayson_profile"
                    className="profile-image"
                  />
                </div>
                <div className="card-back">
                  <div className="overlay-cartoon-jayson"></div>
                  <img
                    src="/img/jay1.jpg"
                    alt="jayson_cartoons"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="Education" ref={educationRef}>
        <div className="overlay-education"></div>
        <div className="Education-container">
          <div style={{ textAlign: "center" }}>
            <h2 className="educ">EDUCATION</h2>
          </div>
          <div className="education-level">
            {["COLLEGE","SENIOR HIGH","JUNIOR HIGH","ELEMENTARY"].map((level, index) => (
              <div className="card" key={index}>
                <div className="slide slide1">
                  <div className="content">
                    <div className="icon"></div>
                    <div className="badge">{level}</div>
                  </div>
                </div>

                <div
                  className={`slide slide2 slide2-${index}`}
                  style={{ position: 'relative' }}
                >
  
                  <div className="content">
                    {index === 3 && (
                      <div className="school-info">
                        <a href ="https://www.facebook.com/profile.php?id=100068064192315" className='lonoy-school' target='blank'>Lonoy Integrated School</a>
                        <p><strong class="sy-date">2008–2016</strong></p>
                        <ul>
                          <li>With Honors</li>
                          <li>Best in Art</li>
                          <li>Best in Mathematics</li>
                          <li>Best in Filipino</li>
                          <li>Participant of Poster Making</li>
                          <li>Graduate</li>
                        </ul>
                      </div>
                      
                    )}
                    {index === 2 && (
                      <div className="school-info">
                        <a href ="https://www.facebook.com/profile.php?id=100065393742781" className='spnhs-school' target='blank'>San Policarpo Junior High School</a>
                        <p><strong class="sy-date">2016–2020</strong></p>
                        <ul>
                          <li>Pandemic</li>
                          <li>Graduate</li>
                        </ul>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="school-info">
                        <a href = "https://www.facebook.com/profile.php?id=100065393742781" className='spnhs-school' target='blank'>San Policarpo Senior High School</a>
                        <p><strong class="sy-date">2020–2023</strong></p>
                        <ul>
                          <li>With Honors</li>
                          <li>Graduate</li>
                        </ul>
                      </div>
                    )}
                    {index === 0 && (
                      <div className="school-info">
                        <a href = "https://www.facebook.com/NWSSUCCIS2020" className='nwssu-collage' target='blank'>Northwest Samar State University</a>
                        <p><strong class="sy-date">2023–?</strong></p>
                        <ul>
                          <li>Bachelor of Science and Information Technology</li>
                          <li>Processing</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='Certification'>Certification / Achievements</div>
            <div className='content-certificate'>
                {!selectedImage && <navbar />}
                {['/img/CG-honor.jpg', '/img/CG-silver.jpg', '/img/HR-basic.jpg', '/img/CG-bronze.jpg'].map((src, index) => (
                  <img
                    key={index}
                    className={`certificate-${index + 1}`}
                    src={src}
                    alt={`Cert ${index + 1}`}
                    onClick={() => handleImageClick(src)}
                  /> 
                ))}
              
                {selectedImage && (
                  <div className="background-overlay" onClick={closePreview}>
                    <img className="full-image" src={selectedImage} alt="Full Preview" />
                  </div>
                )}
            </div>
          </div>
      </section>

      <section className="Skills" ref={skillRef}>
         <div className="overlay-skill"></div>
         <div className="intro">
         <h2 className="educ">SKILL</h2>
         </div>
      </section>

      <section className="Education">
         <div className="overlay"></div>
         <div className="Education-container">
         <h2 className="educ">EDUCATION</h2>
         </div>
      </section>

      <a className="up-button"  href="#" onClick={scrollToProfile}>UP</a>
    </>
  );
};

export default Home;
