import Footer from '../components/Footer';
import { ArrowLeft, Heart, Shield, Users, Sparkles, Leaf, Star, Zap } from 'lucide-react';

const SECTIONS = [
  { id: 'our-mission', label: 'Our mission' },
  { id: 'what-meeli-is', label: 'What MeeLi is' },
  { id: 'what-we-believe', label: 'What we believe' },
  { id: 'why-we-exist', label: 'Why we exist' },
  { id: 'meet-life', label: "Let's meet life" },
];

const AboutMeeliPage = () => {
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
            About
            <span className="font-kalam text-red-700 ml-3">MeeLi</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A healthy social app for students. Learn about our mission, what we believe, and why we exist.
          </p>
          <p className="text-sm text-slate-500 mt-4">Effective June 11, 2026 — Version 0.3.0</p>
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

      {/* Our Mission */}
      <section id="our-mission" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our
            <span className="font-kalam text-red-700 ml-3">Mission</span>
          </h2>
          <p className="font-kalam text-2xl text-red-700 italic mb-8">
            Bringing Soul Back to Social Media
          </p>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed mb-12">
            <p className="font-semibold text-slate-800">
              Life isn't meant to be watched. It's meant to be lived.
            </p>
            <p>
              MeeLi is built on a simple belief: the best moments in life happen offline.
            </p>
            <p>
              We exist to help people create real connections, explore who they are, and
              experience life as it actually is — not through followers, not through likes,
              but through real moments and real people.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              emoji="🌿"
              title="Built for your wellbeing"
              body="No infinite scroll, no vanity metrics. MeeLi has a health bar so time here makes you feel better, not worse."
            />
            <FeatureCard
              emoji="🎞️"
              title="Real moments only"
              body="No AI content, no filters. Just you and your campus as it actually is."
            />
            <FeatureCard
              emoji="🤝"
              title="Connect, then meet"
              body="Chat leads to real hangouts. MeeLi works best when you log off."
            />
          </div>
        </div>
      </section>

      {/* What MeeLi Is */}
      <section id="what-meeli-is" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What MeeLi
              <span className="font-kalam text-red-700 ml-3">Is</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi isn't about content. It's about life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Heart className="w-6 h-6 text-red-700" />}
              title="Share your real experiences"
              body="Your stories, your voice, your actual life — not a curated highlight reel or manufactured persona."
            />
            <InfoCard
              icon={<Users className="w-6 h-6 text-red-700" />}
              title="Connect with people who matter"
              body="Real relationships built on shared interests, shared spaces, and genuine curiosity about each other."
            />
            <InfoCard
              icon={<Sparkles className="w-6 h-6 text-red-700" />}
              title="Explore your identity"
              body="Discover your passions, interests, and who you're becoming — without the pressure of performance."
            />
          </div>

          <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 text-center">
            <p className="text-lg font-semibold text-slate-800 leading-relaxed">
              Every part of MeeLi is designed to move you closer to life — not away from it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section id="what-we-believe" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What We
              <span className="font-kalam text-red-700 ml-3">Believe</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              In a world shaped by AI, comparison, and constant noise, we believe in meeting life through four core values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <BeliefCard
              icon={<Star className="w-7 h-7 text-red-700" />}
              emoji="❤️"
              title="Authenticity & Imperfection"
              tagline="Be real. Be human. Be you."
              body="Perfection isn't the goal — truth is. MeeLi is a space for genuine expression, not a curated performance. Show up as you are."
            />
            <BeliefCard
              icon={<Shield className="w-7 h-7 text-red-700" />}
              emoji="🧘"
              title="Health, Safety & Trust"
              tagline="A platform should protect you, not drain you."
              body="We prioritize your well-being and help you build healthy habits for life. No addictive design. No dark patterns."
            />
            <BeliefCard
              icon={<Users className="w-7 h-7 text-red-700" />}
              emoji="🤝"
              title="Connection & Community"
              tagline="Real connection is why we're here."
              body="We use technology to bring people together — across life's big and small moments, passions, and experiences. Then we get out of the way."
            />
            <BeliefCard
              icon={<Leaf className="w-7 h-7 text-red-700" />}
              emoji="❤️‍🔥"
              title="Growth & Self-Discovery"
              tagline="Meet who you're becoming."
              body="You are not just one thing. We encourage curiosity, exploration, and discovering all parts of who you are — without judgment."
            />
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section id="why-we-exist" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Why We
              <span className="font-kalam text-red-700 ml-3">Exist</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              We've never been more connected — and we've never felt more alone.
            </p>
            <p>
              Social media was meant to bring us together. Somewhere along the way, it started
              pulling us away from real life.
            </p>
            <p>
              <span className="font-semibold text-slate-800">MeeLi exists to change that.</span>{' '}
              Not by replacing real life, but by helping you live it.
            </p>
          </div>

          <div className="mt-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <StatItem icon={<Zap className="w-6 h-6 text-red-700" />} label="No ads. Ever." />
              <StatItem icon={<Shield className="w-6 h-6 text-red-700" />} label="No data selling." />
              <StatItem icon={<Heart className="w-6 h-6 text-red-700" />} label="No engagement bait." />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Meet Life */}
      <section id="meet-life" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Let's Meet
            <span className="font-kalam text-red-700 ml-3">Life</span>
          </h2>
          <div className="space-y-2 text-xl text-slate-600 leading-relaxed font-kalam italic mb-10">
            <p>Let's meet authenticity.</p>
            <p>Let's meet health.</p>
            <p>Let's meet connection.</p>
            <p>Let's meet growth.</p>
            <p className="text-2xl font-bold text-red-700 mt-4">Let's meet life. ❤️</p>
          </div>
          <p className="font-kalam text-2xl text-slate-500 italic">
            Meet Yourself. Meet Others. Meet Life.
          </p>
          <p className="text-red-600 font-semibold mt-2">- MeeLi</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({
  emoji,
  title,
  body,
}: {
  emoji: string;
  title: string;
  body: string;
}) => (
  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
    <div className="text-3xl mb-3">{emoji}</div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
  </div>
);

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

const BeliefCard = ({
  icon,
  emoji,
  title,
  tagline,
  body,
}: {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  tagline: string;
  body: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center space-x-3 mb-3">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200">
        {icon}
      </div>
      <span className="text-2xl">{emoji}</span>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <p className="text-red-700 font-semibold italic text-sm mb-2">{tagline}</p>
    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
  </div>
);

const StatItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center border border-red-200">
      {icon}
    </div>
    <span className="font-semibold text-slate-700 text-sm">{label}</span>
  </div>
);

export default AboutMeeliPage;
