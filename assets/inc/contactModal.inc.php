<div class="modal fade" id="contact">
  <div class="modal-header">
    <a class="close" data-dismiss="modal">×</a>
    <h3>Contact</h3>
  </div>
  <div class="modal-body">
    <img class="pull-right" src="/images/logo_home.png" />
    <form name="msg" action="<?php echo $path2root ?>/assets/ops/sendmail.php" method="post">
      <p>
        <label>Name</label>
        <input type="text" name="from" id="from" class="span4" placeholder="Name">
      </p>
      <p>
        <label>Email</label>
        <input type="text" name="email" id="email" class="span4" placeholder="Email">
      </p>
      <p>
        <label>Message</label>
        <textarea type="text" name="comments" id="comments" class="span4" placeholder="Send me a message!"></textarea>
      </p>
  </div>
  <div class="modal-footer">
    <button type="submit" class="btn btn-inverse">Submit</button>
    <a href="#" data-dismiss="modal" class="btn">Cancel</a>
  </div>
  </form>
</div>