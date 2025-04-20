import { useState } from 'react';

// Counter component
export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
            <h1 className="text-3xl font-bold mb-4">Counter</h1>
            <p className="text-xl mb-4">Current Count: {count}</p>
            <div className="flex space-x-4">
                <button
                    onClick={decrement}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    aria-label="Decrement"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </button>
                <button
                    onClick={increment}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    aria-label="Increment"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <button
                    onClick={reset}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    aria-label="Reset"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}