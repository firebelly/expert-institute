/*jshint latedef:false*/

//=include "../bower_components/jquery/dist/jquery.js"
//=include "../bower_components/jquery.fitvids/jquery.fitvids.js"
//=include "../bower_components/flickity/dist/flickity.pkgd.min.js"
//=include "../bower_components/flickity-fade/flickity-fade.js"
//=include "../bower_components/flickity-bg-lazyload/bg-lazyload.js"
//=include "../bower_components/velocity/velocity.min.js"
//=include "../bower_components/waypoints/lib/jquery.waypoints.js"
//=include "../bower_components/waypoints/lib/shortcuts/sticky.js"
//=include "../bower_components/waypoints/lib/shortcuts/inview.js"

var Main = (function($) {

  var $document,
      $window,
      $body,
      $siteHeader,
      $siteNav,
      $navSearch,
      closeSubNavBackdrop,
      openNavSearch,
      breakpointIndicatorString,
      breakpoint_xl,
      breakpoint_nav,
      breakpoint_lg,
      breakpoint_md,
      breakpoint_sm,
      breakpoint_xs,
      resizeTimer,
      transitionElements,
      isAnimating = false;

  function _init() {
    // Cache some common DOM queries
    $document = $(document);
    $window = $(window);
    $body = $('body');
    $siteHeader = $('#site-header');
    $siteNav = $('#site-nav');
    $secondaryNav = $('#secondary-nav');
    $navSearch = $('.nav-search');

    // Set screen size vars
    _resize();

    // Fit them vids!
    $('main').fitVids();

    // Transition elements to enable/disable on resize
    transitionElements = [$siteNav, $secondaryNav];

    // Init functions
    _initSmoothScroll();
    _initActiveToggle();
    _initSiteNav();
    _initFormFunctions();
    _initHoverPairs();
    _initFlickityCarousels();
    _initAccordions();
    _initBioFunctions();
    _initStickyElements();
    _initInviewElements();
    _initImageParallax();

    // Esc handlers
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        _closeSiteNav();
      }
    });

  } // end init()

  function _scrollBody(element, offset, duration, delay) {
    var headerOffset = $siteHeader.outerHeight();
    if (typeof offset === "undefined" || offset === null) {
      offset = headerOffset;
    }
    if (typeof duration === "undefined" || duration === null) {
      duration = 300;
    }

    if ($(element).length) {
      isAnimating = true;
      element.velocity("scroll", {
        duration: duration,
        delay: delay,
        offset: -offset,
        complete: function(elements) {
          isAnimating = false;
        }
      }, "easeOutSine");
    }
  }

  function _disableScroll() {
    var st = $(window).scrollTop();
    $body.attr('data-st', st);
    $body.addClass('no-scroll');
    $body.css('top', -st);
  }

  function _enableScroll() {
    $body.removeClass('no-scroll');
    $body.css('top', '');
    $(window).scrollTop($body.attr('data-st'));
    $body.attr('data-st', '');
  }

  function _getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  function _initSmoothScroll() {
    $(document).on('click', '.smooth-scroll', function(e) {
      e.preventDefault();
      _scrollBody($($(this).attr('href')));
    });
  }

  function _initActiveToggle() {
    $(document).on('click', '[data-active-toggle]', function(e) {
      $(this).toggleClass('-active');
      if ($(this).attr('data-active-toggle') !== '') {
        $($(this).attr('data-active-toggle')).toggleClass('-active');
      }
    });
  }

  function _initSiteNav() {
    var navToggle = '<button class="nav-toggle" aria-hidden="true" data-active-toggle="#site-nav"><svg id="icon-hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13.5"><path class="line top left" d="M0 0h12v1.5H0z"/><path class="line top right" d="M12 0h12v1.5H12z"/><path class="line middle" d="M0 6h24v1.5H0z"/><path class="line bottom left" d="M0 12h12v1.5H0z"/><path class="line bottom right" d="M12 12h12v1.5H12z"/></svg></button>';

    // Insert nav toggles for mobile small and large screens
    $siteHeader.find('.-inner .-top').append(navToggle);
    var $mobileNavToggle = $siteHeader.find('.nav-toggle');
    $mobileNavToggle.addClass('mobile-nav-toggle').attr('data-active-toggle', '#site-nav');
    $('.nav-utility-container').append(navToggle);
    var $secondaryNavToggle = $siteNav.find('.nav-toggle');
    $secondaryNavToggle.addClass('secondary-nav-toggle').attr('data-active-toggle','#secondary-nav');
    // Insert svg icon for large-screen offsetpen nav visual
    $('.nav-utility-container').append('<svg class="secondary-nav-indicator icon icon-arrow-down" aria-hidden="true" role="presentation"><use xlink:href="#icon-arrow-down"/></svg>');

    // Sub-nav functionality
    $siteNav.on('click', '.nav-parent-label', function(e) {
      if (!breakpoint_nav) {
        e.preventDefault();
        var $childNav = $(this).next('.nav-sub-level');

        if ($(this).is('.-active')) {
          $childNav.velocity('slideUp', { duration: 250, easing: 'easeOutSine' });
        } else {
          $siteNav.find('.nav-parent-label.-active + .nav-sub-level').velocity('slideUp', { duration: 250, easing: 'easeOutSine' });
          $siteNav.find('.nav-parent-label.-active').not($(this)).removeClass('-active');
          $childNav.velocity('slideDown', { duration: 250, easing: 'easeOutSine' });
        }
      }
    });

    // Adding sub-nav backdrop for large screen
    $siteHeader.append('<div class="sub-nav-backdrop"></div>');

    // Expanding height of sub-nav when hovering on
    // top-level items on large screen
    $('#site-header .top-level').on('mouseenter', function(){
      if ($(this).parents('#secondary-nav').length && !breakpoint_xl) {
        return;
      }
      window.clearTimeout(closeSubNavBackdrop);
      var subNavHeight = $(this).find('.nav-sub-level').outerHeight();
      _expandNavBackdrop(subNavHeight);
    }).on('mouseleave', function() {
      _closeNavBackdrop();
    });

    // Expanding nav search when hovering over search toggle
    $('.search-toggle').on('mouseenter', function(){
      _openNavSearch();
    }).on('mouseleave', function() {
      if (!$('.nav-search').is(':hover')) {
        _closeNavSearch();
      }
    }).on('click', function() {
      $navSearch.find('input').focus();
    });

    $('.nav-search').on('mouseleave', function() {
      if (!$('.search-toggle').is(':hover')) {
        _closeNavSearch();
      }
    });

    // Expanding height of sub-nav when clicking on secondary-nav
    $(document).on('click', '.mobile-nav-toggle, .secondary-nav-toggle, .search-toggle', function() {
      if ($(this).is('.-active')) {
        $body.addClass('nav-open');
      } else {
        $body.removeClass('nav-open');
      }
    });

    // Disable Scroll When Nav is Open
    $(document).on('click', '.nav-toggle', function() {
      if (!breakpoint_nav) {
        if ($(this).is('.-active')) {
          _disableScroll();
        } else {
          _enableScroll();
        }
      }
    });

    // Close when clicking away from nav
    $(document).on('click touchend', 'body.nav-open', function(e) {
      if (breakpoint_nav && !$(e.target).parents('.site-nav').length) {
        _closeSiteNav();
      }
    });
  }

  function _expandNavBackdrop(height) {
    $('.sub-nav-backdrop').css('height', height);
    if ($('#secondary-nav').is('.-active')) {
      $('.secondary-nav-toggle, #secondary-nav').removeClass('-active');
    }
  }

  function _closeNavBackdrop() {
    closeSubNavBackdrop =  window.setTimeout(function() {
      $('.sub-nav-backdrop').css('height', '0');
    }, 150);
  }

  function _closeSiteNav() {
    if (!$body.is('.nav-open')) {
      return;
    }
    $body.removeClass('nav-open');
    $siteNav.removeClass('-active');
    $secondaryNav.removeClass('-active');
    $('.nav-toggle').removeClass('-active');
    $('.secondary-nav-toggle').removeClass('-active');
    _enableScroll();
  }

  function _openNavSearch() {
    $('.search-toggle').addClass('search-active');
    $navSearch.addClass('-active');
    window.clearTimeout(closeSubNavBackdrop);
    var navSearchHeight = $navSearch.outerHeight();
    _expandNavBackdrop(navSearchHeight);
  }

  function _closeNavSearch() {
    $('.search-toggle').removeClass('search-active');
    $navSearch.removeClass('-active');
    _closeNavBackdrop();
  }

  function _initFormFunctions() {
    $('.input-wrap input, .input-wrap textarea,.input-wrap button[type="submit"], .select-wrap select').on('focus', function() {
      $(this).closest('.input-wrap').addClass('-focus');
    }).on('blur', function() {
      $(this).closest('.input-wrap').removeClass('-focus');
      if($(this).val()) {
        $(this).closest('.input-wrap').addClass('-filled');
      } else {
        $(this).closest('.input-wrap').removeClass('-filled');
      }
    });

    // Select functionality
    $('.select-wrap select').on('change', function() {
      $(this).closest('.select-wrap').addClass('-filled');
    });
  }

  function _initHoverPairs() {
    $(document).on('mouseenter', '[data-hover-pair]', function(e) {
      var hoverPair = $(this).attr('data-hover-pair');
      $('[data-hover-pair="'+hoverPair+'"]').addClass('-hover');
    }).on('mouseleave', '[data-hover-pair]', function(e) {
      var hoverPair = $(this).attr('data-hover-pair');
      $('[data-hover-pair="'+hoverPair+'"]').removeClass('-hover');
    });

    // Card-specific hover pairs
    $(document).on('mouseenter', '.card-title a, .card-cta a', function() {
      var $card = $(this).closest('.card');
      $card.find('.card-title a, .card-cta a').addClass('-hover');
    }).on('mouseleave', '.card-title a, .card-cta a', function() {
      var $card = $(this).closest('.card');
      $card.find('.card-title a, .card-cta a').removeClass('-hover');
    });
  }

  function _initFlickityCarousels() {
    // Fade in carousel to hide FOUC
    var $fadeInCarousels = $('.carousel-fadein');
    $fadeInCarousels.each(function() {
      $(this).on('ready.flickity', function() {
        $(this).removeClass('carousel-fadein');
      });
    });

    // General Carousels (testimonials for example)
    $('.carousel').flickity({
      groupCells: true,
      prevNextButtons: false,
      cellAlign: 'center',
      adaptiveHeight: true,
      autoPlay: 4000,
      wrapAround: true
    });

    // Page Header Carousels
    $('.carousel-header .image-carousel').flickity({
      prevNextButtons: false,
      pageDots: false,
      setGallerySize: false,
      asNavFor: '.text-carousel',
      fade: true,
      bgLazyLoad: true
    });
    $('.carousel-header .text-carousel').flickity({
      prevNextButtons: false,
      autoPlay: 4000,
      wrapAround: true
    });

    // Post Carousels
    // trigger layout ready class when lazyloaded images load
    $('.post-carousel').on('lazyLoad.flickity', function() {
      $(this).addClass('layout-ready');
    });
    // Initialize post carousels
    $('.post-carousel').flickity({
      prevNextButtons: false,
      lazyLoad: 2,
      imagesLoaded: true,
      pageDots: false,
      cellAlign: 'left',
      adaptiveHeight: true
    });

    // Logo Carousels
    $('.logo-carousel').flickity({
      prevNextButtons: false,
      imagesLoaded: true,
      groupCells: true,
      contain: true
    });
  }

  function _initAccordions() {
    // Activate/deactive functions
    $('.accordion').each(function() {
      var $accordion = $(this),
          $toggle = $accordion.find('.accordion-toggle'),
          $content = $accordion.find('.accordion-content');

      $toggle.append('<svg class="expand-contract" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.1 7.1"><path d="M14.1 0H12L7.1 4.9 2.1 0H0l7.1 7.1z"/></svg>');

      $toggle.on('click', function(e) {
        if ($accordion.is('.-active')) {
          _collapseAccordion($accordion);
        } else {
          _expandAccordion($accordion);
        }
      });
    });
  }

  function _deactivateAccordion($accordion) {
    $accordion.removeClass('-active');
    $accordion.find('.expand-contract').removeClass('-active');
  }

  function _activateAccordion($accordion) {
    $accordion.addClass('-active');
    $accordion.find('.expand-contract').addClass('-active');
  }

  function _collapseAccordion($accordion) {
    _deactivateAccordion($accordion);
    $accordion.find('.accordion-content').slideUp(250);
  }

  function _expandAccordion($accordion) {
    _activateAccordion($accordion);
    $accordion.find('.accordion-content').slideDown(250);
  }

  function _initBioFunctions() {
    $('.bio a').on('mouseenter', function() {
      var $bio = $(this).closest('.bio');
      if ($bio.find('.bio-contact').length) {
        $bio.find('.bio-contact').velocity('slideDown', { duration: 250, easing: 'easeOutSine' });
      }
    }).on('mouseleave', function() {
      var $bio = $(this).closest('.bio');
      if ($bio.find('.bio-contact').length) {
        $bio.find('.bio-contact').velocity('slideUp', { duration: 250, easing: 'easeOutSine' });
      }
    });
  }

  function _initStickyElements() {
    $('.sticky-form').waypoint(function(direction) {
      $('.sticky-form').toggleClass('stuck-down', direction === 'down');
      $('.sticky-form').removeClass('stuck-up', direction === 'up');
    },{
      offset: function() {
        return $siteHeader.outerHeight() + 60;
      }
    });

    $('#sticky-form-container').waypoint(function(direction) {
      $('.sticky-form').removeClass('stuck-down');
      $('.sticky-form').toggleClass('stuck-up', direction === 'up');
      $('#sticky-form-container, .sticky-form').toggleClass('sticky-surpassed', direction === 'down');
    },{
      offset: 'bottom-in-view'
    });
  }

  function _initInviewElements() {
    $('.animate-in').each(function() {
      var $elem = $(this);
      $elem.waypoint(function(direction){
        $elem.addClass('in-view', direction === 'down');
      },{
        offset: '85%'
      });
    });
    $('.animate-out').each(function(index) {
      var $elem = $(this);
      var inview = new Waypoint.Inview({
        element: $(this)[0],
        exited: function(direction) {
          $(this).addClass('out-of-view');
        }
      });
    });
  }

  function _initImageParallax() {
    $(window).on('scroll', function() {
      var scrollIntervalID = setInterval(parallax, 10);
    });

    function parallax() {
      var $image = $('.parallax-image');

      if (!breakpoint_md) {
        $image.each(function() {
          $(this).css('transform', 'none');
        });
        return;
      }

      $image.each(function() {
        var sT = $(window).scrollTop();
        var imageTop = $(this).offset().top;
        var imageBottom = imageTop + $(this).outerHeight();

        // Wait til image is in view
        if (imageTop > sT + $(window).outerHeight() || imageBottom < sT) {
          return;
        }

        var speed = 0.1;
        var $thisSection = $(this).closest('.parallax-image-container');
        scrollRate = sT - ($thisSection.offset().top);

        $(this).css({
          'transform': 'translateY(' + scrollRate * speed + 'px)'
        });
      });
    }
  }

  // Disabling transitions on certain elements on resize
  function _disableTransitions() {
    $.each(transitionElements, function() {
      $(this).css('transition', 'none');
    });
  }

  function _enableTransitions() {
    $.each(transitionElements, function() {
      $(this).attr('style', '');
    });
  }

  /**
   * Called in quick succession as window is resized
   */
  function _resize() {
    // Check breakpoint indicator in DOM ( :after { content } is controlled by CSS media queries )
    breakpointIndicatorString = window.getComputedStyle(
      document.querySelector('#breakpoint-indicator'), ':after'
    ).getPropertyValue('content')
    .replace(/['"]+/g, '');

    // Determine current breakpoint
    breakpoint_xl = breakpointIndicatorString === 'xl';
    breakpoint_nav = breakpointIndicatorString === 'nav' || breakpoint_xl;
    breakpoint_lg = breakpointIndicatorString === 'lg' || breakpoint_nav;
    breakpoint_md = breakpointIndicatorString === 'md' || breakpoint_lg;
    breakpoint_sm = breakpointIndicatorString === 'sm' || breakpoint_md;
    breakpoint_xs = breakpointIndicatorString === 'xs' || breakpoint_sm;

    // Disable transitions when resizing
    _disableTransitions();

    // Close Nav
    if ($siteNav.is('.-active') && breakpoint_nav) {
      _closeSiteNav();
    }

    // Reset inline styles for navigation for medium breakpoint
    if (breakpoint_nav && $('.site-nav .nav-sub-level')[0].hasAttribute('style')) {
      $('.site-nav .nav-parent-label.-active').removeClass('-active');
      $('.site-nav .nav-sub-level[style]').attr('style', '');
    }

    // Functions to run on resize end
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Re-enable transitions
      _enableTransitions();
    }, 250);
  }

  // Public functions
  return {
    init: _init,
    resize: _resize
  };

})(jQuery);

// Fire up the mothership
jQuery(document).ready(Main.init);

// Zig-zag the mothership
jQuery(window).resize(Main.resize);
