---
title: "Home Assistant Tracking dei dispositivi ed automazioni"
commments: true
header:
  image: /assets/images/header_tracking.png
categories: [Tutorial]
tags: [Atom, custom, device tracking, Discourse, HA, Home Assistant, how-to, nmap, Notifiche, Python, router, sensori, Telegram, Tracking, Tutorial, Video, Yaml]
date: "2018-10-02 10:25:22 +0200"
---
Impostiamo il tracking dei dispositivi all’interno della nostra rete per creare automazioni basate sulla presenza.

I parametri da aggiungere ad nmap al minuto 2:12

{% highlight sh %}
sudo setcap cap_net_raw,cap_net_admin,cap_net_bind_service+eip /usr/bin/nmap
{% endhighlight %}

Utilizzando nmap il riavvio del server o anche solo di Home Assistant sara’ abbastanza lungo poiche’ sara’ necessario attendere la scansione di tutta la rete da parte di nmap stesso.

Nmap utilizzera’ anche una buona dose di risorse del vostro server.

Home Assistant puo’ interfacciarsi con molti router attualmente in commercio come anche con alcuni forniti dai gestori telefonici, utilizzando il router come dispositivo di presence detection i tempi di attesa si annullano come l'impiego di risorse, per delucidazioni sul vostro router ed eventuali aiuti sulla configurazione vi invito a commentare qui in calce

<iframe width="880" height="495" src="https://www.youtube.com/embed/UCz42IwuJwM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


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
