import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import ConnectionForm from './ConnectionForm';
import ConnectionMenu from './ConnectionMenu';
import { Connection } from './Connection';

interface SidebarProps {
  // Defina as props da Sidebar, se necessário
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [editingConnection, setEditingConnection] = useState<Connection | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNewConnection = (newConnection: Connection) => {
    setConnections(oldConnections => [...oldConnections, newConnection]);
    setIsFormOpen(false);
  };

  const handleRemoveConnection = (id: string) => {
    setConnections(oldConnections => oldConnections.filter(connection => connection.id !== id));
  };

  const handleEditConnection = (id: string) => {
    const connection = connections.find(connection => connection.id === id);
    if (connection) {
      setEditingConnection(connection);
      setIsFormOpen(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex h-screen">
      {isSidebarOpen && (
        <div className="bg-blue-500 text-white w-64 space-y-6 py-7 px-2 fixed left-0 top-0 bottom-0">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">DW TOOL</span>
            <button className="text-white" onClick={toggleSidebar}>
              <MdClose size={24} />
            </button>
          </div>
          <nav>
            <ul>
              <li onClick={toggleForm}>Nova Conexão</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </nav>
          {connections.map(connection => (
            <ConnectionMenu
              key={connection.id}
              connection={connection}
              onEdit={handleEditConnection}
              onRemove={handleRemoveConnection}
            />
          ))}
        </div>
      )}
      <div className="w-full bg-gray-100">
        <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
          <button onClick={toggleSidebar}>
            <AiOutlineMenu size={24} />
          </button>
          <span className="text-2xl font-semibold">DW TOOL</span>
        </header>
        <main className="p-4">
          {isFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow">
                <ConnectionForm
                  onClose={toggleForm}
                  onSubmit={handleNewConnection}
                  editingConnection={editingConnection}
                />
              </div>
            </div>
          )}
          {/* Resto do conteúdo principal aqui */}
        </main>
      </div>
    </div>
  );
};

export default Sidebar