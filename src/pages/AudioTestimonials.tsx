import React from 'react';
import { Calendar, Headphones, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const AudioTestimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      title: "Marcher et écouter l'Esprit au quotidien",
      description: "Salut à tous voici une petite vidéo, d'une série de vidéo de témoignage. Édifier la communauté des croyants, vous aider dans votre quotidien spirituel, et vous permettre de partager ces bénédictions avec votre entourage. Que ces témoignages soient des vitamines spirituelles pour rester constamment dans la présence de Dieu le Père et du Saint-Esprit, et expérimenter avec foi et conviction cette vie de l'Esprit. #louange #louangechrétienne #musician #temoignagechretien #holyspirit #holyghost #evangile",
      formats: {
        audio: "/audio/marcher-ecouter-esprit.m4a"
      },
      date: "2024-12-15",
      duration: "10 min",
      tags: ["louange", "evangile", "holyghost", "holyspirit", "yahwé", "JESUS", "TEMOIGNAGE", "foi", "parolededieu"]
    },
    {
      id: 3,
      title: "L'importance de la prière quotidienne",
      description: "Comment établir une relation intime avec Dieu à travers la prière constante et l'écoute de Sa voix.",
      formats: {
        audio: "/audio/temoignage2.mp3"
      },
      date: "2024-12-08",
      duration: "12 min",
      tags: ["Prière", "Intimité", "Relation"]
    },
    {
      id: 4,
      title: "Marcher par l'Esprit au quotidien",
      description: "Témoignage pratique sur comment vivre une vie guidée par le Saint-Esprit dans chaque décision et situation.",
      formats: {
        audio: "/audio/temoignage3.mp3"
      },
      date: "2024-12-05",
      duration: "15 min",
      tags: ["Saint-Esprit", "Guidance", "Vie spirituelle"]
    }
  ];

  // Filtrer seulement les témoignages avec audio
  const audioTestimonials = testimonials.filter(testimonial => testimonial.formats.audio);

  return (
    <div className="vintage-section bg-vintage-teal text-vintage-cream px-4">
      <div className="texture-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header avec bouton retour */}
        <div className="flex items-center mb-8 pt-8">
          <Button
            variant="outline"
            onClick={() => navigate('/testimonial-boost')}
            className="mr-4 text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold">
            Témoignages Audio
          </h1>
        </div>

        {/* Liste des témoignages audio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {audioTestimonials.map((testimonial) => (
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

              {/* Bouton audio */}
              <Button 
                variant="outline"
                onClick={() => {
                  console.log('Lecture audio:', testimonial.formats.audio);
                }}
                className="w-full text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
              >
                <Headphones size={16} className="mr-2" />
                Écouter en audio
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioTestimonials;