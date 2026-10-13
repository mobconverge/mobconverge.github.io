---
layout: default
title: "Privacy Policy"
meta_title: "Privacy Policy — Mobconverge, LLC"
description: "How Mobconverge, LLC handles information when you visit mobconverge.com or contact us by email."
effective_date: "October 13, 2026"
breadcrumbs:
  - name: "Home"
    url: "/"
  - name: "Privacy Policy"
    url: "/privacy/"
bodyClass: "page-privacy"
---

<div class="strip">
  <div class="container pt-6 pb-6 pt-md-10 pb-md-10">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-8">
        {% include breadcrumbs.html %}
        <h1 class="title">Privacy Policy</h1>
        <div class="content">
          <p><em>Effective {{ page.effective_date }}</em></p>

          <p>{{ site.title }} ("Mobconverge", "we", "us") operates {{ site.url | remove: 'https://' }}. This policy explains what information is collected when you visit this website or get in touch with us, how it is used, and the choices you have. We keep it short because we collect very little.</p>

          <h2>Information you give us</h2>
          <p>This site has no accounts, forms, or sign-ups. If you email us at <a href="mailto:{{ site.data.contact.email }}">{{ site.data.contact.email }}</a>, we receive whatever you choose to include, typically your name, email address, company, and a description of your project. We use it only to reply to you, discuss potential work, and keep a record of our correspondence.</p>

          <h2>Information collected automatically</h2>
          <p>This website is a static site hosted on <a href="https://pages.github.com/">GitHub Pages</a>. When you load a page, your browser connects to GitHub's servers, which may log technical details such as your IP address, browser type, the pages requested, and the time of the request, for security and operational purposes. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub's Privacy Statement</a> for how GitHub handles that data.</p>
          {% assign posthog_key = site.env.POSTHOG_KEY | strip %}
          {% if posthog_key != "" and posthog_key %}
          <p>We use <a href="https://posthog.com/">PostHog</a> to understand, in aggregate, how visitors find and use the site. PostHog records information such as pages viewed, links clicked, referring site, browser, device, and approximate location derived from your IP address, and stores an anonymous identifier in a cookie and your browser's local storage so repeat visits can be recognized. We do not use it to identify you personally, and if your browser sends a Do Not Track signal, the PostHog script still loads but records no events. See <a href="https://posthog.com/privacy">PostHog's privacy policy</a>.</p>
          {% else %}
          <p>We do not use analytics, advertising, or tracking scripts, and this site does not set its own cookies.</p>
          {% endif %}

          <h2>Third-party services</h2>
          <p>Some page elements are loaded from third parties, which receive your IP address and standard browser information when they are requested:</p>
          <ul>
            <li><strong>Google Fonts</strong> serves the site's typefaces. See the <a href="https://developers.google.com/fonts/faq/privacy">Google Fonts privacy FAQ</a>.</li>
            <li><strong>Google Maps</strong> displays the embedded map in the Contact section of the home page, and Google may set cookies when it loads. See the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.</li>
          </ul>
          <p>Links to other sites, such as LinkedIn and GitHub, are governed by those sites' own privacy policies.</p>

          <h2>How we share information</h2>
          <p>We do not sell or rent personal information, and we do not share it for advertising. We may disclose information if required by law, to protect our rights or the safety of others, or as part of a business transfer such as a merger or acquisition.</p>

          <h2>How long we keep it</h2>
          <p>We keep email correspondence for as long as it is useful for an ongoing or potential working relationship, or as required for legal, tax, and accounting purposes. You can ask us to delete it at any time.</p>

          <h2>Your choices and rights</h2>
          <p>You can ask us what personal information we hold about you, and ask us to correct or delete it, by emailing <a href="mailto:{{ site.data.contact.email }}">{{ site.data.contact.email }}</a>. Depending on where you live, you may have additional rights under local law; we will honor applicable requests. You can also block or delete cookies through your browser settings.</p>

          <h2>Security</h2>
          <p>The site is served only over HTTPS. No method of transmission or storage is completely secure, but we take reasonable steps to protect the information you send us.</p>

          <h2>Children</h2>
          <p>This site is intended for businesses and is not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. When we do, we will revise the effective date at the top of this page.</p>

          <h2>Contact</h2>
          <p>
            {{ site.title }}<br>
            {{ site.data.contact.address_line1 }}, {{ site.data.contact.address_city }}, {{ site.data.contact.address_state }} {{ site.data.contact.address_zip }}<br>
            <a href="mailto:{{ site.data.contact.email }}">{{ site.data.contact.email }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
