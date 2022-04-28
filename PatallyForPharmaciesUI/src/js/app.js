document.getElementById("toggleProfile").addEventListener("click", function () {
    document.querySelector(".profile__drawer").classList.toggle("show");
});

// App tab------
if (document.getElementById("app__tab-header")) {
    let tabs = document.getElementById("app__tab-header").children;
    let tabcontents = document.getElementById("app__tab-content").children;

    let navigationTabs = function () {
        let tabchange = this.mynum;
        for (let int = 0; int < tabcontents.length; int++) {
            tabcontents[int].className = " tabcontent";
            tabs[int].className = " tabtitle";
        }
        tabcontents[tabchange].classList.add("tab-active");
        this.classList.add("current-tab");
        let offsetCount =
            document.querySelector(".app__header").offsetHeight +
            document.getElementById("app__tab-header").offsetHeight +
            20;
        window.scrollTo(0, document.querySelector("#app__tab-content").offsetTop - offsetCount);
    };

    for (let index = 0; index < tabs.length; index++) {
        tabs[index].mynum = index;
        tabs[index].addEventListener("click", navigationTabs, false);
    }
}

// Dunamically add body padding based on header------------
let appHeader = document.querySelector(".app__header");
let appTabs = document.getElementById("app__tab-header");
if (appTabs) {
    document.body.style.paddingTop = appHeader.offsetHeight + appTabs.offsetHeight + "px";
} else {
    document.body.style.paddingTop = appHeader.offsetHeight + "px";
}

// Dynamically add top css for Navigation tabs--------

if (document.getElementById("app__tab-header")) {
    document.getElementById("app__tab-header").style.top = appHeader.offsetHeight + "px";
}
