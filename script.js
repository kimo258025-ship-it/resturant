document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    const loader = document.querySelector(".loader");

    if (loader) {

        const hideLoader = () => {
            loader.classList.add("hidden");

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        };

        // إخفاء الـ Loader بعد تحميل الصفحة
        window.addEventListener("load", () => {
            setTimeout(hideLoader, 500);
        });

        // حماية لو الصور أخدت وقت طويل
        setTimeout(hideLoader, 2000);
    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        // فتح وقفل القائمة في الموبايل
        menuBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            nav.classList.toggle("active");
            menuBtn.classList.toggle("active");

        });


        // لما تضغط على أي لينك
        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuBtn.classList.remove("active");

            });

        });


        // قفل القائمة لو ضغطت خارجها
        document.addEventListener("click", (event) => {

            if (
                !nav.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                nav.classList.remove("active");
                menuBtn.classList.remove("active");

            }

        });


        // لو رجعنا لحجم اللاب
        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                nav.classList.remove("active");
                menuBtn.classList.remove("active");

            }

        });

    }


    /* =========================
       MENU FILTER
    ========================= */

    const filterBtns =
        document.querySelectorAll(".filter");

    const foodCards =
        document.querySelectorAll(".food-card");


    filterBtns.forEach(button => {

        button.addEventListener("click", () => {

            // إزالة Active من كل الأزرار
            filterBtns.forEach(btn => {
                btn.classList.remove("active");
            });

            // إضافة Active للزر الحالي
            button.classList.add("active");


            const category =
                button.dataset.category;


            foodCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;


                if (
                    category === "all" ||
                    cardCategory === category
                ) {

                    card.classList.remove("hidden");

                    card.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(15px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 300,
                            easing: "ease-out"
                        }
                    );

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =========================
       RESERVATION FORM
    ========================= */

    const reservationForm =
        document.getElementById("reservationForm");

    const messageBox =
        document.getElementById("reservationMessage");


    if (reservationForm) {

        reservationForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const name =
                document.getElementById("guestName")?.value.trim();

            const date =
                document.getElementById("date")?.value;

            const guests =
                document.getElementById("guests")?.value;


            if (!name || !date || !guests) {
                return;
            }


            if (messageBox) {

                messageBox.textContent =
                    `Thank you, ${name}! Your reservation request for ${guests} on ${date} has been received. We will contact you shortly to confirm.`;

                messageBox.classList.add("show");

            }


            reservationForm.reset();

        });

    }


    /* =========================
       HEADER ON SCROLL
    ========================= */

    const header =
        document.getElementById("header");


    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };


        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );


        updateHeader();

    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       TOUCH SUPPORT
    ========================= */

    // تحسين تجربة اللمس على الموبايل
    document.querySelectorAll("button, a").forEach(element => {

        element.addEventListener("touchstart", () => {
            element.style.webkitTapHighlightColor = "transparent";
        }, { passive: true });

    });


    /* =========================
       PREVENT HORIZONTAL SCROLL
    ========================= */

    document.body.style.overflowX = "hidden";

});