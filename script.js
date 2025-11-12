document.addEventListener('DOMContentLoaded', function() {
    const botaoBumbaBoi = document.getElementById('botao-bumba-boi');
    const infoBumbaBoi = document.getElementById('info-bumba-boi');
    
    // Conteúdo extra para a seção Bumba Meu Boi
    infoBumbaBoi.innerHTML = "O Bumba Meu Boi é Patrimônio Cultural Imaterial da Humanidade pela UNESCO! Envolve mais de 100 grupos no Maranhão e é celebrado de junho a julho.";

    // Função para alternar a exibição da informação extra sobre o Bumba Meu Boi
    if (botaoBumbaBoi && infoBumbaBoi) {
        botaoBumbaBoi.addEventListener('click', function() {
            // Alterna a classe 'oculto' para mostrar/esconder o parágrafo
            infoBumbaBoi.classList.toggle('oculto');
            
            // Altera o texto do botão conforme o estado
            if (infoBumbaBoi.classList.contains('oculto')) {
                botaoBumbaBoi.textContent = 'Saiba Mais (Clique)';
            } else {
                botaoBumbaBoi.textContent = 'Esconder Informação';
            }
        });
    }

    // Função para mostrar o trecho de cordel
    window.mostrarTrechoCordel = function() {
        const trechoCordel = document.getElementById('trecho-cordel');
        // Apenas para garantir que o elemento existe e mostrar
        if (trechoCordel) {
             trechoCordel.classList.remove('oculto');
             alert("Trecho de Cordel exibido!");
        }
    }
});