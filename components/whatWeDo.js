import Container from './container';
import Image from 'next/image';
import Apartment from '../public/img/contracting/apartment.jpg';
import Balcony from '../public/img/contracting/Balcony.jpg';
import Hotel from '../public/img/contracting/hotel.jpg';
import CarPark from '../public/img/contracting/carpark.jpg';
import Masjid from '../public/img/contracting/masjid.jpg';
import Residential from '../public/img/contracting/residential.jpg';

const WhatWeDo = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-36">
        <div>
          <Image
            src={Apartment}
            className="rounded-md"
            height={300}
            alt="apartment contracting in dubai"
          />
          <h3>Apartment</h3>
        </div>
        <div>
          <Image
            src={CarPark}
            className="rounded-md"
            height={300}
            alt="apartment contracting in dubai"
          />
          <h3>Car Park</h3>
        </div>
        <div>
          <Image
            src={Masjid}
            className="rounded-md"
            height={300}
            alt="masjid contracting in dubai"
          />
          <h3>Mosque</h3>
        </div>
        <div>
          <Image
            src={Hotel}
            className="rounded-md"
            height={300}
            alt="hotel contracting in dubai"
          />
          <h3>Hotel</h3>
        </div>
        <div>
          <Image
            src={Balcony}
            className="rounded-md"
            height={300}
            alt="balcony contracting in dubai"
          />
          <h3>Kitchen Remodelling</h3>
        </div>
        <div>
          <Image
            src={Residential}
            className="rounded-md"
            height={300}
            alt="balcony contracting in dubai"
          />
          <h3>Balcony</h3>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
