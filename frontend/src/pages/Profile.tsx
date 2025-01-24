import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

interface UserProfile {
  username: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:8000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserProfile(data);
      } catch (error) {
        message.error('Failed to load user profile');
        console.error('Error fetching user profile', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-12 rounded-lg shadow-2xl max-w-2xl w-full mb-8 transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Профиль пользователя{' '}
          <span role="img" aria-label="smile">
            👀
          </span>
        </h2>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-200 p-6 rounded-full mb-6 shadow-lg">
            <svg
              className="w-24 h-24 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
          <div className="w-full px-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={userProfile.username}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div className="w-full px-4 mt-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="text"
              value={userProfile.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          История заказов{' '}
          <span role="img" aria-label="package">
            📦
          </span>
        </h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <p className="text-gray-600">Здесь будет отображаться история ваших заказов.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
