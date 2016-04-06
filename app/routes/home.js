import Ember from 'ember';
import Trianglify from 'npm:trianglify';

export default Ember.Route.extend({
  didInsertElement: function() {
    var container = document.getElementsByClassName('main-content')[0];
    console.log(container);
    container.insertBefore(pattern, container.firstChild);
    // Get all pattern polygons.
    var polyArray = [].slice.call(pattern.children);
    // Get polygon coords and hide them.
    var polyPoints = polyArray.map(function(poly) {
      poly.classList.add('poly', 'invisible');

      var rect = poly.getBoundingClientRect();
      var point = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      return point;
    });

    // Get circle for hover.
    var circle = document.querySelector('.circle');

    console.log(circle);

    circle.addEventListener('mouseEnter', function() {
      document.addEventListener('mouseMove', onMouseMove);
    });

    circle.addEventListener('mouseLeave', function() {
      document.removeEventListener('mouseMove', onMouseMove);
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

var pattern = new Trianglify({
  width: Ember.$(window).innerWidth(),
  height: Ember.$(window).innerHeight(),
  cell_size: 90,
  variance: 1,
  stroke_width: 0.6,
  color_function : function() {
    return '#de6551';
  }
}).svg();
