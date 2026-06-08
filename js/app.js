
// TR: ANA MOTOR KONTROLLERİ - Ürünleri ekrana basar ve filtreleri yönetir.
// EN: CORE ENGINE CONTROLLER: Dynamic layout rendering and state management.

// TR: HTML'deki ürünlerin dizileceği alanı, filtre butonlarını ve sepet sayacını yakalıyoruz
const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCount = document.getElementById('cart-count'); // SEPET İÇİN EKLENDİ

// TR: Tarayıcı hafızasından sepeti çek veya boş dizi oluştur (SEPET İÇİN EKLENDİ)
let cart = JSON.parse(localStorage.getItem('studio_cafe_cart')) || [];

// TR: Veri tabanındaki ürünleri HTML kartlarına çevirip ekrana basan fonksiyon
function displayProducts(productsList) {
    // TR: Önce içeriyi temizliyoruz ki eski ürünler üst üste binmesin
    productGrid.innerHTML = "";

    productsList.forEach(product => {
        // TR: Her ürün için yeni bir div kutusu oluşturuyoruz
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // SİHİRLİ DOKUNUŞ: Ürünün tek resmi mi var yoksa dizi halinde çoklu resmi mi var kontrol ediyoruz
        let resimListesi = [];
        
        if (product.images && Array.isArray(product.images)) {
            // Eğer ürün t-shirt gibi çoklu resme (images) sahipse aynen alıyoruz
            resimListesi = product.images;
        } else if (product.image) {
            // Eğer ürün kahve gibi tek resme (image) sahipse onu tek elemanlı dizi yapıyoruz
            resimListesi = [product.image];
        } else {
            // Hiçbiri yoksa patlamasın diye yedek görsel
            resimListesi = ["assets/default.jpg"];
        }

        const anaResim = resimListesi[0];
        const digerResimler = resimListesi.slice(1);

        // TR: Ürün kartının iç şablonunu (HTML tasarımını) giydiriyoruz
        // SEPET İÇİN DOKUNUŞ: Butona data-name ve data-price niteliklerini de ekledik
        productCard.innerHTML = `
          <div class="product-image-wrapper">
            <a href="${anaResim}" data-fancybox="urun-${product.id}" data-caption="${product.name}">
              <img src="${anaResim}" alt="${product.name}" class="product-img">
            </a>

            ${digerResimler.map((resimYolu, index) => `
              <a href="${resimYolu}" data-fancybox="urun-${product.id}" data-caption="${product.name} - Görsel ${index + 2}" style="display: none;"></a>
            `).join('')}
          </div>

          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="product-desc">${product.description}</p>
            <div class="product-meta">
              <span class="product-price">${product.price.toFixed(2)} TL</span>
              <button class="add-to-cart-btn" 
                      data-id="${product.id}" 
                      data-name="${product.name}" 
                      data-price="${product.price}">
                      Sepete Ekle
              </button>
            </div>
          </div>
        `;

        // TR: Oluşturduğumuz bu kartı HTML'deki ana ızgaranın (grid) içine fırlatıyoruz
        productGrid.appendChild(productCard);
    });

    // SİHİRLİ DOKUNUŞ 2: Ürünler ekrana basıldıktan sonra Fancybox bağlarını tazeliyoruz
    if (typeof Fancybox !== "undefined") {
        Fancybox.unbind("[data-fancybox]");
        Fancybox.bind("[data-fancybox^='urun-']", {
            Infinite: true
        });
    }

    // SEPET İÇİN DOKUNUŞ 3: Kartlar ekrana basıldıktan sonra butonların tıklanma özelliğini bağlıyoruz
    setupAddToCartEventListeners();
}

// TR: Filtreleme butonlarına tıklanınca çalışacak olan dinleyici sistem
function initFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // TR: Önce tüm butonlardan 'active' (yeşil/kahve renk) sınıfını siliyoruz
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // TR: Sadece tıklanan butona 'active' sınıfını veriyoruz
            e.target.classList.add('active');

            // TR: Tıklanan butonun gizli kategorisini alıyoruz (all, coffee, dessert vb.)
            const selectedCategory = e.target.getAttribute('data-filter');

            // TR: Eğer 'Tüm Ürünler' seçildiyse hepsini göster, yoksa sadece o kategoriyi filtrele
            if (selectedCategory === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(item => item.category === selectedCategory);
                displayProducts(filtered);
            }
        });
    });
}

// ==========================================
// SEPET YÖNETİMİ FONKSİYONLARI (YENİ EKLENDİ)
// ==========================================

// TR: "Sepete Ekle" butonlarını dinleyen fonksiyon
function setupAddToCartEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));

            // Sepette bu üründen zaten var mı kontrol et
            const existingItem = cart.find(item => item.id == id);

            if (existingItem) {
                existingItem.quantity += 1; // Varsa adedini artır
            } else {
                // Yoksa yeni obje olarak sepet dizisine ekle
                cart.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            // Güncel sepeti localStorage'a yaz ve sayaç sayısını yenile
            localStorage.setItem('studio_cafe_cart', JSON.stringify(cart));
            updateCartBadge();

            alert(`${name} sepete eklendi!`);
        });
    });
}

// TR: Sağ üstteki navbar'da duran "Sepet (X)" sayısını güncelleyen fonksiyon
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// TR: Tarayıcı HTML sayfasını tamamen yüklediği an fonksiyonları tetikleyip siteyi açıyoruz
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    initFilters();
    updateCartBadge(); // Sayfa açıldığında eski sepet sayısını hafızadan çekip yazar
});
// SEPET MODAL ELEMENTLERİ
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.querySelector('.cart-btn'); // index.html'deki sepet butonu
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');

// TR: Sepet butonuna tıklanınca modalı aç ve sepeti listele
cartBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Sayfa yukarı fırlamasın diye
    displayCartItems();
    cartModal.style.display = 'flex';
});

// TR: Kapatma butonuna basınca modalı gizle
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// TR: Dışarıya tıklanınca da modal kapansın
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// TR: Sepetteki ürünleri modal içine dinamik basan fonksiyon
// TR: Sepetteki ürünleri modal içine dinamik basan fonksiyon (GÜNCELLENDİ)
function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888;">Sepetiniz henüz boş.</p>';
        cartTotalPrice.textContent = '0.00 TL';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // SİLME BUTONU DOKUNUŞU: Her satıra 'cart-item-remove' butonu ekledik
        const itemHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.quantity} x ${item.price.toFixed(2)} TL</p>
                </div>
                <div class="cart-item-right">
                    <span class="cart-item-price">${itemTotal.toFixed(2)} TL</span>
                    <button class="cart-item-remove" data-id="${item.id}">❌</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    cartTotalPrice.textContent = `${total.toFixed(2)} TL`;

    // Satırlar ekrana basıldıktan sonra silme butonlarını aktif ediyoruz
    setupRemoveFromCartEventListeners();
}

// TR: Sepetten ürün silme/azaltma işlemlerini yöneten YENİ fonksiyon
function setupRemoveFromCartEventListeners() {
    const removeButtons = document.querySelectorAll('.cart-item-remove');

    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');

            // Sepetteki ilgili ürünü buluyoruz
            const itemIndex = cart.findIndex(item => item.id == id);

            if (itemIndex !== -1) {
                // Eğer ürünün adedi 1'den büyükse adet azalt, 1 ise tamamen sepetten çıkar
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else {
                    cart.splice(itemIndex, 1); // Diziden tamamen uçur
                }
            }

            // Hafızayı kaydet, sepet listesini yenile ve sağ üstteki sayacı güncelle
            localStorage.setItem('studio_cafe_cart', JSON.stringify(cart));
            displayCartItems();
            updateCartBadge();
        });
    });
}

// Siparişi tamamla butonu simülasyonu
document.getElementById('checkout-btn').addEventListener('click', () => {
    if(cart.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }
    alert("Siparişiniz başarıyla alındı! Teşekkür ederiz.");
    cart = []; // Sepeti temizle
    localStorage.removeItem('studio_cafe_cart');
    updateCartBadge();
    cartModal.style.display = 'none';
});