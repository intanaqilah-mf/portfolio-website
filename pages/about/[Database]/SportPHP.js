"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';
import '../../../app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
function SportPHP() {
  const [darkMode, setDarkMode] = useState(true);
  const [data,setData] = useState([]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <div>
      <Head>
        <title>Intan Saidatul</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${
          darkMode ? 'bg-body-color' : 'bg-body-color-alt'
        }`}>
        <section>
        <nav className={`py-4 flex justify-between text-text-first-color ${
  darkMode ? 'bg-body-color' : 'bg-body-color-alt'
}`} style={{ position: 'sticky', top: 0, zIndex: 9999 }}>
  <div className="flex items-center ml-4 md:ml-8">
    <h1 className={`font-burtons text-xl ${
      darkMode ? 'top-text' : 'top-text-alt'
    }`}>Intan Saidatul</h1>
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
              padding: '0.25rem', }} /> ) : (
          <BsFillSunFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-2xl"
            style={{
              backgroundColor: 'transparent',
              color: '#FF73D3',
              borderRadius: '50%',
              padding: '0.25rem', }} /> )}
            </li>
          </ul>
        </div>
      </nav>
          <section className="about section" id="about">
      
        </section>

    <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Ceyyy</h1>
                <ul className="footer_social">
                    <a href="https://www.linkedin.com/in/saidatul-aqilah-8a89661a0/" target="_blank" rel="noreferrer" className="footer_social-link">
                    <Image src="/linkedin.png" alt="LinkedIn" width='40' height='40'/>
                    </a>
                    <a href="https://github.com/infaddil" target="_blank" rel="noreferrer" className="footer_social-link">
                    <Image src="/github.png" alt="Github" width='40' height='40'/>
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
export default SportPHP;