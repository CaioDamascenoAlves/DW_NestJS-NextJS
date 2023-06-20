import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { Connection } from './Connection';

interface FormData {
  sgbds: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
}

interface ConnectionFormProps {
  onClose: () => void;
  onSubmit: (newConnection: Connection) => void;
  editingConnection: Connection | null;
}

const ConnectionForm: React.FC<ConnectionFormProps> = ({ onClose, onSubmit, editingConnection }) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    const newConnection: Connection = {
      id: editingConnection ? editingConnection.id : '',
      ...data,
      port: parseInt(data.port, 10),
    };
    onSubmit(newConnection);
    onClose();
  };

  useEffect(() => {
    if (editingConnection) {
      const { sgbds, host, port, username, password, database } = editingConnection;
      setValue('sgbds', sgbds);
      setValue('host', host);
      setValue('port', String(port));
      setValue('username', username);
      setValue('password', password);
      setValue('database', database);
    }
  }, [editingConnection, setValue]);

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col space-y-4">
      <AiOutlineClose onClick={onClose} className="self-end cursor-pointer" />
      <select {...register('sgbds')} className="border border-gray-300 rounded p-2">
        <option value="mysql">MySQL</option>
        <option value="postgresql">PostgreSQL</option>
        <option value="sqlserver">SQL Server</option>
        <option value="oracle">Oracle</option>
      </select>
      <input {...register('host')} className="border border-gray-300 rounded p-2" placeholder="Host" />
      <input {...register('port')} className="border border-gray-300 rounded p-2" placeholder="Port" />
      <input {...register('username')} className="border border-gray-300 rounded p-2" placeholder="Username" />
      <input {...register('password')} className="border border-gray-300 rounded p-2" type="password" placeholder="Password" />
      <input {...register('database')} className="border border-gray-300 rounded p-2" placeholder="Database" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Conectar
      </button>
    </form>
  );
};

export default ConnectionForm;
