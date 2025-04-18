export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 iamthighs. All rights reserved.</p>
                <p>Follow me on social media:</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                    <a href="#" className="text-blue-400 hover:text-blue-600">Instagram</a>
                </div>
            </div>
        </footer>
    );
}