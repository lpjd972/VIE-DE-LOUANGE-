
import React from 'react';
import { Drum, Music, Cog } from 'lucide-react';

const Skills = () => {
  // Sample skill data - to be updated over time
  const skills = [
    {
      category: "Percussions",
      icon: <Drum size={24} className="text-vintage-terracotta" />,
      items: [
        { name: "Djembé", level: 70 },
        { name: "Cajon", level: 60 },
        { name: "Percussions diverses", level: 65 }
      ]
    },
    {
      category: "Batterie",
      icon: <Drum size={24} className="text-vintage-terracotta" />,
      items: [
        { name: "Jeu à l'oreille", level: 80 },
        { name: "Technique", level: 65 },
        { name: "Rythmiques variées", level: 75 }
      ]
    },
    {
      category: "Autres instruments",
      icon: <Music size={24} className="text-vintage-terracotta" />,
      items: [
        { name: "Nouvel instrument (en apprentissage)", level: 30 }
      ]
    }
  ];
  
  const futureSkills = [
    "Logiciels de MAO",
    "Production musicale",
    "Arrangement",
    "Composition"
  ];

  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mes Compétences</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="vintage-card">
              <div className="flex items-center gap-3 mb-4">
                {skillGroup.icon}
                <h2 className="text-2xl font-bold">{skillGroup.category}</h2>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-vintage-cream/90">{skill.name}</span>
                      <span className="text-vintage-cream/70">{skill.level}%</span>
                    </div>
                    <div className="vintage-skill-bar">
                      <div 
                        className="vintage-skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="vintage-card mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Cog size={24} className="text-vintage-terracotta" />
              <h2 className="text-2xl font-bold">En cours d'apprentissage</h2>
            </div>
            
            <p className="text-vintage-cream/80 mb-4">
              Je continue d'améliorer mes compétences existantes tout en explorant de nouveaux domaines musicaux.
            </p>
            
            <div className="border-t border-vintage-cream/20 pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Objectifs d'apprentissage</h3>
              <ul className="list-disc list-inside space-y-2 text-vintage-cream/80">
                <li>Perfectionner ma technique de batterie</li>
                <li>Approfondir ma maîtrise du nouvel instrument</li>
                <li>Explorer davantage de styles musicaux</li>
              </ul>
            </div>
          </div>
          
          <div className="vintage-card">
            <h2 className="text-2xl font-bold mb-4">Compétences à venir</h2>
            <p className="text-vintage-cream/80 mb-4">
              Zones à compléter au fur et à mesure de mon développement musical.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {futureSkills.map((skill, index) => (
                <div key={index} className="bg-vintage-cream/5 border border-vintage-cream/10 rounded p-3 text-center">
                  <p className="text-vintage-cream/60">{skill}</p>
                  <p className="text-xs text-vintage-cream/40 mt-1">À venir</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
