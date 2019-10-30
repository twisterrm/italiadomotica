---
title: "Home Assistant – Sensori e Gruppi"
commments: true
header:
  image: /assets/images/header_sensors.png
categories: [Tutorial]
tags: [Aspetto, Atom, Discourse, gruppi, HA, Home Assistant, how-to, Python, sensori, Tutorial, ui, Video, Yaml, Darksky, meteo, previsioni]
date: "2018-10-01 22:20:44 +0200"
---
Impostiamo il sensore di [Dark Sky](https://www.darksky.net) per le previsioni meteo ed introduciamo i gruppi.

I sensori sono tutti quegli oggetti che ci restituiscono un valore e possono essere monitorati, e grazie ai quali creeremo più avanti delle automazioni.

I gruppi invece ci permetteranno di rendere più ordinata la nostra UI, raggruppare e rendere più presentabile la nostra installazione di Home Assistant.

Utilizzeremo file separati di configurazione riprendendo i concetti espressi nei video precedenti.

Non dimenticate di commentare e discutere sul forum anche per eventuali domande e delucidazioni.

<iframe width="880" height="495" src="https://www.youtube.com/embed/ePpfSq3cwYA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://italiadomotica.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
