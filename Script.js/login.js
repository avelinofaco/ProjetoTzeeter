function validateForm() {
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const button = document.getElementById("submit-button");
            const emailError = document.getElementById("email-error");
            const emailIcon = document.getElementById("email-icon");
            const passwordIcon = document.getElementById("password-icon");
            const buttonIcon = document.getElementById("button-icon");
            
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
            const isPasswordFilled = password.value.length > 0;
            
            if (!isValidEmail && email.value.length > 0) {
                emailError.style.display = "block";
                emailError.innerText = "Informe um email válido";
                emailIcon.className = "icon error";
                emailIcon.innerHTML = "&#10071;";
                emailIcon.style.display = "block";
            } else {
                emailError.style.display = "none";
                emailIcon.className = "icon success";
                emailIcon.innerHTML = "&#10004;";
                emailIcon.style.display = email.value.length > 0 ? "block" : "none";
            }
            
            passwordIcon.className = "icon success";
            passwordIcon.innerHTML = "&#10004;";
            passwordIcon.style.display = isPasswordFilled ? "block" : "none";
            
            button.disabled = !(isValidEmail && isPasswordFilled);
            buttonIcon.style.display = button.disabled ? "none" : "block";
        }