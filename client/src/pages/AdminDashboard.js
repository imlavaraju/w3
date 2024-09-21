import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"; // Import the CSS file

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://w3-peach.vercel.app/api/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div key={index + 1} className="user-container">
            <div className="user-details">
              <h2>
                {index + 1}.{user.name}
              </h2>
            </div>
            <div className="social-details">
              <p>{user.socialHandle}</p>
            </div>
            <div className="user-images">
              {user.imagesUrls && user.imagesUrls.length > 0 ? (
                user.imagesUrls.map((url, idx) => (
                  <img key={idx} src={url} alt="Uploaded" />
                ))
              ) : (
                <p>No images uploaded</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
