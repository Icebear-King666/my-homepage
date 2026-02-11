import {
  Cpu,
  Code,
  Brain,
  Eye,
  Settings,
  Wrench,
  Languages,
  GitBranch,
  Microscope,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level?: number;
    description?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Robotic Systems',
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: 'ROS (Noetic)', description: 'SLAM, Navigation, Multi-sensor drivers' },
      { name: 'Mechanical Design', description: 'Structure design & prototyping' },
      { name: 'Sensor Integration', description: 'Ultrasonic, IMU, Camera, Lidar' },
      { name: 'Hardware-Software Co-design', description: 'Embedded systems & debugging' },
    ],
  },
  {
    title: 'Programming',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'MATLAB', level: 85 },
      { name: 'Git & Version Control', level: 85 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: 'Reinforcement Learning', description: 'PPO, Policy Gradient methods' },
      { name: 'Deep Learning', description: 'PyTorch, JAX, Flax' },
      { name: 'Computer Vision', description: 'YOLO series, Object Detection' },
      { name: 'TensorRT', description: 'Model optimization & deployment' },
    ],
  },
  {
    title: 'Control & Planning',
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: 'PID Control', description: 'Classical & Adaptive PID' },
      { name: 'MPC', description: 'Model Predictive Control' },
      { name: 'Path Planning', description: 'RRT, A*, Hybrid A*' },
      { name: 'SLAM', description: 'Fast-LIO2, LiDAR-based' },
    ],
  },
  {
    title: 'Research Tools',
    icon: <Microscope className="w-6 h-6" />,
    skills: [
      { name: 'SolidWorks', description: '3D modeling & simulation' },
      { name: 'ANSYS', description: 'Finite element analysis' },
      { name: 'LabVIEW', description: 'Data acquisition & control' },
      { name: 'LaTeX', description: 'Academic writing' },
    ],
  },
  {
    title: 'Languages',
    icon: <Languages className="w-6 h-6" />,
    skills: [
      { name: 'Chinese', description: 'Native' },
      { name: 'English', description: 'Fluent (Reading & Writing)' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Professional Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise in robotics, AI, and control systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-900">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-xs text-slate-500">{skill.level}%</span>
                        )}
                      </div>
                      {skill.level ? (
                        <Progress value={skill.level} className="h-2" />
                      ) : (
                        <p className="text-xs text-slate-500">{skill.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Wrench className="w-5 h-5" />, text: 'Complete robotic system development' },
              { icon: <Eye className="w-5 h-5" />, text: 'Computer vision & target tracking' },
              { icon: <GitBranch className="w-5 h-5" />, text: 'Path planning & navigation' },
              { icon: <Brain className="w-5 h-5" />, text: 'RL & deep learning deployment' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-sm text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
