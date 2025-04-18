export default function ImageCard({ imageUrl, title, description }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}