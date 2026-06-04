import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PolicyPage from './pages/PolicyPage';
import { fallbackPolicy, policyByPath } from './policies/policyData';
import './index.css';

const policyDocument = policyByPath.get(window.location.pathname) ?? fallbackPolicy;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PolicyPage document={policyDocument} />
  </StrictMode>
);
