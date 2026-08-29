import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-16">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="border w-10 h-10 flex justify-center items-center rounded hover:bg-[#a8418b] hover:text-white"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (

        <button
          key={page}
          onClick={() =>
            setCurrentPage(page)
          }
          className={`w-10 h-10 rounded border

          ${
            page === currentPage
              ? "bg-[#a8418b] text-white border-[#a8418b]"
              : "hover:bg-gray-100"
          }
          `}
        >
          {page}
        </button>

      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="border w-10 h-10 flex justify-center items-center rounded hover:bg-[#a8418b] hover:text-white"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}