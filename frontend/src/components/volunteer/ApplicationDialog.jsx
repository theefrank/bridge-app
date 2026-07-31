import { useState } from "react";
import api from "../../services/api";

export default function ApplicationDialog({ opportunity, onClose, onSubmitted }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!message.trim()) {
      setError("Tell the community why you are a good fit for this opportunity.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await api.post("/applications", {
        opportunity_id: opportunity.id,
        opportunity_title: opportunity.title,
        location: opportunity.location,
        message: message.trim(),
      });
      onSubmitted(response.data);
    } catch (requestError) {
      setError(requestError.response?.data?.error || "Could not submit application.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="presentation" onMouseDown={onClose}>
      <div className="bridge-card w-full max-w-lg" role="dialog" aria-modal="true" aria-labelledby="application-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 id="application-title" className="text-2xl font-bold">Apply for {opportunity.title}</h2>
            <p className="text-gray-600 mt-1">{opportunity.location}</p>
          </div>
          <button type="button" className="text-gray-500 text-2xl" onClick={onClose} aria-label="Close application dialog">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="block font-medium mb-2">Why are you interested?</span>
            <textarea
              rows="5"
              value={message}
              onChange={(event) => { setMessage(event.target.value); setError(""); }}
              className="bridge-input"
              placeholder="Share your experience and availability..."
              autoFocus
            />
          </label>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex justify-end gap-3">
            <button type="button" className="btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary disabled:opacity-60" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
