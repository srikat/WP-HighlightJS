// based on https://github.com/zenorocha/clipboard.js/tree/gh-pages/assets/scripts

const snippets = document.querySelectorAll("pre");

snippets.forEach(function (snippet) {
  snippet.firstElementChild.insertAdjacentHTML(
    "beforebegin",
    '<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src=' +
      pluginData.clippyUrl +
      ' alt="Copy to clipboard"></button>'
  );
});

const clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
  target: function (trigger) {
    return trigger.nextElementSibling;
  },
});

clipboardSnippets.on("success", function (e) {
  e.clearSelection();

  showTooltip(e.trigger, "Copied!");
});

clipboardSnippets.on("error", function (e) {
  showTooltip(e.trigger, fallbackMessage(e.action));
});

// tooltips.js
const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseleave", clearTooltip);
  btns[i].addEventListener("blur", clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "btn");
  e.currentTarget.removeAttribute("aria-label");
}

function showTooltip(elem, msg) {
  elem.setAttribute("class", "btn tooltipped tooltipped-s");
  elem.setAttribute("aria-label", msg);
}

// Simplistic detection, do not use it in production
function fallbackMessage(action) {
  var actionMsg = "";
  var actionKey = action === "cut" ? "X" : "C";

  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    actionMsg = "No support :(";
  } else if (/Mac/i.test(navigator.userAgent)) {
    actionMsg = "Press ⌘-" + actionKey + " to " + action;
  } else {
    actionMsg = "Press Ctrl-" + actionKey + " to " + action;
  }

  return actionMsg;
}

hljs.highlightAll();
