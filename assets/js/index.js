(function($) {
  var $stage = $('.stage'),
      $profileImg = $('.profile-img'),
      $info = $('.info'),
      $moreInfo = $('.more-info'),
      $socialIcon = $('.social-icon'),
      $close = $('.close'),
      $bio = $('.bio'),
      overlayHtml = '<div class="overlay"></div>',
      bioOpen = false,
      socialWidth = 0;

  $bio.hide();

  $socialIcon.each(function (i) {
    // store the item around for use in the 'timeout' function
    var $this = $(this);

    socialWidth += $this.outerWidth(true);
    console.log(socialWidth);
    // execute this function sometime later:
    setTimeout(function() { 
      $this.addClass('slideInLeft visible');
    }, 150 * i);
    // each element should animate half a second after the last one.
  });

  // console.log("outerWidth: " + socialWidth + " - width: " + $socialIcon.width());

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
      $stage.append(overlayHtml);

      $bio.addClass('flipInX visible');
      bioOpen = true;
    }, 250);
  });

  // Close bio if open and clicking off of element
  $(document).on('click', function(e) {
    var $target = $(e.target);
    if (bioOpen && $target.is('.overlay')) {
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

      $('.overlay').remove();
      $bio.removeClass('visible');
      $bio.hide();
    }, 500);

    bioOpen = false;

    return true;
  }
})(jQuery);