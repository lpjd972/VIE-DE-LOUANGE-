
import React from 'react';
import { Mail, Instagram, Youtube, Headphones, QrCode } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { 
      name: 'YouTube', 
      icon: <Youtube size={24} className="text-vintage-terracotta" />,
      url: 'https://www.youtube.com/channel/UCnq2y0lbnKHDJDzGNYh17_g'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={24} className="text-vintage-terracotta" />,
      url: 'https://www.instagram.com/jean_denis_972/'
    },
    { 
      name: 'Spotify', 
      icon: <Headphones size={24} className="text-vintage-terracotta" />,
      url: '#'
    }
  ];

  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Réseaux et Contact</h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="vintage-card">
            <h2 className="text-2xl font-bold mb-6">Retrouvez-moi en ligne</h2>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="text-vintage-cream/90">{link.name}</span>
                  </div>
                  <a 
                    href={link.url} 
                    target={link.url !== '#' ? '_blank' : undefined}
                    rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
                    className="vintage-button text-sm"
                  >
                    {link.url !== '#' ? 'Visiter' : 'Bientôt disponible'}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="vintage-card">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={24} className="text-vintage-terracotta" />
              <h2 className="text-2xl font-bold">Email professionnel</h2>
            </div>
            
            <div className="bg-vintage-cream/10 rounded-md p-4 text-center">
              <p className="text-vintage-cream/90">contact@edouards-music.com</p>
              <p className="text-xs text-vintage-cream/60 mt-1">(Email fictif - à remplacer)</p>
            </div>
          </div>
        </div>
        
        <div className="vintage-card">
          <h2 className="text-2xl font-bold mb-6">QR Codes</h2>
          <p className="text-vintage-cream/80 mb-6">
            Scannez ces codes pour me retrouver facilement sur les réseaux sociaux.
            (Codes à venir)
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="vintage-qr-placeholder mb-2">
                  <QrCode size={40} className="text-vintage-cream/40" />
                </div>
                <p className="text-sm text-vintage-cream/70">{link.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
