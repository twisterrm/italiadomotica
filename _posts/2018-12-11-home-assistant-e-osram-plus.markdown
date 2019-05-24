---
title: "Home Assistant e Osram Plus"
comments: true
header:
  image: /assets/images/header_osram.png
gallery:
  - url: /assets/images/osram_hue.png
    image_path: /assets/images/osram_hue.png
    alt: "Osram Hue Room"
    title: "Osram Hue Room"
  - url: /assets/images/osram_hue2.png
    image_path: /assets/images/osram_hue2.png
    alt: "Osram Hue Light"
    title: "Osram Hue Light"
categories: [Tutorial]
tags: [home assistant, osram, tutorial, smart switch, remote switch, natale, yaml, gruppi, google home, automazione]
date: “11-12-2018 18:37:37 +0200”
---
In questo Tutorial andremo a collegare uno smart switch della Osram al nostro bridge Hue per renderlo poi disponibile ad Home Assistant e Google Home.

Trovate [qui](https://amzn.to/2QRhl0M) il link per l’acquisto.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GsKc7s9D6y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Lo smart plug utilizza il protocollo ZigBee, sarà dunque sufficiente un bridge Hue per poterlo abbinare.

Per abbinarlo basta collegarlo alla presa di corrente e attaccarvici un qualcosa che generi del carico (nel mio caso il caricabatterie dell’iPad), premere e mantenere premuto il tasto di accensione sino ad udire il **click** del relè, aprire l’app Hue ed aggiungere una nuova luce...

L’unica noia è che verrà riconosciuto come una lampadina, quindi ci mostrerà anche la possibilità di aumentare e diminuire la luminosità che di per se non farà nulla.

{% include gallery id="gallery" layout="half" %}

Una volta configurato lo smart plug con l’applicazione di Hue, lo ritroveremo in Home Assistant come una luce.

![Light HA](/assets/images/osram_ha.png)

Da li è possibile utilizzarlo in Home Assistant e in google Home come una normale luce, utilizzandolo per normali operazioni di accensione e spegnimento (come nel video) o anche in automazioni più complesse.

Iscrivetevi al [canale telegram](https://t.me/italiadomotic) per rimanere aggiornati sulle novita' e commentate qui sotto per avere informazioni o delucidazioni.

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
