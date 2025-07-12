export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Safarfix</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Safarfix is a trusted Indian travel agency dedicated to making your journeys memorable and hassle-free. Our mission is to deliver personalized, affordable, and culturally rich travel experiences for everyone.</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300">To be Indias most reliable travel partner, offering curated packages, custom trips, and 24/7 support for every traveler.</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
        >
          Back to Home
        </a>
      </div>

    </section>
  );
}
