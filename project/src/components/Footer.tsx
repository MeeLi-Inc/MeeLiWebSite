import React from 'react';
import { Instagram, Mail, Linkedin, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/WhatsApp Image 2025-07-19 at 13.50.42_f2aedb83.jpg"
                alt="MeeLi Logo"
                className="w-10 h-10 rounded-xl"
              />
              <h3 className="font-kalam text-3xl font-bold">MeeLi</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Bringing the soul back to social media for students everywhere.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">meelimeetlife@outlook.com</span>
              </div>
              <a
                href="https://linkedin.com/in/elaine-zehntner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Elaine Zehntner</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/meelimeetlife"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-700 hover:bg-red-800 px-4 py-2 rounded-2xl transition-colors duration-300 text-sm font-medium"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-meeli.html"
                  className="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                  About MeeLi
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-base font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              {[
                { label: 'Terms of Service', href: '/terms.html' },
                { label: 'Privacy Policy', href: '/privacy.html' },
                { label: 'Community Guidelines', href: '/community-guidelines.html' },
                { label: 'Safety & Moderation', href: '/safety-moderation.html' },
                { label: 'Data Deletion', href: '/data-deletion.html' },
                { label: 'Copyright Policy', href: '/copyright.html' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <div className="mb-6">
            <p className="font-kalam text-xl md:text-2xl text-slate-300 italic">
              Meet Yourself. Meet Others. Meet Life.
            </p>
            <p className="text-red-400 font-semibold mt-2">- MeeLi</p>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 MeeLi. Made with care for students everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
