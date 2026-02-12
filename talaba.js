let tg = window.Telegram.WebApp;
tg.expand();

const dictionary = {
    uz: { qh: "Yuksak marralar kutmoqda!", qp: "Tayyormisiz?", qb: "Tayyorman! 🚀", ah: "Ro'yxatdan o'tish" },
    ru: { qh: "Ждут великие дела!", qp: "Вы готовы?", qb: "Я готов! 🚀", ah: "Регистрация" },
    en: { qh: "Great heights await!", qp: "Are you ready?", qb: "Yes, ready! 🚀", ah: "Registration" }
};

function setLang(lang) {
    localStorage.setItem('userLang', lang);
    const d = dictionary[lang];
    document.getElementById('t-quiz-h').innerText = d.qh;
    document.getElementById('t-quiz-p').innerText = d.qp;
    document.getElementById('t-quiz-b').innerText = d.qb;
    document.getElementById('t-auth-h').innerText = d.ah;
}

function goAuth() {
    document.getElementById('screen-quiz').style.display = 'none';
    document.getElementById('screen-auth').style.display = 'block';
}

function register() {
    const data = {
        action: 'register',
        name: document.getElementById('inp-name').value,
        phone: document.getElementById('inp-phone').value,
        status: document.getElementById('inp-status').value,
        lang: localStorage.getItem('userLang') || 'uz'
    };
    if(data.name && data.phone) {
        tg.sendData(JSON.stringify(data));
        tg.close();
    } else {
        alert("To'ldiring!");
    }
}