import ImageCard from "./ImageCard.jsx";
import profiles from "../data/profiles.js";

export default function ImageCards() {
    return (
        <div className="min-h-screen bg-gray-100 p-10">
          <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <ImageCard
                key={profile.id}
                name={profile.name}
                bio={profile.bio}
                avatar={profile.avatar}
              />
            ))}
          </div>
        </div>
      );
}