export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-[#56DFCF] drop-shadow mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
      <a
        href="/"
        className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
      >
        Back to Home
      </a>
    </section>
  );
}
