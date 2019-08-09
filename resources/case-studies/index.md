---
title: Case Studies
layout: default
bodyClasses: case-studies
---

<div class="page-header swooped -right">
  <div class="header-background" style="background-image:url('/dist/images/case-studies-banner.jpg');"></div>
  <div class="site-wrapper grid">
    <div class="header-swoop">
      <svg class="swoop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 673.8 756"><path d="M673.8 756H0c87.7 0 169.9-42.6 220.5-114.2L673.8 0v756z"/></svg>
    </div>
    <div class="header-text">
      <div class="-inner">
        <header>
          <div class="header-meta">
            <h5>Case Studies</h5>
          </div>
          <h1 class="title">Case<br> Studies</h1>
          <p>Our case study archive is the largest of it’s kind, containing insights from the world’s leading experts.</p>
        </header>
      </div>
    </div>
  </div>
</div>

<div class="section padded-top-lg">
  <div class="site-wrapper">
    <div class="filters">
      <form action="#" id="filters" class="insights-filters -outlined grid col-md-2-3">
        <div class="col-md-1-2">                
          <div class="select-wrap">
            <label for="expertSpecialty">Expert Specialty</label>
            <select name="expertSpecialty" id="expertSpecialty">
              <option value="expertSpecialty">Expert Specialty One</option>
              <option value="expertSpecialty">Expert Specialty Two</option>
              <option value="expertSpecialty">Expert Specialty Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-1-2">                
          <div class="select-wrap">
            <label for="practiceArea">Practice Area</label>
            <select name="practiceArea" id="practiceArea">
              <option value="practiceAreaOne">Practice Area One</option>
              <option value="practiceAreaTwo">Practice Area Two</option>
              <option value="practiceAreaThree">Practice Area Three</option>
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

<div class="section padded-top-lg">
  <div class="site-wrapper">
    <div class="card-grid alternating-cards">
      {% for case_study in site.case_studies %}
      {% include case_study-card.html %}
      {% endfor %}
    </div>
    {% include post-navigation.html total=5 %}
  </div>
</div>

<div class="section padded-bottom-lg">
  <div class="site-wrapper">    
    <div class="card-grid">
      <article class="card showcase-card with-image -teal col-md-1-2">
        <div class="-inner">
          <header class="card-header">
            <h1 class="card-title">Request An Expert</h1>
          </header>
          <div class="card-body">
            <div class="card-text">
              <p>Connect with the expert witness you need to win your case.</p>
            </div>
          </div>
          <div class="card-cta">
            <a href="/services/challenge-studies" class="button">Request Now</a>
          </div>
          <div class="card-image"><div class="image" style="background-image:url('/dist/images/request-an-expert-showcase-card.jpg');"></div></div>
        </div>
      </article>
      <article class="card showcase-card with-image -gold col-md-1-2">
        <div class="-inner">
          <header class="card-header">
            <h1 class="card-title">Expert Witness Directory</h1>
          </header>
          <div class="card-body">
            <div class="card-text">
              <p>Find highly credentialed expert witnesses across all disciplines, industries, and locations.</p>
            </div>
          </div>
          <div class="card-cta">
            <a href="/resources/expert-witness-directory" class="button">Search</a>
          </div>
          <div class="card-image"><div class="image" style="background-image:url('/dist/images/expert-witness-directory-showcase-card-image.jpg');"></div></div>
        </div>
      </article>
    </div>
  </div>
</div>