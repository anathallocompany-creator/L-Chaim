"use client";

import { useRef, useState } from "react";
import { UploadCloud, X, Image as ImageIcon } from "lucide-react";

export default function ProductImageUploader({
  images,
  setImages,
}) {
  const inputRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  const handleFiles = (files) => {
    if (!files.length) return;

    const selected = Array.from(files);

    const previews = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previews]);
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const copy = [...prev];

      URL.revokeObjectURL(copy[index].preview);

      copy.splice(index, 1);

      return copy;
    });
  };

  return (
    <div className="space-y-5">

      {/* Upload Box */}

      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`
          border-2
          border-dashed
          rounded-xl
          cursor-pointer
          transition
          p-10
          text-center

          ${
            dragging
              ? "border-pink-600 bg-pink-50"
              : "border-gray-300 hover:border-pink-500"
          }
        `}
      >
        <UploadCloud
          size={45}
          className="mx-auto text-pink-600"
        />

        <h3 className="font-semibold mt-4">
          Drag & Drop Images Here
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          or click to upload
        </p>

        <input
          ref={inputRef}
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={(e) =>
            handleFiles(e.target.files)
          }
        />
      </div>

      {/* Preview */}

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden border shadow-sm"
            >
              <img
                src={img.preview}
                alt=""
                className="w-full h-40 object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="
                  absolute
                  top-2
                  right-2
                  w-8
                  h-8
                  rounded-full
                  bg-red-500
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-red-600
                "
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {images.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          <ImageIcon
            size={50}
            className="mx-auto mb-3"
          />

          No images selected
        </div>
      )}
    </div>
  );
}