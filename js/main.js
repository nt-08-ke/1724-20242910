"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
    
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



});
// JSON data for portfolio items
const portfolioItems = [
    { src: "images/portfolio (1).jpg", title: "Stylish Office Space" },
    { src: "images/portfolio (2).jpg", title: "Minimalist Kitchen Design" },
    { src: "images/portfolio (3).jpg", title: "Sleek Kitchen Interior" },
    { src: "images/portfolio (4).jpg", title: "Cozy Living Room" },
    { src: "images/portfolio (5).jpg", title: "Trendy Workspace" },
    { src: "images/portfolio (6).jpg", title: "Modern Kitchen" },
    { src: "images/portfolio (7).jpg", title: "Spacious Kitchen Layout" },
    { src: "images/portfolio (8).jpg", title: "Contemporary Office" },
    { src: "images/portfolio (9).jpg", title: "Luxurious Bathroom" },
    { src: "images/portfolio (10).jpg", title: "Elegant Home Office" },
    { src: "images/portfolio (11).jpg", title: "Professional Conference Room" },
    { src: "images/portfolio (12).jpg", title: "Chic Urban Reception Area" },
    { src: "images/portfolio (13).jpg", title: "Inviting Outdoor Living Space" },
    { src: "images/portfolio (14).jpg", title: "Artistic Workspace Design" },
    { src: "images/portfolio (15).jpg", title: "Modern Conference Room" }
];



let currentPage = 0; // Start from the first image set
const itemsPerPage = 4;

function displayItems() {
    const portfolioImages = document.getElementById('portfolioImages');
    portfolioImages.innerHTML = ''; // Clear existing items
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    // Create grid items
    portfolioItems.slice(start, end).forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <a class="fancybox" href="${item.src}" data-fancybox="gallery" title="${item.title}">
                <img src="${item.src}" alt="${item.title}" title="${item.title}">
            </a>
            <div class="portfolio_hover_area">
                <a class="fancybox" href="${item.src}" data-fancybox="gallery" title="${item.title}">
                    <span class="fa fa-external-link"></span>
                </a>
            </div>`;
        portfolioImages.appendChild(gridItem);
    });

    // Update button states
    document.getElementById('prevBtn').disabled = currentPage === 0; // Disable "Back" on the first page
    document.getElementById('nextBtn').disabled = end >= portfolioItems.length; // Disable "Next" if no more items
}

// Navigation functions
function nextPage() {
    if ((currentPage + 1) * itemsPerPage < portfolioItems.length) {
        currentPage++;
        displayItems();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayItems();
    }
}

// Initial display
displayItems(); // Show the first set of images on page load
