import DashboardLayout from "../../components/dashboard/DashboardLayout";
import RequestForm from "../../components/requests/RequestForm";

export default function CreateRequest() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Create Request
      </h1>

      <RequestForm />
    </DashboardLayout>
  );
}