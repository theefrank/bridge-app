import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#D08C60",
  "#6B8F71",
  "#E76F51",
];

export default function RequestStatusChart({
  requests,
}) {
  const data = [
    {
      name: "Pending",
      value: requests.filter(
        (r) => r.status === "Pending"
      ).length,
    },
    {
      name: "Approved",
      value: requests.filter(
        (r) => r.status === "Approved"
      ).length,
    },
    {
      name: "Rejected",
      value: requests.filter(
        (r) => r.status === "Rejected"
      ).length,
    },
  ];

  return (
    <div className="bridge-card p-6">

      <h2 className="text-xl font-semibold mb-6">
        Request Status
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
            >

              {data.map((entry, index) => (

                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip
            contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow:
                "0 8px 24px rgba(0,0,0,.08)",
            }}
            />            

            <Legend
            verticalAlign="bottom"
            height={36}
            />            

          </PieChart>

        </ResponsiveContainer>

      </div>
      
        <div className="mt-6 space-y-3">

        {data.map((item, index) => (

            <div
            key={item.name}
            className="flex justify-between items-center"
            >

            <div className="flex items-center gap-3">

                <span
                className="w-3 h-3 rounded-full"
                style={{
                    backgroundColor:
                    COLORS[index],
                }}
                />

                <span>{item.name}</span>

            </div>

            <span className="font-semibold">
                {item.value}
            </span>

            </div>

        ))}

        </div>
    </div>
  );
}