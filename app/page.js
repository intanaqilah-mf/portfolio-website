"use client";
import Head from "next/head";
import { portfolioGallery } from "./portfolioGallery";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';
import Contact from "./Contact";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState([]);

  // --- THIS IS THE NEW useEffect HOOK YOU ASKED FOR ---
  useEffect(() => {
    // Access the body element
    const body = document.body;

    if (darkMode) {
      // If dark mode is on, remove the light-theme class
      body.classList.remove('light-theme');
    } else {
      // If dark mode is off (light mode is on), add the light-theme class
      body.classList.add('light-theme');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
        body.classList.remove('light-theme');
    };
  }, [darkMode]); // This effect runs every time darkMode changes
  // --- END OF THE NEW useEffect HOOK ---

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [collection, setCollection] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => { // This is your existing useEffect
    setData(portfolioGallery);
    setCollection([... new Set(portfolioGallery.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = portfolioGallery.filter((item) => item.title == itemData);
    setData(filterData);
  };

  const handleAllClick = () => {
    setData(portfolioGallery);
    setActiveItem(null); // Reset activeItem to null when "All" is clicked
  };

  const handleItemClick = (item) => {
    if (item !== activeItem) {
      gallery_filter(item);
      setActiveItem(item); // Set the activeItem only if it's a different item
    } else {
      gallery_filter(null); // Clear the filter if the same item is clicked again
      setActiveItem(null); // Reset activeItem if the same item is clicked again
    }
  };

  return (
    <div>
      <Head>
        <title>Intan Saidatul</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${darkMode ? 'bg-body-color' : 'bg-body-color-alt'}`}>
        <section>
          <nav className={`py-4 flex justify-between text-text-first-color ${darkMode ? 'bg-body-color' : 'bg-body-color-alt'}`} style={{ position: 'sticky', top: 0, zIndex: 9999 }}>
            <div className="flex items-center ml-4 md:ml-8">
              <h1 className={`font-burtons text-xl ${darkMode ? 'top-text' : 'top-text-alt'}`}>Intan Saidatul</h1>
            </div>

            <div className="flex items-center mx-auto">
              <a href="https://bmc.link/intanceyyy" target="_blank" rel="noopener noreferrer">
                <Image src="/buyCoffee.png" alt="Buy Coffee" height='100' width='200' />
              </a>
            </div>

            <div className="flex items-center mr-4 md:mr-8">
              <ul className="flex items-center">
                <li className="mr-2 md:mr-8 ml-2 md:ml-20">
                  {darkMode ? (
                    <BsFillMoonStarsFill
                      onClick={toggleDarkMode}
                      className="cursor-pointer text-2xl"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'grey',
                        borderRadius: '50%',
                        padding: '0.25rem',
                      }} />) : (
                    <BsFillSunFill
                      onClick={toggleDarkMode}
                      className="cursor-pointer text-2xl"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#FF73D3',
                        borderRadius: '50%',
                        padding: '0.25rem',
                      }} />)}
                </li>
              </ul>
            </div>
          </nav>
          <section className="about section" id="about">
            <span className="section_subtitle text-center">Who am I?</span>
            <h2 className="section_title text-center text-first-color text-4xl md:text-5xl mb-8">
              Intan Saidatul
            </h2>

            <div className="about_container container grid grid-cols-2 items-center gap-4">
              <Image src="/about1.jpg" alt="Intan Saidatul" className="rounded-full" width='500' height='500' />

              <div className="about_data text-initial">
                <p className={`${darkMode ? 'about_description' : 'about_description-light'}`}>
                  Hello! I&apos;m Intan, a Software Engineer and Solution Developer specializing in full-stack development and AI-powered solutions. As a recent BSc Computer Science graduate and Yayasan TM scholar, I&apos;ve built enterprise-level systems for clients like PETRONAS, leveraging MERN stack, cloud platforms (GCP, Azure), and AI technologies to automate complex workflows.
                  <br /><br />
                  I&apos;m a Top 10 KitaHack 2025 Finalist and hold certifications in CompTIA Cloud+ and MERN Full Stack, with Google Professional Cloud Architect certification in progress. My expertise spans building scalable web applications, mobile apps with Flutter, and cloud-native solutions that deliver measurable impact—like reducing manual work from years to hours through AI automation.
                  <br /><br />
                  Currently expanding my skills in cloud architecture and AI/ML integration. Feel free to explore my projects and reach out!
                </p>

                <a download href="/Resume_Intan_Aqilah.pdf" className="button button--ghost">
                  Download Resume
                </a>
              </div>
              <div className="flex justify-end mr-20">
                <div className={`${darkMode ? 'about_box' : 'about_box-light'} text-center py-4 px-5`} style={{ marginRight: '1rem' }}>
                  <i className="bx bx-award about_icon"></i>
                  <h3 className={`${darkMode ? 'about_title' : 'about_title-light'}`}>Experience</h3>
                  <span className={`${darkMode ? 'about_subtitle' : 'about_subtitle-light'}`}>4 years in CS field</span>
                </div>

                <div className={`${darkMode ? 'about_box' : 'about_box-light'} text-center py-4 px-5`}>
                  <i className="bx bx-briefcase-alt about_icon"></i>
                  <h3 className={`${darkMode ? 'about_title' : 'about_title-light'}`}>Completed</h3>
                  <span className={`${darkMode ? 'about_subtitle' : 'about_subtitle-light'}`}>5 projects</span>
                </div>
              </div>
            </div>
          </section>

          <section className="skills section" id="skills">
            <span className="section_subtitle">Abilities</span>
            <h2 className="section_title">My skills</h2>

            <div className="skills_container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Frontend Development */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Frontend Development</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>ReactJS</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>TypeScript</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Flutter</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>HTML/CSS</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Responsive Design</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Backend Development</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Node.js</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Express.js</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Fastify</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>PHP</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Spring Boot</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Skilful</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>RESTful API</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Databases</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>MongoDB</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>MySQL</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Oracle</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Firebase</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Cloud & DevOps</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Google Cloud</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Azure Cloud</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>AWS</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>GitHub Actions</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>CI/CD Pipelines</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI/ML & Microsoft Tools */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>AI/ML & Tools</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Vertex AI</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Azure Doc Intelligence</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>OCR Technologies</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>n8n</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Experience</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Power Platform</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Technologies */}
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Other Technologies</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Python</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Skilful</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Java</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Skilful</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Git & Version Control</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="certifications section" id="certifications">
            <span className="section_subtitle">Professional Credentials</span>
            <h2 className="section_title">Certifications</h2>

            <div className="certifications_container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CompTIA Cloud+ */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bxs-cloud text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>CompTIA Cloud+</h3>
                  <div style={{ paddingTop: '2rem' }}>
                    <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>CompTIA</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>November 2025</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    Certified
                  </div>
                </div>
              </div>

              {/* MERN Full Stack */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bx-code-alt text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>MERN Full Stack</h3>
                  <div style={{ paddingTop: '2rem' }}>
                    <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>Knowledgecom</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>August 2025</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    Certified
                  </div>
                </div>
              </div>

              {/* Secure Programming with C */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bx-shield text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>Secure Programming with C</h3>
                  <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>EC-Council</p>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>February 2025</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    Certified
                  </div>
                </div>
              </div>

              {/* ICDL Big Data */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bx-data text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>ICDL Big Data</h3>
                  <div style={{ paddingTop: '2rem' }}>
                    <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>ICDL</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>January 2025</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    Certified
                  </div>
                </div>
              </div>

              {/* ICDL Digital Marketing */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bx-trending-up text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>ICDL Digital Marketing</h3>
                  <div style={{ paddingTop: '2rem' }}>
                    <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>ICDL</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>December 2024</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-600'}`}>
                    Certified
                  </div>
                </div>
              </div>

              {/* Google Professional Cloud Architect - In Progress */}
              <div className={`certification_card ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'} transition-transform duration-300 hover:scale-105`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)',
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <i className="bx bxl-google-cloud text-4xl mb-4" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}></i>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef' }}>Google Professional Cloud Architect</h3>
                  <p className="text-sm" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.8 }}>Google</p>
                </div>
                <div className="mt-auto">
                  <p className="text-sm mb-2" style={{ color: darkMode ? '#FF73D3' : '#d946ef', opacity: 0.7 }}>Expected: January 2026</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-600'}`}>
                    In Progress
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="work section" id="work">
            <h2 className="section_title">Recent work</h2>
            <div className="work_filters flex justify-center items-center gap-3 mb-8">
              <span
                className={`work_item active-work ${activeItem === null ? 'text-hover-color bg-customColor hover:text-pink-400 hover:bg-transparent' : 'hover:bg-pink-500 hover:text-white'}`}
                onClick={handleAllClick}
              >
                All
              </span>

              {collection.map((item, index) => (
                <span
                  key={index}
                  className={`${darkMode ? 'work_item' : 'work_item-light'} ${item === activeItem ? 'hover-effect' : ''} hover:bg-pink-400 hover:text-white`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </span>
              ))}

            </div>
            <div className="work_container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map(item => (
                <div key={item.id} className="work_card flex flex-col items-center"
                style={{ 
      boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)', // Use dark value or #fff for light
    }}
                > 
                <h3 className="skills_title">{item.category}</h3>
                <Image 
                    src={item.image} 
                    alt={item.category} 
                    width={item.width} // Use provided or default
                    height={item.height} // Use provided or default
                    className="work_img mb-4" // Add a class for potential styling (like margin-bottom)
                  />
                  
                  <ul className="tech_stack">
                    {item.techStack?.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <p className={`work_description ${darkMode ? 'text-text-color' : 'text-gray-700'} mb-4 text-sm`}>
                      {item.description}
                  </p>

                  <div className="work_buttons">
                    <Link href={`/about/${item.path}`} legacyBehavior>
                      <a className="button1 button1--ghost">About</a>
                    </Link>
                    <a href={item.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="button1 button1--ghost">
                      Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div>
            <Contact />
          </div>

          <footer className="footer">
            <div className="footer_container container">
              <h1 className="footer_title">Ceyyy</h1>
              <ul className="footer_social">
                <a href="https://www.linkedin.com/in/saidatul-aqilah-8a89661a0/" target="_blank" rel="noreferrer" className="footer_social-link">
                  <Image src="/linkedin.png" alt="LinkedIn" width='40' height='40' />
                </a>
                <a href="https://github.com/infaddil" target="_blank" rel="noreferrer" className="footer_social-link">
                  <Image src="/github.png" alt="Github" width='40' height='40' />
                </a>
              </ul>
              <span className="footer_copy">
                Intan Saidatul. All rights reserved.
              </span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}