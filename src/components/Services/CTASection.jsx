
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function CateringSection() {
  return (
    <section
      className="
        bg-[#fff7fb]
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          sm:gap-12
          md:gap-14
          lg:gap-16
          items-center
        "
      >
        {/* ================= IMAGE ================= */}

        <div className="w-full">
          <img
            src="/catering3.jpg"
            alt="Indoor and outdoor catering"
            className="
              w-full
              h-64
              sm:h-80
              md:h-[400px]
              lg:h-[500px]
              object-cover
              rounded-xl
              sm:rounded-2xl
              shadow-xl
            "
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="w-full">

          <span
            className="
              inline-block
              uppercase
              tracking-[2px]
              sm:tracking-[3px]
              md:tracking-[4px]
              text-[#a8418b]
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            Catering Services
          </span>

          <h2
            className={`
              ${greatVibes.className}
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              mt-3
              sm:mt-4
              leading-tight
            `}
          >
            Indoor & Outdoor Catering
          </h2>

          <p
            className="
              mt-4
              sm:mt-5
              md:mt-6
              text-gray-600
              text-sm
              sm:text-base
              leading-6
              sm:leading-7
              md:leading-8
            "
          >
            Whether you're hosting an intimate indoor celebration or a large
            outdoor event, our catering team provides freshly prepared meals,
            delicious desserts, drinks and impeccable service tailored to your
            occasion.
          </p>

          {/* ================= SERVICES LIST ================= */}

          <ul
            className="
              mt-6
              sm:mt-7
              md:mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              sm:gap-4
              text-base
              sm:text-lg
            "
          >
            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              Weddings
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              Birthday Parties
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              Corporate Events
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              Outdoor Celebrations
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              School Functions
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#a8418b] font-bold">✓</span>
              Private Parties
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}

