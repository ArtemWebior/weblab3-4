const savedData = localStorage.getItem('gems');
const data = savedData ? JSON.parse(savedData) : [
    { id: 1, Name: "Diamond", price: 100000 },
    { id: 2, Name: "Topaz", price: 15000 },
    { id: 3, Name: "Emerald", price: 35000 },
    { id: 4, Name: "Rubin", price: 25000 },
    { id: 5, Name: "Onyx", price: 20000 },
];

function saveData() {
    localStorage.setItem('gems', JSON.stringify(data));
}
