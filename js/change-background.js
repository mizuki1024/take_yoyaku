const backgrounds = $('.top-image-box');
let currentIndex = 0;

// 初期表示を設定
backgrounds.eq(currentIndex).show();

function changeBackground() {
    backgrounds.eq(currentIndex).hide(); // 現在の画像を非表示
    currentIndex = (currentIndex + 1) % backgrounds.length; // 次の画像のインデックスを取得
    backgrounds.eq(currentIndex).show(); // 次の画像を表示
}

// 4秒ごとに画像を切り替え
setInterval(changeBackground, 1000); // 3秒ごとに画像を切り替え
