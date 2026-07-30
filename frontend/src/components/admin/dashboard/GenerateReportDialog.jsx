import {
  FileText,
  Table,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import { downloadCSV } from "../../../utils/reportUtils";
import { downloadPDF } from "../../../utils/pdfReport";

export default function GenerateReportDialog({
  open,
  onOpenChange,
  users,
  volunteers,
  requests,
}) {

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md rounded-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Generate Report
          </DialogTitle>

          <DialogDescription>
            Choose the report format you would like to export.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-4 mt-6">

          <button
            onClick={() =>
            downloadPDF(
                users,
                volunteers,
                requests
            )
            }            
            
            className="w-full flex items-center gap-4 rounded-xl border p-5 hover:bg-[#FAF7F2] transition"
          >
            <FileText
              className="text-[#D08C60]"
            />

            <div className="text-left">

              <h3 className="font-semibold">
                PDF Report
              </h3>

              <p className="text-sm text-gray-500">
                Download a printable summary.
              </p>

            </div>

          </button>

          <button
            onClick={() => downloadCSV(users, volunteers, requests)}
            className="w-full flex items-center gap-4 rounded-xl border p-5 hover:bg-[#FAF7F2] transition"
          >
            <Table
              className="text-[#6B8F71]"
            />

            <div className="text-left">

              <h3 className="font-semibold">
                CSV Report
              </h3>

              <p className="text-sm text-gray-500">
                Export data for Excel.
              </p>

            </div>

          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}