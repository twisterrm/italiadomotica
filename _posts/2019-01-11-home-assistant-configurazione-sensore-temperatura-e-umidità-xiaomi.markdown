---
title: "Home assistant configurazione sensore temperatura e umidità Xiaomi"
comments: true
header:
  image: /assets/images/header_xiaomitemp.png
categories: [Tutorial]
tags: [home assistant, xiaomi, sensori, temperatura, umidità, gruppi, yaml, ipad, app, termostato, netatmo]
date: “11-01-2019 10:31:57 +0200”
---
In questo nuovo video configureremo un sensore di temperatura ed umidità bluetooth di Xiaomi, per ottenere i valori di temperatura ed umidità di una stanza/casa.

Il sensore lo potete trovare [qui](https://amzn.to/2RoNi1i)

<iframe width="880" height="495" src="https://youtube.com/embed/ssCj8UPtBWE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Il sensore in questione è bluetooth LE, quindi configurabile con dispositivi che siano compatibili con tale tecnologia, io utilizzo un raspberry pi 3 B+ che ha il modulo integrato.

Il sensore non è compatibile con installazioni di Home Assistant che girano su Windows o MacOS dato il mancato supporto alla libreria *btlewrap*

Per iniziare dobbiamo installare alcune librerie nel virtual environment di Home Assistant.

Apriamo quindi una connessione ssh con il nostro server (o apriamo un terminale se connessi fisicamente ad esso con tastiera e mouse), eseguiamo il login come utente homeassistant (o qualsiasi altro utente avete creato).

{% highlight sh %}
sudo -u homeassistant -H -s
{% endhighlight %}

Entriamo quindi nel virtual environment ed attiviamolo

{% highlight sh %}
cd /srv/homeassistant
source bin/activate
{% endhighlight %}

Ed installiamo i moduli python necessari

{% highlight sh %}
pip3 install bluepy 
pip3 install btlewrap
{% endhighlight %}

Una volta finita l’installazione dei moduli usciamo dal virtual environment con 

{% highlight sh %}
exit
{% endhighlight %}

Inseriamo ora la batteria nel sensore Xiaomi (se non lo avete ancora fatto) e premiamo il tasto posteriore finchè il simbolo del bluetooth non lampeggia sul display.

Torniamo sul nostro terminale ed eseguiamo una scansione bluetooth

{% highlight sh %}
sudo hcitool lescan
{% endhighlight %}

Ci verrà restituita una lista di dispositivi simile a questa

 {% highlight sh %}
pi@raspberrypi:~ $ sudo hcitool lescan
LE Scan ...
C4:7C:8D:66:21:C0 Flower care
C4:7C:8D:66:22:57 (unknown)
C4:7C:8D:66:22:57 Flower care
4C:65:A8:DC:88:B5 (unknown)
4C:65:A8:DC:88:B5 MJ_HT_V1
E8:9E:B4:18:C7:34 (unknown)
{% endhighlight %} 

A noi interessa il dispositivo con il nome *MJ_HT_V1*, copiamone il MAC address (la serie di 6 caratteri alfanumerici accanto al nome).

Possiamo tranquillamente chiudere il nostro terminale ed aprire il nostro editor per configurare Home Assistant. Apriamo **sensors.yaml** e aggiungiamo il seguente codice:

{% highlight yaml %}
- platform: mitemp_bt
  mac: 4C:65:A8:DC:88:B5
  name: Temperatura Casa
  force_update: false 
  median: 3
  monitored_conditions: 
    - temperature
    - humidity
    - battery
{% endhighlight %}
 
*platform* è il nome della piattaforma e va lasciato così

*mac* è il MAC address che abbiamo copiato dopo la scansione

*name* è il nome che vogliamo assegnare al sensore su Home Assistant

*force_update: false* fa si che non venga inviato un cambio di stato dal sensore se non vi è stata una variazione (se la temperatura è fissa a 20° non lo invierà ogni volta) 

*median: 3* fa si che venga inviata la misura media di 3 rilevazioni per evitare spike (ad esempio una finestra aperta per poco tempo) che potrebbero falsare la lettura 

*monitored_condition* sono i valori che possiamo controllare (in questo caso solo i tre impostati)

Salviamo il file e riavviamo Home Assistant.

Ora andando su Home Assistant in dev state (il simbolo <> in fondo alla barra di navigazione laterale), troveremo i sensori indicati come **sensor.temperatura_casa_humidity, temperature e battery** (ovviamente temperatura_casa viene dalla variabile name impostata sopra).

Da qui ci basta in **groups.yaml** andare ad aggiungere i sensori ad una view:

{% highlight yaml %}
default_view:
  view: yes
  icon: mdi:home
  entities:
    - group.alarm_clock
    - group.wheater_conditions
    - group.thermostat
    - group.temperatura
    - group.lights_corridoio
 
 [...]
 
temperatura:
  name: Temperatura
  entities:
    - sensor.temperatura_casa_temperature
    - sensor.temperatura_casa_humidity
    - sensor.temperatura_casa_battery
{% endhighlight %}

E ricaricare i gruppi di Home Assistant 

![Temperatura](/assets/images/temperatura.png)

Sarà poi possibile da qui creare automazioni relativamente alle rilevazioni del sensore.

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
