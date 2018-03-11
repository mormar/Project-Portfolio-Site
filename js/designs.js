$("#html").hover(function(){
      $(this).css({"filter":"grayscale(0%)"});
  },function(){
      $(this).css({"filter":"grayscale(100%)"});
  });

$("#css").hover(function(){
      $(this).css({"filter":"grayscale(0%)"});
  },function(){
      $(this).css({"filter":"grayscale(100%)"});
  });

$("#javascript").hover(function(){
    $(this).css({"filter":"grayscale(0%)"});
  },function(){
    $(this).css({"filter":"grayscale(100%)"});
  });

$("#jquery").hover(function(){
    $(this).css({"filter":"grayscale(0%)"});
  },function(){
    $(this).css({"filter":"grayscale(100%)"});
  });

$("#bootstrap3").hover(function(){
    $(this).css({"filter":"grayscale(0%)"});
  },function(){
    $(this).css({"filter":"grayscale(100%)"});
});

$("#java").hover(function(){
    $(this).css({"filter":"grayscale(0%)"});
  },function(){
    $(this).css({"filter":"grayscale(100%)"});
});

$("#c").hover(function(){
    $(this).css({"filter":"grayscale(0%)"});
  },function(){
    $(this).css({"filter":"grayscale(100%)"});
});

$("#mm").hover(function(){
      var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
     $(this).css({"color":randomColor});
 },function(){
     $(this).css({"color":"black"});
 });

 $("#santaHunter").click(function(){
   window.open('https://markar.itch.io/santa-hunter');
 });
 $("#santaHunter").hover(function(){
    $(this).css({"cursor":"pointer"});
 });

 $("#santaGithub").click(function(){
   window.open('https://github.com/mormar/Santa-Hunter-Web-Game');
 });
 $("#santaGithub").hover(function(){
    $(this).css({"cursor":"pointer"});
 });

 $("#pixel").click(function(){
   window.open('http://pixelartmarker.interiowo.pl/');
 });
 $("#pixel").hover(function(){
    $(this).css({"cursor":"pointer"});
 });

 $("#pixelArtGithub").click(function(){
   window.open('https://github.com/mormar/Pixel-Art-Maker');
 });
 $("#pixelArtGithub").hover(function(){
    $(this).css({"cursor":"pointer"});
 });

 $("#myGithub").click(function(){
   window.open('https://github.com/mormar/');
 });
 $("#myGithub").hover(function(){
    $(this).css({"cursor":"pointer"});
 });

 $("#myemail").hover(function(){
    $(this).css({"color":"black"});
  },function(){
      $(this).css({"color":"white"});
  });
