
       function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

    


        function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
 
  



       if(window.location.href.indexOf("lifeup") > -1) {
       window.onhashchange = function() {
           window.location.reload();
          }
       }
          
        
    


if (jQuery(".single-product")[0]){
    var tags = jQuery('.woocommerce-product-details__short-description p:last-child').html();
    
    if (tags.indexOf('Tags') < 0  && tags.indexOf('tags') < 0) {
   jQuery('.woocommerce-product-details__short-description p:last-child').show();
}

}



 jQuery( ".woof_container_product_tag" ).click(function() {
   //count_exist = jQuery("ul.chosen-results li").length;  
//for ( var i = 1;  i <= count_exist; i++ ) {
   

//if(jQuery("ul.chosen-results li:nth-child("+ i +")").hasClass("disabled-result")){
//    jQuery("ul.chosen-results li:nth-child("+ i +")").hide();
//}
//}

 jQuery( ".chosen-results li:nth-child(3)").click();

     jQuery('.chosen-results li:nth-child(3)').click(function(e){
   e.stopImmediatePropagation();
   alert('hi');
});
     
 });


/*
jQuery( document ).ready(function() {
    jQuery( ".woof_container_product_tag" ).click(function() {
        count_exist = jQuery("ul.chosen-results li").length;  
for ( var i = 1;  i <= count_exist; i++ ) {
   

if(jQuery("ul.chosen-results li:nth-child("+ i +")").hasClass("disabled-result")){
    jQuery("ul.chosen-results li:nth-child("+ i +")").hide();
}
}


});

 jQuery( ".woof_container_product_tag" ).keyup(function() {
        count_exist = jQuery("ul.chosen-results li").length;  
for ( var i = 1;  i <= count_exist; i++ ) {
   

if(jQuery("ul.chosen-results li:nth-child("+ i +")").hasClass("disabled-result")){
    jQuery("ul.chosen-results li:nth-child("+ i +")").hide();
}
}


});
});
  

*/


var i=0;
jQuery( ".woof_container.woof_container_mselect.woof_container_product_tag.woof_container_" ).after( "<div class='search_nums_filters2'>ΦΙΛΤΡΑ("+ i +")</div>" );

jQuery( ".woof_text_search_container input[type='search']" ).after( "<div class='search_nums_filters'>ΦΙΛΤΡΑ <span class='arrow_cat'></span></div>" );




jQuery( ".search_nums_filters2" ).after( "<div class='search_submit'><a href='javascript:void(0);' data-uid='woof_text_search_581e08abf3909' class='woof_text_search_go woof_text_search_581e08abf3909'></a></div>" );


jQuery( "ul.woof_list.woof_list_checkbox input" ).click(function() {
  var count =0;
  var count2=0;
 count = jQuery(".woof_container_product_cat ul.woof_list.woof_list_checkbox li").length;  
var count_checked_cat=0;
for ( var j = 1;  j <= count; j++ ) {
   if (jQuery(".woof_container_product_cat ul.woof_list.woof_list_checkbox li:nth-child("+ j +") input:checked").length > 0)
{
    count_checked_cat++;
}

}
 count2 = jQuery(".woof_container_pa_needs ul.woof_list.woof_list_checkbox li").length;  
var count_checked_need=0;
for ( var j = 1;  j <= count2; j++ ) {
   
   if (jQuery(".woof_container_pa_needs ul.woof_list.woof_list_checkbox li:nth-child("+ j +") input:checked").length > 0)
{
    count_checked_need++;
}

}
i=count_checked_cat+count_checked_need;
if (i==0){
  jQuery(".search_nums_filters").html("ΦΙΛΤΡΑ <span class='arrow_cat open'></span>");  
}
else{
jQuery(".search_nums_filters").html("ΦΙΛΤΡΑ ("+ i +")<span class='arrow_cat open'></span>");
}


});

/*
jQuery( document ).ready(function() {
  var count =0;
  var count2=0;
 count = jQuery(".woof_container_product_cat ul.woof_list.woof_list_checkbox li").length;  
var count_checked_cat=0;
for ( var j = 1;  j <= count; j++ ) {
   if (jQuery(".woof_container_product_cat ul.woof_list.woof_list_checkbox li:nth-child("+ j +") input:checked").length > 0)
{
    count_checked_cat++;
}

}
 count2 = jQuery(".woof_container_pa_needs ul.woof_list.woof_list_checkbox li").length;  
var count_checked_need=0;
for ( var j = 1;  j <= count2; j++ ) {
   
   if (jQuery(".woof_container_pa_needs ul.woof_list.woof_list_checkbox li:nth-child("+ j +") input:checked").length > 0)
{
    count_checked_need++;
}

}
i=count_checked_cat+count_checked_need;
jQuery(".search_nums_filters").html("ΚΑΤΗΓΟΡΙΕΣ("+ i +")");



});
*/

jQuery( ".woof_text_search_container input[type='search']" ).keypress(function() {
  


});



jQuery( " .page-id-9 .woof_container_checkbox" ).wrapAll( "<div class='wrap_containers' />");


jQuery( " .page-id-9 .wrap_containers" ).wrap( "<div class='wrap_containers_first' />");




jQuery(".page-id-9 .search_nums_filters").click(function(){
    if (!jQuery(".wrap_containers").hasClass("show")){
    jQuery(".wrap_containers").slideToggle();
    jQuery(".wrap_containers").addClass("show");
    jQuery(".arrow_cat").addClass("open");
     jQuery("#none").css("height","0");
      jQuery("#none").css("opacity","0");
       jQuery("#none").css("visibility","hidden");
     jQuery("#none2").hide();
     jQuery(" .background_image_margin_negative").css("margin-top","-100px");
    

}
else{
    jQuery(".wrap_containers").slideUp();
    jQuery(".wrap_containers").removeClass("show");
    jQuery(".arrow_cat").removeClass("open");
     jQuery("#none").css("height","inherit");
     jQuery("#none").css("opacity","1");
       jQuery("#none").css("visibility","visible");
    jQuery("#none2").show();
         jQuery(" .background_image_margin_negative").css("margin-top","0px");

}


});


jQuery(".post-type-archive-product.fusion-woo-product-design-classic ul.woof_list.woof_list_checkbox li input").click(function() {
    // jQuery(".post-type-archive-product.fusion-woo-product-design-classic input").trigger("click");
    setTimeout(function(){
    jQuery(".post-type-archive-product.fusion-woo-product-design-classic button.button.woof_submit_search_form").trigger("click");
    }, 200);
});

    
    
jQuery(".post-type-archive-product.fusion-woo-product-design-classic ul.woof_list.woof_list_checkbox li .woof_checkbox_label").click(function() {
    // jQuery(".post-type-archive-product.fusion-woo-product-design-classic input").trigger("click");
    setTimeout(function(){
    jQuery(".post-type-archive-product.fusion-woo-product-design-classic button.button.woof_submit_search_form").trigger("click");
    }, 200);
});

    

 /*   

    jQuery( document ).ready(function() {
         setTimeout(function(){
    var car_items=jQuery(".owl-stage > div").length;
   
    for ( var j = 2;  j <= car_items; j++ ) {
        
    // if (!jQuery(".owl-stage div:nth-child("+ j +")").hasClass("cloned")){   
    var excerpt_car = jQuery(".owl-stage .owl-item:nth-child("+ j +") .woocommerce-products-carousel-all-in-one-desc").text().substr(0, 36) + '...';

 //  alert(excerpt_car);
    jQuery(".owl-stage .owl-item:nth-child("+ j +") .woocommerce-products-carousel-all-in-one-desc").html(excerpt_car);
    
    } 
    jQuery(".owl-stage-outer.owl-height").css("max-height","520px");
   //  }
         }, 1000);
    });
    
    */
   

    jQuery( document ).ready(function() {
         jQuery('.page-id-9 input').removeAttr('checked');
   
         
    });
    
    

    jQuery( document ).ready(function() {
        var href = jQuery('.woof_products_top_panel li [data-tax="woof_text"]').attr('href');
       
         //jQuery('.woof_products_top_panel li [data-tax="woof_text"]').before("<div class='text_filter_title'>Φίλτρο κειμένου:</div>");
          jQuery('.woof_products_top_panel li [data-tax="woof_text"] span').html(href);
   
         
    });
    
    
    
    

jQuery( ".cat_name a" ).after( "<div class='line_cat'><img src='https://lamberts.gr/wp-content/uploads/2016/11/line_cat.png'></div>" );



/*
    

jQuery( ".nav-tabs li:nth-child(1)" ).click(function(){

   jQuery("#tab-6f65ce24fadc108c3f9").css("display", "block ");

    jQuery("#tab-6f65ce24fadc108c3f9").css("opacity", "1 ");
       jQuery("#tab-d05c7e7ca2753e2c807").css("display", "none ");

    jQuery("#tab-d05c7e7ca2753e2c807").css("opacity", "0 ");
    jQuery("#tab-32fb6799ad1353626e8").css("display", "none ");

    jQuery("#tab-32fb6799ad1353626e8").css("opacity", "0 ");
});
jQuery( ".nav-tabs li:nth-child(2)" ).click(function(){
   jQuery("#tab-d05c7e7ca2753e2c807").css("display", "block ");

    jQuery("#tab-d05c7e7ca2753e2c807").css("opacity", "1 ");
       jQuery("#tab-6f65ce24fadc108c3f9").css("display", "none ");

    jQuery("#tab-6f65ce24fadc108c3f9").css("opacity", "0 ");
    jQuery("#tab-32fb6799ad1353626e8").css("display", "none ");

    jQuery("#tab-32fb6799ad1353626e8").css("opacity", "0 ");
});
jQuery( ".nav-tabs li:nth-child(3)" ).click(function(){
   jQuery("#tab-32fb6799ad1353626e8").css("display", "block ");

    jQuery("#tab-32fb6799ad1353626e8").css("opacity", "1 ");
       jQuery("#tab-6f65ce24fadc108c3f9").css("display", "none ");

    jQuery("#tab-6f65ce24fadc108c3f9").css("opacity", "0 ");
    jQuery("#tab-d05c7e7ca2753e2c807").css("display", "none ");

    jQuery("#tab-d05c7e7ca2753e2c807").css("opacity", "0 ");

});

*/





jQuery( "document" ).ready(function() {
if (jQuery(window).width() > 767) {
  setTimeout(function(){
  
    jQuery( ".page-id-9 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).trigger("click");
     jQuery( ".page-id-9 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).addClass("active");
    jQuery( ".page-id-9 .background_image_margin_negative .nav-tabs li:nth-child(1)" ).removeClass("active");
   
    jQuery( ".page-id-9 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).addClass("active");
   }, 500)
}
});

    
    
    
jQuery( "document" ).ready(function() {
if (jQuery(window).width() < 768) {
  setTimeout(function(){
  
    jQuery( ".page-id-9 .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).trigger("click");
    jQuery( ".page-id-9 .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).addClass("active");
     jQuery( ".page-id-9 .nav-tabs li:nth-child(2)" ).addClass("active");
   }, 500);
}
});

    


   

jQuery( ".page-id-9 .nav-tabs li:nth-child(1)" ).click(function(){

   jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "1");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "inherit");
                     jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "0");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "0");
         jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807  .owl-height").css("max-height", "0");

   
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "0");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "0");
             jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "0");

});
jQuery( ".page-id-9 .nav-tabs li:nth-child(2)" ).click(function(){
   jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "1");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "inherit");
     jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "0");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "0");
                 jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "0");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "0");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "0");
                     jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "0");

});
jQuery( ".page-id-9 .nav-tabs li:nth-child(3)" ).click(function(){
   jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "1");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "inherit");
         jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "0");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "0");
                     jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "0");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "0");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "0");
                     jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807 .owl-height").css("max-height", "0");

});




    
    
    
    
    
    
    

    
    
    
    
    
/*    
    
    
    jQuery( window ).resize(function(){ 
    setTimeout(function(){   
      var content= jQuery(".tab-content >div").length; 
        
 for ( var i = 1;  i <= content; i++ ) {
  if  (jQuery(".tab-content >div:nth-child("+ i +")").hasClass("active")){
  
  var h=jQuery(".tab-content >div:nth-child("+ i +") .owl-height").css("height");
  var w=jQuery(".tab-content >div:nth-child("+ i +") .owl-stage").css("width");
   var l=jQuery(".tab-content >div:nth-child("+ i +") .owl-stage").css("left");
   var w2=jQuery(".tab-content >div:nth-child("+ i +") .owl-item").css("width");
  
   for ( var j = 1;  j <= content; j++ ) {
  if (j!=i){
      //alert("opa");
    jQuery(".tab-content >div:nth-child("+ j +") .owl-height").css("height",h);
  jQuery(".tab-content >div:nth-child("+ j +") .owl-stage").css("width",w);
   jQuery(".tab-content >div:nth-child("+ j +") .owl-stage").css("left",l);
   jQuery(".tab-content >div:nth-child("+ j +") .owl-item").css("width",w2);
   
  }
  }

  }
  }
    }, 2000);

    });
          
          */
          
      
   

jQuery( ".page-id-9 .tab-content .nav.fusion-mobile-tab-nav:nth-child(1)" ).click(function(){

   jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "1");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "inherit");
    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "0");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "0");
        jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807  .owl-height").css("max-height", "0");

    
    
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "0");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "0");
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "0");

    
    
});
jQuery( ".page-id-9 .tab-content .nav.fusion-mobile-tab-nav:nth-child(3)" ).click(function(){
   jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "1");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "inherit");
        jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "0");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "0");
        jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "0");

    
    
    
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "0");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "0");
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "0");

});
jQuery( ".page-id-9 .tab-content .nav.fusion-mobile-tab-nav:nth-child(5)" ).click(function(){
   jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("opacity", "1");

    jQuery(".page-id-9 #tab-32fb6799ad1353626e8").css("height", "inherit");
    jQuery(".page-id-9 #tab-32fb6799ad1353626e8  .owl-height").css("max-height", "inherit");

       jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("opacity", "0");

    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9").css("height", "0");
    jQuery(".page-id-9 #tab-6f65ce24fadc108c3f9  .owl-height").css("max-height", "0");

    
    
    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("opacity", "0");

    jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807").css("height", "0");
        jQuery(".page-id-9 #tab-d05c7e7ca2753e2c807  .owl-height").css("max-height", "0");


});


var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x>800){
jQuery(".img_circle1").hover(function(){
    jQuery(".img_circle1").css("background-color", "rgba(255,255,255,0.9)");
     jQuery(".img_circle1 img").css("display", "none");
      jQuery(".footer_circle_text1").html("<div style=' padding-left: 18px; padding-right: 18px;'><div style=' font-size:12px; margin-bottom:5px; color:#ED1C24;'>Βρείτε μας</div><div style='font-size:12px; color:#243D91;'>Όθωνος 133, Αγ. Δημήτριος</div></div>");
    }, function(){
    jQuery(this).css("background-color", "rgba(34,64,147,0.7)");
    jQuery(".img_circle1 img").css("display", "inline-block");
    jQuery(".footer_circle_text1").html("ΔΙΕΥΘΥΝΣΗ");
});
}


var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x>800){
jQuery(".img_circle2").hover(function(){
    jQuery(".img_circle2").css("background-color", "rgba(255,255,255,0.9)");
     jQuery(".img_circle2 img").css("display", "none");
      jQuery(".footer_circle_text2").html("<div style=' padding-left: 18px; padding-right: 18px;'><div style=' font-size:12px; margin-bottom:5px; color:#ED1C24;'>Στείλτε μας e-mail</div><div style='font-size:12px;  color:#243D91;'>lamberts@greenimport.gr</div></div>");
    }, function(){
    jQuery(this).css("background-color", "rgba(34,64,147,0.7)");
    jQuery(".img_circle2 img").css("display", "inline-block");
    jQuery(".footer_circle_text2").html("EMAIL");
});
}


var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x>800){
jQuery(".img_circle3").hover(function(){
    jQuery(".img_circle3").css("background-color", "rgba(255,255,255,0.9)");
     jQuery(".img_circle3 img").css("display", "none");
      jQuery(".footer_circle_text3").html("<div style=' padding-left: 18px; padding-right: 18px;'><div style=' font-size:12px; margin-bottom:5px; color:#ED1C24;'>Καλέστε μας</div><div style='font-size:12px; color:#243D91;'>2109329139<br>2109329140<br>2109753450</div></div>");
    }, function(){
    jQuery(this).css("background-color", "rgba(34,64,147,0.7)");
    jQuery(".img_circle3 img").css("display", "inline-block");
    jQuery(".footer_circle_text3").html("ΤΗΛΕΦΩΝΟ");
});
}


    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x<600){
       jQuery(".contact_footer_header.newsletter_open img").attr("src","https://lamberts.gr/wp-content/uploads/2017/04/Fill-in-the-contact-form_DOWN_01.png");
        jQuery(".contact_footer_header img").attr("src","https://lamberts.gr/wp-content/uploads/2017/04/Fill-in-the-contact-form_UP_01.png");
   }


 jQuery(".contact_footer_header img").click(function(){   
       var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
  
     if (!jQuery(".contact_footer_header").hasClass("newsletter_open")){
   setTimeout(function(){  
       if (x>599){
   jQuery(".contact_footer_header img").attr("src", "https://lamberts.gr/wp-content/uploads/2017/04/contact_form_background_gr_2.png");
       }
       else{
         jQuery(".contact_footer_header img").attr("src", "https://lamberts.gr/wp-content/uploads/2017/04/Fill-in-the-contact-form_DOWN_01.png");  
       }
   }, 300);
      jQuery(".contact_footer_header").css("max-height",  "1000px");
                    jQuery(".contact_footer_header").addClass("newsletter_open");
     }
     else{
      var header_newsletter_height = jQuery(".contact_footer_header img").height()-1;
      
         jQuery(".contact_footer_header").css("max-height",  header_newsletter_height);
         jQuery(".contact_footer_header").removeClass("newsletter_open");
                 setTimeout(function(){
                      if (x>599){
                 jQuery(".contact_footer_header img").attr("src", "https://lamberts.gr/wp-content/uploads/2017/04/contact_form_background_gr.png");
                      }
                      else{
                         jQuery(".contact_footer_header img").attr("src", "https://lamberts.gr/wp-content/uploads/2017/04/Fill-in-the-contact-form_UP_01.png");  
                      }
                 }, 300);

         
     }
         
     
 });


    jQuery(window).load(function(){
    
    var header_newsletter_height = jQuery(".contact_footer_header img").height()-1;
      
         jQuery(".contact_footer_header").css("max-height",  header_newsletter_height);
    });
    
    
    jQuery(window).resize(function(){
    
    var header_newsletter_height = jQuery(".contact_footer_header img").height()-1;
      if (!jQuery(".contact_footer_header").hasClass("newsletter_open")){
         jQuery(".contact_footer_header").css("max-height",  header_newsletter_height);
    
      }
      });
    
    
        jQuery(document).ready(function(){
     //jQuery(".single-product .fusion-breadcrumbs [itemprop='title']").each(function(i,obj) {        
       
       jQuery(".single-product .fusion-breadcrumbs span a span").each(function(i,obj) {        
       
    if (jQuery(this).html()!="Home" && jQuery(this).html()!="Αρχική"){
        var cat_title = jQuery(this).text();
        cat_title = cat_title.toLowerCase();
        cat_title = cat_title.replace(' & ','-');
       cat_title = cat_title.replace(/ /g, '-');
       //jQuery(".single-product .fusion-breadcrumbs [itemprop='title']")[0].attr('href','lamberts.gr/products/?swoof=1&product_cat='+ cat_title+'');
         
       jQuery(this).parent().attr("href","https://lamberts.gr/products/?swoof=1&product_cat="+ cat_title+"");
        
    }
     });
        });
    
    
    
    
    
    
    
  /*youtube video js api */
    /* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */
 
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                jQuery(".youtube-player").append("<div class='overlay_yt'></div>");
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });
 
    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }
 
    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1&rel=0";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }
 



    
    jQuery(".smsb_twitter").after("<span style='cursor:pointer' class='smsb_print custom' onClick='window.print()'><img src='https://lamberts.gr/wp-content/uploads/2016/12/print_prod.png'></span>")

/*
jQuery(document).ready(function(){
	jQuery(".single-product .images .woocommerce-product-gallery__image").prepend("<img src='https://lamberts.gr/wp-content/uploads/2016/12/zoom_prod.png' alt='zoom' style='position:absolute;bottom:5px;right:10px;width:30px;height:29px;border:none;' class='zoom' />");
});


if (jQuery(window).width() > 800) {
jQuery(".single-product .tab-link h4").append("<span class='prod_tabs_arrow'><img src='https://lamberts.gr/wp-content/uploads/2016/12/arrow_tabs.png'></span>");
}
*/

jQuery(".fusion-rollover-content .fusion-rollover-title a").html("<img src='https://lamberts.gr/wp-content/uploads/2016/12/blog_more.png'>");    
    


    
    


    jQuery(".woocommerce-result-count").text(function () {
    return jQuery(this).text().replace("Εμφανίζονται", ""); 
});

 

jQuery( ".product-details .product-details-container >a:nth-child(1)" ).after( "<div class='line_cat'><img src='https://lamberts.gr/wp-content/uploads/2016/11/line_cat.png'></div>" );





jQuery( ".page-id-798 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );
//jQuery( ".page-id-796 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );
//jQuery( ".page-id-3533 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/04/athletic-nutrition_slider_01.jpg'></div>" );




jQuery( ".page-id-901 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );





jQuery( ".page-id-905 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );





jQuery( ".page-id-910 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );





jQuery( ".page-id-921 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );




jQuery( ".page-id-1833 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src=' https://lamberts.gr/wp-content/uploads/2017/01/scientific_stuff_banner.jpg'></div>" );
   




jQuery("#ygeia_hover").hover(function(){
    jQuery( "#ygeia_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/ygeia_hover.png" );
    }, function(){
        jQuery( "#ygeia_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/ygeia.png" );

});






jQuery("#paidi_hover").hover(function(){
    jQuery( "#paidi_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/paidi_hover.png" );
    }, function(){
        jQuery( "#paidi_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/paidi.png" );

});





jQuery("#fitness_hover").hover(function(){
    jQuery( "#fitness_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/fitness_hover.png" );
    }, function(){
        jQuery( "#fitness_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/fitness.png" );

});





jQuery("#psixologia_hover").hover(function(){
    jQuery( "#psixologia_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/psixologia_hover.png" );
    }, function(){
        jQuery( "#psixologia_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/psixologia.png" );

});





jQuery("#diatrofi_hover").hover(function(){
    jQuery( "#diatrofi_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/diatrofi_hover.png" );
    }, function(){
        jQuery( "#diatrofi_hover" ).attr( "src","https://lamberts.gr/wp-content/uploads/2016/12/diatrofi.png" );

});



jQuery(".life_up_recent .fusion-alignleft span").prepend("<img style='vertical-align: middle; padding-right: 20px; padding-left: 10px;' src='https://lamberts.gr/wp-content/uploads/2016/12/recent_calendar.png'>");


jQuery(".life_up_recent .fusion-alignright a").html("<img src='https://lamberts.gr/wp-content/uploads/2016/11/articles_more.png'>");


jQuery("#life_diatrofi article").prepend("<div class='article_header_green'><img style='vertical-align:middle;' src='https://lamberts.gr/wp-content/uploads/2016/12/diatrofi_art_header.png'><span class='article_header_green_title'>ΔΙΑΤΡΟΦΗ</span></div>");


jQuery("#life_ygeia article").prepend("<div class='article_header_green'><img style='vertical-align:middle;' src='https://lamberts.gr/wp-content/uploads/2016/12/ygeia_art_header.png'><span class='article_header_green_title'>ΥΓΕΙΑ</span></div>");


jQuery("#life_paidi article").prepend("<div class='article_header_green'><img style='vertical-align:middle;' src='https://lamberts.gr/wp-content/uploads/2016/12/paidi_art_header.png'><span class='article_header_green_title'>ΠΑΙΔΙ</span></div>");


jQuery("#life_fitness article").prepend("<div class='article_header_green'><img style='vertical-align:middle;' src='https://lamberts.gr/wp-content/uploads/2016/12/fitness_art_header.png'><span class='article_header_green_title'>FITNESS</span></div>");


jQuery("#life_psixologia article").prepend("<div class='article_header_green'><img style='vertical-align:middle;' src='https://lamberts.gr/wp-content/uploads/2016/12/psixologia_art_header.png'><span class='article_header_green_title'>ΨΥΧΟΛΟΓΙΑ</span></div>");



/*


jQuery( ".post-type-archive.post-type-archive-product.woocommerce-page .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2016/12/lifeup_diatrofi_banner.png'></div>" );



*/


//jQuery( ".page-id-933 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/04/Per-Category_Banner.jpg'></div>" );
jQuery( ".page-id-1444 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/04/Per-Health-Need_Banner.jpg'></div>" );









    
      function initialize() {
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(37.93112392481189,23.728686501852376);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
 
    // Attach a map to the DOM Element, with the defined settings
  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(37.93112392481189,23.728686501852376)});
    infowindow = new google.maps.InfoWindow({content:'<strong>Lamberts</strong><br>Όθωνος 133<br>17343, Αθήνα<br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
}  
if (document.getElementById('map')){
    initialize();
}

 
    
    
    


jQuery('#diatrofi_hover').click(function(e) {

   
    jQuery(".life_up_circles_all img").removeClass("life_active")
        jQuery(this).addClass("life_active");
        

   jQuery("#life_diatrofi").show().siblings("div").hide();

});  
        
 jQuery('#ygeia_hover').click(function(e) {

   
    jQuery(".life_up_circles_all img").removeClass("life_active")
        jQuery(this).addClass("life_active");
   jQuery("#life_ygeia").show().siblings("div").hide();

}); 
jQuery('#paidi_hover').click(function(e) {

   
    jQuery(".life_up_circles_all img").removeClass("life_active")
        jQuery(this).addClass("life_active");
   jQuery("#life_paidi").show().siblings("div").hide();

}); 
jQuery('#fitness_hover').click(function(e) {

    
    jQuery(".life_up_circles_all img").removeClass("life_active")
        jQuery(this).addClass("life_active");
   jQuery("#life_fitness").show().siblings("div").hide();

}); 
jQuery('#psixologia_hover').click(function(e) {

   
    jQuery(".life_up_circles_all img").removeClass("life_active")
        jQuery(this).addClass("life_active");
   jQuery("#life_psixologia").show().siblings("div").hide();

}); 


jQuery('.life_up_circles_all img').click(function(e) { 
    

      jQuery(".life_up_circles_all img").each( function() {
    if(!jQuery(this).hasClass("life_active")){
        jQuery(this).attr('src', jQuery(this).attr('src').replace("_hover.png", ".png"));
      
      var life_id= jQuery(this).attr("id");
      if(!life_id.includes("hover")){
 life_id+="_hover";
 jQuery(this).attr("id",life_id);
      }
    }
});
  
   
     
   

      if(jQuery(this).hasClass("life_active")){
 var life_id= jQuery(this).attr("id");
 life_id=life_id.replace('_hover', '');
 jQuery(this).attr("id",life_id);
}
});   
    
    
    
    
    
    if(window.location.href.indexOf("lifeup") > -1) {
    jQuery( document ).ready(function() {
        var hash = window.location.hash.substr(1);
       if((hash=="cat_diatrofi")||!(window.location.hash)){
           jQuery("#life_diatrofi").show();
            jQuery("#diatrofi_hover").addClass("life_active");
            var life_id= jQuery("#diatrofi_hover").attr("id");
          life_id=life_id.replace('_hover', '');
          jQuery("#diatrofi_hover").attr("id",life_id);
           jQuery("#diatrofi").attr('src', jQuery("#diatrofi").attr('src').replace(".png", "_hover.png"));
       }
       else if(hash=="cat_ygeia"){
           jQuery("#life_ygeia").show();
            jQuery("#ygeia_hover").addClass("life_active");
            var life_id= jQuery("#ygeia_hover").attr("id");
          life_id=life_id.replace('_hover', '');
          jQuery("#ygeia_hover").attr("id",life_id);
           jQuery("#ygeia").attr('src', jQuery("#ygeia").attr('src').replace(".png", "_hover.png"));
       }
       else if(hash=="cat_paidi"){
           jQuery("#life_paidi").show();
            jQuery("#paidi_hover").addClass("life_active");
            var life_id= jQuery("#paidi_hover").attr("id");
          life_id=life_id.replace('_hover', '');
          jQuery("#paidi_hover").attr("id",life_id);
           jQuery("#paidi").attr('src', jQuery("#paidi").attr('src').replace(".png", "_hover.png"));
       }
        else if(hash=="cat_fitness"){
           jQuery("#life_fitness").show();
            jQuery("#fitness_hover").addClass("life_active");
            var life_id= jQuery("#fitness_hover").attr("id");
          life_id=life_id.replace('_hover', '');
          jQuery("#fitness_hover").attr("id",life_id);
           jQuery("#fitness").attr('src', jQuery("#fitness").attr('src').replace(".png", "_hover.png"));
       }
       else if(hash=="cat_psixologia"){
           jQuery("#life_psixologia").show();
            jQuery("#psixologia_hover").addClass("life_active");
            var life_id= jQuery("#psixologia_hover").attr("id");
          life_id=life_id.replace('_hover', '');
          jQuery("#psixologia_hover").attr("id",life_id);
           jQuery("#psixologia").attr('src', jQuery("#psixologia").attr('src').replace(".png", "_hover.png"));
       }
       
    });
    }
    
    
    jQuery(document).ready(function(){
        var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_diatrofi article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_diatrofi article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         
     
     }
     
     if (i==d_length&&hidden_art==0){
         
        jQuery('.show_more_d').css('display','none');
     }
     }  
    });
    
     jQuery(document).ready(function(){
        var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_ygeia article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_ygeia article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         
     
     }
     
     if (i==d_length&&hidden_art==0){
         
        jQuery('.show_more_y').css('display','none');
     }
     }  
    });
    
    jQuery(document).ready(function(){
        var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_paidi article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_paidi article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         
     
     }
     
     if (i==d_length&&hidden_art==0){
         
        jQuery('.show_more_p').css('display','none');
     }
     }  
    });
    
     jQuery(document).ready(function(){
        var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_fitness article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_fitness article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         
     
     }
     
     if (i==d_length&&hidden_art==0){
         
        jQuery('.show_more_f').css('display','none');
     }
     }  
    });
    jQuery(document).ready(function(){
        var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_psixologia article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_psixologia article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         
     
     }
     
     if (i==d_length&&hidden_art==0){
         
        jQuery('.show_more_ps').css('display','none');
     }
     }  
    });
    
    
    jQuery('.show_more_d').click(function(e) { 
  var k=0;
  var hidden_art=0;
     var d_length=jQuery("#life_diatrofi article").length;
     for ( var i = 1;  i <= d_length; i++ ) {
     if(jQuery("#life_diatrofi article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         if (k<4){
    // jQuery("#life_diatrofi article:nth-child("+i+")").show();
    jQuery("#life_diatrofi article:nth-child("+i+")").css('display','block');
    
     jQuery("#life_diatrofi article:nth-child("+i+")").animate({opacity:1.0},0);
        
     k++;
     }
     
     }
     
     if (i==d_length&&hidden_art<5){
         
         jQuery('.show_more_d').css('display','none');
     }
     }
    });
    
    
    jQuery('.show_more_y').click(function(e) { 
  var k=0;
  var hidden_art=0;
     var y_length=jQuery("#life_ygeia article").length;
     for ( var i = 1;  i <= y_length; i++ ) {
     if(jQuery("#life_ygeia article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         if (k<4){
     //jQuery("#life_ygeia article:nth-child("+i+")").show();
      jQuery("#life_ygeia article:nth-child("+i+")").css('display','block');
    
     jQuery("#life_ygeia article:nth-child("+i+")").animate({opacity:1.0},0);
        
     k++;
     }
     
     }
    
     if (i==y_length&&hidden_art<5){
         jQuery('.show_more_y').css('display','none');
     }
     }
    });
    
    
    jQuery('.show_more_p').click(function(e) { 
  var k=0;
  var hidden_art=0;
     var p_length=jQuery("#life_paidi article").length;
     for ( var i = 1;  i <= p_length; i++ ) {
     if(jQuery("#life_paidi article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         if (k<4){
     //jQuery("#life_paidi article:nth-child("+i+")").show();
      jQuery("#life_paidi article:nth-child("+i+")").css('display','block');
    
     jQuery("#life_paidi article:nth-child("+i+")").animate({opacity:1.0},0);
        
     k++;
     }
     
     }
     if (i==p_length&&hidden_art<5){
         jQuery('.show_more_p').css('display','none');
     }
     }
    });
    
    
    jQuery('.show_more_f').click(function(e) { 
  var k=0;
  var hidden_art=0;
     var f_length=jQuery("#life_fitness article").length;
     for ( var i = 1;  i <= f_length; i++ ) {
     if(jQuery("#life_fitness article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         if (k<4){
     //jQuery("#life_fitness article:nth-child("+i+")").show();
     jQuery("#life_fitness article:nth-child("+i+")").css('display','block');
    
     jQuery("#life_fitness article:nth-child("+i+")").animate({opacity:1.0},0);
        
     k++;
     }
     
     }
     if (i==f_length&&hidden_art<5){
         jQuery('.show_more_f').css('display','none');
     }
     }
    });
    
    
    
    jQuery('.show_more_ps').click(function(e) { 
  var k=0;
  var hidden_art=0;
     var ps_length=jQuery("#life_psixologia article").length;
     for ( var i = 1;  i <= ps_length; i++ ) {
     if(jQuery("#life_psixologia article:nth-child("+i+")").css('display') == 'none'){
         hidden_art++;
         if (k<4){
    
     jQuery("#life_psixologia article:nth-child("+i+")").css("display","block");
  
                          jQuery("#life_psixologia article:nth-child("+i+")").animate({opacity:1.0},0);
                   
  
    
  
    
     k++;
     }
     
     }
     if (i==ps_length&&hidden_art<5){
         jQuery('.show_more_ps').css('display','none');
     }
     }
    });
    
    
    
    
        
      jQuery( window ).load(function() {  
          if (jQuery("#my-calendar")[0]){
              
          }
    var events = jQuery('.my-calendar-table .mc-row td');
    
    var i;
     var k=0;
    for (i = 0; i < events.length; i++) {
       
        if (events.eq(i).hasClass("has-events")) {
            k++;
           var des= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .shortdesc p').html();
           
           var date= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .mc-event-date').html();
           if (k==1){
                jQuery("#my-calendar").append("<div class='calendar_all_events'><div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
           if (k==events.length-1){
                jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div></div>");
           }
           else{
          jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
        }
    }
      });
    jQuery(".my-calendar-next a").live('click',function(){
    if (jQuery('.loading').length) {
       event.preventDefault();
       jQuery(this).style.pointerEvents = 'none'; 
      }
    var interval=  setInterval(function() {
        
     if (!jQuery('.loading').length) {
         clearInterval(interval); 
       
  var events = jQuery('.my-calendar-table .mc-row td');
    
    var i;
     var k=0;
    for (i = 0; i < events.length; i++) {
       
        if (events.eq(i).hasClass("has-events")) {
            k++;
           var des= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .shortdesc p').html();
           
           var date= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .mc-event-date').html();
            if (k==1){
                jQuery("#my-calendar").append("<div class='calendar_all_events'><div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
           if (k==events.length-1){
                jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div></div>");
           }
           else{
          jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
        }
    }
    }
        },100);
    });
     jQuery(".my-calendar-prev a").live('click',function(){
      if (jQuery('.loading').length) {
       event.preventDefault();
       jQuery(this).style.pointerEvents = 'none'; 
      }
  var interval=  setInterval(function() {
        
   if (!jQuery('.loading').length) { 
       clearInterval(interval); 
       
  var events = jQuery('.my-calendar-table .mc-row td');
    
    var i;
   var k=0;
    for (i = 0; i < events.length; i++) {
       
        if (events.eq(i).hasClass("has-events")) {
             k++;
           var des= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .shortdesc p').html();
           
           var date= jQuery('.my-calendar-table .mc-row td:eq('+ i +') .mc-event-date').html();
            if (k==1){
                jQuery("#my-calendar").append("<div class='calendar_all_events'><div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
           if (k==events.length-1){
                jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div></div>");
           }
           else{
          jQuery(".calendar_all_events").append("<div class='calendar_date'>"+ date +"</div><div class='calendar_des'>"+ des +"</div>");
           }
        }
    }
    
   }

        },100);
    });
    
    
    jQuery(document).ready(function(){
        jQuery(".calendar_date,.calendar_des").wrapAll("<div class='calendar_all_events'></div>");
    });
    
    
    
        
        jQuery(document).ready(function(){
          jQuery(".login_modal").click(function(){ 
              setTimeout(function(){
          var height_popup_reg=jQuery(".register_popup").height()+100; 
          
            jQuery(".login_popup").css("height",height_popup_reg);
             jQuery(".forget_password_form").css("height",height_popup_reg);
              }, 200);
        });
        });
    
    
    
        
        jQuery(document).ready(function(){
          
          var width_sub=jQuery("#menu-item-81").width()+20; 
          
            jQuery(".ubermenu-submenu-id-81").css("width",width_sub);
             
        });
    
    
        
        jQuery(document).ready(function(){
          
          var width_sub=jQuery("#menu-item-83").width()+20; 
          
            jQuery(".ubermenu-submenu-id-83").css("width",width_sub);
             
        });
    
    
        jQuery(document).ready(function(){
            jQuery(".page-id-1549 .nav-tabs").prepend("<li class='post_cat_main_title'>ΚΑΤΗΓΟΡΙΕΣ ΑΡΘΡΩΝ</li>");
        });
    
    
      //  jQuery( ".page-id-1549 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/01/scientific_bibliography_banner.jpg'></div>" );

    
   /* tabs products private*/

jQuery( "document" ).ready(function() {
if (jQuery(window).width() > 767) {
  setTimeout(function(){
  
    jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).trigger("click");
     jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).addClass("active");
    jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(1)" ).removeClass("active");
   
    jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).addClass("active");
   }, 500)
}
});

    
    
    
jQuery( "document" ).ready(function() {
if (jQuery(window).width() < 768) {
  setTimeout(function(){
  
    jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).trigger("click");
    jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(3) li" ).addClass("active");
     jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).addClass("active");
   }, 500);
}
});

    




jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(1)" ).click(function(){

   jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "inherit ");
                     jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "0 ");
         jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4  .owl-height").css("max-height", "0 ");

   
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "0 ");
             jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "0 ");

});
jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(2)" ).click(function(){
   jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "inherit ");
     jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "0 ");
                 jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "0 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "0 ");
                     jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "0 ");

});
jQuery( ".page-id-1860 .background_image_margin_negative .nav-tabs li:nth-child(3)" ).click(function(){
   jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "inherit ");
         jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "0 ");
                     jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "0 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "0 ");
                     jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4 .owl-height").css("max-height", "0 ");

});



      
   

jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(1)" ).click(function(){

   jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "inherit ");
    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "0 ");
        jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4  .owl-height").css("max-height", "0 ");

    
    
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "0 ");
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "0 ");

    
    
});
jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(3)" ).click(function(){
   jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "inherit ");
        jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "0 ");
        jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "0 ");

    
    
    
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "0 ");
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "0 ");

});
jQuery( ".page-id-1860 .background_image_margin_negative .tab-content .nav.fusion-mobile-tab-nav:nth-child(5)" ).click(function(){
   jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("opacity", "1 ");

    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5").css("height", "inherit ");
    jQuery(".page-id-1860 #tab-9de8be0b8e337e0cad5  .owl-height").css("max-height", "inherit ");

       jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c").css("height", "0 ");
    jQuery(".page-id-1860 #tab-26b35867d3dbc12901c  .owl-height").css("max-height", "0 ");

    
    
    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("opacity", "0 ");

    jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4").css("height", "0 ");
        jQuery(".page-id-1860 #tab-8dd5159db6da4cf2dc4  .owl-height").css("max-height", "0 ");


});



    /* tabs products private*/
    
        jQuery(document).ready(function(){
            jQuery("#fusion-tab-ΕΠΙΣΤΗΜΟΝΙΚΟΥΛΙΚΟ").attr("data-toggle", "");
            jQuery("#fusion-tab-ΕΠΙΣΤΗΜΟΝΙΚΟΥΛΙΚΟ").attr("href", "https://lamberts.gr/epistimoniko-yliko/");
        });
    
    
    
    jQuery(window).load(function(){
        jQuery(".popup_login_form .login-submit").click(function(){
           var login_cookie = "form_popup_sub=yes"; 
           document.cookie = login_cookie; 
            
        });
        
       if(window.location.href.indexOf("login=failed") > -1) {
           
           var cookie_name = "form_popup_sub"; 
           
            var myCookie = getCookie(cookie_name);
      //alert(myCookie);
    if (myCookie == "yes") {
        // do cookie doesn't exist stuff;
    
       jQuery(".login_modal").trigger( "click" );
       document.cookie = "form_popup_sub=; ";
         }
       }
    });  
        
    
   /* 
        
       
    jQuery( ".archive .woof_list.woof_list_checkbox li" ).each(function() {
          if ( jQuery(this).closest("input[disabled]").length != 0 ){
              
              jQuery(this).hide();
          }
        });
    
        
    */
    
        jQuery('.archive .woof_list.woof_list_checkbox li input[disabled]').parent().css('display','none');
    
    
      var fusion_row_width = jQuery("#main .fusion-row").width();
        jQuery("#sidebar .woof_products_top_panel").width(fusion_row_width);
    
    
    
        jQuery(".register_popup_text2").click(function(){
      jQuery(".login_popup_all").hide();
      jQuery(".forget_password_form").fadeIn("slow");
      
        });
         jQuery("#myModal .close").click(function(){
      jQuery(".login_popup_all").show();
      jQuery(".forget_password_form").hide();
      
        });
    
    
    
    
    jQuery(window).load(function(){
        jQuery(".forget_password_form input#submit-button").click(function(){
           var forget_cookie = "forget_sub=yes"; 
           document.cookie = forget_cookie; 
            
        });
        
      
           
           var cookie_name2 = "forget_sub"; 
           
            var myCookie2 = getCookie(cookie_name2);
      //alert(myCookie);
    if (myCookie2 == "yes") {
        // do cookie doesn't exist stuff;
    
    jQuery(".register_popup_text2").trigger( "click" );
       jQuery(".login_modal").trigger( "click" );
       document.cookie = "forget_sub=; ";
         }
       
    });  
        
    
    
        jQuery(".profilepress-reset-status a").click(function(e){
   e.preventDefault();
   jQuery(".login_modal").trigger( "click" );
        });
    
    
    jQuery(window).load(function(){
   
         
 
        var heights = jQuery(".background_white .woocommerce-products-carousel-all-in-one-container").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+22;
    jQuery(".background_white .woocommerce-products-carousel-all-in-one-container").height(maxHeight);
     
   
   
     
    }); 
   /*  jQuery(window).load(function(){
     jQuery( window ).resize(function(){ 
         jQuery(".woocommerce-products-carousel-all-in-one-container").css("height","auto");
         var heights = jQuery(".woocommerce-products-carousel-all-in-one-container").map(function ()
    {
        return jQuery(this).height();
    }).get(),
   
    maxHeight = Math.max.apply(null, heights)+22;
    jQuery(".woocommerce-products-carousel-all-in-one-container").height(maxHeight);  
     }); 
     }); 
   */
    
    
    
       
    jQuery(window).load(function(){
          
 
        var heights = jQuery(".background_image_margin_negative .woocommerce-products-carousel-all-in-one-container").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+22;
    jQuery(".background_image_margin_negative .woocommerce-products-carousel-all-in-one-container").height(maxHeight);
     
   
   
   
    }); 
   
    
      
    jQuery(window).load(function(){
          
 
        var heights = jQuery(".single.single-product .woocommerce-products-carousel-all-in-one-container").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+22;
   
    
    
    jQuery(".single.single-product .woocommerce-products-carousel-all-in-one-container").height(maxHeight);
    maxHeight2=maxHeight+22;
    jQuery(".single.single-product .woocommerce-products-carousel-all-in-one .owl-item").css("min-height",maxHeight2);
      
   
   
   
    }); 
   
    
    
    /*
        jQuery(window).load(function(){
        var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

   if(x>800){   
 
        var heights = jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .grid .product.type-product").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+30;
    
    jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .grid .product.type-product").height(maxHeight);
     
   
   }
   
    });  
        */
        /*
      jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .dashicons-grid-view").click(function(){
var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

   if(x>800){  
          setTimeout(function(){
       jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .grid .product.type-product").css("height","auto");
        var heights = jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .grid .product.type-product").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+30;
    jQuery(".archive.post-type-archive.post-type-archive-product.woocommerce.woocommerce-page .grid .product.type-product").height(maxHeight);
          }, 350);   
      
      }
        
      });
        
    */
    
    
        jQuery('.rest_icons_header_inner.pin').hover(function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2017/02/location_hover.png');
}, function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2016/11/location_header.png');
});

  jQuery('.rest_icons_header_inner.career').hover(function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2017/02/hovered_gift.png');
}, function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2016/11/gift_header.png');
});

jQuery('.rest_icons_header_inner.login_header').hover(function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2017/02/hover_logged_in.png');
}, function() {
  jQuery(this).find('img').attr('src', 'https://lamberts.gr/wp-content/uploads/2017/02/logged_in_header.png');
});
    
    
    
    
    function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["https://lamberts.gr/wp-content/uploads/2017/02/location_hover.png", "https://lamberts.gr/wp-content/uploads/2017/02/hovered_gift.png", "https://lamberts.gr/wp-content/uploads/2017/02/hover_logged_in.png"]);
    
    


/*
    jQuery(window).load(function(){
      
        jQuery(".wdpu-1440 .wdpu-close").click(function(){
           var newsletter_cookie = "newsletter_popup=yes"; 
           document.cookie = newsletter_cookie; 
           alert("dsas");
            
        });
        
      
           
           var cookie_name3 = "newsletter_popup"; 
           
            var myCookie3 = getCookie(cookie_name3);
      //alert(myCookie);
    if (myCookie3 == "yes") {
        // do cookie doesn't exist stuff;
    alert("dsd");
    jQuery(".wdpu-1440").css( "display","none" );
       
       document.cookie = "newsletter_popup=; ";
         }
       
    });  
        
    */
    
    jQuery(document).ready(function(){
        jQuery(".wdpu-1440 input.wpcf7-form-control.wpcf7-submit").live("click", function(e) { 
              
      
       
       
    });
    });
       
        
    
    /*
        jQuery(document).ready(function(){
           
     var feature_image_src=jQuery(".single-post .fusion-flexslider.flexslider.post-slideshow.fusion-post-slideshow img").attr("src");
     
        jQuery(".single-post .fusion-header-wrapper").after( "<div style='background-image:url("+ feature_image_src +");' class='post_feature_img'></div>" );
      
       
        });
        */
    
    
    
    
        jQuery(document).ready(function(){
    
       
       jQuery(".single-post .fusion-breadcrumbs span a span").each(function(i,obj) {        
       
    if (jQuery(this).html()!="Home" && jQuery(this).html()!="Αρχική"){
        var cat_title=jQuery(this).html();
        if (cat_title=="Life Up"){
       
         
       jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/");
       
        }
        else if (cat_title=="Παιδί"){
            jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/#cat_paidi");
        }
        else if (cat_title=="Υγεία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/#cat_ygeia");
        }
        else if (cat_title=="Διατροφή"){
            jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/#cat_diatrofi");
        }
         else if (cat_title=="Fitness"){
            jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/#cat_fitness");
        }
        else if (cat_title=="Ψυχολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/lifeup/#cat_psixologia");
        }
    }
     });
        });
    
    
    
    
    
   

jQuery(".print.custom2").on( "click", function() {

window.print();
});




jQuery(".mail_print a").on( "click", function() {
this.href = this.href.replace('[sub]',window.location)
});


jQuery(document).ready(function(){
var singlepost_date=jQuery(".single-post .fusion-meta-info-wrapper span:nth-child(3)").html();
jQuery(".singlepost_date_text").html(singlepost_date);

});



    jQuery(".archive .woocommerce-container #content").prepend("<div class='filters_mobile'></div>");

     jQuery(".archive .woocommerce-container #content .filters_mobile").click(function(){
         if( !jQuery(".archive #sidebar").hasClass("opened_sidebar")){
    jQuery(".archive #sidebar,.archive .woocommerce-container #content").addClass("opened_sidebar");
    
    setTimeout(function(){
     jQuery(".archive #sidebar.opened_sidebar").css("transition","all 499ms");
     },501);
 
     
         }
     else{
        
 setTimeout(function(){
     jQuery(".archive #sidebar").css("transition","all 501ms");
     },499);
     jQuery(".archive #sidebar").removeClass("opened_sidebar");
      jQuery(".archive .woocommerce-container #content").removeClass("opened_sidebar");
       
  
     }
     });




jQuery( ".page-id-2710 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/03/why_lamberts_banner.jpg'></div>" );
//jQuery( ".page-id-2922 .fusion-header-wrapper" ).after( "<div class='lifeup_cat_banner'><img src='https://lamberts.gr/wp-content/uploads/2017/03/who_we_are_banner-1.jpg'></div>" );




     jQuery(window).load(function(){
       
var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x>800){    
 
        var heights = jQuery(".restricted .fusion-post-wrapper").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);
    
    jQuery(".restricted .fusion-post-wrapper").height(maxHeight);
   
   
   
     }
    });  
    



     
   /* 
     jQuery(window).load(function(){
          var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

   if(x>800){
         var heights1 = jQuery(".life_up_recent .fusion-flexslider.flexslider.fusion-post-slideshow img").map(function ()
    {
        return jQuery(this).height();
    });  
 
        var heights2 = jQuery(" .life_up_recent .fusion-post-content.post-content").map(function ()
    {
        return jQuery(this).height();
    });

    maxHeight1 = Math.max.apply(null, heights1)+15;
     maxHeight2 = Math.max.apply(null, heights2);
     
     if (maxHeight1>maxHeight2){
    jQuery(" .life_up_recent .fusion-post-content.post-content").height(maxHeight1);
     }
     else{
         jQuery(" .life_up_recent .fusion-post-content.post-content").height(maxHeight2); 
     }
   
   }
   
    });  
    */
    /*
    jQuery(".show_more_d, .show_more_y, .show_more_p, .show_more_f, .show_more_ps, .circles_all_in_one img").click(function(){
         var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

   if(x>800){
         var heights1 = jQuery(".life_up_recent .fusion-flexslider.flexslider.fusion-post-slideshow img").map(function ()
    {
        return jQuery(this).height();
    });  
 
        var heights2 = jQuery(" .life_up_recent .fusion-post-content.post-content").map(function ()
    {
        return jQuery(this).height();
    });

    maxHeight1 = Math.max.apply(null, heights1)+15;
     maxHeight2 = Math.max.apply(null, heights2);
   
     if (maxHeight1>maxHeight2){
    jQuery(" .life_up_recent .fusion-post-content.post-content").height(maxHeight1);
     }
     else{
         jQuery(" .life_up_recent .fusion-post-content.post-content").height(maxHeight2); 
     }
   
   }
   
    });  
*/

    
    jQuery('.faq .fusion-toggle-heading').text(function(i, t) {
  var arr = t.split(' ');
  var html = '<span>' + arr.shift() + '</span><span>' + arr.join(' ') + '</span>';
  jQuery(this).closest('.faq .fusion-toggle-heading').html(html);
});
    




        jQuery(document).ready(function(){
    
       
       jQuery(".single-post .fusion-breadcrumbs span a span").each(function(i,obj) {        
       
    if (jQuery(this).html()!="Home" && jQuery(this).html()!="Αρχική"){
        var cat_title=jQuery(this).html();
        if (cat_title=="Επιστημονική Αρθρογραφία"){
       
         
       jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/");
       
        }
        else if (cat_title=="Ορθοπεδική"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
        else if (cat_title=="Οφθαλμολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
        else if (cat_title=="Παιδιατρική"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
         else if (cat_title=="Πνευμονολογία-Φυματιολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
        else if (cat_title=="Ρευματολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
         else if (cat_title=="Ψυχιατρική"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-23563fd6ce656fc3f45");
        }
         
        // else if (cat_title=="Ψυχολογία"){
          //  jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#fusion-tab-Ψυχολογία");
       // }
         else if (cat_title=="Αθλητιατρική"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-3f254eb1f91a828c516");
        }
         else if (cat_title=="Γαστρεντερολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-3f254eb1f91a828c516");
        }
         else if (cat_title=="Γυναικολογία-Μαιευτική"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-146c66a6cf565723cd8");
        }
         else if (cat_title=="Δερματολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-e859dbe082ac959925c");
        }
         else if (cat_title=="Διαιτολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-3d1ebe53e6715c9a93f");
        }
         else if (cat_title=="Ενδοκρινολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-622f527b67226c14ef5");
        }
         else if (cat_title=="Εντατική Θεαραπεία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-32d5036526348429aab");
        }
        else if (cat_title=="Εσωτερική Παθολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-3f4ef2c645e4ef00c5f");
        }
        else if (cat_title=="Καρδιολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-b70dcdb237684051d86");
        }
        else if (cat_title=="Νευρολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#fusion-tab-Νευρολογία");
        }
        else if (cat_title=="Νεφρολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-e02187048210ff7e334");
        }
        else if (cat_title=="Ογκολογία"){
            jQuery(this).parent().attr("href","https://lamberts.gr/scientific-articles/#tab-7254fac025f0b5ba2bf");
        }
        else if (cat_title=="Συνέδρια"){
            jQuery(this).parent().attr("href","https://lamberts.gr/members/#fusion-tab-ΣΥΝΕΔΡΙΑ");
        }
    }
     });
        });
    
    
    
       // The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// This will capture hash changes while on the page
if(window.location.href.indexOf("members") > -1) {
jQuery(window).load(function() {
     
   offsetAnchor();
    
}).trigger('hashchange');
 }
window.setTimeout(offsetAnchor, 1); 

    
     
        jQuery(document).ready(function(){
            count = jQuery(".fusion-flexslider.flexslider-posts-with-excerpt .slides li").length;  
var count_checked=0;
for ( var j = 1;  j <= count; j++ ) {
  

    

     var post_slider_url=jQuery(".fusion-flexslider.flexslider-posts-with-excerpt .slides li:nth-child("+ j +") .slide-excerpt .excerpt-container h2 a").attr("href");
     
        jQuery(".fusion-flexslider.flexslider-posts-with-excerpt .slides li:nth-child("+ j +") .slide-excerpt .excerpt-container").append( "<a class='post_slider_more' href='"+ post_slider_url +"'><span>ΠΕΡΙΣΣΟΤΕΡΑ</span></a>" );
      
       count_checked++;
}
        });
        
    
    
    var data_uid= jQuery(".woof_text_search_go").attr("data-uid");
    
        
        jQuery(".wrap_containers").append("<a style='border-radius:0 !important; margin-bottom: 60px; float: right; margin-top: 15px; font-family: opensansReg; background: #243D91 !important; color: #ffffff; padding: 15px 20px; width:inherit !important; height:48px !important; clear: both;' href='javascript:void(0);' data-uid='"+ data_uid +"' class='woof_text_search_go "+ data_uid +"'>ΑΝΑΖΗΤΗΣΗ</a>");
       
            
        
    
    
        jQuery(".ubermenu-responsive-default.ubermenu-responsive.ubermenu-responsive-nocollapse").after("<div class='menu_mobile'><span></span><span></span><span></span></div>");
    
    
        jQuery(".menu_mobile").click(function(){
            var menu_mobile = jQuery('.menu_mobile').css('right');
            
            if (menu_mobile == '0px'){
                jQuery(".menu_mobile").addClass("open");
            jQuery(".wdpu-1440").css("z-index","9999");
            jQuery("header").addClass("header_zindex");
            jQuery("#emodal-overlay").css("display","block");
  
                
            jQuery(".menu_mobile").css("right","280px");
            jQuery(".ubermenu-responsive-default.ubermenu-responsive.ubermenu-responsive-nocollapse").css("right","0");
            }
            else{
                 jQuery(".menu_mobile").removeClass("open");
                 jQuery(".wdpu-1440").css("z-index","100000");
            jQuery("header").removeClass("header_zindex");
            jQuery("#emodal-overlay").css("display","none");
              jQuery(".menu_mobile").css("right","0");
            jQuery(".ubermenu-responsive-default.ubermenu-responsive.ubermenu-responsive-nocollapse").css("right","-280px");  
            }
        });
        
    
    
    if(jQuery(window).width() < 1170){
        var window_width=jQuery(window).width()-150;
       
        var css = '.fusion-secondary-main-menu .search-field:hover{ width: '+ window_width +'px }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
    }
    
    
        
jQuery(window).resize(function(){
    
    var menu_mobile = jQuery('.menu_mobile').css('display');
            
            if (menu_mobile == 'none'){
                jQuery('.emodal-overlay').hide();
            }
            var menu_mobile2 = jQuery('.menu_mobile').css('right');
           if (menu_mobile2 == '280px' && menu_mobile == 'block' ){
             jQuery('.emodal-overlay').show();   
           }
});

        
        
        
            
          

   jQuery(document).ready(function(){
      
       var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

   if(x<768){
       jQuery(".page-id-9 .woof_front_toggle").attr("data-condition","closed");
     jQuery(".page-id-9 .woof_front_toggle").removeClass("woof_front_toggle_opened");
      jQuery(".page-id-9 .woof_front_toggle").addClass("woof_front_toggle_closed");
      
      
      
       
       
        var css = '.page-id-9 .easy-autocomplete-container{ width: '+ x +'px }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
   jQuery(".single-product .fusion-mobile-tab-nav ul.nav-tabs li").removeClass("active"); 
    jQuery(".single-product .tab-pane.active").removeClass("active");
   }
  
   });
   
        
        
    jQuery(window).resize(function(){
   
         
 
        var heights = jQuery(".background_image_margin_negative .woocommerce-products-carousel-all-in-one-container").map(function ()
    {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights)+22;
   
    if(maxHeight<23){
    jQuery(".background_image_margin_negative .woocommerce-products-carousel-all-in-one-container").css("height","inherit");
     
    }
   
     
    }); 
    
    
    
    

    jQuery(".scientific_bibliography .tab-content").prepend("<div class='filters_mobile'></div>");

     jQuery(".scientific_bibliography .tab-content .filters_mobile").click(function(){
         if( !jQuery(".scientific_bibliography .fusion-tabs .nav").hasClass("opened_sidebar")){
    jQuery(".scientific_bibliography .fusion-tabs .nav,.scientific_bibliography .tab-content").addClass("opened_sidebar");
    
    setTimeout(function(){
     jQuery(".scientific_bibliography .fusion-tabs .nav.opened_sidebar").css("transition","all 499ms");
     },501);
 
     
         }
     else{
        
 setTimeout(function(){
     jQuery(".scientific_bibliography .fusion-tabs .nav").css("transition","all 501ms");
     },499);
     jQuery(".scientific_bibliography .fusion-tabs .nav").removeClass("opened_sidebar");
      jQuery(".scientific_bibliography .tab-content").removeClass("opened_sidebar");
       
  
     }
     });
 
var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x<768){
       
       jQuery(".scientific_bibliography .tab-link").click(function(){
       setTimeout(function(){
     jQuery(".scientific_bibliography .fusion-tabs .nav").css("transition","all 501ms");
     },499);
     jQuery(".scientific_bibliography .fusion-tabs .nav").removeClass("opened_sidebar");
      jQuery(".scientific_bibliography .tab-content").removeClass("opened_sidebar");
       
  
     
     
   });
   }



jQuery(window).load(function(){
    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
   if(x<441){
   var prod_title_h = jQuery("#main .product .product_title").innerHeight();
   
   var top_h=prod_title_h - 25;
   
      jQuery(".woo-social-buttons").css("top",top_h );   
   }
});

/*
    jQuery(document).ready(function(){
       if ( jQuery(".welcome_user").length ) {
 
    jQuery(".menu_mobile").css("top","50px");
 
} 
    });
    
*/
/*
    jQuery(".search_mobile img").click(function(){
       
           jQuery(".search_mobile .searchform").toggle(); 
       
    });
    
*/

    jQuery(".search_mobile img").click(function(){
       if(jQuery(".search_mobile .searchform").hasClass("opened_search")){
             jQuery(".search_mobile .searchform").removeClass("opened_search"); 
           jQuery(".search_mobile .searchform").hide(); 
       }
       else{
         jQuery(".search_mobile .searchform").addClass("opened_search"); 
           jQuery(".search_mobile .searchform").show();   
       }
    });
    
