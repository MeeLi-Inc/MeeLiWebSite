import Footer from '../components/Footer';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Shield,
  Users,
  FileText,
  Trash2,
  Scale,
  Coins,
  AlertTriangle,
  Mail,
  Flag,
  Edit3,
  Phone,
} from 'lucide-react';

const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'community', label: 'Community' },
  { id: 'enforcement', label: 'Enforcement' },
  { id: 'reporting', label: 'Reporting' },
  { id: 'content', label: 'Your content' },
  { id: 'account', label: 'Account' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'contact', label: 'Contact' },
];

const TermsPage = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Terms of
            <span className="font-kalam text-red-700 ml-3">Service</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            The Terms governing your use of MeeLi. By using MeeLi, you agree to show up as a real person, treat others with respect, and contribute positively to the community.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-500">
            <span>Effective June 11, 2026</span>
            <span aria-hidden="true">/</span>
            <span>Version 0.3.0</span>
            <span aria-hidden="true">/</span>
            <span>MeeLi, Inc. · Delaware, USA</span>
          </div>
        </div>
      </header>

      <nav
        aria-label="On this page"
        className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-orange-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-thin">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 mr-2 flex-shrink-0">
              Jump to
            </span>
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm text-slate-700 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors duration-200"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Plain English Summary */}
      <section id="summary" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            The
            <span className="font-kalam text-red-700 ml-3">short version</span>
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed">
              MeeLi is a people-first community built around real connection and authentic experiences. These Terms exist to help keep it that way. By using MeeLi, you agree to show up as a real person, treat others with respect, and contribute positively to the space. Content or behavior that harms others or the community may be removed.
            </p>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">
            By creating an account or using MeeLi, you agree to these Terms. If you do not agree, you may not use the app.
          </p>
        </div>
      </section>

      {/* Eligibility & Account */}
      <section id="eligibility" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Eligibility &
              <span className="font-kalam text-red-700 ml-3">account basics</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Shield className="w-6 h-6 text-red-700" />}
              title="Age requirement"
              body="You must be at least 17 years old to use MeeLi. We do not knowingly collect data from children under 13. If you are 17, you confirm you have the legal capacity to agree to these Terms in your region."
            />
            <InfoCard
              icon={<Edit3 className="w-6 h-6 text-red-700" />}
              title="Account responsibility"
              body="Keep your account information accurate and your account secure. If you believe your account has been compromised, contact us immediately at support@meeli.social."
            />
            <InfoCard
              icon={<Users className="w-6 h-6 text-red-700" />}
              title="Authenticity"
              body="MeeLi is built for real people. You may not impersonate others, create fake identities, or use MeeLi in a misleading or deceptive way."
            />
          </div>
        </div>
      </section>

      {/* Community Standards */}
      <section id="community" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Community
              <span className="font-kalam text-red-700 ml-3">standards</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi is built for real people, real experiences, and meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-800">What MeeLi is for</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  'Personal stories and real-life experiences',
                  'Growth, self-discovery, and well-being',
                  'Passions, hobbies, and meaningful moments',
                  'Genuine connection and encouragement',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center space-x-2 mb-4">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-slate-800">What is not allowed</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  'Harassment, bullying, or intimidation',
                  'Hate speech or discrimination',
                  'Threats of violence or harmful behavior',
                  'Misinformation that could cause harm',
                  'Spam, advertising, or deceptive behavior',
                  'Impersonation or fake identities',
                  'AI-generated content presented as real',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
            <p className="text-slate-600 text-sm">
              Your content should reflect <span className="font-semibold text-slate-800">your real voice and experience</span>. For full rules, see MeeLi's{' '}
              <a href="/community-guidelines.html" className="text-red-700 hover:text-red-800 underline">Community & Content Guidelines</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement */}
      <section id="enforcement" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Enforcement &
              <span className="font-kalam text-red-700 ml-3">consequences</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi enforces these Terms based on context, intent, and impact — using a three-tier system.
            </p>
          </div>

          <div className="space-y-4">
            <TierCard
              tier="Tier 1"
              label="Zero Tolerance"
              color="red"
              consequence="Immediate permanent ban + report to authorities. No appeal. No exceptions."
              items={[
                'Child sexual abuse material (CSAM)',
                'Credible threats of violence',
                'Terrorism or coordination of real-world violence',
                'Non-consensual sharing of intimate images',
              ]}
            />
            <TierCard
              tier="Tier 2"
              label="Severe"
              color="orange"
              consequence="Immediate permanent ban. Users may appeal within 30 days."
              items={[
                'Hate speech or dehumanizing content',
                'Sexual exploitation or coercion',
                'Doxxing — sharing private information without consent',
                'Impersonation or coordinated inauthentic behavior',
              ]}
            />
            <TierCard
              tier="Tier 3"
              label="Serious"
              color="yellow"
              consequence="Content removal + account restriction. Escalates to permanent ban for repeat violations. Appeal within 30 days."
              items={[
                'Harassment, bullying, or targeted intimidation',
                'Scams, fraud, or deceptive practices',
                'Repeated Community Guidelines violations',
                'AI-generated content presented as real',
              ]}
            />
          </div>

          <p className="text-sm text-slate-500 mt-6 text-center max-w-2xl mx-auto">
            You may not create new accounts to bypass restrictions or bans. Doing so may result in permanent removal of all associated accounts.
          </p>
        </div>
      </section>

      {/* Reporting */}
      <section id="reporting" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Reporting &
              <span className="font-kalam text-red-700 ml-3">moderation</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Flag className="w-5 h-5 text-red-700" />}
              title="How to report"
              body="Use the in-app report button on any profile, post, video, or event. Reports are reviewed by MeeLi's moderation team, who take them seriously and act on violations."
            />
            <Row
              icon={<Users className="w-5 h-5 text-red-700" />}
              title="Human-first moderation"
              body="MeeLi uses a human-first moderation system supported by community reporting. Every report gets a real review — no pure automation. For full details, see the Safety & Moderation Policy."
            />
            <Row
              icon={<Shield className="w-5 h-5 text-red-700" />}
              title="Good-faith reporting"
              body="Reporting is meant to protect the community. Submitting false, misleading, or bad-faith reports to target or harass another user may itself be considered a Terms violation."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Your Content */}
      <section id="content" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Your content &
              <span className="font-kalam text-red-700 ml-3">intellectual property</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon={<FileText className="w-6 h-6 text-red-700" />}
              title="You own your content"
              body="You retain ownership of everything you post — photos, videos, journal entries, and stories."
            />
            <InfoCard
              icon={<Scale className="w-6 h-6 text-red-700" />}
              title="License to MeeLi"
              body="By posting, you grant MeeLi a limited license to store, display, and distribute your content within the app. We cannot sell it, use it in ads, or share it outside the app."
            />
            <InfoCard
              icon={<Shield className="w-6 h-6 text-red-700" />}
              title="Your responsibility"
              body="You confirm you have the right to share your content and that it doesn't violate any laws or others' rights. Do not post copyrighted material you don't own."
            />
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-sm text-slate-600">
              Copyright complaints may be submitted to{' '}
              <a href="mailto:support@meeli.social" className="text-red-700 hover:text-red-800 underline">
                support@meeli.social
              </a>
              . See the{' '}
              <a href="/copyright.html" className="text-red-700 hover:text-red-800 underline">Copyright Policy</a>{' '}
              for full DMCA details.
            </p>
          </div>
        </div>
      </section>

      {/* Account Termination */}
      <section id="account" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Account
              <span className="font-kalam text-red-700 ml-3">termination</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Trash2 className="w-5 h-5 text-red-700" />}
              title="Termination by MeeLi"
              body="MeeLi may suspend or permanently terminate an account for Terms or Community Guidelines violations, with or without prior notice depending on severity."
            />
            <Row
              icon={<Edit3 className="w-5 h-5 text-red-700" />}
              title="Termination by you"
              body="Delete your account any time: Profile → Settings → Delete Account. After a 14-day recovery period, your data is permanently removed. See the Privacy Policy for full details."
            />
            <Row
              icon={<Scale className="w-5 h-5 text-red-700" />}
              title="Appeals"
              body="Tier 1 violations — no appeal. Tier 2 and Tier 3 — submit an appeal within 30 days by contacting MeeLi support. Appeals are reviewed in good faith; MeeLi's final decision stands."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Disclaimers &
              <span className="font-kalam text-red-700 ml-3">liability</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon={<AlertTriangle className="w-6 h-6 text-red-700" />}
              title="Platform availability"
              body="MeeLi is provided 'as is.' We do not guarantee the app will always be available, error-free, or accurate. We may update, suspend, or discontinue any part of it at any time."
            />
            <InfoCard
              icon={<Scale className="w-6 h-6 text-red-700" />}
              title="Limitation of liability"
              body="To the maximum extent permitted by law, MeeLi, Inc. is not liable for indirect, incidental, special, or consequential damages arising from your use of the app or interactions with other users."
            />
            <InfoCard
              icon={<Shield className="w-6 h-6 text-red-700" />}
              title="Mental health"
              body="MeeLi is a social platform — not a mental health service or substitute for professional care. If you're in crisis, contact the 988 Suicide & Crisis Lifeline by calling or texting 988."
            />
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Indemnification</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You agree to hold harmless MeeLi, Inc. from claims arising from your use of MeeLi, your content, your violations of these Terms or Community Guidelines, or any damage your content causes to a third party.
            </p>
          </div>

          <div className="mt-4 bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Points, rewards & subscriptions</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The current version of MeeLi does not include advertisements, paid features, or in-app purchases. Future versions may introduce engagement rewards or optional subscriptions — users will be notified in advance of any such changes.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section id="governing-law" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Governing law &
              <span className="font-kalam text-red-700 ml-3">disputes</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Scale className="w-5 h-5 text-red-700" />}
              title="Governing law"
              body="These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict of law principles."
            />
            <Row
              icon={<Users className="w-5 h-5 text-red-700" />}
              title="Informal resolution first"
              body="Before any formal dispute, contact MeeLi and give us a reasonable opportunity to resolve the issue. Most concerns can be resolved quickly through our support team."
            />
            <Row
              icon={<FileText className="w-5 h-5 text-red-700" />}
              title="Binding arbitration"
              body="Unresolved disputes go to binding individual arbitration under AAA rules in Delaware. The arbitrator's decision is final. Class action waiver applies — you may not bring claims as part of a class."
            />
            <Row
              icon={<Phone className="w-5 h-5 text-red-700" />}
              title="California residents"
              body="You may report complaints to the Complaint Assistance Unit of the California Department of Consumer Affairs at (800) 952-5210 or 400 R Street, Sacramento, CA 95814."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Contact
              <span className="font-kalam text-red-700 ml-3">us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-red-200 flex-shrink-0">
                  <FileText className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">MeeLi, Inc.</h3>
                  <p className="text-sm text-slate-600">Incorporated in Delaware, USA</p>
                  <p className="text-sm text-slate-600">Available on iOS (Apple App Store) &amp; Android (Google Play)</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-red-200 flex-shrink-0">
                  <Mail className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Email us</h3>
                  <p className="text-sm text-slate-600 mb-2">Terms questions, support, or anything else.</p>
                  <a href="mailto:support@meeli.social" className="text-red-700 hover:text-red-800 underline text-sm font-medium">
                    support@meeli.social
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">Changes to these Terms.</span> If we
            make material changes, we'll update the effective date and notify you within the app before changes take effect.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
      </div>
    </div>
  </div>
);

const Row = ({
  icon,
  title,
  body,
  isLast,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  isLast?: boolean;
}) => (
  <div className={`flex items-start space-x-4 py-4 ${isLast ? '' : 'border-b border-red-200'}`}>
    <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200 mt-0.5">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
    </div>
  </div>
);

const TierCard = ({
  tier,
  label,
  color,
  consequence,
  items,
}: {
  tier: string;
  label: string;
  color: 'red' | 'orange' | 'yellow';
  consequence: string;
  items: string[];
}) => {
  const colorMap = {
    red: 'bg-red-50 border-red-300',
    orange: 'bg-orange-50 border-orange-300',
    yellow: 'bg-amber-50 border-amber-300',
  };
  const labelColorMap = {
    red: 'text-red-700',
    orange: 'text-orange-700',
    yellow: 'text-amber-700',
  };
  return (
    <div className={`rounded-2xl p-6 border ${colorMap[color]}`}>
      <div className="flex items-center space-x-3 mb-3">
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white border ${color === 'red' ? 'border-red-300 text-red-700' : color === 'orange' ? 'border-orange-300 text-orange-700' : 'border-amber-300 text-amber-700'}`}>
          {tier}
        </span>
        <span className={`font-bold text-lg ${labelColorMap[color]}`}>{label}</span>
      </div>
      <p className="text-sm font-semibold text-slate-700 mb-3 italic">{consequence}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-600 flex items-start space-x-2">
            <span className={`mt-1 flex-shrink-0 ${labelColorMap[color]}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsPage;
