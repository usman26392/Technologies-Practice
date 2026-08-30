export default function astronomicalIisotopes() {
    var elem = document.querySelector('.grid-layout');
    if (!elem) return;

    // Ensure Isotope is loaded
    if (typeof Isotope === 'undefined') {
        console.error('Isotope library not loaded');
        return;
    }

    // Use the same breakpoint defined in _variable.scss for $mobL
    const mobileBreakpoint = 767.98;
    
    // Get base font size for em calculations (set by fontResizer)
    function getBaseFontSize() {
        return parseFloat(window.getComputedStyle(document.body).fontSize);
    }
    
    // Convert px to em based on current base font size
    function pxToEm(px) {
        return px / getBaseFontSize();
    }
    
    // Convert em to px based on current base font size
    function emToPx(em) {
        return em * getBaseFontSize();
    }

    // Function to handle mobile view layout - MODIFIED: don't hide items, just adjust layout
    function handleMobileView() {
        const gridItems = document.querySelectorAll('.grid-item');
        
        if (window.innerWidth <= mobileBreakpoint) {
            // On mobile, ensure all items are visible and properly styled
            gridItems.forEach(item => {
                item.style.display = '';
                // Reset any positioning that might interfere with mobile layout
                item.style.position = '';
                item.style.top = '';
                item.style.left = '';
                item.classList.remove('offset-item');
            });
        }
    }

    // Function to initialize or re-initialize the grid layout
    function initializeLayout() {
        // Handle mobile view first
        handleMobileView();
        
        // Get the container width
        const containerWidth = elem.offsetWidth;
        // Using em units for calculations
        const gutterEm = 1.5625; // 25px/16 = 1.5625em
        const gutterPx = emToPx(gutterEm);
        const halfGutterPx = gutterPx / 2;
        
        // Set width of grid items programmatically
        const gridItems = document.querySelectorAll('.grid-item');
        
        // Reset all items first
        gridItems.forEach((item, index) => {
            // Reset all inline styles that might interfere
            item.style.position = '';
            item.style.top = '';
            item.style.marginTop = '';
            
            // Check if we're on mobile breakpoint
            if (window.innerWidth <= mobileBreakpoint) {
                // For mobile: set width to 100%
                item.style.width = '100%';
            } else {
                // For desktop: calculate half width
                const itemWidth = (containerWidth / 2) - halfGutterPx;
                item.style.width = itemWidth + 'px';
            }
            
            item.style.margin = `0 0 ${gutterEm}em 0`;
            item.classList.remove('offset-item');
        });
        
        // Don't initialize Isotope in mobile view
        if (window.innerWidth <= mobileBreakpoint) {
            // If there's an existing Isotope instance, destroy it
            if (elem.isotope) {
                elem.isotope.destroy();
                elem.isotope = null;
            }
            return;
        }
        
        // Initialize Isotope first with basic settings
        var iso = new Isotope(elem, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-item',
                gutter: gutterPx
            },
            percentPosition: false,
            transitionDuration: 0 // Disable transitions initially
        });
        
        // After initial layout, position the second item
        if (window.innerWidth > mobileBreakpoint && gridItems.length > 1) {
            // Wait for initial layout to complete
            setTimeout(() => {
                const secondItem = gridItems[1];
                
                // Calculate the position in em units - 348px offset
                // Convert the fixed 348px offset to em units based on current font size
                const targetTopEm = pxToEm(348); 
                
                // Apply absolute positioning to the second item
                secondItem.style.position = 'absolute';
                secondItem.style.top = targetTopEm + 'em'; // Using em units for top position
                
                // Convert left position to em units as well
                const leftPositionPx = containerWidth/2 + halfGutterPx;
                const leftPositionEm = pxToEm(leftPositionPx);
                secondItem.style.left = leftPositionEm + 'em';
                
                secondItem.classList.add('offset-item');
                
                // Store the original em values as data attributes for recalculation
                secondItem.dataset.topEm = targetTopEm;
                secondItem.dataset.leftEm = leftPositionEm;
                
                // Force Isotope to recognize this item as special
                iso.stamp(secondItem);
                
                // Rearrange other items around this fixed position
                iso.layout();
                
                // After layout is complete, ensure the container's height is in em
                setTimeout(() => {
                    // Get computed height of the container in pixels
                    const containerHeightPx = elem.offsetHeight;
                    // Convert to em
                    const containerHeightEm = pxToEm(containerHeightPx);
                    // Set height in em units
                    elem.style.height = containerHeightEm + 'em';
                    
                    // Add a class to the container to indicate custom positioning is active
                    elem.classList.add('custom-positioned');
                }, 100);
            }, 100);
        }
        
        // Store the Isotope instance for future reference
        elem.isotope = iso;
    }
    
    // Initialize layout once all images are loaded
    window.addEventListener('load', function() {
        // Wait a bit longer to ensure everything is properly loaded
        setTimeout(() => {
            initializeLayout();
            
            // Additional reflow after a longer delay to ensure positioning
            setTimeout(() => {
                if (elem.isotope) {
                    elem.isotope.layout();
                }
            }, 500);
        }, 200);
    });
    
    // Handle window resize events - important for font-resizer compatibility
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Remove custom positioning before reinitializing
            const offsetItem = elem.querySelector('.offset-item');
            if (offsetItem) {
                offsetItem.style.position = '';
                offsetItem.style.top = '';
                offsetItem.style.left = '';
                offsetItem.classList.remove('offset-item');
            }
            
            // Reset container height
            elem.style.height = '';
            elem.classList.remove('custom-positioned');
            
            // Handle mobile view
            handleMobileView();
            
            // Reinitialize layout
            initializeLayout();
        }, 250);
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            initializeLayout();
        }, 300);
    });
    
    // Add fontResizer callback with improved recalculation
    if (typeof window.fontResizer === 'function') {
        const originalFontResizer = window.fontResizer;
        window.fontResizer = function() {
            const result = originalFontResizer.apply(this, arguments);
            
            // After font is resized, update any absolute positioned elements
            setTimeout(() => {
                // Handle mobile view
                handleMobileView();
                
                const offsetItem = document.querySelector('.offset-item');
                if (offsetItem && offsetItem.dataset.topEm) {
                    // Use the stored em values with the new font size
                    const topEm = parseFloat(offsetItem.dataset.topEm);
                    const leftEm = parseFloat(offsetItem.dataset.leftEm);
                    
                    offsetItem.style.top = topEm + 'em';
                    offsetItem.style.left = leftEm + 'em';
                }
                
                // Then refresh the overall layout
                if (elem.isotope) {
                    elem.isotope.layout();
                }
            }, 100);
            
            return result;
        };
    }
}
