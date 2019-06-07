/*jshint latedef:false*/

//=include "../bower_components/jquery/dist/jquery.js"
//=include "../bower_components/flickity/dist/flickity.pkgd.min.js"
//=include "../bower_components/flickity-bg-lazyload/bg-lazyload.js"
//=include "../bower_components/velocity/velocity.min.js"

var Main = (function($) {

  var $document,
      $window,
      $body,
      $siteHeader,
      $siteNav,
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

    // Set screen size vars
    _resize();

    // Transition elements to enable/disable on resize
    transitionElements = [$siteNav];

    // Init functions
    _initSmoothScroll();
    _initActiveToggle();
    _initSiteNav();
    _initFormFunctions();

    // Esc handlers
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {

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
  };

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
    // Insert mobile nav, and apply functionality
    $siteHeader.find('.-inner .-top').append(navToggle);
    var $mobileNavToggle = $siteHeader.find('.nav-toggle');
    $mobileNavToggle.addClass('mobile-nav-toggle').attr('data-active-toggle', '#site-nav');
    $siteNav.find('.nav-utility-container').append(navToggle);
    var $secondaryNavToggle = $siteNav.find('.nav-toggle');
    $secondaryNavToggle.addClass('secondary-nav-toggle').attr('data-active-toggle','#secondary-nav');

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
    $(document).on('click touchend', '.site-nav-main.-active', function(e) {
      if (!$(e.target).parents('ul').length && !$(e.target).parents('.header-search-wrap').length && !$(e.target).is('ul') && !$(e.target).is('.header-search-wrap')) {
        _closeSiteNav();
      }
    });
  }

  function _closeSiteNav() {
    if (!$siteNav.is('.-active')) {
      return;
    }

    $siteNav.removeClass('-active');
    $('.nav-toggle').removeClass('-active');
  }

  function _initFormFunctions() {
    $('form .input-wrap input, form .input-wrap button[type="submit"]').on('focus', function(e) {
      $(this).closest('.input-wrap').addClass('-focus');
    }).on('blur', function(e) {
      $(this).closest('.input-wrap').removeClass('-focus');
    });
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
