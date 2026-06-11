import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PolicyPage from './pages/PolicyPage.tsx';
import { policyByPath, fallbackPolicy } from './policies/policyData.ts';
import './index.css';

const policy = policyByPath.get(window.location.pathname) ?? fallbackPolicy;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PolicyPage document={policy} />
  </StrictMode>
);
