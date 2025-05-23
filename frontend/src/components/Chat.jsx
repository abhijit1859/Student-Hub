import React, { useState } from 'react';
import './Chat.css';

const ChatApp = () => {
  const [activeTab, setActiveTab] = useState('study-groups');

  const students = [
    { name: 'John Smith', status: 'online', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Emma Watson', status: 'online', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Michael Chen', status: 'idle', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Sophia Rodriguez', status: 'offline', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'James Wilson', status: 'online', img: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Olivia Parker', status: 'online', img: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Daniel Taylor', status: 'idle', img: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Ava Martinez', status: 'offline', img: 'https://randomuser.me/api/portraits/women/8.jpg' },
  ];

  return (
    <div className="chat-layout">
      <div className="chat-main">
        <h2 className="chat-title">Student Chat</h2>
        <div className="tabs">
          <button
            className={activeTab === 'general' ? 'active' : ''}
            onClick={() => setActiveTab('general')}
          >💬 General Chat</button>
          <button
            className={activeTab === 'study-groups' ? 'active' : ''}
            onClick={() => setActiveTab('study-groups')}
          >👥 Study Groups</button>
        </div>

        <div className="chat-content">
          {activeTab === 'study-groups' ? (
            <div className="no-group">
              <h3>No Study Groups Yet</h3>
              <p>Create or join a study group to start chatting with your classmates.</p>
              <button className="create-btn">Create Study Group</button>
            </div>
          ) : (
            <div style={{ padding: '20px' }}>General chat coming soon!</div>
          )}
        </div>
      </div>

      <div className="user-list">
        <h4>👥 Online Students</h4>
        {students.map((student, index) => (
          <div key={index} className="user">
            <img src={student.img} alt={student.name} />
            <div>
              <div className="name">{student.name}</div>
              <div className={`status ${student.status}`}>
                {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
