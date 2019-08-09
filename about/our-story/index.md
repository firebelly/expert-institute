---
title: Our Story
layout: default
bodyClasses: our-story
---

{% include page-header_angled.html image-url="/dist/images/our-story-banner.jpg" subtitle="About Us" headline="Our Story" description="The Expert Institute partners with AmLaw 100 leaders, boutique firms, and solo practitioners to deliver expert witness solutions across every area of practice." %}

<div class="section centered-text-section">
    <div class="site-wrapper">
        <h5 class="section-label">The Expert Edge</h5>
        <div class="section-content">
            <h3 class="section-title animate-in">The Legal Industry<br> Has Changed</h3>
            <p class="animate-in">The legal industry has changed- technology has provided the catalyst for this evolution.  Lawyers are adopting new ways of thinking and redefining the most fundamental aspects of how they practice law. The Expert Institute was founded in recognition of this paradigm shift, with the objective of developing a smarter way for attorneys to identify, verify, and retain the best expert witnesses.</p>
            <p class="animate-in">Every litigator - from AmLaw 100 partners to solo practitioners - relied on outdated and inconsistent methods for finding expert witnesses. We were determined to disrupt this unreliable methodology.</p>
        </div>
        <div class="section-content">
            <h3 class="section-title animate-in">We Deconstructed The Process of Finding Experts</h3>
            <p class="animate-in">We deconstructed the process of finding experts,  built a data driven platform that could adapt to the demands of any case.  We combined that technology with a team of skilled legal researchers and developed a system that delivers a perfect match, every time. Having partnered with over 4,000 firms, both globally and in all 50 states, we’ve gained unparalleled insights across all aspects of expert witness recruiting.</p>
            <p class="animate-in">Our mission is simple - to help our clients be better advocates by providing them with access to the best expertise.</p>
        </div>
    </div>
</div>

<div class="section padded-bottom-lg">
    <div class="site-wrapper">
        <h5 class="section-label margin-bottom-lg">Our Company</h5>
        <div class="section-content">
            <div class="module-item-showcase">
                <div class="item col-md-1-3">
                    <h2 class="item-title">Tech</h2>
                    <p class="item-text">Let our research team perform a custom search for the ideal expert witness. Connect with professionals who fit your specifications for location, experience, education and more.</p>
                </div>
                <div class="item col-md-1-3">
                    <h2 class="item-title">Research</h2>
                    <p class="item-text">Working with the world’s foremost experts demands the best recruiting and research talent. We’ve cultivated smart, talented researchers by nurturing a culture of discovery, encouraging questions that get the right answers, and demanding results.</p>
                </div>
                <div class="item col-md-1-3">
                    <h2 class="item-title">Client Support</h2>
                    <p class="item-text">Our client support team provides comprehensive support on every engagement. They are active participants in every stage of the process, coordinating the efforts of multiple teams to make a perfect connection every time.</p>
                </div>
            </div>
        </div>
        <div class="section-video">
            <h5 class="video-label">Expert Explanation</h5>
            <div class="video-still">
                <button class="watch-video"><svg class="icon icon-play-hollow" aria-hidden="true" role="presentation"><use xlink:href="#icon-play-hollow"/></svg> Watch Video</button>
                <img src="/dist/images/our-story-video-still.jpg" alt="Still from video">
            </div>
        </div>
    </div>
</div>

<div class="section padded">
    <div class="site-wrapper">
        <h3 class="section-label">Leadership</h3>
        <div class="bio-grid">
            {% assign members = site.team_members | where: "team", "Leadership" %}
            {% for bio in members %}
                {% include bio.html %}
            {% endfor %}
        </div>
    </div>
</div>

{% include our-offices-section.html %}

{% include page-bottom-showcase.html color="gold" image-path="/dist/images/toa-heftiba-644511-unsplash.jpg" title="Join the Team" description="Looking for career growth at a dynamic company? We’d like to hear from you." page-path="/about/careers" button-text="View Open Positions" %}