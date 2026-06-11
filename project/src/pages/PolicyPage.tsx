import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { ArrowLeft, FileText, Home, Mail } from 'lucide-react';
import { PolicyDocument, policyDocuments } from '../policies/policyData';
import Footer from '../components/Footer';

// Terms & Privacy use **N\. Title** bold paragraphs for numbered sections.
// Normalise them to ## headings so styling and ToC work uniformly.
const normalizeMarkdown = (content: string): string =>
  content.replace(/^(\*\*\d+\\?\.\s+[^*\n]+\*\*)$/gm, (match) => {
    const text = match.replace(/^\*\*/, '').replace(/\*\*$/, '').replace(/\\/g, '');
    return `## ${text}`;
  });

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');

const childrenToText = (children: React.ReactNode): string => {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(childrenToText).join('');
  if (React.isValidElement(children))
    return childrenToText((children.props as { children?: React.ReactNode }).children);
  return '';
};

const extractTocHeadings = (content: string) =>
  [...normalizeMarkdown(content).matchAll(/^## (.+)$/gm)]
    .map((m) => {
      const raw = m[1].replace(/\*\*/g, '').replace(/[*_\\]/g, '').trim();
      // strip leading emoji chars
      const text = raw.replace(/^[^\w\s]+\s*/, '').trim();
      return text ? { text, id: slugify(text) } : null;
    })
    .filter((h): h is { text: string; id: string } => h !== null);

const buildComponents = (): Components => ({
  // ── Headings ──────────────────────────────────────────────────────────────
  h1: ({ children }) => (
    <h2 className="scroll-mt-24 pt-6 text-2xl md:text-3xl font-bold text-slate-800 border-b border-orange-100 pb-2">
      {children}
    </h2>
  ),
  h2: ({ children }) => {
    const raw = childrenToText(children).replace(/[^\w\s-]/g, '').trim().replace(/^[^\w\s]+\s*/, '');
    const id = slugify(raw);
    return (
      <h3 id={id} className="scroll-mt-24 pt-8 text-xl md:text-2xl font-bold text-slate-800">
        {children}
      </h3>
    );
  },
  h3: ({ children }) => (
    <h4 className="pt-4 text-base font-semibold text-slate-700 uppercase tracking-wide">
      {children}
    </h4>
  ),

  // ── Body text ─────────────────────────────────────────────────────────────
  p: ({ children }) => (
    <p className="text-slate-600 leading-relaxed">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-800">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-slate-500">{children}</em>
  ),

  // ── Lists ─────────────────────────────────────────────────────────────────
  ul: ({ children }) => (
    <ul className="space-y-1.5 pl-5 list-disc text-slate-600 leading-relaxed marker:text-orange-400 inline-block text-left">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1.5 pl-5 list-decimal text-slate-600 leading-relaxed marker:text-orange-500">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed pl-1">{children}</li>
  ),

  // ── Divider ───────────────────────────────────────────────────────────────
  hr: () => <hr className="border-orange-100 my-2" />,

  // ── Links ─────────────────────────────────────────────────────────────────
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-red-700 underline underline-offset-2 hover:text-red-800 transition-colors"
    >
      {children}
    </a>
  ),

  // ── Tables (used as callout boxes in these docs) ──────────────────────────
  table: ({ children }) => (
    <div className="rounded-xl border border-orange-200 bg-orange-50 overflow-hidden my-1">
      <table className="w-full">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-orange-200">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-orange-100 last:border-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-5 py-3 text-left text-sm font-medium text-slate-700 align-top leading-relaxed">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-5 py-3 text-sm text-slate-600 align-top leading-relaxed">{children}</td>
  ),

  // ── Code ──────────────────────────────────────────────────────────────────
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-700">
      {children}
    </code>
  ),

  // ── Blockquote ────────────────────────────────────────────────────────────
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-orange-300 pl-4 italic text-slate-500 my-1">
      {children}
    </blockquote>
  ),
});

const components = buildComponents();

const PolicyPage = ({ document }: { document: PolicyDocument }) => {
  const normalized = normalizeMarkdown(document.content);
  const tocHeadings = extractTocHeadings(document.content);
  const relatedPolicies = policyDocuments.filter((p) => p.path !== document.path);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="bg-gradient-to-br from-orange-50 to-orange-100 border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <a
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-red-700 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm">Back to home</span>
          </a>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/WhatsApp Image 2025-07-19 at 13.50.42_f2aedb83.jpg"
              alt="MeeLi Logo"
              className="w-12 h-12 rounded-2xl shadow-md"
            />
            <h1 className="font-kalam text-4xl md:text-5xl font-bold text-slate-800">MeeLi</h1>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-3">
            {document.category}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">{document.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">{document.description}</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-slate-500">
            <span>Effective {document.effectiveDate}</span>
            <span aria-hidden="true">/</span>
            <span>Version {document.version}</span>
          </div>
        </div>
      </header>

      {/* ── Sticky ToC nav ──────────────────────────────────────────────── */}
      {tocHeadings.length > 0 && (
        <nav
          aria-label="On this page"
          className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-orange-200 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 mr-2 flex-shrink-0">
                Jump to
              </span>
              {tocHeadings.slice(0, 12).map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm text-slate-700 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors duration-200"
                >
                  {heading.text.replace(/^\d+\.\s+/, '')}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <article className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6 md:p-10">
          <div className={`space-y-4${document.slug === 'about-meeli' ? ' text-center' : ''}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {normalized}
            </ReactMarkdown>
          </div>
        </article>

        {/* ── Footer cards ────────────────────────────────────────────── */}
        <section className="mt-10 grid md:grid-cols-[1fr_2fr] gap-6">
          <div className="bg-slate-800 text-white rounded-2xl p-6">
            <Mail className="w-6 h-6 text-red-300 mb-3" />
            <h3 className="text-xl font-bold mb-2">Questions?</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Contact MeeLi for policy, privacy, safety, or account questions.
            </p>
            <a href="mailto:support@meeli.social" className="text-red-200 hover:text-white underline text-sm">
              support@meeli.social
            </a>
          </div>

          <div className="bg-white border border-orange-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Related Pages</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/"
                className="flex items-center text-slate-600 hover:text-red-700 transition-colors duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
              {relatedPolicies.map((policy) => (
                <a
                  key={policy.path}
                  href={policy.path}
                  className="flex items-center text-slate-600 hover:text-red-700 transition-colors duration-200"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {policy.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
