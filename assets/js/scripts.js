// Load hi-fi covers
var covers = document.querySelectorAll('.book__image');
for (var i = 0; i < covers.length; i++) {
  if (covers[i].hasAttribute('data-bgSrc')) {
    covers[i].style.backgroundImage = 'url("' + covers[i].getAttribute('data-bgSrc') + '")';
  }
}

// Make highlight stand out when permalinked
var activateHighlight = function(hash) {
  var highlight = document.getElementById(hash);
  highlight.className += ' highlight--active';
  for (var i = 0; i < highlight.childNodes.length; i++) {
    if (highlight.childNodes[i].className == 'highlight__text') {
      var highlightText = highlight.childNodes[i];
      highlightText.innerHTML = '<span>' + highlightText.innerHTML + '</span> <button id="js-clearHighlight" class="btn--clear" title="Clear highlight permalink"><svg focusable="false" viewBox="0 0 20 20" width="20" height="20"><use href="#clear"></use></svg></button>';
      svg4everybody();
      break;
    }        
  }
  highlight.focus();
};

var smoothUpdateURL = function(hash, highlight) {
  var hashIndex = window.location.href.indexOf('#');
  if (hashIndex === -1) {
    var hashlessURL = window.location.href;
  } else {
    var hashlessURL = window.location.href.slice(0, hashIndex);
  }
  highlight.scrollIntoView({behavior: 'smooth'});
  history.replaceState(null, null, hashlessURL + '#' + hash);
};

var removeHighlight = function() {
  var highlighted = document.querySelector('.highlight--active');
  if (highlighted !== null) {
    var highlightText = highlighted.querySelector('.highlight__text');
    highlighted.className = 'highlight';
    highlightText.innerHTML = highlightText.innerText;
    if (document.getElementById('js-clearHighlight')) {
      this.remove();
    }
  }
};

var highlightSwitch = function(e) {
  var targetLink = e.currentTarget.href.toString();
  if (targetLink && targetLink.indexOf('#') > -1) {
    var hash = targetLink.substr(targetLink.indexOf('#') + 1);
    var highlight = document.getElementById(hash);
    if (highlight.className.indexOf('highlight--active') === -1) {
      removeHighlight();
      activateHighlight(hash);
      e.preventDefault();
      smoothUpdateURL(hash, highlight);
    }
  }
};

if (window.location.hash) {
  var hash = window.location.hash.replace('#', '');
  if (document.getElementById(hash)) {
    activateHighlight(hash);
  }
}

var permalinks = document.querySelectorAll('.highlight__link');
for (var i = 0; i < permalinks.length; i++) {
  permalinks[i].addEventListener('click', highlightSwitch, true);
}

// Clear featured highlight
var clickClear = function(e) {
  if (e.target.id === 'js-clearHighlight' || e.target.parentNode.id === 'js-clearHighlight') {
    removeHighlight();
    var hashIndex = window.location.href.indexOf('#');
    var hashlessURL = window.location.href.slice(0, hashIndex);
    history.replaceState(null, null, hashlessURL);
  }
}

window.addEventListener('click', clickClear, false);

// Polyfil for SVG sprites
svg4everybody();