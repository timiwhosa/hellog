


window.onscroll = function () {
    scrollshow()
};

function scrollshow() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollup").style.display = "flex";
    }
    else {
        document.getElementById("scrollup").style.display = "none";
    }
}

function scrollup() {
    document.documentElement.scrollBy(
        {
            top: `-${document.documentElement.scrollTop}`
        }
    );
}