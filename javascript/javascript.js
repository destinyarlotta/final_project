$(document).ready(function() {

  function hideAll() {
    $('#aries_info').hide();
    $('#pisces_info').hide();
    $('#taurus_info').hide();
    $('#aquarius_info').hide();
    $('#gemini_info').hide();
    $('#capricorn_info').hide();
    $('#cancer_info').hide();
    $('#sagittarius_info').hide();
    $('#leo_info').hide();
    $('#scorpio_info').hide();
    $('#virgo_info').hide();
    $('#libra_info').hide();
      $('#aries_intro').hide();
      $('#pisces_intro').hide();
      $('#taurus_intro').hide();
      $('#aquarius_intro').hide();
      $('#gemini_intro').hide();
      $('#capricorn_intro').hide();
      $('#cancer_intro').hide();
      $('#sagittarius_intro').hide();
      $('#leo_intro').hide();
      $('#scorpio_intro').hide();
      $('#virgo_intro').hide();
      $('#libra_intro').hide();
        $('#aries5match').hide();
        $('#pisces5match').hide();
        $('#taurus5match').hide();
        $('#aquarius5match').hide();
        $('#gemini5match').hide();
        $('#capricorn5match').hide();
        $('#cancer5match').hide();
        $('#sagittarius5match').hide();
        $('#leo5match').hide();
        $('#scorpio5match').hide();
        $('#virgo5match').hide();
        $('#libra5match').hide();
      }

//above hides all info text to start


  hideAll();
//calls the action of hiding



//on click of icon Aries, the function shows the info for aries only and hides all icons

  $('#aries').click(function() {
    $('#aries_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();

  });

//on click of icon Pisces, the function shows the info for pisces only and hides all icons
  $('#pisces').click(function() {
    $('#pisces_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon taurus, the function shows the info for taurus only and hides all icons
  $('#taurus').click(function() {
    $('#taurus_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon aquarius, the function shows the info for aquarius only and hides all icons
  $('#aquarius').click(function() {
    $('#aquarius_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon Pisces, the function shows the info for gemini only and hides all icons
  $('#gemini').click(function() {
    $('#gemini_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
    var gemini_icon = "<img src='images/gemini3.png' class='biggie' alt='Gemini icon'>"
    $('#gemini').append(gemini_icon);
  });

//on click of icon capricorn, the function shows the info for capricorn only and hides all icons
  $('#capricorn').click(function() {
    $('#capricorn_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon cancer, the function shows the info for cancer only and hides all icons
  $('#cancer').click(function() {
    $('#cancer_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon sagittarius, the function shows the info for sagittarius only and hides all icons
  $('#sagittarius').click(function() {
    $('#sagittarius_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon leo, the function shows the info for leo only and hides all icons
  $('#leo').click(function() {
    $('#leo_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon scorpio, the function shows the info for scorpio only and hides all icons
  $('#scorpio').click(function() {
    $('#scorpio_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#libra').hide();
  });

//on click of icon virgo, the function shows the info for virgo only and hides all icons
  $('#virgo').click(function() {
    $('#virgo_info').show();
    console.log("Hello there!");
    $('#aries').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#libra').hide();
      $('#virgo').hide();
  });

//on click of icon libra, the function shows the info for libra only and hides all icons
  $('#libra').click(function() {
    $('#libra_info').show();
    console.log("Hello there!");
    $('#libra').hide();
    $('#pisces').hide();
    $('#taurus').hide();
    $('#aquarius').hide();
    $('#gemini').hide();
    $('#capricorn').hide();
    $('#cancer').hide();
    $('#sagittarius').hide();
    $('#leo').hide();
    $('#scorpio').hide();
    $('#virgo').hide();
    $('#aries').hide();

});
//show both matches for each sign

$('#aries_both_matches').click(function() {
  $('#aries_info').hide();
    $('#libra_intro').show();
    $('#leo_intro').show();
});
$('#pisces_both_matches').click(function() {
  $('#pisces_info').hide();
    $('#virgo_intro').show();
    $('#taurus_intro').show();
});
$('#taurus_both_matches').click(function() {
  $('#scorpio_intro').show();
  $('#cancer_intro').show();
    $('#taurus_info').hide();
});
$('#aquarius_both_matches').click(function() {
  $('#aquarius_info').hide();
    $('#leo_intro').show();
    $('#sagittarius_intro').show();
});
$('#gemini_both_matches').click(function() {
  $('#gemini_info').hide();
    $('#sagittarius_intro').show();
    $('#aquarius_intro').show();
});
$('#capricorn_both_matches').click(function() {
  $('#capricorn_info').hide();
    $('#cancer_intro').show();
    $('#taurus_intro').show();
});
  $('#cancer_both_matches').click(function() {
    $('#cancer_info').hide();
      $('#capricorn_intro').show();
      $('#taurus_intro').show();
});
$('#sagittarius_both_matches').click(function() {
  $('#sagittarius_info').hide();
    $('#gemini_intro').show();
    $('#aries_intro').show();
});
$('#leo_both_matches').click(function() {
  $('#leo_info').hide();
    $('#aquarius_intro').show();
    $('#gemini_intro').show();
});
$('#scorpio_both_matches').click(function() {
  $('#scorpio_info').hide();
    $('#taurus_intro').show();
    $('#cancer_intro').show();
});
  $('#virgo_both_matches').click(function() {
    $('#virgo_info').hide();
      $('#pisces_intro').show();
      $('#cancer_intro').show();
});
    $('#libra_both_matches').click(function() {
      $('#libra_info').hide();
        $('#aries_intro').show();
        $('#sagittarius_intro').show();
});

$('#homepage').click(function() {
  $('#aries_info').hide();
  $('#pisces_info').hide();
  $('#taurus_info').hide();
  $('#aquarius_info').hide();
  $('#gemini_info').hide();
  $('#capricorn_info').hide();
  $('#cancer_info').hide();
  $('#sagittarius_info').hide();
  $('#leo_info').hide();
  $('#scorpio_info').hide();
  $('#virgo_info').hide();
  $('#libra_info').hide();
    $('#aries_intro').hide();
    $('#pisces_intro').hide();
    $('#taurus_intro').hide();
    $('#aquarius_intro').hide();
    $('#gemini_intro').hide();
    $('#capricorn_intro').hide();
    $('#cancer_intro').hide();
    $('#sagittarius_intro').hide();
    $('#leo_intro').hide();
    $('#scorpio_intro').hide();
    $('#virgo_intro').hide();
    $('#libra_intro').hide();
      $('#aries5match').hide();
      $('#pisces5match').hide();
      $('#taurus5match').hide();
      $('#aquarius5match').hide();
      $('#gemini5match').hide();
      $('#capricorn5match').hide();
      $('#cancer5match').hide();
      $('#sagittarius5match').hide();
      $('#leo5match').hide();
      $('#scorpio5match').hide();
      $('#virgo5match').hide();
      $('#libra5match').hide();
      $('#aries').show();
      $('#pisces').show();
      $('#taurus').show();
      $('#aquarius').show();
      $('#gemini').show();
      $('#capricorn').show();
      $('#cancer').show();
      $('#sagittarius').show();
      $('#leo').show();
      $('#scorpio').show();
      $('#virgo').show();
      $('#libra').show();
  });


  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#back2Top').fadeIn();
      } else {
          $('#back2Top').fadeOut();
      }
  });

      $("#back2Top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 10 }, "slow");
          return false;
      });

   /*Scroll to top when arrow up clicked END*/


}); // end document ready
