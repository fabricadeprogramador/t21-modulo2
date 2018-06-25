class ListaConvidado {

    constructor() {
        this.idEdicao = null;
        this.convidados = [];
    }

    buscarConvidados() {

        this.convidados = JSON.parse(this.fazerRequest("GET", "https://fdp-2018-modulo2.herokuapp.com/convidados", null));
        this.gerarTabela();
    }

    fazerRequest(method, URL, body) {
        var xhttp = new XMLHttpRequest();

        //Faz o request SÍNCRONO
        xhttp.open(method, URL, false);
        if (body == null) {
            xhttp.send();
        } else {
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(body);
        }


        if (xhttp.status == 200) {
            return xhttp.response;
        }

        return null;
    }

    lerConvidado() {

        let convidado = {}

        convidado.nome = document.getElementById('inputNome').value;
        convidado.idade = parseInt(document.getElementById('inputIdade').value);

        let elementoSexoSelecionado = document.querySelector("input[type=radio]:checked");
        let sexoConvidado = "";

        if (elementoSexoSelecionado != null) {
            convidado.sexo = elementoSexoSelecionado.value;
        }

        return convidado;
    }

    validar(convidado) {

        let erros = "";

        if (convidado.nome == "") {
            erros += "Campo nome é obrigatório!\n";
        }

        if (convidado.idade == "") {
            erros += "Campo idade é obrigatório!\n";
        }

        if (convidado.sexo == "") {
            erros += "Campo sexo obrigatório!\n";
        }

        return erros;
    }

    inserirLinha(convidado) {

        let tabela = document.querySelector("#tbody");
        let linha = tabela.insertRow(0);

        let celulaNome = linha.insertCell(0);
        let celulaIdade = linha.insertCell(1);
        let celulaSexo = linha.insertCell(2);
        let celulaEditar = linha.insertCell(3);
        let celulaExcluir = linha.insertCell(4);

        let imagemExcluir = document.createElement("img");
        imagemExcluir.setAttribute("onclick", "listaConvidado.remover(" + convidado._id + ")");
        imagemExcluir.src = "img/delete.svg";

        let imagemEditar = document.createElement("img");
        imagemEditar.setAttribute("onclick", "listaConvidado.editar(" + convidado._id + ")");
        imagemEditar.src = "img/edit.svg";

        celulaNome.innerHTML = convidado.nome;
        celulaIdade.innerHTML = convidado.idade;
        celulaSexo.innerHTML = convidado.sexo;

        celulaEditar.appendChild(imagemEditar);
        celulaExcluir.appendChild(imagemExcluir);

    }

    gerarTabela() {

        let tabela = document.querySelector("#tbody");
        tabela.innerHTML = "";

        for (let i = 0; i < this.convidados.length; i++) {
            const convidado = this.convidados[i];
            this.inserirLinha(convidado);
        }
    }

    salvar() {

        if (this.idEdicao == null) {
            this.adicionar();
        } else {
            this.salvarEdicao(this.idEdicao);
        }

        this.limparFormulario();
        this.idEdicao = null;

    }

    adicionar() {

        let convidado = this.lerConvidado();
        let erros = this.validar(convidado);

        if (erros != "") {
            window.alert(erros);
            return;
        }

        this.fazerRequest("POST", "https://fdp-2018-modulo2.herokuapp.com/convidados", JSON.stringify(convidado));
        this.buscarConvidados();
    }

    salvarEdicao(id){
        
        // Ler dados
        let convidado = this.lerConvidado();
        convidado.id = id;

        // Atualizar vetor
        for (let i = 0; i < this.convidados.length; i++) {
            const conv = this.convidados[i];
            if(conv.id == convidado.id){
                this.convidados[i] = convidado;
                break;
            }
        }

        // Atualizar table
        this.gerarTabela(this.convidados);
    }

    remover(id) {
        if (window.confirm("Tem certeza que deseja remover este convidado?")) {
            for (let i = 0; i < this.convidados.length; i++) {
                const convidado = this.convidados[i];
                if(convidado.id == id){
                    this.convidados.splice(i,1);
                }
            }
            this.gerarTabela(this.convidados)
        }
    }

    editar(id) {

        let convidadoEditar;

        for (let i = 0; i < this.convidados.length; i++) {
            const conv = this.convidados[i];
            if(conv.id == id){
                convidadoEditar = conv;
                break;
            }
        }
        
        document.getElementById("inputNome").value = convidadoEditar.nome;
        document.getElementById("inputIdade").value = convidadoEditar.idade;

        if (convidadoEditar.sexo == "M") {
            document.getElementById("inputMasc").checked = true;
        } else {
            document.getElementById("inputFem").checked = true;
        }

        this.idEdicao = convidadoEditar.id;

    }

    limparFormulario() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputIdade").value = "";
        document.querySelector("input[type=radio]:checked").checked = false;
        this.ehEdicao = false;
        this.idEdicao = null;
    }
}

var listaConvidado = new ListaConvidado();