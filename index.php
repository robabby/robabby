<?php 
  $path2root = ".";
  ob_start();
  try {
  include("$path2root/assets/inc/title.inc.php"); 
  include("$path2root/assets/inc/user_agent.php");
  //require_once("$path2root/assets/inc/connection.inc.php");
  //database connection info
  //$conn = mysql_connect('rawdesigns.db.7625389.hostedresource.com','rawdesigns','Forever#23') or trigger_error("SQL", E_USER_ERROR);
  //$conn = mysql_connect('localhost','root','') or trigger_error("SQL", E_USER_ERROR);
  //$db = mysql_select_db('rawdesigns',$conn) or trigger_error("SQL", E_USER_ERROR);
  //$sql = "SELECT title, article, created, article_id FROM blog ORDER BY created DESC LIMIT 3";
  //$result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
</head>
<body id="home">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## -->
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->
<div role="main" id="container" class="container main content">
<br />
<br />
  <div class="row">
    <div class="span12">
      <div class="well">
        <div itemscope itemtype="http://www.schema.org/Person">
          <h1>Hey there!  My Name is <span itemprop="name">Rob Abby</span>, and I'm a <span itemprop="jobTitle">Web Developer</span>.</h1>
        </div>
      </div>
    </div>
    <div class="span6">
      <div class="well">
        <h3>A Brief History</h3>
        <p>My transition into web development was both swift &amp; profound.  Discovering HTML to customize the MySpace page of my band in 2005, I quickly fell in love with all things web.  Before long I was working with CSS, and then quickly thereafter JavaScript, PHP, and MySQL.  My first freelance jobs were naturally for musicians and dabbling artists, but my appetite soon took me to bigger and better places both on &amp; off the web.</p>
      </div><!-- .well -->
    </div><!-- .span6 -->
    <div class="span6 textalign-right">
      <div class="well">
        <h3>A Preamble of Sorts</h3>
        <p>As an avid internet enthusiast and web development artist for almost a decade, I offer a variety of web and technical services to a versatile client base. Working as a Freelancer in the Chicagoland area, I have formed a robust network of clientele with various businesses and individuals. From web development to graphic design, I can offer a comprehensive image for my clients to attract new customers, enthusiasts or marketplaces.</p>
      </div><!-- .well -->
    </div><!-- .span6 -->
  </div><!-- .row -->
  <br />
  <br />
  <h2 id="work">Where I work now <span>&darr;</span></h2>
  <br />

  <div class="row">
    <div class="span12 work">
      <h3><a href="http://web2carz.com" title="Web2Carz.com">Web2Carz.com</a></h3>
      <a class="thumbnail" href="http://web2carz.com" title="Web2Carz.com">
        <img src="/images/work/web2carz.jpg" />
      </a>
    </div><!-- .span -->
  </div><!-- .row -->

  <br />
  <br />
  <br />
  <h2>Where I have worked <span>&darr;</span></h2>
  <br />

  <div class="row">
    <div class="span6 work">
      <h3><a href="http://chicagobooth.edu" title="University of Chicago Booth">University of Chicago Booth</a></h3>
      <a class="thumbnail" href="http://chicagobooth.edu" title="University of Chicago Booth">
        <img src="/images/work/booth.jpg" />
      </a>
    </div><!-- .span -->
    <div class="span6 work">
      <h3><a href="http://www.artversion.com/" title="ArtVersion Interactive Agency">ArtVersion Interactive Agency</a></h3>
      <a class="thumbnail" href="http://www.artversion.com/" title="ArtVersion Interactive Agency">
        <img src="/images/work/artversion.jpg" />
      </a>
    </div><!-- .span -->
  </div><!-- .row -->

  <div class="row work">      
    <div class="span12">
      <br />
      <br />
      <h2>Technologies I know <span>&darr;</span></h2>
      <br />
      <br />
    </div>
    <div class="span6">
      <h3>HTML5</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 90%;"></div>
      </div>
      <h3>jQuery</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 75%;"></div>
      </div>
      <h3>PHP</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 45%;"></div>
      </div>
    </div>
    <div class="span6">
      <h3>CSS3</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 92%;"></div>
      </div>
      <h3>AJAX</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 30%;"></div>
      </div>
      <h3>JSON</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 40%;"></div>
      </div>
    </div>
    <div class="other">
      <h3>Other things I play with</h3>
      <p><a href="http://rubyonrails.org" target="_blank">Ruby on Rails</a></p>
      <p><a href="http://meteor.com" target="_blank">Meteor.js</a></p>
      <p><a href="http://phonegap.com" target="_blank">PhoneGap</a></p>
      <p><small>Or just view my <a href="http://github.com/stat30fbliss">GitHub</a></small></p>
    </div>

    <div class="span12">
      <br />
      <br />
      <br />
      <div class="contact">
        <h2>Want more? <span>&darr;</span></h2>
        <br />
        <a href="/sandbox.php" class="btn btn-inverse btn-large" title="">View my Sandbox</a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div><!-- .contact -->
    </div><!-- span -->
    
  </div><!-- .row -->
</div><!-- #container -->


<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include("$path2root/assets/inc/footer.inc.php"); ?>
<!-- ## FOOTER ## -->
<script type="text/javascript">
  
  // On window load. This waits until images have loaded which is essential
  $(window).load(function(){
    
    // Fade in images so there isn't a color "pop" document load and then on window load
    $(".work img").fadeIn(500);
    
    // clone image
    $('.work img').each(function(){
      var el = $(this);
      el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
        var el = $(this);
        el.parent().css({"width":this.width,"height":this.height});
        el.dequeue();
      });
      this.src = grayscale(this.src);
    });
    
    // Fade image 
    $('.work img').mouseover(function(){
      $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
    })
    $('.img_grayscale').mouseout(function(){
      $(this).stop().animate({opacity:0}, 1000);
    });   
  });
  
  // Grayscale w canvas method
  function grayscale(src){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.src = src;
    canvas.width = imgObj.width;
    canvas.height = imgObj.height; 
    ctx.drawImage(imgObj, 0, 0); 
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(var y = 0; y < imgPixels.height; y++){
      for(var x = 0; x < imgPixels.width; x++){
        var i = (y * 4) * imgPixels.width + x * 4;
        var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg; 
        imgPixels.data[i + 1] = avg; 
        imgPixels.data[i + 2] = avg;
      }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
    }
      
</script>
</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>