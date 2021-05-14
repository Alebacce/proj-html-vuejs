var app = new Vue ({
    el: '#root',
    data: {

        // HEADER
        // Menu list
        headerMenu: [
            {
                link: '#',
                name: 'Home',
                isClicked: false
            },
            {
                link: '#',
                name: 'Rates',
                isClicked: false
            },
            {
                link: '#',
                name: 'Testimonials',
                isClicked: false
            },
            {
                link: '#',
                name: 'FAQ',
                isClicked: false
            },
            {
                link: '#',
                name: 'Blog',
                isClicked: false
            },
            {
                link: '#',
                name: 'Contact',
                isClicked: false
            },
        ],

        // Button
        headerMenuBtn: {
            link: '#',
            name: 'FREE QUOTE'
        },

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
            {
                link: '#',
                name: 'Home',
                isClicked: false
            },
            {
                link: '#',
                name: 'Rates',
                isClicked: false
            },
            {
                link: '#',
                name: 'Testimonials',
                isClicked: false
            },
            {
                link: '#',
                name: 'Blog',
                isClicked: false
            },
            {
                link: '#',
                name: 'Free Quote',
                isClicked: false
            },

        ],

        footerMenu_2: [
            {
                link: '#',
                name: 'Heading Out To College?',
                isClicked: false
            },
            {
                link: '#',
                name: 'Moving Your Buisiness?',
                isClicked: false
            },
            {
                link: '#',
                name: 'Outstanding Quality',
                isClicked: false
            },
            {
                link: '#',
                name: 'Cost of Moving',
                isClicked: false
            },
            {
                link: '#',
                name: 'Best Moving Tips',
                isClicked: false
            },
        ],

        //Copyright and Legal stuffs links
        copyAndLegal: [
            {
                link: '#',
                name: '© Copyright 2012 - 2020'
            },
            {
                link: '#',
                name: 'Avada Theme by ThemeFusion'
            },
            {
                link: '#',
                name: 'All Rights Reserved'
            },
            {
                link: '#',
                name: 'Powered by Wordpress'
            },
            {
                link: '#',
                name: 'Free Quote'
            },
        ],

        // FLAGS
        // thisLink saves the index of link in the header
        thisLink: 0,
        // thisLink saves the index of link in the footer list 1
        thisFooterLink1: 0,
        // thisLink saves the index of link in the footer list 2
        thisFooterLink2: -1,
    },

    methods: {
        // Functions to activate one link per time
        clicked(index) {
            this.thisLink = index;
            this.headerMenu[index].isClicked = !this.headerMenu[index].isClicked;
        },

        clickedFooter1(index) {
            this.thisFooterLink1 = index;
            this.footerMenu_1[index].isClicked = !this.footerMenu_1[index].isClicked;
        },
        
        clickedFooter2(index) {
            this.thisFooterLink2 = index;
            this.footerMenu_2[index].isClicked = !this.footerMenu_2[index].isClicked;
        } 
    }
});