"use client";

import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";

const categories = [
    "Birthday Cakes",
    "Wedding Cakes",
    "Children Cakes",
    "Cupcakes",
    "Pastries",
    "Bread",
    "Cookies",
    "Desserts",
    "Drinks",
    "Food Tray",
];

const occasions = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Graduation",
    "Baby Shower",
    "Valentine",
    "Christmas",
];

const flavours = [
    "Vanilla",
    "Chocolate",
    "Red Velvet",
    "Strawberry",
    "Fruit",
    "Caramel",
];

const initialForm = {
    name: "",
    slug: "",
    description: "",

    category: "",
    occasion: "",
    flavour: "",

    image: "",
    images: [],

    price: "",
    oldPrice: "",
    discount: "",

    stock: "",
    inStock: true,

    rating: 5,
    reviews: 0,

    sku: "",
    brand: "L'Chaim Cakes",

    tags: [],


    seoTitle: "",
    metaDescription: "",
    keywords: "",
    featured: false,
    chefsSelection: false,
    luxuryBakes: false,
    exquisiteTreats: false,

};

export default function ProductModal({
    open,
    onClose,
    onSave,
    product,
}) {
    const [form, setForm] = useState(initialForm);
    const [tagInput, setTagInput] = useState("");

    useEffect(() => {
        if (product) {
            setForm({
                ...initialForm,
                ...product,
            });
        } else {
            setForm(initialForm);
        }
    }, [product, open]);

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    const addTag = () => {
        if (!tagInput.trim()) return;

        setForm((prev) => ({
            ...prev,
            tags: [...prev.tags, tagInput.trim()],
        }));

        setTagInput("");
    };

    const removeTag = (index) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.filter(
                (_, i) => i !== index
            ),
        }));
    };

    const handleSubmit = () => {
        onSave(form);
    };


    async function handleCoverImage(e) {

        const file = e.target.files[0];

        if (!file) return;

        const data = new FormData();

        data.append("file", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: data,
        });

        const image = await res.json();

        setForm(prev => ({
            ...prev,
            image,
        }));
    }



    async function handleGalleryImages(e) {

        const files = [...e.target.files];

        const uploaded = [];

        for (const file of files) {

            const data = new FormData();

            data.append("file", file);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: data,
            });

            uploaded.push(await res.json());
        }

        setForm(prev => ({
            ...prev,
            images: [
                ...prev.images,
                ...uploaded,
            ],
        }));
    }


    function removeGalleryImage(index) {

        setForm(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    }

    return (
        <div className="fixed inset-0 z-[999] bg-black/50 flex justify-end">

            <div className="w-full max-w-4xl bg-white h-screen overflow-y-auto">

                {/* Header */}

                <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">

                    <h2 className="text-2xl font-bold">

                        {product
                            ? "Edit Product"
                            : "Add Product"}

                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <div className="p-8 space-y-8">

                    {/* BASIC INFO */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Basic Information
                        </h3>

                        <div className="space-y-5">

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Product Name"
                                className="w-full border rounded-xl p-3"
                            />

                            <input
                                name="slug"
                                value={form.slug}
                                onChange={handleChange}
                                placeholder="Slug"
                                className="w-full border rounded-xl p-3"
                            />

                            <textarea
                                rows={5}
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="w-full border rounded-xl p-3"
                            />

                        </div>

                    </div>

                    {/* PRODUCT IMAGES */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Product Images
                        </h3>

                        {/* Cover Image */}

                        <div className="mb-8">

                            <label className="block font-medium mb-2">
                                Cover Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleCoverImage}
                                className="w-full border rounded-xl p-3"
                            />

                            {form.image && (

                                <img
                                    src={typeof form.image === "string" ? form.image : form.image.url}
                                    alt="Cover"
                                    className="mt-4 w-40 h-40 object-cover rounded-xl border"
                                />

                            )}

                        </div>

                        {/* Gallery Images */}

                        <div>

                            <label className="block font-medium mb-2">
                                Gallery Images
                            </label>

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleGalleryImages}
                                className="w-full border rounded-xl p-3"
                            />

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

                                {form.images.map((image, index) => (

                                    <div
                                        key={index}
                                        className="relative"
                                    >

                                        <img
                                            src={typeof image === "string" ? image : image.url}
                                            className="w-full h-28 object-cover rounded-xl border"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeGalleryImage(index)}
                                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-600 text-white"
                                        >
                                            ×
                                        </button>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* CATEGORY */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Category Information
                        </h3>

                        <div className="grid md:grid-cols-3 gap-5">

                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="border rounded-xl p-3"
                            >
                                <option>Select Category</option>

                                {categories.map((cat) => (
                                    <option
                                        key={cat}
                                        value={cat}
                                    >
                                        {cat}
                                    </option>
                                ))}

                            </select>

                            <select
                                name="occasion"
                                value={form.occasion}
                                onChange={handleChange}
                                className="border rounded-xl p-3"
                            >
                                <option>Select Occasion</option>

                                {occasions.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                ))}

                            </select>

                            <select
                                name="flavour"
                                value={form.flavour}
                                onChange={handleChange}
                                className="border rounded-xl p-3"
                            >
                                <option>Select Flavour</option>

                                {flavours.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                ))}

                            </select>

                        </div>

                    </div>

                    {/* PRICING */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Pricing
                        </h3>

                        <div className="grid md:grid-cols-3 gap-5">

                            <input
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="border rounded-xl p-3"
                            />

                            <input
                                name="oldPrice"
                                value={form.oldPrice}
                                onChange={handleChange}
                                placeholder="Old Price"
                                className="border rounded-xl p-3"
                            />

                            <input
                                name="discount"
                                value={form.discount}
                                onChange={handleChange}
                                placeholder="Discount"
                                className="border rounded-xl p-3"
                            />

                        </div>

                    </div>

                    {/* INVENTORY */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Inventory
                        </h3>

                        <div className="grid md:grid-cols-3 gap-5">

                            <input
                                name="stock"
                                value={form.stock}
                                onChange={handleChange}
                                placeholder="Stock"
                                className="border rounded-xl p-3"
                            />

                            <input
                                name="sku"
                                value={form.sku}
                                onChange={handleChange}
                                placeholder="SKU"
                                className="border rounded-xl p-3"
                            />

                            <input
                                name="brand"
                                value={form.brand}
                                onChange={handleChange}
                                placeholder="Brand"
                                className="border rounded-xl p-3"
                            />

                        </div>

                    </div>

                    {/* RATING */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Rating
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <input
                                name="rating"
                                value={form.rating}
                                onChange={handleChange}
                                placeholder="Rating"
                                className="border rounded-xl p-3"
                            />

                            <input
                                name="reviews"
                                value={form.reviews}
                                onChange={handleChange}
                                placeholder="Reviews"
                                className="border rounded-xl p-3"
                            />

                        </div>

                    </div>

                    {/* TAGS */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Tags
                        </h3>

                        <div className="flex gap-3">

                            <input
                                value={tagInput}
                                onChange={(e) =>
                                    setTagInput(e.target.value)
                                }
                                className="flex-1 border rounded-xl p-3"
                            />

                            <button
                                onClick={addTag}
                                className="bg-[#922b6a] text-white px-5 rounded-xl"
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                        <div className="flex flex-wrap gap-3 mt-5">

                            {form.tags.map((tag, index) => (

                                <div
                                    key={index}
                                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full flex gap-2 items-center"
                                >

                                    {tag}

                                    <button
                                        onClick={() =>
                                            removeTag(index)
                                        }
                                    >
                                        ×
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* SWITCHES */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Product Status
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {[
                                ["featured", "Featured"],
                                ["chefsSelection", "Chef's Selection"],
                                ["luxuryBakes", "Luxury Bakes"],
                                ["exquisiteTreats", "Exquisite Treats"],
                                ["inStock", "In Stock"],
                            ].map(([key, label]) => (

                                <label
                                    key={key}
                                    className="flex items-center gap-3"
                                >

                                    <input
                                        type="checkbox"
                                        name={key}
                                        checked={form[key]}
                                        onChange={handleChange}
                                    />

                                    {label}

                                </label>

                            ))}

                        </div>

                    </div>


                    {/* SEO */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Search Engine Optimization (SEO)
                        </h3>

                        <div className="space-y-5">

                            <div>

                                <label className="block font-medium mb-2">
                                    SEO Title
                                </label>

                                <input
                                    name="seoTitle"
                                    value={form.seoTitle}
                                    onChange={handleChange}
                                    placeholder="Blue Buttercream Cake | L'Chaim Cakes"
                                    className="w-full border rounded-xl p-3"
                                />

                            </div>

                            <div>

                                <label className="block font-medium mb-2">
                                    Meta Description
                                </label>

                                <textarea
                                    rows={4}
                                    name="metaDescription"
                                    value={form.metaDescription}
                                    onChange={handleChange}
                                    className="w-full border rounded-xl p-3"
                                />

                            </div>

                            <div>

                                <label className="block font-medium mb-2">
                                    Keywords
                                </label>

                                <input
                                    name="keywords"
                                    value={form.keywords}
                                    onChange={handleChange}
                                    placeholder="Birthday Cake, Buttercream Cake, Lagos Cakes"
                                    className="w-full border rounded-xl p-3"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* FOOTER */}

                <div className="sticky bottom-0 bg-white border-t p-6 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="px-6 py-3 border rounded-xl"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-[#922b6a] text-white rounded-xl"
                    >
                        Save Product
                    </button>

                </div>

            </div>

        </div>
    );
}