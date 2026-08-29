"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


import {
    Mail,
    Lock,
    Eye,
    EyeOff,

} from "lucide-react";


export default function AdminLoginPage() {

    const router = useRouter();

    const [step, setStep] = useState(1);

    const [otp, setOtp] = useState("");

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    /* INPUT CHANGE */

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });

    };

    const sendOTP = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert("Verification code sent to your email.");

            setStep(2);

        } catch (err) {
            alert("Unable to send code.");
        }

        finally {
            setLoading(false);
        };
    };


    const verifyOTP = async () => {

        setLoading(true);

        try {

            const res = await fetch("/api/auth/verify-otp", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email: formData.email,
                    otp,
                }),
            });

            const data = await res.json();
            localStorage.setItem("adminToken", data.token);

            localStorage.setItem(
                "adminProfile",
                JSON.stringify(data.admin)
            );

            localStorage.setItem(
                "adminEmail",
                data.admin.email
            );

            localStorage.setItem(
                "adminRole",
                data.admin.role
            );

            if (!res.ok) {
                alert(data.message);
                return;
            }
            localStorage.setItem("adminToken", data.token);

            localStorage.setItem(
                "adminProfile",
                JSON.stringify(data.admin)
            );
            router.push("/admin");

        } catch {

            alert("Verification failed.");

        }

        finally {
            setLoading(false);
        }
    };


    const resendOTP = async () => {

        try {

            const res = await fetch("/api/auth/resend-otp", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email: formData.email,
                }),

            });

            const data = await res.json();

            alert(data.message);

        } catch {

            alert("Unable to resend code.");

        }

    };

    /* LOGIN */






    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (token) {
            router.push("/admin");
        }
    }, [router]);

    return (

        <div
            className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        p-6
        bg-cover
        bg-center
      "
            style={{
                backgroundImage:
                    "url('/banner1.jpg')",
            }}
        >

            {/* BLACK OVERLAY */}

            <div className="
        absolute
        inset-0
        bg-black/75
      " />

            {/* LOGIN CARD */}

            <div className="
        relative
        z-10
        w-full
        max-w-md
      ">

                <div className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          shadow-2xl
          overflow-hidden
          text-white
        ">

                    {/* HEADER */}

                    <div className="
            p-8
            text-center
          ">

                        <h1 className="
              text-4xl
              font-bold
            ">
                            Gadiel Admin
                        </h1>

                        <p className="
              text-gray-300
              mt-3
            ">
                            Secure Dashboard Access
                        </p>

                    </div>

                    {/* FORM */}

                    <form
                        onSubmit={step === 1 ? sendOTP : (e) => e.preventDefault()}
                        className="px-8 pb-8 space-y-5"
                    >

                        {step === 1 ? (

                            <>
                                {/* EMAIL */}

                                <div>

                                    <label className="block mb-2 text-sm text-gray-200">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />

                                        <input
                                            type="email"
                                            autoComplete="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="admin@gadiel.com"
                                            className="
                            w-full
                            bg-white/10
                            border
                            border-white/20
                            rounded-xl
                            pl-11
                            pr-4
                            py-3
                            text-white
                            placeholder:text-gray-400
                            outline-none
                            focus:ring-2
                            focus:ring-white
                        "
                                        />

                                    </div>

                                </div>

                                {/* PASSWORD */}

                                <div>

                                    <label className="block mb-2 text-sm text-gray-200">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <Lock
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="current-password"
                                            name="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            className="
                            w-full
                            bg-white/10
                            border
                            border-white/20
                            rounded-xl
                            pl-11
                            pr-12
                            py-3
                            text-white
                            placeholder:text-gray-400
                            outline-none
                            focus:ring-2
                            focus:ring-white
                        "
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                    w-full
                    bg-white
                    text-black
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-gray-200
                    transition
                "
                                >
                                    {loading
                                        ? "Sending..."
                                        : "Send Verification Code"}
                                </button>

                            </>

                        ) : (

                            <>
                                <div className="text-center">

                                    <h2 className="text-2xl font-bold">
                                        Verify Your Identity
                                    </h2>

                                    <p className="text-gray-300 mt-2">
                                        We've sent a 6-digit verification code to
                                    </p>

                                    <p className="font-semibold mt-1">
                                        {formData.email}
                                    </p>

                                </div>

                                <input
                                    type="number"
                                    inputMode="numeric"
                                    autoComplete="one-time-code"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="000000"
                                    className="
                    w-full
                    bg-white/10
                    border
                    border-white/20
                    rounded-xl
                    py-4
                    text-center
                    text-3xl
                    tracking-[12px]
                    outline-none
                    focus:ring-2
                    focus:ring-white
                "
                                />

                                <button
                                    type="button"
                                    onClick={verifyOTP}
                                    disabled={loading}
                                    className="
                    w-full
                    bg-white
                    text-black
                    py-3
                    rounded-xl
                    font-semibold
                "
                                >
                                    {loading
                                        ? "Verifying..."
                                        : "Verify & Login"}
                                </button>

                                <button
                                    type="button"
                                    onClick={resendOTP}
                                    className="
                    w-full
                    text-gray-300
                    hover:text-white
                    underline
                "
                                >
                                    Resend Verification Code
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="
                    w-full
                    text-sm
                    text-gray-400
                "
                                >
                                    ← Back
                                </button>
                            </>

                        )}

                    </form>

                </div>

            </div>


        </div>
    );
}