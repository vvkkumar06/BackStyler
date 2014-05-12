/*-----------------Back Styler----------------------*/
/////////////////////////////////////////////////////
/*  Author:- Vivek Kumar-------------------------///
///////////////////////////////////////////////////*/



(function ($, document, undefined) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (value === null) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            if (decode(parts.shift()) === key) {
                var cookie = decode(parts.join('='));
                return config.json ? JSON.parse(cookie) : cookie;
            }
        }

        return null;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };

})(jQuery, document);


//Styler


$(document).ready(function(){
				var class1= $.cookie('my_color');

				if(class1 != "null")
				{
				$('body').addClass(class1);
				}

$('head').append('<link rel="stylesheet" type="text/css" href="Back-Styler/switcher.css">');
//Design of styler starts				
$('<div id="style-switcher"><div id="name">Back Styler</div><input type="image" src="back-styler/switch.png" id="switcher"><button id="green"></button><button id="orange"></button><button id="pink"></button><button id="yellow"></button><button id="black"></button><button id="red"></button><button id="blue"></button><button id="aqua"></button><button id="teal"></button><button id="brown"></button><button id="darkgray"></button><button id="lime"></button><button id="navy"></button><button id="olive"></button><button id="khaki"></button><button id="lightsteelblue"></button><button id="magenta"></button><button id="maroon"></button><button id="mistyrose"></button><button id="palegreen"></button><button id="plum"></button><button id="silver"></button><button id="tomato"></button><button id="turquoise"></button><br><br><br><br><hr style="background:gainsboro;margin-top:18px"><img id="t1" src="Back-Styler/texture/1.jpg"><img id="t2" src="Back-Styler/texture/2.jpg"><img id="t3" src="Back-Styler/texture/3.jpg"><img id="t4" src="Back-Styler/texture/4.jpg"><img id="t5" src="Back-Styler/texture/5.jpg"><img id="t6" src="Back-Styler/texture/6.jpg"><img id="t7" src="Back-Styler/texture/7.jpg"><img id="t8" src="Back-Styler/texture/8.jpg"><img id="t9" src="Back-Styler/texture/9.jpg"><img id="t10" src="Back-Styler/texture/10.jpg"><img id="t11" src="Back-Styler/texture/11.jpg"><img id="t12" src="Back-Styler/texture/12.jpg"><img id="t13" src="Back-Styler/texture/13.jpg"><img id="t14" src="Back-Styler/texture/14.jpg"><img id="t15" src="Back-Styler/texture/15.jpg"><img id="t16" src="Back-Styler/texture/16.jpg"><img id="t17" src="Back-Styler/texture/17.jpg"><img id="t18" src="Back-Styler/texture/18.jpg"><img id="t19" src="Back-Styler/texture/19.jpg"><img id="t20" src="Back-Styler/texture/20.jpg"><img id="t21" src="Back-Styler/texture/21.jpg"><img id="t22" src="Back-Styler/texture/22.jpg"><img id="t23" src="Back-Styler/texture/23.jpg"><img id="t24" src="Back-Styler/texture/24.jpg"></div>').appendTo('body');
//Design of styler starts					
				
				
				
				$('#style-switcher').addClass('style-switcher-hide');
				
				$('#switcher').toggle(function(){
						$('#style-switcher').removeClass('style-switcher-hide');
						$('#style-switcher').addClass('style-switcher-show');
						}, function() {
						$('#style-switcher').removeClass('style-switcher-show');
						$('#style-switcher').addClass('style-switcher-hide');
					});
					
					//Color starts
				$('#green').click(function(){
					$('body').removeClass().addClass('green');
					$('#style-switcher button').removeClass();
					$('#green').addClass('clicked');
					$.cookie('my_color', 'green');  
 
					
				});
				$('#orange').click(function(){
					$('body').removeClass().addClass('orange');
					$('#style-switcher button').removeClass();
					$('#orange').addClass('clicked');
					$.cookie('my_color', 'orange');  
				});
				$('#pink').click(function(){
					$('body').removeClass().addClass('pink');
					$('#style-switcher button').removeClass();
					$('#pink').addClass('clicked');
					$.cookie('my_color', 'pink');
				});
				$('#turquoise').click(function(){
					$('body').removeClass().addClass('turquoise');
					$('#style-switcher button').removeClass();
					$('#turquoise').addClass('clicked');
					$.cookie('my_color', 'turquoise');
				});
				$('#blue').click(function(){
					$('body').removeClass().addClass('blue');
					$('#style-switcher button').removeClass();
					$('#blue').addClass('clicked');
					$.cookie('my_color', 'blue');
				});
				$('#magenta').click(function(){
					$('body').removeClass().addClass('magenta');
					$('#style-switcher button').removeClass();
					$('#magento').addClass('clicked');
					$.cookie('my_color', 'magento');
				});
				$('#lightsteelblue').click(function(){
					$('body').removeClass().addClass('lightsteelblue');
					$('#style-switcher button').removeClass();
					$('#lightsteelblue').addClass('clicked');
					$.cookie('my_color', 'lightsteelblue');
				});
				$('#plum').click(function(){
					$('body').removeClass().addClass('plum');
					$('#style-switcher button').removeClass();
					$('#plum').addClass('clicked');
					$.cookie('my_color', 'plum');
				});
				$('#silver').click(function(){
					$('body').removeClass().addClass('silver');
					$('#style-switcher button').removeClass();
					$('#silver').addClass('clicked');
					$.cookie('my_color', 'silver');
				});
				$('#maroon').click(function(){
					$('body').removeClass().addClass('maroon');
					$('#style-switcher button').removeClass();
					$('#maroon').addClass('clicked');
					$.cookie('my_color', 'maroon');
				});
				
				$('#khaki').click(function(){
					$('body').removeClass().addClass('khaki');
					$('#style-switcher button').removeClass();
					$('#khaki').addClass('clicked');
					$.cookie('my_color', 'khaki');
				});
				$('#olive').click(function(){
					$('body').removeClass().addClass('olive');
					$('#style-switcher button').removeClass();
					$('#olive').addClass('clicked');
					$.cookie('my_color', 'olive');
				});
				$('#navy').click(function(){
					$('body').removeClass().addClass('navy');
					$('#style-switcher button').removeClass();
					$('#navy').addClass('clicked');
					$.cookie('my_color', 'navy');
				});
				$('#lime').click(function(){
					$('body').removeClass().addClass('lime');
					$('#style-switcher button').removeClass();
					$('#lime').addClass('clicked');
					$.cookie('my_color', 'lime');
				});
				$('#darkgray').click(function(){
					$('body').removeClass().addClass('darkgray');
					$('#style-switcher button').removeClass();
					$('#darkgray').addClass('clicked');
					$.cookie('my_color', 'darkgray');
				});
				$('#brown').click(function(){
					$('body').removeClass().addClass('brown');
					$('#style-switcher button').removeClass();
					$('#brown').addClass('clicked');
					$.cookie('my_color', 'brown');
				});
				$('#mistyrose').click(function(){
					$('body').removeClass().addClass('mistyrose');
					$('#style-switcher button').removeClass();
					$('#mistyrose').addClass('clicked');
					$.cookie('my_color', 'mistyrose');
				});
				$('#palegreen').click(function(){
					$('body').removeClass().addClass('palegreen');
					$('#style-switcher button').removeClass();
					$('#palegreen').addClass('clicked');
					$.cookie('my_color', 'palegreen');
				});
				$('#tomato').click(function(){
					$('body').removeClass().addClass('tomato');
					$('#style-switcher button').removeClass();
					$('#tomato').addClass('clicked');
					$.cookie('my_color', 'tomato');
				});
				$('#teal').click(function(){
					$('body').removeClass().addClass('teal');
					$('#style-switcher button').removeClass();
					$('#teal').addClass('clicked');
					$.cookie('my_color', 'teal');
				});
				$('#red').click(function(){
					$('body').removeClass().addClass('red');
					$('#style-switcher button').removeClass();
					$('#red').addClass('clicked');
					$.cookie('my_color', 'red');
				});
				$('#aqua').click(function(){
					$('body').removeClass().addClass('aqua');
					$('#style-switcher button').removeClass();
					$('#aqua').addClass('clicked');
					$.cookie('my_color', 'aqua');
				});
				$('#black').click(function(){
					$('body').removeClass().addClass('black');
					$('#style-switcher button').removeClass();
					$('#black').addClass('clicked');
					$.cookie('my_color', 'black');
				});
				$('#yellow').click(function(){
					$('body').removeClass().addClass('yellow');
					$('#style-switcher button').removeClass();
					$('#yellow').addClass('clicked');
					$.cookie('my_color', 'yellow');
				});
				
				//color finished
				
				//Texture starts
				$('#t1').click(function(){
					$('body').removeClass().addClass('t1');
					$('#style-switcher img').removeClass();
					$('#t1').addClass('clicked');
					$.cookie('my_color', 't1');
				});
				$('#t2').click(function(){
					$('body').removeClass().addClass('t2');
					$('#style-switcher img').removeClass();
					$('#t2').addClass('clicked');
					$.cookie('my_color', 't2');
				});
				$('#t3').click(function(){
					$('body').removeClass().addClass('t3');
					$('#style-switcher img').removeClass();
					$('#t3').addClass('clicked');
					$.cookie('my_color', 't3');
				});
				$('#t4').click(function(){
					$('body').removeClass().addClass('t4');
					$('#style-switcher img').removeClass();
					$('#t4').addClass('clicked');
					$.cookie('my_color', 't4');
				});
				$('#t5').click(function(){
					$('body').removeClass().addClass('t5');
					$('#style-switcher img').removeClass();
					$('#t5').addClass('clicked');
					$.cookie('my_color', 't5');
				});
				$('#t6').click(function(){
					$('body').removeClass().addClass('t6');
					$('#style-switcher img').removeClass();
					$('#t6').addClass('clicked');
					$.cookie('my_color', 't6');
				});
				$('#t7').click(function(){
					$('body').removeClass().addClass('t7');
					$('#style-switcher img').removeClass();
					$('#t7').addClass('clicked');
					$.cookie('my_color', 't7');
				});
				$('#t8').click(function(){
					$('body').removeClass().addClass('t8');
					$('#style-switcher img').removeClass();
					$('#t8').addClass('clicked');
					$.cookie('my_color', 't8');
				});
				$('#t9').click(function(){
					$('body').removeClass().addClass('t9');
					$('#style-switcher img').removeClass();
					$('#t9').addClass('clicked');
					$.cookie('my_color', 't9');
				});
				$('#t10').click(function(){
					$('body').removeClass().addClass('t10');
					$('#style-switcher img').removeClass();
					$('#t10').addClass('clicked');
					$.cookie('my_color', 't10');
				});
				$('#t11').click(function(){
					$('body').removeClass().addClass('t11');
					$('#style-switcher img').removeClass();
					$('#t11').addClass('clicked');
					$.cookie('my_color', 't11');
				});
				$('#t12').click(function(){
					$('body').removeClass().addClass('t12');
					$('#style-switcher img').removeClass();
					$('#t12').addClass('clicked');
					$.cookie('my_color', 't12');
				});
				$('#t13').click(function(){
					$('body').removeClass().addClass('t13');
					$('#style-switcher img').removeClass();
					$('#t13').addClass('clicked');
					$.cookie('my_color', 't13');
				});
				$('#t14').click(function(){
					$('body').removeClass().addClass('t14');
					$('#style-switcher img').removeClass();
					$('#t14').addClass('clicked');
					$.cookie('my_color', 't14');
				});
				$('#t15').click(function(){
					$('body').removeClass().addClass('t15');
					$('#style-switcher img').removeClass();
					$('#t15').addClass('clicked');
					$.cookie('my_color', 't15');
				});
				$('#t16').click(function(){
					$('body').removeClass().addClass('t16');
					$('#style-switcher img').removeClass();
					$('#t16').addClass('clicked');
					$.cookie('my_color', 't16');
				});
				$('#t17').click(function(){
					$('body').removeClass().addClass('t17');
					$('#style-switcher img').removeClass();
					$('#t17').addClass('clicked');
					$.cookie('my_color', 't17');
				});
				$('#t18').click(function(){
					$('body').removeClass().addClass('t18');
					$('#style-switcher img').removeClass();
					$('#t18').addClass('clicked');
					$.cookie('my_color', 't18');
				});
				$('#t19').click(function(){
					$('body').removeClass().addClass('t19');
					$('#style-switcher img').removeClass();
					$('#t19').addClass('clicked');
					$.cookie('my_color', 't19');
				});
				$('#t20').click(function(){
					$('body').removeClass().addClass('t20');
					$('#style-switcher img').removeClass();
					$('#t20').addClass('clicked');
					$.cookie('my_color', 't20');
				});
				$('#t21').click(function(){
					$('body').removeClass().addClass('t21');
					$('#style-switcher img').removeClass();
					$('#t21').addClass('clicked');
					$.cookie('my_color', 't21');
				});
				$('#t22').click(function(){
					$('body').removeClass().addClass('t22');
					$('#style-switcher img').removeClass();
					$('#t22').addClass('clicked');
					$.cookie('my_color', 't22');
				});
				$('#t23').click(function(){
					$('body').removeClass().addClass('t23');
					$('#style-switcher img').removeClass();
					$('#t23').addClass('clicked');
					$.cookie('my_color', 't23');
				});
				$('#t24').click(function(){
					$('body').removeClass().addClass('t24');
					$('#style-switcher img').removeClass();
					$('#t24').addClass('clicked');
					$.cookie('my_color', 't24');
				});
				
				//texture finished
				
});