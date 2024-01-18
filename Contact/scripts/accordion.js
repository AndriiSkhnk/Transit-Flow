const headers = document.querySelectorAll('[data-name="accordion-questions"]');


headers.forEach(function(item){
    item.addEventListener('click', function () {

        this.nextElementSibling.classList.toggle('hidden');


    })
})

