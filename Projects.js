const filterButtons =
            document.querySelectorAll(".filter-btn");

        const projectCards =
            document.querySelectorAll(".project-card");


        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                /* Remove active class */

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                /* Add active class */

                button.classList.add("active");


                const filter =
                    button.dataset.filter;


                projectCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.style.display = "block";

                    } else {

                        card.style.display = "none";

                    }

                });

            });

        });


        /* =========================
           DARK / LIGHT MODE
        ========================= */

        const themeBtn =
            document.getElementById("themeBtn");

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light");


            if (
                document.body.classList.contains("light")
            ) {

                themeBtn.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';

            } else {

                themeBtn.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';

            }

        });
