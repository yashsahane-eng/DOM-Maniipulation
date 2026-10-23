
let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const error = document.getElementById("error");

function updateUI() {
    countDisplay.textContent = count;
    clearBtn.hidden = count === 0;
}

function showError(show) {
    error.classList.toggle("hidden", !show);
}

incrementBtn.addEventListener("click", function () {
    count++;
    showError(false);
    updateUI();
});

decrementBtn.addEventListener("click", function () {
    if (count === 0) {
        showError(true);
        return;
    }

    count--;
    showError(false);
    updateUI();
});

clearBtn.addEventListener("click", function () {
    count = 0;
    showError(false);
    updateUI();
});

showError(false);
updateUI();
