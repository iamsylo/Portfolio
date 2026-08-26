
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const capabilities = personalInfo.subtitle.split(' | ');

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-[#f4f0e8] text-[#1d2924] dark:bg-[#17211d] dark:text-[#f4f0e8]">
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#315b4d]" />
      <div className="absolute left-0 right-0 top-[18%] overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="flex w-max whitespace-nowrap text-[18vw] font-semibold leading-none text-[#315b4d]/[.08] dark:text-[#f4f0e8]/[.04]"
        >
          <span className="pr-[8vw]">PAGATPATAN</span>
          <span className="pr-[8vw]">PAGATPATAN</span>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-8 sm:gap-10 lg:gap-16 items-center lg:items-start min-h-[100svh] pt-10 sm:pt-16 pb-20">
          {/* Content - Left with diagonal background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative py-8 sm:py-12 lg:pt-[5vh] lg:pb-0 lg:pr-4"
          >
            <div className="space-y-2 lg:space-y-3 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#b94b32] font-semibold"
              >
                <span className="h-px w-10 bg-[#b94b32]" />
                Digital maker / Ilocos Sur
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2 sm:space-y-3"
              >
                <p className="text-sm sm:text-base text-[#68736b] dark:text-[#b8c1b8] font-medium">
                  I’m
                </p>
                <motion.h1
                  className="text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-semibold leading-[0.88] overflow-visible"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
                >
                  <span className="block whitespace-nowrap text-[#1d2924] dark:text-[#f4f0e8]">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block text-[#b94b32] pb-1 sm:pb-3">
                    {personalInfo.name.split(' ').slice(2).join(' ')}
                  </span>
                </motion.h1>
              </motion.div>

              {/* Title and subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3 sm:space-y-4 mt-3 sm:mt-5"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-[#315b4d] dark:text-[#d6e2d9] max-w-xl">
                  {personalInfo.title}
                </h2>
                <div className="overflow-hidden max-w-xl bg-[#f4f0e8]/90 dark:bg-[#17211d]/70 border-y border-[#315b4d]/30 dark:border-[#f4f0e8]/20 py-2.5">
                  <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    className="flex w-max whitespace-nowrap text-[10px] uppercase tracking-[0.15em] font-semibold text-[#1d2924] dark:text-[#d6e2d9]"
                  >
                    {[...capabilities, ...capabilities].map((capability, index) => (
                      <span key={`${capability}-${index}`} className="flex items-center mr-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b94b32] mr-2" />
                        {capability}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 pt-5 sm:pt-7"
              >
                <a
                  href="/Resume.pdf"
                  download
                  className="group btn-primary btn-hover-effect flex items-center justify-center gap-2 text-base hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Resume
                </a>
                <button
                  onClick={scrollToAbout}
                  className="btn-secondary bg-[#f4f0e8] text-[#1d2924] border-2 border-[#315b4d] dark:bg-[#17211d] dark:text-[#f4f0e8] dark:border-[#9bb6a5] flex items-center justify-center gap-2 text-base hover:bg-[#e9e2d6] dark:hover:bg-[#315b4d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Learn More
                  <ChevronDown className="h-5 w-5 group-hover:animate-bounce" />
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 sm:gap-4 pt-3 sm:pt-5"
              >
                {[
                  { Icon: Github, url: 'https://github.com/iamsylo', label: 'GitHub' },
                  { Icon: Linkedin, url: 'https://www.linkedin.com/in/christian-joseph-pagatpatan-971308381/', label: 'LinkedIn' },
                  { Icon: Facebook, url: 'https://www.facebook.com/iamsidyey', label: 'Facebook' },
                  { Icon: Instagram, url: 'https://www.instagram.com/sylo.jpg', label: 'Instagram' },
                  { Icon: Mail, url: 'mailto:' + personalInfo.email, label: 'Email' },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    aria-label={label}
                    className="p-2 sm:p-3 bg-[#e9e2d6] dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full hover:bg-[#b94b32] hover:border-[#b94b32] hover:scale-110 hover:-translate-y-1 active:scale-90 transition-all duration-200"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#315b4d] dark:text-[#d6e2d9]" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Transparent portrait stage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-end min-h-[26rem] sm:min-h-[34rem] lg:min-h-[88svh] lg:-translate-y-[5vh]"
          >
            <div className="absolute bottom-[7%] left-[8%] right-[8%] h-1 bg-[#b94b32]" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative z-10 w-full max-w-[34rem] lg:-mr-12 xl:-mr-24"
            >
              <div
                className="relative w-full h-[48vh] sm:h-[58vh] lg:h-[70vh] min-h-[24rem] sm:min-h-[28rem] max-h-[48rem] flex items-end justify-center"
              >
                <img
                  src={personalInfo.avatar}
                  alt="Hero"
                  width={960}
                  height={960}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain object-bottom grayscale-[15%] brightness-[.98] transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute bottom-1 left-5 bg-[#1d2924]/85 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#f4f0e8]">
                Christian Joseph / Creative Developer
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden sm:flex items-center justify-between border-t border-[#1d2924]/15 dark:border-[#f4f0e8]/20 py-4 text-[10px] uppercase tracking-[0.22em] text-[#68736b] dark:text-[#b8c1b8]">
          <span>Based in Ilocos Sur, Philippines</span>
          <span>Available for thoughtful digital work</span>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-[#b8c1b8] hover:text-[#e37d62] transition-colors"
          >
            <span className="text-sm font-semibold hidden sm:block">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}