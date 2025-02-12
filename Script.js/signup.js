document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");
    const agreeYes = document.getElementById("agree-yes");
    const submitButton = document.querySelector(".submit-btn");
    
    const monthsDays = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };

    // Função para preencher os meses e anos
    function populateMonthsAndYears() {
        const currentYear = new Date().getFullYear();
        for (let month = 1; month <= 12; month++) {
            const option = document.createElement("option");
            option.value = month;
            option.textContent = month < 10 ? `0${month}` : month;
            monthSelect.appendChild(option);
        }
        for (let year = currentYear - 100; year <= currentYear; year++) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    // Preenche os meses e anos ao carregar a página
    populateMonthsAndYears();

    function updateDays() {
        daySelect.innerHTML = "<option value=''>Dia</option>";
        let month = parseInt(monthSelect.value);
        let year = parseInt(yearSelect.value);
        let days = monthsDays[month] || 31;
        if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
            days = 29;
        }
        for (let i = 1; i <= days; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    // Funções de validação
    function validateField(input, message) {
        if (!input.value.trim()) {
            showError(input, message);
            return false;
        }
        clearError(input);
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Informe um email válido.");
            return false;
        }
        clearError(emailInput);
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        clearError(passwordInput);
        return true;
    }

    function validateConfirmPassword() {
        if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value.length < 6) {
            showError(confirmPasswordInput, "As senhas não coincidem ou possuem menos de 6 caracteres.");
            return false;
        }
        clearError(confirmPasswordInput);
        return true;
    }

    function showError(input, message) {
        let errorSpan = input.parentNode.querySelector(".error-message");
        if (!errorSpan) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("error-message");
            input.parentNode.appendChild(errorSpan);
        }
        errorSpan.innerHTML = `<i class='bi bi-exclamation-circle'></i> ${message}`;
        input.classList.add("error");
    }

    function clearError(input) {
        const errorSpan = input.parentNode.querySelector(".error-message");
        if (errorSpan) {
            errorSpan.remove();
        }
        input.classList.remove("error");
    }

    function validateDOB() {
        let valid = true;
        if (!monthSelect.value) {
            showError(monthSelect, "Campo obrigatório.");
            valid = false;
        } else {
            clearError(monthSelect);
        }
        if (!daySelect.value) {
            showError(daySelect, "Campo obrigatório.");
            valid = false;
        } else {
            clearError(daySelect);
        }
        if (!yearSelect.value) {
            showError(yearSelect, "Campo obrigatório.");
            valid = false;
        } else {
            clearError(yearSelect);
        }
        return valid;
    }

    function enableSubmit() {
        submitButton.disabled = !agreeYes.checked;
    }

    // Evento de envio do formulário
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        valid &= validateField(nameInput, "Por favor, informe um nome de usuário.");
        valid &= validateEmail();
        valid &= validatePassword();
        valid &= validateConfirmPassword();
        valid &= validateDOB();
        
        if (valid) {
            alert("Formulário enviado com sucesso!");
        }
    });

    // Eventos de interação com os campos
    monthSelect.addEventListener("change", updateDays);
    yearSelect.addEventListener("change", updateDays);
    agreeYes.addEventListener("change", enableSubmit);
    agreeYes.addEventListener("change", enableSubmit);
});
