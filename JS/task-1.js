const header_container = document.querySelector(".js-header");
header_container.classList.add("flex");
const headerEl = `
        <div class="menu">
            <ul class="flex">
                <li><a href="#">WOMAN</a></li>
                <li><a href="#">MEN</a></li>
                <li><a href="#">ALL</a></li>
            </ul>
        </div>
            <h2><a href=""><span>your</span>SNEAKER</a></h2>
            <div class="icons flex">
                <a href="#"><img src="./img/войти.png" alt=""></a>
                <a href="#"><img src="./img/поиск.png" alt=""></a>
                <a href="#"><img src="./img/корзина.png" alt=""></a>
            </div>
`;
header_container.insertAdjacentHTML("beforeend", headerEl);

const footer_container = document.querySelector(".js-footer");
footer_container.classList.add("flex");
const footerEl = `
        <div class="footer_menu">
            <ul>
            <li><a href="#">ALL</a></li>
            <li><a href="#">WOMAN</a></li>
            <li><a href="#">MEN</a></li>
        </ul>
        </div>
        <img src="./img/Group 65.png" alt="">
        <div class="footer_menu">
            <ul>
            <li><a href="#">WORCOUT</a></li>
            <li><a href="#">RUN</a></li>
            <li><a href="#">FOOTBALL</a></li>
        </ul>
        </div>
`;
footer_container.insertAdjacentHTML("beforeend", footerEl);
