
window.onscroll = () => {
    fixarHeader();
};
const header = document.getElementById("header");
const sticky = header.offsetTop;


const fixarHeader = () => {
    window.pageYOffset > 140 ? header.classList.add("sticky") : header.classList.remove("sticky");
}

const btnLogo = document.querySelector(".btnWave");
btnLogo.addEventListener("click", ()=> {
    window.location.href = "index.html";
});

/* <---------- COEXAO JSON ----------------->
fetch("js/main.json")
                .then(response => response.json())
                .then(data => {
                
                })

<-------------------------------------------->*/

const allCards = document.querySelector("#allCards")
const cards = allCards.querySelectorAll("div.card")

const showAllItems = () => {
    cards.forEach(card => card.classList.remove("hide"))
}

const hideAllItems = () => {
    cards.forEach(card => card.classList.add("hide"))
}

const filterData = (btn) => {
    cards.forEach(cards => {
        if(cards.className.includes(btn)){
            cards.classList.remove("hide")
        }
    })
}
const clickButton = (filter) => {
    hideAllItems()
    filterData(filter)
}


   

