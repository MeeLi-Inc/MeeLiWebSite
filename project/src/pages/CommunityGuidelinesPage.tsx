import Footer from '../components/Footer';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Shield,
  Users,
  Heart,
  Bot,
  Brain,
  Globe,
  AlertTriangle,
  Sparkles,
  Megaphone,
  Scale,
  Phone,
  Flag,
} from 'lucide-react';

const SECTIONS = [
  { id: 'quick-guide', label: 'Quick guide' },
  { id: 'how-we-treat-each-other', label: 'Respect' },
  { id: 'what-you-share', label: 'What you share' },
  { id: 'ai-authenticity', label: 'AI & authenticity' },
  { id: 'sensitive-topics', label: 'Sensitive topics' },
  { id: 'no-go-zones', label: 'No-go zones' },
  { id: 'safety-tiers', label: 'Safety tiers' },
  { id: 'faith', label: 'Faith & beliefs' },
  { id: 'ads-spam', label: 'Ads & spam' },
  { id: 'enforcement', label: 'Enforcement' },
];

const CommunityGuidelinesPage = () => {
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
            Community &
            <span className="font-kalam text-red-700 ml-3">Content Guidelines</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            What belongs on MeeLi, how we treat each other, and how we keep this space real, safe, and human.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-500">
            <span>Effective June 11, 2026</span>
            <span aria-hidden="true">/</span>
            <span>Version 0.3.0</span>
            <span aria-hidden="true">/</span>
            <span>Users must be 17 or older</span>
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

      {/* Quick Guide */}
      <section id="quick-guide" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Quick
              <span className="font-kalam text-red-700 ml-3">guide</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi is about real people and real life. Here's what belongs here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center space-x-2 mb-5">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-800">More of this</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Be a person, not a bot', desc: 'Share your actual hobbies, stories, experiences, and wins.' },
                  { label: 'Real life', desc: 'Your day-to-day, your thoughts, your journey — big or small.' },
                  { label: 'Well-being', desc: 'Mental and physical health, growth, and self-discovery.' },
                  { label: 'Passions', desc: 'Hobbies, events, interests, and the things that make you you.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                      <span className="text-sm text-slate-600"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center space-x-2 mb-5">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-slate-800">None of that noise</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Politics & outrage', desc: 'Political content, war coverage, celebrity gossip.' },
                  { label: 'Harm', desc: 'Harassment, hate, bullying, or anything that makes others feel unsafe.' },
                  { label: 'Low-effort / fake', desc: 'AI-generated content, spam, or content pretending to be real.' },
                  { label: 'Recycled content', desc: "TV clips, movies, or anything you didn't create or don't own." },
                  { label: 'Ads & promotion', desc: 'Spam, ads, or self-promotion that takes away from real connection.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                      <span className="text-sm text-slate-600"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 italic mt-6">
            If it feels real, respectful, and human — it probably belongs here.
          </p>
        </div>
      </section>

      {/* How We Treat Each Other */}
      <section id="how-we-treat-each-other" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              How we treat
              <span className="font-kalam text-red-700 ml-3">each other</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We expect everyone on MeeLi to show up with basic respect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Heart className="w-6 h-6 text-emerald-600" />}
              title="Allowed"
              items={[
                'Honest opinions and experiences',
                'Vulnerability and personal stories',
                'Healthy disagreement (without attacking the person)',
              ]}
              variant="green"
            />
            <InfoCard
              icon={<Shield className="w-6 h-6 text-red-600" />}
              title="Not allowed"
              items={[
                'Harassment, bullying, or intimidation',
                'Hate speech or discrimination (race, ethnicity, gender, religion, disability, age, etc.)',
                'Targeted attacks or encouraging harm toward others',
              ]}
              variant="red"
            />
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-slate-700 font-semibold">
              Simple rule: if it makes someone feel unsafe being human here, it doesn't belong.
            </p>
          </div>
        </div>
      </section>

      {/* What You Share */}
      <section id="what-you-share" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What you
              <span className="font-kalam text-red-700 ml-3">share</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi is built for real life — not recycled content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Sparkles className="w-6 h-6 text-emerald-600" />}
              title="We encourage"
              items={[
                'Your own stories, experiences, and perspectives',
                'Everyday moments (big or small)',
                'Growth, health, and self-discovery',
              ]}
              variant="green"
            />
            <InfoCard
              icon={<XCircle className="w-6 h-6 text-red-600" />}
              title="Not allowed"
              items={[
                "Reposting movies, TV clips, or copyrighted content you don't own",
                'Low-effort, mass-produced, or spammy content',
                'Content created purely to chase attention without substance',
              ]}
              variant="red"
            />
          </div>

          <p className="text-center text-slate-500 italic mt-6">
            By posting on MeeLi, you confirm you own or have rights to the content you share.
          </p>
        </div>
      </section>

      {/* AI & Authenticity */}
      <section id="ai-authenticity" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              AI &
              <span className="font-kalam text-red-700 ml-3">authenticity</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi exists because real human stories matter. AI can be a useful tool — but it can't live your life for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Bot className="w-6 h-6 text-emerald-600" />}
              title="Allowed"
              items={[
                'AI-powered editing tools to enhance your content (captions, trimming, noise reduction, translation)',
                'Using AI to help organize or refine thoughts you then express in your own words and voice',
              ]}
              variant="green"
            />
            <InfoCard
              icon={<Bot className="w-6 h-6 text-red-600" />}
              title="Not allowed"
              items={[
                'AI-generated photos, videos, or written posts presented as your real experience',
                'Deepfakes or AI-generated images depicting real people without consent',
                'Avatars or profiles that are AI-generated',
                'Automated or bot-driven posting',
                'Mass-produced, low-effort content designed to flood the platform',
              ]}
              variant="red"
            />
          </div>

          <div className="mt-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-slate-700 italic">
              The test is simple: did a real person live it, feel it, or think it? If the answer is no — it doesn't belong on MeeLi.
            </p>
          </div>
        </div>
      </section>

      {/* Sensitive Topics */}
      <section id="sensitive-topics" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Sensitive topics &
              <span className="font-kalam text-red-700 ml-3">real life</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi was built for the full human experience — not just the highlight reel. The hard parts of life are welcome here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Brain className="w-6 h-6 text-emerald-600" />}
              title="Allowed"
              items={[
                'Sharing personal struggles, setbacks, and difficult emotions',
                'Mental health conversations — including anxiety, depression, grief, and burnout',
                'Documenting your healing, recovery, or growth journey',
                'Discussing difficult life experiences in a way that is honest and human',
              ]}
              variant="green"
            />
            <InfoCard
              icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
              title="Not allowed"
              items={[
                'Content that promotes, glorifies, or provides methods for self-harm or suicide',
                'Graphic depictions of injury or death without clear personal or educational context',
                'Content that promotes eating disorders or dangerous fitness behaviors',
                'Content that is gratuitously triggering with no redemptive purpose',
              ]}
              variant="red"
            />
          </div>

          <div className="mt-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-800 mb-1">If you're struggling</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  MeeLi surfaces crisis resources when certain topics are detected. You can also reach the{' '}
                  <span className="font-semibold text-slate-800">988 Suicide & Crisis Lifeline</span> anytime by calling or texting{' '}
                  <span className="font-bold text-red-700">988</span>, or text HOME to{' '}
                  <span className="font-bold text-red-700">741741</span> for the Crisis Text Line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No-Go Zones */}
      <section id="no-go-zones" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What we
              <span className="font-kalam text-red-700 ml-3">don't focus on</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi is intentionally different. Some content that's normal elsewhere simply doesn't belong here.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Globe className="w-5 h-5 text-red-700" />}
              title="Political content"
              body="No political opinions, commentary, campaigning, propaganda, or content tied to political figures or movements — of any kind."
            />
            <Row
              icon={<AlertTriangle className="w-5 h-5 text-red-700" />}
              title="War & conflict coverage"
              body="War content, graphic global conflict, or news-driven coverage of world events."
            />
            <Row
              icon={<Megaphone className="w-5 h-5 text-red-700" />}
              title="Outrage & divisive content"
              body="Content that exists to shock, enrage, or divide — rage-bait, inflammatory hot takes, and recycled divisive cultural moments without genuine personal connection."
            />
            <Row
              icon={<Users className="w-5 h-5 text-red-700" />}
              title="Celebrity gossip & viral drama"
              body="Content centered on public figures rather than your own life and experience."
              isLast
            />
          </div>

          <p className="text-center text-slate-500 italic mt-6">
            This isn't about ignoring the world. It's about building something the world doesn't already have.
          </p>
        </div>
      </section>

      {/* Safety Tiers */}
      <section id="safety-tiers" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Safety
              <span className="font-kalam text-red-700 ml-3">first</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The following violations are acted on immediately and in some cases reported to authorities. There is no grace period for content or behavior that puts people at risk.
            </p>
          </div>

          <div className="space-y-4">
            <TierCard
              tier="Tier 1"
              label="Zero Tolerance"
              color="red"
              consequence="Immediate permanent ban + reported to authorities. No appeal. No exceptions."
              items={[
                'Child sexual abuse material (CSAM) or any sexual content involving minors',
                'Credible threats of violence toward any individual or group',
                'Content that facilitates, promotes, or coordinates real-world violence or terrorism',
                'Non-consensual sharing of intimate images (deepfakes or real)',
              ]}
            />
            <TierCard
              tier="Tier 2"
              label="Severe"
              color="orange"
              consequence="Immediate permanent ban. Appeal within 30 days."
              items={[
                'Hate speech or content that dehumanizes individuals or groups',
                'Sexual exploitation or coercion of any kind',
                'Doxxing — sharing private information without consent',
                'Impersonation of another real person with intent to deceive or harm',
                'Coordinated inauthentic behavior — fake accounts, bot networks',
              ]}
            />
            <TierCard
              tier="Tier 3"
              label="Serious"
              color="yellow"
              consequence="Content removal + account restriction on first offense. Escalates to permanent ban for repeat or severe violations. Appeal within 30 days."
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
            MeeLi will cooperate fully with law enforcement when legally required or when necessary to protect user safety.
          </p>
        </div>
      </section>

      {/* Faith & Beliefs */}
      <section id="faith" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Faith, spirituality &
              <span className="font-kalam text-red-700 ml-3">personal beliefs</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi is a place for the full human journey — and for many people, faith and spirituality are a meaningful part of that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Heart className="w-6 h-6 text-emerald-600" />}
              title="Allowed"
              items={[
                'Sharing your personal faith, spiritual practice, or belief system',
                'Documenting how your beliefs shape your life, growth, and decisions',
                'Respectful conversation and curiosity about different worldviews',
                'Cultural and ancestral traditions that are meaningful to you',
              ]}
              variant="green"
            />
            <InfoCard
              icon={<Shield className="w-6 h-6 text-red-600" />}
              title="Not allowed"
              items={[
                'Using your beliefs to judge, demean, or exclude others',
                'Proselytizing — pressuring or repeatedly urging others to adopt your beliefs',
                'Content that frames any group of people as inferior based on their faith',
                'Hate speech or discrimination tied to religion or belief system',
              ]}
              variant="red"
            />
          </div>
        </div>
      </section>

      {/* Ads & Spam */}
      <section id="ads-spam" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Ads, promotion
              <span className="font-kalam text-red-700 ml-3">&amp; spam</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi is not an advertising platform — in every sense. This space is built for real people and real connection, not commercial gain.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Spam of any kind',
                'Self-promotion, brand promotion, or advertising of products or services',
                'Affiliate links or referral codes',
                'Undisclosed or disclosed paid partnerships or brand deals',
                'Fake engagement tactics — buying followers, likes, or manufactured interaction',
                'Any commercial arrangement between a user and an outside brand',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-slate-500 italic mt-6">
            If it's selling something — including yourself as a brand — it doesn't belong here.
          </p>
        </div>
      </section>

      {/* Enforcement */}
      <section id="enforcement" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Enforcement &
              <span className="font-kalam text-red-700 ml-3">judgment</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Not everything fits neatly into rules — and we won't pretend otherwise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <JudgmentCard emoji="🔍" label="Context" desc="What's the full picture?" />
            <JudgmentCard emoji="💭" label="Intent" desc="What was the purpose behind it?" />
            <JudgmentCard emoji="💥" label="Impact" desc="How did it affect the community?" />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-red-200">
            <div className="flex items-start space-x-3">
              <Scale className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Our commitment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our goal is never punishment for its own sake — it's protecting the people and the space we're building together. We approach every enforcement decision with context, care, and consistency. The rules exist to protect the community. So does our judgment when the rules run out.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 mb-4">
              See something that doesn't belong? Report it.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Flag className="w-4 h-4 text-red-700" />
              <a href="mailto:support@meeli.social" className="text-red-700 hover:text-red-800 underline text-sm font-medium">
                support@meeli.social
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">Changes to these guidelines.</span> These guidelines are reviewed and updated periodically. Continued use of MeeLi following any updates constitutes your acceptance of the current version.
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
  items,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  variant: 'green' | 'red';
}) => {
  const styles = {
    green: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
    red: 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200',
  };
  return (
    <div className={`rounded-2xl p-6 border ${styles[variant]}`}>
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start space-x-2 text-sm text-slate-600">
            <span className={`mt-1 flex-shrink-0 ${variant === 'green' ? 'text-emerald-500' : 'text-red-400'}`}>
              {variant === 'green' ? '✓' : '✕'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
    red: 'text-red-700 border-red-300',
    orange: 'text-orange-700 border-orange-300',
    yellow: 'text-amber-700 border-amber-300',
  };
  return (
    <div className={`rounded-2xl p-6 border ${colorMap[color]}`}>
      <div className="flex items-center space-x-3 mb-3">
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white border ${labelColorMap[color]}`}>
          {tier}
        </span>
        <span className={`font-bold text-lg ${labelColorMap[color].split(' ')[0]}`}>{label}</span>
      </div>
      <p className="text-sm font-semibold text-slate-700 mb-3 italic">{consequence}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-600 flex items-start space-x-2">
            <span className={`mt-1 flex-shrink-0 ${labelColorMap[color].split(' ')[0]}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const JudgmentCard = ({ emoji, label, desc }: { emoji: string; label: string; desc: string }) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 text-center shadow-sm">
    <div className="text-3xl mb-3">{emoji}</div>
    <h3 className="font-bold text-slate-800 mb-1">{label}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

export default CommunityGuidelinesPage;
