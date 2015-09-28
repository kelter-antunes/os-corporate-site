 $jQ(window).load(function() {

     var formloaded = false;
     var formH = 0;

     var resizeinterval = setInterval(function() {
         if (formloaded == false && $jQ("form").length !== 0) {

             formH = $jQ("form").height() + 20; //form padding is 20px
             ////console.log("Form height init: " + formH);

             var mkto_info = {
                 'mkto_frame': {
                     'onload': true,
                     'height': formH
                 }
             };
             parent.parent.postMessage(JSON.stringify(mkto_info), '*');

             formloaded = true;

             //console.log("Message Sent! RESIZE");
         } else {
             if (formloaded) {
                 clearInterval(resizeinterval);
             }
         }

     }, 1000);


     $jQ("form").children().each(function() {
         $jQ(this).bind('change focus', function(event) {
             //console.log("Form height init: " + formH);
             //console.log("Form height: " + $jQ("form").height() + 20);

             var diff = $jQ("form").height() + 20 - formH;
             //console.log("Diff: " + diff);

             //window.parent.$('#mkto_frame').height(window.parent.$('#mkto_frame').height() + diff);// = $jQ("form").height() + 15 + diff +"px";

             formH = $jQ("form").height() + 20;

             var mkto_info = {
                 'mkto_frame': {
                     'onload': true,
                     'height': formH
                 }
             };
             parent.parent.postMessage(JSON.stringify(mkto_info), '*');

         });
     });


 });
