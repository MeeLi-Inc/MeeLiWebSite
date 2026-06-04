import { ArrowLeft, FileText, Home, Mail } from 'lucide-react';
import { PolicyDocument, policyDocuments } from '../policies/policyData';

type ContentBlock =
  | { type: 'heading'; text: string; id: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

const policyLinkMap = new Map([
  ['Terms of Service', '/terms.html'],
  ['Privacy Policy', '/privacy.html'],
  ['Community & Content Guidelines', '/community-guidelines.html'],
  ['Safety & Moderation Policy', '/safety-moderation.html'],
  ['Data & Account Deletion', '/data-deletion.html'],
  ['Copyright Policy', '/copyright.html'],
]);

const headingPattern = /^((\d+)\.\s+.+|[A-Z][A-Za-z &]+|.+ Guidelines|.+ Policy)$/;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const stripDecorativePrefix = (value: string) =>
  value
    .replace(/^[^\w]+/u, '')
    .replace(/\s+/g, ' ')
    .trim();

const isHeading = (line: string) => {
  const cleanLine = stripDecorativePrefix(line);

  if (/^\d+\.\s+/.test(cleanLine)) {
    return true;
  }

  if (/^(Quick Guidelines|Moderation Overview|Our Mission|What MeeLi Is|What We Believe|Why MeeLi Exists|Let.s Meet Life|Copyright & Intellectual Property|Account Deletion & Your Data)$/i.test(cleanLine)) {
    return true;
  }

  return headingPattern.test(cleanLine) && cleanLine.length < 80;
};

const isSubheading = (line: string) => {
  const cleanLine = stripDecorativePrefix(line);
  return /^[A-Z][A-Za-z &()0-9-]+$/.test(cleanLine) && cleanLine.length < 60;
};

const parseContent = (content: string): ContentBlock[] => {
  const blocks: ContentBlock[] = [];
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  let pendingBullets: string[] = [];

  const flushBullets = () => {
    if (pendingBullets.length) {
      blocks.push({ type: 'list', items: pendingBullets });
      pendingBullets = [];
    }
  };

  lines.forEach((line, index) => {
    if (index < 4 && !/Effective/i.test(line) && !/Plain English|short version/i.test(line)) {
      return;
    }

    const cleanLine = line.replace(/^[-•]\s*/, '').replace(/^\t+/, '').trim();

    if (/^[•*-]\s*/.test(line) || line.startsWith('•') || line.startsWith('-')) {
      pendingBullets.push(cleanLine);
      return;
    }

    flushBullets();

    if (/^Effective\s+/i.test(cleanLine) || /^MeeLi\s+·/i.test(cleanLine) || /^MeeLi Inc\./i.test(cleanLine)) {
      return;
    }

    if (isHeading(cleanLine)) {
      const text = stripDecorativePrefix(cleanLine);
      blocks.push({ type: 'heading', text, id: slugify(text) });
      return;
    }

    if (isSubheading(cleanLine)) {
      blocks.push({ type: 'subheading', text: stripDecorativePrefix(cleanLine) });
      return;
    }

    blocks.push({ type: 'paragraph', text: cleanLine });
  });

  flushBullets();
  return blocks;
};

const renderLinkedText = (text: string) => {
  const emailMatch = text.match(/support@meeli\.social/);

  if (emailMatch) {
    const [before, after] = text.split('support@meeli.social');
    return (
      <>
        {renderLinkedText(before)}
        <a href="mailto:support@meeli.social" className="text-red-700 underline hover:text-red-800">
          support@meeli.social
        </a>
        {renderLinkedText(after)}
      </>
    );
  }

  for (const [label, href] of policyLinkMap) {
    if (text.includes(label)) {
      const [before, after] = text.split(label);
      return (
        <>
          {renderLinkedText(before)}
          <a href={href} className="text-red-700 underline hover:text-red-800">
            {label}
          </a>
          {renderLinkedText(after)}
        </>
      );
    }
  }

  return text;
};

const PolicyPage = ({ document }: { document: PolicyDocument }) => {
  const blocks = parseContent(document.content);
  const sections = blocks.filter((block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading');
  const relatedPolicies = policyDocuments.filter((policy) => policy.path !== document.path);

  return (
    <div className="min-h-screen bg-stone-50">
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

      {sections.length > 0 && (
        <nav
          aria-label="On this page"
          className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-orange-200 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 mr-2 flex-shrink-0">
                Jump to
              </span>
              {sections.slice(0, 12).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm text-slate-700 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors duration-200"
                >
                  {section.text.replace(/^\d+\.\s+/, '')}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      <main className="max-w-5xl mx-auto px-6 py-12">
        <article className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6 md:p-10">
          <div className="space-y-5">
            {blocks.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h3
                    key={`${block.id}-${index}`}
                    id={block.id}
                    className="scroll-mt-24 pt-6 text-2xl md:text-3xl font-bold text-slate-800"
                  >
                    {block.text}
                  </h3>
                );
              }

              if (block.type === 'subheading') {
                return (
                  <h4 key={`${block.text}-${index}`} className="pt-3 text-lg font-semibold text-slate-800">
                    {block.text}
                  </h4>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul key={`list-${index}`} className="space-y-2 pl-6 list-disc text-slate-600 leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item}>{renderLinkedText(item)}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={`${block.text}-${index}`} className="text-slate-600 leading-relaxed">
                  {renderLinkedText(block.text)}
                </p>
              );
            })}
          </div>
        </article>

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
    </div>
  );
};

export default PolicyPage;
