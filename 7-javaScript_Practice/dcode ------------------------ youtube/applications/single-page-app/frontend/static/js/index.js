

// page router
const router = async ()=> {
    const routes = [
        { path: "/", view: ()=> console.log("viewing dashboard") },
        { path: "/posts", view: ()=> console.log("viewing posts") },
        { path: "/settings", view: ()=> console.log("viewing settings")}
    ];

    // test each route
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    // console.log(potentialMatches);

    let match = potentialMatches.find(function(pm) {
        return (
            pm.isMatch
        )
    });

    
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    console.log(match.route.view())

};


const navigateTo = url=> {
    history.pushState(null, null, url)
    router();
}


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(e) {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});