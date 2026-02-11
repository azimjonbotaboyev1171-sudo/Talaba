let tg = window.Telegram.WebApp;
tg.expand(); // Oynani to'liq ochish

// Telegramdan foydalanuvchi ismini olish
document.getElementById("user-name").innerText = "Salom, " + tg.initDataUnsafe.user.first_name + "!";

function showNews() {
    tg.showAlert("Bugungi yangiliklar: AI sohasida yangi o'zgarishlar kutilmoqda.");
}

function showCrypto() {
    tg.showAlert("Bitcoin narxi: $96,000\nEthereum: $2,800");
}

function showRating() {
    tg.showConfirm("Hozircha reytingda birinchisiz! Batafsil ko'rishni xohlaysizmi?");
}

function showJobs() {
    tg.showAlert("Yangi vakansiyalar: \n1. Python Developer\n2. SMM Manager");
}