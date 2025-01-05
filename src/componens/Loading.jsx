import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-5 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <h1 className="mb-2 text-5xl font-bold text-gray-800">Loading...</h1>
        <p className="mt-2 text-lg text-gray-600">Please wait while we load your content.</p>
        <p className="mt-4 text-gray-500">This may take a few moments, thank you for your patience.</p>
      </div>
    </div>
  );
}
