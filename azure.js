document.addEventListener('DOMContentLoaded', function () {
    function updateMenuBar() {
        var menuBar = document.getElementById('change-content');
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
    }
    function updateMenuBar2() {
        var item1 = document.getElementById('list-news-under-bar-1');
        var item2 = document.getElementById('list-news-under-bar-2');
        var item3 = document.getElementById('list-news-under-bar-3');
        var item4 = document.getElementById('list-news-under-bar-4');
        var item5 = document.getElementById('list-news-under-bar-5');
        var scrollPosition = window.scrollY;

        if (scrollPosition >= 0 && scrollPosition < 1500) {
            item1.style.opacity='1';
            item2.style.opacity='0';
            item3.style.opacity='0';
            item4.style.opacity='0';
            item5.style.opacity='0';
        } else if (scrollPosition >= 1500 && scrollPosition < 2400) {
            item1.style.opacity='0';
            item2.style.opacity='1';
            item3.style.opacity='0';
            item4.style.opacity='0';
            item5.style.opacity='0';
        } else if (scrollPosition >= 2400 && scrollPosition < 4400) {
            item1.style.opacity='0';
            item2.style.opacity='0';
            item3.style.opacity='1';
            item4.style.opacity='0';
            item5.style.opacity='0';
        } else if (scrollPosition >= 4400 && scrollPosition < 5600) {
            item1.style.opacity='0';
            item2.style.opacity='0';
            item3.style.opacity='0';
            item4.style.opacity='1';
            item5.style.opacity='0';
        } else {
            item1.style.opacity='0';
            item2.style.opacity='0';
            item3.style.opacity='0';
            item4.style.opacity='0';
            item5.style.opacity='1';
        }
    }
    function handleScroll() {
        if (window.innerWidth < 860) {
            updateMenuBar();
        }else{
            updateMenuBar2()
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
function changeimg(){
    const image=document.getElementById('main-banner-img-1');
    const screenwidth=window.innerWidth;
    if(screenwidth > 859){
       image.src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Desktop-hero-BG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=1264&qlt=100&fit=constrain'
    }
    else{
        image.src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Mobile-hero-bg?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=720&hei=405&qlt=100&fit=constrain'
    }
}
changeimg();
window.addEventListener('resize', changeimg);