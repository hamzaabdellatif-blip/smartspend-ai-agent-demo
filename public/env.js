// Served in place of Ziila's /env.js, which every Ziila page loads first (our static files win over the proxy).
// Pulls in Ziila's real config, then rebrands the UI: hides Ziila logos, removes "Ziila" from copy,
// and shows "Xlab Group" instead of intella.
document.write('<script src="/ziila-env.js"><\/script>');

(function () {
  var css =
    'img[src*="/logos/zilla-fullcolor-logo.svg"],img[src*="/logos/zilla-logo.svg"],img[src*="/logos/intella-logo.svg"]{display:none!important}' +
    '.ss-brand{font-size:13px;font-weight:600;color:#2E5E6B}';

  // Specific sentences first so they still read naturally, then a catch-all for anything else.
  var TEXT = [
    [/Ready to become part of Zii?la\??/g, 'Ready to get started?'],
    [/Train Zii?la with your data/g, 'Train your agent with your data'],
    [/درّب Zii?la على/g, 'درّب وكيلك على'],
    [/هل أنت مستعد لتصبح جزءًا من زيلا؟/g, 'هل أنت مستعد للبدء؟'],
    [/التحدث إلى زيلا/g, 'التحدث إلى وكيلك'],
    [/\bZii?la\b/gi, 'your agent'],
    [/زيلا/g, 'وكيلك'],
    [/\bintella\b/gi, 'Xlab Group']
  ];

  function fixText(node) {
    var v = node.nodeValue, out = v;
    for (var i = 0; i < TEXT.length; i++) out = out.replace(TEXT[i][0], TEXT[i][1]);
    if (out !== v) node.nodeValue = out;
  }

  function fixTree(root) {
    if (root.nodeType === 3) return fixText(root);
    if (root.nodeType !== 1) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) fixText(walker.currentNode);
    var logos = root.querySelectorAll ? root.querySelectorAll('img[src*="/logos/intella-logo.svg"]') : [];
    for (var j = 0; j < logos.length; j++) {
      var img = logos[j];
      if (img.nextSibling && img.nextSibling.className === 'ss-brand') continue;
      var span = document.createElement('span');
      span.className = 'ss-brand';
      span.textContent = 'Xlab Group';
      img.parentNode.insertBefore(span, img.nextSibling);
    }
  }

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var m = mutations[i];
      if (m.type === 'characterData') fixText(m.target);
      for (var j = 0; j < m.addedNodes.length; j++) fixTree(m.addedNodes[j]);
    }
    if (/zii?la/i.test(document.title)) document.title = 'Xlab Group';
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();
