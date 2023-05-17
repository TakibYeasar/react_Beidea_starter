
// // header scroll
// let nav = document.querySelector(".navbar")
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("header-scrolled");
//     } else {
//         nav.classList.remove("header-scrolled");
//     }
// }


// // nav hide

// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelectorAll(".navbar-collapse .collapse");
// navBar.forEach(function (a) {
//     a.addEventListener("click", function () {
//         navCollapse.classList.remove("show");
//     })
// })



// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);



// (function ($) {
//     $.fn.countTo = function (options) {
//         options = options || {};

//         return $(this).each(function () {
//             // set options for current element
//             var settings = $.extend({}, $.fn.countTo.defaults, {
//                 from: $(this).data('from'),
//                 to: $(this).data('to'),
//                 speed: $(this).data('speed'),
//                 refreshInterval: $(this).data('refresh-interval'),
//                 decimals: $(this).data('decimals')
//             }, options);

//             // how many times to update the value, and how much to increment the value on each update
//             var loops = Math.ceil(settings.speed / settings.refreshInterval),
//                 increment = (settings.to - settings.from) / loops;

//             // references & variables that will change with each update
//             var self = this,
//                 $self = $(this),
//                 loopCount = 0,
//                 value = settings.from,
//                 data = $self.data('countTo') || {};

//             $self.data('countTo', data);

//             // if an existing interval can be found, clear it first
//             if (data.interval) {
//                 clearInterval(data.interval);
//             }
//             data.interval = setInterval(updateTimer, settings.refreshInterval);

//             // initialize the element with the starting value
//             render(value);

//             function updateTimer() {
//                 value += increment;
//                 loopCount++;

//                 render(value);

//                 if (typeof (settings.onUpdate) == 'function') {
//                     settings.onUpdate.call(self, value);
//                 }

//                 if (loopCount >= loops) {
//                     // remove the interval
//                     $self.removeData('countTo');
//                     clearInterval(data.interval);
//                     value = settings.to;

//                     if (typeof (settings.onComplete) == 'function') {
//                         settings.onComplete.call(self, value);
//                     }
//                 }
//             }

//             function render(value) {
//                 var formattedValue = settings.formatter.call(self, value, settings);
//                 $self.html(formattedValue);
//             }
//         });
//     };

//     $.fn.countTo.defaults = {
//         from: 0,               // the number the element should start at
//         to: 0,                 // the number the element should end at
//         speed: 1000,           // how long it should take to count between the target numbers
//         refreshInterval: 1,  // how often the element should be updated
//         decimals: 0,           // the number of decimal places to show
//         formatter: formatter,  // handler for formatting the value before rendering
//         onUpdate: null,        // callback method for every time the element is updated
//         onComplete: null       // callback method for when the element finishes updating
//     };

//     function formatter(value, settings) {
//         return value.toFixed(settings.decimals);
//     }
// }(jQuery));

// jQuery(function ($) {
//     // custom formatting example
//     $('.count-number').data('countToOptions', {
//         formatter: function (value, options) {
//             return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
//         }
//     });

//     // start all the timers
//     $('.timer').each(count);

//     function count(options) {
//         var $this = $(this);
//         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
//         $this.countTo(options);
//     }
// });