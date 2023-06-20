import axios from 'axios';
import { Connection } from '../Components/Connection'; // Importe a interface Connection

const API_BASE_URL = 'http://localhost:3001'; // Ajuste o URL base da sua API

export async function createConnection(connectionData: Connection): Promise<Connection> {
  try {
    const response = await axios.post(`${API_BASE_URL}/connections`, connectionData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create connection'); // Lide com o erro de acordo com a sua necessidade
  }
}
