---
title: Paid Search
layout: paid-search
bodyClasses: paid-search header-dark
---

<div class="page-header angled parallax-image-container -blue-dark">
  <div class="overflow-wrap">
    <div class="header-background parallax-image" style="background-image:url('/dist/images/paid-search-banner.jpg');"></div>
    <div class="site-wrapper grid">
      <div class="header-text">
        <div class="-inner">
          <h1 class="title">Connect with expert witnesses in New York</h1>
          <div class="trust-pilot-module">
              <img src="/dist/images/trustpilot-paid-search-screenshot.jpg" alt="Trust Pilot Screenshot">
          </div>
          <form action="#" id="expert-connect-form" class="multi-step">
            <div class="form-step">
              <div class="input-wrap select-wrap">
                <label for="caseType">Case Type:</label>
                <select name="caseType" id="caseType">
                  <option value="null">Case Type:</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </div>
              <div class="input-wrap">
                <label for="lawFirm">Law Firm</label>
                <input id="lawFirm" name="lawFirm" type="text">
              </div>
              <div class="input-wrap">
                <label for="message">Tell Us About Your Case</label>
                <textarea id="message" rows="1"></textarea>
              </div>
              <p class="form-para">Give us a call (888) 858-9511</p>
              <div class="form-cta">
                <button class="form-next button -teal">Next <svg class="button-icon -right icon-arrow-right" aria-hidden="true" role="presentation"><use xlink:href="#icon-arrow-right"/></svg></button>
              </div>
            </div>
            <div class="form-step">
              <div class="input-wrap">
                <label for="name-first">First Name*</label>
                <input id="name-first" type="text" required>
              </div>
              <div class="input-wrap">
                <label for="name-last">Last Name*</label>
                <input id="name-last" type="text" required>
              </div>
              <div class="input-wrap">
                <label for="number">Phone Number</label>
                <input id="number" type="tel">
              </div>
              <div class="input-wrap">
                <label for="email">Email</label>
                <input id="email" type="email">
              </div>
              <p class="form-para">Give us a call (888) 858-9511</p>
              <div class="form-cta">
                <button class="submit button -teal" type="submit">Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section witnesses-section padded-bottom">
  <div class="site-wrapper">
    <div class="section-content">    
        <h2 class="section-title">Indudsty leading expertise</h2>
        <p>Explore a sample of our expert network.</p>
    </div>
    <div class="card-grid">
      {% for expert in site.experts limit:3 %}
        {% include expert-card.html no-cta="true" %}
      {% endfor %}
    </div>
    <p class="section-cta">
        <a href="#" class="button">Connect with an Expert Witness</a>  
    </p>
  </div>
</div>

<div class="section">
    <div class="site-wrapper">
        <div class="section-content">
            <div class="module-item-showcase">
                <div class="item col-md-1-2 col-lg-1-3">
                    <div class="-inner">                    
                        <div class="item-image">
                            <img src="/dist/images/experienced-research-team.svg" alt="Experienced Research Team">
                        </div>
                        <h2 class="item-title">Experienced<br> Research Team</h2>
                        <p class="item-text">Lorem ipsum dolor sit amet, consetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
                <div class="item col-md-1-2 col-lg-1-3">
                    <div class="-inner">                    
                        <div class="item-image">
                            <img src="/dist/images/quickly-connect-directly.svg" alt="Quickly Connect Directly">
                        </div>
                        <h2 class="item-title">Quickly Connect<br> Directly</h2>
                        <p class="item-text">Lorem ipsum dolor sit amet, consetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
                <div class="item col-md-1-2 col-lg-1-3">
                    <div class="-inner">                    
                        <div class="item-image">
                            <img src="/dist/images/fine-tuned-expert-search.svg" alt="Fine Tuned Expert Search">
                        </div>
                        <h2 class="item-title">Fine Tuned<br> Expert Search</h2>
                        <p class="item-text">Lorem ipsum dolor sit amet, consetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{% include journal-logos-section.html %}