import React from 'react';
import Tabs from '../components/Tabs';
import './School.css'
import OTTO from '../assets/WebSiteIlyasImages/OTTO.webp'
import OTTOImage from '../assets/WebSiteIlyasImages/OTTO.webp';

const School = () => {
  const tabs = [
    { 
      label: 'Lab Setup',
      sections: [
        { 
          title: 'STEM Kits', 
          content: 'Unlock the future of learning with our STEM Kits where creativity meets innovation, one experiment at a time!', 
          image: 'path/to/overview-image.jpg' 
        },
        { 
          title: '3D Printer', 
          content: 'Bring your ideas to life with our 3D Printer turning imagination into tangible creations with precision and ease!', 
          image: 'path/to/equipment-image.jpg' 
        },

        { 
          title: 'AI Kit', 
          content: 'Dive into the world of tomorrow with AI Kits—empower your students to build, code, and explore the future of artificial intelligence!', 
          image: 'path/to/equipment-image.jpg' 
        },
        { 
          title: 'OTTO Bot', 
          content: 'Meet OTTO Bot: Your friendly, programmable companion that makes robotics fun and accessible for every learner!', 
          image: OTTO
        },
        { 
          title: 'Robot Arm', 
          content: 'Master the art of automation with our Robot Arm design, build, and control your very own mechanical marvel!', 
          image: 'path/to/equipment-image.jpg' 
        },
      ],
    },
    {
      label: 'Academic Partner',
      sections: [
        { 
          title: 'Partner 1', 
          content: 'Information about Partner 1...', 
          image: 'path/to/partner1-image.jpg' 
        },
        { 
          title: 'Partner 2', 
          content: 'Information about Partner 2...', 
          image: 'path/to/partner2-image.jpg' 
        },
      ],
    },
    {
      label: 'ATL',
      sections: [
        { 
          title: 'Introduction', 
          content: 'Introduction to ATL...', 
          image: 'path/to/introduction-image.jpg' 
        },
        { 
          title: 'Benefits', 
          content: 'Benefits of ATL...', 
          image: 'path/to/benefits-image.jpg' 
        },
      ],
    },
  ];
  


  return (
    <div>
      <div className="empty"></div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default School;
