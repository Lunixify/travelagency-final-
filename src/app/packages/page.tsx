"use client";
import Image from "next/image";
import { packages } from "../../data/packages";
import { useState } from "react";







export default function PackagesPage() {


  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Travel Packages</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Browse all our travel packages with details, prices, and itineraries. Find the perfect trip for you and your loved ones.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <Image src={pkg.image} alt={pkg.name} width={320} height={180} className="rounded mb-4 object-cover" />
            <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{pkg.duration}</p>
            <span className="font-bold text-primary text-xl mb-2">₹{pkg.price.toLocaleString()}</span>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">{pkg.rating}</span>
            </div>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium text-primary">View Itinerary</summary>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                {pkg.itinerary.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium text-primary">Inclusions</summary>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                {pkg.inclusions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </details>
            <details className="mb-2">
              <summary className="cursor-pointer font-medium text-primary">Exclusions</summary>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2">
                {pkg.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
              </ul>
            </details>
            <a
              href="/booking"
              className="mt-auto px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
