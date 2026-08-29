
"use client";

import ChildrenCakesSection from "./ChildrenCakesSection";
import DessertsSection from "./DessertsSection";

export default function BackgroundLayer() {
    return (
        <section className="relative w-full">

            {/* Background */}
            <div
                className="
                    fixed
                    inset-0
                    -z-10
                    h-[280px]
                    sm:h-[340px]
                    md:h-[400px]
                    lg:h-[500px]
                "
            >
                <img
                    src="/under.png"
                    alt="Banner"
                    className="
                        w-full
                        h-full
                        object-cover
                        object-center
                    "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Spacer */}
            <div
                className="
                    h-[280px]
                    sm:h-[340px]
                    md:h-[400px]
                    lg:h-[500px]
                "
            />

            {/* White Content */}
            <div
                className="
                    relative
                    z-10
                    bg-white
                    rounded-t-[24px]
                    sm:rounded-t-[30px]
                    md:rounded-t-[40px]
                    overflow-hidden
                "
            >
                <DessertsSection />

                <ChildrenCakesSection />
            </div>

        </section>
    );
}

