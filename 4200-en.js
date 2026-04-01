const products = [
    // ===== Food and Ingredients =====
    { name: "Um Muataz", desc: "Kitchen and Meals", price: "Price Upon Request", image: "image/ph1.png", phone: "+96899721777", category: "food" },
    { name: "Um Manasik Kitchen", desc: "Cooking and Meals", price: "Price Upon Request", image: "image/ph3.jpeg", phone: "+96898932664", category: "food" },
    { name: "Umm Omar Kitchen", desc: "Cooking and Meals", price: "Price Upon Request", image: "image/ph6.jpeg", phone: "96899781097", category: "food" },
    { name: "Bint Al-Sharq Kitchen", desc: "Cooking and Meals", price: "Price Upon Request", image: "image/ph7.jpeg", phone: "96877344337", category: "food" },
    { name: "Rosha Kitchen", desc: "Cooking and Meals", price: "Price Upon Request", image: "image/ph15.jpeg", phone: "96892007317", category: "food" },
    { name: "Choco Trendi", desc: "A Different World of Chocolate", price: "Price Upon Request", image: "image/ph17.jpeg", phone: "96897118933", category: "food" },

    // ===== Perfumes and Incense =====
    { name: "Taag Alnsaa", desc: "Incense with Unique Scents", price: "Price Upon Request", image: "image/ph2.jpeg", phone: "+96892626210", category: "perfume" },
    { name: "ZAMZAM", desc: "Perfumes with Unique Scents", price: "Price Upon Request", image: "image/ph4.jpeg", phone: "+96899677291", category: "perfume" },
    { name: "Rose Oud and Perfumes", desc: "Perfumes and Oud with Unique Scents", price: "Price Upon Request", image: "image/ph5.jpeg", phone: "+96876860608", category: "perfume" },
    { name: "CLASSIC MOOD", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph8.jpeg", phone: "96892968864", category: "perfume" },
    { name: "Rwaih Salalah ", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph9.jpeg", phone: "96893590945", category: "perfume" },
    { name: "Shamok ALoaz", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph10.jpeg", phone: "96899867325", category: "perfume" },
    { name: "ALbastiaa", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph11.jpeg", phone: "96892959905", category: "perfume" },
     { name: "NAFHA", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph18.jpeg", phone: "96893733339", category: "perfume" },
     { name: "Retag Llkrestal", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph20.jpeg", phone: "96894058885", category: "perfume" },
     { name: "borgo", desc: "Perfumes and Incense with Unique Scents", price: "Price Upon Request", image: "image/ph21.jpeg", phone: "96890956262", category: "perfume" },

    // ===== Other Items =====
    { name: "The Princ", desc: "Elegant Dhofari Abayas", price: "Price Upon Request", image: "image/ph12.jpeg", phone: "96891191208", category: "other" },
    { name: "TARA Taara", desc: "Elegant Dhofari Abayas", price: "Price Upon Request", image: "image/ph13.jpeg", phone: "96898926222", category: "other" },
    { name: "Badoor Design", desc: "Digital Designs", price: "Price Upon Request", image: "image/ph14.jpeg", phone: "9689552927", category: "other" },
    { name: "Buthaina BAHEED", desc: "Stickers", price: "Price Upon Request", image: "image/ph16.jpeg", phone: "96898954547", category: "other" },
     { name: "Rose Seasons", desc: "Natural Products", price: "Price Upon Request", image: "image/ph19.jpeg", phone: "96896142952", category: "other" },
];

// Function to format phone number for WhatsApp
function formatPhoneNumber(phone) {
    // Remove all non-numeric characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Add country code if not present (968 for Oman)
    if (!cleaned.startsWith('968')) {
        cleaned = '968' + cleaned;
    }
    
    return cleaned;
}

// Function to display products by category
function displayProducts() {
    const categories = {
        food: document.getElementById("food-products"),
        perfume: document.getElementById("perfume-products"),
        other: document.getElementById("other-products")
    };

    // Clear current content
    Object.values(categories).forEach(container => {
        container.innerHTML = "";
    });

    // Display products in their categories
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        const whatsappPhone = formatPhoneNumber(product.phone);
        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p><strong>${product.price}</strong></p>
            <a class="btn"
               href="https://api.whatsapp.com/send?phone=${whatsappPhone}"
               target="_blank">
               Order via WhatsApp
            </a>
        `;

        categories[product.category].appendChild(div);
    });
}

// Display products when page loads
displayProducts();
