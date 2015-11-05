$(function(){
  if(navigator.userAgent.indexOf('Android') > 0) {
    $('.openmap').each(function(){
      var url = $(this).attr('href').replace('comgooglemaps://?','http://maps.google.com/maps?');
      $(this).attr('href',url);
    });
  }
});
