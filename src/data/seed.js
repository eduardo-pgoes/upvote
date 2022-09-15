
// Módulo p/ mockar dados
let Seed = (function() {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }
    let products = [
        {
            id: 1,
            title: 'Fritadeira elétrica',
            description: "Lorem ipsum",
            url: "#",
            votes: generateVoteCount(),
            productImageIrl: "images/products/fritadeira-eletrica.png",
        },
        {
            id: 2,
            title: 'Teclado M-Audio Oxygen 49',
            description: "Lorem ipsum",
            url: "#",
            votes: generateVoteCount(),
            productImageIrl: "images/products/oxygen-49.png",
        },
    ];

    return { products: products };
})


export default Seed;