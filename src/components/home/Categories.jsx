import {
  GraduationCap,
  Laptop,
  Briefcase,
  Heart,
  HandHelping,
  BookOpen,
} from "lucide-react";

const categories = [
  { name: "Education", icon: GraduationCap },
  { name: "Technology", icon: Laptop },
  { name: "Career", icon: Briefcase },
  { name: "Wellness", icon: Heart },
  { name: "Community", icon: HandHelping },
  { name: "Mentorship", icon: BookOpen },
];

export default function Categories() {
  return (
    <div className="bridge-card">
      <h2 className="text-3xl font-bold mb-8">
        Popular Categories
      </h2>

      <p className="text-gray-600 mb-8">
        Explore the most common ways community members seek and offer help.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="bg-[#F4F7F5] rounded-2xl p-5"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF1EB] flex items-center justify-center mb-4">
                <Icon
                  size={24}
                  className="text-[#D08C60]"
                />
              </div>

              <h3 className="font-semibold text-lg">
                {category.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}