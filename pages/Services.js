import React from 'react';
import Footer from '../components/footer';
import Balcony from '../public/img/contracting/Balcony.jpg';
import MEP from '../public/img/contracting/MEP.jpg';

import Image from 'next/image';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Cta from '../components/cta';
import Residential from '../public/img/contracting/residential.jpg';
import SectionTitle from '../components/sectionTitle';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'HVAC System Installation',
      image: Balcony,
      description:
        'Installation of heating, cooling, and ventilation systems in residential, commercial, and industrial buildings.',
    },
    {
      title: 'HVAC System Maintenance',
      image: MEP,
      description:
        'Regular inspections, cleaning, and tune-ups to ensure the proper functioning and efficiency of HVAC systems.',
    },
    {
      title: 'HVAC Repair Services',
      image: Balcony,
      description:
        'Diagnosis and repair of issues with heating, cooling, and ventilation equipment.',
    },
    {
      title: 'Air Conditioning Installation and Repair',
      image: Balcony,
      description:
        'Installation and repair of air conditioning units and systems.',
    },
    {
      title: 'Heating System Installation and Repair',
      image: Balcony,
      description:
        'Installation and repair of furnaces, boilers, heat pumps, and other heating equipment.',
    },
    {
      title: 'Ventilation System Installation and Repair',
      image: Balcony,
      description:
        'Installation and repair of ventilation systems, including ductwork, exhaust fans, and ventilation hoods.',
    },
    {
      title: 'Indoor Air Quality (IAQ) Assessment and Improvement',
      image: Balcony,
      description:
        'Evaluation of indoor air quality and implementation of solutions to improve air quality, such as air purifiers and filters.',
    },
    {
      title: 'Duct Cleaning Services',
      image: Balcony,
      description:
        'Cleaning and maintenance of HVAC ductwork to remove dust, debris, and allergens.',
    },
    {
      title: 'Thermostat Installation and Programming',
      image: Balcony,
      description:
        'Installation and setup of programmable thermostats for energy-efficient temperature control.',
    },
    {
      title: 'Energy Audits and Efficiency Upgrades',
      image: Balcony,
      description:
        'Evaluation of HVAC systems for energy efficiency and recommendation of upgrades to reduce energy consumption.',
    },
    {
      title: 'Heat Exchanger Inspection and Repair',
      image: Balcony,
      description:
        ' Inspection and repair of heat exchangers in furnaces and boilers.',
    },
    {
      title: 'Refrigerant Leak Detection and Repair',
      image: Balcony,
      description:
        'Detection and repair of refrigerant leaks in air conditioning and cooling systems.',
    },
    {
      title: 'Air Balancing and Zoning',
      image: Balcony,
      description:
        'Balancing airflow in HVAC systems to ensure even distribution of heating and cooling.',
    },
    {
      title: 'Ductwork Design and Installation',
      image: Balcony,
      description:
        ' Design and installation of ductwork systems for proper air distribution.',
    },
    {
      title: 'Emergency HVAC Services',
      image: Balcony,
      description:
        '24/7 emergency services for HVAC system breakdowns and urgent repairs.',
    },
    {
      title: 'Geothermal HVAC Systems Installation and Service',
      image: Balcony,
      description:
        'Installation and service of geothermal heating and cooling systems.',
    },
    {
      title: 'Rooftop HVAC Unit Installation and Maintenance',
      image: Balcony,
      description:
        ' Installation and maintenance of HVAC units mounted on rooftops.',
    },
    {
      title: 'Humidification and Dehumidification Services',
      image: Balcony,
      description:
        'Installation and maintenance of humidifiers and dehumidifiers to control indoor humidity levels.',
    },
    {
      title: 'Air Balancing and Commissioning',
      image: Balcony,
      description:
        'Ensuring that HVAC systems perform as intended through proper calibration and balancing.',
    },
    {
      title: 'Energy-Efficient HVAC System Upgrades',
      image: Balcony,
      description:
        ' Upgrading existing HVAC systems to more energy-efficient models and technologies.',
    },
  ];
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
      <div className="relative">
        <Image
          src={Residential}
          alt="Hero Image"
          className="w-full h-72 brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="text-4xl text-center font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to Company Name LLC
            </h1>
            <p className="text-xl text-center leading-normal text-white font-semibold lg:text-xl xl:text-2xl dark:text-gray-300">
              Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar
              sit Lorem Ipsum Dollar sit
            </p>
          </div>
        </div>
      </div>
      <SectionTitle pretitle="Our Services" title="Checkout our service list!">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 rounded-md">
          {services.map((i) => (
            <div className="p-5 shadow-xl border-2 text-center" key={i.title}>
              <Image src={i.image} alt={i.title} className="w-full h-auto" />
              <h3 className="py-5 text-sm font-bold tracking-wider text-indigo-600 uppercase">
                {i.title}
              </h3>
              <hr />
              <p className="max-w-2xl pt-4 pb-8 text-lg leading-normal text-gray-800 lg:text-xl xl:text-xl dark:text-gray-300">
                {i.description}
              </p>
              <Link
                href="/Contact"
                className="p-4 text-lg font-medium text-center text-white bg-indigo-600 focus:bg-indigo-400 border-indigo-600 focus:border-indigo-400 border-4  rounded-md"
              >
                Request Free Quote
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <Cta />
      <Footer />
    </div>
  );
}
