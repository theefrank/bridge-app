import { useState } from "react";

import { FileText } from "lucide-react";
import GenerateReportDialog from "./GenerateReportDialog";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const [dialogOpen, setDialogOpen] =
  useState(false);

  function generatePDF() {
  alert("PDF generation coming next.");
  }

  function generateCSV() {
  alert("CSV generation coming next.");
 }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

      <div>

        <h1 className="text-4xl font-bold text-gray-900">
          {greeting}, Admin
        </h1>

        <p className="mt-2 text-gray-600 text-lg">
          Here's what's happening across Bridge today.
        </p>

      </div>
    <button
    onClick={() =>
        setDialogOpen(true)
    }
    className="
        inline-flex items-center gap-2
        px-5 py-3
        rounded-xl
        bg-[#6B8F71]
        text-white
        font-medium
        shadow-sm
        hover:bg-[#5C7B62]
        transition
    "
    >
    <FileText size={18} />
    Generate Report
    </button>
    
    <GenerateReportDialog
    open={dialogOpen}
    onOpenChange={setDialogOpen}
    onGeneratePDF={generatePDF}
    onGenerateCSV={generateCSV}
    />     

    </div>
    
  );
}