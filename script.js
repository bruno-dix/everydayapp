function greet() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');
    const now = new Date();
    const hour = now.getHours();

    let greeting;
    if (hour >= 6 && hour < 12) {
        greeting = "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde";
    } else {
        greeting = "Boa noite";
    }

    if (name.trim()) { // Verifica se o nome não está vazio ou somente com espaços
        message.textContent = `${greeting}, ${name}!`;
    } else {
        message.textContent = "Por favor, insira seu nome.";
    }

    // Reiniciar animação
    resetAnimation(message);
}

function resetApp() {
    const nameInput = document.getElementById('name');
    const message = document.getElementById('message');

    // Limpa o campo de entrada de texto e a mensagem
    nameInput.value = '';
    message.textContent = '';

    // Reinicia a animação, se necessário
    resetAnimation(message);
}

function resetAnimation(element) {
    element.style.animation = "none";
    setTimeout(() => {
        element.style.animation = ""; // Reaplica a animação
    }, 10);
}

// Alternância de tema
document.getElementById('theme-toggle').addEventListener('change', function () {
    const isDarkTheme = this.checked;
    document.body.classList.toggle('dark-theme', isDarkTheme);

    // Salva a preferência do tema no localStorage
    localStorage.setItem('darkTheme', isDarkTheme);
});

// Aplicar o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').checked = true; // Ajusta o Switch
    }
});

// Exemplo de evento para lidar com o Switch selecionado/deselecionado
document.querySelectorAll('md-switch').forEach((switchElement) => {
    switchElement.addEventListener('change', (event) => {
        console.log(`Switch ${event.target.id} está ${event.target.selected ? 'ligado' : 'desligado'}`);
    });
});
