"use client";

import { useEffect, useMemo, useState } from "react";

import ReviewToolbar from "@/components/admin/reviews/ReviewToolbar";
import ReviewTable from "@/components/admin/reviews/ReviewTable";
import ReviewModal from "@/components/admin/reviews/ReviewModal";
import ReviewDetailsModal from "@/components/admin/reviews/ReviewDetailsModal";
import DeleteReviewModal from "@/components/admin/reviews/DeleteReviewModal";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedReview, setSelectedReview] = useState(null);

  const [reviewOpen, setReviewOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  async function loadReviews() {
    try {
      setLoading(true);

      const res = await fetch("/api/reviews");

      const data = await res.json();

      setReviews(data.reviews || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function saveReview(form) {
    try {
      if (selectedReview) {
        await fetch(`/api/reviews/${selectedReview._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      }

      setReviewOpen(false);
      loadReviews();
    } catch (err) {
      console.log(err);
    }
  }

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        review.customer?.name
          ?.toLowerCase()
          .includes(keyword) ||
        review.product?.name
          ?.toLowerCase()
          .includes(keyword) ||
        review.comment
          ?.toLowerCase()
          .includes(keyword);

      let matchesStatus = true;

      if (status === "Approved")
        matchesStatus = review.approved;

      if (status === "Pending")
        matchesStatus = !review.approved;

      if (status === "Featured")
        matchesStatus = review.featured;

      return matchesSearch && matchesStatus;
    });
  }, [reviews, search, status]);

  return (
    <div className="space-y-8">

      <ReviewToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onAdd={() => {
          setSelectedReview(null);
          setReviewOpen(true);
        }}
      />

      {loading ? (
        <div className="bg-white rounded-2xl border p-20 text-center">
          Loading Reviews...
        </div>
      ) : (
        <ReviewTable
          reviews={filteredReviews}
          onView={(review) => {
            setSelectedReview(review);
            setDetailsOpen(true);
          }}
          onEdit={(review) => {
            setSelectedReview(review);
            setReviewOpen(true);
          }}
          onDelete={(review) => {
            setSelectedReview(review);
            setDeleteOpen(true);
          }}
        />
      )}

      <ReviewModal
        open={reviewOpen}
        review={selectedReview}
        onClose={() => setReviewOpen(false)}
        onSave={saveReview}
      />

      <ReviewDetailsModal
        open={detailsOpen}
        review={selectedReview}
        onClose={() => setDetailsOpen(false)}
      />

      <DeleteReviewModal
        open={deleteOpen}
        review={selectedReview}
        onClose={() => setDeleteOpen(false)}
        onDeleted={() => {
          setDeleteOpen(false);
          loadReviews();
        }}
      />
    </div>
  );
}