---
title: "Home Assistant, MiFlora: Sensori Piante"
commments: true
header:
  image: /assets/images/header_miflora.png
categories: [Tutorial]
tags: [Atom, custom, Xiaomi, MiFlora, Piante, HA, Home Assistant, how-to, sensori piante, luminosita', qualita' terreno, Integrazione, Python, Script, Tutorial, Video, Yaml]
date: "2018-10-15 09:36:18 +0200"
---

In questo tutorial parleremo di Mi Flora, un sensore per le piante di Xiaomi, che possiamo integrare in Home Assistant per poterne leggere gli stati e le variazioni di luminosita', qualita' del terreno, acqua e temperatura.

<iframe width="480" height="270" src="https://www.youtube.com/embed/V_dMCcibMmc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Potete acquistarlo su [AliExpress](https://it.aliexpress.com/item/Originale-Xiao-mi-mi-flora-monitor-Internazionale-Versione-Digitale-Piante-Erba-Fiore-Cura-Di-Acqua-del/32835184154.html?spm=a2g0y.search0104.3.9.66553a63QlL84q&transAbTest=ae803_4&ws_ab_test=searchweb0_0%2Csearchweb201602_4_10065_10068_318_319_10546_10548_317_5727315_10696_450_10084_10083_10618_452_535_534_10304_533_10307_10820_532_204_5727215_10843_10059_10884_10887_100031_320_10103_448_449%2Csearchweb201603_60%2CppcSwitch_0&algo_pvid=5c07bd6e-9205-4a9b-b202-f6582c9a0dbc&priceBeautifyAB=0&algo_expid=5c07bd6e-9205-4a9b-b202-f6582c9a0dbc-1) o su [Amazon](https://www.amazon.it/Intelligente-bluetooth-misuratore-intelligente-rilevatore/dp/B01LXOJSWA/ref=sr_1_1?ie=UTF8&qid=1539365126&sr=8-1&keywords=mi+flora) dipende da quanto volete spendere/attendere.

Quello che dobbiamo inizialmente fare e' utilizzare l'app ufficiale per [ios](https://itunes.apple.com/it/app/flower-care/id1095274672?mt=8) e [android](https://play.google.com/store/apps/details?id=com.huahuacaocao.flowercare&hl=it), impostare il sensore ed assegnargli la pianta scegliendola nel vasto database presente, questo ci servira' per avere i valori di riferimento di ogni pianta.

Una volta fatta questa prima operazione possiamo passare a configurare il sensore con Home Assistant.

**Una piccola premessa:** il sensore e' un dispositivo bluetooth LE, abbiamo quindi bisogno di un raspberry pi 3 o successivo o comunque di un dongle bluetooth LE, al momento il sensore non e' compatibile con istanze di Home Assistant che girano su OsX o Windows.

Colleghiamoci al nostro server (nel mio caso un raspberry pi) via ssh, lo stack bluetooth e' gia' installato di default su quasi tutte le moderne distribuzioni, se cio' non fosse installiamolo (bluez, bluetooth ecc... Dipende dalla vosta distribuzione), possiamo ora andare a cercare il nostro sensore con il comando

{% highlight sh %}
sudo hcitool lescan
{% endhighlight %}

Il terminale ci restituira' un output simile

{% highlight sh %}
pi@raspberrypi:~ $ sudo hcitool lescan
LE Scan ...
4B:98:51:61:2F:72 (unknown)
4B:98:51:61:2F:72 (unknown)
E8:BB:41:06:E0:3B SMI-X3
45:41:83:4B:B5:93 (unknown)
45:41:83:4B:B5:93 (unknown)
78:0B:F2:0D:B9:4E (unknown)
78:0B:F2:0D:B9:4E (unknown)
C4:7C:8D:66:21:8E (unknown)
C4:7C:8D:66:21:8E Flower care
C4:7C:8D:66:22:57 (unknown)
F8:87:B0:39:B6:78 SMI-X3
C4:7C:8D:66:22:57 Flower care
F8:87:B0:39:B6:78 (unknown)
{% endhighlight %}

Il dispositivo che ci interessa e' quello che si chiama **Flower care** (o in alcuni casi Flower Mate), dobbiamo copiare il mac address e tenerlo da parte.

Sulla configurazione di Home Assistant andiamo ad aprire il file **sensors.yaml** e ad aggiungere il sensore in questo modo:

{% highlight yaml %}
- platform: miflora
  mac: 'C4:7C:8D:66:21:8E'
  name: Geranio
  force_update: false
  median: 3
  monitored_conditions:
    - moisture
    - light
    - temperature
    - conductivity
    - battery
{% endhighlight %}

In name metteremo il nome della nostra pianta, median e' impostato a 3 poiche' per avere una lettura coerente faremo una medi su 3 misurazioni per evitare di avere delle condizioni passeggere (tipo il sole che va via per 2 minuti) che vadano a mal interpretare il sensore magari triggerando notifiche non veritiere, force_update a false serve per non consumare troppo in fretta la batteria (io posseggo i sensori da 4 mesi ormai e sono ancora al 99%).

Monitored condition sono invece i parametri che andremo a monitorare.

Riavviamo Home Assistant ed in Home Assistant - developer options - states sinceriamoci che siano presenti i sensori con la dicitura sensor.nomedellapianta_condizione (nel mio caso sensor.geranio_battery, sensor.geranio_light e cosi' via).

Andiamo adesso ad inserire all'interno di una view le nostre piante: in **groups.yaml** aggiungiamo la seguente view:

{% highlight yaml %}
Plants:
  view: yes
  icon: mdi:flower
  entities:
    - group.geranio
{% endhighlight %}

e, sempre in **groups.yaml** definiamo il gruppo *group.geranio* cosi':

{%- highlight yaml -%}
geranio:
  name: Geranio
  entities:
    - sensor.geranio_battery
    - sensor.geranio_conductivity
    - sensor.geranio_light_intensity
    - sensor.geranio_moisture
    - sensor.geranio_temperature
{%- endhighlight -%}

Facciamo un refresh dei gruppi da su Impostazioni - General - Reload Groups, sulla home page troveremo il gruppo piante identificato dall'icona della pianta (icon: mdi:flower).

Facendo una media di 3 misurazioni e misurando una volta ogni 20 minuti dovremmo attendere almeno 40 minuti prima di vedere qualcosa.

![View Piante](/assets/images/view_piante.png)

Una volta ottenuti i valori possiamo anche creare delle notifiche che ci possono informare delle necessita' delal nostra pianta, riferendoci alla precedente guida sulle [notifiche Telegram](/tutorial/home-assistant-notifiche-telegram) andremo ad impostare una notifica **numeric_state** utilizzando *above* e *below* come parametri per il trigger

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
