import React from 'react';
import Footer from '../components/footer';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Apartment from "../public/img/contracting/Apartment3.jpg"

export default function Projects() {
  
  return (
    <div>
      <Head>
        <title>Contracting site</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      Pr0jects
      <Footer />
    </div>
  );
}
