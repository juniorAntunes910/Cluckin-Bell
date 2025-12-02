const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-Items")
const cartTotal = document.getElementById("cart-total")
const checkout = document.getElementById("checkout-btn")
const closeModalbtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];
// Abrir o modal do carrinho
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex"
})


// Fechar o modal quando clicar fora
cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Logica do Video Fechar Modal ao clicar em fechar 
closeModalbtn.addEventListener("click", function (event) {
    cartModal.style.display = "none"
})
/*
Minha Logica
cartModal.addEventListener("click", function(event){
    if(event.target === closeModalbtn) {
        cartModal.style.display = "none"
    }
})
    */

//Adicionar Produto ao carrinho
menu.addEventListener("click", function (event) {
    //console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn") //Classes sempre começam com ponto e Ids com Hashtag

    if (parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        //console.log(name)
        //console.log(price)

        addToCart(name, price)
    }


})
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name) // Tipo um contains

    if (existingItem) {
        //Se o item ja existe aumenta a quantidade em mais um 
        existingItem.quantity++
    }else {
        cart.push({
            name,
            price,
            quantity: 1,
        })
    }
    updateCartModal()
    updateCarCount()
    console.log(cart)
}

//Atualiza o carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML = `
    <div> 
        <div> 
            <p>${item.name}</p>
            <p>${item.quantity}</p>
            <p>R$ ${item.price}</p>
        </div>

        <div> 
            <button> 
                Remover
            </button>
        </div>
    </div>`

    cartItemsContainer.appendChild(cartItemElement)

    })
}
function updateCarCount() {
    //Aumenta a quantidade no footer 
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCounter.textContent = totalItems //Insere o valor somado para o texto do footer
}