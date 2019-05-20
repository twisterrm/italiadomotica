var store = [{
        "title": "Benvenuti",
        "excerpt":"Benvenuti, lo scopo del sito e’ quello di fornire una raccolta di tutorial e di tips in particolar modo su Home Assistant ma anche su aspetti di domotica in generale.   Sono attivi anche i commenti dove poter discutere degli articoli qui aggiunti e per domande e richieste di supporto.  ","categories": ["Generale"],
        "tags": ["benvenuti","info sito","informazioni"],
        "url": "https://www.italiadomotica.it/generale/benvenuti/",
        "teaser":null},{
        "title": "installazione e panoramica Home Assistant",
        "excerpt":"In questo primo video vedremo prima come installare Home Assistant utilizzando un server linux e creando un virtualenv in python. Passeremo poi a fare una breve panoramica delle funzionalita’. Cosa è Home Assistant: Home Assistant è un software open source che si occupa di gestire ed integrare dispositivi demotici. Perchè...","categories": ["Tutorial"],
        "tags": ["Discourse","HA","Home Assistant","how-to","Python","Tutorial","Video","virtualenv","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/installazione-e-panoramica-home-assistant/",
        "teaser":null},{
        "title": "Home Assistant configurazione Ikea Tradfri e personalizzazione",
        "excerpt":"Passiamo alla configurazione di Home Assistant, con l’aggiunta di luci smart Ikea Tradfri e la personalizzazione di interruttori attraverso il file di configurazione configuration.yaml   Introdurremo anche la separazione dei file di configurazione aggiungendo e modificando il file customize.yaml.        Please enable JavaScript to view the comments powered by Disqus. ","categories": ["Tutorial"],
        "tags": ["Discourse","HA","Home Assistant","how-to","Python","Tutorial","Video","Tradfri","Yaml","Luci","Smart Home","Atom","Gateway","Zigbee"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-configurazione-ikea-tradfri-e-personalizzazione/",
        "teaser":null},{
        "title": "Home Assistant autostart, partenza automatica di Home Assistant",
        "excerpt":"In questo tutorial vedremo come abilitare la partenza all’avvio del sistema del demone Home Assistant per sistemi basati su systemd. Creare il file di configurazione con sudo nano /etc/systemd/system/home-assistant@homeassistant.service Incollando questo [Unit] Description=Home Assistant After=network-online.target [Service] Type=simple User=%i ExecStart=/home/homeassistant/homeassistant/bin/hass -c \"/home/homeassistant/.homeassistant\" [Install] WantedBy=multi-user.target\" Dove in ExecStart mettere il percorso del...","categories": ["Tutorial"],
        "tags": ["Discourse","HA","Home Assistant","how-to","Python","Tutorial","Video","systemd","Autostart","nano","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-autostart-partenza-automatica-di-home-assistant/",
        "teaser":null},{
        "title": "Home Assistant – Sensori e Gruppi",
        "excerpt":"Impostiamo il sensore di Dark Sky per le previsioni meteo ed introduciamo i gruppi. I sensori sono tutti quegli oggetti che ci restituiscono un valore e possono essere monitorati, e grazie ai quali creeremo più avanti delle automazioni. I gruppi invece ci permetteranno di rendere più ordinata la nostra UI,...","categories": ["Tutorial"],
        "tags": ["Aspetto","Atom","Discourse","gruppi","HA","Home Assistant","how-to","Python","sensori","Tutorial","ui","Video","Yaml","Darksky","meteo","previsioni"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-sensori-e-gruppi/",
        "teaser":null},{
        "title": "Home Assistant Notifiche Telegram",
        "excerpt":"Impariamo come utilizzare le notifiche di Telegram integrandolo con Home Assistant per ricevere cambi di stato ed informazioni.   Molto utile per creare alert customizzati.        Please enable JavaScript to view the comments powered by Disqus. ","categories": ["Tutorial"],
        "tags": ["custom","Discourse","HA","Home Assistant","how-to","Notifiche","Python","sensori","Telegram","Tutorial","Video","Yaml","Automazioni"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-notifiche-telegram/",
        "teaser":null},{
        "title": "Home Assistant Tracking dei dispositivi ed automazioni",
        "excerpt":"Impostiamo il tracking dei dispositivi all’interno della nostra rete per creare automazioni basate sulla presenza. I parametri da aggiungere ad nmap al minuto 2:12 sudo setcap cap_net_raw,cap_net_admin,cap_net_bind_service+eip /usr/bin/nmap Utilizzando nmap il riavvio del server o anche solo di Home Assistant sara’ abbastanza lungo poiche’ sara’ necessario attendere la scansione di...","categories": ["Tutorial"],
        "tags": ["Atom","custom","device tracking","Discourse","HA","Home Assistant","how-to","nmap","Notifiche","Python","router","sensori","Telegram","Tracking","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-tracking-dei-dispositivi-ed-automazioni/",
        "teaser":null},{
        "title": "Home Assistant Zone ed Indicazioni tempo di percorrenza",
        "excerpt":"Oggi utilizziamo Home Assistant per aggiungere delle zone con punti di interesse, e attraverso le API di Google Maps calcolare il tempo di arrivo nel traffico verso uno di questi punti.        Please enable JavaScript to view the comments powered by Disqus. ","categories": ["Tutorial"],
        "tags": ["Atom","Discourse","Google Maps","gruppi","HA","Home Assistant","how-to","indicazioni stradali","Python","sensori","tempo di percorrenza","traffico","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-zone-ed-indicazioni-tempo-di-percorrenza/",
        "teaser":null},{
        "title": "Home Assistant Integrazione con Google Home",
        "excerpt":"In questo tutorial andremo a linkare il nostro server di Home Assistant con Google Home attraverso Home Assistant Cloud        Please enable JavaScript to view the comments powered by Disqus. ","categories": ["Tutorial"],
        "tags": ["Assistente Vocale","Atom","Automation","Discourse","Google","Google Home","HA","Home Assistant","Cloud","how-to","Python","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-integrazione-con-google-home/",
        "teaser":null},{
        "title": "Home Assistant Google Home ed LG Tv",
        "excerpt":"Utilizziamo Home Assistant per controllare una tv LG e creare degli script personalizzati attivabili vocalmente con Google Home.        Please enable JavaScript to view the comments powered by Disqus. ","categories": ["Tutorial"],
        "tags": ["Assistente Vocale","Atom","Automation","Comandi Vocali","Discourse","Google","Google Home","HA","Home Assistant","how-to","lg","lg tv","Python","Remote","Sensori","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-google-home-ed-lg-tv/",
        "teaser":null},{
        "title": "canale telegram",
        "excerpt":"E’ attivo il canale Telegram! Un canale dove verranno inviati i nuovi articoli ed anche qualche novita’ come i nuovi articoli in lavorazione, e sondaggi su nuove idee e tutorial da realizzare. Iscrivetevi  ","categories": ["Generale"],
        "tags": ["Novita'","Telegram","Integrazioni"],
        "url": "https://www.italiadomotica.it/generale/canale-telegram/",
        "teaser":null},{
        "title": "Home Assistant, Roomba e Google Home",
        "excerpt":"In questo tutorial vedremo come integrare il nostro Roomba con Home Assistant per poter automatizzare le nostre pulizie quotidiane ed aggiungerlo a google home per controllarlo attraverso i comandi vocali. Sotto il video trovate la guida passo passo Condizione fondamentale e’ quella di avere un Roomba con il modulo wifi,...","categories": ["Tutorial"],
        "tags": ["Atom","custom","Roomba","iRobot","Google Home","HA","Home Assistant","how-to","comandi vocali","Integrazione","Python","Script","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-roomba-e-google-home/",
        "teaser":null},{
        "title": "Home Assistant, MiFlora: Sensori Piante",
        "excerpt":"In questo tutorial parleremo di Mi Flora, un sensore per le piante di Xiaomi, che possiamo integrare in Home Assistant per poterne leggere gli stati e le variazioni di luminosita’, qualita’ del terreno, acqua e temperatura. Potete acquistarlo su AliExpress o su Amazon dipende da quanto volete spendere/attendere. Quello che...","categories": ["Tutorial"],
        "tags": ["Atom","custom","Xiaomi","MiFlora","Piante","HA","Home Assistant","how-to","sensori piante","luminosita'","qualita' terreno","Integrazione","Python","Script","Tutorial","Video","Yaml"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-miflora-sensori-piante/",
        "teaser":null},{
        "title": "Home Assistant e Osram Plus",
        "excerpt":"In questo Tutorial andremo a collegare uno smart switch della Osram al nostro bridge Hue per renderlo poi disponibile ad Home Assistant e Google Home. Trovate qui il link per l’acquisto. Lo smart plug utilizza il protocollo ZigBee, sarà dunque sufficiente un bridge Hue per poterlo abbinare. Per abbinarlo basta...","categories": ["Tutorial"],
        "tags": ["home assistant","osram","tutorial","smart switch","remote switch","natale","yaml","gruppi","google home","automazione"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-e-osram-plus/",
        "teaser":null},{
        "title": "Home assistant configurazione sensore temperatura e umidità Xiaomi",
        "excerpt":"In questo nuovo video configureremo un sensore di temperatura ed umidità bluetooth di Xiaomi, per ottenere i valori di temperatura ed umidità di una stanza/casa. Il sensore lo potete trovare qui Il sensore in questione è bluetooth LE, quindi configurabile con dispositivi che siano compatibili con tale tecnologia, io utilizzo...","categories": ["Tutorial"],
        "tags": ["home assistant","xiaomi","sensori","temperatura","umidità","gruppi","yaml","ipad","app","termostato","netatmo"],
        "url": "https://www.italiadomotica.it/tutorial/home-assistant-configurazione-sensore-temperatura-e-umidit%C3%A0-xiaomi/",
        "teaser":null}]
