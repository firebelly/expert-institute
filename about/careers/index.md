---
title: Careers
layout: default
bodyClasses: careers
---

<div class="page-header showcase-section parallax-image-container -blue-dark">
    <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-banner.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">
            <div class="section-elbow"><svg class="elbow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 852"><path d="M0 0l190.6 270.5c65.7 93.2 65.7 217.7 0 310.9L0 852"/></svg></div>
            <h3 class="section-label margin-bottom">Careers</h3>
            <h1 class="block-title">Grow with the Expert Institute</h1>
            <p>We're changing the legal industry. And we want you to join us.</p>
            <p class="block-cta"><a href="#open-positions" class="button -teal">View Open Positions</a> <a href="#" class="button -white hollow video-toggle"><svg class="icon icon-play-hollow" aria-hidden="true" role="presentation"><use xlink:href="#icon-play-hollow"/></svg>Watch Video</a></p>
        </div>
    </div>
</div>

<div id="open-positions" class="section block-centered-text">
    <div class="site-wrapper">
        <div class="section-content animate-in">
            <h2 class="block-title align-center">Current Openings</h2>
        </div>
        <div class="section-content animate-in">            
            <form action="#" id="filters" class="filters -outlined grid spaced">
                <div class="filter col-md-1-2">                
                    <div class="select-wrap">
                        <label for="location">Location</label>
                        <select name="location" id="location">
                            <option value="locationOne">Location One</option>
                            <option value="locationTwo">Location Two</option>
                            <option value="locationThree">Location Three</option>
                        </select>
                    </div>
                </div>
                <div class="filter col-md-1-2">                
                    <div class="select-wrap">
                        <label for="team">Team</label>
                        <select name="team" id="team">
                            <option value="teamOne">Team One</option>
                            <option value="teamTwo">Team Two</option>
                            <option value="teamThree">Team Three</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="section padded-bottom-lg">
    <div class="site-wrapper">
        <h3 class="section-label margin-bottom-lg">View Positions</h3>
        <div class="positions">
        {% for position in site.positions %}        
            <article class="position col-md-1-2">
                <div class="-inner">                
                    <h2 class="position-title">{{ position.title }}</h2>
                    <div class="position-meta">
                        <h5 class="team">{{ position.team }}</h5>
                        <h5 class="location">{{ position.location }}</h5>
                    </div>
                    <p class="cta"><a href="{{ position.url }}" class="button">Apply</a></p>
                </div>
            </article>
        {% endfor %}
        </div>
    </div>
</div>

<div class="section block-centered-text">
    <div class="site-wrapper">
        <h3 class="section-label">What We Do</h3>
        <div class="section-content">
            <h4 class="block-title animate-in">Why Work With Us</h4>
            <p class="animate-in">We spend every day making connections between the world’s smartest people, working on creative ways to shape the legal tech industry, and having a lot of fun while we do it.</p>
        </div>
    </div>
</div>

<div class="showcase-section -top section parallax-image-container -gray-light">
    <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-impact.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">        
            <h1 class="block-title animate-in">Impact</h1>
            <p class="animate-in">Work on something that matters. Everyday, we connect the world’s best attorneys with leading thinkers in every field, and have a direct influence on the most important litigation matters in the country.</p>
        </div>
    </div>
</div>

<div class="showcase-section -middle section parallax-image-container -gray-light">
    <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-learning.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">
            <div class="section-elbow"><svg class="elbow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 852"><path d="M0 0l190.6 270.5c65.7 93.2 65.7 217.7 0 310.9L0 852"/></svg></div>
            <h1 class="block-title animate-in">Learning</h1>
            <p class="animate-in">We’re students as well as teachers, empowering the world’s legal professionals with knowledge while constantly learning ourselves. We might not know all the answers, but we know how to find them.</p>
        </div>
    </div>
</div>

<div class="showcase-section with-after-shape -bottom section parallax-image-container -gray-light">
    <div class="overflow-wrap">    
        <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-culture.jpg');"></div>
        <div class="-inner grid">
            <div class="section-content">        
                <h1 class="block-title animate-in">Culture</h1>
                <p class="animate-in">Surround yourself with great people that do great things together. Sports leagues. Happy hours. Volunteer work. Not to mention an intellectual atmosphere that makes every day a new experience.</p>
            </div>
        </div>
    </div>
    <div class="after-shape"></div>
</div>

<div class="section block-centered-text">
    <div class="site-wrapper">
        <div class="section-content">
            <h4 class="block-title animate-in">Benefits</h4>
            <p class="animate-in">Competitive salaries, bonuses, and benefits. Work towards personal advancement by making a major difference for a growing company. Medical and dental insurance, commuter benefits, and 401(k).</p>
        </div>
        <div class="section-content">
            <h4 class="block-title animate-in">The Perks</h4>
            <ul class="two-column animate-in">
                <li>Premium medical dental vision</li>
                <li>Competitive 401K</li>
                <li>Supplemental Life Insurance</li>
                <li>Short Term Disability</li>
                <li>Basic Life AD&D</li>
                <li>Gym Memberships</li>
                <li>Flexible Spending Accounts/Dependent Care</li>
                <li>Meetups and Learning Opportunities</li>
                <li>Offsite Activities and Happy Hours</li>
                <li>Personal Time Off</li>
                <li>Active Office Culture</li>
                <li>Commuter Benefits</li>
                <li>Company Dinners</li>
                <li>Office Dog</li>
                <li>Meals and Snacks</li>
            </ul>
        </div>
    </div>
</div>

{% include testimonials-section.html %}

<section class="section padded-bottom">
    <div class="site-wrapper">
        <h3 class="section-label margin-bottom-lg">Our Offices</h3>
        <div class="section-content">            
            <div class="module-item-showcase animate-in-series">
                <div class="item animation-item col-md-1-3">
                    <div class="item-image">
                        <img src="/dist/images/new-york.png" alt="Our New York Office">
                    </div>
                    <h2 class="item-title">New York</h2>
                    <p class="item-text">Expert Institute<br> 
                        48 Wall Street, 32nd Floor<br>
                        New York, NY 10005<br>
                        (888) 858-9511<br>
                        <a href="mailto:info@expertinstitute.com">info@expertinstitute.com</a>
                    </p>
                </div>
                <div class="item animation-item col-md-1-3">
                    <div class="item-image">
                        <img src="/dist/images/new-york.png" alt="Our Los Angeles Office">
                    </div>
                    <h2 class="item-title">Los Angeles</h2>
                    <p class="item-text">Expert Institute<br> 
                        10250 Constellation Blvd, Suite 100<br>
                        Los Angeles, CA 90067<br>
                        (888) 858-9511<br>
                        <a href="mailto:info@expertinstitute.com">info@expertinstitute.com</a>
                    </p>
                </div>
                <div class="item animation-item col-md-1-3">
                    <div class="item-image">
                        <img src="/dist/images/new-york.png" alt="Our Dallas Office">
                    </div>
                    <h2 class="item-title">Dallas</h2>
                    <p class="item-text">Expert Institute<br> 
                        1601 Elm St, Floor 33<br>
                        Dallas, TX 75201<br>
                        (888) 858-9511<br>
                        <a href="mailto:info@expertinstitute.com">info@expertinstitute.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>