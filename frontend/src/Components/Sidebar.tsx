import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Resizable } from 'react-resizable';
import ConnectionMenu from './ConnectionMenu';
import { Connection } from './Connection';
import ResizableDiv from './Resizable';
import TableList from './TableList';

interface SidebarProps {
  connections: Connection[];
  handleNewConnection: (newConnection: Connection) => void;
  handleRemoveConnection: (id: string) => void;
  handleEditConnection: (id: string) => void;
  toggleSidebar: () => void;
  toggleForm: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  connections,
  handleNewConnection,
  handleRemoveConnection,
  handleEditConnection,
  toggleSidebar,
  toggleForm,
}) => {
  const [height, setHeight] = useState(60);

  return (
    <div className="bg-gray-500 text-white w-64 space-y-6 py-7 px-2 fixed left-0 top-0 bottom-0 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">DW TOOL</span>
          <button className="text-white" onClick={toggleSidebar}>
            <MdClose size={24} />
          </button>
        </div>
        <nav>
          <ul>
          <button className="text-white border-2 border-green-400 rounded py-2 px-4" onClick={toggleForm}>
                + Nova Conexão
              </button>
          </ul>
        </nav>
        <Resizable
          width={200}
          height={height}
          onResizeStop={(_e, { size }) => {
            setHeight(size.height);
          }}
          resizeHandles={['s']}
        >
          <ResizableDiv>
            <h2 className="text-lg font-semibold mb-2">Conexões</h2>
            {connections.map((connection) => (
              <div key={connection.id} className="mb-4">
                <ConnectionMenu
                  connection={connection}
                  onEdit={handleEditConnection}
                  onRemove={handleRemoveConnection}
                />
              </div>
            ))}
          </ResizableDiv>
        </Resizable>
        {connections.map((connection) => (
          <TableList key={connection.id} connection={connection} />
        ))}
      </div>
      <button className="text-white border-2 border-red-400 rounded mt-4 py-2 px-4" >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
