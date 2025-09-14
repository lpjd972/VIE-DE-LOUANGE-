import React from 'react';
import { Calendar, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const TextTestimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 3,
      title: "L'importance de la prière quotidienne",
      description: "Comment établir une relation intime avec Dieu à travers la prière constante et l'écoute de Sa voix.",
      formats: {
        text: "La prière n'est pas seulement un acte religieux, c'est une conversation avec notre Père céleste..."
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
        text: "Marcher par l'Esprit, c'est apprendre à écouter cette voix douce qui nous guide..."
      },
      date: "2024-12-05",
      duration: "15 min",
      tags: ["Saint-Esprit", "Guidance", "Vie spirituelle"]
    }
  ];

  // Filtrer seulement les témoignages avec texte
  const textTestimonials = testimonials.filter(testimonial => testimonial.formats.text);

  return (
    <div className="vintage-section bg-vintage-teal text-vintage-cream px-4">
      <div className="texture-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header avec bouton retour */}
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/testimonial-boost')}
            className="mr-4 text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold">
            Témoignages Texte
          </h1>
        </div>

        {textTestimonials.length === 0 ? (
          <div className="text-center py-12">
            <FileText size={64} className="mx-auto text-vintage-cream/50 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Aucun témoignage texte disponible</h2>
            <p className="text-vintage-cream/80">
              Les témoignages en format texte seront bientôt disponibles.
            </p>
          </div>
        ) : (
          /* Liste des témoignages texte */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {textTestimonials.map((testimonial) => (
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

                {/* Contenu texte */}
                <details className="w-full">
                  <summary className="cursor-pointer p-3 bg-vintage-cream/10 rounded border border-vintage-cream/20 hover:bg-vintage-cream/20 transition-colors">
                    <span className="flex items-center">
                      <FileText size={16} className="mr-2" />
                      Lire le témoignage
                    </span>
                  </summary>
                  <div className="mt-3 p-4 bg-vintage-cream/5 rounded border border-vintage-cream/10">
                    <p className="text-vintage-cream/90 leading-relaxed">
                      {testimonial.formats.text}
                    </p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextTestimonials;