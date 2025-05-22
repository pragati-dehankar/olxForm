import React, { useRef } from 'react';
import { FaCamera, FaPlus } from 'react-icons/fa';

const PhotoUploadSection = () => {
  const fileInputRef = useRef(null);

  const handleAddPhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // You can preview or store the uploaded file here
      console.log('Selected file:', files[0]);
    }
  };

  return (
    <section>
      <h2 className="font-bold text-xl text-black mb-3 select-none">UPLOAD UP TO 20 PHOTOS</h2>
      <div className="grid grid-cols-4 gap-2 max-w-[520px]">
        {/* Add Photo Button */}
        <button
          type="button"
          onClick={handleAddPhotoClick}
          className="flex flex-col items-center justify-center border border-black text-black text-[10px] font-normal w-20 h-20"
        >
          <FaCamera className="mb-1 text-lg" />
          Add Photo
        </button>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        {/* Placeholder Icons */}
        {Array.from({ length: 19 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-400 w-20 h-20 flex items-center justify-center relative"
          >
            <FaCamera className="text-gray-400 text-lg" />
            <FaPlus className="text-gray-400 text-xs absolute translate-x-3 -translate-y-3" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoUploadSection;
