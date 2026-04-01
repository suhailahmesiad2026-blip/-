const products = [
    // ===== الطعام والمكولات =====
    { name: "ام معتز", desc: "مطبخ ووجبات", price: "السعر حسب الطلب", image: "image/ph1.png", phone: "+96899721777", category: "food" },
    { name: "مطبخ ام مناسك", desc: "طبخ ووجبات", price: "السعر حسب الطلب", image: "image/ph3.jpeg", phone: "+96898932664", category: "food" },
    { name: "ام عمر كتشن", desc: "طبخ و وجبات", price: "السعر حسب الطلب", image: "image/ph6.jpeg", phone: "96899781097", category: "food" },
    { name: "مطبخ بنت الشرق", desc: "طبخ ووجبات", price: "السعر حسب الطلب", image: "image/ph7.jpeg", phone: "96877344337", category: "food" },
    { name: "روشا كتشن", desc: "طبخ ووجبات", price: "السعر حسب الطلب", image: "image/ph15.jpeg", phone: "96892007317", category: "food" },
    { name: "Choco Trendi", desc: "عالم مختلف من الشوكلاته", price: "السعر حسب الطلب", image: "image/ph17.jpeg", phone: "96897118933", category: "food" },

    // ===== العطور والبخور =====
    { name: "تاج النساء", desc: "بخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph2.jpeg", phone: "+96892626210", category: "perfume" },
    { name: "ZAMZAM", desc: "عطور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph4.jpeg", phone: "+96899677291", category: "perfume" },
    { name: "روز للعود والعطور", desc: "عطور وعود بروايح مميزه", price: "السعر حسب الطلب", image: "image/ph5.jpeg", phone: "+96876860608", category: "perfume" },
    { name: "CLASSIC MOOD", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph8.jpeg", phone: "96892968864", category: "perfume" },
    { name: "روايح صلاله", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph9.jpeg", phone: "96893590945", category: "perfume" },
    { name: "شموخ العز", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph10.jpeg", phone: "96899867325", category: "perfume" },
    { name: "الباسطيه", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph11.jpeg", phone: "96892959905", category: "perfume" },
    { name: "نفحه", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph18.jpeg", phone: "96893733339", category: "perfume" },
    { name: "ريتاج للكرستال", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph20.jpeg", phone: "96894058885", category: "perfume" },
    { name: "borgo", desc: "عطور وبخور بروائح مميزة", price: "السعر حسب الطلب", image: "image/ph21.jpeg", phone: "96890956262", category: "perfume" },


    // ===== عناصر أخرى =====
    { name: "The Princ", desc: "اثواب ظفاريه أنيقة", price: "السعر حسب الطلب", image: "image/ph12.jpeg", phone: "96891191208", category: "other" },
    { name: "TARA تاارا", desc: "اثواب ظفاريه أنيقة", price: "السعر حسب الطلب", image: "image/ph13.jpeg", phone: "96898926222", category: "other" },
    { name: "روية ابداعيه", desc: "تصميمات رقمية", price: "السعر حسب الطلب", image: "image/ph14.jpeg", phone: "9689552927", category: "other" },
    { name: "Buthaina BAHEED", desc: "ملصقات", price: "السعر حسب الطلب", image: "image/ph16.jpeg", phone: "96898954547", category: "other" },
    { name: "ورد المواسم", desc: "منتجات طبيعية", price: "السعر حسب الطلب", image: "image/ph19.jpeg", phone: "96896142952", category: "other" },
];

// دالة لتنسيق رقم الهاتف للواتساب
function formatPhoneNumber(phone) {
    // إزالة جميع الأحرف غير الرقمية والعلامات
    let cleaned = phone.replace(/\D/g, '');
    
    // إضافة رمز الدولة إذا لم يكن موجوداً (968 لدولة عمان)
    if (!cleaned.startsWith('968')) {
        cleaned = '968' + cleaned;
    }
    
    return cleaned;
}

// دالة لعرض المنتجات حسب الفئة
function displayProducts() {
    const categories = {
        food: document.getElementById("food-products"),
        perfume: document.getElementById("perfume-products"),
        other: document.getElementById("other-products")
    };

    // مسح المحتوى الحالي
    Object.values(categories).forEach(container => {
        container.innerHTML = "";
    });

    // عرض المنتجات في فئاتها
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
               اطلب عبر واتساب
            </a>
        `;

        categories[product.category].appendChild(div);
    });
}

// عرض المنتجات عند تحميل الصفحة
displayProducts();
