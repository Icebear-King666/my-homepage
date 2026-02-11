import { useState, type ReactNode } from 'react';
import {
  ChevronRight,
  ExternalLink,
  Fish,
  Bot,
  Eye,
  Waves,
  Tractor,
  Play,
  FileText,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  highlight: string;
  icon: ReactNode;
  tags: string[];
  color: string;

  // Resources (paths are relative to public/)
  paperPdf?: string; // e.g. "/papers/dolphin.pdf" or "papers/dolphin.pdf"
  videoMp4?: string; // e.g. "/videos/dolphin.mp4" or "videos/dolphin.mp4"
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Tendon-Driven Robotic Dolphin',
    subtitle: 'Drive Mechanism Research',
    description:
      'Designed and implemented a dual tendon-driven omnidirectional motion tail inspired by dolphin skeletal and muscle bionic mechanisms.',
    details: [
      'Built a 0.83-meter robotic dolphin prototype with 6 degrees of freedom',
      'Derived kinematic models for tendon-driven omnidirectional motion tails',
      'Established mapping from drive space to joint space to operational space',
      'Implemented multimodal open-loop motion control based on Central Pattern Generator (CPG)',
      'Achieved 2D path tracking control using Line-of-Sight navigation and fuzzy PID',
    ],
    highlight: 'First-author RAL; Student first-author authorized invention patent: 1',
    icon: <Fish className="w-6 h-6" />,
    tags: ['Bio-inspired', 'Kinematics', 'CPG', 'Path Tracking'],
    color: 'from-cyan-500 to-blue-600',
    paperPdf: '/papers/dolphin.pdf',
    videoMp4: '/videos/dolphin.mp4',
  },
  {
    id: 2,
    title: 'Tendon-Driven Robotic Fish',
    subtitle: 'Motion Control Research',
    description:
      'Designed a set of tendon-driven robotic fish with comprehensive hydrodynamic analysis and dynamic modeling.',
    details: [
      'Performed hydrodynamic analysis based on Morrison equation and Strip method',
      'Used quasi-steady lift-drag model for force evaluation',
      'Conducted dynamic modeling using Newton-Euler method',
      'Performed hydrodynamic parameter identification using actual motion data',
      'Conducted swimming experiments in wild scenes verifying maneuverability',
    ],
    highlight: 'Second-author JBE',
    icon: <Waves className="w-6 h-6" />,
    tags: ['Hydrodynamics', 'Dynamic Modeling', 'Parameter Identification'],
    color: 'from-blue-500 to-indigo-600',
    paperPdf: '/papers/fish1.pdf',
  },
  {
    id: 3,
    title: 'Hybrid-Driven Robotic Fish',
    subtitle: 'System Integration Application',
    description:
      'Autonomous visual target tracking system for bionic robotic fish with deep learning-based perception.',
    details: [
      'Integrated LMDNet (lightweight motion deblurring network) for image enhancement',
      'Used YOLOv5m for target detection and tracking',
      'Implemented camera gimbal control based on target deviation',
      'Real-time adjustment of waist-tail joints and pectoral fin posture',
      'Successfully deployed on Jetson Xavier NX platform',
    ],
    highlight: 'Second-author SCI (Q1 Top)',
    icon: <Eye className="w-6 h-6" />,
    tags: ['Computer Vision', 'YOLO', 'Jetson', 'Target Tracking'],
    color: 'from-indigo-500 to-purple-600',
    paperPdf: '/papers/fish2.pdf',
    videoMp4: '/videos/fish2.mp4',
  },
  {
    id: 4,
    title: 'Land Inspection Robot',
    subtitle: 'Autonomous Navigation System',
    description: 'Autonomous inspection robots for land-based factory aquaculture workshops.',
    details: [
      'Led system architecture design and subsystem integration',
      'Built two-wheel drive differential vehicle based on ROS1',
      'Integrated Fast-LIO2 for SLAM and move_base for navigation',
      'Developed RRT* path planning algorithm optimized by neural network',
      'Deployed YOLOv10n abnormal fish detection with TensorRT acceleration on Jetson Orin NX',
    ],
    highlight: 'Project Leader',
    icon: <Tractor className="w-6 h-6" />,
    tags: ['ROS', 'SLAM', 'Path Planning', 'Object Detection'],
    color: 'from-emerald-500 to-teal-600',
    videoMp4: '/videos/land_inspection_robot.mp4',
  },
  {
    id: 5,
    title: 'Underwater Cleaning Robot',
    subtitle: 'Aquaculture Automation',
    description:
      'Underwater cleaning robots for factory aquaculture ponds to replace labor-intensive manual operations.',
    details: [
      'Led system architecture and initial mechanical structure design',
      'Track-based chassis with roller brushes and suction pumps',
      'Integrated 4 ultrasonic sensors for underwater positioning',
      'Attitude sensors for orientation feedback',
      'Currently in positioning algorithm verification stage',
    ],
    highlight: 'Project Leader',
    icon: <Bot className="w-6 h-6" />,
    tags: ['Mechanical Design', 'Sensor Fusion', 'Localization'],
    color: 'from-orange-500 to-red-600',
    videoMp4: '/videos/ucr.mp4',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ✅ Fix GitHub Pages project path:
  // BASE_URL will be "/my-homepage/" on GitHub Pages, "/" locally.
  const withBase = (p: string) => {
    const clean = p.replace(/^\/+/, ''); // remove leading "/" if any
    return `${import.meta.env.BASE_URL}${clean}`;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Research Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Exploring the intersection of robotics, bio-inspiration, and artificial intelligence to
            create innovative underwater and land-based robotic systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 text-white/90">{project.icon}</div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-12 -right-4 w-32 h-32 bg-white/5 rounded-full" />
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* ✅ Resource buttons */}
                {(project.videoMp4 || project.paperPdf) && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.videoMp4 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Video
                      </Button>
                    )}
                    {project.paperPdf && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(withBase(project.paperPdf!), '_blank', 'noreferrer');
                        }}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Paper
                      </Button>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium italic">{project.highlight}</span>
                  <Button variant="ghost" size="sm" className="text-slate-400 group-hover:text-blue-600">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internship Card */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-0 shadow-lg overflow-hidden animate-fade-in-up delay-500">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Internship Experience</h3>
                  <p className="text-slate-300">Qiyuan Laboratory (Tsinghua University)</p>
                </div>
                <span className="text-slate-400 text-sm">June 2024 – Sept. 2024</span>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-4">
                Participated in building a flight simulation control system based on JAX+Flax framework,
                responsible for assisting in fixed-wing UAV dynamics modeling and reinforcement learning
                training for aerobatic flight.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JAX', 'Flax', 'UAV', 'Reinforcement Learning', 'PPO'].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-slate-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          // ✅ only clear when closing
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-white mb-4`}
                >
                  {selectedProject.icon}
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">{selectedProject.subtitle}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                  <p className="text-slate-600">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Contributions</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} className="bg-blue-100 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* ✅ Resources (fixed for GitHub Pages base path) */}
                {(selectedProject.videoMp4 || selectedProject.paperPdf) && (
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Resources</h4>

                    {selectedProject.videoMp4 && (
                      <div className="mb-4">
                        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black">
                          <video
                            src={withBase(selectedProject.videoMp4)}
                            controls
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    )}

                    {selectedProject.paperPdf && (
                      <div className="flex flex-wrap gap-2">
                        <Button
                          onClick={() =>
                            window.open(withBase(selectedProject.paperPdf!), '_blank', 'noreferrer')
                          }
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Read PDF
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                    <ExternalLink className="w-4 h-4" />
                    {selectedProject.highlight}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
