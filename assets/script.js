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

            input.addEventListener("focus", () => {
                input.parentNode.classList.add(
                    this.options.focusClass
                );
            });

            input.addEventListener("blur", () => {
                input.parentNode.classList.remove(
                    this.options.focusClass
                );
            });

            input.parentNode.classList.toggle(
                this.options.activeClass,
                !!input.value
            );
        });
    }
}

window.floatingLabel = new FloatingLabel(
    document.querySelector(".form")
);

window.addEventListener("load", () => {
    if (typeof baguetteBox !== "undefined") {
        baguetteBox.run(".baguetteBoxGallery");
    }
});