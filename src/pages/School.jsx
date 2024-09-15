import React from 'react';
import Tabs from '../components/Tabs';
import './School.css'
import OTTO from '../assets/WebSiteIlyasImages/OTTO.webp'
import STEMpic from '../assets/WebSiteIlyasImages/STEM with Each Pic.jpg'
import Print3D from '../assets/WebSiteIlyasImages/01 College 3d Printing wobg.png'
import AIKit from '../assets/WebSiteIlyasImages/Artificial Intelligence.jpg'
import Roboarm from '../assets/WebSiteIlyasImages/Robo Arm.jpg'

const School = () => {
  const tabs = [
    { 
      label: 'Lab Setup',
      sections: [
        { 
          title: 'STEM Kits', 
          content: [
            'Hands-on experiments that make learning engaging and fun.',
            'Develop critical thinking and problem-solving skills.',
            'Perfect for classrooms or at-home discovery.'
          ],
          quote:'Ignite Curiosity, Build the Future!',  
          image: STEMpic 
        },
        { 
          title: '3D Printer', 
          content: [
            'Hands-on experiments that make learning engaging and fun.',
            'Develop critical thinking and problem-solving skills.',
            'Perfect for classrooms or at-home discovery.'
          ],
          image: Print3D 
        },

        { 
          title: 'AI Kit', 
          content: [
            'Hands-on experiments that make learning engaging and fun.',
            'Develop critical thinking and problem-solving skills.',
            'Perfect for classrooms or at-home discovery.'
          ],
          image: AIKit 
        },
        { 
          title: 'OTTO Bot', 
          content: [
            'Hands-on experiments that make learning engaging and fun.',
            'Develop critical thinking and problem-solving skills.',
            'Perfect for classrooms or at-home discovery.'
          ],
          image: OTTO
        },
        { 
          title: 'Robot Arm', 
          content: [
            'Hands-on experiments that make learning engaging and fun.',
            'Develop critical thinking and problem-solving skills.',
            'Perfect for classrooms or at-home discovery.'
          ],
          image: Roboarm
        },
      ],
    },
    {
      label: 'Academic Partner',
      sections: [
        { 
          title: 'Partner 1', 
          content: ['Information about Partner 1...'], 
          image: 'path/to/partner1-image.jpg' 
        },
        { 
          title: 'Partner 2', 
          content: ['Information about Partner 2...'], 
          image: 'path/to/partner2-image.jpg' 
        },
      ],
    },
    {
      label: 'ATL',
      sections: [
        { 
          title: 'Introduction', 
          content:[ 'Introduction to ATL...'], 
          image: 'path/to/introduction-image.jpg' 
        },
        { 
          title: 'Benefits', 
          content: ['Benefits of ATL...'], 
          image: 'path/to/benefits-image.jpg' 
        },
      ],
    },
  ];
  


  return (
    <div className='page'>
      <div className="empty"></div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default School;
