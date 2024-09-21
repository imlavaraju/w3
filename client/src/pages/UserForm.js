import React, { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import "../App.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const uploadedImageUrls = [];

    for (let image of images) {
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const url = await getDownloadURL(snapshot.ref);
      uploadedImageUrls.push(url);
    }

    const userData = {
      name,
      socialHandle: handle,
      imagesUrls: uploadedImageUrls,
    };

    try {
      await axios.post("http://localhost:5000/api/users", userData);
      alert("Data submitted successfully!");
      setImages([]);
      setName("");
      setHandle("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    setUploading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Social Media Handle:</label>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Upload Images:</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleImageUpload}
          required
        />
      </div>
      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
