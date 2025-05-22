import React, { useState } from 'react';

const FormInputs = () => {
  const fields = [
    { label: 'Super Builtup area sqft *', id: 'super-builtup' },
    { label: 'Carpet Area sqft *', id: 'carpet-area' },
    { label: 'Maintenance (Monthly)', id: 'maintenance' },
    { label: 'Total Floors', id: 'total-floors' },
    { label: 'Floor No', id: 'floor-no' }
  ];

  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleBlur = (id) => {
    setTouched({ ...touched, [id]: true });
  };

  return (
    <>
      {fields.map(({ label, id }) => {
        const isError = touched[id] && !formData[id];
        return (
          <div key={id} className="mb-4">
            <label htmlFor={id} className="block text-sm mb-1">{label}</label>
            <input
              id={id}
              type="text"
              value={formData[id] || ''}
              onChange={(e) => handleChange(id, e.target.value)}
              onBlur={() => handleBlur(id)}
              className={`w-1/2 border rounded px-3 py-2 text-sm outline-none
                ${isError ? 'border-red-500' : 'border-gray-400 focus:border-blue-700 hover:border-blue-500'}
              `}
            />
            {isError && (
              <p className="text-red-700 text-xs mt-1">This field is required.</p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FormInputs;
