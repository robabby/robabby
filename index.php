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
  //$sql = "SELECT title, article, created, article_id FROM blog ORDER BY created DESC LIMIT 1";
  //$result = mysql_query($sql, $conn) or trigger_error("SQL", E_USER_ERROR);
?>
<!doctype html>
<html>
<head>
  <?php include("$path2root/assets/inc/head.inc.php"); ?>
  <style>
  #home {
    overflow-x:hidden;
  }
  #home .hero-unit {
    margin-bottom:0;
    border-radius:0px;
    overflow: hidden;
    padding:100px 0 80px;
    text-align:center;
    border-bottom:8px solid #06e;
    background: #121212;
    box-shadow:0px 0px 15px 3px rgba(0, 0, 0, .5);
  }
  #home .hero-unit h2 {
    font-size:75px;
    color:#fff;
    font-family: 'CodeLightRegular';
    font-weight:100;
    margin-bottom:20px;
  }
  #home .hero-unit h2 a {
    color: #06E;
    -webkit-transition: all .25s ease-in-out;
    -moz-transition: all .25s ease-in-out;
    -ms-transition: all .25s ease-in-out;
    -o-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
  }
   #home .hero-unit h2 a:hover {
    color: #39F;
  }
  #home .hero-unit p {
    color:#fff;
    font-family: 'DeliciousSmallCapsRegular';
    font-weight:100;
    text-align:left;
  }
  #home p.web, #home p.mobile, #home p.social {
    display:none;
  }
  #home .well {
    background-color:#fff;
    border-radius:0px;
    box-shadow:inset 0px 0px 15px rgba(0, 0, 0, .35);
    border:5px solid #555;
    -webkit-transition: all .75s ease-in-out;
    -moz-transition: all .75s ease-in-out;
    -ms-transition: all .75s ease-in-out;
    -o-transition: all .75s ease-in-out;
    transition: all .75s ease-in-out;
  }
  #home .well:hover {
    border-color:#06E;
  }
  #home .main h2 {
    font-size:50px;
    color:#ccc;
    text-shadow:0px 1px 2px #fff;
  }
  #home .work .btn {
    width:89.5%;
    border-radius:0px;
  }
  #home .work {
    margin-bottom:25px;
  }
  #home .well.work {
    margin-top:25px;
  }
  #home .thumbnail {
    margin-left:auto;
    margin-right:auto;
    opacity:0.6;
    filter:alpha(opacity=60);
    -webkit-transition: all .25s ease-in-out;
    -moz-transition: all .25s ease-in-out;
    -ms-transition: all .25s ease-in-out;
    -o-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
  }
  #home .thumbnail:hover {
    margin-left:auto;
    margin-right:auto;
    opacity:1;
    filter:alpha(opacity=100);
  }
  #home .progress {
    box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, .23);
    border:2px solid #333;
  }
  #home .contact .btn {
    width:96.5%;
    height:50px;
    line-height:50px;
    font-size:35px;
    border-radius:0px;
    font-family: 'TradeGothicLTStdLight';
  }
  </style>
</head>
<body id="home">
<!-- ## IE CHECK ## -->
<?php include("$path2root/assets/inc/iecheck.inc.php"); ?>
<!-- ## IE CHECK ## -->

<!-- ## CONTACT MODAL ## -->
<?php include("$path2root/assets/inc/contactModal.inc.php"); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include("$path2root/assets/inc/nav.inc.php"); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->


<div class="hero-unit">
  <div class="container">
    <div class="row-fluid">
      <h2>
        <a class="web" href="#">Web</a> 
        <span>/</span> 
        <a class="mobile" href="#">Mobile</a> 
        <span>/</span> 
        <a class="social" href="#">Social</a>
      </h2>
      <br />
      <p class="web animated fadeInLeftBig">
        Using concepts from his earlier hypertext systems like ENQUIRE, British engineer and computer scientist Sir Tim Berners-Lee, now Director of the World Wide Web Consortium (W3C), wrote a proposal in March 1989 for what would eventually become the World Wide Web.  Here in <?php $thisYear = date('Y'); echo "{$thisYear}"; ?> I specialize in building products and services that take advantage of Mr. Berner-Lee's amazing contribution to society.
      </p>
      <p class="mobile animated fadeInRightBig">
        The Mobile Web refers to access to the world wide web, i.e. the use of browser-based Internet services, from a handheld mobile device, such as a smartphone, a feature phone or a tablet computer, connected to a mobile network or other wireless network.  I take advantage of tactics such as Responsive Web Design to produce websites that scale to fit whatever mobile screen is viewing them, preserving both message and design.
      </p>
      <p class="social animated fadeInLeftBig">
        Social networks and the analysis of them is an inherently interdisciplinary academic field which emerged from social psychology, sociology, statistics, and graph theory.  I can also take advantage of their services to let people follow you on twitter and like you on Facebook.  Cool, huh?
      </p>
    </div><!-- .row -->
  </div><!-- .container -->
</div><!-- .hero-unit -->


<div role="main" id="container" class="container main">
<br />
<br />
  <div class="row">
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

  <br />
  <br />
  <br />
  <h2>Other work I have done <span>&darr;</span></h2>
  <br />
  <div class="row">  

    <div class="span4">
      <div class="work">
        <h3><a href="http://mmconsultants-inc.com/" title="MMC Inc.">Management Meeting Consultants</a></h3>
        <a class="thumbnail" href="http://mmconsultants-inc.com/" title="MMC Inc.">
          <img src="/images/work/mmc.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <div class="span4">
      <div class="work">
        <h3><a href="http://imaginethis.ws" title="Imagine This">Imagine This</a></h3>
        <a class="thumbnail" href="http://imaginethis.ws" title="Imagine This">
          <img src="/images/work/imaginethis.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <div class="span4">
      <div class="work">
        <h3><a href="http://545north.com/" title="545 North Bar &amp; Grill">545 North</a></h3>
        <a class="thumbnail" href="http://545north.com/" title="545 North Bar &amp; Grill">
          <img src="/images/work/545.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <div class="span4">
      <div class="work">
        <h3><a href="http://danielasloan.com/" title="Daniela Sloan Acoustic Soul">Acoustic Soul</a></h3>
        <a class="thumbnail" href="http://danielasloan.com/" title="Daniela Sloan Acoustic Soul">
          <img src="/images/work/daniela.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <div class="span4">
      <div class="work">
        <h3><a href="http://shakousushi.com/" title="Shakou Sushi">Shakou Sushi</a></h3>
        <a class="thumbnail" href="http://shakousushi.com/" title="Shakou Sushi">
          <img src="/images/work/shakou.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <div class="span4">
      <div class="work">
        <h3><a href="http://www.chicagobooth.edu/bfeo/2012/index.aspx" title="Business Forecast 2012">Business Forecast 2012</a></h3>
        <a class="thumbnail" href="http://www.chicagobooth.edu/bfeo/2012/index.aspx" title="Business Forecast 2012">
          <img src="/images/work/businessforecast.jpg" width="286" />
        </a>
      </div><!-- .work -->
    </div><!-- span -->

    <!--
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
      <h3>Ruby on Rails</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 15%;"></div>
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
      <h3>MySQL</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 40%;"></div>
      </div>
      <h3>XML</h3>
      <div class="progress progress-striped active">
        <div class="bar" style="width: 30%;"></div>
      </div>
    </div>-->

    <div class="span12">
      <br />
      <br />
      <br />
      <br />
      <div class="contact">
        <h2>Like what you see? <span>&darr;</span></h2>
        <br />
        <a href="/contact.php" class="btn btn-inverse btn-large" title="">Contact Me</a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div><!-- .well -->
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
<script>
// Text fadeIn()
$('.hero-unit a.web').click(function() {
  $('p.web').fadeToggle('slow', function() {
    // Animation complete
  });
});
$('.hero-unit a.mobile').click(function() {
  $('p.mobile').fadeToggle('slow', function() {
    // Animation complete
  });
});
$('.hero-unit a.social').click(function() {
  $('p.social').fadeToggle('slow', function() {
    // Animation complete
  });
});
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