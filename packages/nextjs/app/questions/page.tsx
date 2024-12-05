"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Popup1 from './popup1';
import Popup2 from './popup2';
import Popup3 from './popup3';
import Popup4 from './popup4';
import Popup5 from './popup5';
import Popup6 from './popup6';
import Popup7 from './popup7';
import Popup8 from './popup8';
import Popup9 from './popup9';

const QuestionnairePage = () => {
  const [projectName, setProjectName] = useState('');
  const [projectWebsite, setProjectWebsite] = useState('');
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [humanData, setHumanData] = useState(null);
  const [useCase, setUseCase] = useState([]);
  const [dataSharing, setDataSharing] = useState(null);
  const [multiJurisdiction, setMultiJurisdiction] = useState(null);
  const [complianceProof, setComplianceProof] = useState(null);
  const [dataRetention, setDataRetention] = useState(null);
  const [automateBusiness, setAutomateBusiness] = useState(null);
  const router = useRouter();

  const handleUseCaseChange = (option) => {
    setUseCase((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('project-nameInput', projectName);
    localStorage.setItem('project-websiteInput', projectWebsite);
    localStorage.setItem('human-dataInput', humanData);
    localStorage.setItem('use-caseInput', useCase.join(', '));
    localStorage.setItem('data-sharingInput', dataSharing);
    localStorage.setItem('jurisdictionsInput', multiJurisdiction);
    localStorage.setItem('compliance-proofInput', complianceProof);
    localStorage.setItem('data-retentionInput', dataRetention);
    localStorage.setItem('automate-businessInput', automateBusiness);
    router.push('/claim-dsci'); // Update this with the actual next step
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      
      {/* Project Name Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Project Name</div>
        <div className="flex w-full items-center">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
          />
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup1(true)}>Help</button>
        </div>
      </div>
      
      {/* Project Website Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Project Website</div>
        <div className="flex w-full items-center">
          <input
            type="text"
            value={projectWebsite}
            onChange={(e) => setProjectWebsite(e.target.value)}
            className="p-2 flex-grow border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white text-black"
          />
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup2(true)}>Help</button>
        </div>
      </div>

      {/* Human Data Question */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Does your project utilize human health data?</div>
        <div className="flex w-full items-center justify-between">
          <label>
            <input
              type="radio"
              name="humanData"
              value="Yes"
              checked={humanData === true}
              onChange={() => setHumanData(true)}
              className="mr-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label>
            <input
              type="radio"
              name="humanData"
              value="No"
              checked={humanData === false}
              onChange={() => setHumanData(false)}
              className="mr-2"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup3(true)}>Help</button>
        </div>
      </div>

      {/* Use Case Question */}
<div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
  <div className="text-xl font-bold mb-2">What is the intended use case for the human health data?</div>
  <div className="flex w-full items-center justify-between">
    <div className="flex flex-col w-full">
      <label className="flex items-center">
        <input
          type="checkbox"
          value="Research"
          checked={useCase.includes('Research')}
          onChange={() => handleUseCaseChange('Research')}
          className="mr-2"
        />
        <span className="text-white">Research</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          value="Patient Care"
          checked={useCase.includes('Patient Care')}
          onChange={() => handleUseCaseChange('Patient Care')}
          className="mr-2"
        />
        <span className="text-white">Patient Care</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          value="Product Development"
          checked={useCase.includes('Product Development')}
          onChange={() => handleUseCaseChange('Product Development')}
          className="mr-2"
        />
        <span className="text-white">Product Development</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          value="Other"
          checked={useCase.includes('Other')}
          onChange={() => handleUseCaseChange('Other')}
          className="mr-2"
        />
        <span className="text-white">Other</span>
        <input
          type="text"
          className="ml-2 p-1 border border-gray-300 rounded-md shadow-sm"
          placeholder="Please specify"
          onChange={(e) => handleUseCaseChange(e.target.value)}
          disabled={!useCase.includes('Other')}
        />
      </label>
    </div>
    <button className="btn btn-secondary ml-2" onClick={() => setShowPopup4(true)}>Help</button>
  </div>
</div>

      {/* Data Sharing Question */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Will the human health data be shared with third parties?</div>
        <div className="flex w-full items-center justify-between">
          <label>
            <input
              type="radio"
              name="dataSharing"
              value="Yes"
              checked={dataSharing === true}
              onChange={() => setDataSharing(true)}
              className="mr-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label>
            <input
              type="radio"
              name="dataSharing"
              value="No"
              checked={dataSharing === false}
              onChange={() => setDataSharing(false)}
              className="mr-2"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup2(true)}>Help</button>
        </div>
      </div>

      {/* Multi-Jurisdictional Considerations */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Will your human health data project operate in multiple jurisdictions?</div>
        <div className="flex w-full items-center justify-between">
          <label>
            <input
              type="radio"
              name="multiJurisdiction"
              value="Yes"
              checked={multiJurisdiction === true}
              onChange={() => setMultiJurisdiction(true)}
              className="mr-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label>
            <input
              type="radio"
              name="multiJurisdiction"
              value="No"
              checked={multiJurisdiction === false}
              onChange={() => setMultiJurisdiction(false)}
              className="mr-2"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup2(true)}>Help</button>
        </div>
      </div>

      {/* Compliance Proof */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Do you have a mechanism for demonstrating proof of compliance with relevant regulations?</div>
        <div className="flex w-full items-center justify-between">
          <label className="flex items-center">
            <input
              type="radio"
              name="complianceProof"
              value="Yes"
              checked={complianceProof === true}
              onChange={() => setComplianceProof(true)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="complianceProof"
              value="No"
              checked={complianceProof === false}
              onChange={() => setComplianceProof(false)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup2(true)}>Help</button>
        </div>
      </div>

            {/* Data Retention */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Are you required to retain data for a period of time?</div>
        <div className="flex w-full items-center justify-between">
          <label className="flex items-center">
            <input
              type="radio"
              name="dataRetention"
              value="Yes"
              checked={dataRetention === true}
              onChange={() => setDataRetention(true)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="dataRetention"
              value="No"
              checked={dataRetention === false}
              onChange={() => setDataRetention(false)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup2(true)}>Help</button>
        </div>
      </div>

      {/* Automate Business Processes */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg">
        <div className="text-xl font-bold mb-2">Have you automated the standard business processes used in the human health data industry?</div>
        <div className="flex w-full items-center justify-between">
          <label className="flex items-center">
            <input
              type="radio"
              name="automateBusiness"
              value="Yes"
              checked={automateBusiness === true}
              onChange={() => setAutomateBusiness(true)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="automateBusiness"
              value="No"
              checked={automateBusiness === false}
              onChange={() => setAutomateBusiness(false)}
              className="mr-2 text-orange-500 bg-white"
            />
            <span className="text-white">No</span>
          </label>
          <button className="btn btn-secondary ml-2" onClick={() => setShowPopup9(true)}>Help</button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-cyan-700 text-white rounded-md shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Submit
      </button>

      {/* Popups */}
      {showPopup1 && <Popup1 onClose={() => setShowPopup1(false)} />}
      {showPopup2 && <Popup2 onClose={() => setShowPopup2(false)} />}
      {showPopup3 && <Popup3 onClose={() => setShowPopup3(false)} />}
      {showPopup4 && <Popup4 onClose={() => setShowPopup4(false)} />}
      {showPopup5 && <Popup5 onClose={() => setShowPopup5(false)} />}
      {showPopup6 && <Popup6 onClose={() => setShowPopup6(false)} />}
      {showPopup7 && <Popup7 onClose={() => setShowPopup7(false)} />}
      {showPopup8 && <Popup8 onClose={() => setShowPopup8(false)} />}
      {showPopup9 && <Popup9 onClose={() => setShowPopup9(false)} />}

    </div>
  );
};

export default QuestionnairePage;
