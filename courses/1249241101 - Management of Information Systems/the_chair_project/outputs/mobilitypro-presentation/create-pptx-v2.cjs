const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/roishikler/claude-office-skills/html2pptx-local.cjs');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.title = 'MobilityPro Health - Smart Wheelchair Investor Pitch';
    pptx.author = 'MobilityPro Health Team';
    pptx.company = 'MobilityPro Health';
    pptx.subject = 'Investor Presentation - Smart Autonomous Wheelchair';

    const baseDir = '/Users/roishikler/MEGA/MBA/courses/1249241101 - Management of Information Systems/the_chair_project/outputs/mobilitypro-presentation';

    // Slide 1: Cover
    console.log('Creating Slide 1: Cover...');
    await html2pptx(path.join(baseDir, 'slide1-cover.html'), pptx);

    // Slide 2: Combined Problem, Solution & Technology
    console.log('Creating Slide 2: Problem, Solution & Technology...');
    await html2pptx(path.join(baseDir, 'slide2-combined.html'), pptx);

    // Slide 3: Expanded Business Model
    console.log('Creating Slide 3: Business Model & Growth...');
    await html2pptx(path.join(baseDir, 'slide3-business-expanded.html'), pptx);

    // Save the presentation
    const outputPath = path.join(baseDir, 'MobilityPro-Health-Pitch-v2.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(console.error);
