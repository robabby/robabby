<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Raw Designs | Web Development &amp; Design</title>
    <meta name="description" content="Raw Designs Mobile">
    <meta name="author" content="Rob Abby (@stat30fbliss)">
    <!-- Mobile viewport optimization http://goo.gl/b9SaQ -->
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta http-equiv="cleartype" content="on">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <!-- For iPhone 4 with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/images/icon@2x.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/images/icon-72.png">
    <link rel="apple-touch-icon-precomposed" href="assets/images/icon.png">
    <link rel="apple-touch-startup-image" href="assets/images/default.png">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="lungojs/lungo-1.2.min.css">
    <link rel="stylesheet" href="lungojs/lungo.theme.default.css">
    <!-- App Stylesheet -->
    <link rel="stylesheet" href="assets/stylesheets/app.css">
    <!-- Fonts -->
    <link rel="stylesheet" href="/assets/fonts/BigNoodle/stylesheet.css">
    <link rel="stylesheet" href="/assets/fonts/TradeGothic/stylesheet.css">
    <link rel="stylesheet" href="/assets/fonts/Swiss/stylesheet.css">
    <style>
    /* ==|== Fonts ==|==

    Trade Gothic:
    font-family: 'TradeGothicLTStdBdCnNo.20';
    font-family: 'TradeGothicLTStdLight';
     
    Big Noodle:
    font-family: 'BigNoodleTitlingRegular';
    font-family: 'BigNoodleTitlingOblique';
     
    Swiss:
    font-family: 'Swiss721Light';
    font-family: 'Swiss721Medium';
    font-family: 'Swiss721Bold';
    */

    header {
        border-top: 1px solid #05BDE9;
        border-bottom: 1px solid #07ACD0;
        box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
        background: #45484d; /* Old browsers */
        background: -moz-linear-gradient(top, #45484d 0%, #000000 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45484d), color-stop(100%,#000000)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #45484d 0%,#000000 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top, #45484d 0%,#000000 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top, #45484d 0%,#000000 100%); /* IE10+ */
        background: linear-gradient(top, #45484d 0%,#000000 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    }
    article {
        background-color: #fff;
    }
    article .text {
        font-family: 'TradeGothicLTStdLight';
    }
    header a.button {
        background: #7abcff; /* Old browsers */
        background: -moz-linear-gradient(top, #7abcff 0%, #60abf8 44%, #4096ee 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#7abcff), color-stop(44%,#60abf8), color-stop(100%,#4096ee)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* IE10+ */
        background: linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* W3C */
    }
    #welcome h1 {
        font-size:40px;
        font-family: 'BigNoodleTitlingRegular';
        margin:10px 0 -10px 0;
        color:#333;
    }
    #welcome h1 span {

    }
    #welcome h2 {
        color:#39F;
    }
    </style>
</head>

<body class="app">

    <!-- ============================= kitchen-sink ============================= -->

    <section id="kitchen-sink">
        <header>
            <a href="#kitchen-sink-scroll" class="button onleft" data-target="aside" data-icon="user"></a>
            <nav class="onright">
                <a href="#profiles" data-target="aside" data-article="welcome" class="button" data-icon="items"></a>
            </nav>
        </header>

        <!-- ============================= welcome ============================= -->
        <article id="welcome" class="list scrollable indented">
            <div>
                <h1 class="title">Development + Design</h1>
                <h2>Web <span>/</span> Mobile <span>/</span> Social</h2>
                <br />
                <h3>A Preamble of Sorts</h3>
                <p class="text">
                    As an avid internet enthusiast and web development artist for almost a decade, I offer a variety of web and technical services to a versatile client base. Working as a Freelancer in the Chicagoland area, I have formed a robust network of clientele with various businesses and individuals. From web development to graphic design, I can offer a comprehensive image for my clients to attract new customers, enthusiasts or marketplaces.
                </p>
                <br />
                <h3>A Brief History</h3>
                <p class="text">
                    My transition into web development was both swift &amp; profound. Discovering HTML in order to customize the MySpace page of my band in 2005, I quickly fell in love with all things web. Before long I was working with CSS, and then quickly thereafter JavaScript, PHP, and MySQL. My first freelance jobs were naturally for musicians and dabbling artists, but my appetite soon took me to bigger and better places both on &amp; off the web.
                </p>
            </div>
        </article>

        <!-- ============================= buttons ============================= -->
        <article id="blog" class="scrollable indented">
            <div>

            </div>
        </article>

        <!-- ============================= icons ============================= -->
        <article id="contact" class="scrollable indented">
            <div>

            </div>
        </article>

    </section>

    <!-- LungoJS (Production mode) -->
    <script src="lungojs/lungo-1.2.packed.js"></script>
    <!-- LungoJS - Sandbox App -->
    <script src="app/app.js"></script>
    <script src="app/events.js"></script>
    <script src="app/view.js"></script>
    <script src="app/data.js"></script>
    <script src="app/services.js"></script>
    <!-- Tweet.js -->
    <script src="assets/js/jquery-1.7.1.min.js"></script>
    <script src="assets/js/jquery.tweet.js"></script>
    <script type='text/javascript'>
        jQuery(function($){
          $(".tweet").tweet({
            username: "stat30fbliss",
            join_text: "auto",
            avatar_size: 50,
            count: 8,
            auto_join_text_default: "I said,", 
            auto_join_text_ed: "I",
            auto_join_text_ing: "I was",
            auto_join_text_reply: "I replied to",
            auto_join_text_url: "I was checking out",
            loading_text: "loading tweets..."
          });
        });
    </script>
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-32901659-1']);
      _gaq.push(['_setDomainName', 'robabby.com']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
</body>
</html>
