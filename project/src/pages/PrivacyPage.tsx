import {
  ArrowLeft,
  Shield,
  EyeOff,
  Mail,
  Compass,
  Lock,
  Trash2,
  MessageCircle,
  Download,
  Edit3,
  UserX,
  Flag,
  Camera,
  Mic,
  Heart,
  Sparkles,
  Building2,
  Scale,
} from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top banner */}
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
            Privacy &
            <span className="font-kalam text-red-700 ml-3">Company Info</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            How we handle your data, the controls you have, the permissions we ask for, and our company details — written plainly.
          </p>
          <p className="text-sm text-slate-500 mt-4">Last updated: May 2026</p>
        </div>
      </header>

      {/* What is MeeLi */}
      <section id="what-is-meeli" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What is
            <span className="font-kalam text-red-700 ml-3">MeeLi?</span>
          </h2>
          <p className="font-kalam text-2xl text-red-700 italic mb-6">
            Bringing Soul Back to Social Media
          </p>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              MeeLi is built on a simple belief: the best moments happen offline. We exist to
              help college students make real-world connections — not accumulate followers or
              chase likes.
            </p>
            <p>
              Every feature in MeeLi is designed to push you toward an in-person meetup. Health,
              Safety, and Trust are our core pillars — no bots, no ads, no engagement bait.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Built for your wellbeing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No infinite scroll, no vanity metrics. MeeLi has a health bar so time here makes
                you feel better, not worse.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="text-3xl mb-3">🎞️</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Real moments only</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No AI content, no filters. Just you and your campus as it actually is.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Connect, then meet</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chat leads to real hangouts. MeeLi works best when you log off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your data, in plain English */}
      <section id="data" className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Your data, in
              <span className="font-kalam text-red-700 ml-3">plain English</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The short version, no legalese. If something here is unclear, email us — we'll explain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DataCard
              icon={<Shield className="w-6 h-6 text-red-700" />}
              title="What we collect"
              body="Just what we need to make MeeLi work — your name, university email, major, interests, and the things you do in the app (posts, connections, messages, meetup confirmations), including the photos and videos you choose to record or upload."
            />
            <DataCard
              icon={<EyeOff className="w-6 h-6 text-red-700" />}
              title="What we don't do"
              body="We don't sell your data. We don't show ads. We don't use engagement bait to keep you scrolling. No bots either."
            />
            <DataCard
              icon={<Mail className="w-6 h-6 text-red-700" />}
              title="Your university email"
              body="Used once to confirm you're a student. After that, we never email you there."
            />
            <DataCard
              icon={<Compass className="w-6 h-6 text-red-700" />}
              title="Your Journey"
              body="Your activity builds a personal Journey on your profile. It stays with you and is never sold or shared."
            />
            <DataCard
              icon={<Lock className="w-6 h-6 text-red-700" />}
              title="Keeping it safe"
              body="Industry-standard encryption, in transit and at rest."
            />
            <DataCard
              icon={<Trash2 className="w-6 h-6 text-red-700" />}
              title="Leaving MeeLi"
              body="Delete your account any time. Your posts, messages, and profile are permanently removed within 30 days."
            />
            <DataCard
              icon={<MessageCircle className="w-6 h-6 text-red-700" />}
              title="Questions?"
              body={
                <>
                  Email{' '}
                  <a
                    href="mailto:support@meeli.social"
                    className="text-red-700 hover:text-red-800 underline"
                  >
                    support@meeli.social
                  </a>{' '}
                  — privacy questions, support, or anything else, all go to the same place.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Your rights & controls */}
      <section id="rights" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Your rights &
              <span className="font-kalam text-red-700 ml-3">controls</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              You're in charge of your data and who you interact with.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <RightRow
              icon={<Download className="w-5 h-5 text-red-700" />}
              title="Request a copy of your data"
              body={
                <>
                  Want everything we have on you? Email{' '}
                  <a
                    href="mailto:support@meeli.social"
                    className="text-red-700 hover:text-red-800 underline"
                  >
                    support@meeli.social
                  </a>{' '}
                  from the address tied to your account. We'll send your data within 30 days, free
                  of charge.
                </>
              }
            />
            <RightRow
              icon={<Edit3 className="w-5 h-5 text-red-700" />}
              title="Correct or update your data"
              body="Most details — name, pronouns, major, bio, interests — you can edit yourself in Settings → Edit Profile. For anything else, email us."
            />
            <RightRow
              icon={<Trash2 className="w-5 h-5 text-red-700" />}
              title="Delete your account & data"
              body="Open Settings → Delete Account. Your posts, messages, and profile are permanently removed within 30 days."
            />
            <RightRow
              icon={<UserX className="w-5 h-5 text-red-700" />}
              title="Block another user"
              body="On any profile, tap the menu and choose Block. Blocked users can't message you, see your posts, or appear in your feed, and you won't see theirs."
            />
            <RightRow
              icon={<Flag className="w-5 h-5 text-red-700" />}
              title="Report a user or content"
              body="See something that breaks the rules? Hit Report on any profile, post, video, or event. Our team reviews every report and acts on violations — content removal, account suspension, or permanent ban."
            />
            <RightRow
              icon={<Scale className="w-5 h-5 text-red-700" />}
              title="Lodge a complaint with a regulator"
              body="If you're in the EU, UK, or another region with a data protection authority and you believe we've mishandled your data, you have the right to complain to your local supervisory authority. We'd much rather hear from you first — but the right is yours either way."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Device permissions */}
      <section id="permissions" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Device
              <span className="font-kalam text-red-700 ml-3">permissions</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi only asks for what's needed to record and share a real moment. The fewer
              permissions, the more privacy.
            </p>
          </div>

          <div className="space-y-4">
            <PermissionCard
              icon={<Camera className="w-7 h-7 text-red-700" />}
              title="Camera"
              body="We use your camera to record video for the posts and challenges you share on MeeLi. Without camera access, you can still browse and chat — you just can't record new video."
              hint="Change this any time in your phone's Settings → MeeLi → Camera."
            />
            <PermissionCard
              icon={<Mic className="w-7 h-7 text-red-700" />}
              title="Microphone"
              body="We use your microphone to capture the audio that goes with the videos you record. This is a separate permission from the camera — without it, your videos record silently. We never record audio without you starting a video."
              hint="Change this any time in your phone's Settings → MeeLi → Microphone."
            />
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Uploading existing photos &amp; videos:</span>{' '}
              when you pick media from your gallery, your phone's photo picker lets you select just
              the files you want to share. MeeLi only receives those — it never sees your full
              gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Community & age */}
      <section id="community" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Community &
              <span className="font-kalam text-red-700 ml-3">age</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-start space-x-3 mb-3">
                <Heart className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-800">Verified students, 17+</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                MeeLi is for verified university students aged 17 or older. We confirm
                eligibility through your university email at sign-up.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-start space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-800">Moderated when it matters</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Most posts go up right away. A few things — like challenges — are reviewed
                before they go public. And anything reported for breaking the rules
                (AI-generated content, harassment, nudity, impersonation, spam) gets reviewed
                by our team and acted on quickly.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-6 text-center max-w-2xl mx-auto leading-relaxed">
            We do not knowingly collect or store data from anyone under 17, and we follow
            stricter protections for children under 13 in line with COPPA and similar
            children's-privacy laws. If you believe a minor — and especially a child under 13 —
            has created an account, email{' '}
            <a
              href="mailto:support@meeli.social"
              className="text-red-700 hover:text-red-800 underline"
            >
              support@meeli.social
            </a>{' '}
            and we'll remove it.
          </p>
        </div>
      </section>

      {/* Company registration */}
      <section id="company" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Company
              <span className="font-kalam text-red-700 ml-3">registration</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The official record, as registered with our payments profile.{' '}
              <span className="font-semibold text-slate-700">
                MeeLi, Inc. is the data controller
              </span>{' '}
              for the information described on this page.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center px-6 py-4 bg-slate-50 border-b border-slate-200">
              <Building2 className="w-5 h-5 text-slate-600 mr-2" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Organization details
              </span>
            </div>
            <dl className="divide-y divide-slate-100">
              <RegistrationRow label="Organization name" value="MeeLi, Inc." />
              <RegistrationRow label="Registry" value="Dun & Bradstreet" />
              <RegistrationRow label="D-U-N-S number" value="144977939" />
              <RegistrationRow
                label="Address"
                value={
                  <>
                    1824 Telfair Way
                    <br />
                    Charleston, SC 29412-2376
                    <br />
                    United States
                  </>
                }
              />
            </dl>
          </div>
        </div>
      </section>

      {/* Changes notice */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">Changes to this page.</span> If we
            update how we handle your data, we'll change the "Last updated" date at the top and
            — for anything material — we'll notify you in the app before it takes effect.
          </p>
        </div>
      </section>

      {/* Footer back-link */}
      <footer className="py-12 bg-slate-800 text-center">
        <a
          href="/"
          className="inline-flex items-center text-slate-300 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to MeeLi home</span>
        </a>
        <p className="text-slate-500 text-sm mt-4">© 2025 MeeLi, Inc.</p>
      </footer>
    </div>
  );
};

const DataCard = ({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
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

const RightRow = ({
  icon,
  title,
  body,
  isLast,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
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

const PermissionCard = ({
  icon,
  title,
  body,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  hint: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm">
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-200">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-3">{body}</p>
        <p className="text-slate-500 text-sm italic">{hint}</p>
      </div>
    </div>
  </div>
);

const RegistrationRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-4">
    <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{label}</dt>
    <dd className="md:col-span-2 text-slate-800 leading-relaxed">{value}</dd>
  </div>
);

export default PrivacyPage;
