$(document).ready(function() {
    $("#theme-button").click(function() {
        $("body, footer").toggleClass("dark-mode");
    });

    // Progresso dinâmico
    $(".progress-circle").each(function() {
        let percent = $(this).data('percent');
        $(this).css('background', `conic-gradient(var(--primary-color) ${percent}%, #ddd 0)`);
    });
});
