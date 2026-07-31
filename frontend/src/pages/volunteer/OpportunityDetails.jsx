import {
  MapPin,
  CalendarDays,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplicationDialog from "../../components/volunteer/ApplicationDialog";

export default function OpportunityDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplicationDialog, setShowApplicationDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const opportunity = {
    id,
    title: "Mathematics Tutor",
    category: "Education",
    location: "Nairobi",
    commitment: "Every Saturday",
    description:
      "We are looking for volunteers passionate about helping high school students improve their mathematics skills. Volunteers will provide guidance, mentorship and academic support.",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <div className="bridge-card">

        <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] mb-5">
          {opportunity.category}
        </span>

        <h1 className="text-4xl font-bold">
          {opportunity.title}
        </h1>

        <div className="flex flex-wrap gap-6 mt-6 text-gray-600">

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {opportunity.location}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            {opportunity.commitment}
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={18} />
            Volunteer Role
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-4">
            Opportunity Description
          </h2>

          <p className="text-gray-600 leading-8">
            {opportunity.description}
          </p>

        </div>

        <button className="btn-primary mt-10" onClick={() => setShowApplicationDialog(true)} disabled={submitted}>
          {submitted ? "Application Submitted" : "Apply Now"}
        </button>

      </div>

      {showApplicationDialog && (
        <ApplicationDialog
          opportunity={opportunity}
          onClose={() => setShowApplicationDialog(false)}
          onSubmitted={() => {
            setSubmitted(true);
            navigate("/applications", { replace: true });
          }}
        />
      )}

    </div>
  );
}