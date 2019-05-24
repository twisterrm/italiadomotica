---
title: "Home Assistant, Roomba e Google Home"
commments: true
header:
  image: /assets/images/header_roomba.png
gallery:
  - url: /assets/images/roomba_group.png
    image_path: /assets/images/roomba_group.png
    alt: "roomba group"
    title: "Group view"
  - url: /assets/images/roomba_group2.png
    image_path: /assets/images/roomba_group2.png
    alt: "roomba group"
    title: "Exploded"
categories: [Tutorial]
tags: [Atom, custom, Roomba, iRobot, Google Home, HA, Home Assistant, how-to, comandi vocali, Integrazione, Python, Script, Tutorial, Video, Yaml]
date: "2018-10-11 18:06:23 +0200"
---
In questo tutorial vedremo come integrare il nostro Roomba con Home Assistant per poter automatizzare le nostre pulizie quotidiane ed aggiungerlo a google home per controllarlo attraverso i comandi vocali.

Sotto il video trovate la guida passo passo

<iframe width="560" height="315" src="https://www.youtube.com/embed/bptaMAmg11g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


Condizione fondamentale e' quella di avere un Roomba con il modulo wifi, controllabile quindi da app.
Al momento i modelli compatibili sono il 696, 895, 966, 980.

Una volta aggiunto il Roomba sulla sua app ufficiale (e quindi collegato alla nostra rete wifi) utilizzeremo una libreria non ufficiale in python per trovare l'ip del nostro robot e altri 2 parametri fondamentali, il **blid** (o username) e la password.

Possiamo visitare il [sito](https://github.com/NickWaterton/Roomba980-Python) per farci un' idea di tutto quello che fa la libreria oppure clonarci direttamente il repository ed utilizzare l'unica parte di script che ci serve:
apriamo un terminale in una directory "comoda" (per me ~/Documents/roomba)

{% highlight sh %}
cd ~/Documents/roomba
{% endhighlight %}

Cloniamo il repository:

{% highlight sh %}
git clone https://github.com/NickWaterton/Roomba980-Python.git
{% endhighlight %}

Una volta scaricato entriamo nella directory creata e poi in quella con lo script che ci serve:

{% highlight sh %}
cd Roomba980-Python/roomba
{% endhighlight %}

e avviamo lo script

{% highlight sh %}
./getpassword.py
{% endhighlight %}

Lo script ci restituira' qualche errore di dipendenze di cui non ci dobbiamo troppo curare e si mettera' a cercare qualche robot nella rete, una volta trovato ci indichera' il nome ed il suo indirizzo ip, ci chiedera' poi di fare una semplice operazione sul nostro Roomba.

Sinceriamoci che sia sul dock ed in carica, premiamo quindi il pulsante "Clean" (quello di accensione) per circa 2 secondi finche' non sentiamo una serie di bip, lasciamo il tasto e vedremo che l'indicatore del wifi sul roomba iniziera' a lampeggiare.

Premiamo invio.

Poco dopo il terminale ci restituira' una serie di parametri come questi:

{% highlight sh %}
{ ver: '3',
  hostname: 'Roomba-3165051411838770',
  robotname: 'wolf',
  ip: '192.168.xx.xx',
  mac: 'XX:XX:XX:XX:XX:XX',
  sw: '3.3.19',
  sku: 'R671040',
  nc: 0,
  proto: 'mqtt',
  cap: { ota: 1, eco: 1, svcConf: 1 },
  blid: 'XXXXXXXXXXXXXXXX' }
Password=> XXXXXXXXXXXXXXXXXXXXXXXXXXXXX <= Yes, all this string.
Use this credentials in dorita980 lib :)
{% endhighlight %}

Le voci che ci interessano sono **blid** e **password**, copiamole.

Passiamo ora ad Home Assistant:

in **configuration.yaml** nella nostra lista di include andiamo a creare quella per le aspirapolveri aggiungendo

{% highlight yaml %}
vacuum: !include vacuum.yaml
{% endhighlight %}

Creiamo poi il file **vacuum.yaml** (se utilizziamo Atom tasto destro sulla lista dei file e poi new file)

All'interno del file **vacuum.yaml** andremo ad indicare i seguenti parametri:

{% highlight yaml %}
vacuum:
  - platform: roomba
    host: 192.168.xx.xx
    username: XXXXXXXXXXXXXXXX
    password: XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
{% endhighlight %}

Riavviamo Home Assistant e controlliamo su developer tools - status che sia stato riconosciuto ed aggiunto il Roomba cercando vacuum (il mio viene riconosciuto come vacuum.roomba).

Possiamo ora andare ad editare groups.yaml ed andare a visualizzare su una view il nostro robot semplicemente aggiungendo

{% highlight yaml %}
- vacuum.roomba
{% endhighlight %}

ad una qualsiasi view.

In Home Assistant - impostazioni - Generali, facciamo un refresh dei gruppi e andiamo a vedere.

{% include gallery id="gallery" layout="half" %}

Da qui possiamo gia' controllare il nostro Roomba vedendone lo stato e la carica della batteria ed utilizzando i tasti per farlo partire, metterlo in pausa, fermarlo e farlo tornare alla base.

Ma non e' estremamente comodo, utilizzeremo a tal scopo Google Home per comandarlo vocalmente.

Apriamo **script.yaml** e creiamo i seguenti script:

{% highlight yaml %}
roomba_on:
  alias: in ordine casa
  sequence:
    - service: vacuum.turn_on

roomba_stop:
  alias: la pulizia in pausa
  sequence:
    - service: vacuum.stop

roomba_home:
  alias: roomba a casa
  sequence:
    - service: vacuum.turn_off
{% endhighlight %}

Ho dato quegli alias particolari perche' Google Home per gli script risponde sia al comando "Accendi" che al comando "Metti".

Facciamo un refresh degli script (sempre da Home Assistant - impostazioni - Generali) e rifacciamo il sync di Google Home in

Home Assistant - Impostazioni - Home Assistant Cloud - Google Assistant - Sync

Possiamo ora con estrema fierezza dire:

**"Ehi Google, metti in ordine casa"**

Se avete domande o commenti scrivete pure qui sotto, e non dimenticate di iscrivervi al [canale Telegram](https://t.me/italiadomotic)

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
