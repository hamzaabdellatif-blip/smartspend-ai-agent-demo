// Served in place of Ziila's /env.js, which every Ziila page loads first (our static files win over the proxy).
// Pulls in Ziila's real config, then rebrands the UI: removes "Ziila" from copy and resizes the logos,
// which public/assets/images/logos/ swaps for ours: the SmartSpend wordmark for Ziila's logos (sized for a square
// mark) and the Xlab Group logo, recoloured navy, for the intella "Powered By" logo.
document.write('<script src="/ziila-env.js"><\/script>');

(function () {
  var css =
    'img[src*="/illustrations/zilla-avatar.svg"]{display:none!important}' +
    'img[src*="/logos/zilla-logo.svg"]{width:auto!important;height:26px!important;margin-bottom:24px}' +
    'img[src*="/logos/zilla-fullcolor-logo.svg"]{width:auto!important;height:26px!important;margin-bottom:8px}' +
    'img[src*="/logos/intella-logo.svg"]{width:auto!important;height:24px!important;margin-inline-start:4px}';

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
