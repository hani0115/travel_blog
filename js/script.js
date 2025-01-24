$(document).ready(function(){
    $('.main>li').hover(function(){  // main에 있는 li를 hover했을 때 실행
        if($(this).find('i').hasClass('ri-arrow-down-s-line')){
            $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
            $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
        $(this).find('.sub').fadeToggle(800); // sub가 나타남
    });

    $('.myvideo').on('mouseenter', function(){
        this.play();
    });

    $('.myvideo').on('mouseleave', function(){
        this.pause();
    });

    $(".myvideo-btn").on("click", function(){
        const vdo = $(this).data("vdo");

        // 소스 선택
        const $vdo = $("#viewvideo");
        const $source = $vdo.find('source');

        $source.attr("src", "vod/"+vdo);
        $vdo[0].load();
        // $vdo[0].play();
        $('.vdo-popup-back').fadeIn(400);
    });

    // close 버튼 눌러서 닫기
    $('.close').click(function(){
        $('.vdo-popup-back').fadeOut(500);
    });

    // overlay된 바탕화면 눌러서 닫기
    $('.vdo-popup-back').click(function(e){
        if($(e.target).is('#vdo-back')){
        $(this).fadeOut(500);
        }
    });
});