$(function () {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
   $('.button-more').on('mouseout', function () {
     $(this).animate({
       opacity: 1.0,
       marginLeft: 0
     }, 100);
   });
// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});
// 送信ボタンクリック時の処理
$('#submit').on('click', function (event) {
  // formタグによる送信を拒否
  event.preventDefault();
// 入力チェックをした結果をresultに格納
  let result = inputCheck();
});
 // フォーカスが外れたとき（blur）にフォームの入力チェックをする
 $('#name').blur(function () {
  inputCheck();
});
$('#furigana').blur(function () {
  inputCheck();
});
$('#email').blur(function () {
  inputCheck();
});
$('#tel').blur(function () {
  inputCheck();
});
$('#message').blur(function () {
  inputCheck();
});
$('#agree').click(function () {
  inputCheck();
});

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーのチェック結果
    let result;
 
    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;
  }
  // お名前のチェック
  if ($('#name').val() == '') {
    // エラーあり
    $('#name').css('background-color', '#f79999');
    error = true;
    message += 'お名前を入力してください。\n';//改行の意味
    // エラーなし
    $('#name').css('background-color', '#fafafa')
  }
});
