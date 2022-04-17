$(function(){

    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slick',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        arrows:false
      });



      $('.infortit > div').click(function(){
        var clicknum = $('.infortit div').index(this);

        $(this).css({'background-color': '#fff','border-bottom':'unset'})
        .siblings().css({'background-color':'#f1f0f0','border': '1px solid rgb(232, 232, 232)'})

        if(clicknum == 0){
            $(".itemtxt1").fadeIn().css({});
            $(".itemtxt2 , .itemtxt3").fadeOut();
        }else if(clicknum == 1){
            $(".itemtxt2").fadeIn();
            $(".itemtxt1 , .itemtxt3").fadeOut();
        }else if(clicknum == 2){
            $(".itemtxt3").fadeIn();
            $(".itemtxt1 , .itemtxt2").fadeOut();
        }
    })


    // $('.pop').dblclick(function(){
    //     $(this).fadeOut();
    // })

    
    var clicknum = $(".count").text();
    $('.out').click(function(){
        clicknum--;
        if(clicknum < 0){
            clicknum = 0;
        }
        $(".count").html(clicknum);
        $(".mainprice .lf").html("총  " + clicknum + "  개"); 
        $(".mainprice .red").html((114176 * clicknum)+"원"); 
        $(".mainprice .red").html((114776*(clicknum--)+"원")); 
    });


    $('.plus').click(function(){
        clicknum++;
        $(".count").html(clicknum); 
        $(".mainprice .lf").html("총  " + clicknum + "  개"); 
        $(".mainprice .red").html((114176 * clicknum)+"원"); 
    });
    $('.cart').click(function(){
        alert("Luxury Fragrance Collection 데저트 에덴  " + clicknum + " 개를 장바구니에 넣으시겠습니까?")
    });
    $('.now').click(function(){
        alert("바로 결제창으로 넘어가시겠습니까?")
    });

    $(window).scroll(function(){
        var dh = $('body').height();
        var st = $(this).scrollTop();
        var bh = $(window).scrollTop();
        console.log(st)

        if(st < 980 || st > 6200){
            $('.fix').fadeOut();

        }else if(980 < st){
            $('.fix').fadeIn();

        }

        if(st < 980){
            $('.move ul').css({'display':'flex','top':'0px','left':'0px'})
            $('.move ul img').css({'width':'300px'})
        }else{
            $('.move ul').css({'display':'inherit','top':'900px','left':'150px'});
            $('.move ul img').css({'width':'550px'})
        }

        
    })
        $("a").on("click", function(e){e.preventDefault();});
})