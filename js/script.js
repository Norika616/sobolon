//
//ドロワーメニュー
//
jQuery("#js-drawer-icon").on("click", function (e) {
  // ↓ブラウザのデフォルト機能を無効化
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

//
//navをクリックしたらそのコンテンツへ移動
//ハンバーガーアイコンを初期状態
//ドロワーメニューを閉じる
//
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});


