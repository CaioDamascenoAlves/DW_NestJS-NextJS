import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-400 text-white">
      <button onClick={toggleSidebar}>
        <AiOutlineMenu size={24} />
      </button>
      <span className="text-2xl font-semibold">DW TOOL</span>
    </header>
  );
};

export default Navbar;
