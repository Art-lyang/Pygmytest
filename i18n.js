(function () {
  'use strict';

  const pack = window.PYGMY_LOCALE || { locale: 'ko', messages: {} };
  const messages = pack.messages || {};

  function translate(value) {
    if (typeof value !== 'string') return value;
    const normalized = value.replace(/\s+/g, ' ').trim();
    return messages[value] || messages[normalized] || value;
  }

  function translateDocument() {
    if (pack.locale === 'ko') return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const original = node.nodeValue;
      const trimmed = original.replace(/\s+/g, ' ').trim();
      const translated = translate(trimmed);
      if (translated !== trimmed) {
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.nodeValue = `${leading}${translated}${trailing}`;
      }
    });
  }

  window.PygmyI18n = Object.freeze({ locale: pack.locale, translate });
  document.addEventListener('DOMContentLoaded', translateDocument, { once: true });
})();
