---
title: Insights
layout: default
---

<div class="page-header carousel-header">
    <div class="header-background image-carousel carousel-fadein">
        {% for post in site.posts %}
            <div class="image" style="background-image:url('{{ post.imageUrl }}');"></div>
        {% endfor %}
    </div>
    <div class="site-wrapper grid">
        <div class="header-text text-carousel carousel-fadein">
            <div class="header-swoop">
                <svg class="swoop" viewBox="0 0 673.8 756" preserveAspectRatio="xMaxYMax meet"><path d="M673.8 756H0c87.7 0 169.9-42.6 220.5-114.2L673.8 0v756z"/></svg>
            </div>
            {% for post in site.posts %}
                <article class="header-article">
                    <div class="-inner">            
                        <header>
                            <div class="header-meta">
                                <h5 class="date">{{ post.date | date: "%B %d, %Y" }}</h5>
                                <h5 class="tag"><a href="#">{{ post.categories[0] }}</a></h5>
                            </div>
                            <h1 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h1>
                        </header>
                        <div class="header-article-body">
                            <p>{{ post.postExcerpt | truncate: 160 }}</p>
                        </div>
                        <div class="cta">
                            <a href="{{ post.url }}" class="button hollow -gray-mid">Read More</a>
                        </div>
                    </div>
                </article>
              {% endfor %}
        </div>
    </div>
</div>

<div class="section">
    <div class="site-wrapper">
        <div class="filters">
            <form action="#" id="filters" class="insights-filters -outlined grid col-md-2-3">
                <div class="col-md-1-2">                
                    <div class="select-wrap">
                        <label for="postType">Post Type</label>
                        <select name="postType" id="postType">
                            <option value="postTypeOne">Post Type One</option>
                            <option value="postTypeTwo">Post Type Two</option>
                            <option value="postTypeThree">Post Type Three</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-1-2">                
                    <div class="select-wrap">
                        <label for="specialty">Specialty</label>
                        <select name="specialty" id="specialty">
                            <option value="specialtyOne">Specialty One</option>
                            <option value="specialtyTwo">Specialty Two</option>
                            <option value="specialtyThree">Specialty Three</option>
                        </select>
                    </div>
                </div>
            </form>
            <div class="filter-search col-md-1-3">
                {% include searchform.html %}
            </div>
        </div>
    </div>
</div>

<div class="section padded">
    <div class="site-wrapper">
        <div class="card-grid">
            <article class="card with-image col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 30, 2019</h5>
                            <h5 class="tag"><a href="#">News</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">An Attorney’s Guide To Finding, Retaining & Consulting Neurosurgery Expert Witnesses</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Neurosurgeons, who specialize in the surgical treatment of diseases and injuries affecting the nervous system, are frequently called... </p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/4.18.19-blog-neurosurgeons-800x400.jpg');"></div></div>
                </div>
            </article>
            <article class="card col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 11, 2019</h5>
                            <h5 class="tag"><a href="#">Litigation Monitor</a>, <a href="#">Another Tag</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Litigation to Watch: Boeing 737 Max Jet Lawsuits</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>When Lion Air’s Boeing 737 Max 8 airplane crashed minutes after taking off in Indonesia, killing all 189…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                </div>
            </article>
            <article class="card col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 30, 2019</h5>
                            <h5 class="tag"><a href="#">News</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Objections to Expert Testimony: What You Need to Know</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Expert testimony is of increasing importance in litigation and can make or break a case. However, if…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                </div>
            </article>
            <article class="card with-image col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 11, 2019</h5>
                            <h5 class="tag"><a href="#">Litigation Monitor</a>, <a href="#">Another Tag</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Engineering Expert Witnesses: A Litigation Guide</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>When it comes to expert witnesses, engineers are an often-invoked name during the course of litigation. But merely…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/2.7.19-blog-engineering-litigation-guide-800x400.jpg');"></div></div>
                </div>
            </article>
            <article class="card col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 30, 2019</h5>
                            <h5 class="tag"><a href="#">News</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">An Attorney’s Guide To Finding, Retaining & Consulting Neurosurgery Expert Witnesses</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Neurosurgeons, who specialize in the surgical treatment of diseases and injuries affecting the nervous system, are frequently called... </p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                </div>
            </article>
            <article class="card with-image col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 11, 2019</h5>
                            <h5 class="tag"><a href="#">Litigation Monitor</a>, <a href="#">Another Tag</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Litigation to Watch: Boeing 737 Max Jet Lawsuits</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>When Lion Air’s Boeing 737 Max 8 airplane crashed minutes after taking off in Indonesia, killing all 189…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/4.11.19-blog-737-crashes-800x400.jpg');"></div></div>
                </div>
            </article>
            <article class="card with-image col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 30, 2019</h5>
                            <h5 class="tag"><a href="#">News</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Objections to Expert Testimony: What You Need to Know</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Expert testimony is of increasing importance in litigation and can make or break a case. However, if…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/3.21.19-blog-objections-800x400.jpg');"></div></div>
                </div>
            </article>
            <article class="card col-lg-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <div class="header-meta">
                            <h5 class="date">April 11, 2019</h5>
                            <h5 class="tag"><a href="#">Litigation Monitor</a>, <a href="#">Another Tag</a></h5>
                        </div>
                        <h1 class="card-title"><a href="#">Engineering Expert Witnesses: A Litigation Guide</a></h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>When it comes to expert witnesses, engineers are an often-invoked name during the course of litigation. But merely…</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="#" class="button hollow">Read More</a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="section padded-bottom">
    <div class="site-wrapper">
        <p class="align-center"><button class="load-more button hollow">Load More</button></p>
    </div>
</div>