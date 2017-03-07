// based on https://github.com/zenorocha/clipboard.js/tree/gh-pages/assets/scripts

// demos.js
var clipboardDemos=new Clipboard('[data-clipboard-demo]');clipboardDemos.on('success',function(e){e.clearSelection();console.info('Action:',e.action);console.info('Text:',e.text);console.info('Trigger:',e.trigger);showTooltip(e.trigger,'Copied!');});clipboardDemos.on('error',function(e){console.error('Action:',e.action);console.error('Trigger:',e.trigger);showTooltip(e.trigger,fallbackMessage(e.action));});

// snippets.js
var snippets=document.querySelectorAll('pre');[].forEach.call(snippets,function(snippet){snippet.firstChild.insertAdjacentHTML('beforebegin','<button class="btn" data-clipboard-snippet><img class="clippy" width="13" src="/wp-content/plugins/wp-highlightjs/assets/images/clippy.svg" alt="Copy to clipboard"></button>');});var clipboardSnippets=new Clipboard('[data-clipboard-snippet]',{target:function(trigger){return trigger.nextElementSibling;}});clipboardSnippets.on('success',function(e){e.clearSelection();showTooltip(e.trigger,'Copied!');});clipboardSnippets.on('error',function(e){showTooltip(e.trigger,fallbackMessage(e.action));});

// tooltips.js
var btns=document.querySelectorAll('.btn');for(var i=0;i<btns.length;i++){btns[i].addEventListener('mouseleave',function(e){e.currentTarget.setAttribute('class','btn');e.currentTarget.removeAttribute('aria-label');});}
function showTooltip(elem,msg){elem.setAttribute('class','btn tooltipped tooltipped-s');elem.setAttribute('aria-label',msg);}
function fallbackMessage(action){var actionMsg='';var actionKey=(action==='cut'?'X':'C');if(/iPhone|iPad/i.test(navigator.userAgent)){actionMsg='No support :(';}
else if(/Mac/i.test(navigator.userAgent)){actionMsg='Press ⌘-'+ actionKey+' to '+ action;}
else{actionMsg='Press Ctrl-'+ actionKey+' to '+ action;}
return actionMsg;}

hljs.initHighlightingOnLoad();
