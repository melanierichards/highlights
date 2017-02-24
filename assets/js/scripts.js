// Make highlight stand out when permalinked
var activateHighlight = function(hash) {
  var highlight = document.getElementById(hash);
  highlight.className += ' highlight--active';
  for (var i = 0; i < highlight.childNodes.length; i++) {
    if (highlight.childNodes[i].className == 'highlight__text') {
      var highlightText = highlight.childNodes[i];
      highlightText.innerHTML = '<span>' + highlightText.innerHTML + '</span> <button id="js-clearHighlight" class="btn--clear" title="Clear highlight feature"></button>';
      break;
    }        
  }
  highlight.focus();
};

var removeHighlight = function() {
  var highlighted = document.querySelector('.highlight--active');
  if (highlighted !== null) {
    highlighted.className = 'highlight';
    document.getElementById('js-clearHighlight').remove();
  }
};

var highlightSwitch = function(e) {
  if (e.target.href && e.target.href.indexOf('#') > -1) {
    removeHighlight();
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

// Clear featured highlight
var clickClear = function(e) {
  if (e.target.id === 'js-clearHighlight') {
    removeHighlight();
    var hashIndex = window.location.href.indexOf('#');
    var hashlessURL = window.location.href.slice(0, hashIndex);
    history.replaceState(null, null, hashlessURL);
  }
}

window.addEventListener('click', clickClear, false);