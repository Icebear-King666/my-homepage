import { Trophy, Medal, Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AwardItem {
  title: string;
  competition: string;
  year: string;
  level: 'national' | 'provincial' | 'university';
  icon: React.ReactNode;
}

const awardsData: AwardItem[] = [
  {
    title: 'Third Prize',
    competition: 'Huawei Cup 7th China Graduate AI Innovation Competition',
    year: '2025',
    level: 'national',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'Second Prize (National)',
    competition: 'China Agricultural Robot Competition',
    year: '2024',
    level: 'national',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    title: 'Second Prize (Provincial)',
    competition: '8th China International "Internet+" College Student Innovation and Entrepreneurship Competition (Beijing Division)',
    year: '',
    level: 'provincial',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Graduate Academic Scholarship',
    competition: 'China Agricultural University',
    year: '',
    level: 'university',
    icon: <Star className="w-6 h-6" />,
  },
];

const levelColors = {
  national: 'from-amber-500 to-orange-600',
  provincial: 'from-blue-500 to-indigo-600',
  university: 'from-emerald-500 to-teal-600',
};

const levelLabels = {
  national: 'National',
  provincial: 'Provincial',
  university: 'University',
};

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Awards & Honors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recognition for academic excellence and research achievements
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awardsData.map((award, index) => (
            <Card
              key={index}
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${levelColors[award.level]}`} />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${levelColors[award.level]} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {award.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900">{award.title}</h3>
                      {award.year && (
                        <span className="text-sm text-slate-400">({award.year})</span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{award.competition}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${levelColors[award.level]} text-white`}>
                      {levelLabels[award.level]} Level
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1">2</div>
                <div className="text-sm text-slate-300">National Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">1</div>
                <div className="text-sm text-slate-300">Provincial Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">1</div>
                <div className="text-sm text-slate-300">University Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
