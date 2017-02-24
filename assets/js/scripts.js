// Make highlight stand out when permalinked
var activateHighlight = function(hash) {
  var highlight = document.getElementById(hash);
  highlight.className += ' highlight--active';
  highlight.focus();
};

var highlightSwitch = function(e) {
  if (e.target.href && e.target.href.indexOf('#') > -1) {
    var highlighted = document.querySelectorAll('.highlight--active');
    for (var i = 0; i < highlighted.length; i++) {
      highlighted[i].className = 'highlight';
    }
    var href = e.target.href;
    var hash = href.substr(href.indexOf('#') + 1);
    activateHighlight(hash);
  }
};

if (window.location.hash) {
  var hash = window.location.hash.replace('#', '');
  if (document.getElementById(hash)) {
    activateHighlight(hash);
  }
}

window.addEventListener('click', highlightSwitch, false);