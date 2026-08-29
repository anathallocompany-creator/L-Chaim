
"use client";

import { useMemo, useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ProductFilter from "./ProductFilter";
import ProductToolbar from "./ProductToolbar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

export default function ProductPage() {
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);

    const [availability, setAvailability] = useState([]);
    const [selectedOccasions, setSelectedOccasions] = useState([]);
    const [selectedFlavours, setSelectedFlavours] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mobile filter drawer
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();

                setProducts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    // Prevent background scrolling when mobile filter is open
    useEffect(() => {
        if (filterOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [filterOpen]);

    const productsPerPage = 12;

    const filteredProducts = useMemo(() => {
        let list = Array.isArray(products) ? [...products] : [];

        // Category
        if (category !== "All") {
            list = list.filter(
                (item) => item.category === category
            );
        }

        // Availability
        if (availability.length > 0) {
            list = list.filter((item) => {
                if (
                    availability.includes("In Stock") &&
                    item.inStock
                ) {
                    return true;
                }

                if (
                    availability.includes("Out of Stock") &&
                    !item.inStock
                ) {
                    return true;
                }

                return false;
            });
        }

        // Occasion
        if (selectedOccasions.length > 0) {
            list = list.filter((item) =>
                selectedOccasions.includes(item.occasion)
            );
        }

        // Flavour
        if (selectedFlavours.length > 0) {
            list = list.filter((item) =>
                selectedFlavours.includes(item.flavour)
            );
        }

        // Minimum price
        if (minPrice !== "") {
            list = list.filter(
                (item) => item.price >= Number(minPrice)
            );
        }

        // Maximum price
        if (maxPrice !== "") {
            list = list.filter(
                (item) => item.price <= Number(maxPrice)
            );
        }

        // Sorting
        switch (sortBy) {
            case "az":
                list.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            case "price-low":
                list.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                list.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }

        return list;
    }, [
        products,
        category,
        availability,
        selectedOccasions,
        selectedFlavours,
        minPrice,
        maxPrice,
        sortBy,
    ]);

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const closeFilter = () => {
        setFilterOpen(false);
    };

    if (loading) {
        return (
            <div className="py-40 text-center text-xl">
                Loading products...
            </div>
        );
    }

    return (
        <>
            {/* =====================================
                DESKTOP BANNER
                Hidden on mobile
            ====================================== */}
            <section
                className="
                    hidden
                    lg:block
                    relative
                    py-20
                    sm:py-24
                    md:py-28
                    lg:py-32
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
                style={{
                    backgroundImage: "url('/hero1.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/45" />

                <div
                    className="
                        relative
                        max-w-[1800px]
                        mx-auto
                        px-4
                        sm:px-6
                        text-center
                        z-10
                    "
                >
                    <h1
                        className="
                            font-serif
                            text-white
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-[48px]
                            font-light
                            tracking-[-0.04em]
                            leading-[0.95]
                        "
                    >
                        Our Products
                    </h1>

                    <p
                        className="
                            mt-3
                            sm:mt-4
                            text-sm
                            sm:text-base
                            md:text-lg
                            text-gray-200
                        "
                    >
                        Home
                        <span className="mx-2">/</span>
                        Shop
                    </p>
                </div>
            </section>

            {/* =====================================
                PRODUCTS SECTION
            ====================================== */}
            <section
                className="
                    w-full
                    py-6
                    sm:py-8
                    md:py-12
                    px-3
                    sm:px-5
                    md:px-8
                    xl:px-12
                "
            >
                {/* =====================================
                    MOBILE FILTER BACKDROP
                ====================================== */}
                <div
                    onClick={closeFilter}
                    className={`
                        fixed
                        inset-0
                        bg-black/50
                        z-[998]
                        transition-opacity
                        duration-300
                        lg:hidden
                        ${
                            filterOpen
                                ? "opacity-100 visible"
                                : "opacity-0 invisible pointer-events-none"
                        }
                    `}
                />

                {/* =====================================
                    MOBILE FILTER DRAWER
                ====================================== */}
                <aside
                    className={`
                        fixed
                        top-0
                        left-0
                        bottom-0
                        w-[320px]
                        max-w-[85vw]
                        bg-white
                        z-[999]
                        shadow-2xl
                        overflow-y-auto
                        transition-transform
                        duration-300
                        ease-in-out
                        lg:hidden
                        ${
                            filterOpen
                                ? "translate-x-0"
                                : "-translate-x-full"
                        }
                    `}
                >
                    {/* Drawer Header */}
                    <div
                        className="
                            sticky
                            top-0
                            z-10
                            bg-white
                            border-b
                            px-5
                            py-4
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <h2 className="text-lg font-semibold text-gray-800">
                            Filters
                        </h2>

                        <button
                            type="button"
                            onClick={closeFilter}
                            aria-label="Close filters"
                            className="
                                flex
                                items-center
                                justify-center
                                w-9
                                h-9
                                rounded-full
                                bg-gray-100
                                hover:bg-gray-200
                                transition
                            "
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Drawer Filter Content */}
                    <div className="p-5">
                        <ProductFilter
                            category={category}
                            setCategory={setCategory}

                            availability={availability}
                            setAvailability={setAvailability}

                            selectedOccasions={selectedOccasions}
                            setSelectedOccasions={setSelectedOccasions}

                            selectedFlavours={selectedFlavours}
                            setSelectedFlavours={setSelectedFlavours}

                            minPrice={minPrice}
                            setMinPrice={setMinPrice}

                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </div>
                </aside>

                {/* =====================================
                    MOBILE FILTER BAR
                ====================================== */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-5
                        lg:hidden
                    "
                >
                    <button
                        type="button"
                        onClick={() => setFilterOpen(true)}
                        aria-label="Open filters"
                        className="
                            flex
                            items-center
                            gap-2
                            bg-[#a8418b]
                            text-white
                            px-4
                            py-2.5
                            rounded-md
                            text-sm
                            font-semibold
                            hover:bg-[#8d3374]
                            active:scale-95
                            transition
                        "
                    >
                        <SlidersHorizontal size={18} />
                        Filters
                    </button>

                    <span className="text-sm text-gray-500">
                        {filteredProducts.length} Products
                    </span>
                </div>

                {/* =====================================
                    MAIN PAGE GRID
                ====================================== */}
                <div className="grid grid-cols-12 gap-5 lg:gap-6">

                    {/* =================================
                        DESKTOP FILTER
                    ================================== */}
                    <aside
                        className="
                            hidden
                            lg:block
                            lg:col-span-3
                            xl:col-span-2
                        "
                    >
                        <ProductFilter
                            category={category}
                            setCategory={setCategory}

                            availability={availability}
                            setAvailability={setAvailability}

                            selectedOccasions={selectedOccasions}
                            setSelectedOccasions={setSelectedOccasions}

                            selectedFlavours={selectedFlavours}
                            setSelectedFlavours={setSelectedFlavours}

                            minPrice={minPrice}
                            setMinPrice={setMinPrice}

                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </aside>

                    {/* =================================
                        PRODUCTS CONTENT
                    ================================== */}
                    <main
                        className="
                            col-span-12
                            lg:col-span-9
                            xl:col-span-10
                        "
                    >
                        {/* Toolbar */}
                        <ProductToolbar
                            total={filteredProducts.length}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        {/* Product Grid */}
                        <ProductGrid
                            products={displayedProducts}
                        />

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    </main>
                </div>
            </section>
        </>
    );
}

