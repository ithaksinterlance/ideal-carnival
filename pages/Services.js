import React from 'react';
import Footer from '../components/footer';
import One from '../public/img/Services/1.png';
import Two from '../public/img/Services/2.png';
import Three from '../public/img/Services/3.png';
import Four from '../public/img/Services/4.png';
import Five from '../public/img/Services/5.png';
import Six from '../public/img/Services/6.png';
import Seven from '../public/img/Services/7.png';
import Eight from '../public/img/Services/8.png';
import Nine from '../public/img/Services/9.png';
import Ten from '../public/img/Services/10.png';
import Eleven from '../public/img/Services/11.png';
import Twelve from '../public/img/Services/12.png';
import Thrirteen from '../public/img/Services/13.png';
import Fourteen from '../public/img/Services/14.png';
import Fifteen from '../public/img/Services/15.png';
import Sixteen from '../public/img/Services/16.png';
import Seventeen from '../public/img/Services/17.png';
import Eighteen from '../public/img/Services/18.png';
import Nineteen from '../public/img/Services/19.png';
import Twenty from '../public/img/Services/20.png';
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
      image: One,
      description:
        'Installation of heating, cooling, and ventilation systems in residential, commercial, and industrial buildings.',
    },
    {
      title: 'HVAC System Maintenance',
      image: Two,
      description:
        'Regular inspections, cleaning, and tune-ups to ensure the proper functioning and efficiency of HVAC systems.',
    },
    {
      title: 'HVAC Repair Services',
      image: Three,
      description:
        'Diagnosis and repair of issues with heating, cooling, and ventilation equipment.',
    },
    {
      title: 'Air Conditioning Installation and Repair',
      image: Four,
      description:
        'Installation and repair of air conditioning units and systems.',
    },
    {
      title: 'Heating System Installation and Repair',
      image: Five,
      description:
        'Installation and repair of furnaces, boilers, heat pumps, and other heating equipment.',
    },
    {
      title: 'Ventilation System Installation and Repair',
      image: Six,
      description:
        'Installation and repair of ventilation systems, including ductwork, exhaust fans, and ventilation hoods.',
    },
    {
      title: 'Indoor Air Quality (IAQ) Assessment and Improvement',
      image: Seven,
      description:
        'Evaluation of indoor air quality and implementation of solutions to improve air quality, such as air purifiers and filters.',
    },
    {
      title: 'Duct Cleaning Services',
      image: Eight,
      description:
        'Cleaning and maintenance of HVAC ductwork to remove dust, debris, and allergens.',
    },
    {
      title: 'Thermostat Installation and Programming',
      image: Nine,
      description:
        'Installation and setup of programmable thermostats for energy-efficient temperature control.',
    },
    {
      title: 'Energy Audits and Efficiency Upgrades',
      image: Ten,
      description:
        'Evaluation of HVAC systems for energy efficiency and recommendation of upgrades to reduce energy consumption.',
    },
    {
      title: 'Heat Exchanger Inspection and Repair',
      image: Eleven,
      description:
        ' Inspection and repair of heat exchangers in furnaces and boilers.',
    },
    {
      title: 'Refrigerant Leak Detection and Repair',
      image: Twelve,
      description:
        'Detection and repair of refrigerant leaks in air conditioning and cooling systems.',
    },
    {
      title: 'Air Balancing and Zoning',
      image: Thrirteen,
      description:
        'Balancing airflow in HVAC systems to ensure even distribution of heating and cooling.',
    },
    {
      title: 'Ductwork Design and Installation',
      image: Fourteen,
      description:
        ' Design and installation of ductwork systems for proper air distribution.',
    },
    {
      title: 'Emergency HVAC Services',
      image: Fifteen,
      description:
        '24/7 emergency services for HVAC system breakdowns and urgent repairs.',
    },
    {
      title: 'Geothermal HVAC Systems Installation and Service',
      image: Sixteen,
      description:
        'Installation and service of geothermal heating and cooling systems.',
    },
    {
      title: 'Rooftop HVAC Unit Installation and Maintenance',
      image: Seventeen,
      description:
        ' Installation and maintenance of HVAC units mounted on rooftops.',
    },
    {
      title: 'Humidification and Dehumidification Services',
      image: Eighteen,
      description:
        'Installation and maintenance of humidifiers and dehumidifiers to control indoor humidity levels.',
    },
    {
      title: 'Air Balancing and Commissioning',
      image: Nineteen,
      description:
        'Ensuring that HVAC systems perform as intended through proper calibration and balancing.',
    },
    {
      title: 'Energy-Efficient HVAC System Upgrades',
      image: Twenty,
      description:
        'Upgrading existing HVAC systems to more energy-efficient models and technologies.',
    },
  ];
  return (
    <div>
      <Head>
        <title>Contracting site</title>
        <meta
          name="description"
          content="Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar
              sit Lorem Ipsum Dollar sit"
        />
        <link rel="icon" href="/favicon.svg" />
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
              <Image src={i.image} alt={i.title} className="w-full" />
              <h3 className="h-16 text-sm font-bold tracking-wider text-primary uppercase">
                {i.title}
              </h3>
              <hr />
              <p className="text-sm h-24 font-thin text-gray-500 dark:text-gray-300">
                {i.description}
              </p>
              <Link
                href="/Contact"
                className="p-1 mb-1 text-sm font-medium text-center text-white bg-accent focus:bg-yellow-400 border-accent focus:border-yellow-400 border-4 rounded-md"
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
