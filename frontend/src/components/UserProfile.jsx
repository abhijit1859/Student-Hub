import './UserProfile.css'

export const Profile = ({data}) => {
    

    return (
        <>
            <div className="box">
                <div className="upper"></div>

                <div className="info">
                    <img
                        src={data.profilePic}
                        alt="profile"
                        className="profile-img"
                    />
                    <h1 className="name">{data.name}</h1>
                    <p className="email">{data.email}</p>
                    <p className="bio">{data.bio}</p>
                    <p className="year-role">{`${data.year} • ${data.role}`}</p>
                    <p className="interests">
                        Interests: {data.interests.join(", ")}
                    </p>
                </div>

                <div className="btn">
                    <button>Connect</button>
                </div>
            </div>
        </>
    )
}