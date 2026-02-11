import { GraduationCap, Calendar, Award, User } from "lucide-react";

interface EducationItem {
  institution: string;
  college: string;
  degree: string;
  period: string;
  note?: string;
  advisor?: string;
  advisorLink?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "China Agricultural University",
    college: "College of Information and Electrical Engineering",
    degree: "Ph.D. Candidate in Agricultural Electrification and Automation",
    period: "Sept. 2024 – Present",
    advisor: "Prof. Daoliang Li(Changjiang Scholar)",
    advisorLink: "https://scholar.google.com.hk/citations?user=AVy-dSgAAAAJ&hl=zh-CN&oi=sra",
  },
  {
    institution: "China Agricultural University",
    college: "College of Information and Electrical Engineering",
    degree: "M.E. in Agricultural Electrification and Automation",
    period: "Sept. 2021 – June 2024",
    advisor: "Prof. Daoliang Li(Changjiang Scholar)",
    advisorLink: "https://scholar.google.com.hk/citations?user=AVy-dSgAAAAJ&hl=zh-CN&oi=sra",
  },
  {
    institution: "China Agricultural University",
    college: "College of Engineering",
    degree: "B.E. in Agricultural Mechanization and Automation",
    period: "Sept. 2017 – June 2021",
    note: "Ranked 1st in major, recommended for postgraduate admission",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline: all cards on the right */}
        <div className="max-w-5xl mx-auto">
          {educationData.map((edu, index) => {
            const isLast = index === educationData.length - 1;

            return (
              <div key={index} className="relative">
                {/* 两列：轴 + 卡（桌面端增加左侧留白，让轴更居中一些） */}
                <div className="flex justify-center">
                  <div className="w-full max-w-3xl">
                    <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[56px_minmax(0,1fr)] gap-6 items-stretch">
                      {/* 中轴（居中布局里放左边这一列） */}
                      <div className="flex flex-col items-center">
                        <div className="mt-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>

                        {!isLast && ( 
                          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-blue-500 to-blue-200 rounded-full" />
                        )}
                      </div>

                      {/* 卡片：永远在右侧，且整个组件居中 */}
                      <div>
                        <EducationCard edu={edu} />
                      </div>
                    </div>
                  </div>
                </div>

                {!isLast && <div className="h-10 sm:h-12" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu }: { edu: EducationItem }) {
  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
          <p className="text-slate-600 text-sm">{edu.college}</p>
        </div>
      </div>

      <div className="flex items-start gap-2 mb-3 text-slate-700">
        <Award className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
        <span className="font-medium">{edu.degree}</span>
      </div>

      <div className="flex items-center gap-2 mb-3 text-slate-500 text-sm">
        <Calendar className="w-4 h-4 flex-shrink-0" />
        <span>{edu.period}</span>
      </div>

      {edu.advisor && (
        <div className="text-slate-600 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 flex-shrink-0" />
            <span>Advisor: {edu.advisor}</span>
          </div>

          {edu.advisorLink && (
            <div className="mt-1 ml-6">
              <a
                href={edu.advisorLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                Google Scholar Profile
              </a>
            </div>
          )}
        </div>
      )}

      {edu.note && (
        <div className="mt-3 pt-3 border-t border-slate-200">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            {edu.note}
          </span>
        </div>
      )}
    </div>
  );
}
