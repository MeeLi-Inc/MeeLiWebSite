import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AboutMeeliPage from './pages/AboutMeeliPage.tsx';
import TermsPage from './pages/TermsPage.tsx';
import CommunityGuidelinesPage from './pages/CommunityGuidelinesPage.tsx';
import SafetyModerationPage from './pages/SafetyModerationPage.tsx';
import DataDeletionPage from './pages/DataDeletionPage.tsx';
import CopyrightPage from './pages/CopyrightPage.tsx';
import './index.css';

const PAGE_MAP: Record<string, React.ComponentType> = {
  '/about-meeli.html': AboutMeeliPage,
  '/terms.html': TermsPage,
  '/community-guidelines.html': CommunityGuidelinesPage,
  '/safety-moderation.html': SafetyModerationPage,
  '/data-deletion.html': DataDeletionPage,
  '/copyright.html': CopyrightPage,
};

const Component = PAGE_MAP[window.location.pathname] ?? TermsPage;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);
