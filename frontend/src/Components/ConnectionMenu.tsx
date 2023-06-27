import { Fragment, FC, useRef, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Connection } from "./Connection";

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
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth < 640); // Define o valor adequado para a largura mínima do viewport em que os botões devem ser empilhados
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

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
        <Menu.Button
          className={classNames(
            "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
            isSmallViewport ? "block mt-2" : ""
          )}
          onClick={handleButtonClick}
        >
          {connection.host}:{connection.port}
        </Menu.Button>
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
          className="absolute z-50 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          ref={menuRef}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onEdit(connection.id)}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Editar Conexão
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRemove(connection.id)}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Remover Conexão
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ConnectionMenu;
