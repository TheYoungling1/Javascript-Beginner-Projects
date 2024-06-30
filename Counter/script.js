const output = document.body.querySelector("#countOutput");
const buttonSelect = document.body.querySelectorAll(".btn");
let count = 0;

buttonSelect.forEach(function (btn) { 
    btn.addEventListener("click", function(e) {
        const className = e.currentTarget.classList;
        if (className.contains('Decrease')) {
            count = count - 1;
        }
        else if (className.contains('Increase')) {
            count = count + 1;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            output.style.color = 'green';
        }
        else if (count < 0 ) {
            output.style.color = 'red';
        }
        else {
            output.style.color = '#102b42'
        }
        output.textContent = count;
    })
});