var elementsDoubt = document.querySelectorAll(".duvida")

elementsDoubt.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('active')
    })
})