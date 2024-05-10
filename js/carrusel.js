var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    // Logica para regresar al primer elemento del carrusel

    $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                60
            );
        } else {
            // Si estamos en la última diapositiva, regresamos al primer elemento
            scrollPosition = 0;
            $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                60
            );
        }
    });

     // Logica para moverte hacia la izquierda
     $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                60
            );
        } else {
            // Si estamos en la primera diapositiva, vamos al último elemento
            scrollPosition = carouselWidth - cardWidth * 4;
            $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                60
            );
        }
    });

} else {
    $(multipleCardCarousel).addClass("slide");
}



