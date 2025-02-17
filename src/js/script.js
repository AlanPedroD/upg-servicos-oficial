document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão

        const targetId = this.getAttribute('href'); // Pega o ID do link
        const targetSection = document.querySelector(targetId); // Encontra a seção

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuste de posição
            behavior: 'smooth' // Efeito de rolagem suave
        });
    });
});