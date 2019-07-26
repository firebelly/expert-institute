---
title: Request an Expert
layout: default
bodyClasses: request-an-expert
---

<div id="sticky-form-container">

    <div class="page-header section colored-swoop -gray-light">
        <div class="-inner site-wrapper grid">
            <h2 class="sub-title">{{ page.title }}</h2>
            <div class="text -left">
                <h1 class="title">Request an Expert Witness for Your Case</h1>
                <p>We've worked on more than 30,000 cases and have helped over 4,000 law firms connect with the world's most distinguished experts.</p>
            </div>
            <div class="text -right">
                <div class="sticky-form">            
                    <form action="">
                        <div class="input-wrap error">
                            <label for="name-first">First Name*</label>
                            <input id="name-first" type="text" required>
                            <p class="error-message">Error message</p>
                        </div>
                        <div class="input-wrap">
                            <label for="name-last">Last Name*</label>
                            <input id="name-last" type="text" required>
                        </div>
                        <div class="input-wrap">
                            <label for="number">Phone Number</label>
                            <input id="number" type="tel">
                        </div>
                        <div class="input-wrap select-wrap">
                            <label for="caseType">Case Type</label>
                            <select name="caseType" id="caseType">
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                        </div>
                        <div class="input-wrap">
                            <label for="law-firm">Law Firm</label>
                            <input id="law-firm" type="text">
                        </div>
                        <div class="input-wrap">
                            <label for="expert-specialty">Desired Expert Specialty</label>
                            <input id="expert-specialty" type="text">
                        </div>
                        <div class="input-wrap">
                            <label for="message">Tell Us About Your Case</label>
                            <textarea id="message" rows="5"></textarea>
                        </div>
                        <button class="submit button" type="submit">Submit Request</button>
                    </form>
                </div>
            </div>
            <div class="swoop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 673.8 756"><path d="M673.8 756H0c87.7 0 169.9-42.6 220.5-114.2L673.8 0v756z"/></svg>
            </div>
        </div>
    </div>

    <div class="form-text section padded background-gray-light">
        <div class="site-wrapper">
            <div class="section-content">
                <p class="h1">A Custom Search Every Time</p>
                <p>Find the ideal expert witness by specialty, litigation experience, fee range, certifications, and more. The search isn’t over until you are satisfied.</p>
            </div>
            <div class="section-content">
                <p class="h1">Rigorous, Personalized Vetting</p>
                <p>Discuss your case with qualified experts via complimentary conference calls, and receive multiple perspectives before finalizing your decision to retain.</p>
            </div>
            <div class="section-content">
                <p class="h1">Transparent Pricing</p>
                <p>Unlike traditional referral services, we never mark up our experts’ fees. Once you decide to retain an expert through us, you’re free to work with them directly.</p>
            </div>
        </div>
    </div>

</div>

{% include journal-logos-section.html %}

{% include page-bottom-showcase.html color="teal" image-path="/dist/images/clem-onojeghuo-215220-unsplash.jpg" title="Measurable<br> Impact" description="Learn how our best-in-class experts have helped attorneys recover billions of dollars for their clients." page-path="/results//measurable-impact" button-text="Explore the Outcomes" %}