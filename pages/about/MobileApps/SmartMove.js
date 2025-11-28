"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';
import '../../../app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';
import CodeBlock from '../../../app/CodeBlock';
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
          <p className={`${
  darkMode ? 'about_description' : 'about_description-light'}`}>

 </p>
 <h2 className="section_title">Smart Move</h2>
 <p className={`${
  darkMode ? 'about_description' : 'about_description-light'}`}>
    Smart Move is my idea for a better campus shuttle at Universiti Sains Malaysia. 
    Instead of treating every stop the same, it aims to give riders a live picture of where buses are headed and where seats are still available, 
    so students know exactly which shelter to walk to for a quick pickup. The goal is a smoother, more reliable trip that makes taking the bus the 
    obvious choice again.

The project tackles three linked problems: the current buses follow fixed loops that often leave crowded stops waiting, the system has no real-time passenger 
or arrival data, and past attempts to “fix” delays by adding more buses have only worsened traffic and congestion around campus. 
    </p>
    <h2 className="section_title">How can I use Smart Move</h2>
    <p className={darkMode ? 'about_description' : 'about_description-light'}>
        When you clicked on the "about" link on the previous page, you just have to follow this link and enter username: 123 and password: 123:
        <Link href="https://pendaftaran-acara-intan-4191c8bdad3f.herokuapp.com/menuutama.php" legacyBehavior>
          <a className={darkMode ? 'about_description' : 'about_description-light'}>Login Here</a>
        </Link>
        <Image src="/Login interface.png" alt="ERD" width='400' height='400'/>
      </p>
      <p className={darkMode ? 'about_description' : 'about_description-light'}>
        Then you will be directed to main menu page here. Happy playing with this!
        <Image src="/Main menu.png" alt="main menu" width='400' height='400'/>
      </p>
      <h2 className="section_title">Development</h2>
 <p className={`${
  darkMode ? 'about_description' : 'about_description-light'}`}>
 The first thing I did was planning phase. This include with the flowchart, ERD and normalization. As boring as it is, I began to appreciate 
 the process flow as it helps keep me in track and knowing my (necessary) stakeholders. </p>
 <Image src="/ERD Sport DB.png" alt="ERD" width='400' height='400'/>
 <span className={` ${darkMode ? 'skills_level' : 'skills_level-alt'}`}>The ERD for Sport Registration website</span> <br></br>
Using SQL, I modify structure of my database. That time I learned SQL is for:
1) Data Definition language
Define the database by either CREATE, ALTER column or DROP table. Basically what you want for that table to look like; how much table, siza of table.
2) Data Manipulation language
Manipulate data. Imagining myself inserting data in Excel sheet where I make changes to the cell itself (TLDR; Excel is not a database as people always thought about)
It consists of 6 tables which are acara, acara_ahli, ahli, kategori, kelas and pengguna.
After the SQL, I learned on how to build the UI using purely HTML and CSS. It was fun as it sparks my love with 'computer' language.
When it comes to logic like mapping data records from database, I started learning PHP, phpMyAdmin and how to run it like on how to use the Xampp
and learnt why we have to run Apache and MySQL. That time, Xampp was much simpler than any other containerization such as k8s.
Then, I use phpMyAdmin to connect my database that I import the sql with that (because I was a beginner that prefer UI instead of CLI haha.)
I use PHP to connect between my database and web HTML. That was my first programming language
in my life. It is mixed feelings between frustation and enjoyment yet excitement.
<CodeBlock language="PHP" darkMode={darkMode}>
  {`<?PHP 
//nama host (default : localhost)
$namahost='';
//username akaun SQL (default : root)
$username_SQL='root'; 
//katalaluan SQL (jika ada, jika tiada letakan $katalaluan_SQL=''; sahaja)
$katalaluan_SQL='';
//nama pangkalan data
$nama_pangkalan_data='deduct';
//membuat connection menggunakan internal function (mysqli_connect)
$condb=mysqli_connect($namahost,$username_SQL,$katalaluan_SQL,$nama_pangkalan_data);
?>
  }`}
</CodeBlock>
        </section>
        
    <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Ceyyy</h1>
                <ul className="footer_social">
                    <a href="https://www.linkedin.com/in/saidatul-aqilah-8a89661a0/" target="_blank" rel="noreferrer" className="footer_social-link">
                    <Image src="/linkedin.png" alt="LinkedIn" width='40' height='40'/>
                    </a>
                    <a href="https://github.com/intanaqilah-mf" target="_blank" rel="noreferrer" className="footer_social-link">
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