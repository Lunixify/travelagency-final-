export default function Loading() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4 animate-fadeIn">
      <div className="w-16 h-16 border-4 border-[#56DFCF] border-t-transparent rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#56DFCF]">Loading...</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">Please wait while we load your experience.</p>
    </section>
  );
}
