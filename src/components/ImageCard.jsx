import PropTypes from "prop-types";
import { useState } from "react";

export default function ImageCard({ name, bio, avatar }) {
  console.log("Props passed to ImageCard:", { avatar, name, bio });
  const displayAvatar = avatar || 'src/assets/tys.png';  
  const displayName = name || 'Unknown Name';  
  const displayBio = bio || 'No bio available.';
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img
        src={displayAvatar}
        alt={displayName}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">{displayName}</h2>
      <p className="text-gray-600">{displayBio}</p>
      <button
        onClick={toggleLike}
        className="mt-4 px-4 py-2 rounded"
      >
        {liked ? (
          <span role="img" aria-label="Unlike" className="text-red-500">❤️</span>
        ) : (
          <span role="img" aria-label="Like" className="text-blue-600">🤍</span>
        )}
      </button>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <ul className="text-left mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700 mb-1">
              - {comment}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Add a comment..."
            className="border rounded px-3 py-2 flex-grow border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
          />
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
};