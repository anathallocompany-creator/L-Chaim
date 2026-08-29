
"use client";

import { useEffect, useState } from "react";

import DeleteProductModal from "@/components/admin/products/DeleteProductModal";
import ProductToolbar from "@/components/admin/products/ProductToolbar";
import ProductsTable from "@/components/admin/products/ProductsTable";
import ProductModal from "@/components/admin/products/ProductModal";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [stockFilter, setStockFilter] = useState("All");

  const [sortBy, setSortBy] = useState("latest");

  const [openModal, setOpenModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);

  const [deleting, setDeleting] = useState(false);

  // =========================================================
  // FETCH PRODUCTS
  // =========================================================

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);

      const res = await fetch("/api/products");

      const data = await res.json();

      if (!res.ok) {
        console.error(
          "Failed to fetch products:",
          data
        );

        setProducts([]);
        return;
      }

      setProducts(
        Array.isArray(data) ? data : []
      );
    } catch (err) {
      console.error(
        "Error fetching products:",
        err
      );

      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  // =========================================================
  // ADD PRODUCT
  // =========================================================

  function handleAddProduct() {
    setSelectedProduct(null);
    setOpenModal(true);
  }

  // =========================================================
  // EDIT PRODUCT
  // =========================================================

  function handleEdit(product) {
    setSelectedProduct(product);
    setOpenModal(true);
  }

  // =========================================================
  // DELETE PRODUCT
  // =========================================================

  function handleDelete(product) {
    setSelectedProduct(product);
    setDeleteModal(true);
  }

  async function deleteProduct(product) {
    try {
      setDeleting(true);

      const res = await fetch(
        `/api/products/${product._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to delete product"
        );
      }

      setProducts((prev) =>
        prev.filter(
          (p) => p._id !== product._id
        )
      );

      setDeleteModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error(
        "Delete product error:",
        err
      );
    } finally {
      setDeleting(false);
    }
  }

  // =========================================================
  // FILTER PRODUCTS
  // =========================================================

  const filteredProducts = [
    ...(Array.isArray(products)
      ? products
      : []),
  ]
    .filter((product) => {
      const searchValue =
        search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        product.name
          ?.toLowerCase()
          .includes(searchValue) ||
        product.sku
          ?.toLowerCase()
          .includes(searchValue);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesStock =
        stockFilter === "All"
          ? true
          : stockFilter === "In Stock"
            ? product.inStock
            : !product.inStock;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStock
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceLow":
          return (
            Number(a.price || 0) -
            Number(b.price || 0)
          );

        case "priceHigh":
          return (
            Number(b.price || 0) -
            Number(a.price || 0)
          );

        case "rating":
          return (
            Number(b.rating || 0) -
            Number(a.rating || 0)
          );

        case "stock":
          return (
            Number(b.stock || 0) -
            Number(a.stock || 0)
          );

        case "name":
          return (a.name || "").localeCompare(
            b.name || ""
          );

        default:
          return 0;
      }
    });

  // =========================================================
  // SAVE PRODUCT
  // =========================================================

  async function handleSaveProduct(
    productData
  ) {
    try {
      let res;

      if (selectedProduct) {
        // Update existing product
        res = await fetch(
          `/api/products/${selectedProduct._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              productData
            ),
          }
        );
      } else {
        // Create new product
        res = await fetch(
          "/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              productData
            ),
          }
        );
      }

      if (!res.ok) {
        throw new Error(
          "Failed to save product"
        );
      }

      await fetchProducts();

      setOpenModal(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error(
        "Save product error:",
        error
      );
    }
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div
      className="
        w-full
        min-w-0
        space-y-5
        px-1
        sm:space-y-6
        md:space-y-8
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="min-w-0">
        <h1
          className="
            text-2xl
            font-bold
            text-gray-900
            sm:text-3xl
            lg:text-4xl
          "
        >
          Products
        </h1>

        <p
          className="
            mt-1
            max-w-2xl
            text-sm
            leading-6
            text-gray-500
            sm:mt-2
            sm:text-base
          "
        >
          Manage cakes, pastries, desserts
          and bakery products.
        </p>
      </div>

      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <div
        className="
          w-full
          min-w-0
          overflow-visible
        "
      >
        <ProductToolbar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          stockFilter={stockFilter}
          setStockFilter={setStockFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onAddProduct={
            handleAddProduct
          }
        />
      </div>

      {/* =====================================================
          PRODUCT COUNT
      ====================================================== */}

      {!loading && (
        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            text-sm
            text-gray-500
          "
        >
          <span>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </span>

          {(search ||
            category !== "All" ||
            stockFilter !== "All") && (
            <span className="text-xs sm:text-sm">
              Filtered results
            </span>
          )}
        </div>
      )}

      {/* =====================================================
          PRODUCTS TABLE
      ====================================================== */}

      <div
        className="
          w-full
          min-w-0
          overflow-hidden
          rounded-xl
          sm:rounded-2xl
        "
      >
        <ProductsTable
          products={filteredProducts}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* =====================================================
          PRODUCT MODAL
      ====================================================== */}

      <ProductModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />

      {/* =====================================================
          DELETE MODAL
      ====================================================== */}

      <DeleteProductModal
        open={deleteModal}
        product={selectedProduct}
        deleting={deleting}
        onClose={() => {
          if (!deleting) {
            setDeleteModal(false);
            setSelectedProduct(null);
          }
        }}
        onDelete={deleteProduct}
      />
    </div>
  );
}

