function mostrarAporte(){

    let tipoJuros =
    document.getElementById("tipoJuros").value;

    let campoAporte =
    document.getElementById("campoAporte");

    if(tipoJuros == "composto"){

        campoAporte.style.display = "block";
    }

    else{

        campoAporte.style.display = "none";
    }
}

function calcular() {

    let capital =
    Number(document.getElementById("capital").value);

    let taxa =
    Number(document.getElementById("taxa").value);

    let tempo =
    Number(document.getElementById("tempo").value);

    let aporte =
    Number(document.getElementById("aporte").value);

    taxa = taxa / 100;

    let tipoJuros =
    document.getElementById("tipoJuros").value;

    let textoResultado =
    document.getElementById("textoResultado");

    let cardResultado =
    document.getElementById("cardResultado");

    /* validação */

    if (capital <= 0 || taxa <= 0 || tempo <= 0) {

        textoResultado.innerHTML =

        "Preencha todos os campos corretamente!";
    }

    /* juros simples */

    else if (tipoJuros == "simples") {

        let juros =
        capital * taxa * tempo;

        let montante =
        capital + juros;

        textoResultado.innerHTML =

        "Juros Simples <br><br>" +

        "Juros: R$ " +
        juros.toFixed(2) +

        "<br><br>" +

        "Montante: R$ " +
        montante.toFixed(2);
    }

    /* juros compostos */

    else if (tipoJuros == "composto") {

        let montanteCapital =

        capital *

        Math.pow((1 + taxa), tempo);

        let montanteAportes =

        aporte *

        (

            (Math.pow((1 + taxa), tempo) - 1)

            / taxa

        );

        let montante =

        montanteCapital +

        montanteAportes;

        let investido =

        capital +

        (aporte * tempo);

        let juros =

        montante - investido;

        textoResultado.innerHTML =

        "Juros Compostos <br><br>" +

        "Aporte Mensal: R$ " +
        aporte.toFixed(2) +

        "<br><br>" +

        "Juros Totais: R$ " +
        juros.toFixed(2) +

        "<br><br>" +

        "Montante Final: R$ " +
        montante.toFixed(2);
    }

    cardResultado.style.display = "flex";
}

function fecharResultado(){

    document.getElementById("cardResultado")
    .style.display = "none";
}

function limparCampos() {

    document.getElementById("capital").value = "";

    document.getElementById("taxa").value = "";

    document.getElementById("tempo").value = "";

    document.getElementById("aporte").value = "";

    document.getElementById("tipoJuros").value = "simples";

    document.getElementById("textoResultado")
    .innerHTML = "";

    document.getElementById("cardResultado")
    .style.display = "none";

    document.getElementById("campoAporte")
    .style.display = "none";
}