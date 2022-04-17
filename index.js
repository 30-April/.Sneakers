const wrapper = document.querySelector(".sliderWrapper");
const navMenu = document.querySelectorAll(".navMenu");

// Array of the product
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 199,
        color: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },

    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        color: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },

    {
        id: 3,
        title: "Blazer",
        price: 109,
        color: [
            {
                code: "lightgrey",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },

    {
        id: 4,
        title: "Crater",
        price: 129,
        color: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgrey",
                img: "./img/crater2.png"
            }
        ]
    },

    {
        id: 5,
        title: "Hippie",
        price: 99,
        color: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

navMenu.forEach((item,index) =>{
    item.addEventListener("click", () =>{
        // mereset pemilihan size
        currentProductSize.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });


        // change the slide when we clicked the menu
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //chane the choosenProduct
        choosenProduct = products[index]

        //change the current product to the choosen product
        currentProductImg.src = choosenProduct.color[0].img; 
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;

        //assign new color to the current product
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.color[index].code;
        })
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        // mereset background color of size that choosen
        currentProductSize.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        currentProductImg.src = choosenProduct.color[index].img;
    });
});

currentProductSize.forEach((size, index) => {
    size.addEventListener("click", ()=>{
        // mereset background color of size that choosen
        currentProductSize.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const paymentButton = document.querySelector(".productBuy");
const payment = document.querySelector(".productPayment");
const close = document.querySelector(".close");

paymentButton.addEventListener("click", () => {
    payment.style.display = "flex";
})

close.addEventListener("click", () => {
    payment.style.display = "none";
})