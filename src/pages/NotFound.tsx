export function NotFound() {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <main
      className="min-h-screen bg-[#060F20] flex items-center justify-center px-4"
      aria-labelledby="not-found-heading"
    >
      <div className="text-center max-w-md">
        {/* 404 code */}
        <div className="font-mono text-8xl font-bold text-primary-700/40 mb-6 select-none" aria-hidden="true">
          404
        </div>

        <h1
          id="not-found-heading"
          className="text-2xl font-bold text-white mb-3"
        >
          Page not found
        </h1>
        <p className="text-gray-400 text-base mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <button
          onClick={goHome}
          className="
            inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold
            bg-primary-700 hover:bg-primary-600 text-white rounded-md
            transition-colors duration-200
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400
            focus-visible:outline-offset-2
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          Return Home
        </button>
      </div>
    </main>
  );
}
