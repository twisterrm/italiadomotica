---
title: "installazione e panoramica Home Assistant"
commments: true
header:
  image: /assets/images/base_header.png
categories: [Tutorial]
tags: [Discourse, HA, Home Assistant, how-to, Python, Tutorial, Video, virtualenv, Yaml]
date: "2018-09-30 21:19:07 +0200"
---
In questo primo video vedremo prima come installare Home Assistant utilizzando un server linux e creando un virtualenv in python.

Passeremo poi a fare una breve panoramica delle funzionalita’.

<iframe width="880" height="495" src="https://www.youtube.com/embed/likdVdBDLGc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Cosa è Home Assistant:** Home Assistant è un software open source che si occupa di gestire ed integrare dispositivi domotici. 

**Perchè Home Assistant:** Perché ci permette di utilizzare una sola applicazione per gestire dispositivi di vari fornitori/costruttori facendoli interagire tra loro e, soprattutto, ci permette di creare automazioni con condizioni infinite.

***INSTALLAZIONE***


Nel video viene descritta l’installazione su un server Linux Debian based, ma è tranquillamente replicabile su Raspberry Pi (il mio attuale server di h.a.).
Se decidete di utilizzare un Raspberry vi consiglio di utilizzare un Pi3 B+ per 3 motivi,  Wi-Fi ac integrata, Gbit Ethernet e Bluetooth 4.2 BLE integrato che potrebbe servire per integrare dispositivi Bluetooth.

Una volta installata raspbian (la guida per l’istallazione la trovate [qui](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)) sul vostro sistema operativo aprite un terminale (se utilizzate windows scaricate  [putty](https://www.putty.org)) e colleghiamoci via ssh al nostro raspberry

{% highlight sh %}
ssh pi@indirizzoipraspberry
{% endhighlight %}

Aggiorniamo il repository e verifichiamo se vi sono aggiornamenti da fare 

{% highlight sh %}
sudo apt-get update && apt-get upgrade -y
{% endhighlight %}

Passiamo poi ad installare i pacchetti di base ed a creare il virtual environment in python 

{% highlight sh %}
sudo apt-get install python3 python3-venv python3-pip 
{% endhighlight %}

Creiamo un account che chiameremo homeassistant assegnandogli una home directory e la possibilità di controllare i gpio 

{% highlight sh %}
sudo useradd -rm homeassistant -G dialout,gpio
{% endhighlight %}

Prossimo passo è quello di creare la directory dove verrà creato il virtual environment e di renderne homeassistant il proprietario

{% highlight sh %}
cd /srv
sudo mkdir homeassistant
sudo chown homeassistant:homeassistant homeassistant
{% endhighlight %}

Possiamo ora creare il virtual environment come utente homeassistant

{% highlight sh %}
sudo -u homeassistant -H -s
cd /srv/homeassistant
python3 -m venv .
source bin/activate
{% endhighlight %}

Vedrete cambiare il prompt del terminale poichè ci presenterà (homeassistant) in fronte e il percorso del virtual environment.

Passiamo ad installare wheel e infine Home Assistant

{% highlight sh %}
python3 -m pip install wheel
pip3 install homeassistant
{% endhighlight %}

Facciamo partire Home Assistant per la prima volta, al fine di creare le directory necessarie e scaricare le librerie e le dipendenze

{% highlight sh %}
hass 
{% endhighlight %}

Possiamo quindi collegarci via browser web alla nostra interfaccia di amministrazione 

[http://indirizzoipraspberry:8123](http://indirizzoipraspberry:8123)

Il primo avvio impiega circa 10/15 minuti, quindi se il sito vi restituisce un errore di mancata raggiungibilità siate semplicemente pazienti.

***PRIMA CONFIGURAZIONE***


Aprendo il browser ci troveremo davanti alla richiesta di creare l’account amministrativo, facciamolo.

Dopodiché vedremo la prima pagina di Home Assistant, dove gli unici elementi saranno le indicazioni metereologiche e un testo di benvenuto.

Dobbiamo anzitutto impostare le nostre coordinate e togliere il messaggio di benvenuto, per fare questo dobbiamo prima capire come funzionano i file di configurazione di Home Assistant:

Si trovano nella directory {% highlight sh %}
/home/homeassistant/.homeassistant
{% endhighlight %} (se avete seguito i passi dell’installazione precedente). 

Andando a vedere il contenuto della directory troveremo dei file con estensione *.yaml*, quello è il formato utilizzato da Home Assistant per le configurazioni.
La sintassi dei file yaml è strettamente legata all’identazione (un po’ come python), un errore sulla formattazione e il nostro codice non funzionerà [qui](https://www.home-assistant.io/docs/configuration/yaml/) trovate maggiori informazioni in merito.

Per editare i file di configurazione utilizzo [Atom](https://atom.io), un editor multipiattaforma veloce e leggero che permette l’uso di plugin esterni.

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
