import { useEffect, useState } from "react";
import { Clubs } from "../components/Club";
import { Events } from "../components/Events";
import './Club.css'
const dummyClubs = [
  {
    name: "Tech Innovators",
    coverImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&q=80&w=800",
    category: "Technology",
    memberCount: 42,
    description: "A community for tech enthusiasts to share ideas, work on projects, and learn new skills.",
    tags: ["AI", "Web Dev", "Robotics", "Startups", "Hackathons"]
  },
  {
    name: "Art & Expression",
    coverImage: "https://cdn.britannica.com/78/43678-004-8F18BDDF/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
    category: "Arts",
    memberCount: 30,
    description: "Explore your creative side through painting, sketching, photography, and art exhibitions.",
    tags: ["Painting", "Photography", "Sketching", "Design"]
  },
  {
    name: "Code Warriors",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&q=80&w=800",
    category: "Programming",
    memberCount: 58,
    description: "Competitive programming club for students passionate about DSA and coding contests.",
    tags: ["DSA", "Codeforces", "LeetCode", "CodeChef", "CP"]
  },
  {
    name: "The Debaters",
    coverImage: "https://storage.caktusgroup.com/media/blog-images/debate.png",
    category: "Public Speaking",
    memberCount: 25,
    description: "Sharpen your speaking, critical thinking, and argumentation skills through weekly debates.",
    tags: ["Debate", "MUN", "Public Speaking", "Critical Thinking"]
  },
  {
    name: "Green Planet Society",
    coverImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&q=80&w=800",
    category: "Environment",
    memberCount: 35,
    description: "Join hands to protect the planet through cleanups, awareness drives, and eco-projects.",
    tags: ["Sustainability", "Eco-friendly", "Awareness", "Climate Action"]
  },
  {
    name: "Dance Beats",
    coverImage: "https://www.shutterstock.com/image-vector/nightclub-bar-counter-tables-dj-600nw-1856507887.jpg",
    category: "Cultural",
    memberCount: 40,
    description: "A lively group of dancers performing contemporary, hip-hop, classical, and fusion styles.",
    tags: ["Hip-hop", "Classical", "Fusion", "Performance", "Choreography"]
  }
];

const dummyEvents = [
  {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    name: "Spring Tech Conference 2025",
    date: "March 20 - March 22, 2025",
    description:
      "Join industry leaders and innovators for three days of talks, workshops, and networking. Learn the latest trends in technology and meet fellow enthusiasts.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    name: "Art Expo 2025",
    date: "April 15 - April 18, 2025",
    description:
      "Discover contemporary art pieces from emerging and established artists worldwide at this annual art exhibition.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
    name: "Global Coding Hackathon",
    date: "May 5 - May 7, 2025",
    description:
      "A 48-hour coding marathon where teams compete to solve real-world problems with innovative software solutions.",
  },
  {
    imageUrl: "https://www.charities.org/wp-content/uploads/2023/10/Environmental-Awareness-Month.png",
    name: "Environmental Awareness Week",
    date: "June 1 - June 7, 2025",
    description:
      "Workshops, clean-up drives, and seminars aimed at promoting sustainability and eco-friendly practices on campus.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    name: "Cultural Fest 2025",
    date: "July 10 - July 12, 2025",
    description:
      "A celebration of music, dance, and cultural performances from diverse communities within the college.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    name: "Tech Talks: AI & Robotics",
    date: "August 22, 2025",
    description:
      "Experts discuss the latest trends in artificial intelligence and robotics, with live demos and Q&A sessions.",
  }
];


export const ClubsPage = () => {

  const [search, setSearch] = useState("")
  return (
    <>
      <div id="top">
        <h1>College Clubs & Events</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, architecto!</p>
      </div>
      <div className="upcoming-events">

      </div>
      <div className="search">
        <div className="img">
          <img src="" alt="" />

        </div>
        <input type="text" placeholder="search for club" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="filter"></div>
      <div className="clubs">

        {dummyClubs
          .filter(club => club.name.toLowerCase().includes(search.toLowerCase()))
          .map((club, i) => (
            <Clubs key={i} club={club} />
          ))}



      </div>
      <div className="event-section">
        <h1 id="eventstext">Events</h1>
        <div className="events">
          {dummyEvents.map((event, index) => (
            <Events key={index} event={event} />
          ))}



        </div>
      </div>

    </>


  )
}