(function () {
  'use strict';

  const pack = window.PYGMY_LOCALE || { locale: 'ko', messages: {} };
  const messages = pack.messages || {};

  function translate(value) {
    if (typeof value !== 'string') return value;
    const normalized = value.replace(/\s+/g, ' ').trim();
    return messages[value] || messages[normalized] || value;
  }

  function translateDocument(root = document.body) {
    if (pack.locale === 'ko') return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
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

  function addTestLabEntry() {
    const normalizedPath = window.location.pathname.replace(/index\.html$/, '');
    if (normalizedPath !== '/') return;
    if (document.querySelector('[data-test-lab-entry]')) return;

    const style = document.createElement('style');
    style.textContent = `
      .test-lab-entry {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        margin: 14px 0 24px;
        padding: 15px 16px;
        border: 1px solid rgba(141, 81, 39, 0.16);
        border-radius: 16px;
        background: rgba(255, 252, 247, 0.94);
        box-shadow: 0 8px 24px rgba(91, 49, 24, 0.08);
        text-decoration: none;
        color: #3d1f0a;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
      }
      .test-lab-entry:hover {
        transform: translateY(-2px);
        border-color: rgba(217, 111, 50, 0.34);
        box-shadow: 0 12px 30px rgba(91, 49, 24, 0.12);
      }
      .test-lab-entry-copy {
        display: grid;
        gap: 3px;
        min-width: 0;
      }
      .test-lab-entry-copy strong {
        font-size: 13px;
        font-weight: 900;
      }
      .test-lab-entry-copy small {
        color: #8c684f;
        font-size: 10px;
        font-weight: 600;
        line-height: 1.45;
      }
      .test-lab-entry-arrow {
        display: grid;
        flex: 0 0 auto;
        width: 36px;
        height: 36px;
        place-items: center;
        border-radius: 12px;
        color: #fff;
        background: #d96f32;
        box-shadow: 0 6px 14px rgba(217, 111, 50, 0.24);
        font-size: 16px;
        font-weight: 900;
      }
      .result-lab-entry {
        margin-top: 14px;
      }
      @media (max-width: 420px) {
        .test-lab-entry {
          padding: 13px 14px;
        }
        .test-lab-entry-copy strong {
          font-size: 12px;
        }
        .test-lab-entry-copy small {
          font-size: 9px;
        }
      }
    `;
    document.head.appendChild(style);

    const createEntry = extraClass => {
      const link = document.createElement('a');
      link.href = '/lab/';
      link.className = `test-lab-entry ${extraClass || ''}`.trim();
      link.dataset.testLabEntry = 'true';
      link.setAttribute('aria-label', '다른 피그미 테스트 둘러보기');
      link.innerHTML = `
        <span class="test-lab-entry-copy">
          <strong>🐿 다른 피그미 테스트도 해볼까요?</strong>
          <small>모프 · 집사 유형 · 궁합 · 준비도 테스트를 한곳에서 확인하세요</small>
        </span>
        <span class="test-lab-entry-arrow" aria-hidden="true">→</span>
      `;
      link.addEventListener('click', () => {
        if (typeof window.trackEvent === 'function') {
          window.trackEvent('test_lab_click', { source: extraClass ? 'result' : 'start' });
        }
      });
      return link;
    };

    const startActions = document.querySelector('#start-section .start-section');
    if (startActions) startActions.insertAdjacentElement('afterend', createEntry(''));

    const retryButton = document.querySelector('#result-section .btn-retry');
    if (retryButton) retryButton.insertAdjacentElement('beforebegin', createEntry('result-lab-entry'));
  }

  window.PygmyI18n = Object.freeze({ locale: pack.locale, translate });
  document.addEventListener('DOMContentLoaded', () => {
    translateDocument();
    addTestLabEntry();
    if (pack.locale !== 'ko') {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.parentElement) translateDocument(node.parentElement);
          else if (node.nodeType === Node.ELEMENT_NODE) translateDocument(node);
        }));
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, { once: true });
})();
