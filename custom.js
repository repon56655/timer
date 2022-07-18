jQuery(document).ready(function(){


    jQuery("#start").click(function(){

    var _s = parseInt(jQuery("#seconds").val());
    var _m = parseInt(jQuery("#minutes").val());



    jQuery(".seconds").text(_s);
    jQuery(".minutes").text(_m);

    const firstIn = setInterval(counter, 500);

    function counter(){

        var _rs = parseInt(jQuery(".seconds").text());
        var _rm = parseInt(jQuery(".minutes").text());

        // if(_rs > 0 && _rs <= 9 && _rm > 0 && _rm <= 9 ){
        //     jQuery("0").insertBefore("#seconds");
        //     jQuery("0").insertBefore("#minutes");
        // }

        _rs -=1;
        if (_rs < 0){
            _rs = 9;
            _rm -=1;
        }
        if (_rm < 0){
            _rm = 9;
        }

        if (_rm == 0) {
            _rs = 0;
            _rm = 0;
            clearInterval(firstIn);
        }

    
       


        jQuery(".seconds").text(_rs);
        jQuery(".minutes").text(_rm);
    }
    });


});