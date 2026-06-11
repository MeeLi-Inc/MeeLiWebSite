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
    title: 'About MeeLi - Meet Life',
    shortTitle: 'About MeeLi',
    description: "A healthy social app for students. Learn about MeeLi's mission, beliefs, and why we exist.",
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Company',
    content: aboutText,
  },
  {
    slug: 'terms',
    path: '/terms.html',
    title: 'Terms of Service',
    shortTitle: 'Terms',
    description: 'The Terms of Service governing your use of MeeLi. By using MeeLi, you agree to show up as a real person, treat others with respect, and contribute positively to the community.',
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: termsText,
  },
  {
    slug: 'privacy',
    path: '/privacy.html',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    description: "MeeLi's Privacy Policy — how we collect, use, store, and protect your data. We do not sell your data or use it for advertising.",
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: privacyText,
  },
  {
    slug: 'community-guidelines',
    path: '/community-guidelines.html',
    title: 'Community & Content Guidelines',
    shortTitle: 'Community',
    description: "MeeLi's community and content guidelines covering authenticity, safety, enforcement, and what belongs on the platform.",
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: communityText,
  },
  {
    slug: 'safety-moderation',
    path: '/safety-moderation.html',
    title: 'Safety & Moderation Policy',
    shortTitle: 'Safety',
    description: 'How MeeLi reviews reports, applies enforcement, and handles appeals.',
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: safetyText,
  },
  {
    slug: 'data-deletion',
    path: '/data-deletion.html',
    title: 'Data & Account Deletion',
    shortTitle: 'Data Deletion',
    description: 'How to delete your MeeLi account, what data is removed, and what may be retained for safety and platform integrity.',
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: dataDeletionText,
  },
  {
    slug: 'copyright',
    path: '/copyright.html',
    title: 'Copyright Policy',
    shortTitle: 'Copyright',
    description: "MeeLi's Copyright Policy — how we handle intellectual property rights, DMCA takedown notices, and repeat infringement.",
    effectiveDate: 'June 11, 2026',
    version: '0.3.0',
    category: 'Policies',
    content: copyrightText,
  },
];

export const policyByPath = new Map(policyDocuments.map((document) => [document.path, document]));
export const fallbackPolicy = policyDocuments.find((document) => document.slug === 'privacy') ?? policyDocuments[0];
