var app = new Vue ({
    el: '#root',
    data: {

        // HEADER
        // Menu list
        headerMenu: [
        'Home', 
        'Rates', 
        'Testimonials',
        'FAQ', 
        'Blog', 
        'Contact'
        ],

        // Button
        headerMenuBtn: 'FREE QUOTE',

        // SOCIAL ICONS & LINKS
        socials: [
            // Facebook
            {
                link: "https://www.facebook.com/TransExpresssrl/",
                icon: '<i class="fab fa-facebook-f"></i>'
            },
            // Twitter
            {
                link: "#",
                icon: '<i class="fab fa-twitter"></i>'
            },
            // Instagram
            {   
                link: "https://www.instagram.com/transexpress_moving/",
                icon: '<i class="fab fa-instagram"></i>'
            },
            // Youtube
            {
                link: "#",
                icon: '<i class="fab fa-youtube"></i>'
            }
        ],

        // FOOTER
        // Titles
        footerMenuTitle_1: 'Avada Movers',
        footerMenuTitle_2: 'Recent Posts',
        
        // Menu lists
        footerMenu_1: [
                'Home',
                'Rates',
                'Testimonials',
                'Blog',
                'Free Quote'
        ],

        footerMenu_2: [
                'Heading Out To College?',
                'Moving Your Buisiness?',
                'Outstanding Quality',
                'Cost of Moving',
                'Best Moving Tips'
        ],

        //Copyright and Legal stuffs links
        copyAndLegal: [
            '© Copyright 2012 - 2020',
            'Avada Theme by ThemeFusion',
            'All Rights Reserved',
            'Powered by Wordpress'
        ]
    },

});