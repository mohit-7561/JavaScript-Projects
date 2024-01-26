let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayHomePage();
    displayBagItemCount();

}

function addToBag(itemId){
    bagItems.push(itemId);
    displayBagItemCount();
    localStorage.setItem('bagItems', JSON.stringify(bagItems));

}
function displayBagItemCount(){
    let bagElement = document.querySelector('.bagItemCount');
    if(bagItems.length > 0){
        bagElement.innerText = bagItems.length;
        bagElement.style.visibility = 'visible';

    }
    else{
        bagElement.style.visibility = 'hidden';
    }
}

function displayHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement){
        return;
    }

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
        <div class="item-container">
            <img  class="item-image" src="${item.image}"alt="item-image">
            <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
            <div class="company-name">${item.company}</div>
            <div class="product-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price" >Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-Bag" onclick = "addToBag(${item.id})">Add to Bag</button>
        </div>`
    });

    itemsContainerElement.innerHTML = innerHTML;
}

