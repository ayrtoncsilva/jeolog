const form = document.querySelector("#form");
const inputCpf = document.getElementById("cpf");

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.my-form input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            input.value = input.value.toUpperCase()
        })
    })
});

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    try {
        const formData = new FormData(form);
        const response = await fetch('/submit', {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            throw new Error("Erro ao enviar os dados ao servidor");
        }

        const responseData = await response.text();
        console.log('Resposta do servidor:', responseData);
    } catch (error) {
        console.error('Erro:', error);
    }
});

inputCpf.addEventListener('input', (event) => {
    let cpf = inputCpf.value.replace(/\D/g, '');

    if(cpf.length >11) {
        cpf = cpf.substring(0,11)
    }

    if (cpf.length > 3) {
        
        cpf = cpf.substring(0, 3) + '.' + cpf.substring(3)
    }
    if (cpf.length > 7) {
        cpf = cpf.substring(0, 7) + '.' + cpf.substring(7); 
    }

    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11) + '-' + cpf.substring(11); 
    }

    inputCpf.value = cpf
});

