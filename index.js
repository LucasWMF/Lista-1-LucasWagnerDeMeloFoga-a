// Importa o framework Express
const express = require("express");
const app = express(); // Inicializa a aplicação Express
const port = 3000; // Define a porta do servidor

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// "Listar": "GET"
// "Adicionar": "POST"
// "Editar": "PUT"
// "Deletar": "DELETE"

app.get("/contatos", (req, res) => {
    res.json(contatos);
});

// ========================== CONTATOS ==========================

let contatos = [
    {
        "nome": "Lucas",
        "telefone": "15 19946-5456"
    },
    {
        "nome": "Maria",
        "telefone": "15 99887-1122"
    },
    {
        "nome": "João",
        "telefone": "15 3344-5566"
    },
    {
        "nome": "Ana",
        "telefone": "15 98765-4321"
    },
    {
        "nome": "Carlos",
        "telefone": "15 77654-3210"
    },
    {
        "nome": "Fernanda",
        "telefone": "15 87654-4321"
    },
    {
        "nome": "Rafael",
        "telefone": "15 23344-1234"
    },
    {
        "nome": "Bruna",
        "telefone": "15 98765-4321"
    },
    {
        "nome": "Pedro",
        "telefone": "15 12345-6789"
    },
    {
        "nome": "Juliana",
        "telefone": "15 99876-5432"
    }
];

app.post("/contatos", (req, res) => {
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({ error: "Nome e telefone são obrigatórios." });
    }

    const novoContato = { nome, telefone };
    contatos.push(novoContato);

    res.status(201).json({
        message: "Contato adicionado com sucesso!",
        contatos: contatos[index]
    });
});

app.put("/contatos/:index", (req, res) => {
    const { nome, telefone } = req.body;
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= contatos.length) {
        return res.status(404).json({ error: "Contato não encontrado." });
    }

    if (!nome || !telefone) {
        return res.status(400).json({ error: "Nome e telefone são obrigatórios." });
    }

    contatos[index] = { nome, telefone };

    res.status(200).json({
        message: "Contato atualizado com sucesso!",
        contato: contatos[index]
    });
});

app.delete("/contatos/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= contatos.length) {
        return res.status(404).json({ error: "Contato não encontrado." });
    }

    contatos.splice(index, 1);

    res.status(200).json({
        message: "Contato removido com sucesso!",
        contatos
    });
});

// ========================== CATALOGO ==========================

let catalogo = [
    {
        "nome": "Camiseta",
        "preco": "R$ 39,90"
    },
    {
        "nome": "Livro A",
        "preco": "R$ 29,90"
    },
    {
        "nome": "Celular",
        "preco": "R$ 999,00"
    },
    {
        "nome": "Mochila",
        "preco": "R$ 89,90"
    },
    {
        "nome": "Fone de ouvido",
        "preco": "R$ 150,00"
    },
    {
        "nome": "Tênis esportivo",
        "preco": "R$ 199,90"
    },
    {
        "nome": "Caderno universitário",
        "preco": "R$ 12,90"
    },
    {
        "nome": "Caneta esferográfica",
        "preco": "R$ 2,50"
    },
    {
        "nome": "Smartwatch",
        "preco": "R$ 299,00"
    },
    {
        "nome": "Relógio de pulso",
        "preco": "R$ 159,90"
    }
];

app.get("/catalogo", (req, res) => {
    res.json(catalogo);
});

app.post("/catalogo", (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ error: "Nome e Preço são obrigatórios." });
    }

    const novoCatalogo = { nome, preco };
    catalogo.push(novoCatalogo);

    res.status(201).json({
        message: "Produto adicionado com sucesso!",
        produto: catalogo[index]
    });
});

app.put("/catalogo/:index", (req, res) => {
    const { nome, preco } = req.body;
    const index = parseInt(req.params.index);

    // Verifica se o índice é válido
    if (isNaN(index) || index < 0 || index >= catalogo.length) {
        return res.status(404).json({ error: "Produto não encontrado." });
    }

    // Valida o nome
    if (!nome || !preco) {
        return res.status(400).json({ error: "Nome e Preço é obrigatório." });
    }

    catalogo[index].preco = preco; // Atualiza o preço somente se ele foi fornecido
    catalogo[index].nome = nome;

    res.status(200).json({
        message: "Produto atualizado com sucesso!",
        produto: catalogo[index]
    });
});

app.delete("/catalogo/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= catalogo.length) {
        return res.status(404).json({ error: "Produto não encontrado." });
    }

    catalogo.splice(index, 1);

    res.status(200).json({
        message: "Produto removido com sucesso!",
        catalogo
    });
});

// ========================== TAREFAS ==========================

let tarefas = [
    {
        "tarefa": "Comprar materiais de escritório",
        "status": "Pendente"
    },
    {
        "tarefa": "Estudar para prova de matemática",
        "status": "Em andamento"
    },
    {
        "tarefa": "Ler o capítulo 5 de '1984'",
        "status": "Pendente"
    },
    {
        "tarefa": "Limpar a casa",
        "status": "Concluído"
    },
    {
        "tarefa": "Entregar relatório de trabalho",
        "status": "Pendente"
    },
    {
        "tarefa": "Fazer compras no supermercado",
        "status": "Em andamento"
    },
    {
        "tarefa": "Ajustar configurações do computador",
        "status": "Concluído"
    },
    {
        "tarefa": "Verificar e-mails",
        "status": "Pendente"
    },
    {
        "tarefa": "Organizar a agenda da semana",
        "status": "Em andamento"
    },
    {
        "tarefa": "Atualizar a página do projeto",
        "status": "Concluído"
    }
];

app.get("/tarefas", (req, res) => {
    res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
    const { tarefa, status } = req.body;

    if (!tarefa || !status) {
        return res.status(400).json({ error: "Tarefa e Status são obrigatórios." });
    }

    const novoTarefa = { tarefa, status };
    tarefas.push(novoTarefa);

    res.status(201).json({
        message: "Tarefa adicionado com sucesso!",
        tarefas: tarefas[index]
    });
});

app.put("/tarefas/:index", (req, res) => {
    const { tarefa, status } = req.body;
    const index = parseInt(req.params.index);

    // Verifica se o índice é válido
    if (isNaN(index) || index < 0 || index >= tarefas.length) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    if (!tarefa || !status) {
        return res.status(400).json({ error: "Tarefa e Status são obrigatório." });
    }

    // Atualiza o tarefa
    tarefas[index].status = status;
    tarefas[index].tarefa = tarefa;

    res.status(200).json({
        message: "Tarefa atualizada com sucesso!",
        produto: tarefas[index]
    });
});

app.delete("/tarefas/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= tarefas.length) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    tarefas.splice(index, 1);

    res.status(200).json({
        message: "Tarefa removido com sucesso!",
        tarefas
    });
});

// ========================== BIBLIOTECA ==========================

let livros = [
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "disponibilidade": true
    },
    {
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "disponibilidade": false
    },
    {
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "disponibilidade": true
    },
    {
        "titulo": "A Culpa é das Estrelas",
        "autor": "John Green",
        "disponibilidade": true
    },
    {
        "titulo": "O Alquimista",
        "autor": "Paulo Coelho",
        "disponibilidade": false
    },
    {
        "titulo": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K. Rowling",
        "disponibilidade": true
    },
    {
        "titulo": "O Pequeno Príncipe",
        "autor": "Antoine de Saint-Exupéry",
        "disponibilidade": false
    },
    {
        "titulo": "Fahrenheit 451",
        "autor": "Ray Bradbury",
        "disponibilidade": true
    },
    {
        "titulo": "Brida",
        "autor": "Paulo Coelho",
        "disponibilidade": true
    },
    {
        "titulo": "O Lobo da Estepe",
        "autor": "Hermann Hesse",
        "disponibilidade": false
    }
];

app.get("/biblioteca", (req, res) => {
    res.json(livros.filter(livro => livro.disponibilidade));
    // é uma função própria para arrays que irá percorrer todos no array e procurar por livro.disponibilidade que por natureza irá representar se for true ou não já que se tiver valor é true
});

app.post("/biblioteca", (req, res) => {
    const { tarefa, status } = req.body;

    if (!tarefa || !status) {
        return res.status(400).json({ error: "Tarefa e Status são obrigatórios." });
    }

    const novoTarefa = { tarefa, status };
    livros.push(novoTarefa);

    res.status(201).json({
        message: "Tarefa adicionado com sucesso!",
        livros: livros[index]
    });
});

app.put("/biblioteca/:index", (req, res) => {
    const { tarefa, status } = req.body;
    const index = parseInt(req.params.index);

    // Verifica se o índice é válido
    if (isNaN(index) || index < 0 || index >= livros.length) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    if (!tarefa || !status) {
        return res.status(400).json({ error: "Tarefa e Status são obrigatório." });
    }

    if (status == false || status == true){
        livros[index].status = status;
    } else {
        return res.status(400).json({ error: "Status tem que ser true ou false." });
    }

    livros[index].tarefa = tarefa;

    res.status(200).json({
        message: "Tarefa atualizada com sucesso!",
        produto: livros.filter(livro => livro.disponibilidade)
    });
});

app.delete("/biblioteca/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= livros.length) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    livros.splice(index, 1);

    res.status(200).json({
        message: "Livro removido com sucesso!",
        livros
    });
});

// ========================== SERVIDOR ==========================

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});