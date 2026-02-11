import { Mail, MapPin, GraduationCap, Github, Linkedin, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">Bingxiong Wang</span>
              </div>
              <p className="text-slate-400 mb-4">
                Ph.D. Candidate at China Agricultural University, specializing in underwater robotics,
                bio-inspired control, and autonomous navigation systems.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Education', href: '#education' },
                  { label: 'Research Projects', href: '#projects' },
                  { label: 'Publications', href: '#publications' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Awards', href: '#awards' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:wangbingxiong@cau.edu.cn"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>wangbingxiong@cau.edu.cn</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    No.17 Qinghua East Road, Haidian District<br />
                    Beijing, China (100083)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <GraduationCap className="w-5 h-5" />
                  <span>China Agricultural University</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Bingxiong Wang. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              College of Information and Electrical Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
