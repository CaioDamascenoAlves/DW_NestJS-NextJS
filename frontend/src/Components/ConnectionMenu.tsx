import { Fragment, FC, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Connection } from "./Connection";
import { useSmallViewport } from './useSmallViewport'
import { MenuButton } from './MenuButton';
import { MenuItem } from './MenuItem';

interface ConnectionMenuProps {
  connection: Connection;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
}

const ConnectionMenu: FC<ConnectionMenuProps> = ({
  connection,
  onRemove,
  onEdit,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isSmallViewport = useSmallViewport();

  const handleButtonClick = () => {
    if (menuRef.current) {
      menuRef.current.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="connection-menu">
        <MenuButton connection={connection} isSmallViewport={isSmallViewport} onButtonClick={handleButtonClick} />
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          ref={menuRef}
        >
          <div className="py-1">
            <MenuItem onClick={() => onEdit(connection.id)} activeColor="bg-gray-100 text-gray-900">
              Editar Conexão
            </MenuItem>
            <MenuItem onClick={() => onRemove(connection.id)} activeColor="bg-gray-100 text-gray-900">
              Remover Conexão
            </MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ConnectionMenu;

