const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/roishikler/claude-office-skills/html2pptx-local.cjs');
const path = require('path');

async function previewSlide(slideFile, outputName) {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';

    const baseDir = '/Users/roishikler/MEGA/MBA/courses/1249241101 - Management of Information Systems/the_chair_project/outputs/mobilitypro-presentation';

    console.log(`Processing: ${slideFile}...`);
    await html2pptx(path.join(baseDir, slideFile), pptx);

    const outputPath = path.join(baseDir, `preview-${outputName}.pptx`);
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Preview saved to: ${outputPath}`);
}

const slideFile = process.argv[2] || 'slide1-cover-v3.html';
const outputName = process.argv[3] || 'slide1';
previewSlide(slideFile, outputName).catch(console.error);
