import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  User,
  Briefcase,
  Trophy,
  FolderCode,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Award,
  Zap,
  Image as ImageIcon,
  Wand2,
  X,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import gabrielBeach from '../Pictures/GabrielInTheBeach.jpeg';
import pertaminaField from '../Pictures/pertaminaInternExperience.jpg';
import pertaminaTeam from '../Pictures/pertaminaInternExperience2.png';
import mahareksaTeam from '../Pictures/mahareksa.jpeg';
import mahareksaPool from '../Pictures/mahareksa2.jpeg';
import kkctbnTeam from '../Pictures/kkctbn.jpeg';
import kkctbnPrototype from '../Pictures/kkctbn2.jpeg';
import alpineDrone from '../Pictures/alpine.jpeg';
import rovConcept from '../Pictures/ROV.jpeg';
import assdPrototype from '../Pictures/ASSD.jpeg';
import robotiikTeam from '../Pictures/robotiik.jpeg';
import cppLogo from '../Pictures/C++_logo.png';
import fusionLogo from '../Pictures/Fusion360_Logo.png';
import linuxLogo from '../Pictures/linux_logo.png';
import matlabLogo from '../Pictures/Matlab_Logo.png';
import nvidiaLogo from '../Pictures/nvidia_logo.png';
import px4Logo from '../Pictures/px4_logo.png';
import pythonLogo from '../Pictures/python_logo.png';
import pytorchLogo from '../Pictures/pytorch_logo.png';
import ros2Logo from '../Pictures/ros2_logo.png';
import tensorflowLogo from '../Pictures/Tensorflow_logo.png';
import yoloLogo from '../Pictures/yolo_logo.png';
import certASSD from '../Pictures/sertifikat ASSD .png';
import certKKCTBN from '../Pictures/sertifikat KKCTBN.png';
import certKRI from '../Pictures/Sertifikat KRBAI.png';
import certViceChair from '../Pictures/sertifikat Wakil Ketua Umum.png';
import certProgramming from '../Pictures/sertifikat Pemograman 2022.png';
import certElectronics from '../Pictures/sertifikat Electornic 2022.png';
import certQuadcopter from '../Pictures/sertifikat Quadcopter 2022.png';
import certUdemyROS2 from '../Pictures/sertifikatUdemyROS2.jpg';
import certUdemyDrone from '../Pictures/sertifikatDroneProgramming.jpg';
import eyeAI1 from '../Pictures/eyeAI.png';
import eyeAI2 from '../Pictures/eyeAI2.png';
import eyeAI3 from '../Pictures/eyeAI3.png';
import eyeAI4 from '../Pictures/eyeAI4.png';
import eyeAI5 from '../Pictures/eyeAI5.png';
import eyeAI6 from '../Pictures/eyeAI6.png';
import eyeAI7 from '../Pictures/eyeAI7.png';
import eyeAI8 from '../Pictures/eyeAI8.JPG';
import resumePdf from '../PDF/Official_CV_GabrielWinastaSinisuka.pdf';

const SectionHeading = ({ children, icon: Icon, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: -30 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.4 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-orange-500 rounded-lg">
        <Icon className="text-black" size={24} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
        {children}
      </h2>
    </div>
    {subtitle && <p className="text-gray-400 max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-20 bg-orange-500 mt-4 rounded-full" />
  </motion.div>
);

const SkillCard = ({ skill, index }) => {
  const SkillIcon = skill.icon || FileText;
  const skillItems = Array.isArray(skill.items) ? skill.items : [];

  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.25 }}
    className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-orange-500/30 transition-colors"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="rounded-2xl bg-orange-500/10 p-3">
        <SkillIcon className="text-orange-400" size={20} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white uppercase tracking-tight">{skill.title}</h3>
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{skill.label}</p>
      </div>
    </div>
    <p className="text-sm leading-relaxed text-zinc-400 mb-5">{skill.description}</p>
    <div className="flex flex-wrap gap-2">
      {skillItems.map((item) => (
        <span
          key={item}
          className="rounded-full border border-zinc-700 bg-black px-3 py-1 text-[11px] font-medium text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
  );
};

const LogoMarquee = ({ logos = [], reverse = false, duration = 28 }) => {
  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-4 py-3"
      >
        {items.map((logo, index) => (
          <motion.div
            key={`${logo.label}-${index}`}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group flex min-w-[150px] items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-colors hover:border-orange-500/35"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/5">
              <img
                src={logo.src}
                alt={logo.label}
                className="max-h-8 max-w-8 object-contain opacity-55 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">{logo.label}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 opacity-70 transition-all duration-500 group-hover:text-orange-300 group-hover:opacity-100">
                {logo.kind}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ExperienceItem = ({
  exp,
  index,
  isActive,
  onHover,
  onFocus,
  onSelect,
  itemRef,
  mobileProof,
  activeProofIndex,
  onSelectProof,
  disableSlideIn,
}) => (
  <motion.div
    ref={itemRef}
    data-exp-index={index}
    initial={{ opacity: 0, x: disableSlideIn ? 0 : (index % 2 === 0 ? -50 : 50) }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    onMouseEnter={onHover}
    onFocus={onFocus}
    onClick={onSelect}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onSelect();
      }
    }}
    className={`relative pl-8 pb-12 last:pb-0 group rounded-3xl pr-4 transition-all duration-500 ${
      isActive ? 'md:bg-zinc-900/40 md:border md:border-orange-500/20 md:px-6 md:py-6 md:-ml-6' : ''
    } cursor-pointer`}
    tabIndex={0}
    role="button"
    aria-pressed={isActive}
  >
    <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-zinc-800 group-last:bg-transparent" />
    <div
      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-black z-10 transition-all ${
        isActive ? 'bg-orange-400 scale-110 shadow-[0_0_30px_rgba(249,115,22,0.45)]' : 'bg-orange-500 group-hover:scale-110'
      }`}
    />
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
      <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-orange-400' : 'text-white group-hover:text-orange-500'}`}>
        {exp.role}
      </h3>
      <span
        className={`font-mono text-sm px-3 py-1 rounded-full border transition-colors ${
          isActive ? 'text-orange-300 bg-orange-500/15 border-orange-400/30' : 'text-orange-500 bg-orange-500/10 border-orange-500/20'
        }`}
      >
        {exp.period}
      </span>
    </div>
    <div className="text-zinc-400 font-medium mb-4 flex items-center gap-2">
      <Briefcase size={16} /> {exp.company}
    </div>
    <p className="text-zinc-500 max-w-3xl leading-relaxed">{exp.description}</p>
    <div className="mt-5 flex flex-wrap gap-2">
      {(Array.isArray(exp.highlights) ? exp.highlights : []).map((highlight) => (
        <span
          key={highlight}
          className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
            isActive ? 'border-orange-500/25 bg-orange-500/10 text-orange-200' : 'border-zinc-800 bg-black text-zinc-400'
          }`}
        >
          {highlight}
        </span>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-600">
      <ImageIcon size={14} className={isActive ? 'text-orange-400' : ''} />
      {exp.proofLabel}
    </div>

    {isActive && mobileProof && (
      <div className="mt-6 lg:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <img src={mobileProof.src} alt={mobileProof.alt} className="h-60 w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <p className="absolute left-4 right-4 bottom-4 text-sm text-zinc-200">{mobileProof.caption}</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {(Array.isArray(exp.proofImages) ? exp.proofImages : []).map((proof, proofIndex) => (
            <button
              key={proof.src}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onSelectProof(proofIndex);
              }}
              className={`overflow-hidden rounded-xl border transition-all ${
                proofIndex === activeProofIndex ? 'border-orange-500 shadow-[0_0_0_1px_rgba(249,115,22,0.45)]' : 'border-zinc-800'
              }`}
            >
              <img
                src={proof.src}
                alt={proof.alt}
                className={`h-16 w-full object-cover transition-all duration-300 ${
                  proofIndex === activeProofIndex ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

const AchievementCard = ({ item, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.94 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.3 }}
    onClick={onOpen}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onOpen();
      }
    }}
    role="button"
    tabIndex={0}
    className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 group hover:border-orange-500/35 transition-colors cursor-pointer"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-all duration-700 md:grayscale md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-orange-500/30 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-orange-300">
        {item.year}
      </div>
      <div className="absolute left-5 right-5 bottom-5">
        <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">{item.org}</p>
        <h3 className="mt-2 text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-orange-300/90">Click to view certificate</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm leading-relaxed text-zinc-400 mb-5">{item.desc}</p>
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(item.tags) ? item.tags : []).map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 bg-black px-3 py-1 text-[11px] text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
    whileHover={{ y: -5 }}
    className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group"
  >
    <div className="h-52 bg-zinc-800 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-all duration-700 md:grayscale md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
      <div className="absolute bottom-4 left-4 z-20">
        <span className="px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {(Array.isArray(project.tags) ? project.tags : []).map((tag) => (
          <span key={tag} className="text-[10px] bg-black border border-zinc-700 text-zinc-400 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-t border-zinc-800 pt-4 text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ExternalLink size={16} />
          <span>{project.footnote}</span>
        </a>
      ) : (
        <div className="flex items-center gap-2 border-t border-zinc-800 pt-4 text-sm text-orange-400">
          <ExternalLink size={16} />
          <span>{project.footnote}</span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [desktopZoom, setDesktopZoom] = useState(1);
  const [enablePanelFollow, setEnablePanelFollow] = useState(false);
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [showThesisSummaryModal, setShowThesisSummaryModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeProofIndex, setActiveProofIndex] = useState(0);
  const [activeEyeAIShot, setActiveEyeAIShot] = useState(0);
  const [experiencePanelY, setExperiencePanelY] = useState(0);
  const contactMenuRef = useRef(null);
  const experienceListRef = useRef(null);
  const experiencePanelRef = useRef(null);
  const experienceItemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const applyHoverCapability = () => {
      setCanHover(hoverMediaQuery.matches);
    };

    applyHoverCapability();

    if (typeof hoverMediaQuery.addEventListener === 'function') {
      hoverMediaQuery.addEventListener('change', applyHoverCapability);
      return () => hoverMediaQuery.removeEventListener('change', applyHoverCapability);
    }

    hoverMediaQuery.addListener(applyHoverCapability);
    return () => hoverMediaQuery.removeListener(applyHoverCapability);
  }, []);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

    const applyMobileViewport = () => {
      setIsMobileViewport(mobileMediaQuery.matches);
    };

    applyMobileViewport();

    if (typeof mobileMediaQuery.addEventListener === 'function') {
      mobileMediaQuery.addEventListener('change', applyMobileViewport);
      return () => mobileMediaQuery.removeEventListener('change', applyMobileViewport);
    }

    mobileMediaQuery.addListener(applyMobileViewport);
    return () => mobileMediaQuery.removeListener(applyMobileViewport);
  }, []);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    const applyDesktopZoom = () => {
      setDesktopZoom(desktopMediaQuery.matches ? 0.75 : 1);
    };

    applyDesktopZoom();

    if (typeof desktopMediaQuery.addEventListener === 'function') {
      desktopMediaQuery.addEventListener('change', applyDesktopZoom);
      return () => desktopMediaQuery.removeEventListener('change', applyDesktopZoom);
    }

    desktopMediaQuery.addListener(applyDesktopZoom);
    return () => desktopMediaQuery.removeListener(applyDesktopZoom);
  }, []);

  useEffect(() => {
    const followMediaQuery = window.matchMedia('(min-width: 1024px)');

    const applyPanelFollowCapability = () => {
      setEnablePanelFollow(followMediaQuery.matches);
    };

    applyPanelFollowCapability();

    if (typeof followMediaQuery.addEventListener === 'function') {
      followMediaQuery.addEventListener('change', applyPanelFollowCapability);
      return () => followMediaQuery.removeEventListener('change', applyPanelFollowCapability);
    }

    followMediaQuery.addListener(applyPanelFollowCapability);
    return () => followMediaQuery.removeListener(applyPanelFollowCapability);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (contactMenuRef.current && !contactMenuRef.current.contains(event.target)) {
        setShowContactMenu(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowContactMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!selectedAchievement) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedAchievement(null);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedAchievement]);

  const defaultData = {
    name: 'Gabriel Winasta Sinisuka',
    role: 'Robotics Engineer, Computer Vision Builder, Software Engineer, and Informatics Student',
    links: {
      github: 'https://github.com/treeone246',
      linkedin: 'https://www.linkedin.com/in/gabriel-winasta-sinisuka-998729227/',
      whatsapp: 'https://wa.me/6282170428003',
    },
    passion:
      'I build systems that turn code into something physical, measurable, and useful. My work sits at the intersection of robotics, computer vision, embedded systems, software and team execution, from software, autonomous vehicles, and underwater robots to field-ready visual detection for industrial environments.',
    eyeAI: {
      title: 'EyeAI: Computer Vision + LLM Monitoring Assistant',
      tagline: 'Interactive vehicle-entry intelligence and image understanding pipeline',
      description:
        'EyeAI combines computer vision and large language models to analyze vehicle entry data, detect objects in images, and provide detailed context for every detection. It is designed as both a monitoring layer and an explanation layer so teams can understand what happened, not just that something was detected.',
      capabilities: [
        'Vehicle entry monitoring with image-based evidence',
        'Object detection + contextual explanation',
        'Interactive chatbot interface for querying detection output',
        'Integration-ready output for existing systems',
      ],
      shots: [
        { src: eyeAI8, label: 'Extended EyeAI Monitoring Interface' },
        { src: eyeAI1, label: 'Dashboard Overview' },
        { src: eyeAI2, label: 'Interactive LLM Chat Flow' },
        { src: eyeAI3, label: 'eyeAI User Login Interface' },
        { src: eyeAI4, label: 'Register User Interface' },
        { src: eyeAI5, label: 'Real-time RTSP AI-agent Inference' },
        { src: eyeAI6, label: 'Detection and Stored Database Detection' },
        { src: eyeAI7, label: 'System Integration and Monitoring Output' },
      ],
    },
    thesis: {
      originalTitle:
        'Kompresi Model YOLOv8 Melalui Pruning, Sparsity, dan Knowledge Distillation untuk Deteksi Kendaraan dan Plat Nomor Secara Real-Time pada Perangkat Edge',
      englishTitle:
        'YOLOv8 Model Compression Through Pruning, Sparsity, and Knowledge Distillation for Real-Time Vehicle and License Plate Detection on Edge Devices',
      summary:
        'This thesis focuses on making YOLOv8 practical for edge deployment by reducing model size and compute cost while preserving detection quality for vehicles and license plates. The approach combines structured compression strategies with a teacher-student learning process to keep useful detection knowledge after compression. The end goal is a real-time model that runs more efficiently on edge hardware and still provides reliable object and plate detection performance for intelligent transportation or monitoring scenarios.',
    },
    toolLogos: [
      { label: 'Python', kind: 'Language', src: pythonLogo },
      { label: 'C++', kind: 'Language', src: cppLogo },
      { label: 'ROS 2', kind: 'Framework', src: ros2Logo },
      { label: 'PyTorch', kind: 'Deep Learning', src: pytorchLogo },
      { label: 'TensorFlow', kind: 'Deep Learning', src: tensorflowLogo },
      { label: 'YOLO', kind: 'Vision Model', src: yoloLogo },
      { label: 'PX4', kind: 'Autopilot', src: px4Logo },
      { label: 'Linux', kind: 'Platform', src: linuxLogo },
      { label: 'MATLAB', kind: 'Simulation', src: matlabLogo },
      { label: 'Fusion 360', kind: 'CAD', src: fusionLogo },
      { label: 'NVIDIA', kind: 'Acceleration', src: nvidiaLogo },
    ],
    skills: [
      {
        title: 'Computer Vision Engineering',
        label: 'Applied AI',
        icon: Zap,
        description:
          'Built visual detection workflows for real-world industrial scenes and translated model output into practical field insight and deployable features.',
        items: ['Object Detection', 'YOLO Pipelines', 'Visual Annotation', 'Industrial Monitoring'],
      },
      {
        title: 'Robotics Systems',
        label: 'Build + Test',
        icon: FolderCode,
        description:
          'Worked across autonomous surface vessels, underwater robotics, and quadcopter projects with emphasis on reliable mechanical-electrical integration.',
        items: ['ROV', 'ATSV', 'Quadcopter', 'Subsystem Integration'],
      },
      {
        title: 'Software Engineering',
        label: 'Architecture + Pipeline',
        icon: FileText,
        description:
          'Capable of designing software system architecture and building end-to-end development pipelines with strong delivery discipline across backend, infrastructure, and AI workflows.',
        items: ['System Architecture', 'DevOps Pipeline', 'Machine Learning', 'Deep Learning', 'MLOps'],
      },
      {
        title: 'Embedded and Electronics',
        label: 'Hardware',
        icon: Briefcase,
        description:
          'Hands-on with prototyping, electronics assembly, actuator integration, and reliable hardware bring-up for robotics builds.',
        items: ['Electronics', 'Embedded Prototyping', 'System Assembly', 'Hardware Testing'],
      },
      {
        title: 'CAD and 3D Product Design',
        label: 'Robotics + IoT',
        icon: FolderCode,
        description:
          'Capable in CAD-based 3D design workflows to turn product concepts into manufacturable robotics and IoT-ready mechanical designs.',
        items: ['CAD 3D Design', 'Robotics Product Design', 'IoT Product Design', 'Prototype-to-Build Workflow'],
      },
      {
        title: 'Leadership and Delivery',
        label: 'Teamwork',
        icon: Award,
        description:
          'Led and supported student engineering teams, competition preparation, and organization-level execution inside the robotics community.',
        items: ['Vice General Chair', 'Competition Teams', 'Cross-team Coordination', 'Technical Ownership'],
      },
    ],
    experiences: [
      {
        role: 'Computer Vision Intern',
        company: 'Pertamina Internship Project',
        period: 'Industry Exposure',
        description:
          'Contributed to a field-facing computer vision workflow for heavy equipment and industrial environment analysis. The work focused on turning visual evidence into measurable overlays, object references, and practical engineering context rather than keeping the internship at the presentation level.',
        highlights: ['Industrial Vision', 'Field Validation', 'Detection Overlay', 'Team Collaboration'],
        proofLabel: 'On-site proof and visual detection output',
        proofImages: [
          {
            src: pertaminaField,
            alt: 'Pertamina internship field computer vision output',
            caption: 'Bounding-box based scene analysis applied on heavy equipment and field activity.',
          },
          {
            src: pertaminaTeam,
            alt: 'Pertamina internship team photo',
            caption: 'Internship collaboration in an industry environment, showing the team behind the project.',
          },
        ],
      },
      {
        role: 'ASSD and KKCTBN Technical Participant',
        company: 'ROBOTIIK and Competition Prototype Track, Universitas Brawijaya',
        period: '2022 - 2023',
        description:
          'Played a more hands-on role in the ASSD submarine robot project and the earlier KKCTBN competition pipeline. My participation covered electronics-side assembly, hardware packaging, subsystem integration, and prototype iteration, giving me the practical foundation that later competition work built on.',
        highlights: ['ASSD', 'KKCTBN 2022', 'Electronics Division', 'Prototype Assembly'],
        proofLabel: 'Submarine build, certificate, and competition hardware proof',
        proofImages: [
          {
            src: certASSD,
            alt: 'ASSD submarine project certificate',
            caption: 'Formal recognition for electronics division participation on the submarine robot project during the 2022-2023 period.',
          },
          {
            src: assdPrototype,
            alt: 'ASSD submarine robot prototype',
            caption: 'Open-hull submarine robot build showing wiring, electronics integration, and real assembly work.',
          },
          {
            src: kkctbnPrototype,
            alt: 'KKCTBN prototype vessel',
            caption: 'Prototype work connected to the competition track and early vessel-oriented build process.',
          },
        ],
      },
      {
        role: 'Vice General Chair',
        company: 'ROBOTIIK, Faculty of Computer Science, Universitas Brawijaya',
        period: '2024',
        description:
          'Held a leadership role inside the faculty robotics institution while staying close to technical execution. Supported team coordination, project momentum, and technical culture across robotics-focused initiatives.',
        highlights: ['Leadership', 'Community Building', 'Operations', 'Technical Mentorship'],
        proofLabel: 'Organization role, certification, and team activity',
        proofImages: [
          {
            src: certViceChair,
            alt: 'Vice General Chair certificate',
            caption: 'Formal recognition for serving as Vice General Chair in ROBOTIIK.',
          },
          {
            src: robotiikTeam,
            alt: 'ROBOTIIK team and underwater robot',
            caption: 'The leadership role stayed close to active robotics development and team delivery.',
          },
        ],
      },
      {
        role: 'Mahareksa Underwater Robotics Team Member',
        company: 'KRI National Finalist, Universitas Brawijaya',
        period: '2023',
        description:
          'Worked as part of the Mahareksa team for the Indonesian Underwater Robotics Contest at national level. The work involved underwater robot development, subsystem integration, testing, and competition preparation under real performance constraints.',
        highlights: ['Underwater Robotics', 'Prototype Build', 'Competition Prep', 'Systems Integration'],
        proofLabel: 'National finalist certificate and robot build evidence',
        proofImages: [
          {
            src: certKRI,
            alt: 'KRI national finalist certificate',
            caption: 'National recognition for participation and achievement as part of the Mahareksa team.',
          },
          {
            src: mahareksaTeam,
            alt: 'Mahareksa underwater robotics team',
            caption: 'Team presentation with the underwater robot developed for competition use.',
          },
          {
            src: mahareksaPool,
            alt: 'Underwater robot near pool testing area',
            caption: 'Prototype validation and real robot readiness beyond design-only work.',
          },
        ],
      },
      {
        role: 'ATSV Prototype Division Finalist',
        company: 'KKCTBN National Competition, Universitas Brawijaya',
        period: '2023',
        description:
          'Reached the final stage in the autonomous tourism surface vessel division for KKCTBN 2023. Contributed to the prototype vessel build and competition delivery for a team representing Universitas Brawijaya.',
        highlights: ['ATSV', 'Prototype Vessel', 'National Finalist', 'Team Delivery'],
        proofLabel: 'Finalist certificate and prototype evidence',
        proofImages: [
          {
            src: certKKCTBN,
            alt: 'KKCTBN finalist certificate',
            caption: 'Official finalist recognition for the autonomous tourism surface vessel division.',
          },
          {
            src: kkctbnTeam,
            alt: 'KKCTBN competition team',
            caption: 'Competition team presence and public presentation of the work.',
          },
          {
            src: kkctbnPrototype,
            alt: 'ATSV prototype',
            caption: 'A direct look at the vessel prototype and practical assembly work behind the competition entry.',
          },
        ],
      },
    ],
    achievements: [
      {
        title: 'KKCTBN National Finalist',
        year: '2023',
        org: 'Balai Pengembangan Talenta Indonesia',
        desc:
          'Recognized as a finalist in the Autonomous Tourism Surface Vessel division of the National Unmanned Fast Boat Contest, representing Universitas Brawijaya.',
        image: certKKCTBN,
        tags: ['ATSV', 'National Finalist', 'Universitas Brawijaya'],
      },
      {
        title: 'KRI National Finalist',
        year: '2023',
        org: 'KRI Tingkat Nasional',
        desc:
          'Received national-level recognition as part of Mahareksa in the Indonesian Underwater Robotics Contest, reflecting technical delivery in a competitive engineering environment.',
        image: certKRI,
        tags: ['Mahareksa', 'Underwater Robot', 'National Contest'],
      },
      {
        title: 'Vice General Chair Certification',
        year: '2024',
        org: 'ROBOTIIK FILKOM UB',
        desc:
          'Certified for serving as Vice General Chair, showing leadership experience alongside hands-on engineering contribution inside the faculty robotics organization.',
        image: certViceChair,
        tags: ['Leadership', 'ROBOTIIK', 'Organization'],
      },
      {
        title: 'Programming Division Member',
        year: '2023',
        org: 'Laboratorium Robotika dan Embedded System',
        desc:
          'Certified as a programming division member for the robotics and embedded laboratory period 2022-2023.',
        image: certProgramming,
        tags: ['Programming', 'Laboratory', 'Embedded Systems'],
      },
      {
        title: 'ASSD Submarine Project',
        year: '2023',
        org: 'Komunitas ROBOTIIK',
        desc:
          'Certified for electronics division participation on the ASSD submarine robot project, reflecting early hands-on contribution in robotics assembly and integration work.',
        image: certASSD,
        tags: ['ASSD', 'Submarine Robot', 'Electronics'],
      },
      {
        title: 'Electronics Division Member',
        year: '2023',
        org: 'Laboratorium Robotika dan Embedded System',
        desc:
          'Recognized for electronics division participation on the submarine robot project, strengthening the hardware side of my engineering profile.',
        image: certElectronics,
        tags: ['Electronics', 'Submarine Project', 'Hardware'],
      },
      {
        title: 'Quadcopter Project Member',
        year: '2023',
        org: 'Komunitas ROBOTIIK',
        desc:
          'Certified for contributing to the quadcopter project inside the faculty robotics community and laboratory ecosystem.',
        image: certQuadcopter,
        tags: ['Quadcopter', 'Flight Systems', 'Prototype'],
      },
      {
        title: 'Udemy ROS 2 Certificate',
        year: 'Udemy',
        org: 'Udemy Professional Course',
        desc:
          'Completed a ROS 2 learning track to strengthen robotics software architecture skills including node-based communication and practical middleware workflows.',
        image: certUdemyROS2,
        tags: ['ROS 2', 'Robotics Software', 'Udemy'],
      },
      {
        title: 'Udemy Drone Programming Certificate',
        year: 'Udemy',
        org: 'Udemy Professional Course',
        desc:
          'Completed a drone programming course focused on applied control and implementation workflows for aerial robotics development.',
        image: certUdemyDrone,
        tags: ['Drone Programming', 'Aerial Robotics', 'Udemy'],
      },
    ],
    projects: [
      {
        title: 'Pertamina Field Vision Study',
        category: 'Computer Vision',
        description:
          'A field-oriented visual analysis effort focused on detecting and measuring objects in industrial scenes so the output could support practical interpretation instead of remaining a purely academic demo.',
        tags: ['Computer Vision', 'Object Detection', 'Industrial Context'],
        image: pertaminaField,
        footnote: 'Built from real internship proof and field imagery',
      },
      {
        title: 'Mahareksa Underwater Robot',
        category: 'Robotics',
        description:
          'A competition-driven underwater robotics build that combined mechanical structure, propulsion layout, subsystem integration, and test readiness for national-level performance.',
        tags: ['ROV', 'Integration', 'Testing'],
        image: rovConcept,
        footnote: 'Backed by national finalist recognition and prototype evidence',
      },
      {
        title: 'Submarine and Embedded Prototype',
        category: 'Embedded Systems',
        description:
          'Hands-on submarine style robot development supported by electronics work, chassis integration, and practical system assembly inside the robotics laboratory environment.',
        tags: ['Electronics', 'Embedded', 'Prototype'],
        image: assdPrototype,
        footnote: 'Connected to the electronics division certification',
      },
      {
        title: 'ATSV Competition Vessel',
        category: 'Autonomous Surface Vessel',
        description:
          'A prototype vessel prepared for KKCTBN 2023, showing applied engineering beyond concept boards through real build work, public presentation, and team competition delivery.',
        tags: ['ATSV', 'Competition', 'Prototype Build'],
        image: kkctbnPrototype,
        footnote: 'Supported by finalist certificate and event documentation',
      },
      {
        title: 'ROBOTIIK Quadcopter Track',
        category: 'Aerial Systems',
        description:
          'A quadcopter-focused project path inside the robotics community that strengthened my understanding of flight hardware, electronics, and practical team-based prototyping.',
        tags: ['Quadcopter', 'Electronics', 'Team Project'],
        image: alpineDrone,
        footnote: 'Matched with the quadcopter project certificate',
      },
      {
        title: 'Robotics Team Operations',
        category: 'Leadership',
        description:
          'Technical organizations still need structure. This work reflects coordination, delivery discipline, and engineering culture building while supporting multiple robotics initiatives.',
        tags: ['Leadership', 'Operations', 'Team Delivery'],
        image: robotiikTeam,
        footnote: 'Grounded in the Vice General Chair role',
      },
    ],
  };

  const data = defaultData;
  const safeLinks = data?.links && typeof data.links === 'object' ? data.links : defaultData.links;
  const safeName = typeof data?.name === 'string' && data.name.trim() ? data.name : defaultData.name;
  const safeRole = typeof data?.role === 'string' && data.role.trim() ? data.role : defaultData.role;
  const safePassion = typeof data?.passion === 'string' && data.passion.trim() ? data.passion : defaultData.passion;
  const safeSkills = Array.isArray(data?.skills) ? data.skills : defaultData.skills;
  const safeToolLogos = Array.isArray(data?.toolLogos) ? data.toolLogos : defaultData.toolLogos;
  const safeAchievements = Array.isArray(data?.achievements) ? data.achievements : defaultData.achievements;
  const safeProjects = Array.isArray(data?.projects) ? data.projects : defaultData.projects;
  const safeEyeAI = data?.eyeAI && typeof data.eyeAI === 'object' ? data.eyeAI : defaultData.eyeAI;
  const safeEyeAIShots = Array.isArray(safeEyeAI?.shots) && safeEyeAI.shots.length > 0 ? safeEyeAI.shots : defaultData.eyeAI.shots;
  const safeThesis = data?.thesis && typeof data.thesis === 'object' ? data.thesis : defaultData.thesis;

  const normalizedExperiences = Array.isArray(data.experiences) && data.experiences.length > 0
    ? data.experiences
    : [
        {
          role: 'Professional Experience',
          company: 'Update this section in Admin',
          period: 'Current',
          description: 'No experience entries are available yet. Add one in admin mode.',
          highlights: ['Experience', 'Proof'],
          proofLabel: 'Experience proof',
          proofImages: [
            {
              src: gabrielBeach,
              alt: 'Placeholder proof image',
              caption: 'Add proof images from the admin editor.',
            },
          ],
        },
      ];

  const safeActiveExperience = Math.min(activeExperience, normalizedExperiences.length - 1);
  const currentExperience = normalizedExperiences[safeActiveExperience];
  const currentProofImages = Array.isArray(currentExperience?.proofImages) && currentExperience.proofImages.length > 0
    ? currentExperience.proofImages
    : [
        {
          src: gabrielBeach,
          alt: 'Placeholder proof image',
          caption: 'Add proof images from the admin editor.',
        },
      ];
  const safeActiveProofIndex = Math.min(activeProofIndex, currentProofImages.length - 1);
  const currentProof = currentProofImages[safeActiveProofIndex] || currentProofImages[0];
  const currentEyeAIProof = safeEyeAIShots[activeEyeAIShot] || safeEyeAIShots[0];

  useEffect(() => {
    if (activeExperience > normalizedExperiences.length - 1) {
      setActiveExperience(0);
    }
  }, [activeExperience, normalizedExperiences.length]);

  useEffect(() => {
    if (activeProofIndex > currentProofImages.length - 1) {
      setActiveProofIndex(0);
    }
  }, [activeProofIndex, currentProofImages.length]);

  useEffect(() => {
    setActiveProofIndex(0);
  }, [activeExperience]);

  useLayoutEffect(() => {
    let frameId = 0;
    let settleTimer = 0;

    const alignExperiencePanel = () => {
      if (!enablePanelFollow) {
        setExperiencePanelY(0);
        return;
      }

      const listElement = experienceListRef.current;
      const panelElement = experiencePanelRef.current;
      const activeElement = experienceItemRefs.current[safeActiveExperience];

      if (!listElement || !panelElement || !activeElement) {
        setExperiencePanelY(0);
        return;
      }

      const listRect = listElement.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();
      const desiredShift = activeRect.top - listRect.top - 34;
      const maxShift = Math.max(0, listElement.offsetHeight - panelElement.offsetHeight - 42);
      setExperiencePanelY(Math.max(0, Math.min(desiredShift, maxShift)));
    };

    const queueAlign = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(alignExperiencePanel);
    };

    queueAlign();
    settleTimer = window.setTimeout(queueAlign, 380);
    window.addEventListener('resize', queueAlign);

    const resizeObserver = new ResizeObserver(queueAlign);
    if (experienceListRef.current) {
      resizeObserver.observe(experienceListRef.current);
    }
    if (experiencePanelRef.current) {
      resizeObserver.observe(experiencePanelRef.current);
    }
    if (experienceItemRefs.current[safeActiveExperience]) {
      resizeObserver.observe(experienceItemRefs.current[safeActiveExperience]);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(settleTimer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', queueAlign);
    };
  }, [enablePanelFollow, safeActiveExperience, safeActiveProofIndex]);

  useEffect(() => {
    if (canHover || !experienceListRef.current || normalizedExperiences.length === 0) {
      return undefined;
    }

    const listElement = experienceListRef.current;
    const observedItems = Array.from(listElement.querySelectorAll('[data-exp-index]'));

    if (observedItems.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const targetIndex = Number(visibleEntries[0].target.getAttribute('data-exp-index'));
        if (!Number.isNaN(targetIndex)) {
          setActiveExperience(targetIndex);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-18% 0px -30% 0px',
      }
    );

    observedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [canHover, normalizedExperiences.length]);

  const handleGeneratePitch = async () => {
    setIsGeneratingPitch(true);
    setShowPitchModal(true);
    setGeneratedPitch('');

    const apiKey = '';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const promptText = `
      You are an AI assistant helping a recruiter or collaborator understand why they should work with ${safeName}.
      
      Here is ${safeName}'s profile data:
      Role: ${safeRole}
      Passion: ${safePassion}
      Skills: ${JSON.stringify(safeSkills)}
      Experience: ${JSON.stringify(normalizedExperiences)}
      Achievements: ${JSON.stringify(safeAchievements)}
      Projects: ${JSON.stringify(safeProjects)}

      Write a short, engaging, and persuasive 3-4 sentence elevator pitch.
      Highlight practical engineering work, competition achievements, leadership, and overall passion.
      Do NOT use markdown formatting or asterisks. Return plain text only.
    `;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      systemInstruction: { parts: [{ text: 'You are an expert career coach and technical storyteller.' }] },
    };

    let retries = 5;
    let delay = 1000;

    while (retries > 0) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
          setGeneratedPitch(text);
          setIsGeneratingPitch(false);
          return;
        }

        throw new Error('Invalid response format');
      } catch (error) {
        retries -= 1;
        if (retries === 0) {
          setGeneratedPitch("I'm sorry, I couldn't generate a pitch right now. Please feel free to reach out directly!");
          setIsGeneratingPitch(false);
        } else {
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black font-sans scroll-smooth overflow-x-hidden"
      style={{ zoom: desktopZoom }}
    >
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-zinc-800 py-3 sm:py-4' : 'bg-transparent border-transparent py-4 sm:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-2xl font-black tracking-tighter"
          >
            GAB<span className="text-orange-500">.</span>SINISUKA
          </motion.div>
          <div className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest">
            {['About', 'Skills', 'Experience', 'Achievements', 'Projects', 'Thesis'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex px-3 py-1.5 sm:px-4 sm:py-2 border border-zinc-700 text-zinc-200 hover:border-orange-500/50 hover:text-orange-300 text-[10px] sm:text-xs font-bold rounded uppercase tracking-tight transition-colors"
            >
              Resume/CV
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGeneratePitch}
              className="px-2.5 py-1.5 sm:px-4 sm:py-2 border border-orange-500/50 text-orange-500 hover:bg-orange-500/10 text-[10px] sm:text-xs font-bold rounded flex items-center gap-1.5 sm:gap-2 uppercase tracking-tight sm:tracking-tighter transition-colors"
              title="Generate AI Elevator Pitch"
            >
              <Wand2 size={12} className="sm:h-[14px] sm:w-[14px]" />
              <span className="hidden sm:inline">Pitch Me</span>
              <span className="sm:hidden">Pitch</span>
            </motion.button>
            <div
              ref={contactMenuRef}
              className="relative"
              onMouseEnter={canHover ? () => setShowContactMenu(true) : undefined}
              onMouseLeave={canHover ? () => setShowContactMenu(false) : undefined}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactMenu((prev) => !prev)}
                aria-expanded={showContactMenu}
                aria-haspopup="true"
                className="px-3 py-1.5 sm:px-5 sm:py-2 bg-orange-500 text-black text-[10px] sm:text-xs font-black rounded uppercase tracking-tight sm:tracking-tighter"
              >
                Contact
              </motion.button>

              <AnimatePresence>
                {showContactMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute right-0 mt-3 w-56 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-md"
                  >
                    <a
                      href={resumePdf}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setShowContactMenu(false)}
                      className="sm:hidden flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
                    >
                      <FileText size={16} className="text-orange-400" />
                      <span>Resume/CV</span>
                    </a>
                    <a
                      href={safeLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setShowContactMenu(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
                    >
                      <Linkedin size={16} className="text-orange-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={safeLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setShowContactMenu(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
                    >
                      <Github size={16} className="text-orange-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={safeLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setShowContactMenu(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
                    >
                      <MessageCircle size={16} className="text-orange-400" />
                      <span>WhatsApp</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showPitchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400" />
              <button
                onClick={() => setShowPitchModal(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <Wand2 className="text-orange-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">AI Executive Summary</h3>
              </div>
              <div className="min-h-[120px] flex items-center justify-center p-6 bg-black/50 rounded-2xl border border-zinc-800/50">
                {isGeneratingPitch ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-zinc-400 animate-pulse">Analyzing portfolio data and crafting pitch...</span>
                  </div>
                ) : (
                  <p className="text-lg leading-relaxed text-zinc-300 italic">"{generatedPitch}"</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showThesisSummaryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 16 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-2xl w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400" />
              <button
                onClick={() => setShowThesisSummaryModal(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Thesis Summary</p>
                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white">{safeThesis.englishTitle}</h3>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-black/50 p-6">
                <p className="text-zinc-300 leading-relaxed">{safeThesis.summary}</p>
              </div>
              <div className="mt-5">
                <a
                  href={thesisPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 hover:bg-orange-500/20 transition-colors"
                >
                  <FileText size={16} />
                  Open Full Thesis PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 18 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-600 to-orange-400" />
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-5 right-5 z-20 rounded-full border border-zinc-700 bg-black/65 p-2 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close certificate preview"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Achievement Preview</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">{selectedAchievement.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {selectedAchievement.org} - {selectedAchievement.year}
                </p>
                <p className="mt-3 text-sm text-zinc-400">{selectedAchievement.desc}</p>
              </div>

              <div className="px-6 pb-7 md:px-8 md:pb-8">
                <div className="max-h-[58vh] overflow-auto rounded-2xl border border-zinc-800 bg-black">
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="about" className="py-24 pt-36 bg-black min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6">
          <SectionHeading icon={User} subtitle="A focused overview of the work I care about and the environments I like to build in.">
            About Me
          </SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative aspect-square max-w-md mx-auto w-full"
            >
              <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-zinc-900 rounded-3xl overflow-hidden">
                <img
                  src={gabrielBeach}
                  alt="Gabriel Winasta Sinisuka"
                  className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-orange-300 mb-6">
                Robotics + Vision + Delivery
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white mb-6">
                {safeName}
              </h3>
              <p className="text-orange-400 font-semibold uppercase tracking-[0.24em] text-sm mb-6">{safeRole}</p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">{safePassion}</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, label: 'Computer Vision' },
                  { icon: FolderCode, label: 'Robotics Prototyping' },
                  { icon: Trophy, label: 'Competitive Engineer' },
                  { icon: FileText, label: 'Embedded Systems' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <item.icon size={18} className="text-orange-500" />
                    </div>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-zinc-950 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 overflow-hidden">
          <SectionHeading icon={FileText} subtitle="A blend of software engineering, AI implementation, robotics integration, and leadership reflected across competition, laboratory, and internship work.">
            Skills
          </SectionHeading>
          <div className="mb-12 rounded-[2rem] border border-zinc-800 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_30%),linear-gradient(180deg,rgba(24,24,27,0.9),rgba(9,9,11,0.95))] p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-orange-300">Toolchain</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Frameworks, languages, and software I work with</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
                A moving stack wall felt more honest here than static badges. Hover any logo to bring it forward.
              </p>
            </div>
            <LogoMarquee logos={safeToolLogos} duration={30} />
            <LogoMarquee logos={[...safeToolLogos].reverse()} reverse duration={34} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safeSkills.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-black">
        <div className="container mx-auto px-6 overflow-visible">
          <SectionHeading icon={Briefcase} subtitle="Experience grounded in proof, from industry placement and technical organizations to national engineering competitions.">
            Professional Experience
          </SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] gap-12 items-start max-w-7xl mx-auto">
            <div ref={experienceListRef} className="pb-8 lg:pb-20">
              {normalizedExperiences.map((exp, idx) => (
                <ExperienceItem
                  key={exp.role}
                  exp={exp}
                  index={idx}
                  isActive={idx === safeActiveExperience}
                  onHover={() => setActiveExperience(idx)}
                  onFocus={() => setActiveExperience(idx)}
                  onSelect={() => setActiveExperience(idx)}
                  itemRef={(element) => {
                    experienceItemRefs.current[idx] = element;
                  }}
                  mobileProof={idx === safeActiveExperience ? currentProof : (exp.proofImages?.[0] || currentProof)}
                  activeProofIndex={safeActiveProofIndex}
                  onSelectProof={setActiveProofIndex}
                  disableSlideIn={isMobileViewport}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="hidden lg:block lg:sticky lg:top-28 relative self-start z-20"
            >
              <motion.div
                ref={experiencePanelRef}
                animate={{ y: enablePanelFollow ? experiencePanelY : 0 }}
                transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
                className="will-change-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent z-10 pointer-events-none" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeExperience}-${activeProofIndex}-${currentProof.src}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="group relative aspect-[4/5] overflow-hidden"
                      >
                        <img
                          src={currentProof.src}
                          alt={currentProof.alt}
                          className="h-full w-full object-cover transition-all duration-700 md:grayscale md:blur-[8px] md:opacity-65 md:saturate-[0.65] md:group-hover:grayscale-0 md:group-hover:blur-none md:group-hover:opacity-100 md:group-hover:saturate-100"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-80" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
                          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-300">
                            <ImageIcon size={12} />
                            Proof Of Work
                          </div>
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{currentExperience.role}</h3>
                          <p className="mt-2 text-sm text-zinc-300">{currentProof.caption}</p>
                          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-zinc-500">
                            Hover image to bring the proof into focus
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="w-24 xl:w-28 grid grid-cols-1 gap-3">
                    {currentProofImages.map((proof, index) => (
                      <button
                        key={proof.src}
                        type="button"
                        onClick={() => setActiveProofIndex(index)}
                        className={`relative overflow-hidden rounded-2xl border transition-all ${
                          index === safeActiveProofIndex ? 'border-orange-500 shadow-[0_0_0_1px_rgba(249,115,22,0.45)]' : 'border-zinc-800'
                        }`}
                      >
                        <img
                          src={proof.src}
                          alt={proof.alt}
                          className={`h-20 xl:h-24 w-full object-cover transition-all duration-500 ${
                            index === safeActiveProofIndex ? 'grayscale-0 opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 bg-zinc-950 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 overflow-hidden">
          <SectionHeading icon={Award} subtitle="Formal recognition from competitions, laboratory tracks, and organizational responsibility.">
            Achievements & Certifications
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {safeAchievements.map((item, idx) => (
              <AchievementCard
                key={item.title}
                item={item}
                index={idx}
                onOpen={() => setSelectedAchievement(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-black min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 overflow-hidden">
          <SectionHeading icon={FolderCode} subtitle="Selected builds and engineering tracks, including EyeAI as a dedicated computer vision + LLM highlight.">
            Technical Highlights
          </SectionHeading>
          <div className="mb-12 rounded-[2rem] border border-zinc-800 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%),linear-gradient(180deg,rgba(24,24,27,0.95),rgba(9,9,11,0.95))] p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.32)]">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] gap-8 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Featured Project</p>
                <h3 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight text-white">{safeEyeAI.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.26em] text-zinc-500">{safeEyeAI.tagline}</p>
                <p className="mt-5 text-zinc-300 leading-relaxed">{safeEyeAI.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(Array.isArray(safeEyeAI.capabilities) ? safeEyeAI.capabilities : []).map((capability) => (
                    <span key={capability} className="rounded-full border border-zinc-700 bg-black/70 px-3 py-1 text-[11px] text-zinc-300">
                      {capability}
                    </span>
                  ))}
                </div>
                <a
                  href={safeLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 hover:bg-orange-500/20 transition-colors"
                >
                  <Github size={16} />
                  Explore on GitHub
                </a>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                  <img
                    src={currentEyeAIProof.src}
                    alt={currentEyeAIProof.label}
                    className="h-[260px] sm:h-[320px] w-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm text-zinc-200">{currentEyeAIProof.label}</p>
                </div>
                <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {safeEyeAIShots.map((shot, index) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setActiveEyeAIShot(index)}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        index === activeEyeAIShot ? 'border-orange-500 shadow-[0_0_0_1px_rgba(249,115,22,0.45)]' : 'border-zinc-800'
                      }`}
                    >
                      <img
                        src={shot.src}
                        alt={shot.label}
                        className={`h-14 w-full object-cover transition-all duration-500 ${
                          index === activeEyeAIShot ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section id="thesis" className="py-24 bg-zinc-950 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 overflow-hidden">
          <SectionHeading icon={FileText} subtitle="Research work focused on compressing YOLOv8 for practical real-time edge deployment.">
            Thesis
          </SectionHeading>
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <p className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Original Title (ID)</p>
            <p className="mt-3 text-zinc-300 leading-relaxed">{safeThesis.originalTitle}</p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-orange-300">English Title</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight text-white">{safeThesis.englishTitle}</h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Thesis PDF access is temporarily disabled"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-black text-zinc-400 uppercase tracking-[0.15em] cursor-not-allowed"
              >
                <FileText size={16} />
                View Thesis PDF
              </button>
              <button
                type="button"
                onClick={() => setShowThesisSummaryModal(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-orange-300 hover:bg-orange-500/20 transition-colors"
              >
                <Wand2 size={16} />
                Summarize PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black tracking-tighter">
              GAB<span className="text-orange-500">.</span>SINISUKA
            </div>
            <p className="text-zinc-600 text-sm text-center">
              &copy; {new Date().getFullYear()} Gabriel Winasta Sinisuka. Built around real engineering work and documented proof.
            </p>
            <div className="flex gap-6">
              <a href={safeLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} className="text-zinc-500 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href={safeLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} className="text-zinc-500 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href={safeLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} className="text-zinc-500 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
            <a href={safeLinks.whatsapp} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-orange-300 transition-colors">
              WhatsApp: 0821-7042-8003
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-orange-500 z-[100]" />
    </div>
  );
}
