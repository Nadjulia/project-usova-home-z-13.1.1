let button1 = document.querySelector(".btn1");
let text = document.querySelector(".text");
let cliks = 0;
let button2 = document.querySelector(".btn2");

button1.addEventListener("click", function() {
    cliks += 1;
    text.textContent = "Ты нажал(-а) кнопку " + cliks + " раз(-а)!!!";
});

button2.addEventListener("click", function() {
    cliks = 0;
    text.textContent = "Ты обнулил счётчик!"
})