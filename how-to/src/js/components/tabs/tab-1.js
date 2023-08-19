


function customTab1(c__list, c__button, c__pane  ) {

    let customTabList = document.querySelector(c__list),
        tabListButtons = document.querySelectorAll(c__button),
        tabPanes = document.querySelectorAll(c__pane);

    customTabList.addEventListener('click', function(e) {
        // console.log(this);
        // console.log(e.target);
        let dataId = e.target.dataset.id,
            currentTabPane = document.querySelector(`#${dataId}`);
        // console.log(dataId);
        // console.log(currentTabPane);

        // for tabs
        if(!e.target.classList.contains('active')) {
            tabListButtons.forEach(function(tabButton) {
                tabButton.classList.remove('active')
            });
            e.target.classList.add('active');
        }
        
        // for tab panes
        if(!currentTabPane.classList.contains('active')) {
            tabPanes.forEach(function(tabPane) {
                tabPane.classList.remove('active')
            })
            currentTabPane.classList.add('active');
        }

    });


}

export default customTab1;
