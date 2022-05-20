// $("#grff").backstretch("./assets/grf2-desktop.jpg");

//$("#myVideo").prop('muted',true);

$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          $(this).html("<i class='fa-solid fa-volume-high'></i>");
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
      $(this).html("<i class='fa-solid fa-volume-xmark'></i>");
    }
});

