let previousWidth = window.innerWidth;
let resizeTimeout;
let redirected = false; // Flag para evitar redirecionamento contínuo

// Função para redirecionar com base na largura da tela
function redirectBasedOnWidth() {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 720) {
        if (window.location.pathname !== '/index.html') {
            window.location.href = 'index.html';
        }
    } else {
        if (window.location.pathname !== '/pagina-principal.html') {
            window.location.href = 'pagina-principal.html';
        }
    }
}

// Verificação e redirecionamento inicial ao carregar a página
window.onload = function() {
    redirectBasedOnWidth();
    redirected = true; // Define que o redirecionamento inicial foi feito
};

// Listener para redimensionamento da janela com debounce
window.onresize = function() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
        const currentWidth = window.innerWidth;

        // Verifica se a largura da tela mudou significativamente
        if (Math.abs(currentWidth - previousWidth) > 100) {
            previousWidth = currentWidth;

            if (redirected) {
                redirectBasedOnWidth(); // Redireciona com base na nova largura
            }
        }
    }, 200); // O atraso pode ser ajustado conforme necessário (200 ms é um exemplo)
};


function facebook() {
    window.open('https://www.facebook.com/profile.php?id=61554782643114&mibextid=kFxxJD', '_blank');
}

function instagran() {
    window.open('//www.instagram.com/bruno.alves.marques?igsh=b2l3c28wY2g3bWJ3', '_blank');
}

function whatsapp() {
    window.open('//wa.me/message/OIQDSPEFPUIFN1', '_blank');
}
document.addEventListener('scroll', function() {
    const botaoFixo = document.getElementById('botao-fixo');
    const alturaTotal = document.documentElement.scrollHeight;
    const metadeDaPagina = alturaTotal / 3;
    const posicaoAtual = window.scrollY + window.innerHeight;
    const margemParaFinal = 300; // Margem a partir do final da página para ocultar o botão

    if (posicaoAtual >= metadeDaPagina && posicaoAtual < (alturaTotal - margemParaFinal)) {
        botaoFixo.style.display = 'block';
    } else {
        botaoFixo.style.display = 'none';
    }
});

