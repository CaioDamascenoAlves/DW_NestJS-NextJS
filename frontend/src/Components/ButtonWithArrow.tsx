import { FC } from 'react';
import { Connection } from './Connection';

interface ButtonWithArrowProps {
  connection: Connection;
  isSmallViewport: boolean;
  onClick: () => void;
}

export const ButtonWithArrow: FC<ButtonWithArrowProps> = ({ connection, isSmallViewport, onClick }) => (
  <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
    <button
      className={`flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${isSmallViewport ? 'block mt-2' : ''}`}
    >
      {connection.host}:{connection.port}
    </button>
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-l border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    >
      &#x25BC; {/* seta para baixo */}
    </button>
  </div>
);
