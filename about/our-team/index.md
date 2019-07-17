---
title: Our Team
layout: default
bodyClasses: our-team template-a
---

<!-- create categories array-->
{% assign teams = "" | split:"|" %}
{% for post in site.team_members %}
    {% for category in post.categories %}
        {% assign teams = teams | push: category | uniq %}
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
        <h2 class="section-label">{{ team }}</h2>
        <div class="bio-grid">
            {% assign members = site.team_members | sort: 'nameLast' %}
            {% for bio in members %}
                {% if bio.categories contains team %}
                    <div class="bio col-sm-1-2 col-xl-1-3">                    
                        <a href="{{ bio.url }}">
                            <div class="bio-image">
                                <img src="{{ bio.imageUrl }}" alt="Portrait of {{ bio.nameFirst }} {{ bio.nameLast }}">
                            </div>
                            <div class="bio-text">
                                <h3 class="bio-name">{{ bio.nameFirst }} {{ bio.nameLast }}</h3>
                                <h4 class="bio-title">{{ bio.title }}</h4>
                                <h5 class="bio-department">{{ team }}</h5>
                                <p class="bio-excerpt">{{ bio.bioExcerpt }}</p>
                            </div>
                        </a>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</div>    
{% endfor %}

<div class="section showcase-section -gold">
    <div class="section-background" style="background-image:url('/dist/images/toa-heftiba-644511-unsplash.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">        
            <h1 class="block-title">Join the Team</h1>
            <p>Looking for career growth at a dynamic company? We’d like to hear from you.</p>
            <p class="block-cta"><a href="/about/careers" class="button">View Open Positions</a></p>
        </div>
    </div>
</div>