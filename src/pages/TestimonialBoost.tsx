import React, { useState } from 'react';
import { Play, Download, Heart, Calendar, FileText, Headphones, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TestimonialBoost = () => {
  const [selectedFormat, setSelectedFormat] = useState<'all' | 'video' | 'audio' | 'text'>('all');

  // Témoignages avec différents formats
  const testimonials = [
    {
      id: 1,
      title: "Marcher et écouter l'Esprit au quotidien",
      description: "Salut à tous voici une petite vidéo, d'une série de vidéo de témoignage. Édifier la communauté des croyants, vous aider dans votre quotidien spirituel, et vous permettre de partager ces bénédictions avec votre entourage. Que ces témoignages soient des vitamines spirituelles pour rester constamment dans la présence de Dieu le Père et du Saint-Esprit, et expérimenter avec foi et conviction cette vie de l'Esprit. #louange #louangechrétienne #musician #temoignagechretien #holyspirit #holyghost #evangile",
      formats: {
        video: "https://youtu.be/kowJCjxunyU",
        audio: "/audio/marcher-ecouter-esprit.m4a"
      },
      date: "2024-12-15",
      duration: "10 min",
      tags: ["louange", "evangile", "holyghost", "holyspirit", "yahwé", "JESUS", "TEMOIGNAGE", "foi", "parolededieu"]
    },
    {
      id: 2,
      title: "La fidélité de Dieu dans les épreuves",
      description: "Témoignage personnel sur comment Dieu m'a porté à travers les moments difficiles et comment Sa fidélité ne fait jamais défaut.",
      formats: {
        video: "https://www.youtube.com/watch?v=example1",
        audio: "/audio/temoignage1.mp3",
        text: "Dans ma vie, j'ai traversé des moments où tout semblait s'écrouler autour de moi..."
      },
      date: "2024-12-10",
      duration: "8 min",
      tags: ["Fidélité", "Épreuves", "Espoir"]
    },
    {
      id: 2,
      title: "L'importance de la prière quotidienne",
      description: "Comment établir une relation intime avec Dieu à travers la prière constante et l'écoute de Sa voix.",
      formats: {
        video: "https://www.youtube.com/watch?v=example2",
        audio: "/audio/temoignage2.mp3",
        text: "La prière n'est pas seulement un acte religieux, c'est une conversation avec notre Père céleste..."
      },
      date: "2024-12-08",
      duration: "12 min",
      tags: ["Prière", "Intimité", "Relation"]
    },
    {
      id: 3,
      title: "Marcher par l'Esprit au quotidien",
      description: "Témoignage pratique sur comment vivre une vie guidée par le Saint-Esprit dans chaque décision et situation.",
      formats: {
        video: "https://www.youtube.com/watch?v=example3",
        audio: "/audio/temoignage3.mp3",
        text: "Marcher par l'Esprit, c'est apprendre à écouter cette voix douce qui nous guide..."
      },
      date: "2024-12-05",
      duration: "15 min",
      tags: ["Saint-Esprit", "Guidance", "Vie spirituelle"]
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (selectedFormat === 'all') return true;
    return testimonial.formats[selectedFormat as keyof typeof testimonial.formats];
  });

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'video': return <Video size={16} />;
      case 'audio': return <Headphones size={16} />;
      case 'text': return <FileText size={16} />;
      default: return null;
    }
  };

  return (
    <div className="vintage-section bg-vintage-teal text-vintage-cream px-4">
      <div className="texture-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TÉMOIGNAGE BOOST
          </h1>
          <p className="text-xl md:text-2xl text-vintage-cream/80 max-w-4xl mx-auto mb-8">
            Des vitamines spirituelles pour nourrir votre âme et renforcer votre foi. 
            Témoignages authentiques pour vous encourager dans votre marche avec Dieu.
          </p>
          
          {/* Mission statement */}
          <div className="vintage-card bg-vintage-cream/10 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-vintage-terracotta mr-2" size={24} />
              <h2 className="text-2xl font-bold">Notre Mission</h2>
            </div>
            <p className="text-vintage-cream/90 leading-relaxed">
              Édifier la communauté des croyants, vous aider dans votre quotidien spirituel, 
              et vous permettre de partager ces bénédictions avec votre entourage. 
              Que ces témoignages soient des vitamines spirituelles pour rester constamment 
              dans la présence de Dieu le Père et du Saint-Esprit, et expérimenter avec foi 
              et conviction cette vie de l'Esprit.
            </p>
          </div>
        </div>

        {/* Filtres par format */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant={selectedFormat === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedFormat('all')}
            className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
          >
            Tous les formats
          </Button>
          <Button
            variant={selectedFormat === 'video' ? 'default' : 'outline'}
            onClick={() => setSelectedFormat('video')}
            className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
          >
            <Video size={16} className="mr-2" />
            Vidéos
          </Button>
          <Button
            variant={selectedFormat === 'audio' ? 'default' : 'outline'}
            onClick={() => setSelectedFormat('audio')}
            className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
          >
            <Headphones size={16} className="mr-2" />
            Audio
          </Button>
          <Button
            variant={selectedFormat === 'text' ? 'default' : 'outline'}
            onClick={() => setSelectedFormat('text')}
            className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
          >
            <FileText size={16} className="mr-2" />
            Texte
          </Button>
        </div>

        {/* Liste des témoignages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="vintage-card bg-vintage-cream/5 hover:bg-vintage-cream/10 transition-all duration-300">
              
              {/* En-tête du témoignage */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-vintage-cream mb-2">
                  {testimonial.title}
                </h3>
                <p className="text-vintage-cream/80 mb-3">
                  {testimonial.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-vintage-terracotta/20 text-vintage-cream">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Métadonnées */}
                <div className="flex items-center text-sm text-vintage-cream/60 space-x-4 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(testimonial.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div>
                    Durée: {testimonial.duration}
                  </div>
                </div>
              </div>

              {/* Formats disponibles */}
              <div className="space-y-3">
                {testimonial.formats.video && (
                  <Button 
                    onClick={() => window.open(testimonial.formats.video, '_blank')}
                    className="w-full bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
                  >
                    <Video size={16} className="mr-2" />
                    Regarder en vidéo
                  </Button>
                )}
                
                {testimonial.formats.audio && (
                  <Button 
                    variant="outline"
                    onClick={() => {
                      // Logique pour lire l'audio
                      console.log('Lecture audio:', testimonial.formats.audio);
                    }}
                    className="w-full text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
                  >
                    <Headphones size={16} className="mr-2" />
                    Écouter en audio
                  </Button>
                )}
                
                {testimonial.formats.text && (
                  <details className="w-full">
                    <summary className="cursor-pointer p-3 bg-vintage-cream/10 rounded border border-vintage-cream/20 hover:bg-vintage-cream/20 transition-colors">
                      <span className="flex items-center">
                        <FileText size={16} className="mr-2" />
                        Lire la version texte
                      </span>
                    </summary>
                    <div className="mt-3 p-4 bg-vintage-cream/5 rounded border border-vintage-cream/10">
                      <p className="text-vintage-cream/90 leading-relaxed">
                        {testimonial.formats.text}
                      </p>
                    </div>
                  </details>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Message d'encouragement */}
        <div className="text-center mt-12 vintage-card bg-vintage-cream/5">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-vintage-terracotta mr-2" size={24} />
            <h2 className="text-2xl font-bold">Partagez ces bénédictions</h2>
          </div>
          <p className="text-vintage-cream/90 mb-4">
            Ces témoignages sont offerts gratuitement pour édifier le corps du Christ. 
            N'hésitez pas à les partager avec votre entourage pour répandre l'amour de Dieu.
          </p>
          <p className="text-vintage-cream/80 text-sm">
            "Que la parole du Christ habite parmi vous abondamment ; instruisez-vous et 
            exhortez-vous les uns les autres en toute sagesse" - Colossiens 3:16
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBoost;