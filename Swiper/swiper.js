var $swiper=(function(){
  var $html=$(''+
    '<div class="slider">'
     +' <div class="slide"><img src="img/b5.png"></div>'
     +' <div class="slide"><img src="img/b2.png"></div>'
     +' <div class="slide"><img src="img/b3.png"></div>'
     +' <div class="slide"><img src="img/b4.png"></div>'
     +' <div class="slide"><img src="img/b1.png"></div>'
     +'</div>'
     +'<span id="left"><</span>'
     +'<span id="right">></span>'
     +'<ul class="nav" id="navs">'
     +'<li>1</li>'
     +'<li>2</li>'
    +' <li>3</li>'
    +'<li>4</li>'
    +'<li>5</li>'
+'</ul>'
     );
  var indexs=0;
  var $slider=$('#slider'),
      $nav=$('#nav'),
      $box=$('#box'),
      len=$slider.children().length;
  function rfover(){
    $('.slider').hover(function(){
    
      $('span[id="left"]').css('opacity',1);
      $('span[id="right"]').css('opacity',1)
    },function(){
      $('span[id="left"]').css('opacity',0);
      $('span[id="right"]').css('opacity',0);
    })
  }
  function autoplay(){
    timer=setInterval(()=>{
      if(indexs>=4){
        indexs=0;
      }else{
        indexs++
      }
      $('#left').click(function(){
        if(indexs==1){
          $('.slider').css('left',4*1200)
        }
        $('.slider').css('left',-(indexs-1)*1200);
      })
      $('#right').click(function(){
        if(indexs==4){
           $('.slider').css('left',0);
        }
        $('.slider').css('left',-(indexs+1)*1200);
      })
      for(var i=0;i<=4;i++){
        $('.nav').children().eq(i).removeClass('active')
        if(i==indexs){
          $('.nav').children().eq(i).addClass('active');
        }
      }
  $('.slider').css('left',-indexs*1200)
  },2000)
  }
  function show(){
       $('#box').append($html);
     autoplay();
     rfover();
    }
    return {show:show}
})();
