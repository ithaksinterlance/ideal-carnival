import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Form from '../components/form';
import { benefitOne, benefitTwo } from '../components/data';
import WhatWeDo from '../components/whatWeDo';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Countup from '../components/pluscount';

const Home = () => {
  return (
    <>
      <Head>
        <title>Contracting site</title>
        <meta
          name="description"
          content="Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Our Accompolishment"
        title="Real Acheivement takes hard roads to finish"
      >
        Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit
        Lorem Ipsum Dollar sit
      </SectionTitle>
      <Countup />

      <SectionTitle pretitle="Company LLC Benefits" title="Why do you need us?">
        Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit
        Lorem Ipsum Dollar sit
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        pretitle="What we do"
        title="Learn how to fullfil your needs"
      >
        Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit
        Lorem Ipsum Dollar sit
      </SectionTitle>
      <WhatWeDo />

      <SectionTitle
        pretitle="Submit to us your Requirements"
        title="A form to begin your biggest Milestone"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Form id="requestquote" />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
