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


//above hides all info text to start

}
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
    $('.biggie').show();


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

});

$('#ariesmatch').click(function() {
  $('#aries_intro').show();
    $('#libra_info').hide();
    $('#sagittarius5match').show();
});


$('#aries2match').click(function() {
  $('#aries_intro').show();
    $('#sagittarius_info').hide();
});

$('#piscesmatch').click(function() {
  $('#pisces_intro').show();
    $('#virgo_info').hide();
});
$('#taurusmatch').click(function() {
  $('#taurus_intro').show();
    $('#scorpio_info').hide();
});
$('#taurus2match').click(function() {
  $('#taurus_intro').show();
    $('#cancer_info').hide();
});
$('#taurus3match').click(function() {
  $('#taurus_intro').show();
    $('#capricorn_info').hide();
});
$('#taurus4match').click(function() {
  $('#taurus_intro').show();
    $('#pisces_info').hide();
});
$('#aquariusmatch').click(function() {
  $('#aquarius_intro').show();
    $('#leo_info').hide();
});
$('#geminimatch').click(function() {
  $('#gemini_intro').show();
    $('#leo_info').hide();
});
$('#gemini2match').click(function() {
  $('#gemini_intro').show();
    $('#sagittarius_info').hide();
});
$('#aquariusmatch').click(function() {
  $('#aquarius_intro').show();
    $('#leo_info').hide();
});
$('#capricornmatch').click(function() {
  $('#capricorn_intro').show();
    $('#cancer_info').hide();
});
$('#aquariusmatch').click(function() {
  $('#aquarius_intro').show();
    $('#leo_info').hide();
});
$('#aquarius2match').click(function() {
  $('#aquarius_intro').show();
    $('#gemini_info').hide();
});
$('#cancermatch').click(function() {
  $('#cancer_intro').show();
    $('#virgo_info').hide();
});
$('#cancer2match').click(function() {
  $('#cancer_intro').show();
    $('#scorpio_info').hide();
  });
  $('#cancer3match').click(function() {
    $('#cancer_intro').show();
      $('#capricorn_info').hide();
    });
    $('#cancer4match').click(function() {
      $('#cancer_intro').show();
        $('#taurus_info').hide();
});
$('#sagittariusmatch').click(function() {
  $('#sagittarius_intro').show();
    $('#libra_info').hide();
});
$('#sagittarius2match').click(function() {
  $('#sagittarius_intro').show();
    $('#gemini_info').hide();
});
$('#sagittarius3match').click(function() {
  $('#sagittarius_intro').show();
    $('#aquarius_info').hide();
});
$('#leomatch').click(function() {
  $('#leo_intro').show();
    $('#aquarius_info').hide();
});
$('#leo2match').click(function() {
  $('#leo_intro').show();
    $('#aries_info').hide();
});
$('#scorpiomatch').click(function() {
  $('#scorpio_intro').show();
    $('#taurus_info').hide();
});
$('#scorpiomatch').click(function() {
  $('#scorpio_intro').show();
    $('#taurus_info').hide();
  });
  $('#virgomatch').click(function() {
    $('#virgo_intro').show();
      $('#pisces_info').hide();
      $('#pisces').hide();
});
    $('#libramatch').click(function() {
      $('#libra_intro').show();
        $('#aries_info').hide();

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

//hidden big 12 icons

//12 times

var aries_icon = "<img src='images/aries13.png' class='biggie' alt='Aries'>"
$('#aries').append(aries_icon);
$('#aries').remove(aries_icon);

var pisces_icon = "<img src='images/pisces.png' class='biggie' alt='Pisces'>"
$('#somediv').append(pisces_icon);
$('#somediv').remove(pisces_icon);

var taurus_icon = "<img src='images/foo.png' class='biggie' alt='Taurus'>"
$('#somediv').append(taurus_icon);
$('#somediv').remove(taurus_icon);

var aquarius_icon = "<img src='images/foo.png' class='biggie' alt='Aquarius'>"
$('#somediv').append(aquarius_icon);
$('#somediv').remove(aquarius_icon);

var gemini_icon = "<img src='images/gemini3.png' class='biggie' alt='Gemini'>"
$('#gemini').append(gemini_icon);
$('#somediv').remove(gemini_icon);

var capricorn_icon = "<img src='images/capricorn4.png' class='biggie' alt='Capricorn'>"
$('#somediv').append(capricorn_icon);
$('#somediv').remove(capricorn_icon);

var cancer_icon = "<img src='images/cancer2.png' class='biggie' alt='Cancer'>"
$('#somediv').append(cancer_icon);
$('#somediv').remove(cancer_icon);

var sagittarius_icon = "<img src='images/sagittarius.png' class='biggie' alt='Sagitarrius'>"
$('#somediv').append(sagittarius_icon);
$('#somediv').remove(sagittarius_icon);

var leo_icon = "<img src='images/leo2.png' class='biggie' alt='Leo'>"
$('#somediv').append(leo_icon);
$('#somediv').remove(leo_icon);

var scorpio_icon = "<img src='images/scorpio10.png' class='biggie' alt='Scorpio'>"
$('#somediv').append(scorpio_icon);
$('#somediv').remove(scorpio_icon);

var virgo_icon = "<img src='images/virgo2.png' class='biggie' alt='Virgo'>"
$('#somediv').append(virgo_icon);
$('#somediv').remove(virgo_icon);

var libra_icon = "<img src='images/libra2.png' class='biggie' alt='Libra'>"
$('#somediv').append(libra_icon);
$('#somediv').remove(libra_icon);

//use class biggie in css to give a pixel width for sizing
