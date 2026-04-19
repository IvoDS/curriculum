import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Github, Linkedin, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { getCVData, getPortfolio } from './content';
import { TerminalCard } from './components/TerminalCard/TerminalCard';
import logo from '@assets/logo-no-background.png';
import banner from '@assets/horizontal-banner.png';
// @ts-ignore
import styles from './App.module.css';

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('contact');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cvData = getCVData(i18n.language);
  const portfolio = getPortfolio(i18n.language);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const sections = ['contact', 'experience', 'workSkills', 'softSkills', 'portfolio'];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="IDS Logo" className={styles.logoImg} />
          <span className={styles.logoText}>IVAN DE STEFANI</span>
        </div>

        <button className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={48} /> : <Menu size={48} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {sections.map(section => (
            <button 
              key={section}
              onClick={() => handleSectionChange(section)}
              className={activeSection === section ? styles.active : ''}
            >
              {t(`nav.${section}`)}
            </button>
          ))}
          <div className={styles.mobileControls}>
            <div className={styles.languageSwitcher}>
              <Globe size={28} color="#50C878" />
              <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                <option value="it">IT</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>
        </nav>

        <div className={styles.desktopControls}>
          <div className={styles.languageSwitcher}>
            <Globe size={24} color="#50C878" />
            <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
              <option value="it">IT</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <AnimatePresence mode="wait">
          <motion.section
            key={activeSection + i18n.language}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.section}
          >
            {activeSection === 'contact' && (
              <>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className={styles.heroBanner}
                >
                  <img src={banner} alt="Ivan De Stefani" />
                </motion.div>
                <TerminalCard title="USER_PROFILE">
                  <div className={styles.profileGrid}>
                    <div>
                      <h1>{cvData.contact.name}</h1>
                      <p className={styles.role}>{cvData.contact.role}</p>
                    </div>
                    <div className={styles.contactList}>
                      <div className={styles.contactItem}><Mail size={16} color="#50C878"/> [MAIL] {cvData.contact.email}</div>
                      <div className={styles.contactItem}><Phone size={16} color="#50C878"/> [TEL] {cvData.contact.phone}</div>
                      <div className={styles.contactItem}><MapPin size={16} color="#50C878"/> [LOC] {cvData.contact.location}</div>
                    </div>
                  </div>
                </TerminalCard>
              </>
            )}

            {activeSection === 'experience' && (
              <div className={styles.experienceList}>
                {cvData.experiences.map((exp, i) => (
                  <TerminalCard key={i} title={`LOG_ENTRY_${i}`}>
                    <h3>{exp.role} @ {exp.company}</h3>
                    <p className={styles.period}>{exp.period}</p>
                    <ul className={styles.bulletList}>
                      {exp.description.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </TerminalCard>
                ))}
              </div>
            )}

            {activeSection === 'workSkills' && (
              <TerminalCard title="SYSTEM_CAPABILITIES">
                <div className={styles.skillGrid}>
                  {cvData.workSkills.map((skill, i) => (
                    <div key={i} className={styles.skillItem}>
                      <span>{skill.name}</span>
                      <div className={styles.progressBar}>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level * 20}%` }}
                          className={styles.progress}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TerminalCard>
            )}

            {activeSection === 'softSkills' && (
              <TerminalCard title="TRANSVERSAL_MODULES">
                <div className={styles.softSkillsList}>
                  {cvData.softSkills.map((skill, i) => (
                    <div key={i} className={styles.softSkillItem}>
                      <span className={styles.bullet}>{'>'}</span> {skill}
                    </div>
                  ))}
                </div>
              </TerminalCard>
            )}

            {activeSection === 'portfolio' && (
              <div className={styles.portfolioGrid}>
                {portfolio.map(item => (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id} className={styles.portfolioCard}>
                    <div className={styles.portfolioLogo}>
                      {item.logo ? (
                        <img src={item.logo} alt={`${item.title} Logo`} className={styles.logoImage} />
                      ) : (
                        <div className={styles.logoBox}>{item.title[0]}</div>
                      )}
                    </div>
                    <div className={styles.portfolioInfo}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className={styles.tags}>
                        {item.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className={styles.footer}>
        <div className={styles.socials}>
          <a href="#"><Github size={32}/></a>
          <a href="#"><Linkedin size={32}/></a>
        </div>
        <p>© 2026 IVAN DE STEFANI - BUILT_WITH_REACT_VITE</p>
      </footer>
    </div>
  );
}

export default App;
