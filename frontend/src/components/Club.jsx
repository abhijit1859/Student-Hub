import './Club.css'; // Make sure to import the CSS file

export const Clubs = ({ club }) => {
    return (
        <div className="club-card">
            <div className="club-header">
                <img
                    src={club.coverImage}
                    alt=""
                    className="club-image"
                />
                <span className="club-category">{club.category}</span>
            </div>

            <div className="club-body">
                <h3 className="club-name">{club.name}</h3>
                <p className="club-members">Members: {club.memberCount}</p>
                <p className="club-description">{club.description}</p>

                <div className="club-tags">
                    {club.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="club-tag">{tag}</span>
                    ))}
                    {club.tags.length > 3 && (
                        <span className="club-more-tags">+{club.tags.length - 3}</span>
                    )}
                </div>

                <div className="club-buttons">
                    <button className="view-btn">View Club</button>
                    <button className="join-btn">Join Club</button>
                </div>
            </div>
        </div>
    );
};
