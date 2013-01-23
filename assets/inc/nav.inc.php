<?php $currentPage = basename($_SERVER['SCRIPT_FILENAME']); ?>

  <header>
<<<<<<< HEAD
    <nav>
      <ul>
        <li <?php if ($currentPage == 'index.php') {
          echo 'class="active"';} ?>><a class="first" href="<?php echo $path2root ?>/index.php">Home</a></li>
        <!--<li <?php if ($currentPage == 'about.php') {
          echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/about.php">About</a></li>-->
        <li <?php if ($currentPage == 'sandbox.php') {
          echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/sandbox.php">Sandbox</a></li>
          <li <?php if ($currentPage == 'blog.php') {
          echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/blog.php">Blog</a></li>
        <li class="last <?php if ($currentPage == 'contact.php') {
          echo 'active';} ?>"><a href="<?php echo $path2root ?>/contact.php">Contact</a></li>
      </ul>
    </nav>
=======
    <div class="navbar">
      <div class="navbar-inner">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
        <div class="nav-collapse">
          <ul class="nav pull-right">
            <li <?php if ($currentPage == 'index.php') {
              echo 'class="active"';} ?>><a class="first" href="<?php echo $path2root ?>/index.php">Home</a></li>
            <!--<li <?php if ($currentPage == 'about.php') {
              echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/about.php">About</a></li>-->
            <li <?php if ($currentPage == 'sandbox.php') {
              echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/sandbox.php">Sandbox</a></li>
              <li <?php if ($currentPage == 'blog.php') {
              echo 'class="active"';} ?>><a href="<?php echo $path2root ?>/blog.php">Blog</a></li>
            <li class="last <?php if ($currentPage == 'contact.php') {
              echo 'active';} ?>"><a href="<?php echo $path2root ?>/contact.php">Contact</a></li>
          </ul>
        </div><!-- .nav-collapse -->
      </div><!-- .nav-inner -->
    </div><!-- .navbar -->
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
  </header>