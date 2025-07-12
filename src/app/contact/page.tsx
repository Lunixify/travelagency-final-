"use client";
import { useState } from "react";

// SVG icons with Safarfix accent color and glow
const iconStyle = {
  color: '#56DFCF',
  filter: 'drop-shadow(0 0 8px #56DFCF99)',
  verticalAlign: 'middle',
};
const LocationIcon = () => (
  <svg style={iconStyle} className="inline-block mr-2 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-7.163-8-10.5A8 8 0 0112 3a8 8 0 018 7.5C20 13.837 16.418 21 12 21z" /><circle cx="12" cy="10" r="3" /></svg>
);
const EmailIcon = () => (
  <svg style={iconStyle} className="inline-block mr-1 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" /></svg>
);
const PhoneIcon = () => (
  <svg style={iconStyle} className="inline-block mr-1 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2z" /></svg>
);

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your message. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Your message has been sent. We will get back to you soon.</p>
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
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Have questions or need help? Reach out to us via the form below or use our contact details.</p>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2 placeholder-white" placeholder="Enter your name" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2 placeholder-white" placeholder="Enter your email" required />
        </div>
        <div>
          <label className="block font-medium mb-1">Message *</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 placeholder-white" rows={4} placeholder="Type your message..." required />
        </div>
        {error && <div className="text-red-600 font-medium">{error}</div>}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded font-semibold transition text-center bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] focus:outline-none focus:ring-2 focus:ring-[#56DFCF]/60 shadow-none hover:shadow-[0_0_16px_4px_#56DFCF99]"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
        <div className="text-gray-600 dark:text-gray-300 mb-2">
          <LocationIcon />Abhishek tours n travels Railway Road, opp. Railway Station, Shikhu Pur, Devpura, Haridwar, Uttarakhand 249401
        </div>
        <div className="text-gray-600 dark:text-gray-300 mb-2">
          <EmailIcon />
          <a
            href="https://mail.google.com/mail/?view=cm&to=safarfixtravel@gmail.com&su=Enquiry%20from%20Safarfix%20Website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
            aria-label="Send email to safarfixtravel@gmail.com via Gmail"
          >safarfixtravel@gmail.com</a>
          <span className="inline-block w-6" />
          <PhoneIcon />
          <a
            href="tel:+918979422404"
            className="text-primary underline hover:text-primary/80"
            aria-label="Call +91 8979422404"
          >+91 8979422404</a>
        </div>
        <div className="mt-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Abhishek%20tours%20n%20travels%20Railway%20Road%2C%20opp.%20Railway%20Station%2C%20Shikhu%20Pur%2C%20Devpura%2C%20Haridwar%2C%20Uttarakhand%20249401&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
