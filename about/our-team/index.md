---
title: Our Team
layout: default
bodyClasses: our-team
---

<!-- create categories array-->
{% assign teams = "" | split:"|" %}
{% for post in site.team_members %}
    {% for team in post.team %}
        {% assign teams = teams | push: team | uniq %}
    {% endfor %}
{% endfor %}

<div class="page-header centered">
    <div class="site-wrapper">
        <div class="header-text">
            <h3 class="subtitle">{{ page.title }}</h3>
            <h1 class="title">Headline here</h1>
            <p>Our team includes MDs and MBAs, software engineers and graphic designers, as well as dedicated research professionals spanning a wide variety of backgrounds.</p>
        </div>
    </div>
</div>

{% for team in teams %}
<div class="section padded">
    <div class="site-wrapper">
        <h2 id="{{ team | downcase | url_encode }}" class="section-label">{{ team }}</h2>
        <div class="bio-grid">
            {% assign members = site.team_members | sort: 'nameLast' %}
            {% for bio in members %}
                {% if bio.team contains team %}
                    {% include bio.html %}
                {% endif %}
            {% endfor %}
        </div>
    </div>
</div>    
{% endfor %}

{% include page-bottom-showcase.html color="gold" image-path="/dist/images/toa-heftiba-644511-unsplash.jpg" title="Join the Team" description="Looking for career growth at a dynamic company? We’d like to hear from you." page-path="/about/careers" button-text="View Open Positions" %}