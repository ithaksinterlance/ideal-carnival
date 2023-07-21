import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Expertise and Specialization',
      desc: 'Contracting companies often specialize in specific industries or services, providing clients access to expert knowledge, skills, and experience in their respective fields.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Cost Efficiency',
      desc: ' Hiring a contracting company can be more cost-effective than maintaining in-house teams, as it eliminates the need for employee benefits, training, and overhead expenses.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Flexibility and Scalability',
      desc: 'Contracting companies offer flexible services, allowing clients to adjust the scope of work or team size according to project requirements and business needs.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Access to Resources',
      desc: 'Contracting companies typically have access to a wide range of resources, including specialized equipment, technology, and a network of subcontractors, which can benefit the clients project.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Risk Mitigation',
      desc: 'Contracting companies often assume responsibility for project risks, compliance, and insurance, reducing the burden on the client and offering additional protection.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Time Efficiency',
      desc: 'Experienced contracting companies can efficiently manage projects, meet deadlines, and streamline processes, saving time and improving project outcomes.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Quality Assurance',
      desc: 'Contracting companies are focused on maintaining their reputation and meeting client expectations, ensuring that work is executed with high standards of quality and craftsmanship.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
