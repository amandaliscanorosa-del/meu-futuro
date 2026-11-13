document.addEventListener("DOMContentLoaded", () => {
    // 1. Animação de entrada sequencial para os cartões das 3 seções
    const cards = document.querySelectorAll('.revelar');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('ativo');
        }, 300 * (index + 1)); // Atraso de 300ms entre cada seção
    });

    // 2. Interação extra ao clicar no título "Coloridinho"
    const titulo = document.getElementById('titulo-principal');
    
    titulo.addEventListener('click', () => {
        // Remove a animação padrão temporariamente para dar um efeito de giro rápido
        titulo.classList.remove('animacao-flutuar');
        titulo.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        titulo.style.transform = 'scale(1.2) rotate(-3deg)';

        setTimeout(() => {
            titulo.style.transform = 'scale(1) rotate(0deg)';
            // Volta a animação de flutuar após o clique
            setTimeout(() => {
                titulo.classList.add('animacao-flutuar');
            }, 600);
        }, 400);
    });
});