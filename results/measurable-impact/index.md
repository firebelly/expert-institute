---
title: Measurable Impact
layout: default
bodyClasses: measurable-impact
---

{% include page-header_angled.html image-url="/dist/images/measurable-impact-banner.jpg" headline="Measurable,<br> Impact" description="Learn how our best-in-class experts have helped attorneys recover billions of dollars for their clients." %}

<div class="section stats-section centered-stat">
    <div class="site-wrapper">
        <h5 class="section-label margin-bottom">How We Measure Up</h5>
        <div class="section-content">
            <div class="stat">
                <h4 class="figure animate-in">$20 Billion</h4>
                <p class="animate-in">recovered value<br> for clients</p>
            </div>
        </div>
    </div>
</div>

<div class="section stats-section centered-stat">
    <div class="site-wrapper">
        <div class="section-content">
            <div class="stat">
                <p class="animate-in">A Total Of</p>
                <h4 class="figure animate-in">60,000+</h4>
                <p class="-small animate-in">Expert Engagements</p>
            </div>
        </div>
    </div>
</div>

<div class="section stats-section padded-bottom-lg">
    <div class="site-wrapper">
        <div class="grid spaced">
            <div class="stat col-md-1-2 col-lg-1-3">
                <h4 class="figure">5K</h4>
                <p>Clients Served</p>
                <div class="stat-icon">
                    <img src="/dist/images/trust-pilot-people.svg" width="173" aria-hidden="true">
                </div>
            </div>
            <div class="stat col-md-1-2 col-lg-1-3">
                <h4 class="figure">3 Million</h4>
                <p>A Global Network of<br> 3,000,000 Experts</p>
            </div>
            <div class="stat col-md-1-2 col-lg-1-3">
                <h4 class="figure">1,000+</h4>
                <p>5 Star Reviews on Trust Pilot</p>
                <div class="stat-icon">
                    <img src="/dist/images/5-stars.svg" width="176" aria-hidden="true">
                </div>
            </div>
        </div>
    </div>
</div>

{% include trust-pilot-section.html %}

<div class="section centered-text-section">
    <div class="site-wrapper">
        <h5 class="section-label margin-bottom">Accolades</h5>
        <div class="section-content">
            <h1 class="section-title animate-in">Expert Institute Awards & Recognition</h1>
            <p class="animate-in">The Expert Institute has consistently been recognized as an exceptional expert witness referral service because of our commitment to providing our clients with a unique, white-glove service powered by technology. In the past several years, The Expert Institute has won the following awards for exceptional service:</p>
        </div>
    </div>
</div>

<div class="section accolades-section padded-bottom-lg">
    <div class="site-wrapper">
        <div class="grid spaced spaced-lg">
            {% for accolade in site.accolades %}
                {% include accolade.html %}
            {% endfor %}
        </div>
    </div>
</div>

<div class="section padded-bottom-lg">
    <div class="site-wrapper">    
        <div class="card-grid">
            <article class="card showcase-card with-image -gold col-md-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <h1 class="card-title">Challenge Studies</h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Access reports on gatekeeping challenges for any expert.</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="/services/challenge-studies" class="button">See the Reports</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/clem-onojeghuo-215220-unsplash.jpg');"></div></div>
                </div>
            </article>
            <article class="card showcase-card with-image -blue-dark col-md-1-2">
                <div class="-inner">
                    <header class="card-header">
                        <h1 class="card-title">Pricing</h1>
                    </header>
                    <div class="card-body">
                        <div class="card-text">
                            <p>Consult your expert on your terms. No hidden fees, no hourly markups.</p>
                        </div>
                    </div>
                    <div class="card-cta">
                        <a href="/process/pricing" class="button -teal">View Our Pricing Model</a>
                    </div>
                    <div class="card-image"><div class="image" style="background-image:url('/dist/images/toa-heftiba-644511-unsplash.jpg');"></div></div>
                </div>
            </article>
        </div>
    </div>
</div>