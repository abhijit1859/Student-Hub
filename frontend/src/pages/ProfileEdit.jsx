import React, { useState } from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [year, setYear] = useState("");
    const [bio, setBio] = useState("");
    const [interest, setInterest] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        const intarr = interest.split(",");

        const data = {
            name,
            email,
            bio,
            year,
            role,
            interests: intarr
        };

        console.log("Form Data:", data);

        // Clear all fields after submit
        setName("");
        setEmail("");
        setRole("");
        setYear("");
        setBio("");
        setInterest("");
    };

    return (
        <div className="container">
            <form className="profile-form" onSubmit={formHandler}>
                <h2>Create Your Profile</h2>

                <label>Name:</label><br />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

                <label>Email:</label><br />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

                <label>Select Role:</label><br />
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)} >
                    <option value="">Select role</option>
                    <option value="CSE">CSE</option>
                    <option value="MNC">MNC</option>
                    <option value="ECE">ECE</option>
                    <option value="MAE">MAE</option>
                </select><br /><br />

                <label>Year:</label><br />
                <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">Select year</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select><br /><br />

                <label>Interests (comma separated):</label><br />
                <input type="text" name="interests" value={interest} onChange={(e) => setInterest(e.target.value)} /><br /><br />

                <label>Bio:</label><br />
                <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} ></textarea><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfileEdit;
