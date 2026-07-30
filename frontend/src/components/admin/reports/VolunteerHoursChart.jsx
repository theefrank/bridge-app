import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function VolunteerHoursChart({
  volunteers,
}) {
  const data = [...volunteers]
    .sort((a, b) => b.hours - a.hours)
    .map((volunteer) => ({
      name: volunteer.name,
      hours: volunteer.hours,
    }));

  return (
    <div className="bridge-card">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          Volunteer Hours
        </h2>

        <p className="text-gray-500 mt-1">
          Hours contributed by each volunteer.
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
            />

            <XAxis
              type="number"
            />

            <YAxis
              type="category"
              dataKey="name"
              width={90}
            />

            <Tooltip />

            <Bar
              dataKey="hours"
              radius={[0, 8, 8, 0]}
              fill="#D08C60"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}