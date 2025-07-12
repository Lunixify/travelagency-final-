"use client";
import { useState } from "react";

const initialForm = {
  name: "",
  number: "",
  email: "",
  destination: "",
  package: "",
  dates: "",
  travelers: 1,
  preferences: ""
};

export default function BookingPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Only allow numbers in number field
    if (name === "number") {
      if (!/^\d*$/.test(value)) return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Validation
    if (!form.name || !form.number || !form.email || !form.destination || !form.package || !form.dates) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^\d{7,15}$/.test(form.number)) {
      setError("Please enter a valid phone number (7-15 digits).");
      return;
    }
    if (!/^([\w-.]+)@([\w-]+)\.([\w-.]{2,})$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Send data to API route
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit booking");
      setSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your booking. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Thank you for booking with Safarfix. We will contact you soon with the details.</p>
        <a href="/" className="px-6 py-3 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition">Back to Home</a>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Book Your Trip</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Fill out the form below to book your travel package. Our team will contact you soon!</p>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Phone Number *</label>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
              required
              inputMode="numeric"
              pattern="\d*"
              maxLength={15}
              minLength={7}
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-1">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
              required
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Destination *</label>
          <input
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            required
            placeholder="Enter destination"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Package *</label>
          <input
            name="package"
            value={form.package}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            required
            placeholder="Enter package name"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Travel Date *</label>
          <input
            name="dates"
            type="date"
            value={form.dates}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            required
            placeholder="Select travel date"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Number of Travelers</label>
          <input
            name="travelers"
            type="number"
            min={1}
            value={form.travelers}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            placeholder="Enter number of travelers"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Preferences</label>
          <textarea
            name="preferences"
            value={form.preferences}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-transparent placeholder-white text-black dark:text-white"
            rows={3}
            placeholder="Any special requests?"
          />
        </div>
        {error && <div className="text-red-600 font-medium">{error}</div>}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
