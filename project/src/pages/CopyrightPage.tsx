import Footer from '../components/Footer';
import {
  ArrowLeft,
  Shield,
  FileText,
  Mail,
  CheckCircle,
  XCircle,
  Scale,
  AlertTriangle,
  RotateCcw,
  Pen,
} from 'lucide-react';

const SECTIONS = [
  { id: 'your-responsibility', label: 'Your responsibility' },
  { id: 'dmca-notice', label: 'DMCA notice' },
  { id: 'review-removal', label: 'Review & removal' },
  { id: 'contact', label: 'Contact' },
];

const CopyrightPage = () => {
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
            Copyright
            <span className="font-kalam text-red-700 ml-3">Policy</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            How MeeLi handles intellectual property rights, DMCA takedown notices, and repeat infringement.
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

      {/* Your Responsibility */}
      <section id="your-responsibility" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Your
              <span className="font-kalam text-red-700 ml-3">responsibility</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MeeLi respects the intellectual property rights of others and expects users to do the same.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ResponsibilityCard
              icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}
              title="Content you own"
              body="You may post original content that you created — photos, videos, writing, artwork, or anything else you made yourself."
              variant="green"
            />
            <ResponsibilityCard
              icon={<CheckCircle className="w-6 h-6 text-emerald-600" />}
              title="Content you have permission to use"
              body="You may post content that you have explicit permission to share — a license, a written agreement, or content that is in the public domain."
              variant="green"
            />
            <ResponsibilityCard
              icon={<XCircle className="w-6 h-6 text-red-600" />}
              title="Content you do not own"
              body="Do not upload or share copyrighted material — movies, TV clips, music, images, or any content you didn't create and don't have rights to use."
              variant="red"
            />
          </div>

          <div className="mt-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-slate-700 leading-relaxed">
              By posting content on MeeLi, you confirm that you own or have the rights to share it, in accordance with MeeLi's{' '}
              <a href="/terms.html" className="text-red-700 hover:text-red-800 underline">Terms of Service</a>.
            </p>
          </div>
        </div>
      </section>

      {/* DMCA Notice */}
      <section id="dmca-notice" className="py-16 bg-stone-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Reporting copyright violations
              <span className="font-kalam text-red-700 ml-3">(DMCA notice)</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              If you believe your copyrighted work has been used on MeeLi without authorization, you may submit a formal DMCA Takedown Notice. Your notice must include all of the following to be valid.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            {[
              {
                number: '01',
                icon: <Pen className="w-5 h-5 text-red-700" />,
                title: 'Your signature',
                body: 'A physical or electronic signature of the person authorized to act on behalf of the copyright owner.',
              },
              {
                number: '02',
                icon: <FileText className="w-5 h-5 text-red-700" />,
                title: 'Identification of the work',
                body: 'Clear identification of the copyrighted work claimed to have been infringed.',
              },
              {
                number: '03',
                icon: <AlertTriangle className="w-5 h-5 text-red-700" />,
                title: 'Location of infringing material',
                body: 'Identification of the material claimed to be infringing, with enough detail for us to locate it on the platform.',
              },
              {
                number: '04',
                icon: <Mail className="w-5 h-5 text-red-700" />,
                title: 'Your contact information',
                body: 'Your full name, address, telephone number, and email address.',
              },
              {
                number: '05',
                icon: <Shield className="w-5 h-5 text-red-700" />,
                title: 'Good faith statement',
                body: 'A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.',
              },
              {
                number: '06',
                icon: <Scale className="w-5 h-5 text-red-700" />,
                title: 'Accuracy statement',
                body: 'A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorized to act on behalf of the copyright owner.',
              },
            ].map((item, index, array) => (
              <div
                key={item.number}
                className={`flex items-start space-x-4 py-4 ${index < array.length - 1 ? 'border-b border-red-200' : ''}`}
              >
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <span className="text-xs font-bold text-red-300">{item.number}</span>
                  <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-red-200">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-2xl p-6 border border-red-200 text-center">
            <p className="text-sm text-slate-600 mb-2">
              Notices that do not include all required information may not be acted upon.
            </p>
            <p className="text-sm font-semibold text-slate-800">
              Send your DMCA Takedown Notice to:{' '}
              <a href="mailto:support@meeli.social" className="text-red-700 hover:text-red-800 underline">
                support@meeli.social
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Review & Removal */}
      <section id="review-removal" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Review &
              <span className="font-kalam text-red-700 ml-3">removal</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              MeeLi reviews all copyright-related requests and acts in accordance with applicable law.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-lg">
            <Row
              icon={<FileText className="w-5 h-5 text-red-700" />}
              title="Content review"
              body="MeeLi reviews all copyright-related requests and may remove content that violates intellectual property rights."
            />
            <Row
              icon={<AlertTriangle className="w-5 h-5 text-red-700" />}
              title="Repeat infringers"
              body="In appropriate cases, MeeLi will terminate the accounts of users who are determined to be repeat copyright infringers."
            />
            <Row
              icon={<RotateCcw className="w-5 h-5 text-red-700" />}
              title="Counter-notifications"
              body={
                <>
                  If you believe your content was removed in error, you may submit a counter-notification to{' '}
                  <a href="mailto:support@meeli.social" className="text-red-700 hover:text-red-800 underline">
                    support@meeli.social
                  </a>
                  . Counter-notifications must meet the statutory requirements of the DMCA. MeeLi will process counter-notifications in accordance with applicable law.
                </>
              }
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
              Copyright
              <span className="font-kalam text-red-700 ml-3">contact</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200 shadow-lg text-center">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center border border-red-200 mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">Report a copyright concern</h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              For DMCA notices, counter-notifications, or any copyright-related questions.
            </p>
            <a
              href="mailto:support@meeli.social"
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

const ResponsibilityCard = ({
  icon,
  title,
  body,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  variant: 'green' | 'red';
}) => {
  const styles = {
    green: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
    red: 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200',
  };
  return (
    <div className={`rounded-2xl p-6 border ${styles[variant]}`}>
      <div className="flex items-center space-x-2 mb-3">
        {icon}
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
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

export default CopyrightPage;
