window.addEventListener("load", function () {
    const headerBottomListLink = document.querySelector(".header-bottom-list__item:first-child");
    const catalogMenu = document.querySelector(".catalog-menu");
    if (headerBottomListLink !== null) {
        headerBottomListLink.addEventListener("mouseover", function () {
            catalogMenu.classList.add('active');
        });
        catalogMenu.addEventListener("mouseover", function () {
            this.classList.add('active');
        });
        catalogMenu.addEventListener("mouseout", function () {
            this.classList.remove('active');
        });
    }
});
