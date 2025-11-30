let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll(".slide");
    index = (i + slides.length) % slides.length;

    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
    showSlide(index + direction);
}

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// ปิด dropdown เมื่อคลิกข้างนอก
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let d of dropdowns) {
            if (d.classList.contains('show')) d.classList.remove('show');
        }
    }
}

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let d of dropdowns) {
            if (d.classList.contains('show')) d.classList.remove('show');
        }
    }
}


// เริ่มภาพแรก
showSlide(0);

