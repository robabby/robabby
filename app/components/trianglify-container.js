import Ember from 'ember';
import Trianglify from 'npm:trianglify';

export default Ember.Component.extend({
  classNames: ['trianglify-container'],
  didInsertElement() {

    let pattern = new Trianglify({
      width: Ember.$(window).innerWidth(),
      height: Ember.$(window).innerHeight(),
      cell_size: 90,
      variance: 1,
      stroke_width: 0.6,
      color_function : function() {
        return '#de6551';
      }
    }).svg();

    // Add pattern to DOM.
    let container = document.querySelector('.trianglify-container');
    container.insertBefore(pattern, container.firstChild);

    // Get all pattern polygons.
    let polyArray = [].slice.call(pattern.children);

    // Get polygon coords and hide them.
    let polyPoints = polyArray.map(function(poly) {

      poly.classList.add('poly', 'invisible');

      let rect = poly.getBoundingClientRect();

      let point = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      return point;
    });

    // Get circle for hover.
    let circle = document.querySelector('.circle');

    circle.addEventListener('mouseenter', function() {
      document.addEventListener('mousemove', onMouseMove);
    });

    circle.addEventListener('mouseout', function() {
      document.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(e) {

      var radius = circle.clientWidth / 2;

      var center = {
        x: e.clientX,
        y: e.clientY
      };

      var circleCenter = {
        x: center.x - radius,
        y: center.y - radius
      };

      circle.setAttribute('style', 'transform: translate(' +
                          circleCenter.x + 'px, ' +
                          circleCenter.y + 'px)');

      polyPoints.forEach(function(point, i) {

        // Swap if to invert the effect.
        if (detectPointInCircle(point, radius, center)) {
          polyArray[i].classList.remove('invisible');
        } else {
          polyArray[i].classList.add('invisible');
        }
      });
    }

    function detectPointInCircle(point, radius, center) {

      var xp = point.x;
      var yp = point.y;

      var xc = center.x;
      var yc = center.y;

      var d = radius * radius;

      var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;

      return isInside;
    }
  }
});
