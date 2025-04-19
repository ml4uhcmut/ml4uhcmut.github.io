import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface Role {
  id: string;
  title: string;
  available: number;
  description: string;
  topics: string[]; // Changed from qualifications to topics
}

export interface RecruitmentData {
  heading: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    content: string;
  };
  positions: {
    title: string;
    roles: Role[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  requirements: {
    title: string;
    items: string[];
  };
  application: {
    title: string;
    url: string;
    contact_email: string;
    deadline: string;
  };
  footer?: string;
}

export function getRecruitmentData(): RecruitmentData {
  try {
    const filePath = path.join(process.cwd(), 'content/recruit/recruitment.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse markdown content using gray-matter
    const { data, content } = matter(fileContents);
    
    // Create the recruitment data object from the frontmatter
    const recruitmentData = data as RecruitmentData;
    
    // Set the footer content from markdown content after frontmatter
    if (content) {
      recruitmentData.footer = content.trim();
    }
    
    return recruitmentData;
  } catch (e) {
    console.error('Error loading recruitment data:', e);
    return {
      heading: { title: 'Error', description: 'Could not load recruitment data' },
      about: { title: '', content: '' },
      positions: { title: '', roles: [] },
      benefits: { title: '', items: [] },
      requirements: { title: '', items: [] },
      application: { title: '', url: '', contact_email: '', deadline: '' }
    };
  }
}