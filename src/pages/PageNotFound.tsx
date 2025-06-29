const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
};

export default PageNotFound;
