<div class="modal fade" id="contact">
  <div class="modal-header">
    <a class="close" data-dismiss="modal">×</a>
    <h3>Feedback</h3>
  </div>
  <div class="modal-body">
    <img class="pull-right" src="/assets/img/contact_modal.png" />
    <?php if (($_POST && $suspect) || ($_POST && isset($errors['mailfail']))) { ?>
      <div class="alert alert-info">
        Are you human?
      </div>
    <?php } elseif ($missing || $errors) { ?>
      <div class="alert alert-info">
        <a class="close" data-dismiss="alert" href="#">&times;</a>
      There was an error
    </div>
    <?php } ?>
      <form id="feedback" method="post" action="">

        <label for="name">Name:
        <?php if ($missing && in_array('name', $missing)) { ?>
          <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
        <?php } ?>
        </label>
        <input name="name" id="name" type="text" class="formbox"
        <?php if ($missing || $errors) { 
         echo 'value="' . htmlentities($name, ENT_COMPAT, 'UTF-8') . '"';
        } ?>>

        <label for="email">Email:
        <?php if ($missing && in_array('email', $missing)) { ?>
          <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
        <?php } elseif (isset($errors['email'])) { ?>
          <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
        <?php } ?>
        </label>
        <input name="email" id="email" type="text" class="formbox"
        <?php if ($missing || $errors) { 
         echo 'value="' . htmlentities($email, ENT_COMPAT, 'UTF-8') . '"';
        } ?>>

        <label for="website">Website:
        <?php if ($missing && in_array('website', $missing)) { ?>
          <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
        <?php } elseif (isset($errors['website'])) { ?>
          <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
        <?php } ?>
        </label>
        <input name="website" id="website" type="text" class="formbox"
        <?php if ($missing || $errors) { 
         echo 'value="' . htmlentities($website, ENT_COMPAT, 'UTF-8') . '"';
        } ?>>

        <label for="twitter">Twitter Handle:
        <?php if ($missing && in_array('twitter', $missing)) { ?>
          <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
        <?php } elseif (isset($errors['twitter'])) { ?>
          <span class="label label-info">&nbsp;&nbsp;Invalid Email&nbsp;&nbsp;</span>
        <?php } ?>
        </label>
        <input name="twitter" id="twitter" type="text" class="formbox"
        <?php if ($missing || $errors) { 
         echo 'value="' . htmlentities($twitter, ENT_COMPAT, 'UTF-8') . '"';
        } ?>>

        <label for="comments">Comments:
        <?php if ($missing && in_array('comments', $missing)) { ?>
          <span class="label label-info">&nbsp;&nbsp;Required&nbsp;&nbsp;</span>
        <?php } ?>
        </label>
        
        <textarea name="comments" id="comments" rows="5" class=""><?php
          if ($missing || $errors) {
            echo htmlentities($comments, ENT_COMPAT, 'UTF-8');
          } ?></textarea>
        
        <br />
        
        <?php if (isset($errors['recaptcha'])) { ?>
          <div class="alert alert-info captcha">
            <a class="close" data-dismiss="alert" href="#">&times;</a>
            Are you sure you're human?
          </div>
        <?php }
        //echo recaptcha_get_html($public_key); 
        ?>
  </div>
  <div class="modal-footer">
    <button type="submit" class="btn btn-inverse">Submit</button>
    <a href="#" data-dismiss="modal" class="btn btn-danger">Cancel</a>
  </div>
  </form>
</div>