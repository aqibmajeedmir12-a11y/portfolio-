import "./styles/Skills.css";
import { FaCode, FaGlobe, FaShieldAlt, FaWrench } from "react-icons/fa";
import { useRef, useState, MouseEvent } from "react";

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate 15 degrees max
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="skills-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div 
        className="skills-card glass-panel"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: rotation.x === 0 && rotation.y === 0 ? 'transform 0.5s ease' : 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-heading">
        <h4>What I Know</h4>
        <h2>
          Technical <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">
        <TiltCard>
          <div className="skills-card-header">
            <FaCode />
            <h3>Programming Languages</h3>
          </div>
          <div className="skills-tags">
            <div className="skills-tag">Python</div>
            <div className="skills-tag">Java</div>
            <div className="skills-tag">C</div>
            <div className="skills-tag">JavaScript</div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="skills-card-header">
            <FaGlobe />
            <h3>Web Technologies</h3>
          </div>
          <div className="skills-tags">
            <div className="skills-tag">HTML5</div>
            <div className="skills-tag">CSS3</div>
            <div className="skills-tag">React</div>
            <div className="skills-tag">Node.js</div>
            <div className="skills-tag">Express</div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="skills-card-header">
            <FaShieldAlt />
            <h3>Cybersecurity</h3>
          </div>
          <div className="skills-tags">
            <div className="skills-tag">Network Security</div>
            <div className="skills-tag">Linux</div>
            <div className="skills-tag">Wireshark</div>
            <div className="skills-tag">Metasploit</div>
            <div className="skills-tag">Ethical Hacking</div>
            <div className="skills-tag">Kali Linux</div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="skills-card-header">
            <FaWrench />
            <h3>Developer Tools</h3>
          </div>
          <div className="skills-tags">
            <div className="skills-tag">Git</div>
            <div className="skills-tag">GitHub</div>
            <div className="skills-tag">VS Code</div>
            <div className="skills-tag">Figma</div>
            <div className="skills-tag">MongoDB</div>
          </div>
        </TiltCard>
      </div>
    </div>
  );
};

export default Skills;
