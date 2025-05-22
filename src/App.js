import React, { useState } from 'react';
import { FaCamera, FaPlus } from 'react-icons/fa';
import PhotoUploadSection from './PhotoUploadSection';
import FormInputs from './FormInputs'

const PostAdForm = () => {
  const [name, setName] = useState(' ');
  const [phone, setPhone] = useState('');
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  

  

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center border-b border-gray-600 px-4 h-12">
        <button aria-label="Go back" className="text-gray-700 hover:text-gray-900 focus:outline-none">
          <i className="fas fa-arrow-left"></i>
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <h1 className="text-center font-bold  text-2xl">POST YOUR AD</h1>

        {/* CATEGORY */}
        <form className="border border-gray-300 rounded-md p-4 space-y-4">
       
        <section className=" p-1">
          <div>
            <h2 className="font-bold text-xl">SELECTED CATEGORY</h2>
            <p className="text-xs text-gray-500 my-6">
              Properties / For Sale: Houses &amp; Apartments
              <a href="#" className="text-blue-700 font-semibold underline ml-2">Change</a>
            </p>
          </div>
          <hr className="my-4 border-gray-400" />
</section>

<section className=' p-4 space-y-4'>
          <h2 className="font-bold text-xl pb-2 mb-2">INCLUDE SOME DETAILS</h2>
          {[{ label: 'Type *', values: ["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"] },
            { label: 'BHK', values: ["1", "2", "3", "4", "4+"] },
            { label: 'Bathrooms', values: ["1", "2", "3", "4", "4+"] }
          ].map(({ label, values }) => (
            <div key={label}>
              <label className="block text-sm  ">{label}</label>
              <div className="flex flex-wrap gap-2">
                {values.map(val => (
                  <button key={val} className="border border-gray-300 rounded px-5 py-1 text-sm hover:bg-blue-100">{val}</button>
                ))}
              </div>
            </div>
          ))}
        

        {/* PROPERTY DETAILS */}
        
          {[{ label: 'Furnishing', values: ["Furnished", "Semi-Furnished", "Unfurnished"] },
            { label: 'Project Status', values: ["New Launch", "Ready to Move", "Under Construction"] },
            { label: 'Listed by', values: ["Builder", "Dealer", "Owner"] }
          ].map(({ label, values }) => (
            <div key={label}>
              <label className="block text-sm">{label}</label>
              <div className="flex flex-wrap gap-2">
                {values.map(val => (
                  <button key={val} className="text-sm border border-gray-300 rounded px-5 py-1 hover:bg-blue-100">{val}</button>
                ))}
              </div>
            </div>
          ))}

          <FormInputs/>

          <div>
            <label className="block text-sm mb-2">Car Parking</label>
            <div className="flex gap-2">
              {["0", "1", "2", "3", "3+"].map(p => (
                <button key={p} className="w-10 h-8 border border-gray-300 rounded text-center hover:bg-blue-100">{p}</button>
              ))}
            </div>
          </div>

          <div>
  <label htmlFor="facing" className="block text-sm mb-1">Facing</label>
  <select id="facing" className="w-1/2 border border-gray-400 rounded px-3 py-2 text-sm">
    <option value="">Select</option>
    <option value="east">East</option>
    <option value="west">West</option>
    <option value="north">North</option>
    <option value="south">South</option>
    <option value="northeast">North-East</option>
    <option value="northwest">North-West</option>
    <option value="southeast">South-East</option>
    <option value="southwest">South-West</option>
  </select>
</div>

          <div>
            <label htmlFor="project-name" className="block text-sm mb-1">Project Name</label>
            <textarea id="project-name" rows="1" maxLength="70" className="w-1/2 border border-gray-400 rounded px-3 py-2 text-sm resize-none"></textarea>
            <div className="text-xs text-gray-400 text-right mt-1">0 / 70</div>
          </div>
        
        {/* AD TITLE & DESCRIPTION */}
        
          <div>
            <label className="block text-sm mb-1">Ad title *</label>
            <input maxLength="70" className="w-1/2 border border-gray-400 rounded-md px-3 py-2 text-sm" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Mention key features (e.g. brand, model, type)</span>
              <span>0 / 70</span>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Description *</label>
            <textarea rows="4" maxLength="4096" className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"></textarea>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Include condition, features, reason for selling</span>
              <span>0 / 4096</span>
            </div>
          </div>
          </section>


        {/* PRICE */}
        <hr className="my-4 border-gray-500" />
          <h2 className="font-bold text-xl">SET A PRICE</h2>
          <div>
            <label className="block text-sm mb-1">Price *</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64">
              <span className="text-gray-700 mr-2">₹</span>
              <input type="number" className="w-full border-none focus:ring-0 focus:outline-none text-sm" />
            </div>
          </div>
          <hr className="my-4 border-gray-500" />

        {/* PHOTO UPLOAD */}
        <section>
          <PhotoUploadSection/>
        </section>
        <hr className="my-4 border-gray-500" />
        {/* CONFIRM LOCATION */}
        <section className="px-6 py-6">
  <h2 className="text-black text-lg font-bold mb-4">CONFIRM YOUR LOCATION</h2>

  <div className="flex border-b border-gray-300 mb-6">
    <button type="button" className="text-black text-xs font-semibold border-b-4 border-blue-800 pb-2 mr-8">LIST</button>
    <button type="button" className="text-black text-xs opacity-80 pb-2">CURRENT LOCATION</button>
  </div>

  <form>
    <label htmlFor="state" className="block text-xs text-black font-normal mb-1">State *</label>
    <select
      id="state"
      name="state"
      className="w-80 max-w-full border border-gray-300 rounded px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
      defaultValue=""
    >
      <option value="" >Select</option>
      {indianStates.map((state, idx) => (
        <option key={idx} value={state}>{state}</option>
      ))}
    </select>
    <p className="text-xs text-red-600 mt-1">This field is mandatory</p>
  </form>
</section>

        <hr className="my-4 border-gray-500" />

        {/* REVIEW YOUR DETAILS */}
        <section className=" p-4 space-y-4 bg-white">
          <h2 className="font-bold text-lg text-gray-900">REVIEW YOUR DETAILS</h2>
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              {/* <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Feasydrawingguides.com%2Fhow-to-draw-tanjiro-kamado-from-demon-slayer%2F&psig=AOvVaw2y6PjnoSZaQI2xtne77Gtu&ust=1747978035902000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDm0N-rto0DFQAAAAAdAAAAABAE"
                alt="pic"
                className="w-20 h-20 object-cover rounded"
              /> */}
              <button
                aria-label="Change profile picture"
                className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 text-gray-600 hover:text-gray-900"
              >
                <i className="fas fa-camera"></i>
              </button>
            </div>
            <div className="flex-1">
              <label htmlFor="name" className="block text-xs font-normal text-gray-700 mb-1">Name</label>
              <input
                id="name"
                type="text"
                maxLength="30"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-400 text-right mt-1">{name.length} / 30</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Let's verify your account</h3>
            <p className="text-xs text-gray-900 mb-4 max-w-xl">
              We will send you a confirmation code by sms on the next step.
            </p>
            <label htmlFor="phone" className="block text-xs text-gray-700 mb-1">Mobile Phone Number *</label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 |"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full max-w-md border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <hr className="my-4 border-gray-500" />
          <section >
            <button type='submit'  className=' mt-5 w-20 h-10 border border-gray-300 bg-gray-300 text-white rounded-sm'>Post now</button>
          </section>
        </section>
        </form>
      </main>
    </div>
  );
};

export default PostAdForm;