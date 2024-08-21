import React from 'react';
import Tabs from '../components/TabSection copy';

const Sch = () => {
  const tabData = [
    {
      id: 0,
      label: 'Ta',
      sections: [
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 1 Title',
          description: 'This is a description for section 1 in Tab 1.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 2 Title',
          description: 'This is a description for section 2 in Tab 1.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 3 Title',
          description: 'This is a description for section 3 in Tab 1.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 4 Title',
          description: 'This is a description for section 4 in Tab 1.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 5 Title',
          description: 'This is a description for section 5 in Tab 1.',
        },
      ],
    },
    {
      id: 1,
      label: 'Tab 2',
      sections: [
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 1 Title',
          description: 'This is a description for section 1 in Tab 2.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 2 Title',
          description: 'This is a description for section 2 in Tab 2.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 3 Title',
          description: 'This is a description for section 3 in Tab 2.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 4 Title',
          description: 'This is a description for section 4 in Tab 2.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 5 Title',
          description: 'This is a description for section 5 in Tab 2.',
        },
      ],
    },
    {
      id: 2,
      label: 'Tab 3',
      sections: [
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 1 Title',
          description: 'This is a description for section 1 in Tab 3.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 2 Title',
          description: 'This is a description for section 2 in Tab 3.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 3 Title',
          description: 'This is a description for section 3 in Tab 3.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 4 Title',
          description: 'This is a description for section 4 in Tab 3.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Section 5 Title',
          description: 'This is a description for section 5 in Tab 3.',
        },
      ],
    },
  ];

 return (
    <div className="school-page">
    <div className='empty'>

    </div>
    <div>
      <Tabs tabs={tabData} /> {/* Pass the tabs data to the Tabs component */}
      </div>
    </div>
  );
};

export default Sch;
