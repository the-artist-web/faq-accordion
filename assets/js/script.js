const $plus = document.querySelectorAll("[data-plus]"),
$minus = document.querySelectorAll("[data-minus]"),
$boxHeight = document.querySelectorAll("[data-box-height]");

for (let i = 0; i < $boxHeight.length; i++) {
    $plus[i].addEventListener("click", () => {
        $boxHeight[i].classList.add("active");
        $minus[i].classList.add("active");
        $plus[i].classList.add("active");
    });

    $minus[i].addEventListener("click", () => {
        $boxHeight[i].classList.remove("active");
        $plus[i].classList.remove("active");
        $minus[i].classList.remove("active");
    });
};