
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Phone,
  Heart,
  ChevronDown,
  CircleHelp,
  Star,
  LogOut,
  Package,
  LifeBuoy,
  PhoneCall,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";

import { useSelector } from "react-redux";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const { user, isLoaded } = useUser();

  const [showAccount, setShowAccount] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(0);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const categories = [
    "Birthday Cakes",
    "Wedding Cakes",
    "Cupcakes",
    "Pastries",
    "Bread",
    "Cookies",
    "Desserts",
  ];

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact Us",
      href: "/contactPage",
    },
  ];

  /* ==========================================
     CATEGORY SLIDER
  ========================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* ==========================================
     STICKY UPPER NAVBAR
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================
     PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  ========================================== */

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  /* ==========================================
     CLOSE MOBILE MENU
  ========================================== */

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  return (
    <header className="w-full shadow-md">

      {/* =====================================================
          UPPER NAVBAR
          THIS ONE BECOMES FIXED WHEN SCROLLING
      ===================================================== */}

      <div
        className={`
          bg-gray-50
       
          transition-all
          duration-300
          z-[100]
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 shadow-lg"
              : "relative"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            min-h-[80px]
            px-4
            sm:px-6
            flex
            items-center
            justify-between
            gap-4
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="
                w-12
                h-12
                sm:w-16
                sm:h-16
                object-contain
              "
            />

            <div>
              <h1
                className={`
                  ${pacifico.className}
                  text-xl
                  sm:text-3xl
                  text-[#a8418b]
                `}
              >
                L'Chaim
              </h1>

              <p className="text-gray-600 text-[10px] sm:text-sm -mt-1">
                Cakes & Sweets
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              text-gray-700
              gap-8
              text-lg
              xl:text-xl
              font-bold
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#a8418b] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ================= PHONE ================= */}

          <div className="hidden xl:flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <Phone
                size={20}
                className="text-[#a8418b]"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Call Us 24/7
              </p>

              <p className="font-bold text-gray-800">
                (+234) 090 1234 5678
              </p>
            </div>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMobileMenu(true)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-lg
              bg-[#922b6a]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#7d225a]
              transition
              shrink-0
            "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

        </div>
      </div>

      {/* =====================================================
          SPACER
          Prevents content from jumping when upper nav becomes fixed
      ===================================================== */}

      {isSticky && (
        <div className="h-[80px]" />
      )}

      {/* =====================================================
          BOTTOM / DARK NAVBAR
          THIS ONE IS NOT FIXED
      ===================================================== */}

      <div className="bg-[#181718] relative z-50">

        <div
          className="
            max-w-7xl
            mx-auto
            min-h-16
            px-4
            sm:px-6
            py-2
            flex
            items-center
            gap-4
          "
        >

          {/* ================= CATEGORY ================= */}

          <div className="relative hidden md:block shrink-0">

            <button
              type="button"
              className="
                flex
                items-center
                gap-3
                bg-white
                text-black
                px-5
                h-11
                min-w-[220px]
                rounded-md
                overflow-hidden
              "
            >

              <Menu size={20} />

              <div className="relative h-6 overflow-hidden flex-1">

                <div
                  className="transition-transform duration-700"
                  style={{
                    transform: `translateY(-${
                      currentCategory * 24
                    }px)`,
                  }}
                >
                  {categories.map((item) => (
                    <div
                      key={item}
                      className="
                        h-6
                        flex
                        font-bold
                        items-center
                        whitespace-nowrap
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>

              </div>

              <ChevronDown size={16} />

            </button>

          </div>

          {/* ================= SEARCH ================= */}

          <div
            className="
              flex-1
              flex
              h-11
              bg-white
              rounded-md
              overflow-hidden
              shadow-sm
              min-w-0
            "
          >

            <div className="flex items-center px-3 sm:px-4 border-r border-gray-200">
              <Search
                size={18}
                className="text-gray-400"
              />
            </div>

            <input
              type="text"
              placeholder="Search for Product"
              className="
                flex-1
                min-w-0
                px-3
                sm:px-4
                text-sm
                outline-none
                placeholder:text-gray-400
              "
            />

            <select
              className="
                hidden
                md:block
                w-36
                lg:w-44
                border-l
                border-gray-200
                px-3
                text-sm
                text-gray-600
                outline-none
                cursor-pointer
              "
            >
              <option>All Category</option>
              <option>Birthday Cakes</option>
              <option>Wedding Cakes</option>
              <option>Cupcakes</option>
              <option>Pastries</option>
              <option>Bread</option>
            </select>

            <button
              type="button"
              className="
                w-12
                sm:w-14
                shrink-0
                bg-[#ce45b7]
                hover:bg-[#5b1d4b]
                flex
                items-center
                justify-center
                transition
              "
            >
              <Search
                size={20}
                className="text-white"
              />
            </button>

          </div>

          {/* ================= RIGHT DESKTOP ICONS ================= */}

          <div className="hidden lg:flex items-center gap-3">

            {/* ACCOUNT */}

            <div
              className="relative"
              onMouseEnter={() => setShowAccount(true)}
              onMouseLeave={() => setShowAccount(false)}
            >

              <button
                type="button"
                className="
                  h-11
                  px-4
                  rounded-md
                  bg-white
                  hover:bg-gray-100
                  flex
                  items-center
                  gap-2
                  transition
                "
              >

                {!isLoaded ? (
                  <>
                    <User size={18} />
                    <span className="font-medium">
                      My Account
                    </span>
                  </>
                ) : user ? (
                  <>
                    <span className="text-sm text-gray-500">
                      Hey,
                    </span>

                    <span className="font-semibold">
                      {user.firstName}
                    </span>
                  </>
                ) : (
                  <>
                    <User size={18} />

                    <span className="font-medium">
                      My Account
                    </span>
                  </>
                )}

                <ChevronDown size={16} />

              </button>

              {showAccount && (
                <div className="absolute top-full -mt-4 right-0 w-64 z-50">

                  <div className="mt-5 w-64 bg-white rounded-lg shadow-2xl overflow-hidden">

                    <div className="p-5 border-b">

                      <SignedOut>

                        <SignInButton mode="modal">

                          <button
                            type="button"
                            className="
                              w-full
                              bg-[#ce45b7]
                              hover:bg-[#5b1d4b]
                              text-white
                              rounded-lg
                              py-3
                              font-semibold
                              transition
                              flex
                              items-center
                              justify-center
                              gap-2
                            "
                          >
                            <User size={18} />
                            Login / Sign Up
                          </button>

                        </SignInButton>

                      </SignedOut>

                      <SignedIn>

                        <div className="flex flex-col items-center gap-3">

                          <UserButton
                            appearance={{
                              elements: {
                                avatarBox: "w-12 h-12",
                              },
                            }}
                          />

                          <p className="text-sm font-medium text-gray-700">
                            You're signed in
                          </p>

                        </div>

                      </SignedIn>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        Access your account, orders and saved items.
                      </p>

                    </div>

                    <Link
                      href="/account"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <User size={18} />
                      My Account
                    </Link>

                    <Link
                      href="/my-orders"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <ShoppingCart size={18} />
                      My Orders
                    </Link>

                    <Link
                      href="/saved-items"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <Heart size={18} />
                      Saved Items
                    </Link>

                    <Link
                      href="/track-order"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <Package size={18} />
                      Track My Order
                    </Link>

                    <Link
                      href="/my-reviews"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-pink-50"
                    >
                      <Star
                        size={18}
                        className="text-[#ce45b7]"
                      />
                      Ratings & Feedback
                    </Link>

                    <SignedIn>

                      <SignOutButton>

                        <button
                          type="button"
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            text-left
                            px-5
                            py-4
                            hover:bg-gray-50
                            text-red-600
                          "
                        >
                          <LogOut size={18} />
                          Logout
                        </button>

                      </SignOutButton>

                    </SignedIn>

                  </div>

                </div>
              )}

            </div>

            {/* HELP */}

            <div
              className="relative"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
            >

              <button
                type="button"
                className="
                  h-11
                  px-4
                  rounded-md
                  bg-white
                  hover:bg-gray-100
                  flex
                  items-center
                  gap-2
                "
              >
                <CircleHelp size={18} />

                <span className="font-medium">
                  Help
                </span>
              </button>

              {showHelp && (

                <div className="absolute top-full -mt-4 right-0 w-64 z-50">

                  <div className="mt-5 w-64 bg-white rounded-lg shadow-2xl overflow-hidden">

                    <Link
                      href="/help-center"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <LifeBuoy size={18} />
                      Help Centre
                    </Link>

                    <Link
                      href="/contactPage"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <PhoneCall size={18} />
                      Contact Us
                    </Link>

                    <Link
                      href="/faq"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
                    >
                      <CircleHelp size={18} />
                      FAQs
                    </Link>

                  </div>

                </div>

              )}

            </div>

            {/* CART */}

            <Link href="/cart">

              <button
                type="button"
                className="
                  relative
                  h-11
                  bg-white
                  rounded-md
                  px-5
                  flex
                  items-center
                  gap-3
                  hover:bg-gray-100
                "
              >

                <ShoppingCart size={20} />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      w-6
                      h-6
                      rounded-full
                      bg-red-500
                      text-white
                      text-xs
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {cartCount}
                  </span>
                )}

                <span className="font-semibold text-sm">
                  ₦{cartTotal.toLocaleString()}
                </span>

              </button>

            </Link>

          </div>

        </div>
      </div>

      {/* =====================================================
          MOBILE SLIDE-IN MENU
          COMES FROM RIGHT
      ===================================================== */}

      {/* Overlay */}

      <div
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          bg-black/50
          z-[200]
          lg:hidden
          transition-opacity
          duration-300
          ${
            mobileMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[85%]
          max-w-[380px]
          bg-gray-200
          z-[300]
          shadow-2xl
          lg:hidden
          overflow-y-auto
          transition-transform
          duration-300
          ease-in-out
          ${
            mobileMenu
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Drawer Header */}

        <div
          className="
            sticky
            top-0
            bg-gray-200
            border-b
            px-5
            py-5
            flex
            items-center
            justify-between
            z-10
          "
        >

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2"
          >

            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h2
                className={`${pacifico.className} text-2xl text-[#922b6a]`}
              >
                L'Chaim
              </h2>

              <p className="text-xs text-gray-600">
                Cakes & Sweets
              </p>

            </div>

          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="
              w-10
              h-10
              rounded-full
              bg-white
              shadow
              flex
              items-center
              justify-center
              hover:bg-gray-100
              transition
            "
            aria-label="Close menu"
          >
            <X size={22} />
          </button>

        </div>

        {/* Mobile Navigation */}

        <nav className="px-5 py-6">

          <div className="space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="
                  block
                  bg-white
                  rounded-xl
                  px-5
                  py-4
                  font-semibold
                  text-gray-800
                  hover:bg-[#922b6a]
                  hover:text-white
                  transition
                "
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Categories */}

          <div className="mt-8">

            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Categories
            </h3>

            <div className="space-y-2">

              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(
                    category
                  )}`}
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-5
                    py-3
                    rounded-xl
                    bg-white
                    text-gray-700
                    hover:bg-pink-100
                    hover:text-[#922b6a]
                    transition
                  "
                >
                  {category}
                </Link>
              ))}

            </div>

          </div>

          {/* Mobile Account */}

          <div className="mt-8">

            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Account
            </h3>

            <div className="bg-white rounded-xl overflow-hidden">

              <Link
                href="/account"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <User size={18} />
                My Account
              </Link>

              <Link
                href="/my-orders"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <ShoppingCart size={18} />
                My Orders
              </Link>

              <Link
                href="/saved-items"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Heart size={18} />
                Saved Items
              </Link>

              <Link
                href="/track-order"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Package size={18} />
                Track My Order
              </Link>

              <Link
                href="/my-reviews"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-pink-50"
              >
                <Star
                  size={18}
                  className="text-[#ce45b7]"
                />
                Ratings & Feedback
              </Link>

            </div>

          </div>

          {/* Mobile Help */}

          <div className="mt-8">

            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Help
            </h3>

            <div className="bg-white rounded-xl overflow-hidden">

              <Link
                href="/help-center"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <LifeBuoy size={18} />
                Help Centre
              </Link>

              <Link
                href="/contactPage"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <PhoneCall size={18} />
                Contact Us
              </Link>

              <Link
                href="/faq"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <CircleHelp size={18} />
                FAQs
              </Link>

            </div>

          </div>

          {/* Mobile Cart */}

          <Link
            href="/cart"
            onClick={closeMobileMenu}
            className="
              mt-8
              flex
              items-center
              justify-between
              bg-[#922b6a]
              text-white
              rounded-xl
              px-5
              py-4
              font-semibold
            "
          >

            <div className="flex items-center gap-3">

              <ShoppingCart size={20} />

              <span>
                My Cart
              </span>

            </div>

            <div className="flex items-center gap-2">

              {cartCount > 0 && (
                <span className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}

              <span>
                ₦{cartTotal.toLocaleString()}
              </span>

            </div>

          </Link>

          {/* Mobile Phone */}

          <div className="mt-6 bg-white rounded-xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center">
                <Phone
                  size={18}
                  className="text-[#922b6a]"
                />
              </div>

              <div>

                <p className="text-xs text-gray-500 uppercase">
                  Call Us 24/7
                </p>

                <p className="font-bold text-gray-800">
                  (+234) 090 1234 5678
                </p>

              </div>

            </div>

          </div>

          {/* Mobile Login / Logout */}

          <div className="mt-6 pb-8">

            <SignedOut>

              <SignInButton mode="modal">

                <button
                  type="button"
                  className="
                    w-full
                    bg-[#ce45b7]
                    hover:bg-[#7d225a]
                    text-white
                    rounded-xl
                    py-4
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition
                  "
                >
                  <User size={18} />
                  Login / Sign Up
                </button>

              </SignInButton>

            </SignedOut>

            <SignedIn>

              <div className="bg-white rounded-xl p-5">

                <div className="flex items-center gap-3">

                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12",
                      },
                    }}
                  />

                  <div>

                    <p className="font-semibold text-gray-800">
                      {user?.firstName || "Account"}
                    </p>

                    <p className="text-sm text-gray-500">
                      You're signed in
                    </p>

                  </div>

                </div>

                <SignOutButton>

                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="
                      mt-4
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-red-600
                      bg-red-50
                      hover:bg-red-100
                      rounded-lg
                      py-3
                      font-semibold
                    "
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </SignOutButton>

              </div>

            </SignedIn>

          </div>

        </nav>

      </aside>

    </header>
  );
}

