window.onload=function(){var a=document.createElement("script");a.src="https://code.jquery.com/jquery-3.6.0.min.js",a.onload=function(){console.log("jquery 3.6.0 loaded successfully!")},document.head.appendChild(a);var b=document.createElement("link");b.rel="stylesheet",b.href="https://raw.githack.com/A5M1/abnsrc/radar/bundle.css",document.head.appendChild(b)};function initializeFetcher(a){console.log("Initializing fetch with URL:",a),fetchData(a)}function fetchData(a){console.log("Fetching data from:",a),fetch("http://127.0.0.1:6984/files?folder="+a).then(a=>a.json()).then(a=>{generateVideoTags(a)}).catch(a=>{console.error("Error fetching data:",a)})}function generateVideoTags(a){console.log("Data received:",a);const b=document.querySelector(".fancybox-container");for(let c=0;c<a.vid.length;c++){const d=document.createElement("v-t");d.setAttribute("v-src",a.vid[c]),d.setAttribute("vs-p",a.pst[c]),d.setAttribute("vg-p",a.thm[c]),b.appendChild(d)}}function observeContainer(){const a=new MutationObserver((a,b)=>{for(let c of a)if("childList"===c.type&&document.querySelector(".fancybox-container")){console.log(".fancybox-container is now available"),b.disconnect();const a=document.querySelector("ct[url]")?.getAttribute("url");a?initializeFetcher(a):console.error("URL not provided in the DOM.")}});a.observe(document.body,{childList:!0,subtree:!0})}document.addEventListener("DOMContentLoaded",observeContainer);class VideoThumbnail extends HTMLElement{static get observedAttributes(){return["v-src","vs-p","vg-p"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`<div id="thumbnail" class="video-thumbnail"><div class="loading">Loading...</div></div>`,this.thumbnail=this.shadowRoot.getElementById("thumbnail"),this.loadingElement=this.shadowRoot.querySelector(".loading"),$(this.thumbnail).on("mouseenter",()=>this.delayedShowGif()),$(this.thumbnail).on("mouseleave",()=>this.showStatic()),$(this.thumbnail).on("click",()=>this.openModal())}connectedCallback(){this.updateThumbnail()}attributeChangedCallback(){this.updateThumbnail()}updateThumbnail(){let a=this.getAttribute("vs-p")||"",b=new Image;b.onload=()=>{$(this.thumbnail).css({width:b.width,height:b.height,"background-image":`url('${a}')`}),this.hideLoading()},b.src=a,this.showLoading()}showGif(){let a=this.getAttribute("vg-p")||"";$(this.thumbnail).css("background-image",`url('${a}')`)}showStatic(){let a=this.getAttribute("vs-p")||"";$(this.thumbnail).css("background-image",`url('${a}')`)}delayedShowGif(){let a=this.getAttribute("vg-p")||"";this.gifTimeout=setTimeout(()=>{$(this.thumbnail).css("background-image",`url('${a}')`)},400)}openModal(){openCustomModal(this.getAttribute("v-src"),Array.from(document.querySelectorAll("v-t")).indexOf(this))}showLoading(){this.loadingElement.style.display="block"}hideLoading(){this.loadingElement.style.display="none"}}customElements.define("v-t",VideoThumbnail),$(document).on("contextmenu","v-t",function(a){a.preventDefault();let b=$(this).attr("vs-p");b&&window.open(b,"_blank")});class ReqInput extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`<div class="input-container"><label for="req-input">Enter Request ID:</label><input type="text" id="req-input" placeholder="Enter video name"><button id="generate-video">Generate Video</button></div>`}connectedCallback(){this.shadowRoot.querySelector("#generate-video").addEventListener("click",()=>{const a=this.shadowRoot.querySelector("#req-input").value.trim();a?(updateVideoElement(a),this.shadowRoot.querySelector("#req-input").value=""):alert("Please enter a request ID")})}}customElements.define("req-input",ReqInput);function updateVideoElement(a){const b=document.querySelector(".fancybox-container v-t");b&&(b.setAttribute("v-src",`http://localhost:5000/data/new/webm/webm/${a}.mp4`),b.setAttribute("vs-p",`http://localhost:5000/data/new/webm/png/${a}_poster.png`),b.setAttribute("vg-p",`http://localhost:5000/data/new/webm/gif/${a}_thumb.gif`))}