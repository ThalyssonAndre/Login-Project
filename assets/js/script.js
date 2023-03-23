const button = document.querySelector("#mode_icon")

button.addEventListener("click", function(e){
    const form = document.querySelector("#login_form")
    if (button.classList.contains("fa-moon")){
        button.classList.remove("fa-moon")
        button.classList.add("fa-sun")

        form.classList.add("dark")

        return
    }

    button.classList.add("fa-moon")
    button.classList.remove("fa-sun")
    form.classList.remove("dark")
})