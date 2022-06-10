function onScroll() {
    if (scrollY > 40) {
        document.getElementById('navigation').classList.add('scroll');
    }else {
        document.getElementById('navigation').classList.remove('scroll');
    }
}
