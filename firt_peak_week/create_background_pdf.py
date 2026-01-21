from fpdf import FPDF

class PDF(FPDF):
    def section_title(self, title):
        self.set_font('Helvetica', 'B', 9)
        self.set_fill_color(230, 230, 230)
        self.cell(0, 5, title, fill=True, new_x='LMARGIN', new_y='NEXT')
        self.ln(1)

    def subsection_title(self, title):
        self.set_font('Helvetica', 'B', 7.5)
        self.cell(0, 4, title, new_x='LMARGIN', new_y='NEXT')

    def body_text(self, text):
        self.set_font('Helvetica', '', 7)
        self.multi_cell(0, 3.5, text)
        self.ln(0.5)

    def bullet_point(self, text):
        self.set_font('Helvetica', '', 6.5)
        self.cell(0, 3, '  * ' + text, new_x='LMARGIN', new_y='NEXT')

    def table_header_2col(self, col1, col2, w1=95, w2=95):
        self.set_font('Helvetica', 'B', 6.5)
        self.set_fill_color(200, 200, 200)
        self.cell(w1, 3.5, col1, border=1, fill=True, align='C')
        self.cell(w2, 3.5, col2, border=1, fill=True, align='C')
        self.ln()

    def table_row_2col(self, col1, col2, w1=95, w2=95):
        self.set_font('Helvetica', '', 6)
        self.cell(w1, 3.5, col1, border=1)
        self.cell(w2, 3.5, col2, border=1)
        self.ln()

# Create PDF
pdf = PDF(orientation='P', unit='mm', format='A4')
pdf.set_auto_page_break(auto=True, margin=8)
pdf.add_page()
pdf.set_margins(10, 10, 10)

# Title
pdf.set_font('Helvetica', 'B', 12)
pdf.cell(0, 5, 'The Champion Network Strategy', align='C', new_x='LMARGIN', new_y='NEXT')
pdf.set_font('Helvetica', 'I', 9)
pdf.cell(0, 4, 'A Cialdini-Based Approach to EIS Implementation at Teleswitches', align='C', new_x='LMARGIN', new_y='NEXT')
pdf.ln(2)

# Executive Summary
pdf.section_title('Executive Summary')
pdf.body_text('This strategy implements the EIS at Teleswitches using Cialdini\'s influence principles. Rather than top-down authority, it cultivates internal champions who become passionate advocates and lead change from within. The approach builds grassroots momentum while engaging CEO Ann Finkelbaum through relationship-building and results. Authority tactics are reserved as last resort.')
pdf.set_font('Helvetica', 'B', 7)
pdf.cell(0, 3, 'Target: 22 managers adopting EIS within 120 days', new_x='LMARGIN', new_y='NEXT')
pdf.ln(1)

# Theoretical Foundation
pdf.section_title('Theoretical Foundation: Cialdini\'s Principles')
pdf.body_text('Cialdini\'s research identifies seven universal principles of influence. This strategy uses five as primary mechanisms:')

pdf.set_font('Helvetica', 'B', 6.5)
pdf.cell(35, 3, 'Commitment & Consistency:', new_x='RIGHT')
pdf.set_font('Helvetica', '', 6.5)
pdf.cell(0, 3, 'Public positions create psychological investment. Workshop leaders become committed advocates.', new_x='LMARGIN', new_y='NEXT')

pdf.set_font('Helvetica', 'B', 6.5)
pdf.cell(35, 3, 'Unity:', new_x='RIGHT')
pdf.set_font('Helvetica', '', 6.5)
pdf.cell(0, 3, 'Influence from "us" is strongest. Internal champions have credibility outsiders lack.', new_x='LMARGIN', new_y='NEXT')

pdf.set_font('Helvetica', 'B', 6.5)
pdf.cell(35, 3, 'Social Proof:', new_x='RIGHT')
pdf.set_font('Helvetica', '', 6.5)
pdf.cell(0, 3, 'In uncertainty, people follow others. Visible adoption reduces uncertainty for fence-sitters.', new_x='LMARGIN', new_y='NEXT')

pdf.set_font('Helvetica', 'B', 6.5)
pdf.cell(35, 3, 'Reciprocity:', new_x='RIGHT')
pdf.set_font('Helvetica', '', 6.5)
pdf.cell(0, 3, 'Favors create obligation. Seeking advice and providing value builds goodwill.', new_x='LMARGIN', new_y='NEXT')

pdf.set_font('Helvetica', 'B', 6.5)
pdf.cell(35, 3, 'Liking:', new_x='RIGHT')
pdf.set_font('Helvetica', '', 6.5)
pdf.cell(0, 3, 'People say yes to those they like. Relationship-building positions EIS as partnership.', new_x='LMARGIN', new_y='NEXT')

pdf.ln(1)
pdf.set_font('Helvetica', 'I', 6.5)
pdf.cell(0, 3, 'Reserve: Authority and Scarcity held for last-resort use only (CEO Directive).', new_x='LMARGIN', new_y='NEXT')
pdf.ln(1)

pdf.subsection_title('Why Champions Transform Organizations')
pdf.bullet_point('Ownership: Champions feel change is theirs, not imposed')
pdf.bullet_point('Credibility: Peer advocacy bypasses outsider skepticism')
pdf.bullet_point('Lock-In: Public advocacy makes reversal psychologically costly')
pdf.bullet_point('Penetration: Champions influence their natural network clusters')
pdf.bullet_point('Sustainability: Internal advocates remain after consultants leave')
pdf.ln(1)

# Situational Analysis
pdf.section_title('Situational Analysis')
pdf.body_text('Teleswitches (acquired 2 years ago) has delayed EIS adoption. CEO Ann Finkelbaum values autonomy highly. As EuroComm\'s "cash cow," Teleswitches enjoys independence. Ann has a loyal team, is results/budget-oriented, and active in charities and business council. Key insight: Direct authority pressure will trigger reactance; she must feel ownership, not compliance.')
pdf.ln(1)

# Resource Allocation
pdf.section_title('Resource Allocation Summary')
pdf.table_header_2col('Cialdini Principle & Initiatives', 'Days')
pdf.table_row_2col('Commitment & Consistency (WORKSHOP x5, PILOT TEST x4, QUESTIONNAIRE, TRAINING x2)', '53')
pdf.table_row_2col('Unity (TASK FORCES, COFFEE GROUPS, NETWORKS, DIRECTORS MTG x3, COVERT LOBBYING)', '25')
pdf.table_row_2col('Reciprocity (SEEK ADVICE x3, MEMORANDUM x4, FACE-TO-FACE x8)', '18')
pdf.table_row_2col('Liking (PERSONAL PROFILE x3, FACE-TO-FACE x8)', '14')
pdf.table_row_2col('Social Proof (INTERNAL MAGAZINE, STAFF MEETING, EXTERNAL SPEAKER)', '13')
pdf.table_row_2col('Authority - Reserve (DIRECTIVE if needed)', '0-7')
pdf.ln(1)

pdf.table_header_2col('Phase', 'Days (%)')
pdf.table_row_2col('Phase 1: Intelligence & Relationship Building', '25 (21%)')
pdf.table_row_2col('Phase 2: Champion Activation', '35 (29%)')
pdf.table_row_2col('Phase 3: Viral Adoption', '40 (33%)')
pdf.table_row_2col('Phase 4: Consolidation', '20 (17%)')
pdf.ln(1)

# Success Metrics
pdf.section_title('Success Metrics')
pdf.subsection_title('Leading Indicators')
pdf.bullet_point('Workshop attendance rate; SEEK ADVICE conversation quality; Champion enthusiasm; Questionnaire response')
pdf.subsection_title('Lagging Indicators')
pdf.bullet_point('Stage progression (Awareness->Interest->Trial->Adoption); Pilot success; Ann\'s statements; Final count')
pdf.subsection_title('Risk Response')
pdf.bullet_point('Champion fatigue -> FACE-TO-FACE | Ann resistance -> COVERT LOBBYING | Plateau -> targeted WORKSHOP')
pdf.ln(1)

# Conclusion
pdf.section_title('Conclusion')
pdf.body_text('The Champion Network Strategy transforms EIS implementation from external imposition into internal movement. Ann Finkelbaum will not be persuaded by authority - she will be persuaded by her own people succeeding. When successful, Teleswitches will feel they chose to adopt a system their best people championed.')
pdf.ln(1)

# References
pdf.section_title('References')
pdf.set_font('Helvetica', '', 6)
pdf.cell(0, 3, '- Cialdini, R.B. (1984). Influence: The Psychology of Persuasion. Harper Business.', new_x='LMARGIN', new_y='NEXT')
pdf.cell(0, 3, '- Cialdini, R.B. (2016). Pre-Suasion: A Revolutionary Way to Influence and Persuade. Simon & Schuster.', new_x='LMARGIN', new_y='NEXT')
pdf.cell(0, 3, '- Influence at Work. "Dr. Robert Cialdini\'s Seven Principles of Persuasion." influenceatwork.com', new_x='LMARGIN', new_y='NEXT')

# Save
pdf.output('/Users/roishikler/MEGA/MBA/firt_peak_week/EIS_Strategy_Background.pdf')
print('Background PDF created successfully!')
