import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Event from "./pages/Event";
import Brand from "./pages/Brand";
import Best from "./pages/Best";
import ClearLenses from "./pages/ClearLenses";
import ColorContacts from "./pages/ColorContacts";
import LensAccessories from "./pages/LensAccessories";
import FAQ from "./pages/FAQ";
import Collections from "./pages/Collections";
import Category from "./pages/Category";
import More from "./pages/More";
import NewArrivals from "./pages/NewArrivals";
import ContactUs from "./pages/ContactUs";
import Shipping from "./pages/Shipping";
import Account from "./pages/Account";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const HomePage = () => {
  const { toggleCart, getItemCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const itemCount = getItemCount();

  return (
  <>
    {/* Header / Navigation */}
    <header className="w-full bg-white border-b border-[#e5e5e5] shadow-sm sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="https://ext.same-assets.com/1106046646/1881706325.png"
              alt="V-collors Logo"
              className="h-8 w-auto"
            />
          </Link>
          <span className="font-bold tracking-tight text-xl text-[#1b1c21] hidden sm:inline">
            SIESTA
          </span>
        </div>
        {/* Nav links */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium text-[#1b1c21]">
          <li>
            <Link to="/event" className="hover:text-accent transition">
              Event
            </Link>
          </li>
          <li>
            <Link to="/brand" className="hover:text-accent transition">
              Brand
            </Link>
          </li>
          <li>
            <Link to="/best" className="hover:text-accent transition">
              Best
            </Link>
          </li>
          <li>
            <Link to="/clear-lenses" className="hover:text-accent transition">
              Clear Lenses
            </Link>
          </li>
          <li>
            <Link to="/color-contacts" className="hover:text-accent transition">
              Color Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/lens-accessories"
              className="hover:text-accent transition"
            >
              Lens Accessories
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-accent transition">
              FAQ
            </Link>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Icons section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          {/* Account */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
            </svg>
          </button>
          {/* Cart */}
          <button 
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="20" cy="20" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e5e5] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/event" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Event
                </Link>
              </li>
              <li>
                <Link 
                  to="/brand" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Brand
                </Link>
              </li>
              <li>
                <Link 
                  to="/best" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Best
                </Link>
              </li>
              <li>
                <Link 
                  to="/clear-lenses" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clear Lenses
                </Link>
              </li>
              <li>
                <Link 
                  to="/color-contacts" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Color Contacts
                </Link>
              </li>
              <li>
                <Link 
                  to="/lens-accessories" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lens Accessories
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="block py-2 text-[#1b1c21] hover:text-accent transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Collections
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
    {/* Hero / Banner Section */}
    <section className="w-full bg-black relative overflow-hidden">
      {/* Main hero image (sample video placeholder for now) */}
      <div className="aspect-[2.2/1] w-full flex items-center justify-center bg-muted">
        <img
          src="https://ext.same-assets.com/1106046646/4087315943.png"
          alt="Hero Visual"
          className="object-cover w-full h-full"
        />
        {/* Overlay text on hero */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-lg drop-shadow-xl">
          <h1 className="font-bold text-4xl md:text-5xl mb-4">SIESTA</h1>
          <p className="text-lg font-light mb-6 hidden md:block">
            Coloring Your Life. New products released continually. Affordable
            price and high quality contacts!
          </p>
          <Link to="/collections">
            <button className="px-6 py-3 text-primary-foreground bg-primary font-bold rounded-full shadow-md transition hover:opacity-90">
              VIEW COLLECTIONS
            </button>
          </Link>
        </div>
      </div>

      {/* Horizontal category icon row */}
      <div className="w-full px-4 md:px-0 bg-white z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-nowrap overflow-x-auto gap-4 md:gap-8 py-4 justify-center">
          {/* Category icon buttons */}
          {[
            {
              label: "Bliss",
              img: "https://ext.same-assets.com/1106046646/170511303.png",
            },
            {
              label: "Romance",
              img: "https://ext.same-assets.com/1106046646/1493563406.png",
            },
            {
              label: "Crystal",
              img: "https://ext.same-assets.com/1106046646/1973108637.png",
            },
            {
              label: "Iris",
              img: "https://ext.same-assets.com/1106046646/2181156243.png",
            },
            {
              label: "Halo",
              img: "https://ext.same-assets.com/1106046646/2893548898.png",
            },
            {
              label: "Sahara",
              img: "https://ext.same-assets.com/1106046646/3457554628.png",
            },
            {
              label: "Master Piece",
              img: "https://ext.same-assets.com/1106046646/3374009033.png",
            },
            {
              label: "Lychee",
              img: "https://ext.same-assets.com/1106046646/1360648198.png",
            },
            {
              label: "Persona",
              img: "https://ext.same-assets.com/1106046646/577148014.png",
            },
            {
              label: "Clear",
              img: "https://ext.same-assets.com/1106046646/2343199044.png",
            },
          ].map(({ label, img }) => (
            <Link to={`/category/${label.toLowerCase()}`} key={label}>
              <button className="flex flex-col items-center text-foreground font-medium hover:text-accent transition">
                <span className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <img
                    src={img}
                    alt={label}
                    className="w-7 h-7 object-contain"
                  />
                </span>
                <span className="text-xs md:text-sm text-center whitespace-nowrap">
                  {label}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
    {/* RESTOCKED - SIESTA WEEKLY CLEAR callout section */}
    <section className="w-full flex flex-col items-center bg-card py-10 border-b border-gray-100">
      <div className="w-full max-w-3xl flex flex-col gap-6 items-center">
        {/* Banner image placeholder */}
        <div className="w-full rounded-lg overflow-hidden mb-2 relative aspect-[3.7/1] bg-muted flex items-center justify-center">
          {/* This would be: https://ext.same-assets.com/1106046646/269966944.png if loaded */}
          <span className="text-gray-400 text-xl">RESTOCKED BANNER</span>
        </div>
        <h2 className="font-bold text-xl md:text-2xl text-foreground">
          SIESTA WEEKLY CLEAR
        </h2>
        <p className="text-center text-muted-foreground mb-3">
          Weekly Clear has been restocked. Purchase 2+ and get a 15% discount,
          Purchase 4+ and get a 30% discount!
        </p>
        <Link to="/collections">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm uppercase tracking-wide shadow-sm hover:opacity-90 transition">
            Go To Shop
          </button>
        </Link>
      </div>
    </section>
    {/* Back In Stock horizontal banner */}
    <section className="w-full bg-foreground py-3 flex items-center justify-center text-background text-lg font-bold tracking-wider relative mb-1 overflow-hidden">
      {/* Banner placeholder */}
      <span className="w-full text-center">BACK IN STOCK</span>
    </section>
    {/* [1+1] Set Discount Section */}
    <section className="w-full max-w-7xl mx-auto px-4 pt-8 pb-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          [1+1] Set Discount
        </h3>
        <Link to="/more" className="text-accent text-sm hover:underline">
          More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Example product cards - use placeholders for now */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex bg-card rounded-xl shadow p-4 gap-4 items-center"
          >
            <div className="w-24 h-24 flex-shrink-0 bg-muted rounded-md flex items-center justify-center">
              <span className="text-gray-400">PRODUCT IMG</span>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-semibold">
                  Sale
                </span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
                  [1+1]
                </span>
              </div>
              <div className="font-semibold text-base truncate">
                SIESTA Blossom {i === 1 ? "1-Month" : "1-Day"}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-destructive font-bold text-lg">
                  $25.00
                </span>
                <span className="text-muted-foreground line-through text-sm">
                  $50.00
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* TikTok/social preview section */}
    <section className="w-full py-8 bg-card flex flex-col items-center justify-center">
      <div className="font-semibold text-lg mb-4">
        Follow us at TIKTOK @v-collors.com
      </div>
      <div className="flex gap-4 justify-center items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <div className="w-16 h-24 bg-foreground flex items-center justify-center rounded-xl">
              <svg width="36" height="36" fill="white" viewBox="0 0 50 50">
                <path d="M38 25.4a8 8 0 0 1-8-8V6.8h4.8A5.7 5.7 0 0 0 47 12.4V16a7.8 7.8 0 0 1-8-7.8V25.4ZM14 16.1a10.4 10.4 0 1 0 10.4 10.4V24a7.8 7.8 0 1 1-7.8 7.8H22a10.4 10.4 0 0 0-8-9.7Z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
    
    {/* Search Bar */}
    <SearchBar 
      isOpen={isSearchOpen} 
      onClose={() => setIsSearchOpen(false)} 
    />
  </>
)};

const AppContent = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/best" element={<Best />} />
          <Route path="/clear-lenses" element={<ClearLenses />} />
          <Route path="/color-contacts" element={<ColorContacts />} />
          <Route path="/lens-accessories" element={<LensAccessories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/more" element={<More />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="font-semibold text-lg mb-4">
                Follow us at TIKTOK @v-collors.com
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="TikTok post 1"
                    className="w-24 h-24 object-cover"
                  />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="TikTok post 2"
                    className="w-24 h-24 object-cover"
                  />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="TikTok post 3"
                    className="w-24 h-24 object-cover"
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/color-contacts" className="hover:underline">
                    Color Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/clear-lenses" className="hover:underline">
                    Clear Lenses
                  </Link>
                </li>
                <li>
                  <Link to="/best" className="hover:underline">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/new-arrivals" className="hover:underline">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="hover:underline">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="hover:underline">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm">
            <span>© 2025 V-collors. All rights reserved.</span>
          </div>
        </div>
      </footer>
      <Cart />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="bg-background min-h-screen flex flex-col">
        <AppContent />
      </div>
    </CartProvider>
  );
}

export default App;
