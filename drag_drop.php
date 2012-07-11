<?php 
  $path2root = "";
  ob_start();
  try {
  include('./assets/inc/title.inc.php'); 
  include('./assets/inc/user_agent.php');
  require_once("./assets/inc/connection.inc.php");
?>
<!doctype html>
<html>
<head>
  <?php include('./assets/inc/head.inc.php'); ?>
  <style>
#filedrag {
  display: none;
  font-weight: bold;
  text-align: center;
  padding: 1em 0;
  margin: 1em 0;
  color: #555;
  border: 2px solid #09F;
  border-radius: 7px;
  cursor: default;
  box-shadow: inset 0 0px 15px 0px rgba(0, 0, 0, .25);
}
#filedrag.hover {
  border-style: solid;
  box-shadow: inset 0 3px 7px 0px rgba(0, 0, 0, .75);
}
img {
  max-width: 100%;
}
pre {
  width: 95%;
  height: 8em;
  font-family: monospace;
  font-size: 0.9em;
  padding: 1px 2px;
  margin: 0 0 1em auto;
  border: 1px inset #666;
  background-color: #eee;
  overflow: auto;
}
#messages {
  padding: 5px 10px 0px;
  margin: 1em 0;
  border: 1px solid #999;
  color:#fff;
  font-size:13px;
  line-height:120%; 
  background-color:#777;
  box-shadow:inset 0px 0px 10px 1px rgba(0, 0, 0, .75);
}
#progress p {
  display: block;
  width: 98%;
  padding: 2px 5px;
  margin: 2px 0;
  border: 1px inset #fff;
  border-radius: 5px;
  background: #eee none 100% 0 repeat-x;
  color:#fff;
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
}
#progress p.success {
  background-color: #149BDF;
  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));
  background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
  -moz-background-size: 40px 40px;
  -o-background-size: 40px 40px;
  background-size: 40px 40px;
  -webkit-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0);
  -moz-box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0);
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0);
}
#progress p.failed {
  background-color: #DD514C;
  background-image: -moz-linear-gradient(top, #EE5F5B, #C43C35);
  background-image: -ms-linear-gradient(top, #EE5F5B, #C43C35);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#EE5F5B), to(#C43C35));
  background-image: -webkit-linear-gradient(top, #EE5F5B, #C43C35);
  background-image: -o-linear-gradient(top, #EE5F5B, #C43C35);
  background-image: linear-gradient(top, #EE5F5B, #C43C35);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#c43c35', GradientType=0);
}
</style>
</head>
<body id="blank">
<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
     chromium.org/developers/how-tos/chrome-frame-getting-started -->
<!--[if lt IE 9]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

<!-- ## CONTACT MODAL ## -->
<?php include('./assets/inc/contactModal.inc.php'); ?>
<!-- ## CONTACT MODAL ## -->

<!-- ## HEADER & NAV ## --
<?php include('./assets/inc/nav.inc.php'); ?>
<!-- ## HEADER & NAV ## -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<div class="container">
  <div class="row">
    <div class="hero-unit">
      <a class="btn btn-large btn-inverse pull-right" href="scan_dir.php" title="">View Uploaded Files</a>
      <h1>HTML5 File Drag &amp; Drop</h1>

      <form id="upload" action="/assets/ops/upload.php" method="POST" enctype="multipart/form-data">
        <fieldset>
          <legend>File Upload</legend>
          <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="10000000" />
          <br />
          <div>
            <label for="fileselect">Select files to upload:</label>
            <input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
            <div id="filedrag">drop files here</div>
          </div>
          <div id="submitbutton">
            <button type="submit" id="upload">Upload Files</button>
          </div>
        </fieldset>
      </form>
    
      <div id="progress"></div>

      <div id="messages" class="well">
        <p>Status Messages</p>
      </div>
    </div><!-- .hero-unit -->
  </div><!-- .row -->
</div><!-- .container -->

<!-- #### MAIN CONTENT GOES HERE #### -->

<!-- ## FOOTER ## -->
<?php include('./assets/inc/footer.inc.php'); ?>
<!-- ## FOOTER ## -->

<!-- #### EXTRA SCRIPTS GO HERE #### -->
<script>
(function() {

  // getElementById
  function $id(id) {
    return document.getElementById(id);
  }

  // output information
  function Output(msg) {
    var m = $id("messages");
    m.innerHTML = msg + m.innerHTML;
  }

  // file drag hover
  function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
  }

  // file selection
  function FileSelectHandler(e) {

    // cancel event and hover styling
    FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      ParseFile(f);
      UploadFile(f);
    }
  }

  // output file information
  function ParseFile(file) {

    Output(
      "<p>File information: <strong>" + file.name +
      "</strong><br /> type: <strong>" + file.type +
      "</strong><br /> size: <strong>" + file.size +
      "</strong> bytes</p>"
    );

    // display an image
    if (file.type.indexOf("image") == 0) {
      var reader = new FileReader();
      reader.onload = function(e) {
        Output(
          "<p><strong>" + file.name + ":</strong><br />" +
          '<img src="' + e.target.result + '" /></p>'
        );
      }
      reader.readAsDataURL(file);
    }

    // display text
    if (file.type.indexOf("text") == 0) {
      var reader = new FileReader();
      reader.onload = function(e) {
        Output(
          "<p><strong>" + file.name + ":</strong></p><pre>" +
          e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
          "</pre>"
        );
      }
      reader.readAsText(file);
    }
  }

  // upload JPEG files
  function UploadFile(file) {

    var xhr = new XMLHttpRequest();
    if (xhr.upload && file.type == "image/jpeg" || "image/png" && file.size <= $id("MAX_FILE_SIZE").value) {

      // create progress bar
      var o = $id("progress");
      var progress = o.appendChild(document.createElement("p"));
      progress.appendChild(document.createTextNode("upload " + file.name));


      // progress bar
      xhr.upload.addEventListener("progress", function(e) {
        var pc = parseInt(100 - (e.loaded / e.total * 100));
        progress.style.backgroundPosition = pc + "% 0";
      }, false);

      // file received/failed
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          progress.className = (xhr.status == 200 ? "success" : "failure");
        }
      };

      // start upload
      xhr.open("POST", $id("upload").action, true);
      xhr.setRequestHeader("X_FILENAME", file.name);
      xhr.send(file);

    }
  }

  // initialize
  function Init() {

    var fileselect = $id("fileselect"),
      filedrag = $id("filedrag"),
      submitbutton = $id("submitbutton");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {

      // file drop
      filedrag.addEventListener("dragover", FileDragHover, false);
      filedrag.addEventListener("dragleave", FileDragHover, false);
      filedrag.addEventListener("drop", FileSelectHandler, false);
      filedrag.style.display = "block";

      // remove submit button
      submitbutton.style.display = "none";
    }
  }

  // call initialization file
  if (window.File && window.FileList && window.FileReader) {
    Init();
  }
  
})();
</script>
<!-- #### EXTRA SCRIPTS GO HERE #### -->

</body>
</html>
<?php
  } catch (exception $e) {
    ob_end_clean();
    header('Location: error.php');
  }
  ob_end_flush();
?>