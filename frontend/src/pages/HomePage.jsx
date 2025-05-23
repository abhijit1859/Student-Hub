import React, { useState } from 'react'
import { Profile } from "../components/UserProfile";
import HackathonCard from '../components/HighLight';
import "./HomePage.css"
 
const data = [
   {
    name: "Priya Mehta",
    email: "priya.mehta@example.com",
    bio: "Tech blogger and UI/UX designer.",
    year: "1st Year",
    role: "Student",
    major: "ECE",
    interests: ["UI/UX", "React", "Writing"],
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Amit Verma",
    email: "amit.verma@example.com",
    bio: "Competitive programmer and Java expert.",
    year: "4th Year",
    role: "Student",
    major: "CSE",
    interests: ["Java", "DSA", "Codeforces"],
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Sneha Roy",
    email: "sneha.roy@example.com",
    bio: "Blockchain believer and Web3 explorer.",
    year: "2nd Year",
    role: "Student",
    major: "MAE",
    interests: ["Blockchain", "Solidity", "Crypto"],
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    name: "Rahul Sen",
    email: "rahul.sen@example.com",
    bio: "Cloud computing and DevOps learner.",
    year: "3rd Year",
    role: "Student",
    major: "MAE",
    interests: ["AWS", "Docker", "Kubernetes"],
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Ananya Das",
    email: "ananya.das@example.com",
    bio: "iOS developer and Swift enthusiast.",
    year: "2nd Year",
    role: "Student",
    major: "ECE",
    interests: ["iOS", "Swift", "App Design"],
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    name: "Vikram Joshi",
    email: "vikram.joshi@example.com",
    bio: "AI researcher and math geek.",
    year: "4th Year",
    role: "Student",
    major: "MNC",
    interests: ["AI", "Math", "Research"],
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg"
  }
]

const studyGroups = [
  {
    name: "DSA Wizards",
    desc: "A group focused on mastering Data Structures and Algorithms through regular practice and contests.",
    members: 24
  },
  {
    name: "AI Explorers",
    desc: "Explore the latest in Artificial Intelligence and collaborate on ML projects and research papers.",
    members: 15
  },
  {
    name: "Web Dev Collective",
    desc: "Join to build full-stack projects, discuss modern frameworks, and sharpen your web development skills.",
    members: 30
  }
];


const HomePage = () => {
    const [search, setSearch] = useState("");
    return (
        <>
           <HackathonCard/>
           <div className="wrapper">
             <input
             id='search'
                className="profile-search"
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="users">

                {data.map((item, index) => (
                    <Profile key={index} data={item} />
                ))}
            </div>
           </div>
           

            
        </>

    );
};

export default HomePage