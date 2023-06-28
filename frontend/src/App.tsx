import React, { useState } from 'react';
import { Connection } from './Components/Connection';
import ConnectionForm from './Components/ConnectionForm';
import Navbar from './Components/NavBar';
import Sidebar from './Components/Sidebar';

const App: React.FC = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [editingConnection, setEditingConnection] = useState<Connection | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNewConnection = (newConnection: Connection) => {
    if (editingConnection) {
      setConnections((oldConnections) =>
        oldConnections.map((connection) =>
          connection.id === newConnection.id ? newConnection : connection
        )
      );
    } else {
      setConnections((oldConnections) => [...oldConnections, newConnection]);
    }
    setEditingConnection(null);
    setIsFormOpen(false);
  };

  const handleRemoveConnection = (id: string) => {
    setConnections((oldConnections) => oldConnections.filter((connection) => connection.id !== id));
  };

  const handleEditConnection = (id: string) => {
    const connection = connections.find((connection) => connection.id === id);
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
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        {isSidebarOpen && (
          <Sidebar
            connections={connections}
            handleNewConnection={handleNewConnection}
            handleRemoveConnection={handleRemoveConnection}
            handleEditConnection={handleEditConnection}
            toggleSidebar={toggleSidebar}
            toggleForm={toggleForm}
          />
        )}
        <div className="w-full bg-gray-100">
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
        </div>
      </div>
    </div>
  );
};

export default App;
