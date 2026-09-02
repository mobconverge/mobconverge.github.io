---
layout: default
title: "About Mark Schisler"
meta_title: "About — Mark Schisler, Principal"
description: "Mark Schisler brings two decades of software leadership to every engagement, helping founders and product teams turn ambitious ideas into software people rely on."
image: "/images/selfie.jpg"
breadcrumbs:
  - name: "Home"
    url: "/"
  - name: "About"
    url: "/about/"
bodyClass: "page-about"
---

<div class="strip">
  <div class="container pt-6 pb-6 pt-md-10 pb-md-10">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-8">
        {% include breadcrumbs.html %}
        <h1 class="title">About</h1>
      </div>
    </div>
    <div class="row justify-content-center align-items-start">
      <div class="col-9 col-sm-7 col-md-4 col-lg-3 mb-3 mb-md-0">
        <img alt="Mark Schisler, Principal at Mobconverge" class="about-photo img-fluid" width="600" height="800" loading="lazy" decoding="async" src="{{ '/images/selfie.jpg' | relative_url }}" />
      </div>
      <div class="col-12 col-md-7 col-lg-5">
        <h2>Mark Schisler, Principal</h2>
        <div class="content">
          {% include about-content.html %}
        </div>
        <p class="pt-4">
          <a href="{{ site.data.contact.contact_button_link }}" class="button button-lg">Get in touch</a>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="strip strip-grey">
  <div class="container pt-6 pb-6 pt-md-8 pb-md-8">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-8">
        <h2 class="title section-title">What we do</h2>
        <ul>
          {% assign services = site.services | sort: 'weight' %}
          {% for service in services %}
          <li><a href="{{ service.url | relative_url }}">{{ service.title }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>
