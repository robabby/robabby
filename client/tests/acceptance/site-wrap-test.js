import { test } from 'qunit';
import moduleForAcceptance from 'robabby/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | site wrap');

test('Checking initial default state', function(assert) {
  visit('/');

  andThen(function() {
    let $el = find('.site-wrap');
    let check = $el.hasClass('navigation-is-open');

    assert.ok(check === false, 'Checking if navigation-is-open');
  });
});

test('Checking Open state', function(assert) {
  visit('/');

  andThen(function() {
    let $siteWrap = find('.site-wrap');
    let $navToggle = $siteWrap.find('.cd-nav-trigger');
    click($navToggle);
    andThen(function(){
      let check = $siteWrap.hasClass('navigation-is-open');

      assert.ok(check, 'Checking if navigation-is-open');
    });


  });
});
