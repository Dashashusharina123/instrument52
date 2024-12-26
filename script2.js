const toggle = document.getElementById('toggle');
    const content = document.getElementById('content');

    toggle.addEventListener('click', function() {
        content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
        toggle.textContent = content.style.display === "block" ? "Скрыть" : "Читать далее";
    });