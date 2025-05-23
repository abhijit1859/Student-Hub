import { useState } from "react";
import { Profile } from "../components/UserProfile";
import './DiscoverStudent.css';

const data = [
  {
    name: "Abhijit Kumar",
    email: "abhijit@example.com",
    bio: "Aspiring full-stack developer and coding enthusiast.",
    year: "1st Year",
    role: "Student",
    major: "MNC",
    interests: ["Web Development", "DSA", "AI"],
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    bio: "Machine learning enthusiast and Python lover.",
    year: "2nd Year",
    role: "Student",
    major: "CSE",
    interests: ["Machine Learning", "Data Science", "Python"],
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Sohan Patel",
    email: "sohan.patel@example.com",
    bio: "Backend developer interested in scalable systems.",
    year: "3rd Year",
    role: "Student",
    major: "CSE",
    interests: ["Node.js", "Databases", "System Design"],
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg"
  },
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
];

export const UserPage = () => {
  const [search, setSearch] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const filteredData = data.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) &&
    (year === "" || student.year === year) &&
    (major === "" || student.major === major)
  );

  const handleReset = () => {
    setSearch("");
    setYear("");
    setMajor("");
  };

  return (
    <>
      <h1 id="discoverH1">Discover Students</h1>
      <div id="main">
        <div id="filter">
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Filter By Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          <select value={major} onChange={(e) => setMajor(e.target.value)}>
            <option value="">Filter By Major</option>
            <option value="CSE">CSE</option>
            <option value="MNC">MNC</option>
            <option value="ECE">ECE</option>
            <option value="MAE">MAE</option>
          </select>

          <button onClick={handleReset}>Reset Filter</button>
        </div>
      </div>

      <div className="grid-wrapper">
        <input
          className="profile-search"
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid-container">
          {filteredData.map((student, index) => (
            <Profile key={index} data={student} />
          ))}
        </div>
      </div>
    </>
  );
};
