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
      title: "#1 - surprise fête des mères",
      description: "mes debuts en saxophone",
      youtubeId: "mlQcn3Mo4lE",
      date: "2024-08-29",
      duration: "Short"
    },
    {
      title: "#2 - Nouvelle réalisation spirituelle",
      description: "mes debuts en saxophone",
      youtubeId: "5V3JFAPdvug",
      date: "2024-08-28",
      duration: "Short"
    },
    {
      title: "#3 - Réalisation musicale inspirée",
      description: "mes debuts en saxophone",
      youtubeId: "EPNupdyoZSg",
      date: "2024-08-27",
      duration: "Short"
    },
    {
      title: "#4 - entrainement sur l'arpège de Ré7 / D7",
      description: "mes debuts en saxophone",
      youtubeId: "H9jftPZQ2B8",
      date: "2024-08-26",
      duration: "Short"
    },
    {
      title: "#5 - Nouvelle création musicale",
      description: "mes debuts en saxophone",
      youtubeId: "0kazX14mpCA",
      date: "2024-08-25",
      duration: "Short"
    },
    {
      title: "#6 - Entraînement d'improvisation accord de Cmaj7 en 2-5-1",
      description: "#saxophone #music #trainingmusic #blues #jazz",
      youtubeId: "y5e3HoD3Sas",
      date: "2024-08-24",
      duration: "Short"
    },
    {
      title: "#7 - improvisation JAZZ ( débutant )",
      description: "Depuis peu j'ai commencé l'improvisation JAZZ conseillé par et pour le SEIGNEUR au travers de frères de l'église 🙏🏾🎷\n\nVoici le résultat D'une semaine d'exercice, ce témoignage est aussi un exemple pour vous montrer que sans JESUS tout ce que l'on veut faire comme projet sans lui, il y aura zéro résultats.\n\nMerci SEIGNEUR POUR TOUT, plein d'autre news à venir,\n\n❤️🤗expérimentons cette FOI que nous avons ou que nous souhaitons avoir en CHRIST notre SEIGNEUR tout en ayant une conviction que par sa PAROLE et son regard précieux nous réussirons dans des projets selon sa volonté\n\nSoyez bénis\n\n#saxophone #music #trainingmusic #blues #jazz",
      youtubeId: "6HJ4DvD8ARU",
      date: "2024-08-23",
      duration: "Short"
    },
    {
      title: "#8 - ADD BIARRITZ petit moment de louange réaliser avec le chant \" LE NOM DE JESUS \"",
      description: "ADD BIARRITZ petit moment de louange réaliser avec le chant \" LE NOM DE JESUS \"\n\nchère frère et sœur, je vous invite à lire et à  partager le passage du PSAUMES 150  \nsoyez édifier dans la présence de DIEU le père\n\n#saxophone #music #trainingmusic #blues #jazz",
      youtubeId: "UeHm7EheYRk",
      date: "2024-12-11",
      duration: "Short"
    }
  ];

  return (
    <div className="vintage-section bg-vintage-teal text-vintage-cream px-4">
      <div className="texture-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Rappel de donation */}
        {showDonationReminder && (
          <div className="fixed top-20 right-2 sm:right-4 z-50 animate-slide-in">
            <Card className="vintage-card border-vintage-terracotta bg-vintage-cream/95 text-vintage-teal p-3 sm:p-4 max-w-xs sm:max-w-sm">
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
                onClick={() => window.open('https://buy.stripe.com/eVqdRa8YiceG6qQbEnco009', '_blank')}
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
            onClick={() => window.open('https://buy.stripe.com/eVqdRa8YiceG6qQbEnco009', '_blank')}
            className="text-vintage-terracotta border-vintage-terracotta hover:bg-vintage-terracotta hover:text-vintage-cream"
          >
            <Heart size={16} className="mr-2" />
            Soutenir par amour (2€/mois)
          </Button>
        </div>

        {/* Liste des prédications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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