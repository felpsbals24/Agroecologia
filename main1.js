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
