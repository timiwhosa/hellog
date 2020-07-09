var html1 = `
        <div class="step-logo">
            <img src="/img/nav/man4.jpg" alt="">
            <b>STEPHUB</b>
        </div>
        <div class="nav-right">
            <ul>
                <li class="signup mini-nav-list">
                    <a href="/signup">Signup</a>
                </li>
                <li class="mini-nav-list">
                    <a href="/login">Login</a>
                </li>
                <li class="mini-nav-list">
                    <a href="/sell">Sell</a>
                </li>
                <li class="nav-menu"> <span></span> <span></span> <span></span> </li>
            </ul>
        </div>
        
`;

var html2 = `<ul>
            <li id="home" class="mini-nav-list"><a href="/home">Home</a></li>
            <li id="category" class="mini-nav-list"><a href="/category">Category</a></li>
            <li id="high-rating" class="mini-nav-list"><a href="/high-rating">High rating</a></li>
            <li ><input type="text" name="search" id="search-input" autofocus></li>
            <li id="community" class="mini-nav-list"><a href="/community">Community</a></li>
            <li id="videos" class="mini-nav-list"><a href="/videos">Videos</a></li>
            <li id="cart" class="cart-notification mini-nav-list"><a href="/cart">Cart</a> <span id="cartno"> 0</span></li>
            <li id="mini-nav-menu" onclick="showminisidenav()"> <span></span> <span></span> <span></span> </li>
        </ul>`;

var nav = document.getElementById("nav");
var mininav = document.getElementById("mini-nav");

nav.innerHTML = html1;
mininav.innerHTML = html2;
if (window.location.pathname == "/") {
    document.getElementById("home").style.borderBottom = "3px solid var(--myyello)";
}
if(window.location.pathname == "/home"){
    document.getElementById("home").style.borderBottom = "3px solid var(--myyello)";
}
if (window.location.pathname == "/category") {
    document.getElementById("category").style.borderBottom = "3px solid var(--myyello)";
}
if (window.location.pathname == "/high-rating") {
    document.getElementById("high-rating").style.borderBottom = "3px solid var(--myyello)";
}
if (window.location.pathname == "/community") {
    document.getElementById("community").style.borderBottom = "3px solid var(--myyello)";
}
if (window.location.pathname == "/videos") {
    document.getElementById("videos").style.borderBottom = "3px solid var(--myyello)";
}
if (window.location.pathname == "/cart") {
    document.getElementById("cart").style.borderBottom = "3px solid var(--myyello)";
}


var navitem = `
                <div class="cover" id="cover2" onclick="showminisidenav()"></div>
                <div class="mini-sidenav" id="mini-sidenav">
                        <a href="/home"><p>Home</p></a>
                        <a href="/category"><p>Category</p></a>
                        <a href="/highrating"><p>High rating</p></a>
                        <a href="/community"><p>Community</p></a>
                        <a href="/videos"><p>Videos</p></a>
                        <a href="/cart"><p> Cart <span id="cartno2"> 0</span></p></a>
                    <p> <a href="/login"><span class="side-nav-box"> Login </span></a></p>
                    <div> <a href="/signup"><span class="side-nav-box mini-signup"> Signup </span></a> <a href="/sell"><span class="side-nav-box"> Sell </span></a></div>
                </div>

                `;
mininav.innerHTML += navitem;

var showminisidenav1 = 1;
function showminisidenav(){
    if (showminisidenav1 === 1) {
        document.getElementById("mini-sidenav").style.right = "2vw";
        // document.getElementById("cover2").style.right = "0";
        document.getElementById("cover2").style.left = "0";
        showminisidenav1=2;
    }
    else if (showminisidenav1 === 2) {
        document.getElementById("mini-sidenav").style.right = "-200vw";
        // document.getElementById("cover2").style.right = "-200vw";
        document.getElementById("cover2").style.left = "-200vw";
        showminisidenav1 =1;
    }
}