const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

const filters = document.querySelectorAll(".filter");
const foods = document.querySelectorAll(".food");

filters.forEach(filter => {
    filter.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.dataset.category;

        foods.forEach(food => {
            if (category === "all" || food.dataset.category === category) {
                food.style.display = "block";
            } else {
                food.style.display = "none";
            }
        });
    });
});

document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("guestName").value;
    const message = document.getElementById("reservationMessage");

    message.textContent =
        `Thank you ${name}! Your reservation request has been received.`;

    this.reset();
});