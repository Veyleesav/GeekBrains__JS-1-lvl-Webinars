let cartTotal={
 items:0,
 total:0
};
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    const goodsPics=document.querySelectorAll('.good-pic');
    for (let i=0; i<goodsPics.length;i++){ // доработка карточек товара для разного цвета "картинок"
        goodsPics[i].style.backgroundColor="#"+((1<<24)*Math.random()|0).toString(16);
    }
    //основное тело задачи
    let cart = document.createElement('div');
    cart.classList.add('cart');
    cart.classList.add('hidden');
    document.querySelector('.wrapper').insertBefore(cart,document.getElementsByTagName('main')[0]); // вставляем корзину перед тегом мейн
    let cartWrap = document.createElement('div');
    cartWrap.classList.add('cart-wrap');
    let cartTotalPrice = document.createElement('div');
    cartTotalPrice.classList.add('cart-total-price');
    cart.appendChild(cartWrap);
    cart.appendChild(cartTotalPrice);
    const goods=document.querySelectorAll('.good-card');
    for (let i=0; i<goods.length;i++){ // доработка карточек товара для разного цвета "картинок"
        goods[i].addEventListener('click',function () {
            let price = Number(this.dataset.content);
            let name = this.dataset.name;
                cart.classList.remove('hidden');

            if (!cartTotal.hasOwnProperty(name)){
                cartTotal[name]={
                    name: name,
                    price: price,
                    quantity:1
                };
                cartTotal.total+=price;
                cartTotal.items++;
                console.log(cartTotal);
                let cartName = document.createElement('div');
                cartName.classList.add('cart-name');
                let cartQ = document.createElement('div');
                cartQ.classList.add('cart-quantity');
                cartName.innerText=`'${cartTotal[name].name}'`;
                cartQ.innerText=` quantity: ${cartTotal[name].quantity}; Price for 1 item:$${price}; `;
                cartQ.id=`${name}-q`;
                cartTotalPrice.innerHTML=`Total price: $<b>${cartTotal.total}</b>`;
                cartTotalPrice.id=`price`;
                var cartString = document.createElement('div');
                cartString.classList.add('cart-string');
                cartWrap.appendChild(cartString);
                cartString.appendChild(cartName);
                cartString.appendChild(cartQ);
            }else if(cartTotal.hasOwnProperty(name)){
                cartTotal[name].price+=price;
                cartTotal[name].quantity++;
                cartTotal.total+=price;
                cartTotal.items++;
                let cartTotalPrice = document.getElementById(`price`);
                cartTotalPrice.innerHTML=`Total price: $<b>${cartTotal.total}</b>`;
                let cartQ = document.getElementById(`${name}-q`);
                cartQ.innerText=` quantity: ${cartTotal[name].quantity}; Price for 1 item:$${price}; `;
            }
        });
    }
}