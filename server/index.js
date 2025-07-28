import express from 'express';
import cors from 'cors';
import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

const app = express();
app.use(cors());
app.use(express.json());

const model = new LlamaModel({
    modelPath: '../models/tinyllama-1.1b-chat-v1.0.Q4_K_S.gguf'
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({ context });

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await session.prompt(message);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao processar a mensagem' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
