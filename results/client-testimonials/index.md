---
title: Testimonials
layout: default
bodyClasses: testimonials
---

<div class="page-header carousel-header -right">
    <div class="header-background image-carousel carousel-fadein">
        {% for testimonial in site.testimonials %}
            {% if testimonial.featured == true %}
                <div class="image" style="background-image:url('{{ testimonial.bannerImage }}');"></div>
            {% endif %}
        {% endfor %}
    </div>
    <div class="site-wrapper grid">
        <div class="header-swoop">
            <svg class="swoop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 673.8 756"><path d="M673.8 756H0c87.7 0 169.9-42.6 220.5-114.2L673.8 0v756z"/></svg>
        </div>
        <div class="header-text">
            <div class="text-carousel carousel-fadein">                
                {% for testimonial in site.testimonials %}
                    {% if testimonial.featured == true %}
                        <article class="header-article">
                            <div class="-inner">                            
                                <div class="header-meta">
                                    <h5>Testimonials</h5>
                                </div>
                                <blockquote>            
                                    <p>{{ testimonial.quote }}</p>
                                    <footer class="testimonial-meta">
                                        <cite>                            
                                            <h5 class="testimonial-author">{{ testimonial.author }}</h5>
                                            <h5 class="testimonial-organization">{{ testimonial.organization }}</h5>
                                        </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </article>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>

<div class="section padded-lg">
    <div class="site-wrapper">
        <div class="card-grid">
            {% for testimonial in site.testimonials %}
                {% include testimonial-card.html style=testimonial.style %}
            {% endfor %}
        </div>
        {% include post-navigation.html total="4" %}
    </div>
</div>