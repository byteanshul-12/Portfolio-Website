
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Layout as LayoutIcon, 
  Database, 
  Server, 
  Menu, 
  X,
  ChevronDown,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Camera,
  Heart,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              AT
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
              Anshul Portfolio
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-400 hover:text-indigo-400 font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-500/20"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 mb-6">
            Anshul Tripathi
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            I turn coffee into <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Functioning Code.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-mono">
            "If at first you don't succeed, call it version 1.0. Also, it worked on my machine." ☕️💻
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20"
            >
              See My Games
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold text-lg transition-all"
            >
              Don't Be Shy
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <ChevronDown className="mx-auto text-slate-500 animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-indigo-600/30 shadow-2xl">
                <img 
                  src="profile.png" 
                  alt="Anshul Tripathi" 
                  className="object-cover w-full h-full transition-all duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-indigo-600 p-2 rounded-full text-white shadow-xl">
                <Heart size={18} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">About Me</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Hey! I'm <span className="text-white font-semibold">Anshul Tripathi</span>, a curious mind  who spends 80% of his time explaining to his computer why it should do what I asked, and 20% wondering why it actually worked.
              </p>
              <p>
                I specialize in building things that make life easier (or at least more entertaining), 
                like my Flappy Bird clone or the Attendance Calculator for when the snooze button wins. 
                I believe a good day is measured by the number of bugs I fixed versus the new ones I accidentally invented.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h4 className="text-white font-bold mb-1 italic">99+</h4>
                  <p className="text-sm">Bugs Encountered</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h4 className="text-white font-bold mb-1 italic">Lots</h4>
                  <p className="text-sm">Coffee Consumed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <LayoutIcon size={24} />,
      skills: ['HTML5', 'Tailwind CSS', 'JavaScript', 'React', 'Canvas API']
    },
    {
      title: 'Logic',
      icon: <Terminal size={24} />,
      skills: ['Python', 'Node.js', 'Logic Systems', 'Mathematics']
    },
    {
      title: 'Tools',
      icon: <Code size={24} />,
      skills: ['VS Code', 'Git', 'Figma', 'Postman']
    },
    {
      title: 'Interests',
      icon: <Camera size={24} />,
      skills: ['Photography', 'Gaming', 'Travel', 'Mountain Hiking']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do</h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">
            Aside from turning it off and on again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Flappy Bird Game',
      description: 'A precise clone of the legendary arcade game. Features physics-based movement and endless frustration.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      tags: ['JavaScript', 'Canvas API', 'Gaming'],
      link: 'https://github.com/anshulbyte-12/flappy-bird'
    },
    {
      title: 'Attendance Calculator',
      description: 'The ultimate survival tool for students. Tells you exactly how many classes you can afford to skip.',
      image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Logic', 'Utility'],
      link: 'https://github.com/anshulbyte-12/attendance-calc'
    },
    {
      title: 'Modern Landing Page',
      description: 'A sleek, high-performance landing page designed to impress and convert visitors instantly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML/CSS', 'Tailwind', 'Responsive'],
      link: 'https://github.com/anshulbyte-12/landing-page'
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">My Creations</h2>
          <p className="text-slate-400">Code that actually runs (mostly). Click thumbnails to view on GitHub.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project.link)}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold flex items-center gap-2">
                    Open Project <ExternalLink size={18} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-white group-hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'pic2.jpeg ','pic3.jpg','pic.jpg','pic4.jpg'
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Snapshots</h2>
          <p className="text-slate-400">Capturing moments when I step away from the keyboard.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img} 
                alt="Gallery Item" 
                className="w-full h-auto object-cover rounded-2xl border border-slate-800 hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900/10 to-purple-900/10 rounded-[3rem] p-8 md:p-16 border border-slate-800">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Hit me up <br /> for coffee or code.</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Or if you want to challenge me to a game of Flappy Bird. I usually lose, but it's the effort that counts.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium">anshultrip1234@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/anshul-tripathi-0bb445301/" target="_blank" rel="noopener" className="text-white font-medium hover:text-indigo-400 transition-colors">anshultripathi</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400">
                    <Twitter size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">X (Twitter)</p>
                    <a href="https://x.com/anshultrip1" target="_blank" rel="noopener" className="text-white font-medium hover:text-indigo-400 transition-colors">@anshultrip1</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your cool idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${isSent ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/20'} disabled:opacity-50`}
                >
                  {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-lg text-white">AT</div>
            <span className="font-bold text-white uppercase tracking-widest">Anshul Tripathi</span>
          </div>
          
          <p className="text-slate-500 text-sm font-mono text-center md:text-left">
            © {new Date().getFullYear()} Built while debugging. | anshultrip1234@gmail.com
          </p>

          <div className="flex items-center space-x-6 text-slate-400">
            <a href="https://github.com/anshulbyte-12" target="_blank" rel="noopener" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/anshultripathi" target="_blank" rel="noopener" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/anshultrip1" target="_blank" rel="noopener" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="mailto:anshultrip1234@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
