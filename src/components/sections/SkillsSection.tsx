import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import ScrollAnimation from '../ScrollAnimation';
import * as THREE from 'three';

// Skill sphere component
const SkillSphere = ({ position, skill, color }: { 
  position: [number, number, number]; 
  skill: { name: string; icon: string; category: string };
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      
      {hovered && (
        <Text
          position={[position[0], position[1] + 1, position[2]]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      )}
      
      <Text
        position={[position[0], position[1], position[2] + 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.icon}
      </Text>
    </group>
  );
};

// Skills 3D Scene
const Skills3DScene = ({ skills }: { skills: Array<{ name: string; icon: string; category: string; color: string }> }) => {

  // Arrange skills in a circular pattern
  const arrangeSpheres = (skillsArray: typeof skills) => {
    const positions: [number, number, number][] = [];
    const radius = 4;
    const layers = Math.ceil(skillsArray.length / 12);
    const skillsPerLayer = Math.ceil(skillsArray.length / layers);
    
    skillsArray.forEach((_, index) => {
      const layer = Math.floor(index / skillsPerLayer);
      const indexInLayer = index % skillsPerLayer;
      const angleStep = (2 * Math.PI) / skillsPerLayer;
      const angle = indexInLayer * angleStep;
      
      const x = Math.cos(angle) * (radius - layer * 0.8);
      const z = Math.sin(angle) * (radius - layer * 0.8);
      const y = (layer - layers/2) * 1.2;
      
      positions.push([x, y, z]);
    });
    
    return positions;
  };

  const positions = arrangeSpheres(skills);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {skills.map((skill, index) => (
        <SkillSphere
          key={skill.name}
          position={positions[index]}
          skill={skill}
          color={skill.color}
        />
      ))}
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<'fullstack' | 'ml'>('fullstack');

  const skillSets = {
    fullstack: [
      // Languages
      { name: "Python", icon: "🐍", category: "Languages", color: "#3776AB" },
      { name: "C++", icon: "⚙️", category: "Languages", color: "#00599C" },
      { name: "SQL", icon: "🗃️", category: "Languages", color: "#4479A1" },
      { name: "JavaScript", icon: "⚡", category: "Languages", color: "#F7DF1E" },
      { name: "TypeScript", icon: "🔷", category: "Languages", color: "#3178C6" },
      { name: "R", icon: "📊", category: "Languages", color: "#276DC3" },
      { name: "C", icon: "🔧", category: "Languages", color: "#A8B9CC" },
      { name: "C#", icon: "🟣", category: "Languages", color: "#239120" },
      { name: "Swift", icon: "🍎", category: "Languages", color: "#FA7343" },
      { name: "HTML", icon: "🌐", category: "Languages", color: "#E34F26" },
      { name: "CSS", icon: "🎨", category: "Languages", color: "#1572B6" },
      
      // Frameworks
      { name: "React", icon: "⚛️", category: "Frameworks", color: "#61DAFB" },
      { name: "Next.js", icon: "▲", category: "Frameworks", color: "#000000" },
      { name: "FastAPI", icon: "⚡", category: "Frameworks", color: "#009688" },
      { name: "Flask", icon: "🍶", category: "Frameworks", color: "#000000" },
      { name: "Django", icon: "🎯", category: "Frameworks", color: "#092E20" },
      { name: "Spring Boot", icon: "🍃", category: "Frameworks", color: "#6DB33F" },
      { name: ".NET", icon: "💜", category: "Frameworks", color: "#512BD4" },
      { name: "Angular", icon: "🅰️", category: "Frameworks", color: "#DD0031" },
      
      // Tools
      { name: "Git", icon: "🌿", category: "Tools", color: "#F05032" },
      { name: "Docker", icon: "🐳", category: "Tools", color: "#2496ED" },
      { name: "AWS", icon: "☁️", category: "Tools", color: "#232F3E" },
      { name: "Firebase", icon: "🔥", category: "Tools", color: "#FFCA28" },
      { name: "PostgreSQL", icon: "🐘", category: "Tools", color: "#4169E1" },
      { name: "MySQL", icon: "🗄️", category: "Tools", color: "#4479A1" },
    ],
    
    ml: [
      // Languages
      { name: "Python", icon: "🐍", category: "Languages", color: "#3776AB" },
      { name: "C++", icon: "⚙️", category: "Languages", color: "#00599C" },
      { name: "SQL", icon: "🗃️", category: "Languages", color: "#4479A1" },
      { name: "JavaScript", icon: "⚡", category: "Languages", color: "#F7DF1E" },
      { name: "TypeScript", icon: "🔷", category: "Languages", color: "#3178C6" },
      { name: "R", icon: "📊", category: "Languages", color: "#276DC3" },
      
      // ML Frameworks
      { name: "PyTorch", icon: "🔥", category: "Frameworks", color: "#EE4C2C" },
      { name: "TensorFlow", icon: "🧠", category: "Frameworks", color: "#FF6F00" },
      { name: "Keras", icon: "🎯", category: "Frameworks", color: "#D00000" },
      { name: "scikit-learn", icon: "📈", category: "Frameworks", color: "#F7931E" },
      { name: "FastAPI", icon: "⚡", category: "Frameworks", color: "#009688" },
      { name: "Flask", icon: "🍶", category: "Frameworks", color: "#000000" },
      { name: "Django", icon: "🎯", category: "Frameworks", color: "#092E20" },
      { name: "React", icon: "⚛️", category: "Frameworks", color: "#61DAFB" },
      { name: "Next.js", icon: "▲", category: "Frameworks", color: "#000000" },
      
      // ML Tools & Libraries
      { name: "Git", icon: "🌿", category: "Tools", color: "#F05032" },
      { name: "Docker", icon: "🐳", category: "Tools", color: "#2496ED" },
      { name: "MLflow", icon: "🔄", category: "Tools", color: "#0194E2" },
      { name: "DVC", icon: "📊", category: "Tools", color: "#13ADC7" },
      { name: "SageMaker", icon: "🤖", category: "Tools", color: "#FF9900" },
      { name: "GCP", icon: "☁️", category: "Tools", color: "#4285F4" },
      { name: "Azure ML", icon: "🔵", category: "Tools", color: "#0078D4" },
      { name: "NumPy", icon: "🔢", category: "Libraries", color: "#013243" },
      { name: "pandas", icon: "🐼", category: "Libraries", color: "#150458" },
      { name: "OpenCV", icon: "👁️", category: "Libraries", color: "#5C3EE8" },
      { name: "NLTK", icon: "📝", category: "Libraries", color: "#145C3C" },
      { name: "Hugging Face", icon: "🤗", category: "Libraries", color: "#FFD21E" },
    ]
  };

  const currentSkills = skillSets[activeCategory];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An interactive showcase of my technical expertise. 
              Toggle between categories and hover over the spheres to explore each skill.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Toggle Buttons */}
        <ScrollAnimation delay={100}>
          <div className="flex justify-center mb-16">
            <div className="bg-muted/30 rounded-full p-1 flex">
              <button
                onClick={() => setActiveCategory('fullstack')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'fullstack'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Full-Stack Skills
              </button>
              <button
                onClick={() => setActiveCategory('ml')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'ml'
                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Machine Learning Skills
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* 3D Skills Visualization */}
        <ScrollAnimation delay={200}>
          <div className="skills-3d-container mb-16 rounded-2xl overflow-hidden border border-border">
            <Suspense fallback={
              <div className="h-full flex items-center justify-center bg-muted/20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading 3D Skills...</p>
                </div>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 8], fov: 75 }} key={activeCategory}>
                <Skills3DScene skills={currentSkills} />
              </Canvas>
            </Suspense>
          </div>
        </ScrollAnimation>

        {/* Skills Summary by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(
            currentSkills.reduce((acc, skill) => {
              if (!acc[skill.category]) acc[skill.category] = [];
              acc[skill.category].push(skill.name);
              return acc;
            }, {} as Record<string, string[]>)
          ).map(([category, skills], index) => (
            <ScrollAnimation key={`${activeCategory}-${category}`} delay={400 + index * 100}>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="py-2 px-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={800}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Tip:</span> 
              Click and drag to rotate the 3D view, hover over spheres to see skill names
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;