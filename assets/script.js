class FloatingLabel {

    constructor(form, options = {}) {

        if (!form) return;

        this.options = {
            focusClass: "focus",
            activeClass: "active",
            errorClass: "error",
            ...options
        };

        form.classList.add("has-floated-label");

        const labels = form.querySelectorAll("label");

        labels.forEach(label => {

            const inputId = label.getAttribute("for");
            const input = document.getElementById(inputId);

            if (!input) return;

            // Quand l'utilisateur écrit dans le champ
            ["keyup", "input", "change"].forEach(event => {

                input.addEventListener(event, () => {

                    input.parentNode.classList.remove(
                        this.options.errorClass
                    );

                    input.parentNode.classList.toggle(
                        this.options.activeClass,
                        !!input.value
                    );
                });
            });

            // Quand le champ reçoit le focus
            input.addEventListener("focus", () => {
                input.parentNode.classList.add(
                    this.options.focusClass
                );
            });

            // Quand le champ perd le focus
            input.addEventListener("blur", () => {
                input.parentNode.classList.remove(
                    this.options.focusClass
                );
            });

            // Vérifie si le champ est déjà rempli
            input.parentNode.classList.toggle(
                this.options.activeClass,
                !!input.value
            );
        });
    }
}

// Initialisation
window.floatingLabel = new FloatingLabel(
    document.querySelector(".form")
);

window.addEventListener("load", () => {
    baguetteBox.run(".baguetteBoxGallery");
});