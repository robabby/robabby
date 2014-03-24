(function($) {
  var $profileImg = $('.profile-img'),
      $info = $('.info'),
      $moreInfo = $('.more-info'),
      $socialIcon = $('.social-icon'),
      $close = $('.close'),
      $bio = $('.bio'),
      bioOpen = false;

  $bio.hide();

  // Dont show the social icons until 1.5 seconds after the DOM has loaded
  setInterval(function() {
    $socialIcon.each(function (i) {
      // store the item around for use in the 'timeout' function
      var $item = $(this); 
      // execute this function sometime later:
      setTimeout(function() { 
        $item.addClass('slideInLeft visible');
      }, 500 * i);
      // each element should animate half a second after the last one.
    });
  }, 1500);

  // Flip the profile image on hover
  $profileImg.hover(function() {
    $this = $(this);
    if($this.hasClass('bounceInUp')) {
      $this.removeClass('bounceInUp');
    }
    if($this.hasClass('bounceInDown')) {
      $this.removeClass('bounceInDown');  
    }
    $this.toggleClass('flip');
  });

  $moreInfo.on('click', function() {    
    // Handle profile image styles
    if($profileImg.hasClass('bounceInDown')) {
      $profileImg.removeClass('bounceInDown'); 
    }
    if ($profileImg.hasClass('bounceInUp')) {
      $profileImg.removeClass('bounceInUp');
    }
    if ($profileImg.hasClass('flip')) {
      $profileImg.removeClass('flip');
    }
    $profileImg.addClass('bounceOutUp');

    // Clean up the info element
    if ($info.hasClass('bounceInUp')) {
      $info.removeClass('bounceInUp');
    }
    // Animate out .info div
    $info.addClass('bounceOutDown');

    setTimeout(function() {
    
      // Clean up the .bio element
      $bio.removeClass('flipOutX');
    
      // Unhide the modal
      $bio.show(); 
      
      $bio.addClass('flipInX visible');
      bioOpen = true;
    }, 250);
  });

  $(document).on('click', function(e) {
    if (bioOpen && (e.target != $bio) && (e.target != $close)) {
      closeModal();
    }
  })

  $close.on('click', function() {
    closeModal();
  });

  function closeModal() {
    if($bio.hasClass('flipInX')) {
      $bio.removeClass('flipInX'); 
    }

    // Remove the .bio element from the view
    $bio.addClass('flipOutX');

    setTimeout(function() {
      // Clean up elements
      $profileImg.removeClass('bounceOutUp');
      $info.removeClass('bounceOutDown');

      // Bring back the starting elements
      $profileImg.addClass('bounceInDown');
      $info.addClass('bounceInUp');


      $bio.removeClass('visible');
      $bio.hide();
    }, 500);

    return false;
  }
})(jQuery);