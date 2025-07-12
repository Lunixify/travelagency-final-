"use client";
import { useState } from "react";

// Simulated user data
const user = {
  name: "Amit Sharma",
  email: "amit@example.com",
  bookings: [
    {
      id: 1,
      destination: "Goa",
      package: "Goa Beach Getaway",
      dates: "10-13 Aug 2025",
      travelers: 2,
      status: "Upcoming"
    },
    {
      id: 2,
      destination: "Manali",
      package: "Manali Adventure",
      dates: "15-20 Jan 2025",
      travelers: 4,
      status: "Completed"
    }
  ],
  messages: [
    {
      id: 1,
      subject: "Booking Confirmation",
      content: "Your booking for Goa Beach Getaway is confirmed!",
      date: "2025-07-01"
    },
    {
      id: 2,
      subject: "Trip Feedback",
      content: "Thank you for traveling with Safarfix! Please share your feedback.",
      date: "2025-01-25"
    }
  ]
};

export default function DashboardPage() {
  const [tab, setTab] = useState("trips");

  // Simulate route protection (replace with real auth in production)
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Login Required</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Please log in to view your dashboard.</p>
        <a href="/login" className="px-6 py-3 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition">Login</a>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome, {user.name}</h1>
      <div className="flex gap-4 mb-8">
        <button onClick={() => setTab("trips")}
          className={`px-4 py-2 rounded font-medium border ${tab === "trips" ? "bg-primary text-white border-primary" : "bg-white dark:bg-gray-800 text-primary border-primary/30 hover:bg-primary/10"}`}>My Trips</button>
        <button onClick={() => setTab("messages")}
          className={`px-4 py-2 rounded font-medium border ${tab === "messages" ? "bg-primary text-white border-primary" : "bg-white dark:bg-gray-800 text-primary border-primary/30 hover:bg-primary/10"}`}>Messages</button>
        <button onClick={() => setTab("profile")}
          className={`px-4 py-2 rounded font-medium border ${tab === "profile" ? "bg-primary text-white border-primary" : "bg-white dark:bg-gray-800 text-primary border-primary/30 hover:bg-primary/10"}`}>Profile</button>
      </div>
      {tab === "trips" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.bookings.map((b) => (
              <div key={b.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="font-bold text-lg mb-1">{b.package}</div>
                <div className="text-gray-600 dark:text-gray-300 mb-1">{b.destination}</div>
                <div className="text-sm text-gray-500 mb-1">Dates: {b.dates}</div>
                <div className="text-sm text-gray-500 mb-1">Travelers: {b.travelers}</div>
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${b.status === "Upcoming" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === "messages" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <ul className="space-y-4">
            {user.messages.map((m) => (
              <li key={m.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="font-semibold">{m.subject}</div>
                <div className="text-sm text-gray-500 mb-1">{m.date}</div>
                <div className="text-gray-600 dark:text-gray-300">{m.content}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab === "profile" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div><span className="font-medium">Name:</span> {user.name}</div>
            <div><span className="font-medium">Email:</span> {user.email}</div>
            <div className="text-xs text-gray-400 mt-2">(Profile editing coming soon)</div>
          </div>
        </div>
      )}
    </section>
  );
}
