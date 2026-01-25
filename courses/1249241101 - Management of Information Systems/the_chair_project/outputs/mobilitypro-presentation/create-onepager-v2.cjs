const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat, BorderStyle } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 36, bold: true, color: "2C2C2C", font: "Georgia" },
        paragraph: { spacing: { before: 0, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "87A96B", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 60 }, outlineLevel: 0 } },
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
      page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } }
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.TITLE,
        children: [new TextRun("MobilityPro Health")]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 160 },
        children: [new TextRun({ text: "Smart Autonomous Wheelchair for Elderly Mobility", italics: true, size: 20, color: "E07A5F" })]
      }),

      // The Problem Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Aging Crisis")] }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun("The Western world faces an unprecedented care gap. The population aged 65+ will "),
          new TextRun({ text: "double by 2050", bold: true }),
          new TextRun(", while the worker-to-retiree ratio is dropping from "),
          new TextRun({ text: "4:1 to 2:1", bold: true }),
          new TextRun(". Family sizes have "),
          new TextRun({ text: "declined 40%", bold: true }),
          new TextRun(" since 1970, leaving fewer relatives to provide care. Meanwhile, "),
          new TextRun({ text: "65 million people", bold: true }),
          new TextRun(" worldwide need wheelchairs, with traditional models creating total dependency on increasingly scarce caregivers.")
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "More seniors. Fewer caregivers. Smaller families. The care gap is widening.", italics: true, color: "E07A5F", size: 20 })]
      }),

      // Solution Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Our Solution")] }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        children: [
          new TextRun({ text: "AutoGlide", bold: true }),
          new TextRun(" (B2C) - Premium consumer wheelchair with full autonomous navigation, health monitoring, and family dashboard")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "VitalRide", bold: true }),
          new TextRun(" (B2B) - Healthcare facility solution with fleet management, vital monitoring, and EHR integration")
        ]
      }),

      // Technology & Data Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Technology and Data")] }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun("Our chairs use "),
          new TextRun({ text: "LiDAR and AI", bold: true }),
          new TextRun(" for autonomous navigation, "),
          new TextRun({ text: "UWB positioning", bold: true }),
          new TextRun(" for indoor accuracy, and "),
          new TextRun({ text: "Edge AI", bold: true }),
          new TextRun(" for on-device processing. We collect heart rate, respiratory rate, location, activity, and fall data to provide early health warnings and immediate emergency response. All data is HIPAA compliant with user consent controls.")
        ]
      }),

      // Business Model Section
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Business Model")] }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun("We operate a dual-channel strategy: "),
          new TextRun({ text: "B2B", bold: true }),
          new TextRun(" (nursing homes, hospitals, VA facilities) with hardware at $4,500-8,000/unit plus $99-299/month subscriptions, and "),
          new TextRun({ text: "B2C", bold: true }),
          new TextRun(" (seniors, families) with hardware at $5,500-9,500 plus $29-79/month CareConnect subscriptions. Year 3 revenue target: "),
          new TextRun({ text: "$8.65 million", bold: true }),
          new TextRun(".")
        ]
      }),

      // Market Opportunity
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Market Opportunity")] }),
      new Paragraph({
        children: [
          new TextRun("The smart chair market will reach "),
          new TextRun({ text: "$2.8 billion by 2034", bold: true }),
          new TextRun(" with "),
          new TextRun({ text: "10% CAGR", bold: true }),
          new TextRun(". We seek "),
          new TextRun({ text: "$4.5M Series A", bold: true }),
          new TextRun(" for FDA clearance, manufacturing, and market launch.")
        ]
      }),

      // Tagline
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 160 },
        children: [new TextRun({ text: "Independence. Dignity. Peace of Mind.", bold: true, italics: true, size: 24, color: "87A96B" })]
      }),
    ]
  }]
});

const outputPath = '/Users/roishikler/MEGA/MBA/courses/1249241101 - Management of Information Systems/the_chair_project/outputs/mobilitypro-presentation/MobilityPro-OnePager-v2.docx';
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`One-pager saved to: ${outputPath}`);
});
