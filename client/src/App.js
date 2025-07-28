import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/api/chat', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      setResponse('Erro ao conectar com o servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chat com Llama</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processando...' : 'Enviar'}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <strong>Resposta:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
