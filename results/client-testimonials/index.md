---
title: Testimonials
layout: default
bodyClasses: testimonials
---

<div class="page-header carousel-header -right">
    <div class="header-background image-carousel carousel-fadein">
        {% for testimonial in site.testimonials %}
            <div class="image" style="background-image:url('{{ testimonial.bannerImage }}');"></div>
        {% endfor %}
    </div>
    <div class="site-wrapper grid">
        <div class="header-swoop">
            <svg class="swoop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 673.8 756"><path d="M673.8 756H0c87.7 0 169.9-42.6 220.5-114.2L673.8 0v756z"/></svg>
        </div>
        <div class="header-text text-carousel carousel-fadein">
            {% for testimonial in site.testimonials %}
                <article class="header-article">
                    <div class="-inner">            
                        <p>{{ testimonial.quote }}</p>
                        <div class="testimonial-meta">
                            <h5 class="testimonial-author">{{ testimonial.name }}</h5>
                            <h5 class="testimonial-organization">{{ testimonial.organization }}</h5>
                        </div>
                    </div>
                </article>
              {% endfor %}
        </div>
    </div>
</div>

<div class="section">
    <div class="site-wrapper">
        <h1>Testing</h1>
    </div>
</div>