import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export function downloadPDF(
  users = [],
  volunteers = [],
  requests = []
) {
  const doc = new jsPDF();

  // -----------------------------------
  // Theme Colours
  // -----------------------------------

  const bridgeGreen = [107, 143, 113];
  const bridgeOrange = [208, 140, 96];
  const dark = [45, 45, 45];

  // -----------------------------------
  // Header
  // -----------------------------------

  doc.setFillColor(...bridgeGreen);
  doc.rect(0, 0, 210, 38, "F");

  doc.setTextColor(255);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("BRIDGE", 14, 16);

  doc.setFontSize(15);
  doc.setFont("helvetica", "normal");
  doc.text("Administrative Report", 14, 27);

  doc.setFontSize(11);

  doc.text(
    `Generated: ${new Date().toLocaleDateString("en-GB")}`,
    150,
    27
  );

  doc.setTextColor(...dark);

  function drawSectionTitle(title, color) {
  const pageHeight = doc.internal.pageSize.height;

  let y =
    doc.lastAutoTable?.finalY
      ? doc.lastAutoTable.finalY + 14
      : 132;

  // Reserve room for:
  // Banner (10)
  // Gap (5)
  // Table header (~15)
  if (y > pageHeight - 40) {
    doc.addPage();
    y = 20;
  }

  doc.setFillColor(...color);

  doc.roundedRect(
    14,
    y,
    182,
    10,
    3,
    3,
    "F"
  );

  doc.setTextColor(255);

  doc.setFontSize(15);

  doc.setFont("helvetica", "bold");

  doc.text(
    title,
    18,
    y + 7
  );

  doc.setTextColor(...dark);

  return y + 15;
}

  // -----------------------------------
  // Summary Panel
  // -----------------------------------

  doc.setFillColor(250, 241, 235);

  doc.roundedRect(
    14,
    48,
    182,
    72,
    4,
    4,
    "F"
  );

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");

  doc.text(
    "Executive Summary",
    20,
    60
  );

  // -----------------------------------
  // Statistics
  // -----------------------------------

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const rejected = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  const activeVolunteers = volunteers.filter(
    (volunteer) => volunteer.status === "Active"
  ).length;

  const pendingVolunteers = volunteers.filter(
    (volunteer) => volunteer.status === "Pending"
  ).length;

  const suspendedVolunteers = volunteers.filter(
    (volunteer) => volunteer.status === "Suspended"
  ).length;

  // -----------------------------------
  // Summary Cards
  // -----------------------------------

  const cards = [
    {
      title: "Users",
      value: users.length,
    },
    {
      title: "Volunteers",
      value: volunteers.length,
    },
    {
      title: "Requests",
      value: requests.length,
    },
  ];

  let x = 20;

  cards.forEach((card) => {
    doc.setFillColor(255);

    doc.roundedRect(
      x,
      68,
      48,
      26,
      3,
      3,
      "F"
    );

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
      card.title,
      x + 5,
      77
    );

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");

    doc.text(
      String(card.value),
      x + 5,
      89
    );

    x += 56;
  });

  doc.setFontSize(11);

  doc.setFont("helvetica", "normal");

  doc.text(
    `Approved Requests: ${approved}`,
    20,
    105
  );

  doc.text(
    `Pending Requests: ${pending}`,
    80,
    105
  );

  doc.text(
    `Rejected Requests: ${rejected}`,
    145,
    105
  );

  doc.text(
    `Active Volunteers: ${activeVolunteers}`,
    20,
    113
  );

  doc.text(
    `Pending Volunteers: ${pendingVolunteers}`,
    80,
    113
  );

  doc.text(
    `Suspended Volunteers: ${suspendedVolunteers}`,
    145,
    113
  );

  const usersStart = drawSectionTitle(
  "Registered Users",
  bridgeGreen
  );
  // ==========================
  // Users
  // ==========================

  autoTable(doc, {
  startY: usersStart,

  head: [[
    "Name",
    "Email",
    "Role",
    "Status",
    "Joined",
  ]],

  body: users.map((user) => [
    user.name,
    user.email,
    user.role,
    user.status,
    user.joined,
  ]),

  styles: {
    fontSize: 10,
    cellPadding: 3,
    lineColor: [225, 225, 225],
    lineWidth: 0.2,
  },

  headStyles: {
    fillColor: bridgeGreen,
    textColor: 255,
    fontStyle: "bold",
  },

  alternateRowStyles: {
    fillColor: [248, 248, 248],
  },
});

  // ==========================
  // Volunteers
  // ==========================

  const volunteerStart =
  drawSectionTitle(
    "Volunteers",
    bridgeOrange
  );

  autoTable(doc, {
  startY: volunteerStart,

  head: [[
    "Name",
    "Email",
    "Skill",
    "Hours",
    "Status",
  ]],

  body: volunteers.map((volunteer) => [
    volunteer.name,
    volunteer.email,
    volunteer.skill,
    volunteer.hours,
    volunteer.status,
  ]),

  styles: {
    fontSize: 10,
    cellPadding: 3,
    lineColor: [225, 225, 225],
    lineWidth: 0.2,
  },

  headStyles: {
    fillColor: bridgeOrange,
    textColor: 255,
    fontStyle: "bold",
  },

  alternateRowStyles: {
    fillColor: [248, 248, 248],
  },
});

  // ==========================
  // Requests
  // ==========================

const requestStart =
  drawSectionTitle(
    "Requests",
    bridgeGreen
  );

  autoTable(doc, {
  startY: requestStart,

  head: [[
    "Title",
    "Category",
    "Requested By",
    "Status",
  ]],

  body: requests.map((request) => [
    request.title,
    request.category,
    request.user,
    request.status,
  ]),

  styles: {
    fontSize: 10,
    cellPadding: 3,
    lineColor: [225, 225, 225],
    lineWidth: 0.2,
  },

  headStyles: {
    fillColor: bridgeGreen,
    textColor: 255,
    fontStyle: "bold",
  },

  alternateRowStyles: {
    fillColor: [248, 248, 248],
  },
});

  // ==========================
  // Footer
  // ==========================

const pageCount = doc.getNumberOfPages();

for (let page = 1; page <= pageCount; page++) {
  doc.setPage(page);

  doc.setDrawColor(220);

  doc.line(
    14,
    285,
    196,
    285
  );

  doc.setFontSize(9);

  doc.setTextColor(120);

  doc.text(
    "Bridge Community Platform",
    14,
    291
  );

  doc.text(
    "Confidential Administrative Report",
    70,
    291
  );

  doc.text(
    `Page ${page} of ${pageCount}`,
    170,
    291
  );
}
doc.save("bridge-admin-report.pdf");
}