---
title: Careers
layout: default
bodyClasses: careers
---

<div class="page-header showcase-section parallax-image-container -blue-dark">
    <div class="section-background background-video">
        <video autoplay loop muted>
            <source src="/dist/videos/careers-background-video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="-inner grid">
        <div class="section-content">
            <div class="section-elbow"><svg class="elbow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 852"><path d="M0 0l190.6 270.5c65.7 93.2 65.7 217.7 0 310.9L0 852"/></svg></div>
            <h3 class="section-label margin-bottom">Careers</h3>
            <h1 class="section-title">Grow with the Expert Institute</h1>
            <p>We're changing the legal industry. And we want you to join us.</p>
            <p class="section-cta"><a href="#open-positions" class="button -teal smooth-scroll">View Open Positions</a> <a href="#" class="button -white hollow video-toggle"><svg class="icon icon-play-hollow" aria-hidden="true" role="presentation"><use xlink:href="#icon-play-hollow"/></svg>Watch Video</a></p>
        </div>
    </div>
</div>

<div id="open-positions" class="section centered-text-section">
    <div class="site-wrapper">
        <div class="section-content animate-in">
            <h2 class="section-title align-center">Current Openings</h2>
        </div>
        <div class="filters-section section-content animate-in">            
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
            {% include position.html %}
        {% endfor %}
        </div>
    </div>
</div>

<div class="section centered-text-section">
    <div class="site-wrapper">
        <h3 class="section-label">What We Do</h3>
        <div class="section-content">
            <h4 class="section-title animate-in">Why Work With Us</h4>
            <p class="animate-in">We spend every day making connections between the world’s smartest people, working on creative ways to shape the legal tech industry, and having a lot of fun while we do it.</p>
        </div>
    </div>
</div>

<div class="showcase-section -top section parallax-image-container -gray-light">
    <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-learning.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">        
            <h1 class="section-title animate-in">Learning</h1>
            <p class="animate-in">We’re students as well as teachers, empowering the world’s legal professionals with knowledge while constantly learning ourselves. We might not know all the answers, but we know how to find them.</p>
        </div>
    </div>
</div>

<div class="showcase-section -middle section parallax-image-container -gray-light">
    <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-impact.jpg');"></div>
    <div class="-inner grid">
        <div class="section-content">
            <div class="section-elbow"><svg class="elbow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 852"><path d="M0 0l190.6 270.5c65.7 93.2 65.7 217.7 0 310.9L0 852"/></svg></div>
            <h1 class="section-title animate-in">Impact</h1>
            <p class="animate-in">Work on something that matters. Everyday, we connect the world’s best attorneys with leading thinkers in every field, and have a direct influence on the most important litigation matters in the country.</p>
        </div>
    </div>
</div>

<div class="showcase-section with-after-shape -bottom section parallax-image-container -gray-light">
    <div class="overflow-wrap">    
        <div class="section-background parallax-image" style="background-image:url('/dist/images/careers-culture.jpg');"></div>
        <div class="-inner grid">
            <div class="section-content">        
                <h1 class="section-title animate-in">Culture</h1>
                <p class="animate-in">Surround yourself with great people that do great things together. Sports leagues. Happy hours. Volunteer work. Not to mention an intellectual atmosphere that makes every day a new experience.</p>
            </div>
        </div>
    </div>
    <div class="after-shape"></div>
</div>

<div class="section centered-text-section">
    <div class="site-wrapper">
        <div class="section-content">
            <h4 class="section-title animate-in">Benefits</h4>
            <p class="animate-in">Competitive salaries, bonuses, and benefits. Work towards personal advancement by making a major difference for a growing company. Medical and dental insurance, commuter benefits, and 401(k).</p>
        </div>
        <div class="section-content">
            <h4 class="section-title animate-in">The Perks</h4>
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

<div class="section padded site-wrapper">
    <div class="post-carousel carousel-fadein">
        <figure class="landscape">
            <div class="image">
                <img data-flickity-lazyload="/dist/images/careers-carousel_01.jpg" alt="Fusce dapibus, tellus ac cursus commodo">
            </div>
            <figcaption>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Cras justo odio.</figcaption>
        </figure>
        <figure class="landscape">
            <div class="image">
                <img data-flickity-lazyload="/dist/images/careers-carousel_02.jpg" alt="Fusce dapibus, tellus ac cursus commodo">
            </div>
            <figcaption>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus.</figcaption>
        </figure>
        <figure class="portrait">
            <div class="image">
                <img data-flickity-lazyload="/dist/images/careers-carousel_03.jpg" alt="Fusce dapibus, tellus ac cursus commodo">
            </div>
            <figcaption>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus.</figcaption>
        </figure>
        <figure class="landscape">
            <div class="image">
                <img data-flickity-lazyload="/dist/images/careers-carousel_04.jpg" alt="Fusce dapibus, tellus ac cursus commodo">
            </div>
            <figcaption>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.</figcaption>
        </figure>
        <figure class="square">
            <div class="image">
                <img data-flickity-lazyload="/dist/images/careers-carousel_05.jpg" alt="Fusce dapibus, tellus ac cursus commodo">
            </div>
            <figcaption>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus.</figcaption>
        </figure>
    </div>
</div>

{% include meet-tei-section.html %}

{% include our-offices-section.html %}