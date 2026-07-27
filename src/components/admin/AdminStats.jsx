export default function AdminStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bridge-card"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stat.value}
              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}
            >
              {stat.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}