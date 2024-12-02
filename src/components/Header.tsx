import React from "react";

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  // Definimos los enlaces de navegación
  const navLinks: NavLink[] = [
    { name: "Conoce más...", href: "#footer" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-gray-300 to-gray-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - Centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <span className="text-5xl font-bold">🎞️</span>
            <h1 className="text-4xl font-extrabold tracking-widest">
              Movie List
            </h1>
          </div>
        </div>

        {/* Navigation - Derecha */}
        <nav className="ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold  hover: transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
