(()=>{var e={998:()=>{window.admindashboardinterop={get:e=>e in localStorage?JSON.parse(localStorage[e]):null,set:(e,t)=>{localStorage[e]=JSON.stringify(t)},delete:e=>{delete localStorage[e]},getElementScrollLeft:function(e){return null!=e?e.scrollLeft:0},getBoundingClientRect:function(e){return null!=e?e.getBoundingClientRect():null},getElementScrollWidth:function(e){return null!=e?e.scrollWidth:0},getElementSOffsets:function(e){return null==e?{offsetWidth:0,offsetHeight:0,offsetTop:0,offsetLeft:0}:{offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight,offsetTop:e.offsetTop,offsetLeft:e.offsetLeft}}}},619:()=>{window.blginterop=function(){const e={};let t,n=!1,o=!1,i=null;function r(e){return e?"visible"!==getComputedStyle(e).overflowY?e:r(e.parentElement):null}return{addTouchListeners:function(e,r,c){return function(e,r,c){let l,s,u;e.addEventListener("touchstart",(function(e){if(n)return;l=e.touches[0].clientX,s=e.touches[0].clientY,u=r.scrollLeft,n=!0,i=e.touches[0],o=!1;const t=i;window.setTimeout((()=>{n&&i===t&&!o&&(o=!0)}),500)}),{passive:!0}),e.addEventListener("touchmove",(function(e){if(!n)return;const t=function(e){for(let t=0;t<e.length;t++)if(e[t].identifier===i.identifier)return e[t];return null}(e.touches);if(!t)return;!function(e,t,n){const o=Math.abs(e.clientX-t.clientX),i=Math.abs(e.clientY-t.clientY);return Math.max(o,i)<=4}(t,i)&&(o=!0);const f=e.touches[0];console.log("startX",l),console.log("touch.clientX",f.clientX);const d=f.clientX-l,a=s-f.clientY;if(Math.abs(d)>Math.abs(a)){if(Math.abs(d)>10){e.preventDefault();var h=r.scrollWidth-r.clientWidth;console.log("deltaX",d),r.scrollLeft=u-d;var g=r.scrollLeft;if(console.log("elementScrollLeft",g),0===g&&d<0||g>=h&&d>0)return void console.log("Ejecucion detenida");var p={maxScrollLeft:h,deltaX:d,elementScrollLeft:g};c.invokeMethodAsync("OnTouchMove",p)}}else if(Math.abs(a)>10)return;Math.abs(d)>10&&Math.abs(a)}),{passive:!1}),e.addEventListener("touchend",(function(e){n&&(o||function(){const e=(new Date).getTime();t=t&&t>0&&e-t>500?null:e}(),n=!1)}),{passive:!0})}(e,r,c),!0},addWindowEventListeners:function(e,t){return e.addEventListener("mouseleave",(function(){t.invokeMethodAsync("MouseLeave")})),!0},getElementScrollLeft:function(e){return e.scrollLeft},getBoundingClientRect:function(e){return e.getBoundingClientRect()},getElementScrollWidth:function(e){return e.scrollWidth},getHeaderWidth:function(e){let t=document.getElementById(e).getElementsByClassName("blg-header-cell blg-header-cell-notpinned"),n=0;for(var o=0;o<t.length;o++)n+=t[o].clientWidth;return n},init:function(t,n,o,i=50){const c=r(n);(c||document.documentElement).style.overflowAnchor="none";const l=new window.IntersectionObserver((function(e){e.forEach((e=>{if(!e.isIntersecting)return;const i=n.getBoundingClientRect(),r=o.getBoundingClientRect().top-i.bottom,c=e.rootBounds.height;e.target===n?t.invokeMethodAsync("OnSpacerBeforeVisible",e.intersectionRect.top-e.boundingClientRect.top,r,c):e.target===o&&o.offsetHeight>0&&t.invokeMethodAsync("OnSpacerAfterVisible",e.boundingClientRect.bottom-e.intersectionRect.bottom,r,c)}))}),{root:c,rootMargin:`${i}px`,threshold:0});l.observe(n),l.observe(o);const s=f(n),u=f(o);function f(e){const t=new window.MutationObserver((()=>{l.unobserve(e),l.observe(e)}));return t.observe(e,{attributes:!0}),t}e[t._id]={intersectionObserver:l,mutationObserverBefore:s,mutationObserverAfter:u}},dispose:function(t){const n=e[t._id];n&&(n.intersectionObserver.disconnect(),n.mutationObserverBefore.disconnect(),n.mutationObserverAfter.disconnect(),t.dispose(),delete e[t._id])}}}()},918:()=>{window.dnetimageeditor=function(){var e=window.rxjs,t=0,n=0,o=0,i=0;function r(e,r,c,l,s){let u,f,d,a;switch(e){case"TopLeft":u=o+(s-c),f=i+(s-c),d=n-(s-c),a=t-(s-c);break;case"TopRight":u=o+(s-c),f=i+(s-c),d=n-(s-c),a=t;break;case"BottomLeft":u=o+(l-r),f=i+(l-r),d=n,a=t-(l-r);break;case"BottomRight":u=o-(s-c),f=i-(s-c),d=n,a=t;break;case"TopCenter":u=o+(s-c),f=i,d=n-(s-c),a=t;break;case"BottomCenter":u=o-(s-c),f=i,d=n,a=t;break;case"RightCenter":u=o,f=i-(l-r),d=n,a=t;break;case"LeftCenter":u=o,f=i+(l-r),d=n,a=t-(l-r)}return{height:u,width:f,top:d,left:a}}return{setFocus:function(e){e&&e.focus()},getBoundingClientRect:function(e){return e.getBoundingClientRect()},initializeDragAndDrop:function(r,c,l,s,u,f){!function(r,c,l,s,u){t=s,n=u,i=c.offsetWidth,o=c.offsetHeight;const f=l.offsetWidth,d=l.offsetHeight,a=e.fromEvent(c,"mousedown"),h=e.fromEvent(l,"mousemove"),g=e.fromEvent(document.body,"mouseup").pipe(e.operators.take(1)),p=a.pipe(e.operators.switchMap((c=>{const l=c.clientX,s=c.clientY;return this._dragEndSub=g.subscribe((e=>{t=t+e.clientX-l,n=n+e.clientY-s,t<0&&(t=0),n<0&&(n=0),t+i>f&&(t=f-i),n+o>d&&(n=d-o),r.invokeMethodAsync("OnDragEnd",{height:o,width:i,left:t,top:n})})),r.invokeMethodAsync("OnDragStart"),h.pipe(e.operators.map((e=>{e.preventDefault();let r=t+e.clientX-l,c=n+e.clientY-s;return r<0&&(r=0),c<0&&(c=0),r+i>f&&(r=f-i),c+o>d&&(c=d-o),{height:o,width:i,left:r,top:c}})),e.operators.takeUntil(g))})));this._dragSub=p.subscribe((e=>{r.invokeMethodAsync("OnDrag",e)}))}(r,c,l,s,u)},initializeResize:function(c,l,s,u,f,d,a,h,g,p,m){!function(c,l,s,u,f,d,a,h,g,p,m){t=s,n=u,o=f,i=d;for(let s of l){const l=e.fromEvent(s.reference,"mousedown"),u=e.fromEvent(document.body,"mousemove"),f=e.fromEvent(document.body,"mouseup").pipe(e.operators.take(1));l.pipe(e.operators.switchMap((l=>{const d=l.clientX,a=l.clientY;return this._resizeEndSub=f.subscribe((e=>{var l=r(s.resizerType,e.clientX,e.clientY,d,a);t=l.left,n=l.top,o=l.height,i=l.width,c.invokeMethodAsync("OnResizeEnd",{height:o,width:i,left:t,top:n})})),l.preventDefault(),c.invokeMethodAsync("OnResizeStart"),u.pipe(e.operators.map((e=>(e.preventDefault(),r(s.resizerType,e.clientX,e.clientY,d,a)))),e.operators.takeUntil(f))}))).pipe(e.operators.filter((e=>e.top+e.height<=h&&e.left+e.width<=a&&e.height>m&&e.top>=0&&e.left>=0))).subscribe((e=>{c.invokeMethodAsync("OnResize",e)}))}}(c,l,s,u,f,d,a,h,0,0,m)}}}()},85:()=>{var e;window.dnetoverlay=(e={},{addWindowEventListeners:function(t){var n=window.rxjs,o=n.merge(n.fromEvent(window,"resize"),n.fromEvent(window,"orientationchange")).pipe(n.operators.auditTime(100));return e=o.subscribe((e=>{t.invokeMethodAsync("OnWindowResized",{Width:window.innerWidth,Height:window.innerHeight})})),!0},removeWindowEventListeners:function(){e.unsubscribe()},getViewportScrollPosition:function(){var e=document.documentElement,t=e.getBoundingClientRect();return{Top:-t.top||document.body.scrollTop||window.scrollY||e.scrollTop||0,Left:-t.left||document.body.scrollLeft||window.scrollX||e.scrollLeft||0}},getViewportSize:function(){return{Width:window.innerWidth,Height:window.innerHeight}},getViewportSizeNoScroll:function(){return{Width:document.documentElement.clientWidth,Height:document.documentElement.clientHeight}},getBoundingClientRect:function(e){return e.getBoundingClientRect()},getDocumentBoundingClientRect:function(){return document.documentElement.getBoundingClientRect()},getDocumentClientHeight:function(){return document.documentElement.clientHeight},getDocumentClientWidth:function(){return document.documentElement.clientWidth},getWindowWidth:function(){return window.innerWidth}})},871:()=>{window.dnetinterop={get:e=>e in localStorage?JSON.parse(localStorage[e]):null,set:(e,t)=>{localStorage[e]=JSON.stringify(t)},delete:e=>{delete localStorage[e]},getElementScrollLeft:function(e){return null!=e?e.scrollLeft:0},getBoundingClientRect:function(e){return null!=e?e.getBoundingClientRect():null},getElementScrollWidth:function(e){return null!=e?e.scrollWidth:0},getElementSOffsets:function(e){return null==e?{offsetWidth:0,offsetHeight:0,offsetTop:0,offsetLeft:0}:{offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight,offsetTop:e.offsetTop,offsetLeft:e.offsetLeft}}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n(619),n(918),n(998),n(85),n(871)})();