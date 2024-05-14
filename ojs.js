var script1 = document.createElement('script');
script1.src = "https://www.googletagmanager.com/gtag/js?id=G-5HQNXFLNNM";
script1.async = true;
document.head.appendChild(script1);
var script2 = document.createElement('script');
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5HQNXFLNNM');
`;
document.head.appendChild(script2);
var link1 = document.createElement('link');
link1.rel = "stylesheet";
link1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
document.head.appendChild(link1);
var link2 = document.createElement('link');
link2.rel = "stylesheet";
link2.href = "https://cdn.statically.io/gh/https433/abnsrc/main/nav.css";
document.head.appendChild(link2);
var meta = document.createElement('meta');
meta.httpEquiv = "onion-location";
meta.content = "http://46pdfehekuevsa6trepsrfocqjgh2fecqv4eddfuyapeavn47ufp7wyd.onion";
document.head.appendChild(meta);
