import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section with Waterfall Background and fallback if image is missing */}
      <section
        className="w-full relative py-16 md:py-24 flex flex-col items-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/waterfall.jpg'), linear-gradient(to bottom right, #56DFCFcc, #60a5fa99)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-200 dark:from-primary/80 dark:to-gray-900 opacity-80 pointer-events-none" />
        <div className="max-w-3xl mx-auto z-10 relative">
          <div className="flex flex-col items-center gap-4">
            {/* Only show logo if /logo.png exists, otherwise nothing will show */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-lg">
              Safarfix
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mt-2">
              Aapka Plan Hamari Setting!
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your trusted Indian travel partner for curated packages, custom trips,
              and unforgettable journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <a
                href="/booking"
                className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
              >
                Book Now
              </a>
              <a
                href="/custom-trip"
                className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
              >
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why Choose Safarfix?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          We make your travel dreams come true with personalized service, expert
          planning, and unbeatable deals. Whether you want adventure, family fun,
          or a romantic escape, Safarfix has you covered!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-64">
            <h3 className="font-semibold text-lg mb-2">Curated Packages</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Handpicked tours for every taste and budget.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-64">
            <h3 className="font-semibold text-lg mb-2">Custom Trip Planner</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Build your own itinerary with expert help.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-64">
            <h3 className="font-semibold text-lg mb-2">Trusted Support</h3>
            <p className="text-gray-500 dark:text-gray-400">
              24/7 assistance before, during, and after your trip.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Packages Section (Placeholder) */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Featured Travel Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example featured package cards - replace with dynamic data later */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/featured1.jpg"
              alt="Goa Beach Getaway"
              width={320}
              height={180}
              className="rounded mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">Goa Beach Getaway</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              3 Nights / 4 Days
            </p>
            <span className="font-bold text-primary text-xl mb-2">₹12,999</span>
            <a
              href="/packages"
              className="mt-auto px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
            >
              View Details
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/featured2.jpg"
              alt="Manali Adventure"
              width={320}
              height={180}
              className="rounded mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">Manali Adventure</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              5 Nights / 6 Days
            </p>
            <span className="font-bold text-primary text-xl mb-2">₹18,499</span>
            <a
              href="/packages"
              className="mt-auto px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
            >
              View Details
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/featured3.jpg"
              alt="Kerala Backwaters"
              width={320}
              height={180}
              className="rounded mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">Kerala Backwaters</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              4 Nights / 5 Days
            </p>
            <span className="font-bold text-primary text-xl mb-2">₹15,999</span>
            <a
              href="/packages"
              className="mt-auto px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
            >
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          What Our Travelers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/user1.jpg"
              alt="Traveler 1"
              width={64}
              height={64}
              className="rounded-full mb-2"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              “Safarfix made our honeymoon trip to Kerala absolutely perfect. Highly
              recommended!”
            </p>
            <span className="font-semibold text-primary">Priya & Rahul</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/user2.jpg"
              alt="Traveler 2"
              width={64}
              height={64}
              className="rounded-full mb-2"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              “Best travel agency for family vacations. Great support and amazing
              deals!”
            </p>
            <span className="font-semibold text-primary">The Sharmas</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/user3.jpg"
              alt="Traveler 3"
              width={64}
              height={64}
              className="rounded-full mb-2"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              “Loved the custom trip planner. Everything was tailored to our
              needs!”
            </p>
            <span className="font-semibold text-primary">Amit S.</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Explore?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Book your next adventure or plan a custom trip with Safarfix today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/booking"
            className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
          >
            Book Now
          </a>
          <a
            href="/custom-trip"
            className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
          >
            Plan Your Trip
          </a>
        </div>
      </section>
    </>
  );
}
