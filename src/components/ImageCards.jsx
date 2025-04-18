import ImageCard from "./ImageCard.jsx";

export default function ImageCards() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Image Cards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <ImageCard
                imageUrl="src/assets/tys.png"
                title="Sample Image"
                description="This is a sample description for the image card."
                />
                <ImageCard
                imageUrl="src/assets/tys.png"
                title="Sample Image"
                description="This is a sample description for the image card."
                />
                <ImageCard
                imageUrl="src/assets/tys.png"
                title="Sample Image"
                description="This is a sample description for the image card."
                />
                <ImageCard
                imageUrl="src/assets/tys.png"
                title="Sample Image"
                description="This is a sample description for the image card."
                />
            </div>
        </div>
    );
}