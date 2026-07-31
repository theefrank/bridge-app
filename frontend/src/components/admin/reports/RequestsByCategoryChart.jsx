import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RequestsByCategoryChart({
  categories,
}) {
  return (
    <div className="bridge-card">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          Requests by Category
        </h2>

        <p className="text-gray-500 mt-1">
          Distribution of requests across categories.
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={categories}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="name"
            />

            <YAxis
              allowDecimals={false}
            />

            <Tooltip />

            <Bar
              dataKey="count"
              radius={[8, 8, 0, 0]}
              fill="#6B8F71"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}