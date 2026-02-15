
export interface AnalysisResult {
  score: number;
  label: 'Credible' | 'Suspicious' | 'High Risk';
  bias: string;
  manipulationType?: string;
  explanation: string;
  confidence: number;
}

export enum Section {
  HERO = 'hero',
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  SCANNER = 'scanner',
  INSIGHTS = 'insights'
}

export interface NavItem {
  label: string;
  href: Section;
}
