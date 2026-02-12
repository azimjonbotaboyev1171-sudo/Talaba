let tg = window.Telegram.WebApp;
tg.expand();

let currentLang = localStorage.getItem('lang') || 'uz';

const translations = {
    uz: { auth: "Ro'yxatdan o'tish", welcome: "Xush kelibsiz" },
    ru: { auth: "Регистрация", welcome: "Добро пожаловать" },
    en: { auth: "Registration", welcome: "Welcome" }
};

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.getElementById('lang-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'block';
    updateUI();
}

function updateUI() {
    document.getElementById('auth-title').innerText = translations[currentLang].auth;
}

function register() {
    let data = {
        name: document.getElementById('user-name').value,
        phone: document.getElementById('user-phone').value,
        pass: document.getElementById('user-pass').value,
        lang: currentLang,
        action: 'registration'
    };
    
    if(data.name && data.phone) {
        tg.sendData(JSON.stringify(data)); // Botga yuborish
        tg.close();
    } else {
        alert("Barcha maydonlarni to'ldiring!");
    }
}