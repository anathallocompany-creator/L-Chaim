
"use client";

export default function DoubleBanner() {
  return (
    <section
      className="
        w-full
        px-4
        py-8
        sm:px-6
        sm:py-10
        md:py-12
        lg:px-8
        lg:py-16
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
          overflow-hidden
          rounded-2xl
          sm:rounded-3xl
        "
      >
        <img
          src="/cake-design.png"
          alt="L'Chaim Cakes and Sweets"
          className="
            block
            h-auto
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            hover:scale-105
          "
        />
      </div>
    </section>
  );
}

