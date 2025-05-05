import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Parcours', path: '/journey' },
    { name: 'Boutique', path: '/shop' },
    { name: 'Inspirations', path: '/inspirations' },
    { name: 'Message', path: '/message' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Soutien', path: '/support' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-vintage-teal/80 backdrop-blur-sm border-b border-vintage-cream/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-vintage-cream text-2xl font-bold">
          ÉDOUARD'S
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-vintage-cream"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-vintage-teal border-b border-vintage-cream/20 py-4 animate-fade-in">
                <ul className="flex flex-col space-y-4 px-4">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className="text-vintage-cream hover:text-vintage-terracotta transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-vintage-cream hover:text-vintage-terracotta transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
