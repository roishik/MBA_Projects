const { Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, HeadingLevel, PageNumber, PageBreak, LevelFormat } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "333333", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "444444", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Margin Call Scene 45 Analysis", italics: true, size: 20, color: "666666" })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }), new TextRun({ text: " of ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })]
      })] })
    },
    children: [
      // TITLE PAGE
      new Paragraph({ spacing: { before: 2000 } }),
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Leadership and Influence in Organizational Crisis")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400, after: 400 }, children: [new TextRun({ text: "A Multi-Theoretical Analysis of Scene 45 from \"Margin Call\" (2011)", size: 28, italics: true })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 800 }, children: [new TextRun({ text: "Management and Networking Course", size: 24 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 }, children: [new TextRun({ text: "MBA Program", size: 24 })] }),

      // PAGE BREAK - INTRODUCTION
      new Paragraph({ children: [new PageBreak()] }),

      // INTRODUCTION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Introduction: Film Context and Scene Overview")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("\"Margin Call\" (2011) depicts 24 hours at an investment bank during the early stages of the 2008 financial crisis. The film begins with mass layoffs, including Eric Dale, a risk management officer who was working on analysis showing the firm's exposure to toxic mortgage-backed securities exceeds safe parameters.")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Scene 45, set in the CEO's executive boardroom at approximately 4:00 AM, represents the film's climactic decision-making moment. CEO John Tuld has been summoned by helicopter after 27-year-old analyst Peter Sullivan discovered that the firm holds $1.215 trillion in toxic mortgage-backed securities. The exposure is catastrophic: if assets decline by merely 25%, the losses would exceed the company's entire market capitalization.")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The scene's central conflict involves Tuld's determination to execute a \"fire sale\" of all toxic assets before the market opens, and the resistance he faces from Sam Rogers, a 34-year veteran who objects on ethical grounds. Rogers argues that the firm would be \"selling something with no value\" to counterparties who trust them, permanently destroying client relationships and potentially the market itself.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Key Characters")] }),

      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "John Tuld (CEO): ", bold: true }), new TextRun("Ultimate decision-maker who built the firm over decades. Philosophy: \"Be first, be smarter, or cheat.\" Arrived by helicopter at 4 AM.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Sam Rogers: ", bold: true }), new TextRun("Senior executive with 34 years at the firm. Manages the trading floor. Raises ethical objections to the fire sale plan.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Jared Cohen: ", bold: true }), new TextRun("Head of Fixed Income Securities. First to propose \"sell it all today.\" Politically savvy, focused on career survival.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Sarah Robertson: ", bold: true }), new TextRun("Senior executive implicated in risk management failures. Later becomes the scapegoat.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Peter Sullivan: ", bold: true }), new TextRun("27-year-old risk analyst with PhD from MIT. Former rocket scientist who discovered the firm's catastrophic exposure.")] }),

      new Paragraph({ spacing: { after: 200, before: 200 }, children: [new TextRun("This document applies five distinct management theories to analyze the leadership dynamics, influence tactics, and ethical dimensions of this pivotal scene.")] }),

      // PAGE BREAK - ANALYSIS 1
      new Paragraph({ children: [new PageBreak()] }),

      // ANALYSIS 1: CIALDINI
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Analysis 1: Cialdini's Principles of Persuasion")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Robert Cialdini's seminal framework identifies six fundamental principles that explain how people are influenced: reciprocity, commitment and consistency, social proof, authority, liking, and scarcity. Scene 45 demonstrates Tuld's masterful deployment of multiple principles simultaneously to overcome resistance and secure compliance.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Authority: The Foundation of Tuld's Influence")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld's positional authority permeates every interaction. His arrival by helicopter at 4 AM signals importance and gravity. The physical arrangement with Tuld at the head of the table visually reinforces hierarchy. When Sam raises ethical objections, Tuld leverages his position to reframe: \"We are selling to willing buyers at the current fair market price.\" This definitional authority effectively closes the ethical discussion.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld also instrumentalizes Peter Sullivan's expert authority. Peter's MIT credentials and rocket scientist background represent credible expertise. By having the discovery come from a technical expert rather than a self-interested executive, Tuld gains legitimacy for subsequent decisions.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Scarcity: Manufacturing Urgency")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld's repeated use of \"This is it\" creates temporal pressure that forecloses alternatives. His statement that \"the music appears to be about to stop\" dramatizes the constraint. The opportunity to be \"first\" out of collapsing positions is presented as a scarce resource that must be seized immediately.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("This manufactured urgency eliminates the possibility of deliberation. Sam's objections about destroying relationships are dismissed not because they lack merit, but because the scarcity framing positions delay as existentially dangerous.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Commitment and Consistency: The Hypothetical Trap")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("When Tuld asks Sam \"If I made you... how would you do it?\", the question is framed as hypothetical. However, by articulating the logistics\u2014calling traders early, offering bonuses, conducting the fire sale\u2014Sam psychologically invests in the plan. This creates the \"foot in the door\" effect: having described the plan in detail, Sam faces cognitive pressure to maintain consistency between his statements and actions.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Sam's public articulation before assembled executives increases the commitment's binding power. Commitments made publicly are more difficult to abandon because consistency pressures operate both internally and externally.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Social Proof: The Silent Coalition")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Throughout Sam's objections, the assembled executives remain largely silent. Their silence constitutes implicit endorsement of Tuld's position. When Sam argues that the fire sale is unethical, no voice joins his protest. The social proof of the silent majority signals that his objections are outliers.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Notably, Jared Cohen\u2014not Tuld\u2014first proposes \"Sell it all today.\" This allows Tuld to adopt a proposal that emerges from the group rather than imposing it unilaterally, making his acceptance appear responsive rather than directive.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Liking and Reciprocity")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld employs strategic self-deprecation to generate liking. His request that Peter explain \"as you might to a young child or a golden retriever\" and his claim that \"I didn't get here on my brains\" disarms the nervous analyst, extracting more honest information than Peter might otherwise offer to an intimidating superior.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Reciprocity operates through implied future compensation. Those who comply with Tuld's directive are positioned to survive the coming crisis. The bonus structure\u201470% of annual salary for completing the fire sale\u2014ensures trader compliance through immediate reward.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Effectiveness Assessment")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld's deployment of Cialdini's principles is remarkably effective within the immediate context. However, the long-term consequences\u2014destroyed client relationships, market damage, moral injury to employees\u2014suggest that tactical effectiveness and ethical leadership are not synonymous. Tuld wins the immediate battle through masterful influence but may lose the larger war for organizational legitimacy and trust.")] }),

      // PAGE BREAK - ANALYSIS 2
      new Paragraph({ children: [new PageBreak()] }),

      // ANALYSIS 2: YUKL
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Analysis 2: Yukl's Influence Tactics")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Gary Yukl's framework categorizes influence tactics into nine approaches: rational persuasion, legitimating, pressure, consultation, exchange, coalition, inspirational appeal, personal appeal, and ingratiation. Critically, effectiveness varies depending on whether influence flows upward, downward, or laterally.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Downward Influence: Tuld's Multi-Tactic Approach")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Influence on Peter Sullivan")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld's interaction with Peter demonstrates ingratiation combined with strategic self-deprecation. By positioning himself as intellectually subordinate to the MIT-trained analyst, Tuld reduces power distance that might otherwise intimidate Peter into providing incomplete information. He further employs consultation by genuinely seeking Peter's expert assessment, acknowledging expertise and creating psychological safety for honest disclosure.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Influence on Sam Rogers")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The most complex influence dynamic occurs between Tuld and Sam. First, Tuld employs rational persuasion through reframing\u2014when Sam characterizes the plan as selling worthless assets, Tuld counters by emphasizing voluntary transactions between parties. When rational persuasion fails against Sam's value-based resistance, Tuld escalates to legitimating tactics, invoking his formal CEO authority with \"This is it, Sam, this is it!\"")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Recognizing limitations of pure authority, Tuld shifts to pressure tactics. By asking \"If I made you... how would you do it?\", he frames the fire sale as inevitable reality. Finally, Tuld deploys exchange tactics in a subsequent private conversation, offering Sam significant financial compensation to lead the fire sale personally.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Coalition Tactics")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The boardroom composition itself represents coalition building. Legal counsel's confirmation that the fire sale is legal\u2014\"They can slow you down but it's yours to sell\"\u2014provides legitimacy from an independent expert source. The silent presence of senior leaders signals organizational consensus and isolates Sam as the sole voice of dissent.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Lateral Influence: Jared Cohen and Sarah Robertson")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The lateral dynamics between Jared and Sarah illustrate competitive rather than collaborative peer relationships. Jared employs coalition and legitimating tactics in his positioning, establishing himself as the voice of transparency before Tuld's arrival. Sarah becomes increasingly defensive, aware that one of them will likely be scapegoated. This demonstrates that Yukl's framework illuminates defensive positioning and blame avoidance in organizational politics.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Upward Influence: Peter Sullivan's Presentation")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Peter's explanation represents textbook upward influence through rational persuasion. Despite his junior status, Peter must convince the CEO of an existential threat. His approach emphasizes factual evidence and logical argumentation without emotional embellishment. He avoids tactics inappropriate for upward influence\u2014pressure, legitimating, or coalition\u2014demonstrating sophisticated understanding of influence direction constraints.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Key Findings")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Rational persuasion succeeded in establishing shared situational understanding but failed to overcome value-based resistance.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Multiple tactics in combination proved more effective than single tactics.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Position power amplified tactic effectiveness significantly.")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Crisis context elevated pressure and urgency framing, making pressure tactics appear necessary rather than coercive.")] }),

      // PAGE BREAK - ANALYSIS 3
      new Paragraph({ children: [new PageBreak()] }),

      // ANALYSIS 3: TRANSFORMATIONAL LEADERSHIP
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Analysis 3: Transformational Leadership")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Bass and Riggio define transformational leadership as a style in which leaders inspire followers to transcend self-interest for the collective good. The framework distinguishes transformational leaders through four components: Idealized Influence (charisma), Inspirational Motivation, Intellectual Stimulation, and Individualized Consideration.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Idealized Influence (Charisma)")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld demonstrates several elements of idealized influence. His dramatic helicopter arrival signals commitment and urgency. When he enters, executives immediately orient toward him, deferring without question. However, Tuld's charisma operates through domination rather than inspiration. His self-deprecation functions as strategic positioning rather than authentic humility.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Critically, Tuld fails the ethical dimension essential to idealized influence. His \"be first, be smarter, or cheat\" philosophy explicitly frames ethics as instrumental rather than intrinsic. While he claims \"I don't cheat,\" his decision to execute a fire sale\u2014selling assets he knows are becoming worthless to unsuspecting counterparties\u2014represents deception that contradicts the moral role modeling transformational leaders should embody.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Inspirational Motivation")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld demonstrates inspirational motivation through vivid, emotionally resonant framing. His metaphor that \"the music appears to be about to stop\" transforms complex financial data into an existential narrative that galvanizes action. However, the \"vision\" Tuld articulates is fundamentally self-preserving rather than collectively elevating. Bass and Riggio describe transformational visions as inspiring followers toward higher purposes; Tuld's vision motivates through fear and self-interest rather than aspiration.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Intellectual Stimulation")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld demonstrates selective intellectual stimulation. His decision to bypass Jared Cohen and speak directly with Peter Sullivan represents openness to information from unconventional sources. However, Tuld shuts down intellectual stimulation when it challenges his preferred course. When Sam raises ethical objections, Tuld dismisses rather than engages: \"We are selling to willing buyers at the current fair market price.\" True intellectual stimulation would involve exploring Sam's objections rather than overriding them.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Individualized Consideration")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld shows awareness of individual needs but instrumentalizes rather than develops them. His request to speak privately with Sam acknowledges Sam's unique position, but the subsequent conversation uses Sam's financial vulnerability to secure compliance rather than address his legitimate ethical concerns. This transactional deployment contrasts sharply with the mentorship orientation Bass and Riggio describe.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Sam Rogers: A Contrasting Style")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Sam presents a notable counterpoint. Where Tuld prioritizes institutional survival and personal legacy, Sam demonstrates concern for relationships and ethical integrity. His objection that traders \"are selling something they know has no value\" reflects attention to moral elevation\u2014a hallmark of authentic transformational leadership. His concern for \"his guys\" demonstrates follower-centered attention that transcends instrumental calculation.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Pseudo-Transformational Leadership")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Bass and Riggio distinguish between \"authentic transformational leadership,\" grounded in ethical values, and \"pseudo-transformational leadership,\" which uses transformational techniques for self-serving or immoral ends. Tuld represents pseudo-transformational leadership: his charisma attracts compliance rather than commitment; his vision preserves institutional and personal advantage rather than elevating stakeholders; his intellectual stimulation operates selectively; and his individualized consideration instrumentalizes rather than develops followers.")] }),

      // PAGE BREAK - ANALYSIS 4
      new Paragraph({ children: [new PageBreak()] }),

      // ANALYSIS 4: CRISIS LEADERSHIP
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Analysis 4: Crisis Leadership (Kotter and Nohria)")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Kotter's eight-step model for leading change and Nohria's framework for responding to unforeseen events provide valuable lenses for analyzing Tuld's crisis response. The central question: Does Tuld's response represent effective leadership under extreme conditions, or does the compression of deliberation into a single 4 AM meeting represent reckless prioritization of speed over ethics?")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Creating and Leveraging Urgency")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Kotter identifies establishing urgency as essential to any change effort. In Scene 45, the crisis itself has already generated urgency; Tuld's challenge becomes channeling rather than creating it. His helicopter arrival signals seriousness. His theatrical pause at the window\u2014noting that the music is about to stop and he hears only silence\u2014demonstrates that he personally grasps severity while ensuring others in the room fully register the gravity.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Importantly, Tuld channels urgency toward action rather than paralysis. His immediate pivot to asking what can be done transforms energy from shock to problem-solving\u2014aligning with Kotter's observation that urgency must be directed toward change rather than allowed to generate panic.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The Compressed Timeline")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Kotter's model assumes organizational change unfolds over extended periods. Scene 45 presents the remarkable spectacle of Tuld executing nearly all eight steps within a single emergency meeting. Urgency exists from the outset. The guiding coalition is physically assembled. The vision emerges quickly. Communication occurs through direct dialogue. Obstacle removal happens in real-time. Only the final steps\u2014building on change and anchoring in culture\u2014cannot be accomplished in the meeting itself.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("This raises fundamental questions about applying planned change models to crisis contexts. The existential nature of the crisis may justify compressed execution. When an organization faces imminent collapse, the luxury of sequential, deliberate change processes disappears.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Information Gathering (Nohria's Framework)")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Nohria emphasizes that effective crisis response begins with rapid but thorough information gathering. Tuld's famous request that Peter explain \"as you might to a young child or a golden retriever\" serves strategic purposes: it forces translation of complex models into plain language, puts the analyst at ease, and may elicit more candid assessments. Notably, Tuld goes directly to the information source, bypassing intermediate managers who might sanitize reports.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The Role of the Guiding Coalition")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Kotter argues that successful change requires a coalition with enough power to lead the effort. Tuld has assembled precisely such a coalition: Jared Cohen for operational knowledge, Sam Rogers for trading floor authority, legal counsel for regulatory confirmation, Peter Sullivan for technical justification. However, the coalition is not truly collaborative\u2014Tuld has already determined his course of action. The coalition validates and executes rather than genuinely deliberates.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Removing Obstacles: Sam's Resistance")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Sam represents the primary obstacle, raising ethical objections that articulate what others may think but dare not say. Tuld's approach reveals his leadership style under pressure: initial rational persuasion, escalating to legitimating assertion (\"This is it, Sam, this is it!\"), and finally private negotiation combining personal appeals with exchange tactics. Tuld needs Sam not merely to comply but to actively lead execution with conviction.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Critique: Speed vs. Ethics")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The central tension concerns whether crisis conditions justify compressing ethical deliberation alongside operational processes. Tuld's approach prioritizes speed above all else. From one perspective, this is defensible: the toxic assets will lose value regardless of whether the firm acts; the only question is who bears the loss.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("However, this ignores distributional consequences. By acting first, Tuld's firm transfers catastrophic losses to counterparties lacking information to protect themselves. The fire sale will, by Tuld's own acknowledgment, devastate the market and destroy relationships. Sam's objection identifies a genuine ethical violation that speed does not excuse. The crisis framing forecloses consideration of alternatives\u2014perhaps coordinated responses with regulators or other firms that might distribute losses more equitably.")] }),

      // PAGE BREAK - ANALYSIS 5
      new Paragraph({ children: [new PageBreak()] }),

      // ANALYSIS 5: LEVEL 5 LEADERSHIP
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Analysis 5: Level 5 Leadership (Collins)")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Jim Collins' research on organizational greatness identified a paradoxical leadership archetype: the Level 5 leader, who combines extreme personal humility with intense professional will. Collins' framework presents leadership as a five-level hierarchy, from Highly Capable Individual (Level 1) through the Executive who builds enduring greatness through humility and fierce resolve (Level 5).")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Where Does Tuld Fall on the Hierarchy?")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld unquestionably demonstrates capabilities at Levels 1 through 4. His arrival by helicopter demonstrates commitment. His demand for plain English explanations reveals sophisticated communication instincts. His immediate pivot from problem identification to solution generation shows strategic thinking under pressure. At Level 4, Tuld demonstrates capacity to catalyze commitment and drive high performance\u2014his \"be first, be smarter, or cheat\" philosophy articulates a clear competitive vision.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("However, Level 5 requires something fundamentally different: ambition channeled primarily toward institutional success rather than personal aggrandizement, combined with humility that manifests in how leaders handle success and failure. Tuld's stated philosophy centers on being \"first\" rather than building enduring organizational capability. His approach prioritizes immediate survival over the long-term relationships, reputation, and market integrity that would characterize Level 5 institutional thinking.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The Absence of Humility")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Collins describes Level 5 leaders as possessing compelling modesty, often deflecting credit and shunning attention. Tuld's self-deprecating remark\u2014\"I didn't get here on my brains\"\u2014might appear to reflect humility, but closer examination reveals strategic positioning rather than genuine modesty. The self-deprecation serves tactical purposes: putting Peter at ease and creating an environment for honest information flow. The difference between genuine humility and strategic self-deprecation lies in motivation.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Moreover, when Sam challenges the ethics of the fire sale, Tuld's response escalates from patient explanation to forceful assertion. His statement \"I'm here to guess what the music is gonna do a week, month, a year from now\" positions himself as uniquely capable of reading market conditions\u2014hardly a humble self-assessment.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Professional Will Without Ethical Constraints")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Level 5 leaders demonstrate \"unwavering resolve to do whatever must be done to produce the best long-term results.\" The key phrase is \"long-term.\" Tuld demonstrates intense professional will\u2014making difficult decisions rapidly and committing to execution without hesitation. But his will serves short-term survival at the expense of long-term institutional integrity.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The fire sale Tuld authorizes will devastate the market and destroy relationships with counterparties. Sam's objection cuts to the heart: \"You are selling something you know has no value.\" Tuld's response reframes rather than refutes. Collins emphasizes that enduring companies build rather than destroy institutional capability; Tuld's response demonstrates urgency without orientation toward enduring success.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The \"Window and Mirror\" Test")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Collins introduces the \"window and mirror\" concept as diagnostic for Level 5 leadership. Level 5 leaders look out the window to attribute success to factors outside themselves; when facing failure, they look in the mirror, accepting personal responsibility rather than blaming external factors.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Tuld's behavior reveals the inverse pattern. When seeking solutions, he looks to others: Peter must explain, Jared must propose, Sam must execute. More tellingly, the scene contains subtle signals about blame attribution\u2014Sarah Robertson becomes the scapegoat. Tuld never acknowledges any personal responsibility for the firm's catastrophic risk exposure. As CEO, he bears ultimate accountability for risk management failures, yet his framing positions him as the rational responder to others' failures.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Sam Rogers as Potential Level 5 Leader")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Scene 45's most compelling Level 5 characteristics appear not in Tuld but in Sam Rogers. Collins describes Level 5 leaders as demonstrating \"workmanlike diligence\u2014more plow horse than show horse.\" Sam's 34-year tenure reflects steady dedication. His concern for \"his guys\" demonstrates people-centered thinking. His warning that \"you will kill the market for years\" reflects thinking about enduring relationships and sustainable practice.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("However, Sam's ultimate compliance reveals his limitations. Level 5 leaders demonstrate \"the resolve to do whatever it takes.\" Sam lacks positional power to override Tuld, but his failure to more forcefully advocate for alternatives suggests he falls short of the fierce resolve Level 5 requires. His moral clarity is undermined by willingness to execute a plan he believes is wrong.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Conclusion: Effectiveness Without Greatness")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Collins observes that Level 4 leaders can achieve remarkable results, but those results often depend on the leader's continued presence and prove unsustainable. Tuld's approach exemplifies this pattern. The firm survives Scene 45, but the foundations for enduring success have been compromised. Tuld achieves effectiveness without the humility and institutional orientation that distinguishes Level 5 greatness. His triumph is one of will without the character that transforms effective leadership into enduring greatness.")] }),

      // PAGE BREAK - CONCLUSION
      new Paragraph({ children: [new PageBreak()] }),

      // CONCLUSION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusion: Integrating the Theoretical Perspectives")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Across five distinct theoretical lenses, a consistent portrait of John Tuld's leadership emerges. He demonstrates remarkable tactical effectiveness: deploying Cialdini's persuasion principles with sophistication, utilizing Yukl's influence tactics across all directional vectors, displaying surface characteristics of transformational leadership, compressing Kotter's change process into a single crisis meeting, and exhibiting fierce professional will.")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Yet each framework also reveals significant limitations. Cialdini's principles, while effective, are deployed manipulatively rather than ethically. Yukl's tactics secure compliance without commitment. The transformational elements mask pseudo-transformational self-interest. Crisis leadership compression forecloses ethical deliberation. And the professional will operates without the humility that characterizes Level 5 greatness.")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Sam Rogers emerges as the ethical counterpoint\u2014demonstrating authentic concern for followers, long-term thinking, and moral clarity. Yet Sam's subordinate position and ultimate compliance illustrate that ethical awareness alone does not constitute effective leadership. Power, will, and moral grounding must combine for leadership that is both effective and worthy of the name.")] }),

      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Scene 45 thus offers a cautionary tale: the techniques of effective leadership can be deployed in service of any end. Crisis conditions amplify this danger, making speed and decisiveness appear to justify actions that would be recognized as harmful under less pressured conditions. For practitioners and scholars alike, the scene demonstrates that leadership effectiveness and leadership ethics can diverge\u2014and that the most important question may not be whether a leader achieves their objectives, but whether those objectives deserve to be achieved.")] }),

      // PAGE BREAK - REFERENCES
      new Paragraph({ children: [new PageBreak()] }),

      // REFERENCES
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("References")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Bass, B. M., & Riggio, R. E. (2006). "), new TextRun({ text: "Transformational leadership", italics: true }), new TextRun(" (2nd ed.). Mahwah, NJ: Lawrence Erlbaum Associates.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Burns, J. M. (1978). "), new TextRun({ text: "Leadership", italics: true }), new TextRun(". New York: Harper & Row.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Cialdini, R. B. (2001). Harnessing the science of persuasion. "), new TextRun({ text: "Harvard Business Review, 79", italics: true }), new TextRun("(9), 72-79.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Collins, J. (2001). Level 5 leadership: The triumph of humility and fierce resolve. "), new TextRun({ text: "Harvard Business Review, 79", italics: true }), new TextRun("(1), 66-76.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Falbe, C. M., & Yukl, G. (1992). Consequences for managers of using single influence tactics and combinations of tactics. "), new TextRun({ text: "Academy of Management Journal, 35", italics: true }), new TextRun("(3), 638-652.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Ferris, G. R., Treadway, D. C., Perrew\u00e9, P. L., Brouer, R. L., Douglas, C., & Lux, S. (2007). Political skill in organizations. "), new TextRun({ text: "Journal of Management, 33", italics: true }), new TextRun("(3), 290-320.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Garvin, D. A., & Roberto, M. A. (2005). Change through persuasion. "), new TextRun({ text: "Harvard Business Review, 83", italics: true }), new TextRun("(2), 104-112.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Kotter, J. P. (1995). Leading change: Why transformation efforts fail. "), new TextRun({ text: "Harvard Business Review, 73", italics: true }), new TextRun("(2), 59-67.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Kotter, J. P. (1996). "), new TextRun({ text: "Leading change", italics: true }), new TextRun(". Boston, MA: Harvard Business School Press.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Nohria, N. (2024). Leaders must react: A framework for responding to unforeseen events. "), new TextRun({ text: "Harvard Business Review, 102", italics: true }), new TextRun("(1), 51-55.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Yukl, G. (2001). "), new TextRun({ text: "Leadership in organizations", italics: true }), new TextRun(" (5th ed.). Upper Saddle River, NJ: Prentice Hall.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Yukl, G., & Falbe, C. M. (1990). Influence tactics and objectives in upward, downward, and lateral influence attempts. "), new TextRun({ text: "Journal of Applied Psychology, 75", italics: true }), new TextRun("(2), 132-140.")] }),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("Yukl, G., & Tracey, J. B. (1992). Consequences of influence tactics used with subordinates, peers, and the boss. "), new TextRun({ text: "Journal of Applied Psychology, 77", italics: true }), new TextRun("(4), 525-535.")] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/roishikler/MEGA/MBA/courses/Networking-and-management/outputs/margin_call_analysis/Margin_Call_Scene_45_Analysis.docx", buffer);
  console.log("Document created successfully!");
});
