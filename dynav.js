 $(document).ready(function(){
        function createNavigation(activeLink) {
            const navigation = $('<div>').addClass('topnav').attr('id', 'topnavs');

            const homeLink = $('<a>').attr('href', 'index.html').text('Home');
            if (activeLink === 'index') {
                homeLink.addClass('active');
            }

            const projectsDropdown = $('<div>').addClass('dropdown');

            const projectsButton = $('<button>').addClass('dropbtn').text('Projects ');

            const projectsIcon = $('<i>').addClass('fa fa-caret-down');

            const projectsContent = $('<div>').addClass('dropdown-content');

            const webpConvLink = $('<a>').attr('href', 'https://github.com/https433/WebpConv').text('WebpConv');

            const panikLink = $('<a>').attr('href', 'https://github.com/https433/Panik').text('panik_killer');
            const dynav = $('<a>').attr('href', 'https://github.com/https433/abnsrc').text('src_code');

            const aboutLink = $('<a>').attr('href', 'about.html').text('About');
            if (activeLink === 'about') {
                aboutLink.addClass('active');
            }

            const contactLink = $('<a>').attr('href', 'contact.html').text('Contact');
            if (activeLink === 'contact') {
                contactLink.addClass('active');
            }
         
            const blogLink = $('<a>').attr('href', 'https://blog.abby0666.xyz').text('Blog');
            if (activeLink === 'blog') {
                blogLink.addClass('active');
            }
            const iconLink = $('<a>').attr('href', 'javascript:void(0);').css('fontSize', '15px').addClass('icon').click(displaynav);

            projectsDropdown.append(projectsButton);
            projectsButton.append(projectsIcon);
            projectsDropdown.append(projectsContent);
            projectsContent.append(webpConvLink);
            projectsContent.append(panikLink);
            projectsContent.append(dynav);
         
            navigation.append(homeLink);
            navigation.append(projectsDropdown);
            navigation.append(aboutLink);
            navigation.append(contactLink);
            navigation.append(blogLink);

            navigation.append(iconLink);

            return navigation;
        }

        function displaynav() {
            var e = $('#topnavs');
            e.hasClass("topnav") ? e.addClass("responsive") : e.removeClass("topnav");
        }

        // Determine which page we're on based on the HTML file ending
        const currentPage = window.location.pathname.split('/').pop().split('.')[0];

        $('#navigation').append(createNavigation(currentPage));
    });
