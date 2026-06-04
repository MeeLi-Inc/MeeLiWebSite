import aboutText from './content/about-meeli.md?raw';
import communityText from './content/community-guidelines.md?raw';
import copyrightText from './content/copyright.md?raw';
import dataDeletionText from './content/data-deletion.md?raw';
import privacyText from './content/privacy.md?raw';
import safetyText from './content/safety-moderation.md?raw';
import termsText from './content/terms.md?raw';

export type PolicyDocument = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  effectiveDate: string;
  version: string;
  category: 'Company' | 'Policies';
  content: string;
};

export const policyDocuments: PolicyDocument[] = [
  {
    slug: 'about-meeli',
    path: '/about-meeli.html',
    title: 'About MeeLi',
    shortTitle: 'About MeeLi',
    description: 'MeeLi mission, beliefs, and purpose.',
    effectiveDate: 'June 1, 2026',
    version: '1.0',
    category: 'Company',
    content: aboutText,
  },
  {
    slug: 'terms',
    path: '/terms.html',
    title: 'Terms of Service',
    shortTitle: 'Terms',
    description: 'The rules that govern your use of MeeLi.',
    effectiveDate: 'June 1, 2026',
    version: '3.0',
    category: 'Policies',
    content: termsText,
  },
  {
    slug: 'privacy',
    path: '/privacy.html',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    description: 'How MeeLi collects, uses, stores, and protects your data.',
    effectiveDate: 'June 1, 2026',
    version: '3.0',
    category: 'Policies',
    content: privacyText,
  },
  {
    slug: 'community-guidelines',
    path: '/community-guidelines.html',
    title: 'Community & Content Guidelines',
    shortTitle: 'Community',
    description: 'What belongs on MeeLi and how community standards are enforced.',
    effectiveDate: 'June 1, 2026',
    version: '3.0',
    category: 'Policies',
    content: communityText,
  },
  {
    slug: 'safety-moderation',
    path: '/safety-moderation.html',
    title: 'Safety & Moderation Policy',
    shortTitle: 'Safety',
    description: 'How MeeLi reviews reports, applies enforcement, and handles appeals.',
    effectiveDate: 'June 1, 2026',
    version: '1.0',
    category: 'Policies',
    content: safetyText,
  },
  {
    slug: 'data-deletion',
    path: '/data-deletion.html',
    title: 'Data & Account Deletion',
    shortTitle: 'Data Deletion',
    description: 'How to delete your MeeLi account and what happens to your data.',
    effectiveDate: 'June 1, 2026',
    version: '1.0',
    category: 'Policies',
    content: dataDeletionText,
  },
  {
    slug: 'copyright',
    path: '/copyright.html',
    title: 'Copyright Policy',
    shortTitle: 'Copyright',
    description: 'How MeeLi handles copyright and intellectual property concerns.',
    effectiveDate: 'June 1, 2026',
    version: '1.0',
    category: 'Policies',
    content: copyrightText,
  },
];

export const policyByPath = new Map(policyDocuments.map((document) => [document.path, document]));
export const fallbackPolicy = policyDocuments.find((document) => document.slug === 'privacy') ?? policyDocuments[0];
