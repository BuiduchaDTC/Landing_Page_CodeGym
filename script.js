// ================= SMOOTH SCROLL FOR NAV LINKS =================
$(document).ready(function () {
    // Smooth scroll
    $('a.nav-link, a.btn[href^="#"]').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
            // Close mobile menu
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Navbar collapse on scroll
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }

        // Back to top button
        if (scroll > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }

        // Active nav link
        const sections = $('section');
        const navLinks = $('.navbar-nav .nav-link');
        let current = '';

        sections.each(function () {
            const sectionTop = $(this).offset().top - 100;
            if (scroll >= sectionTop) {
                current = $(this).attr('id');
            }
        });

        navLinks.each(function () {
            $(this).removeClass('active');
            if ($(this).attr('href') === '#' + current) {
                $(this).addClass('active');
            }
        });
    });

    // Back to top click
    $('#backToTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // ================= COUNTER ANIMATION =================
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        const statsSection = $('.counter').first();
        if (statsSection.length === 0) return;

        const sectionTop = statsSection.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > sectionTop) {
            countersAnimated = true;
            $('.counter').each(function () {
                const $this = $(this);
                const countTo = parseInt($this.attr('data-count'));

                $({ countNum: 0 }).animate(
                    {
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum).toLocaleString('vi-VN') + '+');
                        },
                        complete: function () {
                            $this.text(this.countNum.toLocaleString('vi-VN') + '+');
                        }
                    }
                );
            });
        }
    }

    $(window).on('scroll', animateCounters);
    animateCounters(); // check on load

    // ================= WOW.JS INIT (Optional) =================
    // Nếu bạn muốn dùng WOW.js, thêm thư viện vào HTML:
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"><\/script>
    // new WOW().init();

    // ================= FORM VALIDATION (DEMO) =================
    // Nếu bạn thêm form đăng ký, có thể dùng validation ở đây
});