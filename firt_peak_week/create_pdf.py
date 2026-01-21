from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 14)
        self.cell(0, 6, 'Champion Network Strategy - Implementation Plan', align='C', new_x='LMARGIN', new_y='NEXT')
        self.ln(2)

    def section_title(self, title):
        self.set_font('Helvetica', 'B', 9)
        self.set_fill_color(240, 240, 240)
        self.cell(0, 5, title, fill=True, new_x='LMARGIN', new_y='NEXT')
        self.ln(1)

    def goal_text(self, text):
        self.set_font('Helvetica', 'I', 7)
        self.cell(0, 4, text, new_x='LMARGIN', new_y='NEXT')
        self.ln(1)

    def table_header(self):
        self.set_font('Helvetica', 'B', 7)
        self.set_fill_color(200, 200, 200)
        self.cell(18, 4, 'Days', border=1, fill=True, align='C')
        self.cell(45, 4, 'Initiative', border=1, fill=True, align='C')
        self.cell(55, 4, 'Target', border=1, fill=True, align='C')
        self.cell(72, 4, 'Purpose', border=1, fill=True, align='C')
        self.ln()

    def table_row(self, days, initiative, target, purpose):
        self.set_font('Helvetica', '', 6.5)
        self.cell(18, 4, days, border=1, align='C')
        self.cell(45, 4, initiative, border=1)
        self.cell(55, 4, target, border=1)
        self.cell(72, 4, purpose, border=1)
        self.ln()

# Create PDF
pdf = PDF(orientation='P', unit='mm', format='A4')
pdf.set_auto_page_break(auto=False)
pdf.add_page()
pdf.set_margins(10, 10, 10)

# Phase 1
pdf.section_title('Phase 1: Intelligence & Relationship Building (Days 1-25)')
pdf.goal_text('Goal: Map networks, build relationships, identify 5-7 champion candidates')
pdf.table_header()
pdf.table_row('1', 'TASK FORCES', 'All', 'Discover formal group structures')
pdf.table_row('2-4', 'COFFEE GROUPS', 'All', 'Map informal influence networks')
pdf.table_row('5-9', 'NETWORKS', 'All', 'Identify shared identities (charity, health club)')
pdf.table_row('10-13', 'PERSONAL PROFILE (x2)', '5 directors + 5 champion candidates', 'Intelligence for tailored approach')
pdf.table_row('14-19', 'SEEK ADVICE (x3)', 'Ann, Hillary Ross, George Glenn', 'Build reciprocity through deference')
pdf.table_row('20', 'EMAIL', 'All 24 managers', 'Soft awareness introduction')
pdf.table_row('21-25', 'MANAGEMENT TRAINING', '5 champion candidates', 'External credibility + commitment')
pdf.ln(3)

# Phase 2
pdf.section_title('Phase 2: Champion Activation (Days 26-60)')
pdf.goal_text('Goal: Champions lead workshops publicly; begin pilot tests; create social proof')
pdf.table_header()
pdf.table_row('26-30', 'WORKSHOP', 'Champion #1 leads', 'Public commitment; peer endorsement')
pdf.table_row('31-33', 'INTERNAL MAGAZINE', 'All', 'Champion-authored article; social proof')
pdf.table_row('34-35', 'QUESTIONNAIRE', 'All managers', 'Written commitment; identify next wave')
pdf.table_row('36-40', 'WORKSHOP', 'Champion #2 leads', 'Second network cluster activated')
pdf.table_row('41-42', 'MEMORANDUM + FACE-TO-FACE', 'High-interest managers + Ann', 'Personalized value; maintain CEO relationship')
pdf.table_row('43-46', 'PILOT TEST', "Champion #1's department", 'Escalate to operational trial')
pdf.table_row('47-51', 'EXTERNAL SPEAKER', 'All (optional)', "Expert validates champions' message")
pdf.table_row('52-54', 'DIRECTORS MEETING', 'Directors + CEO', 'Present pilot progress; collective ownership')
pdf.table_row('55-60', 'WORKSHOP + FACE-TO-FACE', 'Champion #3 leads; debrief #1', 'Third cluster; prepare success story')
pdf.ln(3)

# Phase 3
pdf.section_title('Phase 3: Viral Adoption (Days 61-100)')
pdf.goal_text('Goal: Critical mass through network effects; champions lobby Ann directly')
pdf.table_header()
pdf.table_row('61-65', 'STAFF MEETING DISCUSSION', 'All management', 'Public forum showcases momentum')
pdf.table_row('66-67', 'FACE-TO-FACE (x2)', 'Ann + key fence-sitter', 'Present results; personal engagement')
pdf.table_row('68-71', 'PILOT TEST', "Champion #2's department", 'Second pilot expands evidence')
pdf.table_row('72-76', 'WORKSHOP', 'Champions #4-5 co-lead', 'Peer teaching normalized')
pdf.table_row('77-78', 'MEMORANDUM (x2)', 'Non-adopters + Ann', 'Highlight successes; recognition')
pdf.table_row('79-83', 'MANAGEMENT TRAINING', '5 recent converts', 'Deepen commitment; next champion wave')
pdf.table_row('84-91', 'COVERT LOBBYING', 'Champions lobby Ann', '"Your people believe in this"')
pdf.table_row('92-100', 'PILOT TEST + F2F + DIRECTORS MTG', 'Third dept; skeptics; milestone', 'Expand trials; address holdouts')
pdf.ln(3)

# Phase 4
pdf.section_title('Phase 4: Consolidation (Days 101-120)')
pdf.goal_text('Goal: Convert holdouts; institutionalize; authority only if absolutely necessary')
pdf.table_header()
pdf.table_row('101-102', 'PERSONAL PROFILE', '5 holdouts', 'Understand specific resistance')
pdf.table_row('103-107', 'WORKSHOP', 'Final session; holdouts invited', '"Join the majority" environment')
pdf.table_row('108-111', 'PILOT TEST', 'Holdout department', 'Low-commitment trial offer')
pdf.table_row('112-116', 'FACE-TO-FACE (x3) + MEMO', 'Each holdout + Ann + final appeals', 'Personal closure; CEO endorsement')
pdf.table_row('116', 'EMAIL', 'All managers', 'Celebrate success; announce adoption')
pdf.table_row('117-119', 'DIRECTORS MEETING', 'Directors + CEO', 'Formal adoption; transition to BAU')
pdf.table_row('120', 'DIRECTIVE (if needed)', 'True resistors only', 'Last resort for isolated holdouts')

# Footer note
pdf.ln(4)
pdf.set_font('Helvetica', 'I', 6)
pdf.cell(0, 3, 'Strategy based on Cialdini\'s Principles: Commitment & Consistency, Unity, Social Proof, Reciprocity, Liking. Authority reserved as last resort.', align='C')

# Save
pdf.output('/Users/roishikler/MEGA/MBA/firt_peak_week/EIS_Champion_Strategy_Final.pdf')
print('PDF created successfully!')
