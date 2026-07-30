export default function PopularCategories({ categories }) {
  // Find the highest request count for calculating progress bar widths
  const maxCount = Math.max(
    ...categories.map((category) => category.count),
    1
  );

  return (
    <div className="bridge-card">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          Popular Categories
        </h2>

        <p className="text-gray-500 mt-1">
          Requests submitted by category
        </p>

      </div>

      <div className="space-y-6">

        {categories.map((category) => (

          <div key={category.name}>

            <div className="flex justify-between items-center mb-2">

              <span className="font-medium">
                {category.name}
              </span>

              <span className="text-gray-600">
                {category.count}
              </span>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

              <div
                className="h-full bg-[#6B8F71] rounded-full transition-all duration-500"
                style={{
                  width: `${(category.count / maxCount) * 100}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}