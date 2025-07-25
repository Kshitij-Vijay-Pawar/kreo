import React from 'react';

const Profile = () => {
  // Example user data (can be fetched from API or props)
  const user = {
    fullName: 'Om Pawar',
    username: 'ompawar_24',
    email: 'ompawar@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=68', // Replace with your user's actual image
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">
        <img
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow"
          src={user.profilePic}
          alt="Profile"
        />
        <h2 className="text-2xl font-bold mt-4">{user.fullName}</h2>
        <p className="text-gray-500">@{user.username}</p>
        <p className="text-sm text-gray-600 mt-2">{user.email}</p>

        <button className="mt-5 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
