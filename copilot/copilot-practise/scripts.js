document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('Landing page loaded');

    const navLinks = document.querySelectorAll('.navigation ul li a');
    const navUnderline = document.querySelector('.nav-underline');

    // console.log(navUnderline)

    // Initially set the underline to the first link
    let activeLinkRect = navLinks[0].getBoundingClientRect();
    const navRect = navLinks[0].closest('.navigation').getBoundingClientRect();
    navUnderline.style.width = `${activeLinkRect.width}px`;
    navUnderline.style.left = `${activeLinkRect.left - navRect.left}px`;
    navUnderline.style.display = 'block';

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const linkRect = link.getBoundingClientRect();
            navUnderline.style.width = `${linkRect.width}px`;
            navUnderline.style.left = `${linkRect.left - navRect.left}px`;
        });

        link.addEventListener('mouseout', function() {
            // Persist the underline position on the last hovered link
            activeLinkRect = link.getBoundingClientRect();
        });
    });
});
