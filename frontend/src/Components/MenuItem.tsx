import { FC } from 'react';
import { Menu } from '@headlessui/react';

interface MenuItemProps {
  onClick: () => void;
  activeColor: string;
  children: string;
}

export const MenuItem: FC<MenuItemProps> = ({ onClick, activeColor, children }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`block px-4 py-2 text-sm ${active ? activeColor : 'text-gray-700'}`}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);
