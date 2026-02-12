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

// Ro'yxatdan o'tish funksiyasini yangilaymiz
function register() {
    const name = document.getElementById('inp-name').value;
    const phone = document.getElementById('inp-phone').value;
    const status = document.getElementById('inp-status').value;
    const lang = localStorage.getItem('userLang') || 'uz';

    if(name && phone) {
        const data = {
            action: 'register',
            name: name,
            phone: phone,
            status: status,
            lang: lang
        };
        
        // 1. Botga ma'lumot yuborish
        tg.sendData(JSON.stringify(data)); 
        
        // 2. LocalStorage-da ro'yxatdan o'tganini belgilash
        localStorage.setItem('isRegistered', 'true');

        // 3. Ichki menyuga o'tkazish
        showMainDashboard();
    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
}

function showMainDashboard() {
    // Hamma ekranlarni yopib, faqat menyuni ochamiz
    document.getElementById('screen-quiz').style.display = 'none';
    document.getElementById('screen-auth').style.display = 'none';
    document.getElementById('screen-menu').style.display = 'block';
}
function openModule(type) {
    document.getElementById('screen-menu').style.display = 'none';
    const body = document.getElementById('module-body');
    const container = document.getElementById('module-content');
    container.style.display = 'block';

    if(type === 'business') {
        body.innerHTML = `
            <h3>📈 Biznes va Korporatsiyalar</h3>
            <div class="info-card">
                <b>Amazon (Jeff Bezos):</b>
                <p>Garajdan boshlangan imperiya. Bugungi kunda aksiyalari dunyoda yetakchi.</p>
            </div>
            <div class="info-card">
                <b>Nvidia:</b>
                <p>AI davri boshlangandan beri 200% o'sish ko'rsatdi.</p>
            </div>
        `;
    } else if(type === 'crypto') {
        body.innerHTML = `
            <h3>💰 Kripto bozor tahlili</h3>
            <p>Bitcoin (BTC): $65,400 <span style="color:green;">+2.4%</span></p>
            <p>Ethereum (ETH): $3,500 <span style="color:red;">-0.5%</span></p>
            <hr>
            <p>Dunyo bozorida hozirda barqarorlik kuzatilmoqda.</p>
        `;
    }
}
// Sahifa yuklanganda tekshirish
window.onload = function() {
    if(localStorage.getItem('isRegistered') === 'true') {
        showMainDashboard();
    }
}