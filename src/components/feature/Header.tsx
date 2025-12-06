import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية - قصتنا', path: '/our-story' },
    { name: 'المبادرات المجتمعية', path: '/initiatives' },
    { name: 'المدونة', path: '/blog' },
    { name: 'منتجاتنا', path: '/products' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src="https://static.readdy.ai/image/8d67d4b5b60a62e7b1df4167f7b5245a/4a0d699146d1de2b6d141b7e4aa96d0a.png" 
              alt="حضرمي - HADRAMEE" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#16372e] hover:text-[#935624] transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="primary" size="sm">
                  تواصل معنا
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#16372e]`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-[#16372e] hover:text-[#935624] transition-colors duration-200 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="primary" size="sm" className="mt-4 w-fit">
                  تواصل معنا
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
