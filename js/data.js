
// TR: GERÇEK SİMENDİFER CAFE MENÜ VERİ TABANI
// EN: REAL SIMENDIFER CAFE MENU MOCK DATABASE

const products = [
    // --- ESPRESSO BAZLI KAHVELER (Category: coffee) ---
    { id: 1, name: "Espresso", category: "coffee", price: 140.00, image: "assets/espresso.webp", description: "Yoğun ve gövdeli klasik espresso shot." },
    { id: 2, name: "Americano", category: "coffee", price: 160.00, image: "assets/americano.jpeg", description: "Espresso üzerine eklenen sıcak su ile yumuşatılmış içim." },
    { id: 3, name: "Cortado", category: "coffee", price: 180.00, image: "assets/cortado.jpeg", description: "Eşit miktarda espresso ve sıcak süt kreması dengesi." },
    { id: 4, name: "Cappuccino", category: "coffee", price: 180.00, image: "assets/cappucino.jpeg", description: "Yoğun süt köpüğü ile hazırlanan geleneksel İtalyan lezzeti." },
    { id: 5, name: "Flat White", category: "coffee", price: 180.00, image: "assets/flatWhite.jpeg", description: "Double shot espresso ve kadifemsi ince süt kreması." },
    { id: 6, name: "Latte", category: "coffee", price: 180.00, image: "assets/latte.jpeg", description: "Yumuşak içimli bol sütlü artisan latte." },
    { id: 7, name: "Mocha", category: "coffee", price: 210.00, image: "assets/mocha.jpeg", description: "Çikolata sosu, espresso ve sıcak sütün enfes uyumu." },
    { id: 8, name: "White Chocolate Mocha", category: "coffee", price: 210.00, image: "assets/whiteChocolateMocha.jpeg", description: "Beyaz çikolata aromalı espresso ve sıcak süt." },
    { id: 9, name: "Vanilla Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Premium vanilya şurubu ile tatlandırılmış latte." },
    { id: 10, name: "Çikolata Fındık Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Yoğun çikolata ve fındık aromasının sütlü espresso ile buluşması." },
    { id: 11, name: "Pumpkin Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Balkabağı baharatları ile sonbahar esintili latte." },
    { id: 12, name: "Toffeenut Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Karamelize tereyağı ve fındık notalı özel tat." },
    { id: 13, name: "Caramel Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Tatlı karamel şurubu ile zenginleştirilmiş latte." },
    { id: 14, name: "Fındık Latte", category: "coffee", price: 210.00, image: "assets/flavourLatte.jpeg", description: "Klasik fındık şurubu aromalı yumuşak latte." },

    // --- SOĞUK KAHVELER (Category: coffee) ---
    { id: 15, name: "Ice Espresso", category: "coffee", price: 150.00, image: "assets/iceEspresso.jpeg", description: "Buzlu, canlandırıcı double shot espresso." },
    { id: 16, name: "Ice Americano", category: "coffee", price: 170.00, image: "assets/iceAmericano.jpeg", description: "Buz gibi su ve espressonun ferahlatıcı uyumu." },
    { id: 17, name: "Ice Cortado", category: "coffee", price: 200.00, image: "assets/iceCortado.jpeg", description: "Soğuk süt kreması ve espresso buz küpleriyle." },
    { id: 18, name: "Ice Cappuccino", category: "coffee", price: 200.00, image: "assets/iceCappucino.jpeg", description: "Bol soğuk süt köpüklü ferah kahve." },
    { id: 19, name: "Ice Flat White", category: "coffee", price: 200.00, image: "assets/iceFlatWhite.jpeg", description: "Double shot espressonun soğuk ipeksi sütle buluşması." },
    { id: 20, name: "Ice Latte", category: "coffee", price: 200.00, image: "assets/iceLatte.jpeg", description: "Sıcak günlerin vazgeçilmezi buzlu klasik latte." },
    { id: 21, name: "Ice Mocha", category: "coffee", price: 230.00, image: "assets/iceMocha.jpeg", description: "Soğuk süt, çikolata sosu ve espressonun buzlu dansı." },
    { id: 22, name: "Ice White Mocha", category: "coffee", price: 230.00, image: "assets/iceWhiteMocha.jpeg", description: "Buzlu ve beyaz çikolatalı premium soğuk kahve." },
    { id: 23, name: "Ice Vanilla Latte", category: "coffee", price: 230.00, image: "assets/iceLatte.jpeg", description: "Vanilya şuruplu buz gibi serinletici latte." },
    { id: 24, name: "Ice Çikolata Fındık Latte", category: "coffee", price: 230.00, image: "assets/iceCikoLatte.jpeg", description: "Çikolata ve fındıklı soğuk espressolu süt." },
    { id: 25, name: "Ice Pumpkin Latte", category: "coffee", price: 230.00, image: "assets/iceLatte.jpeg", description: "Buzlu ve balkabağı baharatlı özel soğuk latte." },

    // --- SICAK İÇECEKLER (Category: hot drinks) ---
    { id: 26, name: "Filtre Kahve", category: "hot drinks", price: 150.00, image: "assets/filtre.jpeg", description: "Günün taze demlenmiş nitelikli filtre kahvesi." },
    { id: 27, name: "Sütlü Filtre Kahve", category: "hot drinks", price: 160.00, image: "assets/sutluFiltre.jpeg", description: "Yumuşak içim sevenlere sıcak süt eşliğinde filtre kahve." },
    { id: 28, name: "Türk Kahvesi", category: "hot drinks", price: 130.00, image: "assets/turkKahvesi.jpeg", description: "Geleneksel yöntemle hazırlanan bol köpüklü Türk kahvesi." },
    { id: 29, name: "Double Türk Kahvesi", category: "hot drinks", price: 210.00, image: "assets/turkKahvesi.jpeg", description: "Büyük fincanda duble Türk kahvesi keyfi." },
    { id: 30, name: "Sıcak Çikolata", category: "hot drinks", price: 210.00, image: "assets/sicakCikolata.jpeg", description: "Gerçek çikolata özlü, sıcak ve yoğun içecek." },
    { id: 31, name: "Beyaz Sıcak Çikolata", category: "hot drinks", price: 210.00, image: "assets/beyazSicakCiko.jpeg", description: "Premium fildişi çikolata özlü kremsi sıcak içecek." },
    { id: 32, name: "Sahlep", category: "hot drinks", price: 210.00, image: "assets/sahlep.jpeg", description: "Bol tarçınlı, geleneksel sıcak sahlep." },
    { id: 33, name: "Çay", category: "hot drinks", price: 50.00, image: "assets/bardakCay.jpeg", description: "Taze demlenmiş klasik Türk çayı." },
    { id: 34, name: "Fincan Çay", category: "hot drinks", price: 75.00, image: "assets/fincanCay.jpeg", description: "Büyük fincanda cam gibi demli çay." },
    { id: 35, name: "Double Çay", category: "hot drinks", price: 100.00, image: "assets/fincanCay.jpeg", description: "Büyük duble bardakta çay keyfi." },
    { id: 36, name: "Bitki Çayları", category: "hot drinks", price: 190.00, image: "assets/bitkiCayi.jpeg", description: "Ihlamur, adaçayı, yeşil çay veya papatya seçenekleriyle." },
    { id: 37, name: "Matcha Latte", category: "hot drinks", price: 250.00, image: "assets/matcha.jpeg", description: "Orijinal Japon matcha tozu ve sıcak sütün asil uyumu." },

    // --- SOĞUK İÇECEKLER & KOKTEYLLER (Category: cold drinks) ---
    { id: 38, name: "Su", category: "cold drinks", price: 60.00, image: "assets/su.jpeg", description: "Cam şişede ferahlatıcı kaynak suyu." },
    { id: 39, name: "Cool Lime", category: "cold drinks", price: 230.00, image: "assets/coolLime.jpeg", description: "Nane ve misket limonu özlü serinletici meşrubat." },
    { id: 40, name: "Churchill", category: "cold drinks", price: 150.00, image: "assets/churchill.jpeg", description: "Taze limon suyu, tuz ve maden suyunun efsane birleşimi." },
    { id: 41, name: "Berry Hibiscus", category: "cold drinks", price: 250.00, image: "assets/berryHibiscus.jpeg", description: "Kırmızı meyveler ve hibiskus bitkisiyle demlenmiş soğuk içecek." },
    { id: 42, name: "Çikolata Fındık Frappe", category: "cold drinks", price: 240.00, image: "assets/frappe.jpeg", description: "Buzla parçalanmış çikolata ve fındıklı enfes frappe." },
    { id: 43, name: "Balkabağı Karamel Frappe", category: "cold drinks", price: 240.00, image: "assets/caramelFrappe.jpeg", description: "Balkabağı püresi ve karamelin buzlu frappe sunumu." },
    { id: 44, name: "Mango Passion Frozen", category: "cold drinks", price: 230.00, image: "assets/mangoFrozen.jpeg", description: "Mango ve çarkıfelek meyveli buzlu frozen." },
    { id: 45, name: "Çilekli Frozen", category: "cold drinks", price: 230.00, image: "assets/cilekliFrozen.jpeg", description: "Taze Sakarya çilekleriyle hazırlanmış buzlu frozen." },
    { id: 46, name: "Ice Matcha Latte", category: "cold drinks", price: 260.00, image: "assets/iceMatcha.jpeg", description: "Buzlu ve soğuk sütlü orijinal Japon matcha çayı." },
    { id: 47, name: "Ice Strawberry Matcha Latte", category: "cold drinks", price: 270.00, image: "assets/strawberryMatcha.jpeg", description: "Çilek püresi yatağında buzlu matcha latte keyfi." },
    { id: 48, name: "Ice Raspberry Matcha Latte", category: "cold drinks", price: 270.00, image: "assets/raspberryMatcha.jpeg", description: "Ekşi frambuaz püresi eşliğinde buzlu matcha latte." },
    { id: 49, name: "Enerji İçecekleri", category: "cold drinks", price: 230.00, image: "assets/enerji.jpeg", description: "Yoğun günlerde veya dinamik bir mola vermek istediğinizde modunuzu yükseltecek buzlu enerji dopingi." },
    { id: 50, name: "Indian Özel Kokteyl", category: "cold drinks", price: 250.00, image: "assets/indian.jpeg", description: "Egzotik mango ve taze sıkılmış limon aromalı özel kokteyl." },
    { id: 51, name: "Simendifer Özel", category: "cold drinks", price: 260.00, image: "assets/simendifer.jpeg", description: "Çilek, frambuaz ve misket limonunun (lime) imza birleşimi." },
    { id: 52, name: "Mango Blaze", category: "cold drinks", price: 270.00, image: "assets/mangoBlaze.jpeg", description: "Mango, lychee (kral meyvesi) ve çileğin muazzam uyumu." },
    //--- TATLILAR(category:desserts)---
    { id: 53, name: "San Sebastian", category: "dessert", price: 300.00, image: "assets/senSebastian.jpeg", description: "İçi akışkan, üzeri mükemmel karamelize olmuş orijinal tarifiyle enfes San Sebastian lezzeti." },
    { id: 54, name: "Vişneli Brownie", category: "dessert", price: 300.00, image: "assets/brownie.jpeg", description: "Yoğun Belçika çikolatasıyla hazırlanan, dışı çıtır içi nemli ve yumuşacık ev yapımı brownie." },
    { id: 55, name: "Tiramisu Topları", category: "dessert", price: 300.00, image: "assets/tiramisuTop.jpeg", description: "Özel espresso şurubuyla ıslatılmış savoyer bisküvileri ve pürüzsüz maskarpone kremasının asil uyumu." },
    { id: 56, name: "Supangle", category: "dessert", price: 200.00, image: "assets/supangle.jpeg", description: "Geleneksel lezzette, yoğun çikolatalı ve tabanında sürpriz kek dilimi barındıran enfes sütlü tatlı." },
    { id: 57, name: "Profiterol", category: "dessert", price: 200.00, image: "assets/profiterol.jpeg", description: "Yumuşacık puf hamur topları, içi ipeksi krema dolgulu ve üzerinde akışkan, yoğun Belçika çikolatası sosuyla." },
    { id: 58, name: "Marki Çeşitleri", category: "dessert", price: 80.00, image: "assets/marki.jpeg", description: "Tek lokmalık mutluluk! İçi nefis krema dolgulu, üzeri taze meyveler, çikolata ve kuruyemişlerle süslenmiş rengarenk minik pasta çeşitleri." },
    { id: 59, name: "Magnolia Çeşitleri", category: "dessert", price: 250.00, image: "assets/magnolia.jpeg", description: "İpeksi hafif kreması, çıtır bisküvi katmanları ve taze meyve parçalarıyla ferahlatıcı bir klasik." },
    { id: 60, name: "Spoonfull", category: "dessert", price: 300.00, image: "assets/spoonfull.jpeg", description: "Kaşıklamaya doyamayacağınız; yoğun eritilmiş çikolata ve kek kırıntılarının muazzam buluşması." },
    { id: 61, name: "Dubai Cup", category: "dessert", price: 300.00, image: "assets/dubai.jpeg", description: "Çıtır kadayıf, yoğun fıstık kreması ve akışkan Belçika çikolatasının kupta sunulan, son dönemin en gözde ve kıtır lezzeti." },
    { id: 62, name: "Fırın Sütlaç", category: "dessert", price: 200.00, image: "assets/sutlac.jpeg", description: "Geleneksel yöntemlerle taş fırında üzeri tam kıvamında kızartılmış, hakiki vanilya dokunuşlu hafif ve nefis sütlü tatlı." },
    { id: 63, name: "İzmir Bomba", category: "dessert", price: 125.00, image: "assets/bomba.jpeg", description: "İncecik, çıtır sıcak hamurun içerisinde akışkan ve yoğun çikolata dolgusuyla fırından yeni çıkmış bir lezzet patlaması." },
    //---TSHIRTLER(category:merch)---
    { id: 64, name: "Turuncu Logo Baskılı siyah erkek kolsuz Tshirt", category: "merch", price: 1000.00, images:["assets/turuncuAtlet.png","assets/turuncuAtletArkadan.png"] , description: "RainDogs support serisi" },
    { id: 65, name: "Rain Dogs Kurukafa Baskılı Tshirt", category: "merch", price: 1000.00, images: ["assets/kuruKafa.png","assets/kuruKafaArkadan.png"], description: "RainDogs support serisi" },
    { id: 66, name: "Önü Slogan Baskılı Erkek Oversize Tshirt ", category: "merch", price: 1000.00, images: ["assets/onuSlogan.png","assets/onuSloganArkadan.png"], description: "RainDogs support serisi" },
    { id: 67, name: "Rain Dogs Tasarım Baskılı Sİyah Tshirt ", category: "merch", price: 1000.00, images: ["assets/rainDogsTasarim.png","assets/rainDogsTasarimArkadan.png"], description: "RainDogs support serisi" },
    { id: 68, name: "Rain Dogs Slogan Baskılı Beyaz Tshirt ", category: "merch", price: 1000.00, images: ["assets/sloganBeyaz.png","assets/sloganBeyazArkadan.png"], description: "RainDogs support serisi" },
    { id: 69, name: "Rain Dogs Egzo Baskılı Sİyah Tshirt ", category: "merch", price: 1000.00, images: ["assets/egzoz.png","assets/egzozArkadan.png"], description: "RainDogs support serisi" },
    { id: 70, name: "Rain Dogs Motor Ve Slogan Baskılı Tshirt ", category: "merch", price: 1000.00, images: ["assets/motor.png","assets/motorArkadan.png"], description: "RainDogs support serisi" },
    { id: 71, name: "Rain Dogs Moto Fest 2024 Tshirt ", category: "merch", price: 1000.00, images: ["assets/motoFest24.png"], description: "RainDogs support serisi" },
    { id: 72, name: "Rain Dogs Baskılı Erkek Motorcu Tshirt ", category: "merch", price: 1000.00, images: ["assets/erkekMotorcu.png","assets/erkekMotorcuArkadan.png"], description: "RainDogs support serisi" },
    { id: 73, name: "Baskılı Bisiklet Yaka Erkek Motorcu Tshirt ", category: "merch", price: 1000.00, images: ["assets/kartal.png","assets/kartalArkadan.png"], description: "RainDogs support serisi" },
    { id: 74, name: "Rain Dogs Moto Fest 2023 Tshirt ", category: "merch", price: 1000.00, images: ["assets/motoFest23.png","assets/motoFest23Arkadan.png"], description: "RainDogs support serisi" },
    { id: 75, name: "Rain Dogs Baskılı Kolsuz Tshirt ", category: "merch", price: 1000.00, images: ["assets/kolsuz.png","assets/kolsuzArkadan.png"], description: "RainDogs support serisi" },
    { id: 76, name: "Rain Dogs Moto Fest 2025 Tshirt ", category: "merch", price: 1000.00, images: ["assets/motoFest25.png","assets/motoFest25Arkadan.png"], description: "RainDogs support serisi" },





];