import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import Footer from './layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-foreground flex flex-col">
      <NavBar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}