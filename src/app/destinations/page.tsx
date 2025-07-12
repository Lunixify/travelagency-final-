"use client";

import Image from "next/image";
import { destinations } from "../../data/destinations";
import { useState } from "react";

const categories = [
	{ label: "All", value: "all" },
	{ label: "Domestic", value: "domestic" },
	{ label: "Adventure", value: "adventure" },
	{ label: "Family", value: "family" },
	{ label: "Romantic", value: "romantic" },
];

export default function DestinationsPage() {
	const [filter, setFilter] = useState("all");
	const [search, setSearch] = useState("");

const filtered = destinations.filter((d) => {
	const matchesCategory =
		filter === "all"
			? true
			: filter === "domestic"
			? d.category === "domestic"
			: d.tags.includes(filter);
	const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
	return matchesCategory && matchesSearch;
});

	return (
		<section className="max-w-7xl mx-auto py-12 px-4">
			<h1 className="text-3xl md:text-4xl font-bold mb-6">
				Popular Destinations
			</h1>
			<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
				Explore our curated list of top domestic and international travel
				destinations. Filter by category and find your next adventure!
			</p>
			<div className="flex flex-wrap gap-3 mb-6">
				{categories.map((cat) => (
					<button
						key={cat.value}
						className={`px-4 py-2 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99] ${filter === cat.value ? 'ring-2 ring-[#56DFCF]/60' : ''}`}
						onClick={() => setFilter(cat.value)}
						aria-pressed={filter === cat.value}
					>
						{cat.label}
					</button>
				))}
			</div>
			<div className="mb-8">
				<input
					type="text"
					placeholder="Search destinations..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full max-w-md border rounded px-3 py-2"
					aria-label="Search destinations"
				/>
			</div>
			{filtered.length === 0 ? (
				<div className="text-center text-gray-400 py-12">
					No destinations found.
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{filtered.map((dest) => (
<div
  key={dest.id}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
>
							<Image
								src={dest.image}
								alt={dest.name}
								width={320}
								height={180}
								className="rounded mb-4 object-cover"
							/>
							<h3 className="font-semibold text-lg mb-2">{dest.name}</h3>
							<p className="text-gray-500 dark:text-gray-400 mb-2 text-center">
								{dest.description}
							</p>
							<div className="flex flex-wrap gap-2 mt-2 mb-4">
								{dest.tags.map((tag) => (
									<span
										key={tag}
										className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium"
									>
										{tag}
									</span>
								))}
							</div>
							<a
								href="#"
								className="mt-auto px-4 py-2 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
								aria-label={`View details for ${dest.name}`}
								tabIndex={0}
							>
								View Details
							</a>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
