import PropTypes from "prop-types";

export default function ImageCard({ name, bio, avatar }) {
    console.log("Props passed to ImageCard:", { avatar, name, bio });
    const displayAvatar = avatar || 'src/assets/tys.png';  
    const displayName = name || 'Unknown Name';  
    const displayBio = bio || 'No bio available.';
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img
          src={displayAvatar}
          alt={displayName}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold mb-2">{displayName}</h2>
        <p className="text-gray-600">{displayBio}</p>
      </div>
    );
}

ImageCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
};