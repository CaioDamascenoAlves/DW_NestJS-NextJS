import React, { useEffect, useState } from 'react';
import { Connection } from './Connection';

interface TableListProps {
  connection: Connection;
}

const TableList: React.FC<TableListProps> = ({ connection }) => {
  const [tables, setTables] = useState<string[]>([]);

//   useEffect(() => {
//     // Aqui você pode fazer a lógica para buscar as tabelas do banco de dados
//     // Por exemplo, utilizando uma API ou biblioteca de conexão com o banco de dados

//     // Exemplo fictício de busca de tabelas:
// //     const fetchTables = async () => {
// //       try {
// //         // Realizar a lógica de busca das tabelas
// //         const tables = await databaseService.getTables(connection);

// //         // Atualizar o estado com as tabelas encontradas
// //         setTables(tables);
// //       } catch (error) {
// //         console.error('Erro ao buscar tabelas:', error);
// //       }
// //     };

// //     // Chamar a função para buscar as tabelas quando a conexão mudar
// //     fetchTables();
// //   }, [connection]);

  return (
    <div>
      <h2>Tabelas do Banco de Dados</h2>
      <ul>
        {tables.map((tableName) => (
          <li key={tableName}>{tableName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
