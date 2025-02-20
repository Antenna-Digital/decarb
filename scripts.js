$(document).ready(function () {
  console.log("ready!");

  const swiperElement = document.querySelector(".myswiper");

  if (swiperElement) {
    // Add CSS transition to the wrapper
    const swiperWrapper = swiperElement.querySelector(".swiper-wrapper");
    swiperWrapper.style.transition = "all 0.3s ease";

    const swiper = new Swiper(".myswiper", {
      slidesPerView: 1,
      spaceBetween: 80,
      centeredSlides: true,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      swiper.autoplay.stop();

      // Add smooth transition during resize
      swiperWrapper.style.transition = "all 0.3s ease";

      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        swiper.update();
        swiper.autoplay.start();

        // Optional: remove transition after resize is complete
        // setTimeout(() => {
        //   swiperWrapper.style.transition = '';
        // }, 300);
      }, 100);
    });
  }

  const swiperSplitPanelElement = document.querySelector(".mysplitpanelswiper");
  if (swiperSplitPanelElement) {
    // Add CSS transition to the wrapper
    const swiperSplitPanelWrapper =
      swiperSplitPanelElement.querySelector(".swiper-wrapper");
    swiperSplitPanelWrapper.style.transition = "all 0.3s ease";

    const swiperSP = new Swiper(".mysplitpanelswiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: false,
      speed: 800,
      cssMode: true,
      loop: false,
      /* autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }, */
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      //swiperSP.autoplay.stop();

      // Add smooth transition during resize
      swiperSplitPanelWrapper.style.transition = "all 0.3s ease";

      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        //swiperSP.update();
        //swiperSP.autoplay.start();

        // Optional: remove transition after resize is complete
        // setTimeout(() => {
        //   swiperWrapper.style.transition = '';
        // }, 300);
      }, 100);
    });
  }

  const swiperTestimonialElement = document.querySelector(
    ".testimonial-swiper"
  );

  if (swiperTestimonialElement) {
    // Add CSS transition to the wrapper
    const swiperTestimonialWrapper = swiperTestimonialElement.querySelector(
      ".testimonial-swiper-wrapper"
    );
    swiperTestimonialWrapper.style.transition = "all 0.3s ease";

    const swiperTestimonial = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: ".btn-slider-next",
        prevEl: ".btn-slider-prev",
      },
    });
  }

  const swiperTeamElement = document.querySelector(".team-swiper");
  if (swiperTeamElement) {
    // Add CSS transition to the wrapper
    const swiperTeamWrapper = swiperTeamElement.querySelector(
      ".team-swiper-wrapper.swiper-wrapper"
    );
    swiperTeamWrapper.style.transition = "all 1.1s ease";

    const swiperTeam = new Swiper(".team-swiper", {
      slidesPerView: "auto",
      spaceBetween: 15,
      direction: "vertical",
      centeredSlides: false,
      speed: 1500,
      //cssMode: true,
      //loop: true,
      breakpoints: {
        767: {
          spaceBetween: 30,
        },
      },
      autoplay: {
        delay: 2600,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      swiperTeam.autoplay.stop();

      // Add smooth transition during resize
      swiperTeamWrapper.style.transition = "all 0.3s ease";

      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        swiperTeam.update();
        swiperTeam.autoplay.start();

        // Optional: remove transition after resize is complete
        // setTimeout(() => {
        //   swiperWrapper.style.transition = '';
        // }, 300);
      }, 100);
    });
  }

  const swiperTeamElementReversed = document.querySelector(
    ".team-swiper-reversed"
  );
  if (swiperTeamElementReversed) {
    // Add CSS transition to the wrapper
    const swiperTeamWrapperReversed = swiperTeamElementReversed.querySelector(
      ".team-swiper-wrapper.swiper-wrapper"
    );
    swiperTeamWrapperReversed.style.transition = "all 1.3s ease";

    const swiperTeamReversed = new Swiper(".team-swiper-reversed", {
      slidesPerView: "auto",
      spaceBetween: 15,
      direction: "vertical",
      reverseDirection: true,
      centeredSlides: false,
      speed: 1800,
      //cssMode: true,
      //loop: true,
      breakpoints: {
        767: {
          spaceBetween: 30,
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      swiperTeamReversed.autoplay.stop();

      // Add smooth transition during resize
      swiperTeamWrapperReversed.style.transition = "all 0.3s ease";

      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        swiperTeamReversed.update();
        swiperTeamReversed.autoplay.start();

        // Optional: remove transition after resize is complete
        // setTimeout(() => {
        //   swiperWrapper.style.transition = '';
        // }, 300);
      }, 100);
    });
  }

  $(function () {
    var links = $(".tabs-menu a.tab-link");
    var randomNum = Math.floor(Math.random() * links.length);
    //var randomNum = 5;
    // links.get(randomNum).click();
  });

  var tabs = $(".tabs-menu .tab-link");
  var currentIndex = 0;
  var interval = 3000; // time in milliseconds

  var tabCycle;

  function clickNextTab() {
    tabs.eq(currentIndex).trigger("click");
    currentIndex = (currentIndex + 1) % tabs.length;
  }

  $(".tabs-menu").on("mouseover touchstart", function () {
    console.log("got here");
    clearInterval(tabCycle);
  });

  function startTabCycle() {
    if (window.matchMedia("(min-width: 991px)").matches) {
      tabCycle = setInterval(clickNextTab, interval);
    }
  }

  function stopTabCycle() {
    if (tabCycle) {
      clearInterval(tabCycle);
    }
  }

  // Start the cycle when the page loads
  startTabCycle();

  // Listen for window resize to start/stop the cycle based on screen size
  window.addEventListener("resize", () => {
    stopTabCycle();
    startTabCycle();
  });

  // Start

  // Function to remove all classes from the specified elements
  function removeAllClasses() {
    const elementIds = [
      "fans-billboard-green",
      "recycle",
      "recycle-leafs",
      "green-leaf",
      "green-data",
      "solar-panels",
      "car",
      "car-green",
      "plane",
      "solar",
      "truck",
      "truck-box",
      "truck-2",
      "building",
      "boxes",
      "bottom-truck",
      "c02",
      "co2-green",
      "h2",
      "h2-can",
      "ship",
      "laptop",
      "cloud",
      "crane",
      "fans-billboard",
      "fan",
      "fresh-air",
      "wifi-building",
      "wifi",
      "wind-turbines",
      "green-tank",
      "black-fill-2",
      "green-grass",
      "roads",
      "road-lines",
    ];

    // Iterate over element IDs and remove all classes from each element
    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        // Remove all classes from the element
        while (element.classList.length > 0) {
          element.classList.remove(element.classList.item(0));
        }
      }
    });
  }

  // Define setTan function outside of event listener to ensure it's accessible
  function setTan(excludeList) {
    const elementIds = [
      "fans-billboard-green",
      "recycle",
      "recycle-leafs",
      "green-leaf",
      "green-data",
      "solar-panels",
      "car",
      "car-green",
      "plane",
      "solar",
      "truck",
      "truck-box",
      "truck-2",
      "building",
      "boxes",
      "bottom-truck",
      "c02",
      "co2-green",
      "h2",
      "h2-can",
      "ship",
      "laptop",
      "cloud",
      "crane",
      "fans-billboard",
      "fan",
      "fresh-air",
      "wifi-building",
      "wifi",
      "wind-turbines",
      "green-tank",
      "black-fill-2",
      "green-grass",
      "roads",
      "road-lines",
    ];

    // Iterate over element IDs and add class "tan-fill", excluding those in excludeList
    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && !excludeList.includes(id)) {
        element.classList.add("tan-fill");
      }
    });
  }

  // Select all elements with class "sectors_sector"
  const sectors = document.querySelectorAll(".sectors_sector");

  // Select all elements with class "sectors_sector_content"
  const sectorContents = document.querySelectorAll(".sectors_sector_content");

  // Track if this is the first click
  let isFirstClick = true;

  // Function to hide all sector contents with fade-out effect
  function hideAllContents(callback) {
    let completed = 0;
    sectorContents.forEach((content) => {
      if (content.classList.contains("visible")) {
        content.classList.remove("visible");
        content.addEventListener("transitionend", function handler() {
          content.style.display = "none";
          content.removeEventListener("transitionend", handler);
          completed++;
          if (
            completed === sectorContents.length &&
            typeof callback === "function"
          ) {
            callback();
          }
        });
      } else {
        completed++;
      }
    });

    if (completed === sectorContents.length && typeof callback === "function") {
      callback();
    }
  }

  // Function to show the matching sector content with fade-in effect
  function showContent(sectorData) {
    const matchingContent = document.querySelector(
      `.sectors_sector_content[data-sector='${sectorData}']`
    );
    if (matchingContent) {
      matchingContent.style.display = "block";
      setTimeout(() => {
        console.log(`Showing content for ${sectorData}`);
        matchingContent.classList.add("visible");
      }, 10); // Slight delay to trigger the transition
    }
  }

  // Iterate over each sector element
  sectors.forEach((sector) => {
    const infographic = document.querySelector(".inforgraphic_container");

    window.addEventListener("resize", function () {
      infographic.scrollLeft = infographic.scrollWidth * 0;
    });

    // Add click event listener to each sector element
    sector.addEventListener("click", function () {
      if (window.innerWidth < 991) {
        const adjustValue = sector.getAttribute("data-mobile-adjust");
        infographic.scrollLeft = infographic.scrollWidth * adjustValue;
      }

      removeAllClasses();

      // Remove the class "active" from all sectors
      sectors.forEach((s) => s.classList.remove("active"));
      // Add the class "active" to the clicked sector element
      this.classList.add("active");

      // Get the data-sector attribute from the clicked element
      const sectorData = this.getAttribute("data-sector");

      // Hide all sector contents and show the new content after hiding
      if (isFirstClick) {
        // On first click, just remove the visible class without transition
        const initiallyVisible = document.querySelector(
          ".sectors_sector_content.visible"
        );
        if (initiallyVisible) {
          initiallyVisible.classList.remove("visible");
          initiallyVisible.style.display = "none";
        }
        isFirstClick = false;
        showContent(sectorData);
      } else {
        hideAllContents(() => {
          console.log(`Hiding all contents for ${sectorData}`);
          showContent(sectorData);
        });
      }

      // Use switch statement to handle different sectorData values
      switch (sectorData) {
        case "focus":
          break;

        case "mobility":
          var excludeList = ["car", "car-green", "plane", "truck-2", "ship"];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        case "carbon-products":
          var excludeList = ["truck", "truck-box", "boxes", "building"];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        case "carbon-capture":
          // Define excludeList for "mobility" sector
          var excludeList = [
            "c02",
            "co2-green",
            "fresh-air",
            "fan",
            "fans-billboard-green",
            "fans-billboard",
            "building",
          ];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        case "carbon-management":
          var excludeList = ["c02", "co2-green", "recycle", "green-leaf"];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        case "digital":
          var excludeList = ["wifi", "laptop", "cloud", "green-data"];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        case "next-gen":
          // Define excludeList for "mobility" sector
          var excludeList = [
            "solar",
            "wind-turbines",
            "green-grass",
            "h2",
            "h2-can",
          ];
          // Call setTan function with excludeList
          setTan(excludeList);
          break;

        default:
          // Default behavior if no match
          console.log("Unknown sectorData:", sectorData);
          break;
      }
    });
  });

  // End

  //if (jQuery(window).width() > 768) {
  // add the news_flex-item-featured class to the first item in that section
  $(".expander-flex.expander-first-list .expander-item:first-of-type").addClass(
    "expander-item-featured"
  );

  $(".expander-item").on("mouseenter", function (event) {
    event.preventDefault();
    // remove the news_flex-item-featured class from all validItems
    $(".expander-item").removeClass("expander-item-featured");
    // add the news_flex-item-featured class to this item
    $(this).addClass("expander-item-featured");
  });
  //}
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".js-road");
  let currentIndex = 0;
  const completedSections = new Set();

  // Function to animate the dashes
  function animateDash(section, callback) {
    const svgElement = section.querySelector("svg");
    let dashes = svgElement.querySelectorAll("path");
    dashes = Array.from(dashes).reverse(); // Reverse the order of the dashes
    let index = 0;

    function animate() {
      if (index < dashes.length) {
        dashes[index].classList.add("path--animated");
        index++;
        setTimeout(animate, 50); // Adjust the interval as needed
      } else if (callback) {
        completedSections.add(section); // Mark this section as completed
        callback();
      }
    }

    // animate();
  }

  // Function to check if the previous section is completed
  function isPreviousSectionCompleted(index) {
    if (index === 0) return true; // No previous section for the first section
    return completedSections.has(sections[index - 1]);
  }

  // Intersection Observer setup
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionIndex = Array.from(sections).indexOf(entry.target);
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.2 &&
          isPreviousSectionCompleted(sectionIndex)
        ) {
          observer.unobserve(entry.target); // Stop observing the current section
          animateDash(entry.target, () => {
            currentIndex++;
            if (sections[currentIndex]) {
              observer.observe(sections[currentIndex]); // Start observing the next section
            }
          });
        }
      });
    },
    { threshold: [0.2] }
  );

  // Start observing the first section
  if (sections[currentIndex]) {
    observer.observe(sections[currentIndex]);
  }
});

$(document).ready(function () {
  let currentUrl = "";

  function showPopup() {
    $("#external-link-popup").show();
    $("body").addClass("popup-active");
  }

  function hidePopup() {
    $("#external-link-popup").hide();
    $("body").removeClass("popup-active");
  }

  $('a[target="_blank"]').click(function (e) {
    e.preventDefault();
    currentUrl = $(this).attr("href");
    showPopup();
  });

  $("#continue-button").click(function () {
    hidePopup();
    window.open(currentUrl, "_blank");
  });

  $("#cancel-button").click(function () {
    hidePopup();
  });
});

$(document).ready(function () {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function showPopup() {
    $("#investor-popup").show();
    $("body").addClass("popup-active");
  }

  function hidePopup() {
    $("#investor-popup").hide();
    $("body").removeClass("popup-active");
  }

  if (!getCookie("investor_agreed")) {
    showPopup();
  }

  $("#agree-button").click(function () {
    setCookie("investor_agreed", "true", 30);
    hidePopup();
  });

  $("#disagree-button").click(function () {
    window.location.href = "https://www.blackrock.com/us/individual"; // Replace with your redirect URL
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Core elements
  const slideoutButton = document.querySelector(".slideout_button");
  const menu = document.querySelector(".slideout_menu");
  const menuLinks = menu.querySelectorAll(
    ".slideout_menu_link, .button_primary"
  );
  const body = document.body;
  let lastFocusedElement;

  // Add ARIA attributes and role to slideout button
  slideoutButton.setAttribute("aria-expanded", "false");
  slideoutButton.setAttribute("aria-controls", "slideout-content");
  slideoutButton.setAttribute("role", "button");
  slideoutButton.setAttribute("aria-label", "Toggle slideout menu");

  // Initialize accessibility
  function initAccessibility() {
    // Make menu items untabbable initially
    updateTabIndexes(false);

    // Setup menu event listeners
    slideoutButton.addEventListener("click", toggleMenu);
    slideoutButton.addEventListener("keydown", handleMenuKeypress);
  }

  // Function to handle menu button keypress
  function handleMenuKeypress(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu(event);
    }
  }

  // Update tab indexes for menu items
  function updateTabIndexes(isOpen) {
    menuLinks.forEach((link) => {
      link.setAttribute("tabindex", isOpen ? "0" : "-1");
    });
  }

  // Handle keyboard navigation within menu
  function handleKeyDown(e) {
    if (!body.classList.contains("slideout_open")) return;

    const currentIndex = Array.from(menuLinks).indexOf(document.activeElement);

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeMenu();
        break;

      case "ArrowDown":
      case "Tab":
        if (!e.shiftKey) {
          e.preventDefault();
          const nextIndex =
            currentIndex < menuLinks.length - 1 ? currentIndex + 1 : 0;
          menuLinks[nextIndex].focus();
        }
        break;

      case "ArrowUp":
        if (e.shiftKey) {
          e.preventDefault();
          const prevIndex =
            currentIndex > 0 ? currentIndex - 1 : menuLinks.length - 1;
          menuLinks[prevIndex].focus();
        }
        break;

      case "Home":
        e.preventDefault();
        menuLinks[0].focus();
        break;

      case "End":
        e.preventDefault();
        menuLinks[menuLinks.length - 1].focus();
        break;
    }
  }

  // Open menu
  function openMenu() {
    body.classList.add("slideout_open");
    slideoutButton.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    lastFocusedElement = document.activeElement;
    updateTabIndexes(true);

    // Focus first menu item
    setTimeout(() => {
      menuLinks[0].focus();
    }, 100);

    // Add keyboard event listener
    document.addEventListener("keydown", handleKeyDown);
  }

  // Close menu
  function closeMenu() {
    console.log("closeMenu function called");
    body.classList.remove("slideout_open");
    slideoutButton.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    updateTabIndexes(false);

    // Remove keyboard event listener
    document.removeEventListener("keydown", handleKeyDown);

    // Return focus to button
    slideoutButton.focus();
    console.log("Menu closed, classes:", body.classList.toString());
  }

  // Toggle menu
  function toggleMenu(event) {
    if (event.type === "click" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      if (body.classList.contains("slideout_open")) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  }

  // Reset accessibility after consent
  function resetAccessibilityAfterConsent() {
    // Reset tab indexes for menu items
    updateTabIndexes(false);

    // Focus the menu button
    slideoutButton.focus();
  }

  // Add reset to both consent buttons
  $("#agree-button, #disagree-button").click(function () {
    resetAccessibilityAfterConsent();
  });

  // Initialize menu links
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("=== Link Click Debug ===");
      console.log("Link clicked:", link);

      const href = link.getAttribute("href");
      const currentPath = window.location.pathname;

      const isHomePageHashLink =
        currentPath === "/" && href.includes("decarbpartners.com/#");

      if (
        isHomePageHashLink ||
        (href && href.includes("#") && currentPath === href.split("#")[0])
      ) {
        console.log("Handling as hash navigation");
        e.preventDefault();

        closeMenu();

        setTimeout(() => {
          const targetId = href.split("#")[1];
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.href = href;
          }
        }, 300);
      } else {
        closeMenu();
      }
    });
  });

  // Initialize accessibility features
  initAccessibility();
});

// Helper function to announce changes to screen readers
function announceToScreenReader(message) {
  const announcer = document.getElementById("sr-announcer");

  if (!announcer) {
    const div = document.createElement("div");
    div.id = "sr-announcer";
    div.className = "sr-only";
    div.setAttribute("aria-live", "polite");
    document.body.appendChild(div);
  }

  document.getElementById("sr-announcer").textContent = message;
}

gsap.registerPlugin(ScrollTrigger);

function fadeUpOnScroll() {
  document.querySelectorAll("[data-g-fade-up]").forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 100, // Initial position: 100px down
        opacity: 0, // Initial opacity: 0 (invisible)
      },
      {
        y: 0, // Final position: 0px (default position)
        opacity: 1, // Final opacity: 1 (fully visible)
        delay: element.dataset.gDelay ? parseFloat(element.dataset.gDelay) : 0,
        duration: .75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function fadeSideOnScroll() {
  document.querySelectorAll("[data-g-fade-side]").forEach((element) => {
    // Determine direction from data attribute: "left" or "right"
    const direction = element.dataset.gFadeSide || "left";

    // Set initial X position based on direction
    const startX = direction === "right" ? 100 : -100;

    gsap.fromTo(
      element,
      {
        x: startX, // Initial position: +/- 100px from side
        opacity: 0, // Initial opacity: 0 (invisible)
      },
      {
        x: 0, // Final position: 0px (default position)
        opacity: 1, // Final opacity: 1 (fully visible)
        delay: element.dataset.gDelay ? parseFloat(element.dataset.gDelay) : 0,
        duration: .75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function growSideOnScroll() {
  document.querySelectorAll("[data-g-grow-side]").forEach((element) => {
    // Determine direction from data attribute: "left" or "right"
    const direction = element.dataset.gFadeSide || "left";

    // Set initial X position based on direction
    const startX = direction === "right" ? 100 : -100;

    gsap.fromTo(
      element,
      {
        x: startX, // Initial position: +/- 100px from side
        scaleX: 0, // Initial opacity: 0 (invisible)
      },
      {
        x: 0, // Final position: 0px (default position)
        scaleX: 1, // Final width: 1 (fully visible)
        delay: element.dataset.gDelay ? parseFloat(element.dataset.gDelay) : 0,
        duration: 1.0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

/* Updated JavaScript using fromTo */
function staggerAnimateOnScroll() {
  document.querySelectorAll("[data-g-stagger]").forEach((parent) => {
    const children = parent.children;
    const delay = parent.dataset.gDelay ? parseFloat(parent.dataset.gDelay) : 0;
    const staggerTime = parent.dataset.gStaggerTime
      ? parseFloat(parent.dataset.gStaggerTime)
      : 0.2;
    const direction = parent.dataset.gDirection || "up";

    // Define from and to states
    let fromState = { opacity: 0 };
    let toState = {
      opacity: 1,
      duration: .75,
      ease: "power2.out",
    };

    // Add transform based on direction
    switch (direction) {
      case "up":
        fromState.y = 100;
        toState.y = 0;
        break;
      case "down":
        fromState.y = -100;
        toState.y = 0;
        break;
      case "left":
        fromState.x = -100;
        toState.x = 0;
        break;
      case "right":
        fromState.x = 100;
        toState.x = 0;
        break;
    }

    gsap.fromTo(children, fromState, {
      ...toState,
      stagger: staggerTime,
      delay: delay,
      scrollTrigger: {
        trigger: parent,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}


/* Specific to the What we look for section, not really re-usable */
function staggerStrategyGridOnScroll() {
  const strategygrid = document.querySelector('.strategy-grid');
  if (!strategygrid) return;

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".strategy-grid",
      start: "top 80%",
    },
  });

  let cardDuration = "-=.1";
  let iconDurationIn = "+=.1";

  // Define from and to states

  let fromState = { opacity: 0, y: 100 };
  let toState = {
    opacity: 1,
    y: 0,
    duration: .1,
    ease: "power2.out",
  };

  // Define from and to states
  let fromIconState = {opacity: 0};
  let toIconState = {opacity: 1, duration: .25,};

  tl2
    .fromTo("#strategy-card-01", fromState, toState, 1)
    .fromTo("#strategy-card-01 .icon_card_icon",fromIconState,toIconState,iconDurationIn)
    .fromTo("#strategy-card-02", fromState, toState, cardDuration)
    .fromTo("#strategy-card-02 .icon_card_icon",fromIconState,toIconState,iconDurationIn)
    .fromTo("#strategy-card-03", fromState, toState, cardDuration)
    .fromTo("#strategy-card-03 .icon_card_icon",fromIconState,toIconState,iconDurationIn)
    .fromTo("#strategy-card-04", fromState, toState, cardDuration)
    .fromTo("#strategy-card-04 .icon_card_icon",fromIconState,toIconState,iconDurationIn)
    .fromTo("#strategy-card-05", fromState, toState, cardDuration)
    .fromTo("#strategy-card-05 .icon_card_icon",fromIconState,toIconState,iconDurationIn)
    .fromTo("#strategy-card-06", fromState, toState, cardDuration)
    .fromTo("#strategy-card-06 .icon_card_icon",fromIconState,toIconState,iconDurationIn);

} 

/* Specific to the Statistic Card section, not really re-usable */

function staggerStatGridOnScroll() {

  const statgrid = document.querySelector('.stat-grid');
  if (!statgrid) return;

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".stat-grid",
      start: "top 80%",
    },
  });

  let cardDuration = "-=.5";
  let dividerDuration = "+=.1";

  // Define from and to states

  let fromState = { opacity: 0, y: 100 };
  let toState = {
    opacity: 1,
    y: 0,
    duration: .25,
    ease: "power2.out",
  };

  // Define from and to states
  let fromDividerState = {scaleX: 0, transformOrigin:'left center'};
  let toDividerState = {scaleX: 1, duration: .5,};

  tl2
    .fromTo("#stat-card-01", fromState, toState, 0)
    .fromTo("#stat-card-01 .stat-card_divider",fromDividerState,toDividerState,dividerDuration)
    .fromTo("#stat-card-02", fromState, toState, cardDuration)
    .fromTo("#stat-card-02 .stat-card_divider",fromDividerState,toDividerState,dividerDuration)
    .fromTo("#stat-card-03", fromState, toState, cardDuration)
    .fromTo("#stat-card-03 .stat-card_divider",fromDividerState,toDividerState,dividerDuration)

} 


/* JavaScript Animation */
function fadeInOnScroll() {
  document.querySelectorAll("[data-g-fade-in]").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: element.dataset.gDelay ? parseFloat(element.dataset.gDelay) : 0,
        duration: .75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function countUpOnScroll() {
  document.querySelectorAll("[data-g-tick-up]").forEach((element) => {
    const targetNumber = parseFloat(element.dataset.gTickUp);
    const randomDuration = Math.random() * (3 - 1) + 1;

    // Determine decimal places from the target number
    const decimalPlaces = (targetNumber.toString().split(".")[1] || "").length;

    // Store the initial number for reference
    element.innerText = targetNumber;

    gsap.fromTo(
      element,
      {
        innerText: 0,
      },
      {
        innerText: targetNumber,
        duration: randomDuration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          const value = this.targets()[0].innerText;
          // Format with the same number of decimal places as the target
          element.innerText = parseFloat(value).toFixed(decimalPlaces);
        },
      }
    );
  });
}

function imageSrcSetFix() {
  // Handle improperly loaded srcset size for responsive images
  var images = document.getElementsByTagName("img");

  function updateImageSizes() {
    for (var i = 0; i < images.length; i++) {
      var image = images[i];

      // Check if the image has already been sized
      if (!image.dataset.sized) {
        if (image.complete) {
          setImageSizes(image);
        } else {
          // Add a one-time load event listener
          image.addEventListener(
            "load",
            function () {
              setImageSizes(this);
            },
            { once: true }
          );
        }
      }
    }
  }

  function setImageSizes(image) {
    var imageRect = image.getBoundingClientRect();
    var imageWidth = imageRect.width;
    var imageHeight = imageRect.height;
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Calculate width percentage
    var widthPercentage = (imageWidth / viewportWidth) * 100;

    // Calculate height percentage
    var heightPercentage = (imageHeight / viewportHeight) * 100;

    // Combine width and height considerations
    var combinedSizeValue =
      Math.round(widthPercentage * 0.7 + heightPercentage * 0.3) + "vw";

    // Optional: Add a minimum and maximum size constraint
    var minSize = 10; // Minimum 10vw
    var maxSize = 90; // Maximum 90vw
    var finalSizeValue =
      Math.min(Math.max(parseFloat(combinedSizeValue), minSize), maxSize) +
      "vw";

    // Set sizes attribute
    image.setAttribute("sizes", finalSizeValue);

    // Mark as sized to avoid redundant processing
    image.dataset.sized = "true";

    // Optional: Log for debugging
    // console.log(`Image size set to: ${finalSizeValue}`);
  }

  // Debounce function to limit function calls during resize
  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }

  // Update image sizes on initial load
  updateImageSizes();

  // Update image sizes on window resize with debounce
  window.addEventListener("resize", debounce(updateImageSizes, 200));
}

// Marquee Stuff
function initializeMarquee() {
  const marquee = document.querySelector('[wb-data="marquee"]');
  if (!marquee) return;

  const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
  const marqueeContent = marquee.firstChild;
  if (!marqueeContent) return;

  //const marqueeContentClone = marqueeContent.cloneNode(true);
  //marquee.append(marqueeContentClone); 

  const marqueeContentClone1 = marqueeContent.cloneNode(true);

  marquee.append(marqueeContentClone1); // Ensure cloned content is appended correctly

  let tween;

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();

    const height = parseInt( getComputedStyle(marquee).getPropertyValue("height"), 10 );
    const distanceToTranslate = -1 * height;
    console.log ("Height Marquee: " + height);

    tween = gsap.fromTo(
      marquee.children,
      { yPercent: 0 },
      {
        yPercent: -100,
        duration,
        ease: "none",
        repeat: -1,
      }
    );
    tween.progress(progress);
  };
  playMarquee();
} // end marquee stuff

// Logo Marquee Stuff
function initializeMarqueeReverse() {
  const marqueeReversed = document.querySelector('[wb-data="marquee-reversed"]');
  if (!marqueeReversed) return;

  const duration = parseInt(marqueeReversed.getAttribute("duration"), 10) || 5;
  //const duration = 30;

  const marqueeReversedContent = marqueeReversed.firstChild;
  if (!marqueeReversedContent) return;

  //const marqueeReversedContentClone = marqueeReversedContent.cloneNode(true);
  //marqueeReversed.prepend(marqueeReversedContentClone); // Ensure cloned content is appended correctly

  const marqueeContentClone1 = marqueeReversedContent.cloneNode(true);

  marqueeReversed.prepend(marqueeContentClone1); // Ensure cloned content is appended correctly

  let tween;

  const playReverseMarquee = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();

    const height = parseInt( getComputedStyle(marqueeReversed).getPropertyValue("height"), 10 );
    const distanceToTranslate = 1 * height;
    console.log ("Height Marquee Reversed: " + height);

    tween = gsap.fromTo(
      marqueeReversed.children,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration,
        ease: "none",
        repeat: -1,
      }
    );
    tween.progress(progress);
  };
  playReverseMarquee();
} // end marquee stuff

window.addEventListener("DOMContentLoaded", () => {
  fadeUpOnScroll();
  fadeSideOnScroll();
  growSideOnScroll();
  staggerAnimateOnScroll();
  //staggerFocusSectorsOnScroll();
  //staggerFocusSectorsOnScrollAlternate();
  staggerStrategyGridOnScroll();
  staggerStatGridOnScroll();
  fadeInOnScroll();
  countUpOnScroll();
  imageSrcSetFix();
  initializeMarquee();
  initializeMarqueeReverse();
});

// Reinitialize on Finsweet CMS events
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  "cmsfilter",
  (filterInstances) => {
    // Check if filterInstances exists and has items
    if (filterInstances && filterInstances.length > 0) {
      // Get the filter instance
      const [filterInstance] = filterInstances;

      // Check if listInstance exists before using it
      if (filterInstance.listInstance) {
        filterInstance.listInstance.on("renderitems", () => {
          fadeInOnScroll();
        });
      }
    }
  },
]);

// limit the number of items in a combined CMS list to 3
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  "cmscombine",
  (listInstances) => {
    //console.log("cmscombine Successfully loaded! " + listInstances.length);

    for (let i = 1; i < listInstances.length; i++) {
      const listInstance = listInstances[i];
      const items = listInstance.items;

      items.forEach((item) => {
        item.element.style.display = "none"; // hide all items initially
      });
    }
  },
]);

// Wait for Finsweet CMS to load
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  "cmsfilter",
  (filterInstances) => {
    //console.log("cmsfilter Successfully loaded! " + filterInstances.length);

    if (filterInstances.length == 0) {
      return;
    }

    // Get the first filter instance
    const [filterInstance] = filterInstances;

    // Listen to the render:finish event
    filterInstance.listInstance.on("renderitems", (renderedItems) => {
      updateFilterStatus(filterInstance, renderedItems);
    });

    function updateFilterStatus(filterInstance, renderedItems) {
      // Get all filter elements
      const filterButtons = document.querySelectorAll(
        '[fs-cmsfilter-element="filter"]'
      );
      let currentCategory = "All"; // Default value

      // Find the active filter
      filterButtons.forEach((button) => {
        if (button.classList.contains("is-active")) {
          currentCategory = button.textContent.trim();
        }
      });

      const cmsFilterElement = document.querySelector(
        ".select-trigger .selected-value"
      );
      currentCategory = cmsFilterElement.textContent.trim();

      // Get the total filtered items (not just currently rendered)
      const totalFilteredItems = filterInstance.listInstance.validItems.length;

      //const totalFilteredItems = filterInstance.filtersData.element.resultsCount;
      // Debug the filterInstance object

      //console.log("Filter Instance:", filterInstance);
      //console.log("List Instance:", filterInstance.listInstance);

      // Update display with both count and category
      const statusDisplay = document.querySelector(".results-count");
      if (statusDisplay) {
        if (statusDisplay && currentCategory != "Filter by") {
          //const numberOfFilteredItems = ${totalFilteredItems};
          if(totalFilteredItems == 1){
            statusDisplay.textContent = `${totalFilteredItems}  ${currentCategory} team member`;
          } else {
            statusDisplay.textContent = `${totalFilteredItems}  ${currentCategory} team members`;
          }
          statusDisplay.style.display = "block";
        } else {
          statusDisplay.style.display = "none";
        }
      }

      // Log for debugging (optional)
      // console.log( `Showing ${renderedItems.length} items in ${currentCategory}`);
    }
  },
]);

function createCustomSelect() {
  const originalSelects = document.querySelectorAll(
    ".decarb-select:not(.initialized)"
  );

  originalSelects.forEach((select) => {
    select.classList.add("initialized");

    if (select.parentElement?.classList.contains("decarb-select-wrapper")) {
      return;
    }

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "decarb-select-wrapper";
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);
    select.classList.add("original-select");

    // Create trigger button with proper ARIA attributes
    const trigger = document.createElement("button");
    trigger.className = "select-trigger";
    trigger.setAttribute("type", "button");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("role", "combobox");
    wrapper.appendChild(trigger);

    // Create options container with proper ARIA attributes
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";
    optionsContainer.setAttribute("role", "listbox");
    optionsContainer.setAttribute("tabindex", "-1");
    wrapper.appendChild(optionsContainer);

    function getDisplayText(selectedOption) {
      if (!selectedOption || selectedOption.text === "Select All...") {
        return "Filter by";
      }
      return selectedOption.text;
    }

    let focusedOptionIndex = -1;

    function focusOption(index) {
      requestAnimationFrame(() => {
        const options = optionsContainer.querySelectorAll(".option");
        const lastIndex = options.length - 1;

        if (index < 0) index = lastIndex;
        if (index > lastIndex) index = 0;

        options.forEach((opt) => opt.classList.remove("focused"));
        const option = options[index];
        if (option) {
          option.classList.add("focused");
          if (wrapper.classList.contains("keyboard-nav")) {
            option.focus();
          }
          focusedOptionIndex = index;
        }
      });
    }

    function handleKeyboard(e) {
      const isOpen = wrapper.classList.contains("open");
      wrapper.classList.add("keyboard-nav");

      switch (e.key) {
        case "Enter":
        case " ":
          if (!isOpen) {
            openDropdown();
          } else {
            const focusedOption =
              optionsContainer.querySelector(".option.focused");
            if (focusedOption) {
              focusedOption.click();
            }
          }
          e.preventDefault();
          break;

        case "Escape":
          if (isOpen) {
            closeDropdown();
            trigger.focus();
          }
          break;

        case "ArrowDown":
          if (!isOpen) {
            openDropdown();
          }
          focusOption(focusedOptionIndex + 1);
          e.preventDefault();
          break;

        case "ArrowUp":
          if (!isOpen) {
            openDropdown();
          }
          focusOption(focusedOptionIndex - 1);
          e.preventDefault();
          break;

        case "Tab":
          if (isOpen) {
            closeDropdown();
          }
          wrapper.classList.remove("keyboard-nav");
          break;
      }
    }

    function openDropdown() {
      wrapper.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      if (wrapper.classList.contains("keyboard-nav")) {
        focusOption(0);
      }
    }

    function closeDropdown() {
      wrapper.classList.remove("open");
      wrapper.classList.remove("keyboard-nav");
      trigger.setAttribute("aria-expanded", "false");
      focusedOptionIndex = -1;
    }

    function updateOptions() {
      const selectedOption = select.options[select.selectedIndex];
      const displayText = getDisplayText(selectedOption);

      trigger.innerHTML = `
          <span class="selected-value">${displayText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
              <path d="M1.453 1L9.953 8.76042L18.453 1" stroke="currentColor" stroke-width="1.99554" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      `;

      trigger.setAttribute(
        "aria-label",
        `Select option. Current selection: ${displayText}`
      );

      optionsContainer.innerHTML = "";

      Array.from(select.options).forEach((option, optIndex) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.setAttribute("role", "option");
        optionElement.setAttribute("tabindex", "-1");
        optionElement.setAttribute(
          "aria-selected",
          option.selected ? "true" : "false"
        );
        if (option.selected) optionElement.classList.add("selected");
        optionElement.textContent = option.text;
        optionElement.dataset.value = option.value;

        optionElement.addEventListener("click", () => {
          select.value = option.value;

          const changeEvent = new Event("change", { bubbles: true });
          select.dispatchEvent(changeEvent);

          const inputEvent = new Event("input", { bubbles: true });
          select.dispatchEvent(inputEvent);

          updateOptions();
          closeDropdown();
          trigger.focus();
        });

        optionsContainer.appendChild(optionElement);
      });
    }

    // Event Listeners
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      wrapper.classList.remove("keyboard-nav");
      if (wrapper.classList.contains("open")) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    trigger.addEventListener("mousedown", () => {
      wrapper.classList.remove("keyboard-nav");
    });

    optionsContainer.addEventListener("mousedown", () => {
      wrapper.classList.remove("keyboard-nav");
    });

    wrapper.addEventListener("keydown", handleKeyboard);

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        closeDropdown();
      }
    });

    select.addEventListener("change", updateOptions);

    // Initial setup
    updateOptions();

    // MutationObserver for dynamic changes
    const observer = new MutationObserver(updateOptions);
    observer.observe(select, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  });
}

// Initialize once
const init = (() => {
  let initialized = false;
  return () => {
    if (!initialized) {
      createCustomSelect();
      initialized = true;

      const bodyObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              (node.matches(".decarb-select:not(.initialized)") ||
                node.querySelector(".decarb-select:not(.initialized)"))
            ) {
              createCustomSelect();
            }
          });
        });
      });

      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
