import { useState } from 'react';
import { BookOpen, ExternalLink, Filter, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Publication {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  details: string;
  type: 'journal' | 'conference' | 'under-review';
  firstAuthor: boolean;
}

const publicationsData: Publication[] = [
  {
    id: 1,
    authors: 'Wang B, Sun C, Li D, et al.',
    title: 'Analysis of a Dual Tendon-Driven Robotic Dolphin Tail: Omnidirectional Motions and Thrust Characteristics',
    journal: 'IEEE Robotics and Automation Letters',
    year: '2024',
    details: '9(6): 5703-5710',
    type: 'journal',
    firstAuthor: true,
  },
  {
    id: 2,
    authors: 'Wang B, et al.',
    title: 'Autonomous Navigation of Mobile Robots in Aquaculture: Survey, Challenges, and Future Trends',
    journal: 'Under Review',
    year: '',
    details: '',
    type: 'under-review',
    firstAuthor: true,
  },
  {
    id: 3,
    authors: 'Liu Y, Wang B, Ai R, et al.',
    title: 'A Convolutional Neural Network-Based Lightweight Motion Deblurring Method for Autonomous Visual Target Tracking in Bionic Robotic Fish',
    journal: 'Expert Systems with Applications',
    year: '2025',
    details: '128326',
    type: 'journal',
    firstAuthor: false,
  },
  {
    id: 4,
    authors: 'Fu T, Wang B, Liu Y, et al.',
    title: 'Design, perception, planning and control for underwater cleaning robotics: Progress, challenges and trends',
    journal: 'Journal of Ocean Engineering and Science',
    year: '2025',
    details: '(Accepted)',
    type: 'journal',
    firstAuthor: false,
  },
  {
    id: 5,
    authors: 'Ai R, Wang B, et al.',
    title: 'Design, Modeling, and Experiment of a Novel Wire-Driven Robotic Fish',
    journal: 'Journal of Bionic Engineering',
    year: '2026',
    details: '(Accepted)',
    type: 'journal',
    firstAuthor: false,
  },
  {
    id: 6,
    authors: 'Xu X, Wang B, Du Z, et al.',
    title: 'A novel nonplanar multi-chamber flexible array dissolved oxygen sensor for aquaculture robotic fish',
    journal: 'Computers and Electronics in Agriculture',
    year: '2025',
    details: '230: 109903',
    type: 'journal',
    firstAuthor: false,
  },
  {
    id: 7,
    authors: 'Bai Z, Wang B, Gao T, et al.',
    title: 'A novel microfluidic colorimetric biosensor for rapid and automatic detection Escherichia coli O157: H7 in aquaponics water',
    journal: 'Computers and Electronics in Agriculture',
    year: '2025',
    details: '229: 109941',
    type: 'journal',
    firstAuthor: false,
  },
  {
    id: 8,
    authors: 'He Q, Sheng T, Wang B, et al.',
    title: 'Flexible bioelectronic tag with a kirigami-based design for crosstalk suppression in multimodal sensing',
    journal: 'Advanced Materials Technologies',
    year: '2023',
    details: '8(22): 2300982',
    type: 'journal',
    firstAuthor: false,
  },
];

const filterOptions = [
  { value: 'all', label: 'All Publications' },
  { value: 'first-author', label: 'First Author' },
  { value: 'journal', label: 'Journal Articles' },
  { value: 'under-review', label: 'Under Review' },
];

export default function Publications() {
  const [filter, setFilter] = useState('all');

  const filteredPublications = publicationsData.filter((pub) => {
    if (filter === 'all') return true;
    if (filter === 'first-author') return pub.firstAuthor;
    if (filter === 'journal') return pub.type === 'journal';
    if (filter === 'under-review') return pub.type === 'under-review';
    return true;
  });

  const stats = {
    total: publicationsData.length,
    firstAuthor: publicationsData.filter((p) => p.firstAuthor).length,
    journals: publicationsData.filter((p) => p.type === 'journal').length,
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Research contributions in robotics, bio-inspired systems, and intelligent control
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
          <div className="text-center px-6 py-4 bg-slate-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-slate-600">Total Publications</div>
          </div>
          <div className="text-center px-6 py-4 bg-slate-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600">{stats.firstAuthor}</div>
            <div className="text-sm text-slate-600">First Author</div>
          </div>
          <div className="text-center px-6 py-4 bg-slate-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600">{stats.journals}</div>
            <div className="text-sm text-slate-600">Journal Articles</div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                {filterOptions.find((o) => o.value === filter)?.label}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {filterOptions.map((option) => (
                <DropdownMenuItem key={option.value} onClick={() => setFilter(option.value)}>
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPublications.map((pub, index) => (
            <Card
              key={pub.id}
              className="group border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Index */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-sm text-slate-600 mb-2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: pub.authors.replace(
                            'Wang B',
                            '<span class="font-bold text-slate-900">Wang B</span>'
                          ),
                        }}
                      />
                    </p>

                    {/* Journal & Year */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant={pub.type === 'under-review' ? 'outline' : 'secondary'}
                        className={
                          pub.type === 'under-review'
                            ? 'border-amber-300 text-amber-700'
                            : 'bg-blue-50 text-blue-700'
                        }
                      >
                        {pub.journal}
                      </Badge>
                      {pub.year && (
                        <span className="text-sm text-slate-500">{pub.year}</span>
                      )}
                      {pub.details && (
                        <span className="text-sm text-slate-400">{pub.details}</span>
                      )}
                      {pub.firstAuthor && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          First Author
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
