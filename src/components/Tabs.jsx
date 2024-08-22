import React, { useState } from 'react';
import './Tabs.css';
import stem from '../assets/STEM.jpg'
import OTTO from '../assets/WebSiteIlyasImages/OTTO.webp'
import OTTOImage from '../assets/WebSiteIlyasImages/OTTO.webp';


const Tabs = ({ tabs }) => {


  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const renderContent = () => {
    const currentTab = tabs.find(tab => tab.label === activeTab);
    return currentTab ? (
      <div className="tab-content">
        {currentTab.sections.map((section, index) => (
          <div key={index} className="tab-section">
            <div className="tab-section-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="tab-section-text">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="tabs-section">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`tab ${activeTab === tab.label ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default Tabs;
