import { Spinner } from '@material-tailwind/react';
import React from 'react';

export default function FullLoader() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-200">
            <div className="flex flex-col items-center space-y-1 text-sm text-gray-700 bg-white p-4 rounded-lg">
                <Spinner className="h-8 w-8" />
                <div>Loading...</div>
            </div>
        </div>
    );
}
