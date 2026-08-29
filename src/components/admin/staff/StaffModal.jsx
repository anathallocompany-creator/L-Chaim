"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const departments = [
    "Management",
    "Sales",
    "Production",
    "Delivery",
    "Kitchen",
    "Customer Service",
    "Finance",
    "Marketing",
];

const roles = [
    "Admin",
    "Manager",
    "Sales Representative",
    "Cake Decorator",
    "Baker",
    "Driver",
    "Customer Support",
    "Accountant",
];

const statuses = [
    "Active",
    "Inactive",
    "Suspended",
];

export default function StaffModal({
    open,
    staff,
    onClose,
    onSaved,
}) {
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState("/avatar1.png");
    const [imageFile, setImageFile] = useState(null);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        employeeId: "",
        department: "",
        role: "",
        salary: "",
        status: "Active",
        address: "",
        joinDate: "",
        image: "",
    });

    useEffect(() => {
        if (staff) {
            setForm({
                fullName: staff.fullName || "",
                email: staff.email || "",
                phone: staff.phone || "",
                employeeId: staff.employeeId || "",
                department: staff.department || "",
                role: staff.role || "",
                salary: staff.salary || "",
                status: staff.status || "Active",
                address: staff.address || "",
                joinDate: staff.joinDate
                    ? staff.joinDate.slice(0, 10)
                    : "",
                image: staff.photo?.url || "",
            });

            setImagePreview(
                staff.photo?.url || "/avatar1.png"
            );
        } else {
            setForm({
                fullName: "",
                email: "",
                phone: "",
                employeeId: "",
                department: "",
                role: "",
                salary: "",
                status: "Active",
                address: "",
                joinDate: "",
                image: "",
            });

            setImagePreview("/avatar1.png");
        }

        setImageFile(null);

    }, [staff]);


    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) return;

        setImageFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(file);
    }

    if (!open) return null;

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);

            let uploaded = null;   // 👈 Declare here

            if (imageFile) {
                const uploadData = new FormData();
                uploadData.append("file", imageFile);

                const upload = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadData,
                });

                uploaded = await upload.json();

                console.log("Cloudinary response:", uploaded);
            }

            const payload = {
                ...form,
                photo: uploaded
                    ? {
                        url: uploaded.url,
                        public_id: uploaded.public_id,
                    }
                    : {
                        url: staff?.photo?.url || "",
                        public_id: staff?.photo?.public_id || "",
                    },
            };

            const method = staff ? "PUT" : "POST";

            const url = staff
                ? `/api/staffs/${staff._id}`
                : "/api/staffs";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Something went wrong");
                return;
            }

            onSaved?.();
            onClose();

        } catch (err) {
            console.log(err);
            alert("Failed to save staff.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-[999] flex justify-center items-center p-6">

            <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[95vh] overflow-y-auto">

                {/* Header */}

                <div className="sticky top-0 bg-white border-b px-8 py-5 flex justify-between items-center">

                    <h2 className="text-2xl font-bold">
                        {staff ? "Edit Staff" : "Add Staff"}
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-8 space-y-6"
                >

                    <div className="flex justify-center mb-8">

                        <label className="cursor-pointer">

                            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-pink-200 hover:opacity-80 transition">

                                <Image
                                    src={imagePreview}
                                    alt="Staff"
                                    fill
                                    sizes="(max-width: 768px) 120px, 144px"
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">

                                    <span className="text-white font-semibold">
                                        Change Photo
                                    </span>

                                </div>

                            </div>

                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />

                        </label>

                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <Input
                            label="Full Name"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Employee ID"
                            name="employeeId"
                            value={form.employeeId}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            label="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />

                        <Select
                            label="Department"
                            name="department"
                            value={form.department}
                            onChange={handleChange}
                            options={departments}
                        />

                        <Select
                            label="Role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            options={roles}
                        />

                        <Input
                            label="Salary"
                            type="number"
                            name="salary"
                            value={form.salary}
                            onChange={handleChange}
                        />

                        <Select
                            label="Status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            options={statuses}
                        />

                        <Input
                            label="Join Date"
                            type="date"
                            name="joinDate"
                            value={form.joinDate}
                            onChange={handleChange}
                        />



                    </div>

                    <div>

                        <label className="block font-medium mb-2">
                            Address
                        </label>

                        <textarea
                            rows={4}
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                        />

                    </div>

                    <div className="flex justify-end gap-4 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 rounded-xl bg-[#922b6a] text-white"
                        >
                            {loading
                                ? "Saving..."
                                : staff
                                    ? "Update Staff"
                                    : "Create Staff"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

function Input({
    label,
    ...props
}) {
    return (
        <div>

            <label className="block font-medium mb-2">
                {label}
            </label>

            <input
                {...props}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
            />

        </div>
    );
}

function Select({
    label,
    options,
    ...props
}) {
    return (
        <div>

            <label className="block font-medium mb-2">
                {label}
            </label>

            <select
                {...props}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
            >
                <option value="">
                    Select {label}
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}

            </select>

        </div>
    );
}