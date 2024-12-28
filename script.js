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

    if (name) {
        message.textContent = `${greeting}, ${name}!`;
    } else {
        message.textContent = "Por favor, insira seu nome.";
    }

    // Forçar reinício da animação
    message.style.animation = "none";
    setTimeout(() => {
        message.style.animation = ""; // Reaplica a animação
    }, 10);
}
