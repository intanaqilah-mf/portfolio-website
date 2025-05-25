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
                  Hello! Just address me as Intan. I am a Computer Science student, one of the Yayasan TM scholars, and a GDSC (Google Developer Student Club) core team member in the technical department.
                  <br /><br />
                  I have learned programming since 2018 until now and now I&apos;m collecting my projects to showcase it. Please, take a look.
                  <br /><br />
                  I am specialized more in the frontend area so building websites is my expertise. I am currently learning Flutter for Android apps and backend programming so hopefully can bring more functionality to my projects. #roadtofullstackdeveloper
                  <br /><br />
                  If you have any questions, feel free to reach me out!
                </p>

                <a download href="Resume Intan Aqilah.pdf" className="button button--ghost">
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

            <div className="skills_container container grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)', // You might want to remove this if CSS handles it
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Frontend developer</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>HTML</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Advanced</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>CSS</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Advanced</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Dart</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Basic</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>React</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Basic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`skills_content ${darkMode ? 'bg-box-color' : 'bg-box-color-alt'}`}
                style={{
                  boxShadow: darkMode ? '0 2px 4px pink' : '0 2px 4px hsla(var(--second-hue), 8%, 54%)', // You might want to remove this if CSS handles it
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                }}>
                <h3 className={` ${darkMode ? 'skills_title' : 'skills_title'}`}>Backend developer</h3>

                <div className="skills_box">
                  <div className="skills_group">
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Javascript</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Advanced</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>PHP</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Advanced</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills_group">

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>C++</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Advanced</span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                      <div>
                        <h3 className={`skills_name ${darkMode ? '' : 'text-first-color'}`}>Kotlin</h3>
                        <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>Basic</span>
                      </div>
                    </div>
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