import React from "react";

function App() {
  return (
    <div className="bg-[#fbfbfb] min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="w-full bg-white border-b border-[#e5e5e5] shadow-sm sticky top-0 z-30">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://ext.same-assets.com/1106046646/1881706325.png" alt="COLORCL Logo" className="h-8 w-auto" />
            <span className="font-bold tracking-tight text-xl text-[#1b1c21] hidden sm:inline">SIESTA</span>
          </div>
          {/* Nav links */}
          <ul className="hidden md:flex space-x-8 text-[15px] font-medium text-[#1b1c21]">
            <li><a href="#" className="hover:text-[#62d58f] transition">Event</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">Brand</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">Best</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">Clear Lenses</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">Color Contacts</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">Lens Accessories</a></li>
            <li><a href="#" className="hover:text-[#62d58f] transition">FAQ</a></li>
          </ul>
          {/* Icons section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="22" height="22" fill="none" stroke="#1b1c21" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            {/* Account */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="22" height="22" fill="none" stroke="#1b1c21" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"/>
                <path d="M16 20v-2a4 4 0 0 0-8 0v2"/>
              </svg>
            </button>
            {/* Cart */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="22" height="22" fill="none" stroke="#1b1c21" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="20" r="1"/>
                <circle cx="20" cy="20" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7H6"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Hero / Banner Section */}
      <section className="w-full bg-black relative overflow-hidden">
        {/* Main hero image (sample video placeholder for now) */}
        <div className="aspect-[2.2/1] w-full flex items-center justify-center bg-[#e4e4e4]">
          <img
            src="https://ext.same-assets.com/1106046646/4087315943.png"
            alt="Hero Visual"
            className="object-cover w-full h-full"
          />
          {/* Overlay text on hero */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-lg drop-shadow-xl">
            <h1 className="font-bold text-4xl md:text-5xl mb-4">SIESTA</h1>
            <p className="text-lg font-light mb-6 hidden md:block">Coloring Your Life. New products released continually. Affordable price and high quality contacts!</p>
            <button className="px-6 py-3 text-black bg-[#62d58f] font-bold rounded-full shadow-md transition hover:bg-[#47b67a]">VIEW COLLECTIONS</button>
          </div>
        </div>

        {/* Horizontal category icon row */}
        <div className="w-full px-4 md:px-0 bg-white z-10 relative">
          <div className="max-w-4xl mx-auto flex flex-nowrap overflow-x-auto gap-4 md:gap-8 py-4 justify-center">
            {/* Category icon buttons */}
            {[
              { label: "Bliss", img: "https://ext.same-assets.com/1106046646/170511303.png" },
              { label: "Romance", img: "https://ext.same-assets.com/1106046646/1493563406.png" },
              { label: "Crystal", img: "https://ext.same-assets.com/1106046646/1973108637.png" },
              { label: "Iris", img: "https://ext.same-assets.com/1106046646/2181156243.png" },
              { label: "Halo", img: "https://ext.same-assets.com/1106046646/2893548898.png" },
              { label: "Sahara", img: "https://ext.same-assets.com/1106046646/3457554628.png" },
              { label: "Master Piece", img: "https://ext.same-assets.com/1106046646/3374009033.png" },
              { label: "Lychee", img: "https://ext.same-assets.com/1106046646/1360648198.png" },
              { label: "Persona", img: "https://ext.same-assets.com/1106046646/577148014.png" },
              { label: "Clear", img: "https://ext.same-assets.com/1106046646/2343199044.png" },
            ].map(({ label, img }) => (
              <button key={label} className="flex flex-col items-center text-[#1b1c21] font-medium hover:text-[#62d58f] transition">
                <span className="w-12 h-12 bg-[#fbfbfb] border border-[#e5e5e5] rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <img src={img} alt={label} className="w-7 h-7 object-contain" />
                </span>
                <span className="text-xs md:text-sm text-center whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* RESTOCKED - SIESTA WEEKLY CLEAR callout section */}
      <section className="w-full flex flex-col items-center bg-white py-10 border-b border-gray-100">
        <div className="w-full max-w-3xl flex flex-col gap-6 items-center">
          {/* Banner image placeholder */}
          <div className="w-full rounded-lg overflow-hidden mb-2 relative aspect-[3.7/1] bg-[#ececec] flex items-center justify-center">
            {/* This would be: https://ext.same-assets.com/1106046646/269966944.png if loaded */}
            <span className="text-gray-400 text-xl">RESTOCKED BANNER</span>
          </div>
          <h2 className="font-bold text-xl md:text-2xl text-[#1b1c21]">SIESTA WEEKLY CLEAR</h2>
          <p className="text-center text-[#806a71] mb-3">Weekly Clear has been restocked. Purchase 2+ and get a 15% discount, Purchase 4+ and get a 30% discount!</p>
          <button className="px-6 py-2 bg-[#62d58f] text-white rounded-full font-semibold text-sm uppercase tracking-wide shadow-sm hover:bg-[#47b67a] transition">Go To Shop</button>
        </div>
      </section>
      {/* Back In Stock horizontal banner */}
      <section className="w-full bg-[#1b1c21] py-3 flex items-center justify-center text-white text-lg font-bold tracking-wider relative mb-1 overflow-hidden">
        {/* Banner placeholder */}
        <span className="w-full text-center">BACK IN STOCK</span>
      </section>
      {/* [1+1] Set Discount Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-8 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#1b1c21]">[1+1] Set Discount</h3>
          <a href="#" className="text-[#62d58f] text-sm hover:underline">More</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Example product cards - use placeholders for now */}
          {[1,2].map((i) => (
            <div key={i} className="flex bg-white rounded-xl shadow p-4 gap-4 items-center">
              <div className="w-24 h-24 flex-shrink-0 bg-[#ececec] rounded-md flex items-center justify-center">
                <span className="text-gray-400">PRODUCT IMG</span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#62d58f]/20 text-[#62d58f] px-2 py-0.5 rounded-full text-xs font-semibold">Sale</span>
                  <span className="bg-[#f6c475]/20 text-[#806a71] px-2 py-0.5 rounded-full text-xs font-semibold">[1+1]</span>
                </div>
                <div className="font-semibold text-base truncate">SIESTA Blossom {i === 1 ? "1-Month" : "1-Day"}</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{i === 1 ? "$14.00" : "$18.00"}</span>
                  <span className="line-through text-[#999ca1]">$22.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* New Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#1b1c21]">New</h3>
          <a href="#" className="text-[#62d58f] text-sm hover:underline">More</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Example product cards for New section, use placeholders */}
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 gap-2">
              <div className="w-20 h-20 bg-[#ececec] rounded-md flex items-center justify-center mb-1">
                <span className="text-gray-400">IMG</span>
              </div>
              <span className="bg-[#62d58f]/20 text-[#62d58f] px-2 py-0.5 rounded-full text-xs font-semibold">New</span>
              <div className="font-semibold text-[15px] text-[#1b1c21] text-center">Blossom {['Beige','Green','Pink','Cherry'][i-1]}</div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">$12.60</span>
                <span className="line-through text-[#999ca1]">$14.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Best Section (Product Grid) */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-3 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#1b1c21]">Best</h3>
          <a href="#" className="text-[#62d58f] text-sm hover:underline">More</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Example best-seller product cards — using placeholders for now */}
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 gap-2">
              <div className="w-20 h-20 bg-[#ececec] rounded-md flex items-center justify-center mb-1">
                <span className="text-gray-400">IMG</span>
              </div>
              {/* Ratings placeholder (e.g., 4-5 stars) */}
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} width="14" height="14" fill={star <= 4 ? '#FAC917' : '#E5E5E5'} viewBox="0 0 20 20"><polygon points="10,1 12,7 19,7 13.5,11 15.5,18 10,14 4.5,18 6.5,11 1,7 8,7"/></svg>
                ))}
              </div>
              <div className="font-semibold text-[15px] text-[#1b1c21] text-center">Best Seller {i}</div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">$20.00</span>
                {/* Optionally: <span className="line-through text-[#999ca1]">$25.00</span> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Color/Category Filter Slider Row */}
      <section className="w-full bg-[#fbfbfb] py-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-nowrap overflow-x-auto gap-4 md:gap-8 px-3">
          {/* Category filter buttons */}
          {['Brown','Beige','Green','Blue','Gray','Violet','Pink','Gold','Hazel','Orange','Red','Cream'].map((color, idx) => (
            <button
              key={color}
              className="flex-shrink-0 px-5 py-2 rounded-full border border-[#e5e5e5] bg-white text-[#1b1c21] font-medium text-sm hover:text-[#62d58f] hover:border-[#62d58f] transition"
              style={{ minWidth: 72 }}
            >
              {color}
            </button>
          ))}
        </div>
      </section>
      {/* SIESTA Label navigation (collapsible/list) */}
      <section className="w-full max-w-3xl mx-auto py-8 px-3">
        <div className="flex flex-col gap-4">
          {[
            {label: '01 SIESTA White Label'},
            {label: '02 SIESTA Black Label'},
            {label: '03 SIESTA Gold Label'},
            {label: '04 SIESTA Identity Label'},
          ].map((item, idx) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between bg-[#1b1c21] text-white text-[17px] font-semibold py-4 px-6 rounded-2xl shadow cursor-pointer hover:bg-[#333] transition text-left"
            >
              <span>{item.label}</span>
              <svg width="21" height="21" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          ))}
        </div>
      </section>
      {/* Ultra Moist section */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-2 pb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#1b1c21]">Ultra Moist</h3>
          <a href="#" className="text-[#62d58f] text-sm hover:underline">More</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 gap-2">
              <div className="w-20 h-20 bg-[#ececec] rounded-md flex items-center justify-center mb-1">
                <span className="text-gray-400">IMG</span>
              </div>
              <div className="font-semibold text-[15px] text-[#1b1c21] text-center">Ultra Moist {i}</div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">$16.00</span>
                <span className="line-through text-[#999ca1]">$18.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Customer Review + Style Filter */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-xl md:text-2xl font-bold text-[#1b1c21] mb-3">Customer Review</h3>
        <div className="mb-5 font-semibold text-[#806a71]">TRY FIND YOUR STYLE!</div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Style filter options */}
          <div className="flex-1">
            <ul className="space-y-2 text-[#806a71] text-base font-medium">
              <li><span className="block text-[#1b1c21] font-semibold">SUBTLE</span></li>
              <li>OPAQUE</li>
              <li>Limbal Ring</li>
              <li>No Limbal Ring</li>
              <li>Cosplay</li>
            </ul>
          </div>
          {/* Description about styles */}
          <div className="flex-1 max-w-lg text-[#999ca1] text-sm">
            <p>Select a style to see examples and bestsellers for your desired look.</p>
          </div>
        </div>
      </section>
      {/* Newsletter CTA Section */}
      <section className="w-full py-10 bg-[#191a22] flex justify-center">
        <div className="max-w-xl w-full flex flex-col items-center">
          <h4 className="text-white font-bold text-xl mb-2">Join our newsletter</h4>
          <form className="w-full flex items-center justify-center">
            <input type="email" className="w-full max-w-xs px-5 py-3 rounded-l-full text-[#1b1c21] bg-white outline-none" placeholder="Email address" />
            <button className="bg-[#62d58f] text-white px-6 py-3 rounded-r-full font-semibold hover:bg-[#47b67a] transition">→</button>
          </form>
        </div>
      </section>
      {/* Best Reviews of March */}
      <section className="w-full bg-white pt-10 pb-8">
        <h4 className="text-center font-bold text-lg md:text-xl mb-6">BEST REVIEWS OF MARCH</h4>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {["AWARE GRAY","COLOR ADDICT","STOCKHOLM","CREAM"].map((prod,i)=>(
            <div key={prod} className="bg-[#fbfbfb] shadow rounded-xl p-5 flex flex-col items-center text-center">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(star=>(<svg key={star} width="13" height="13" fill="#FAC917" viewBox="0 0 20 20"><polygon points="10,1 12,7 19,7 13.5,11 15.5,18 10,14 4.5,18 6.5,11 1,7 8,7"/></svg>))}
              </div>
              <div className="font-bold mb-2">{prod}</div>
              <div className="text-xs text-[#806a71] mb-2">Great fit, comfortable, looks amazing – my favorite!</div>
              <div className="text-[11px] text-[#999ca1]">by User{i+1}</div>
            </div>
          ))}
        </div>
      </section>
      {/* TikTok/social preview section */}
      <section className="w-full py-8 bg-[#fbfbfb] flex flex-col items-center justify-center">
        <div className="font-semibold text-lg mb-4">Follow us at TIKTOK @colorcl.com</div>
        <div className="flex gap-4 justify-center items-center">
          {[1,2,3,4,5].map(i=>(<div key={i} className="w-16 h-24 bg-[#1b1c21] flex items-center justify-center rounded-xl"><svg width="36" height="36" fill="#fff" viewBox="0 0 50 50"><path d="M38 25.4a8 8 0 0 1-8-8V6.8h4.8A5.7 5.7 0 0 0 47 12.4V16a7.8 7.8 0 0 1-8-7.8V25.4ZM14 16.1a10.4 10.4 0 1 0 10.4 10.4V24a7.8 7.8 0 1 1-7.8 7.8H22a10.4 10.4 0 0 0-8-9.7Z"></path></svg></div>))}
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#191a22] py-10 text-[#fbfbfb]">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-[#333]">
          <div className="col-span-1 flex flex-col gap-2">
            <div className="mb-3 font-bold">Newsletter</div>
            <form className="flex"><input type="email" className="bg-white text-[#1b1c21] px-4 py-2 rounded-l-full outline-none" placeholder="Email address" /><button className="bg-[#62d58f] px-6 py-2 rounded-r-full text-white font-bold">→</button></form>
            <span className="text-xs text-[#c9c9cb] mt-1">Subscribe for updates, special deals, or product news. No spam.</span>
          </div>
          <div>
            <div className="mb-3 font-bold">Footer menus</div>
            <ul className="space-y-1">
              <li>All products</li><li>Store info</li><li>Best Sellers</li><li>Special Offers</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-bold">Customer service</div>
            <ul className="space-y-1">
              <li>FAQ</li><li>Contact us</li><li>Shipping Info</li><li>Returns</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-bold">Programs</div>
            <ul className="space-y-1">
              <li>Referral Program</li><li>Loyalty Points</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 pt-6 text-xs text-[#c9c9cb]">
          <span>© 2025 COLORCL. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </footer>
      <main className="flex-1"></main>
    </div>
  );
}

export default App;
