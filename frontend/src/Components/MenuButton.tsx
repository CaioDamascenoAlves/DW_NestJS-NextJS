import { FC } from 'react';
import { Connection } from './Connection';

interface MenuButtonProps {
  connection: Connection;
  isSmallViewport: boolean;
}

export const MenuButton: FC<MenuButtonProps> = ({ connection, isSmallViewport }) => (
  <button
    className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${isSmallViewport ? 'block mt-2' : ''}`}
  >
    {connection.host}:{connection.port}
  </button>
);
