import React, { useState } from 'react';
import Container from '../components/container';
import Head from 'next/head';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Footer from '../components/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch(`/api/send-email`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
    });
  };

  return (
    <div>
      <Head>
        <title>Contracting site</title>
        <meta
          name="description"
          content="Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit
        Lorem Ipsum Dollar sit"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />

      <Container className={`flex w-full flex-col mt-4 max-w-lg`}>
        <div className="text-2xl font-extrabold font-sans text-primary">Let&apos;s Connect</div>
        <div>
          <div className="flex mt-5 space-x-5 text-black dark:text-gray-500">
            <ul>
              <li className="text-xl py-4 font-bold tracking-wider text-primary uppercase">
                HEAD OFFICE
              </li>
              <li>
                125 Big fella St., New York, Hi 5654775, United States of
                America
              </li>
              <li>Phone: 0123456789</li>
              <li>Email: test@sbtechnosoft.com</li>
              <li>Office Time: 9 a.m.- 6 p.m.</li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className={`flex w-full flex-col mt-4 max-w-lg`}>
        <SectionTitle
          pretitle="Submit to us your Requirements"
          title="A form to begin your biggest Milestone"
        >
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="phone"
              placeholder="Your Whatsapp Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email Address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Requirement:
            </label>
            <textarea
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="What's your requirement?"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </form>
      </Container>
      <Footer />
    </div>
  );
}
