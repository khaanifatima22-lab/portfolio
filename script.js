// ===== DARK MODE =====

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            darkBtn.innerHTML = "☀️";
        }else{
            darkBtn.innerHTML = "🌙";
        }

    });

}


// ===== SCROLL ANIMATION =====

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>observer.observe(card));
