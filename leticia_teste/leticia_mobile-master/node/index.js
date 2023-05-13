const express = require("express")
const rotas = express()
const cors = require("cors")

// Import BD
const bancodedados = require("./bancodedados")
const Mensagem = require("./mensagem")

//utilizando o EXPRESS

rotas.use(cors())
rotas.use(express.json())

//Conexao c banco de dados





rotas.get("/", (req, res) => {
    res.send("Let")
})



//C
rotas.post("/create", async (req, res) => {
    const { nome, email, mensagem } = req.body;
    console.log(nome, email, mensagem);

    try {
        const cadastro = await Mensagem.create({
            nome: nome,
            email: email,
            mensagem: mensagem,
        });
        console.log('Deu certo!');
        console.log(cadastro.toJSON());
        res.send(cadastro);
    } catch (erro) {
        console.log(`Ops, houve um erro: ${erro}`);
        res.status(500).send('Erro ao cadastrar mensagem');
    }
});

//R
rotas.get("/read", (req, res) => {
    Mensagem.findAll({
    }).then((msgGET) => {
        console.log(msgGET) // Linha para limpeza de Dados
        res.send(msgGET)
    }).catch((error) => {
        console.log(error)
    })
})

//U
rotas.put('/updatemsg/:id', async (req, res) => {
    const id = req.params.id;
    const { nome, email, mensagem } = req.body;
    console.log(nome, email, mensagem);

    try {
        const msgUpdate = await Mensagem.update(
            { nome, email, mensagem },
            { where: { id } }
        );
        console.log(`Mensagem com ID ${id} atualizada com sucesso`);
        res.send(`Mensagem com ID ${id} atualizada com sucesso`);
    } catch (error) {
        console.log(`Ops, houve um erro: ${error}`);
        res.status(500).send('Erro ao atualizar mensagem');
    }
});








//D
rotas.delete('/deletarmsg/:id', (req, res) => {
    const id = req.params.id;
    Mensagem.destroy({ where: { id } })
        .then(msgDelete => {
            if (msgDelete) {
                console.log(`Mensagem com ID ${id} deletada com sucesso`);
                res.send(`Mensagem com ID ${id} deletada com sucesso`);

            } else {
                console.log(`Não foi encontrada mensagem com ID ${id}`);
                res.status(404).send("Não foi encontrada mensagem com ID informado");
            }
        })
        .catch(error => {
            console.log(error);
            console.log('Erro ao deletar mensagem');
        });
});


/*rotas.delete('/deletarmsg/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const msgDelete = await Mensagem.destroy({ where: { id } });
        if (msgDelete) {
            console.log(`Mensagem com ID ${id} deletada com sucesso`);
        } else {
            console.log(`Não foi encontrada mensagem com ID ${id}`);
            res.send("Não foi encontrada mensagem com ID informado");
        }
    } catch (error) {
        console.log(error);
        res.send('Erro ao deletar mensagem');
    }
});

*/










//Conexao localhost
const PORT = 2023;

rotas.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
