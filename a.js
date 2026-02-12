const productData = [

    {
        brand: "Apple",
        name: "realmegt",
        title: "Realme GT Neo 5",
        des: "240W fast charging beast",
        price: "₹36999",
        img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    },
    {
        brand: "Samsung",
        name: "opporeno",
        title: "Oppo Reno 10 Pro+",
        des: "Periscope zoom camera with sleek design",
        price: "₹54999",
        img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb"
    },
    {
        brand: "Samsung",
        name: "vivoV29",
        title: "Vivo V29 Pro",
        des: "Aura light portrait camera",
        price: "₹39999",
        img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },
    {
        brand: "iQOO",
        name: "iqoo11",
        title: "iQOO 11 5G",
        des: "Gaming phone with 144Hz AMOLED",
        price: "₹59999",
        img: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    },
    {
        brand: "Motorola",
        name: "motorolaedge",
        title: "Motorola Edge 40",
        des: "Curved pOLED display with Dimensity 8020",
        price: "₹29999",
        img: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00"
    },
    {
        brand: "Asus",
        name: "asusrog",
        title: "Asus ROG Phone 7",
        des: "Ultimate gaming performance phone",
        price: "₹74999",
        img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02"
    },
    {
        brand: "Samsung",
        name: "sonyXperia",
        title: "Sony Xperia 1 V",
        des: "Pro camera features with 4K OLED display",
        price: "₹139999",
        img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },
    {
        brand: "Samsung",
        name: "huaweiP60",
        title: "Huawei P60 Pro",
        des: "Ultra lighting XMAGE camera system",
        price: "₹99999",
        img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
    },
    {
        brand: "Redmi",
        name: "redminote13",
        title: "Redmi Note 13 Pro+",
        des: "200MP camera with curved AMOLED",
        price: "₹32999",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        brand: "Infinix",
        name: "infinixzero",
        title: "Infinix Zero Ultra",
        des: "180W Thunder charge smartphone",
        price: "₹29999",
        img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    },
    {
        brand: "Samsung",
        name: "tecnoPhantom",
        title: "Tecno Phantom X2 Pro",
        des: "Retractable portrait lens camera",
        price: "₹49999",
        img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
    },
    {
        brand: "Samsung",
        name: "lavaAgni",
        title: "Lava Agni 2",
        des: "Indian flagship with curved AMOLED",
        price: "₹21999",
        img: "https://images.unsplash.com/photo-1580913428706-c311e67898b3"
    }
];

const uniqueBrands = [...new Set(productData.map(product => product.brand))];
console.log(uniqueBrands)
console.log(productData.filter(({brand})=>brand=='Samsung'))
