import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AchievementsCertifications } from './components/AchievementsCertifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS } from './data/portfolioData';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const selectedProject: Project | null = selectedProjectId
    ? PROJECTS.find(p => p.id === selectedProjectId) || null
    : null;

  const handleOpenCaseStudy = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProjectId(null);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-charcoal-800 selection:bg-purple-100 selection:text-purple-900 relative">
      {/* Global Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with AI/ML abstract illustration */}
        <Hero 
          onOpenResume={() => setIsResumeModalOpen(true)} 
          onOpenContact={handleOpenContact} 
        />

        {/* About Me & Visual Facts */}
        <About />

        {/* Technical Skills & Categorized Tags */}
        <Skills />

        {/* Internships & Work Experience Timeline */}
        <Experience />

        {/* Centerpiece: Projects & YouMentor AI Flagship Showcase */}
        <Projects onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Achievements & Certifications */}
        <AchievementsCertifications />

        {/* Education Timeline & "Currently Exploring" */}
        <Education />

        {/* Contact & Inquiry */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal with Screenshot Gallery */}
      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseCaseStudy}
      />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
