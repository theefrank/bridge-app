export default function CreateRequest() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted!");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-3xl mx-auto bridge-card">
        <h1 className="text-3xl font-bold mb-6">
          Create Request
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Request Title"
            className="bridge-input"
          />

          <select className="bridge-input">
            <option>Education</option>
            <option>Technology</option>
            <option>Career</option>
            <option>Wellness</option>
            <option>Community</option>
            <option>Mentorship</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe the help you need"
            className="bridge-input"
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}