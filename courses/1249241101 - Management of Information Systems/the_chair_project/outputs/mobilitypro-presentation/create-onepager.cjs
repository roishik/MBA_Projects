const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat, BorderStyle } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } }, // 11pt default
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 36, bold: true, color: "2C2C2C", font: "Georgia" },
        paragraph: { spacing: { before: 0, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "87A96B", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 0 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 180 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } } // 0.5 inch margins
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.TITLE,
        children: [new TextRun("MobilityPro Health")]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "Smart Autonomous Wheelchair for Elderly Mobility", italics: true, size: 20, color: "E07A5F" })]
      }),

      // Company Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Company Overview")] }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("MobilityPro Health transforms Comfy Chairs Ltd. into a healthcare technology innovator. We develop smart autonomous wheelchairs that restore independence and dignity to elderly users while providing peace of mind to caregivers and families.")]
      }),

      // Product Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Our Products")] }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [
          new TextRun({ text: "AutoGlide", bold: true }),
          new TextRun(" - Premium consumer wheelchair with full autonomous navigation")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "VitalRide", bold: true }),
          new TextRun(" - Healthcare facility solution focused on vital monitoring and fleet management")
        ]
      }),

      // Data Collection Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Data Collection")] }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun("Our chairs collect the following data to enhance user safety and experience:")]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [
          new TextRun({ text: "Heart Rate & Respiratory Rate", bold: true }),
          new TextRun(" - Early detection of cardiac and breathing issues")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [
          new TextRun({ text: "Location & Activity", bold: true }),
          new TextRun(" - Navigation optimization and mobility wellness tracking")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Falls & Emergencies", bold: true }),
          new TextRun(" - Immediate caregiver alerts and emergency response")
        ]
      }),

      // Business Model Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Business Model")] }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun("We operate a dual-channel strategy combining hardware sales with recurring subscription revenue:")]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [
          new TextRun({ text: "B2B Channel", bold: true }),
          new TextRun(" - Nursing homes, hospitals, and rehabilitation centers purchasing fleet solutions with management subscriptions")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "B2C Channel", bold: true }),
          new TextRun(" - Direct sales to seniors and families with CareConnect subscription for monitoring and telehealth")
        ]
      }),

      // Market Opportunity
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Market Opportunity")] }),
      new Paragraph({
        children: [
          new TextRun("With "),
          new TextRun({ text: "65 million people", bold: true }),
          new TextRun(" worldwide needing wheelchairs and "),
          new TextRun({ text: "22% projected growth", bold: true }),
          new TextRun(" over the next decade, the smart mobility market represents a $2.8 billion opportunity by 2034. Our Year 3 revenue target is "),
          new TextRun({ text: "$8.65 million", bold: true }),
          new TextRun(".")
        ]
      }),

      // Tagline
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 240 },
        children: [new TextRun({ text: "Independence. Dignity. Peace of Mind.", bold: true, italics: true, size: 24, color: "87A96B" })]
      }),
    ]
  }]
});

const outputPath = '/Users/roishikler/MEGA/MBA/courses/1249241101 - Management of Information Systems/the_chair_project/outputs/mobilitypro-presentation/MobilityPro-OnePager.docx';
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`One-pager saved to: ${outputPath}`);
});
