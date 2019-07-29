---
title: Expert Witness Directory
layout: default
bodyClasses: expert-witness-directory
---

<div class="page-header centered">
    <div class="site-wrapper">
        <div class="header-text">
            <h3 class="subtitle">Directory</h3>
            <h1 class="title">Expert Witness Directory</h1>
            {% include searchform.html label="Search our expert witness directory" %}
            <p>to find highly credentialed expert witnesses across all disciplines, industries, and locations.</p>
        </div>
    </div>
</div>

<div class="section">
    <div class="site-wrapper">
        <form action="#" id="filters" class="filters -outlined grid spaced">
            <div class="filter col-md-1-2 col-lg-1-3">                
                <div class="select-wrap">
                    <label for="specialty">Specialty</label>
                    <select name="specialty" id="specialty">
                        <option value="specialtyOne">Specialty One</option>
                        <option value="specialtyTwo">Specialty Two</option>
                        <option value="specialtyThree">Specialty Three</option>
                    </select>
                </div>
            </div>
            <div class="filter col-md-1-2 col-lg-1-3">                
                <div class="select-wrap">
                    <label for="region">Region</label>
                    <select name="region" id="region">
                        <option value="regionOne">Region One</option>
                        <option value="regionTwo">Region Two</option>
                        <option value="regionThree">Region Three</option>
                    </select>
                </div>
            </div>
            <div class="filter col-md-1-2 col-lg-1-3">                
                <div class="select-wrap">
                    <label for="state">State</label>
                    <select name="state" id="state">
                        <option value="stateOne">State One</option>
                        <option value="stateTwo">State Two</option>
                        <option value="stateThree">State Three</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>

<div class="section padded-lg">
    <div class="site-wrapper">
        <div class="card-grid">
            {% for expert in site.experts %}
                {% include expert-card.html %}
            {% endfor %}
        </div>
    </div>
</div>