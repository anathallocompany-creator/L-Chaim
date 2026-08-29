
export default function ServiceHero() {
  return (
    <section
      className="
        relative
        min-h-[280px]
        sm:min-h-[340px]
        md:min-h-[400px]
        lg:min-h-[460px]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        bg-no-repeat
        px-4
        sm:px-6
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
      style={{
        backgroundImage: "url('/hero1.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-auto
          text-center
          text-white
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
            leading-tight
            sm:leading-[0.95]
          "
        >
          Our Services
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
          <span>Home</span>
          <span className="mx-2 sm:mx-3">/</span>
          <span>Services</span>
        </p>
      </div>
    </section>
  );
}

