---
title: "Home"
layout: splash
permalink: /splash-page/
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.1"
  overlay_image: /assets/images/header.png
intro:
  - excerpt: 'Italia Domotica si propone come una risorsa italiana per Home Assistant e per discussioni sulla domotica, attivo un [forum](https://forum.italiadomotica.it) di discussione'
feature_row:
  - image_path: assets/images/tradfri_th.png
    alt: "tradfri thumb"
    title: "Ikea Tradfi"
    excerpt: "Passiamo alla configurazione di Home Assistant, con l’aggiunta di luci smart Ikea Tradfri..."
    url: "tutorial/home-assistant-configurazione-ikea-tradfri-e-personalizzazione/"
    btn_label: "Leggi Tutto"
    btn_class: "btn--primary"
  - image_path: /assets/images/base_th.png
    alt: "Installazione thumb"
    title: "Installazione e Panoramica"
    excerpt: "In questo primo video vederemo come installare Home Assistant..."
    url: "tutorial/installazione-e-panoramica-home-assistant/"
    btn_label: "Leggi Tutto"
    btn_class: "btn--primary"
  - image_path: /assets/images/welcome_th.png
    alt: "Benvenuti thumb"
    title: "Benvenuti"
    excerpt: "Benvenuti su Italia Domotica."
    url: "generale/benvenuti/"
    btn_label: "Leggi Tutto"
    btn_class: "btn--primary"
feature_row2:
 - image_path: assets/images/autostart_th.png
   alt: "autostart thumb"
   title: "Autostart"
   excerpt: "In questo tutorial vedremo come abilitare la partenza all’avvio del sistema del demone Home Assistant per sistemi basati su systemd."
   url: "tutorial/home-assistant-autostart-partenza-automatica-di-home-assistant/"
   btn_label: "Leggi Tutto"
   btn_class: "btn--primary"
 - image_path: /assets/images/base_th.png
   alt: "Installazione thumb"
   title: "Installazione e Panoramica"
   excerpt: "In questo primo video vederemo come installare Home Assistant..."
   url: "tutorial/installazione-e-panoramica-home-assistant/"
   btn_label: "Leggi Tutto"
   btn_class: "btn--primary"
 - image_path: /assets/images/welcome_th.png
   alt: "Benvenuti thumb"
   title: "Benvenuti"
   excerpt: "Benvenuti su Italia Domotica."
   url: "generale/benvenuti/"
   btn_label: "Leggi Tutto"
   btn_class: "btn--primary"
feature_row3:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}
