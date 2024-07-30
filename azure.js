document.addEventListener('DOMContentLoaded', function () {
    var menuBar = document.getElementById('change-content');

    window.onscroll = function () {
        var scrollPosition = window.scrollY;
        
        if (scrollPosition >= 0 && scrollPosition < 2300) {
            menuBar.innerText = 'Featured news';
        } else if (scrollPosition >= 1000 && scrollPosition < 3300) {
            menuBar.innerText = 'Solutions';
        } else if (scrollPosition >= 3300 && scrollPosition < 5800) {
            menuBar.innerText = 'Products and services';
        } else if (scrollPosition >= 5800 && scrollPosition < 6850) {
            menuBar.innerText = 'Resources by role';
        } else {
            menuBar.innerText = 'Customer stories';
        }
    };
});
