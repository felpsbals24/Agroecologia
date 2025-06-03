function botao1() {
    const subtitulo = document.getElementById("subtitulo");
    const btn = document.querySelector('.btn-design');

    
    subtitulo.style.display = "block";
    setTimeout(() => {
        subtitulo.classList.add("show"); 
    }, 10); 

    // Faz o botão desaparecer com fade-out
    btn.classList.add('btn-fade-out');
    setTimeout(() => {
        btn.style.visibility = "hidden"; // Torna o botão invisível
    }, 600); // Tempo igual ao transition do CSS
}

function toggleAccordion(id) {
    const panel = document.getElementById(id);
    const btn = event.currentTarget;
    panel.classList.toggle("show");
    btn.classList.toggle("active");
}
function toggleDescricaoVideo() {
    const desc = document.getElementById('descricaoVideo');
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
}

const plantasDB = {
    alface: {
        nome: "Alface",
        espacamento: 0.3,
        agua: 5,
        epoca: {
            norte: ["jul", "ago", "set"],
            nordeste: ["mai", "jun", "jul", "ago"],
            "centro-oeste": ["fev", "mar", "abr", "mai", "jun"],
            sudeste: ["mar", "abr", "mai", "jun", "jul", "ago"],
            sul: ["fev", "mar", "abr", "set", "out", "nov"]
        },
        info: "Planta de ciclo curto (30-40 dias). Prefere clima ameno."
},
tomate: {
    nome: "Tomate",
    espacamento: 0.5,
    agua: 15,
    epoca: {
        norte: ["mai", "jun", "jul"],
        nordeste: ["mar", "abr", "mai", "jun"],
        "centro-oeste": ["fev", "mar", "abr", "mai", "jun"],
        sudeste: ["jul", "ago", "set"],
        sul: ["set", "out", "nov"]
},
info: "Necessita tutoramento. Sensível a pragas."
},
    cenoura: {
    nome: "Cenoura",
    espacamento: 0.2,
    agua: 8,
    epoca: {
        norte: ["mar", "abr", "mai", "jun"],
        nordeste: ["mar", "abr", "mai", "jun"],
        "centro-oeste": ["fev", "mar", "abr", "mai", "jun"],
        sudeste: ["fev", "mar", "abr", "mai", "jun"],
        sul: ["fev", "mar", "abr", "set", "out", "nov"]
},
info: "Prefere solos arenosos e bem drenados."
},
    feijao: {
    nome: "Feijão",
    espacamento: 0.4,
    agua: 10,
    epoca: {
        norte: ["jan", "fev", "mar", "abr"],
        nordeste: ["mar", "abr", "mai"],
        "centro-oeste": ["out", "nov", "dez"],
        sudeste: ["set", "out", "nov"],
        sul: ["set", "out", "nov"]
},
info: "Fixa nitrogênio no solo. Ciclo de 60-90 dias."
},
    milho: {
    nome: "Milho",
    espacamento: 0.8,
    agua: 20,
    epoca: {
                norte: ["jan", "fev", "mar", "abr"],
                nordeste: ["jan", "fev", "mar", "abr"],
                "centro-oeste": ["set", "out", "nov"],
                sudeste: ["set", "out", "nov"],
                sul: ["set", "out", "nov"]
},
info: "Planta de clima quente. Necessita polinização."
}
};

const meses = {
    jan: "Janeiro", fev: "Fevereiro", mar: "Março", abr: "Abril",
    mai: "Maio", jun: "Junho", jul: "Julho", ago: "Agosto",
    set: "Setembro", out: "Outubro", nov: "Novembro", dez: "Dezembro"
};

function calcularPlantio() {
    const plantaSelecionada = document.getElementById("planta").value;
    const regiaoSelecionada = document.getElementById("regiao").value;
    const area = parseFloat(document.getElementById("area").value);
            
    const resultadoDiv = document.getElementById("resultado");
            
    if (!plantaSelecionada || !regiaoSelecionada || isNaN(area) || area <= 0) {
        resultadoDiv.innerHTML = "<p style='color:red'>Por favor, preencha todos os campos corretamente.</p>";
        resultadoDiv.style.display = "block";
        return;
}
            
const planta = plantasDB[plantaSelecionada];
            
const plantasPorMetro = 1 / (planta.espacamento * planta.espacamento);
const totalPlantas = Math.floor(area * plantasPorMetro);
const aguaDiaria = (planta.agua * totalPlantas) / 1000; // em litros
            
const mesesPlantio = planta.epoca[regiaoSelecionada];
const epocaTexto = mesesPlantio.map(m => meses[m]).join(", ");
            
let html = `
        <h3>Resultado para ${planta.nome} na região ${regiaoSelecionada.toUpperCase()}</h3>
        <p><strong>Área:</strong> ${area}m²</p>
        <p><strong>Número estimado de plantas:</strong> ${totalPlantas}</p>
        <p><strong>Espaçamento recomendado:</strong> ${planta.espacamento}m x ${planta.espacamento}m</p>
        <p><strong>Água necessária por dia:</strong> ${aguaDiaria.toFixed(2)} litros</p>
        <p><strong>Melhor época para plantio:</strong> ${epocaTexto}</p>
        <p><strong>Informações adicionais:</strong> ${planta.info}</p>
`;
            
if (regiaoSelecionada === "norte" || regiaoSelecionada === "nordeste") {
    html += `<p><strong>Dica:</strong> Em regiões mais quentes, proteja as plantas do sol intenso com sombrite.</p>`;
} 
else if (regiaoSelecionada === "sul") 
    {
        html += `<p><strong>Dica:</strong> Em regiões mais frias, considere usar estufas ou coberturas.</p>`;
}
            
resultadoDiv.innerHTML = html;
resultadoDiv.style.display = "block";
}
document.getElementById("calcular").addEventListener("click", calcularPlantio);
    
