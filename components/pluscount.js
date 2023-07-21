import React, { Component } from 'react';
import CountUp from 'react-countup';
import Mosque from '../public/img/contracting/residential.jpg';
import Image from 'next/image';
class Countup extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <div>
        <div className="grid lg:grid-cols-7 text-center justify-center sm:grid-cols-1 gap-5 mt-8 mx-auto px-10 md:justify-around">
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={2000} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Happy Clients
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={500} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Staff Members
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={8000} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Hour of Work
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={5} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Countries Experiences
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={25} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Year of Experiences
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={300} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Finished Projects
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={15} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Award Won
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countup;
