import RequestForm from "../../components/requests/RequestForm";

export default function CreateRequest() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Create Request
      </h1>

      <RequestForm />
    </div>
  );
}