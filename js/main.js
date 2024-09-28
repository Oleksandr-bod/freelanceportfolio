const btnDarMode = document.querySelector(".dark-mode-btn");

//Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme-scheme: dark)").matches) {
    btnDarMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

//Включение ночного режима кнопке
btnDarMode.onclick = function () {
    btnDarMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "Light")
    }
}