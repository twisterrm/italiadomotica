---
title: "Home Assistant autostart, partenza automatica di Home Assistant"
commments: true
header:
  image: /assets/images/header_autostart.png
categories: [Tutorial]
tags: [Discourse, HA, Home Assistant, how-to, Python, Tutorial, Video, systemd, Autostart, nano, Yaml]
date: "2018-10-01 14:27:30 +0200"
---
In questo tutorial vedremo come abilitare la partenza all’avvio del sistema del demone Home Assistant per sistemi basati su systemd.

<iframe width="880" height="495" src="https://www.youtube.com/embed/2GTGBj9_qSw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Creare il file di configurazione con

{% highlight sh %}
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
{% endhighlight %}

Incollando questo

{% highlight sh %}
[Unit]
Description=Home Assistant
After=network-online.target

[Service]
Type=simple
User=%i
ExecStart=/home/homeassistant/homeassistant/bin/hass -c "/home/homeassistant/.homeassistant"

[Install]
WantedBy=multi-user.target"
{% endhighlight %}

Dove in ExecStart mettere il percorso del venv di Python che avete impostato seguendo il mio primo tutorial

Ricaricate sistemd con

{% highlight sh %}
sudo systemctl --system daemon-reload
{% endhighlight %}

Abilitiamo al boot Home Assistant con

{% highlight sh %}
sudo systemctl enable home-assistant@homeassistant
{% endhighlight %}

E lo facciamo partire con

{% highlight sh %}
sudo systemctl start home-assistant@homeassistant
{% endhighlight %}


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
