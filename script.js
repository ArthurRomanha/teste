let divContent = document.querySelector("#containerDesserts");
fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.desserts.map((dessert) => {
            divContent.innerHTML += 
        `<div class="desserts">
            <img src="${dessert.image.desktop}" class="imageDessert">
            <h5 class="simpleNameDessert">${dessert.category}</h5>
            <h3 class="nameDessert">${dessert.name}</h3>
            <h3 class="price">R$ ${dessert.price}</h3>
        </div>`;
        })
    })
})
const addToCart = () => {

}