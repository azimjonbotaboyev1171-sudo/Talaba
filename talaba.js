let tg = window.Telegram.WebApp;
tg.expand();

let currentLang = 'uz';

function setLanguage(lang) {
    currentLang = lang;
    alert("Til tanlandi: " + lang);
    // Bu yerda matnlarni tanlangan tilga qarab o'zgartirish funksiyasini qo'shish mumkin
}

function startAuth() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'block';
}

function sendToBot() {
    let name = document.getElementById('user-name').value;
    let phone = document.getElementById('user-phone').value;
    let status = document.getElementById('user-status').value;

    if(name && phone) {
        let result = {
            action: "registration",
            name: name,
            phone: phone,
            status: status,
            lang: currentLang
        };
        tg.sendData(JSON.stringify(result));
        tg.close();
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
}