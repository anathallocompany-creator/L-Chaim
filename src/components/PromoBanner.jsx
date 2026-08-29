
"use client";

export default function PromoBanner() {
  return (
    <section
      className="
        w-full
        max-w-7xl
        mx-auto
        px-3
        sm:px-4
        md:px-6
        lg:px-8
        py-6
        sm:py-8
        md:py-10
        lg:py-16
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          sm:rounded-2xl
          md:rounded-3xl
          bg-[#1b0d0d]
          h-[220px]
          sm:h-[280px]
          md:h-[360px]
          lg:h-[440px]
          xl:h-[520px]
          flex
          items-center
        "
      >
        {/* Background Image */}
        <img
          src="/banner-cake.png"
          alt="Chocolate Cake"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />
      </div>
    </section>
  );
}

