const menu = document.getElementById("menu")
const cartBtn= document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-Items")
const cartTotal = document.getElementById("cart-total")
const checkout = document.getElementById("checkout-btn")
const closeModalbtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

// Abrir o modal do carrinho
cartBtn.addEventListener("click", function() { 
    cartModal.style.display = "flex"
})


// Fechar o modal quando clicar fora
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Logica do Video Fechar Modal ao clicar em fechar 
closeModalbtn.addEventListener("click", function(event){
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

//Adicionar Produto
menu.addEventListener("click", function(event){
    //console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn") //Classes sempre começam com ponto e Ids com Hashtag

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parentButton.getAttribute("data-price")
        console.log(name)
        console.log(price)
    }

})
