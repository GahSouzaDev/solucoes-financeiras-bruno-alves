let previousWidth = window.innerWidth;
let resizeTimeout;

window.onresize = function() {
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(function() {
        const currentWidth = window.innerWidth;
        
        if (Math.abs(currentWidth - previousWidth) > 100) {
            previousWidth = currentWidth;
            
            if (currentWidth <= 720) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'pagina-principal.html';
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

