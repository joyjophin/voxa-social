
import React from 'react';

const Settings = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#121026] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjEwJSIgY3k9IjE1JSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjOEEyQkUyIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNBMUU5QyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iYiIgY3g9IjkwJSIgY3k9IjkwJSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBGMEZGIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzEyMTAyNiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHJlY3QgZmlsbD0idXJsKCNiKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-90"></div>
      <div className="relative flex h-full w-full z-10 justify-center items-center">
        <div className="max-w-4xl w-full p-6 backdrop-blur-sm bg-[#121026]/30 rounded-lg border border-purple-900/20 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Settings</h1>
          <div className="space-y-8">
            {/* Settings content would go here */}
            <p className="text-center text-gray-300">Settings page content will be added here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
