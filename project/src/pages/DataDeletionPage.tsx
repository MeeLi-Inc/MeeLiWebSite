import Footer from '../components/Footer';
import {
  ArrowLeft,
  Trash2,
  CheckCircle,
  Lock,
  Mail,
  AlertTriangle,
  RotateCcw,
  EyeOff,
  Database,
  Shield,
} from 'lucide-react';

const SECTIONS = [
  { id: 'how-to-delete', label: 'How to delete' },
  { id: 'what-happens', label: 'What happens' },
  { id: 'recovery-period', label: 'Recovery period' },
  { id: 'what-gets-deleted', label: 'What gets deleted' },
  { id: 'what-may-be-retained', label: 'What may be retained' },
  { id: 'help', label: 'Need help?' },
];

const DataDeletionPage = () => {
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
            Data &
            <span className="font-kalam text-red-700 ml-3">Account Deletion</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            How to delete your MeeLi account, what data is removed, and what may be retained for safety and platform integrity.
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

      {/* How to Delete */}
      <section id="how-to-delete" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              How to delete
              <span className="font-kalam text-red-700 ml-3">your account</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi is built on the idea that your data belongs to you. If you decide to leave, you should be able to do so clearly and simply.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Trash2 className="w-5 h-5 text-red-700" />}
              title="From inside the app"
              body={
                <>
                  Open your profile, then go to{' '}
                  <span className="font-semibold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 text-xs">
                    Settings → Delete Account
                  </span>{' '}
                  and confirm. This permanently removes your account and all of your data after the 14-day recovery period.
                </>
              }
            />
            <Row
              icon={<Mail className="w-5 h-5 text-red-700" />}
              title="By email (if you can't sign into the app)"
              body={
                <>
                  Email{' '}
                  <a
                    href="mailto:support@meeli.social?subject=Account%20deletion"
                    className="text-red-700 hover:text-red-800 underline"
                  >
                    support@meeli.social
                  </a>{' '}
                  with the subject "Account deletion" from the email address tied to your MeeLi account. We use that to verify it's really you. If you have a username, please include it so we can find the account quickly.
                </>
              }
              isLast
            />
          </div>
        </div>
      </section>

      {/* What Happens */}
      <section id="what-happens" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What
              <span className="font-kalam text-red-700 ml-3">happens</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              When you request deletion, here's exactly what occurs.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-red-200 hidden md:block" />
            <div className="space-y-4">
              <TimelineItem
                step="Immediately"
                icon={<EyeOff className="w-5 h-5 text-red-700" />}
                title="Your profile goes inactive"
                body="Your content is no longer visible to other users. Your account enters a 14-day recovery period."
              />
              <TimelineItem
                step="Within 14 days"
                icon={<RotateCcw className="w-5 h-5 text-red-700" />}
                title="Recovery window"
                body="During this time, your data is not visible to others but you can restore your account by logging back in. Changed your mind? Just sign in."
              />
              <TimelineItem
                step="After 14 days"
                icon={<Trash2 className="w-5 h-5 text-red-700" />}
                title="Permanent deletion"
                body="Your account and all associated data are permanently and irreversibly deleted. This cannot be undone."
                isLast
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Deleted */}
      <section id="what-gets-deleted" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What gets
              <span className="font-kalam text-red-700 ml-3">deleted</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              After the 14-day recovery period, MeeLi permanently deletes all of the following.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Your profile"
              body="Your display name, bio, profile photo, university, major, pronouns, and all personal information."
            />
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Posts & media"
              body="All posts, photos, videos, and media you've uploaded or recorded on MeeLi."
            />
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Messages & chats"
              body="All direct messages, chat threads, and conversation history."
            />
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Journey data"
              body="All journal entries, memories, timeline activity, and Journey history."
            />
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Connections & activity"
              body="All connections, followers, following, points, and in-app activity."
            />
            <DeletionCard
              icon={<CheckCircle className="w-6 h-6 text-red-700" />}
              title="Account credentials"
              body="Your sign-in identity, email address, and all authentication information."
            />
          </div>
        </div>
      </section>

      {/* What May Be Retained */}
      <section id="what-may-be-retained" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              What may be
              <span className="font-kalam text-red-700 ml-3">retained</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              To maintain safety and platform integrity, MeeLi may retain limited internal records in specific circumstances.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<Shield className="w-5 h-5 text-red-700" />}
              title="Content moderation records"
              body="Limited internal records related to moderation decisions and reviews may be retained for safety and platform integrity purposes."
            />
            <Row
              icon={<Lock className="w-5 h-5 text-red-700" />}
              title="Security & integrity data"
              body="Data related to platform security, fraud prevention, or ongoing investigations may be retained for a limited period."
            />
            <Row
              icon={<Database className="w-5 h-5 text-red-700" />}
              title="How retained data is handled"
              body="Any retained information is stored in a limited, internal form. It is not used to identify you as an active user and is never sold or shared externally."
              isLast
            />
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-slate-200 text-center">
            <p className="text-sm text-slate-500 leading-relaxed">
              For full details on how your data is handled, see MeeLi's{' '}
              <a href="/privacy.html" className="text-red-700 hover:text-red-800 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-8 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <NoteCard
              icon={<AlertTriangle className="w-5 h-5 text-amber-600" />}
              text="Account deletion is permanent after the 14-day recovery period."
              color="amber"
            />
            <NoteCard
              icon={<AlertTriangle className="w-5 h-5 text-amber-600" />}
              text="Deleted accounts cannot be restored after the recovery window closes."
              color="amber"
            />
            <NoteCard
              icon={<AlertTriangle className="w-5 h-5 text-amber-600" />}
              text="Creating a new account does not restore any previous data."
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Help */}
      <section id="help" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Need
              <span className="font-kalam text-red-700 ml-3">help?</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              If you're having trouble deleting your account or have questions, we're here.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 shadow-lg text-center">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center border border-red-200 mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">Email support</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              For deletion help, account questions, or anything else — one email address handles it all.
            </p>
            <a
              href="mailto:support@meeli.social?subject=Account%20deletion"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-2xl transition-colors duration-300 text-sm font-medium"
            >
              support@meeli.social
            </a>
          </div>
        </div>
      </section>

      <Footer />
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

const DeletionCard = ({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start space-x-3">
      <div className="bg-gradient-to-br from-red-50 to-orange-50 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-200">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
      </div>
    </div>
  </div>
);

const TimelineItem = ({
  step,
  icon,
  title,
  body,
  isLast,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  isLast?: boolean;
}) => (
  <div className="relative flex items-start space-x-5 md:pl-4">
    <div className="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex flex-col items-center justify-center border border-red-200 flex-shrink-0 z-10">
      <span className="text-[10px] font-bold text-red-400 leading-none mb-1">{step}</span>
      {icon}
    </div>
    <div className={`flex-1 pb-6 ${isLast ? '' : 'border-b border-red-100'}`}>
      <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  </div>
);

const NoteCard = ({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: 'amber';
}) => {
  const styles = { amber: 'bg-amber-50 border-amber-200' };
  return (
    <div className={`rounded-2xl p-4 border ${styles[color]} flex items-start space-x-3`}>
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <p className="text-sm text-slate-700">{text}</p>
    </div>
  );
};

export default DataDeletionPage;
