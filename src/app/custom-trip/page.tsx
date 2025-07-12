"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });
import { indianStatesCities } from "../../data/indianStatesCities";

const initialForm = {
  name: "",
  contact: "",
  destination: null,
  from: null,
  activities: "",
  accommodation: "",
  transport: "",
  budget: "",
  travelers: 1,
  preferences: ""
};

export default function CustomTripPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // For react-select
  const handleSelectChange = (selected: any, action: { name: string }) => {
    if (typeof action.name === "string") {
      setForm((prev) => ({ ...prev, [action.name]: selected ? selected : null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.contact || !form.destination || !form.from) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const res = await fetch("/api/custom-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          destination: form.destination?.value || "",
          from: form.from?.value || ""
        })
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your request. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Trip Request Submitted!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Thank you for sharing your preferences. Our team will contact you soon to help plan your custom trip.</p>
        <a
          href="/"
          className="px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
        >
          Back to Home
        </a>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 bg-white/80 dark:bg-[#18181b]/80 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-md">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-[#1e293b] dark:text-[#56DFCF] drop-shadow-lg">Custom Trip Planner</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">Build your own travel plan by choosing destinations, activities, and more. Let us create your dream trip!</p>
      <form className="space-y-7" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200" htmlFor="name">Name *</label>
            <input name="name" id="name" value={form.name} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" placeholder="Enter your name" required />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200" htmlFor="contact">Contact Info (Email/Phone) *</label>
            <input name="contact" id="contact" value={form.contact} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" placeholder="Enter your email or phone" required />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">From *</label>
            <div className="react-select-wrapper">
              <Select
                name="from"
                value={form.from}
                onChange={handleSelectChange}
                options={indianStatesCities.flatMap(stateObj => [
                  { label: stateObj.state, value: stateObj.state },
                  ...stateObj.cities.map(city => ({ label: `${city}, ${stateObj.state}`, value: `${city}, ${stateObj.state}` }))
                ])}
                classNamePrefix="react-select"
                placeholder="Select your starting location..."
                isSearchable
                required
                styles={{
                  control: (base, state) => ({
                    ...base,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    color: '#111',
                    borderColor: state.isFocused ? '#56DFCF' : '#d1d5db',
                    boxShadow: state.isFocused ? '0 0 0 2px #56DFCF55' : 'none',
                    borderWidth: 2,
                    borderRadius: 12,
                    minHeight: 48,
                    paddingLeft: 0,
                  }),
                  input: (base) => ({ ...base, color: '#111' }),
                  singleValue: (base) => ({ ...base, color: '#111' }),
                  placeholder: (base) => ({ ...base, color: '#888', fontWeight: 500 }),
                  option: (base, state) => ({ ...base, color: '#111', backgroundColor: state.isSelected ? '#56DFCF' : state.isFocused ? '#e0f7f4' : '#fff', fontWeight: state.isSelected ? 700 : 500 }),
                  menu: (base) => ({ ...base, zIndex: 9999, borderRadius: 12, overflow: 'hidden' }),
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Preferred Destination *</label>
            <div className="react-select-wrapper">
              <Select
                name="destination"
                value={form.destination}
                onChange={handleSelectChange}
                options={indianStatesCities.flatMap(stateObj => [
                  { label: stateObj.state, value: stateObj.state },
                  ...stateObj.cities.map(city => ({ label: `${city}, ${stateObj.state}`, value: `${city}, ${stateObj.state}` }))
                ])}
                classNamePrefix="react-select"
                placeholder="Select a destination..."
                isSearchable
                required
                styles={{
                  control: (base, state) => ({
                    ...base,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    color: '#111',
                    borderColor: state.isFocused ? '#56DFCF' : '#d1d5db',
                    boxShadow: state.isFocused ? '0 0 0 2px #56DFCF55' : 'none',
                    borderWidth: 2,
                    borderRadius: 12,
                    minHeight: 48,
                    paddingLeft: 0,
                  }),
                  input: (base) => ({ ...base, color: '#111' }),
                  singleValue: (base) => ({ ...base, color: '#111' }),
                  placeholder: (base) => ({ ...base, color: '#888', fontWeight: 500 }),
                  option: (base, state) => ({ ...base, color: '#111', backgroundColor: state.isSelected ? '#56DFCF' : state.isFocused ? '#e0f7f4' : '#fff', fontWeight: state.isSelected ? 700 : 500 }),
                  menu: (base) => ({ ...base, zIndex: 9999, borderRadius: 12, overflow: 'hidden' }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Activities</label>
            <input name="activities" value={form.activities} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" placeholder="e.g. Trekking, Beach, Sightseeing" />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Budget (INR)</label>
            <input name="budget" value={form.budget} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" placeholder="e.g. 25000" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Accommodation Type</label>
            <select name="accommodation" value={form.accommodation} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-gray-100 text-black dark:bg-[#23272f] dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" required style={{ color: form.accommodation ? '#111' : '#888', backgroundColor: '#f3f4f6' }}>
              <option value="" disabled hidden style={{ color: '#888', backgroundColor: '#f3f4f6' }}>Select accommodation type</option>
              <option value="budget" style={{ color: '#111', backgroundColor: '#fff' }}>Budget</option>
              <option value="standard" style={{ color: '#111', backgroundColor: '#fff' }}>Standard</option>
              <option value="luxury" style={{ color: '#111', backgroundColor: '#fff' }}>Luxury</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Transport</label>
            <select name="transport" value={form.transport} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-gray-100 text-black dark:bg-[#23272f] dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" required style={{ color: form.transport ? '#111' : '#888', backgroundColor: '#f3f4f6' }}>
              <option value="" disabled hidden style={{ color: '#888', backgroundColor: '#f3f4f6' }}>Select transport</option>
              <option value="flight" style={{ color: '#111', backgroundColor: '#fff' }}>Flight</option>
              <option value="train" style={{ color: '#111', backgroundColor: '#fff' }}>Train</option>
              <option value="car" style={{ color: '#111', backgroundColor: '#fff' }}>Car</option>
              <option value="bus" style={{ color: '#111', backgroundColor: '#fff' }}>Bus</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Number of Travelers</label>
            <input name="travelers" type="number" min={1} value={form.travelers} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" placeholder="Number of travelers" />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">Preferences</label>
            <textarea name="preferences" value={form.preferences} onChange={handleChange} className="w-full border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white/80 dark:bg-[#23272f] text-black dark:text-white placeholder-white focus:ring-2 focus:ring-[#56DFCF] focus:border-[#56DFCF] transition" rows={3} placeholder="Any special requests?" />
          </div>
        </div>
        {error && <div className="text-red-600 font-semibold text-center text-base drop-shadow">{error}</div>}
        <button
          type="submit"
          className="w-full px-8 py-4 rounded-xl font-bold text-lg transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-lg hover:shadow-[0_0_24px_6px_#56DFCF99] hover:-translate-y-1 hover:scale-[1.02] duration-200"
        >
          <span className="inline-flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1e293b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Submit Request
          </span>
        </button>
      </form>
    </section>
  );
}
