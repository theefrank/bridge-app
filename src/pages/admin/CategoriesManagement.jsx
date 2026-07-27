import AdminSidebar from "../../components/admin/AdminSidebar";

export default function CategoriesManagement() {
  const categories = [
    "Education",
    "Technology",
    "Career",
    "Wellness",
    "Community",
    "Mentorship",
  ];

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Categories
          </h1>

          <button className="btn-primary">
            Add Category
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bridge-card flex justify-between items-center"
            >
              <span className="font-medium">
                {category}
              </span>

              <div className="flex gap-2">
                <button className="btn-secondary">
                  Edit
                </button>

                <button className="btn-outline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}