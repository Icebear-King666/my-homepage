import { Mail, MapPin, GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl ring-4 ring-white bg-white">
              <img
                src={profileImg}
                alt="Bingxiong Wang"
                className="w-full h-full object-cover object-[50%_18%]"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 animate-fade-in-up">
            Bingxiong <span className="text-blue-600">Wang</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-6 animate-fade-in-up delay-100">
            Ph.D. Candidate in Agricultural Electrification and Automation
          </p>

          {/* Research Interests */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up delay-200">
            {['Underwater Robots', 'Embodied AI', 'Bio-inspired Control', 'Autonomous Navigation'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 animate-fade-in-up delay-300">
            <a
              href="mailto:wangbingxiong@cau.edu.cn"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>wangbingxiong@cau.edu.cn</span>
            </a>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5" />
              <span>Beijing, China</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <GraduationCap className="w-5 h-5" />
              <span>China Agricultural University</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection('publications')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg"
            >
              View Publications
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </div>
    </section>
  );
}
