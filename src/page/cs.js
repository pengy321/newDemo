import React, { useState } from 'react';
import './cs.css';

const ImageUploader = () => {
    // 定义一个null
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    console.log(event);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataURL = e.target.result;
      setSelectedImage(imageDataURL);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" className="selected-image" />}
    </div>
  );
};

export default ImageUploader;
