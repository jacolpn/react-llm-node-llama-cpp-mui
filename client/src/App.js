import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const SyntaxHighlightedJSON = ({ data }) => {
  if (!data) return null;
  
  const jsonString = JSON.stringify(data, null, 2);
  
  const highlighted = jsonString
    .replace(/"([^"]+)":/g, '"<span class="key">$1</span>":')
    .replace(/"([^"]+)"/g, '"<span class="string">$1</span>"')
    .replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>')
    .replace(/\b(null)\b/g, '<span class="null">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

  return <div dangerouslySetInnerHTML={{ __html: highlighted }} />;
};

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:3001/api/chat', { message });
      setResponse(res?.data);
    } catch (error) {
      console.error(error);
      setResponse({ error: 'Erro ao conectar com o servidor' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Chat com Llama</h1>
      
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Processando...
            </>
          ) : 'Enviar Consulta'}
        </button>
      </form>
      
      {response && (
        <div className="response-container">
          <div className="response-header">Resposta da API</div>
          <pre className="response-content">
            <SyntaxHighlightedJSON data={response} />
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;