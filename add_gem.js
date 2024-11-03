const form = document.getElementById('addGemForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('gemName').value.trim();
    const price = document.getElementById('gemPrice').value;

    if (name.length < 4 || name.length > 25) {
        alert('Gem name must be between 4 and 25 characters.');
        return;
    }

    if (price <= 999 || price > 100000) {
        alert('Gem price must be between 1000 and 100000 dollars.');
        return;
    }

    data.push({
        id: data.length + 1,
        Name: name,
        price: parseFloat(price)
    });

    saveData();
    alert('Gem added successfully!');
    form.reset();  
    window.location.href = 'lab4.html';
});
