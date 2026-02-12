let tg = window.Telegram.WebApp;
tg.expand();

let currentLang = localStorage.getItem('lang') || 'uz';

const translations = {
    uz: { auth: "Ro'yxatdan o'tish", btn: "Tasdiqlash", welcome: "Xush kelibsiz" },
    ru: { auth: "Регистрация", btn: "Подтвердить", welcome: "Добро пожаловать" },
    en: { auth: "Registration", btn: "Confirm", welcome: "Welcome" }
};

function updateUI() {
    document.getElementById('auth-title').innerText = translations[currentLang].auth;
    document.getElementById('reg-btn').innerText = translations[currentLang].btn;
}

function register() {
    let name = document.getElementById('user-name').value;
    let phone = document.getElementById('user-phone').value;

    if(name && phone) {
        let data = {
            name: name,
            phone: phone,
            lang: currentLang,
            action: 'registration'
        };
        tg.sendData(JSON.stringify(data)); // Botga yuborish
        tg.close();
    } else {
        alert("Iltimos, ism va tel raqamingizni kiriting!");
    }
}