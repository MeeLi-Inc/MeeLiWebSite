import Footer from '../components/Footer';
import {
  ArrowLeft,
  Shield,
  Flag,
  Search,
  CheckCircle,
  Users,
  Scale,
  Eye,
  MessageSquare,
  Layers,
  Clock,
  AlertTriangle,
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'enforcement-tiers', label: 'Enforcement tiers' },
  { id: 'gray-areas', label: 'Gray areas' },
  { id: 'community-role', label: 'Community role' },
  { id: 'appeals', label: 'Appeals' },
];

const SafetyModerationPage = () => {
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
            Safety &
            <span className="font-kalam text-red-700 ml-3">Moderation</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            How MeeLi reviews reports, applies enforcement, and handles appeals — with human judgment at the center.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-500">
            <span>Effective June 11, 2026</span>
            <span aria-hidden="true">/</span>
            <span>Version 0.3.0</span>
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

      {/* Overview */}
      <section id="overview" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Moderation
              <span className="font-kalam text-red-700 ml-3">overview</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Community sets the tone → Community reporting → Human-first review → Action if needed
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <PipelineCard
              step={1}
              icon={<Users className="w-6 h-6 text-red-700" />}
              title="Community sets the tone"
              body="Clear guidelines and intentional culture shape what belongs on MeeLi."
            />
            <PipelineCard
              step={2}
              icon={<Flag className="w-6 h-6 text-red-700" />}
              title="Community reporting"
              body="Users flag content that feels unsafe or violates the rules."
            />
            <PipelineCard
              step={3}
              icon={<Eye className="w-6 h-6 text-red-700" />}
              title="Human-first review"
              body="Our team reviews flagged content with context and care."
            />
            <PipelineCard
              step={4}
              icon={<Shield className="w-6 h-6 text-red-700" />}
              title="Action if needed"
              body="Appropriate action based on MeeLi's three-tier enforcement system."
            />
          </div>
        </div>
      </section>

      {/* How Moderation Works */}
      <section id="how-it-works" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              How moderation
              <span className="font-kalam text-red-700 ml-3">works</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              At this stage, moderation is human-first. Every report gets a real review.
            </p>
          </div>

          <div className="space-y-4">
            <StepCard
              number="01"
              icon={<Flag className="w-6 h-6 text-red-700" />}
              title="Community reporting"
              body="If something feels off, unsafe, or against the guidelines, users can report content directly in the app using the report button on any profile, post, video, or event."
            />
            <StepCard
              number="02"
              icon={<Search className="w-6 h-6 text-red-700" />}
              title="Internal review"
              body="Our team reviews flagged content by looking at the content itself, the context, the intent behind it, and the potential impact on individuals and the community."
            />
            <StepCard
              number="03"
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Action"
              body="Based on the review, we may remove content, issue a warning, restrict account activity, or suspend or permanently ban the account — in accordance with MeeLi's three-tier enforcement system."
            />
          </div>
        </div>
      </section>

      {/* How Decisions Are Made */}
      <section id="decisions" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              How we make
              <span className="font-kalam text-red-700 ml-3">decisions</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Not everything is black and white. We consider three things for every review.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <DecisionCard
              emoji="🔍"
              label="Context"
              desc="What's actually happening? What's the full picture around this content or behavior?"
            />
            <DecisionCard
              emoji="💭"
              label="Intent"
              desc="Was harm intended? What was the purpose behind the content or action?"
            />
            <DecisionCard
              emoji="💥"
              label="Impact"
              desc="Could this hurt someone or the community? What's the real-world effect?"
            />
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
            <p className="text-slate-700 leading-relaxed text-center">
              This allows us to handle <span className="font-semibold text-slate-800">gray areas fairly</span>, not just rigidly. We aim to review reports as quickly as possible, prioritizing content that may cause harm.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement Tiers */}
      <section id="enforcement-tiers" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Enforcement
              <span className="font-kalam text-red-700 ml-3">tiers</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi applies a three-tier enforcement system. All moderation actions must correspond to the appropriate tier.
            </p>
          </div>

          <div className="space-y-4">
            <TierCard
              tier="Tier 1"
              label="Zero Tolerance"
              color="red"
              protocol="Immediate permanent ban + report to authorities. No appeal. No exceptions."
              items={[
                'Child sexual abuse material (CSAM) — report immediately to NCMEC via CyberTipline',
                'Credible threats of violence toward any individual or group',
                'Content facilitating, promoting, or coordinating real-world violence or terrorism',
                'Non-consensual sharing of intimate images (deepfakes or real)',
              ]}
            />
            <TierCard
              tier="Tier 2"
              label="Severe"
              color="orange"
              protocol="Immediate permanent ban. User may appeal within 30 days."
              items={[
                'Hate speech or content dehumanizing individuals or groups',
                'Sexual exploitation or coercion',
                'Doxxing — sharing private information without consent',
                'Impersonation of a real person with intent to deceive or harm',
                'Coordinated inauthentic behavior — fake accounts, bot networks',
              ]}
            />
            <TierCard
              tier="Tier 3"
              label="Serious"
              color="yellow"
              protocol="Content removal + account restriction. Escalates to permanent ban for repeat or severe violations. Appeal within 30 days."
              items={[
                'Harassment, bullying, or targeted intimidation',
                'Scams, fraud, or deceptive practices',
                'Repeated Community Guidelines violations',
                'Promotion of self-harm, eating disorders, or dangerous behaviors',
                'AI-generated content presented as real personal experience',
              ]}
            />
          </div>

          <p className="text-sm text-slate-500 mt-6 text-center">
            All enforcement actions are logged with date, content description, tier applied, action taken, and team member responsible. This record is confidential and internal only.
          </p>
        </div>
      </section>

      {/* Gray Areas */}
      <section id="gray-areas" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Gray
              <span className="font-kalam text-red-700 ml-3">areas</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Some content requires careful judgment. We review these case-by-case — no rigid application of rules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { emoji: '💬', label: 'Emotionally charged personal content' },
              { emoji: '🌍', label: 'Sensitive real-world topics' },
              { emoji: '😄', label: 'Humor or sarcasm that could be misunderstood' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-red-200 text-center shadow-sm">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <p className="text-sm font-semibold text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200">
                <Users className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Shared review process</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For gray-area decisions, we don't rely on a single perspective. Content may be reviewed collaboratively by members of the MeeLi team and trained ambassadors to ensure decisions are fair, balanced, and aligned with MeeLi's values. This helps prevent one-sided decisions and keeps moderation grounded in the community we're building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Role */}
      <section id="community-role" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Community
              <span className="font-kalam text-red-700 ml-3">role</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi is a shared space. Users play an important role in keeping it safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-red-200 mx-auto mb-4">
                <Flag className="w-7 h-7 text-red-700" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Report harmful content</h3>
              <p className="text-sm text-slate-600">Use the in-app report button on any profile, post, or video when something doesn't belong.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-red-200 mx-auto mb-4">
                <Shield className="w-7 h-7 text-red-700" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Respect the guidelines</h3>
              <p className="text-sm text-slate-600">Lead by example. The best communities are built by the people in them — not just the rules above them.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm text-center">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-red-200 mx-auto mb-4">
                <Layers className="w-7 h-7 text-red-700" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Contribute positively</h3>
              <p className="text-sm text-slate-600">Post real content, support others, and help make MeeLi a space worth having.</p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-4 border border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Looking ahead: as MeeLi grows, we'll expand moderation through improved reporting tools, additional support, and responsible use of technology — while keeping human judgment at the center.
            </p>
          </div>
        </div>
      </section>

      {/* Appeals */}
      <section id="appeals" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Appeals
              <span className="font-kalam text-red-700 ml-3">process</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Users may appeal Tier 2 and Tier 3 enforcement decisions within 30 days by contacting MeeLi support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-700" />
                <span>When an appeal is received</span>
              </h3>
              <ul className="space-y-2">
                {[
                  'Acknowledge receipt within 48 hours',
                  'Assign to a senior team member not involved in the original decision',
                  'Review original decision, context, and any new information provided',
                  'Respond with a final decision within 14 days',
                  'Document outcome',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <Scale className="w-5 h-5 text-red-700" />
                <span>Possible outcomes</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-xl border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Decision upheld</p>
                    <p className="text-xs text-slate-600">Ban or restriction remains in place.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Decision reversed</p>
                    <p className="text-xs text-slate-600">Account reinstated; content restored if appropriate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <MessageSquare className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Decision modified</p>
                    <p className="text-xs text-slate-600">Restriction reduced or adjusted.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6">
            <p className="text-sm text-slate-300 leading-relaxed text-center">
              <span className="font-semibold text-white">Tier 1 violations — no appeal, ever.</span> These include CSAM, credible threats of violence, terrorism, and non-consensual intimate imagery. If you contact support about a Tier 1 ban, we will confirm that the decision is final and not engage further.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PipelineCard = ({
  step,
  icon,
  title,
  body,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  body: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm relative">
    <div className="absolute -top-3 left-6 bg-red-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
      {step}
    </div>
    <div className="bg-gradient-to-br from-red-50 to-orange-50 w-12 h-12 rounded-xl flex items-center justify-center border border-red-200 mb-4 mt-2">
      {icon}
    </div>
    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
  </div>
);

const StepCard = ({
  number,
  icon,
  title,
  body,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm flex items-start space-x-5">
    <div className="bg-gradient-to-br from-red-50 to-orange-50 w-14 h-14 rounded-2xl flex flex-col items-center justify-center border border-red-200 flex-shrink-0">
      <span className="text-xs font-bold text-red-300">{number}</span>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  </div>
);

const DecisionCard = ({
  emoji,
  label,
  desc,
}: {
  emoji: string;
  label: string;
  desc: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm text-center">
    <div className="text-4xl mb-3">{emoji}</div>
    <h3 className="font-bold text-slate-800 mb-2">{label}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const TierCard = ({
  tier,
  label,
  color,
  protocol,
  items,
}: {
  tier: string;
  label: string;
  color: 'red' | 'orange' | 'yellow';
  protocol: string;
  items: string[];
}) => {
  const colorMap = {
    red: 'bg-red-50 border-red-300',
    orange: 'bg-orange-50 border-orange-300',
    yellow: 'bg-amber-50 border-amber-300',
  };
  const textColorMap = {
    red: 'text-red-700',
    orange: 'text-orange-700',
    yellow: 'text-amber-700',
  };
  const borderColorMap = {
    red: 'border-red-300',
    orange: 'border-orange-300',
    yellow: 'border-amber-300',
  };
  return (
    <div className={`rounded-2xl p-6 border ${colorMap[color]}`}>
      <div className="flex items-center space-x-3 mb-3">
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white border ${borderColorMap[color]} ${textColorMap[color]}`}>
          {tier}
        </span>
        <span className={`font-bold text-lg ${textColorMap[color]}`}>{label}</span>
      </div>
      <p className={`text-sm font-semibold mb-3 italic ${textColorMap[color]}`}>{protocol}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-600 flex items-start space-x-2">
            <span className={`mt-1 flex-shrink-0 ${textColorMap[color]}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyModerationPage;
