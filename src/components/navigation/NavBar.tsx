import React from 'react';
import { Button } from '@nextui-org/react';
import { Menu } from 'lucide-react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import useNavigation from '../../hooks/useNavigation';
import Container from '../layout/Container';

export default function NavBar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Blur Background */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10" />
      
      {/* Content */}
      <Container className="relative">
        <div className="flex items-center justify-between h-16">
          <NavLogo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              isIconOnly
              variant="light"
              aria-label="Open menu"
              onClick={toggleMenu}
              className="relative"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  );
}