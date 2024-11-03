const itemList = document.querySelector('.content-itemList');
const searchField = document.querySelector('.content-menu-search');
const totalPriceField = document.querySelector('.content-totalprice');
const sortButton = document.querySelector('.content-menu-button:nth-child(2)');
const calculateButton = document.querySelector('.content-menu-button:nth-child(3)');

function renderData(items) {
    itemList.innerHTML = "";
    items.forEach(item => {
        itemList.insertAdjacentHTML(
            "beforeend", 
            `<div class="content-item">
                <div>Name: ${item.Name}</div>
                <div>Price: ${item.price} USD</div>
                <button class="edit-button" data-id="${item.id}">Edit</button>
                <button class="remove-button" data-id="${item.id}">Remove</button>
            </div>`
        );
    });

    // Add event listeners to all "Edit" buttons
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', handleEdit);
    });
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', handleRemove);
    });
}

function handleEdit(event) {
    const gemId = parseInt(event.target.getAttribute('data-id'));
    const gem = data.find(item => item.id === gemId);

    const newName = prompt('Edit Gem Name:', gem.Name);
    const newPrice = prompt('Edit Gem Price (in dollars):', gem.price);

    if (newName && newName.length >= 3 && newName.length <= 20 && newPrice > 0 && newPrice <= 100000) {
        gem.Name = newName;
        gem.price = parseFloat(newPrice);

        saveData();
        renderData(data);
    } else {
        alert('Invalid input. Please enter a valid name and price.');
    }
}

function handleRemove(event) {
    const gemId = parseInt(event.target.getAttribute('data-id'));
    const gemIndex = data.findIndex(item => item.id === gemId);

    if (gemIndex > -1) {
        data.splice(gemIndex, 1);

        saveData();
        renderData(data);
    } else {
        alert('Gem not found.');
    }
}

function saveData() {
    localStorage.setItem('gems', JSON.stringify(data));
}

let isSorted = false;
sortButton.addEventListener('click', () => {
    if (isSorted) {
        renderData(data);
    } else {
        const sorted = [...data].sort((a, b) => a.Name.localeCompare(b.Name));
        renderData(sorted);
    }
    isSorted = !isSorted;
});

calculateButton.addEventListener('click', () => {
    const totalPrice = data.reduce((sum, item) => sum + item.price, 0);
    totalPriceField.textContent = `Total Price: ${totalPrice} USD`;
});

searchField.addEventListener('input', () => {
    const query = searchField.value.toLowerCase();
    const filtered = data.filter(item => item.Name.toLowerCase().includes(query));
    renderData(filtered);
});

renderData(data);
