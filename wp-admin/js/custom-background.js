var farbtastic,pickColor;(function(a){pickColor=function(c,b){farbtastic.setColor(c);a("#background-color").val(c);a("#custom-background-image").css("background-color",c);console.log(c);if(typeof b==="undefined"){b=!c||c==="#"}if(b){a("#clearcolor").hide()}else{a("#clearcolor").show()}};a(document).ready(function(){a("#pickcolor").click(function(){a("#colorPickerDiv").show();return false});a("#clearcolor a").click(function(b){pickColor(a("#defaultcolor").val(),true);b.preventDefault()});a("#background-color").keyup(function(){var c=a("#background-color").val(),b=c;if(b.charAt(0)!="#"){b="#"+b}b=b.replace(/[^#a-fA-F0-9]+/,"");if(b!=c){a("#background-color").val(b)}if(b.length==4||b.length==7){pickColor(b)}});a('input[name="background-position-x"]').change(function(){a("#custom-background-image").css("background-position",a(this).val()+" top")});a('input[name="background-repeat"]').change(function(){a("#custom-background-image").css("background-repeat",a(this).val())});farbtastic=a.farbtastic("#colorPickerDiv",function(b){pickColor(b)});pickColor(a("#background-color").val());a(document).mousedown(function(){a("#colorPickerDiv").each(function(){var b=a(this).css("display");if(b=="block"){a(this).fadeOut(2)}})})})})(jQuery);