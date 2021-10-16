let shoppingList = document.querySelector('ul');
let itemInput = document.querySelector('input');
let addItem = document.querySelector('button');

addItem.addEventListener('click', add);

function add() {
    let itemName = itemInput.value;
    itemInput.textContent = '';
    let itemList = document.createElement('li');
    let itemSpan = document.createElement('span');
    let itemButton = document.createElement('button');
    itemList.appendChild(itemSpan);
    itemList.appendChild(itemButton);
    itemSpan.textContent = itemName;
    itemButton.textContent = 'Delete';
    shoppingList.appendChild(itemList);
    itemButton.onclick = function () {
        shoppingList.removeChild(itemList)
    }
    itemInput.focus();
}