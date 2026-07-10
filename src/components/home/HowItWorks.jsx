import { FileText, Users, Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="bridge-card">
      <h2 className="text-3xl font-bold mb-8">
        How Bridge Works
      </h2>

      <p className="text-gray-600 mb-8">
        Bridge connects people seeking support with volunteers and community
        members who are ready to help.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#F4F7F5] p-8 rounded-2xl">
          <FileText size={32} className="text-[#D08C60] mb-4" />
          <h3 className="font-semibold mb-2">Create a Request</h3>
          <p className="text-sm text-gray-600">
            Share what help you need from the community.
          </p>
        </div>

        <div className="bg-[#F4F7F5] p-8 rounded-2xl">
          <Users size={32} className="text-[#D08C60] mb-4" />
          <h3 className="font-semibold mb-2">Connect</h3>
          <p className="text-sm text-gray-600">
            Volunteers discover your request and offer support.
          </p>
        </div>

        <div className="bg-[#F4F7F5] p-8 rounded-2xl">
          <Sparkles size={32} className="text-[#D08C60] mb-4" />
          <h3 className="font-semibold mb-2">Make Impact</h3>
          <p className="text-sm text-gray-600">
            Build meaningful connections and strengthen communities.
          </p>
        </div>
      </div>
    </div>
  );
}