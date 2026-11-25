const avanca = document.querySelectorAll('.btn-proximo');

let temBussola = false;
let temLuneta = false;

avanca.forEach(button => {

    button.addEventListener('click', function() {

        const atual = document.querySelector('.passo.ativo');

        let proximoPasso = this.getAttribute('data-proximo');

        // Verifica se o jogador encontrou a bússola
        if (proximoPasso === '3') {
            temBussola = true;
        }

        // Verifica se o jogador encontrou a luneta
        if (proximoPasso === '5') {
            temLuneta = true;
        }

        // Verifica se o jogador possui algum item secreto
        if (proximoPasso === '13' && (temBussola || temLuneta)) {
            proximoPasso = '14';
        }

        // Reinicia os itens ao começar uma nova aventura
        if (proximoPasso === '0') {
            temBussola = false;
            temLuneta = false;
        }

        // Atualiza o passo ativo
        atual.classList.remove('ativo');

        document.getElementById('passo-' + proximoPasso).classList.add('ativo');

    });

});