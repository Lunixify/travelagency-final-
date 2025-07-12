export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-12 border-t border-[#56DFCF] shadow-[0_0_24px_0_#56DFCF33]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-2xl italic text-[#56DFCF] mb-1">Safarfix</div>
          <div className="text-gray-400 text-sm mb-2">Aapka Plan Hamari Setting!</div>
          <div className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Safarfix. All rights reserved.</div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a href="/about" className="hover:text-[#56DFCF] transition">About</a>
          <a href="/destinations" className="hover:text-[#56DFCF] transition">Destinations</a>
          <a href="/packages" className="hover:text-[#56DFCF] transition">Packages</a>
          <a href="/custom-trip" className="hover:text-[#56DFCF] transition">Custom Trip</a>
          <a href="/contact" className="hover:text-[#56DFCF] transition">Contact</a>
          <a href="/faqs" className="hover:text-[#56DFCF] transition">FAQs</a>
        </div>
        <div className="flex gap-4 items-center mt-2 md:mt-0">
          {/* Social Icons */}
          <a href="https://instagram.com/safarfixtravel" target="_blank" rel="noopener" aria-label="Instagram" className="hover:scale-110 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#56DFCF" className="drop-shadow-[0_0_8px_#56DFCF99]">
              <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.2" fill="#56DFCF"/>
            </svg>
          </a>
          <a href="mailto:safarfixtravel@gmail.com" aria-label="Email" className="hover:scale-110 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#56DFCF" className="drop-shadow-[0_0_8px_#56DFCF99]">
              <rect x="3" y="5" width="18" height="14" rx="3" strokeWidth="2"/>
              <path d="M3 7l9 6 9-6" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        Trusted by 2000+ travelers &bull; 24/7 Support &bull; Verified by Ministry of Tourism
      </div>
    </footer>
  );
}
