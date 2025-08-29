import React, { useState, useEffect } from 'react';
import { Play, Heart, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Bonus = () => {
  const [showDonationReminder, setShowDonationReminder] = useState(false);

  // Système de rappel 1-2 fois par semaine
  useEffect(() => {
    const checkDonationReminder = () => {
      const lastShown = localStorage.getItem('lastDonationReminder');
      const now = new Date().getTime();
      const threeDays = 3 * 24 * 60 * 60 * 1000; // 3 jours en millisecondes

      if (!lastShown || (now - parseInt(lastShown)) > threeDays) {
        setShowDonationReminder(true);
        localStorage.setItem('lastDonationReminder', now.toString());
      }
    };

    checkDonationReminder();
  }, []);

  const closeDonationReminder = () => {
    setShowDonationReminder(false);
  };

  // Mes réalisations musicales inspirées par la Parole de Dieu
  const predications = [
    {
      title: "Réalisation musicale inspirée",
      description: "Une création basée sur la Parole de Dieu et la vie de Christ en moi",
      youtubeId: "EPNupdyoZSg",
      date: "2024-08-29",
      duration: "Short"
    },
    {
      title: "La foi qui transforme",
      description: "Une méditation sur la puissance de la foi selon Hébreux 11",
      youtubeId: "dQw4w9WgXcQ", // À remplacer par le vrai ID YouTube
      date: "2024-01-15",
      duration: "25 min"
    },
    {
      title: "L'amour de Dieu manifesté",
      description: "Découvrir l'amour inconditionnel de Dieu selon 1 Jean 4",
      youtubeId: "dQw4w9WgXcQ", // À remplacer par le vrai ID YouTube
      date: "2024-01-08",
      duration: "32 min"
    },
    {
      title: "Marcher dans la lumière",
      description: "Comment vivre selon la volonté de Dieu selon Éphésiens 5",
      youtubeId: "dQw4w9WgXcQ", // À remplacer par le vrai ID YouTube
      date: "2024-01-01",
      duration: "28 min"
    },
    {
      title: "La paix qui surpasse toute intelligence",
      description: "Trouver la paix de Dieu selon Philippiens 4:7",
      youtubeId: "dQw4w9WgXcQ", // À remplacer par le vrai ID YouTube
      date: "2023-12-25",
      duration: "22 min"
    }
  ];

  return (
    <div className="vintage-section bg-vintage-teal text-vintage-cream px-4">
      <div className="texture-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Rappel de donation */}
        {showDonationReminder && (
          <div className="fixed top-20 right-4 z-50 animate-slide-in">
            <Card className="vintage-card border-vintage-terracotta bg-vintage-cream/95 text-vintage-teal p-4 max-w-sm">
              <div className="flex justify-between items-start mb-3">
                <Heart className="text-vintage-terracotta mt-1" size={20} />
                <button 
                  onClick={closeDonationReminder}
                  className="text-vintage-teal/60 hover:text-vintage-teal"
                >
                  ×
                </button>
              </div>
              <h3 className="font-bold mb-2">Soutenez notre mission</h3>
              <p className="text-sm mb-3">
                Ces prédications sont gratuites pour tous. Si elles vous bénissent, 
                vous pouvez nous soutenir avec un petit don de 2€/mois.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://buy.stripe.com/28o4j99xG4UU5mE4gh', '_blank')}
                className="w-full text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
              >
                Soutenir 2€/mois
              </Button>
            </Card>
          </div>
        )}

        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BONUS MUSIQUE
          </h1>
          <p className="text-xl md:text-2xl text-vintage-cream/80 max-w-3xl mx-auto">
            Découvrez des vidéos de mes réalisation inspirants basés sur la parole de DIEU, 
            la vie de CHRIST en moi, Accessible gratuitement à tous pour nourrir votre FOI
          </p>
        </div>

        {/* Note d'accessibilité */}
        <div className="vintage-card mb-12 text-center bg-vintage-cream/10">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-vintage-terracotta mr-2" size={24} />
            <h2 className="text-2xl font-bold">Accès libre et gratuit</h2>
          </div>
          <p className="text-vintage-cream/90 mb-4">
            Ces prédications sont offertes gratuitement à tous. Si elles vous bénissent 
            et que vous souhaitez soutenir ce ministère, vous pouvez le faire avec un don 
            de 2€ par mois, mais ce n'est jamais obligatoire.
          </p>
          <Button 
            variant="outline"
            onClick={() => window.open('https://buy.stripe.com/28o4j99xG4UU5mE4gh', '_blank')}
            className="text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
          >
            <Heart size={16} className="mr-2" />
            Soutenir par amour (2€/mois)
          </Button>
        </div>

        {/* Liste des prédications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {predications.map((predication, index) => (
            <Card key={index} className="vintage-card bg-vintage-cream/5 hover:bg-vintage-cream/10 transition-all duration-300">
              {/* Miniature YouTube */}
              <div className="relative mb-4 rounded-md overflow-hidden bg-vintage-cream/20 aspect-video">
                <img 
                  src={`https://img.youtube.com/vi/${predication.youtubeId}/maxresdefault.jpg`}
                  alt={predication.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si l'image YouTube n'est pas disponible
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="text-white" size={48} />
                </div>
              </div>

              {/* Informations */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-vintage-cream">
                  {predication.title}
                </h3>
                
                <p className="text-vintage-cream/80">
                  {predication.description}
                </p>

                <div className="flex items-center text-sm text-vintage-cream/60 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(predication.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div>
                    {predication.duration}
                  </div>
                </div>

                <Button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${predication.youtubeId}`, '_blank')}
                  className="w-full bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream"
                >
                  <Play size={16} className="mr-2" />
                  Regarder sur YouTube
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Message final */}
        <div className="text-center mt-12 vintage-card bg-vintage-cream/5">
          <h2 className="text-2xl font-bold mb-4">Que Dieu vous bénisse</h2>
          <p className="text-vintage-cream/90">
            Ces messages sont partagés avec amour pour édifier le corps du Christ. 
            Puissent-ils vous encourager dans votre marche avec Dieu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bonus;