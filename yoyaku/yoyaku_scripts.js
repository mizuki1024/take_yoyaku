import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyAFsyt6MbqwYxHzOaSsyhGup5qYZYKOpms",
    authDomain: "tizu-2df5d.firebaseapp.com",
    projectId: "tizu-2df5d",
    storageBucket: "tizu-2df5d.appspot.com",
    messagingSenderId: "121970837294",
    appId: "1:121970837294:web:003042ff34b80ac75edcbf",
    measurementId: "G-N88BZKCY1K"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 予約データを保存する関数
window.submitReservation = async function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;

    if (name && email && date && guests) {
        try {
            const docRef = await addDoc(collection(db, "reservations"), {
                name: name,
                email: email,
                date: date,
                guests: guests,
                message: message
            });
            alert("予約が正常に保存されました！Document ID: " + docRef.id);
        } catch (e) {
            alert("予約の保存中にエラーが発生しました: " + e);
            console.error("Error adding document: ", e);
        }
    } else {
        alert('全てのフィールドを入力してください。');
    }
};

// ページロード後にflatpickrを初期化
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        dateFormat: "Y-m-d",
        minDate: "today",
        maxDate: new Date().fp_incr(180), // 180日後まで選択可能
        locale: {
            firstDayOfWeek: 1, // カレンダーの週の開始日を月曜日に設定
            weekdays: {
                shorthand: ['日', '月', '火', '水', '木', '金', '土'],
                longhand: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
            },
            months: {
                shorthand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                longhand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }
        }
    });
});

