export const languages = {
  en: 'English',
  pl: 'Polski',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.support': 'Support',
    'nav.contact': 'Contact',
    'nav.tags': 'Tags',
    'nav.github': 'GitHub',
    'nav.sponsor': 'Sponsor',
    'nav.projects': 'Projects ▾',
    'nav.allProjects': 'All Projects',
    'nav.menuTrigger': 'Menu ▾',

    // Theme
    'theme.toggle': 'theme',
    'theme.toggleTitle': 'Toggle theme',

    // Footer
    'footer.copyright': '© {year} lepo.co',
    'footer.themeMadeBy': 'Theme made by',
    'footer.portedBy': 'Ported by',

    // Posts
    'post.readMore': '[Read more]',
    'post.updated': 'Updated:',
    'post.copy': 'Copy',
    'post.copied': 'Copied',
    'post.readOtherPosts': 'Read other posts',
    'post.recentPosts': 'Recent posts:',
    'post.noPosts': 'No posts yet. Check back soon!',
    'post.noPostsForTag': 'No posts found with this tag.',
    'post.postsFor': 'Posts for:',

    // Pages
    'page.posts': 'Posts',
    'page.tags': 'Tags',

    // 404
    '404.title': '404 - Page Not Found',
    '404.heading': '404 - Page not found...',
    '404.description': "The page you're looking for doesn't exist. It might have been moved, deleted, or you may have entered the wrong URL.",
    '404.backHome': 'Back to home page',

    // Index page
    'index.title': 'Leszek Pomianowski - lepo.co',
    'index.hello': 'Hello there!',
    'index.intro': 'I\'m <strong><a href="https://github.com/pomianowski">Leszek Pomianowski</a></strong>, a .NET developer from Poland. I work on distributed systems and build tools that other developers seem to find useful.',
    'index.whatIDo': 'What I do',
    'index.whatIDoText': 'I spend my time working with .NET applications - modernizing legacy systems, building microservices, and figuring out how to make things scale. I work with Docker, RabbitMQ, gRPC, and mess around with newer stuff like .NET 10, Aspire, and Marten. I also build WPF applications and contribute to open-source projects when I can.',
    'index.thingsBuilt': "Things I've Built",
    'index.wpfui': 'Modern Windows controls for WPF that somehow ended up in Microsoft PowerToys and official WPF repo',
    'index.radiograph': "Hardware monitoring app that's been downloaded quite a bit",
    'index.camunda': "Server for connecting AI tools to Camunda workflows, listed in Docker's official MCP hub",
    'index.wantToChat': 'If You Want to Chat',
    'index.wantToChatText': "I'm interested in collaborating on cool projects, especially anything involving .NET architecture, distributed systems, or developer tools. I work with various teams on technical challenges and enjoy solving interesting problems.",
    'index.findMe': 'You can find my stuff on <a href="https://github.com/lepoco">GitHub</a>, support my work through <a href="https://github.com/sponsors/pomianowski">GitHub Sponsors</a>, or <a href="{contactUrl}">drop me a line</a> if you want to chat about a project.',

    // About page
    'about.title': 'About Leszek Pomianowski',
    'about.heading': 'About Me',
    'about.intro': "Hi! I'm Leszek Pomianowski, a .NET developer from Poland. I work on distributed systems and like building tools that other developers find useful. I'm probably best known for WPF UI, which somehow ended up being used by Microsoft PowerToys.",
    'about.whatIDo': 'What I Do',
    'about.whatIDoText1': "I spend most of my time working with .NET applications - modernizing legacy systems, building microservices, and figuring out how to make things scale. I work with Docker, RabbitMQ, gRPC, event sourcing with Marten, and various other technologies that keep distributed systems running.",
    'about.whatIDoText2': "I've been experimenting with .NET 10, Aspire for orchestration, and E2E testing with Playwright. Recently I've been exploring AI tools like GitHub Copilot and Cursor to see how they can make development more efficient.",
    'about.projectsBuilt': "Projects I've Built",
    'about.wpfuiTitle': 'WPF UI',
    'about.wpfuiText': "A library that makes WPF applications look like they belong on modern Windows. It started as a personal project because I was tired of WPF apps looking dated. It's been downloaded quite a bit and is used by Microsoft PowerToys Run. Microsoft even worked with me to get some of it into the official .NET framework.",
    'about.radiographTitle': 'Radiograph',
    'about.radiographText': "A hardware monitoring app on the Microsoft Store. Built it with WPF UI and LibreHardwareMonitor to monitor system temperatures and performance. It has a decent rating and is installed on quite a few computers.",
    'about.mcpTitle': 'MCP Servers',
    'about.mcpText': "I built two Model Context Protocol servers that ended up in Docker's official repository: one for Camunda process engines and another for OpenAPI specifications. They help AI assistants work with business tools and API documentation.",
    'about.dayJob': 'Day Job Stuff',
    'about.dayJobText': "I work on enterprise software - the kind that handles lots of users and has to keep running. Mostly energy sector stuff, dealing with legacy systems that need to be modernized without breaking everything. It involves a lot of distributed architecture and making sure things scale properly.",
    'about.otherThings': 'Other Things',
    'about.otherThingsText1': "I contribute to LibreHardwareMonitor when I can, mostly working on SMBIOS stuff. I maintain some Azure DevOps extensions and help migrate old ASP.NET services to modern architectures when needed.",
    'about.otherThingsText2': "I have a CS degree and some NVIDIA certification for NLP work. When I'm not coding, I play games (big fan of The Witcher), design circuit boards as a hobby, and mess around with Home Assistant for smart home automation.",
    'about.collaborate': 'If You Want to Collaborate',
    'about.collaborateText': "I'm interested in working on cool projects, especially if they involve .NET architecture, distributed systems, or developer tools. I work with various teams on technical challenges and enjoy solving interesting problems.",
    'about.findMe': 'You can check out my stuff on <a href="https://github.com/lepoco" target="_blank" rel="noopener">GitHub</a> or <a href="{contactUrl}">drop me a line</a> if you want to chat about a project.',

    // Contact page
    'contact.title': 'Contact - Leszek Pomianowski',
    'contact.heading': 'Contact',
    'contact.intro': "Want to chat about a project or collaborate on something cool? I'm usually up for discussing .NET stuff, distributed systems, or developer tools.",
    'contact.email': 'Email',
    'contact.emailText': 'Drop me a line at: <strong>support at lepo.co</strong>',
    'contact.emailNote': 'Just replace "at" with @ when you email. I usually get back to people within a day or two.',
    'contact.professional': 'Professional Work',
    'contact.professionalText': 'If you need consulting or technical help, check out <a href="{supportUrl}">the support page</a> to see what I can help with and whether I\'m available.',
    'contact.findOnline': 'Find Me Online',
    'contact.findOnlineText': 'You can also find me here:',
    'contact.githubLabel': 'GitHub:',
    'contact.githubDesc': 'Where I keep my projects',
    'contact.sponsorsLabel': 'GitHub Sponsors:',
    'contact.sponsorsDesc': "If you want to support what I'm building",
    'contact.quickNote': 'Quick Note',
    'contact.quickNoteText': "When you reach out, it helps if you mention what you're working on and what kind of help you're looking for. For open-source stuff, check the GitHub issues first - might already be an answer there.",

    // Support page
    'support.title': 'Support - Leszek Pomianowski',
    'support.heading': 'Professional Support',
    'support.intro': "Sometimes teams need help with .NET stuff, WPF applications, or distributed systems. I can help with that when my schedule allows.",
    'support.whatICanHelp': 'What I Can Help With',
    'support.consulting': 'Technical Consulting',
    'support.consultingText': "Architecture reviews for .NET applications, especially if you're dealing with microservices, distributed systems, or modernizing legacy code. I can help figure out performance issues and suggest better approaches based on what I've seen work (and not work).",
    'support.guidance': 'Development Guidance',
    'support.guidanceText': "WPF UI stuff, modern .NET development, and working with technologies like Docker, RabbitMQ, and gRPC. Code reviews when you need a second pair of eyes on something complex.",
    'support.howItWorks': 'How It Works',
    'support.howItWorksText1': "Usually email for questions and advice, video calls for more complex discussions. I get back to people within a day or two, depending on what else I have going on.",
    'support.howItWorksText2': "I work remotely with teams mostly in Poland and Europe. For bigger projects, I might be able to visit depending on where you are and what's involved.",
    'support.whatIDontDo': "What I Don't Do",
    'support.whatIDontDoText': "I'm not available 24/7 or for emergency support. I don't take on full-time commitments or exclusive contracts. For open-source project help, use GitHub Issues.",
    'support.gettingStarted': 'Getting Started',
    'support.gettingStartedText1': 'Email me at <strong>support at lepo.co</strong> (replace "at" with @) with details about what you\'re working on and what kind of help you need. I\'ll let you know if I can help and when I might be available.',
    'support.gettingStartedText2': "Not every project is a good fit for what I do, but I'll be honest about whether I can actually help you or not.",
    'support.tech': 'Tech I Work With',
    'support.techText1': ".NET, C#, microservices, Docker, WPF, distributed systems, event sourcing, gRPC, Playwright testing, and various other tools I've picked up over the years.",
    'support.techText2': "This is for specific technical guidance, not replacing your development team. The idea is to help you avoid mistakes I've seen before and make better technical decisions.",

    // RSS
    'rss.title': 'Leszek Pomianowski lepo.co RSS Feed',
    'rss.description': 'A terminal-inspired theme for Astro',
  },
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.blog': 'Blog',
    'nav.support': 'Wsparcie',
    'nav.contact': 'Kontakt',
    'nav.tags': 'Tagi',
    'nav.github': 'GitHub',
    'nav.sponsor': 'Sponsoruj',
    'nav.projects': 'Projekty ▾',
    'nav.allProjects': 'Wszystkie projekty',
    'nav.menuTrigger': 'Menu ▾',

    // Theme
    'theme.toggle': 'motyw',
    'theme.toggleTitle': 'Zmień motyw',

    // Footer
    'footer.copyright': '© {year} lepo.co',
    'footer.themeMadeBy': 'Motyw stworzony przez',
    'footer.portedBy': 'Przeniesiony przez',

    // Posts
    'post.readMore': '[Czytaj dalej]',
    'post.updated': 'Zaktualizowano:',
    'post.copy': 'Kopiuj',
    'post.copied': 'Skopiowano',
    'post.readOtherPosts': 'Przeczytaj inne posty',
    'post.recentPosts': 'Ostatnie posty:',
    'post.noPosts': 'Brak postów. Sprawdź ponownie wkrótce!',
    'post.noPostsForTag': 'Nie znaleziono postów z tym tagiem.',
    'post.postsFor': 'Posty dla:',

    // Pages
    'page.posts': 'Posty',
    'page.tags': 'Tagi',

    // 404
    '404.title': '404 - Nie znaleziono strony',
    '404.heading': '404 - Nie znaleziono strony...',
    '404.description': 'Strona, której szukasz, nie istnieje. Mogła zostać przeniesiona, usunięta lub wpisałeś nieprawidłowy adres URL.',
    '404.backHome': 'Powrót do strony głównej',

    // Index page
    'index.title': 'Leszek Pomianowski - lepo.co',
    'index.hello': 'Cześć!',
    'index.intro': 'Jestem <strong><a href="https://github.com/pomianowski">Leszek Pomianowski</a></strong>, programista .NET z Polski. Pracuję nad systemami rozproszonymi i buduję narzędzia, które inni programiści uznają za przydatne.',
    'index.whatIDo': 'Czym się zajmuję',
    'index.whatIDoText': 'Spędzam czas pracując z aplikacjami .NET - modernizuję starsze systemy, buduję mikroserwisy i wymyślam jak skalować rzeczy. Pracuję z Dockerem, RabbitMQ, gRPC i eksperymentuję z nowszymi rzeczami jak .NET 10, Aspire i Marten. Buduję też aplikacje WPF i kontrybuuję do projektów open-source kiedy mogę.',
    'index.thingsBuilt': 'Co zbudowałem',
    'index.wpfui': 'Nowoczesne kontrolki Windows dla WPF, które trafiły do Microsoft PowerToys i oficjalnego repozytorium WPF',
    'index.radiograph': 'Aplikacja do monitorowania sprzętu, która została pobrana całkiem sporo razy',
    'index.camunda': 'Serwer do łączenia narzędzi AI z workflow Camunda, wymieniony w oficjalnym hubie MCP Dockera',
    'index.wantToChat': 'Chcesz pogadać?',
    'index.wantToChatText': 'Chętnie współpracuję przy ciekawych projektach, szczególnie tych związanych z architekturą .NET, systemami rozproszonymi lub narzędziami dla programistów. Pracuję z różnymi zespołami nad wyzwaniami technicznymi i lubię rozwiązywać interesujące problemy.',
    'index.findMe': 'Moje projekty znajdziesz na <a href="https://github.com/lepoco">GitHubie</a>, możesz wesprzeć moją pracę przez <a href="https://github.com/sponsors/pomianowski">GitHub Sponsors</a> lub <a href="{contactUrl}">napisz do mnie</a> jeśli chcesz porozmawiać o projekcie.',

    // About page
    'about.title': 'O Leszku Pomianowskim',
    'about.heading': 'O mnie',
    'about.intro': 'Cześć! Jestem Leszek Pomianowski, programista .NET z Polski. Pracuję nad systemami rozproszonymi i lubię budować narzędzia, które inni programiści uznają za przydatne. Jestem chyba najbardziej znany z WPF UI, który w jakiś sposób trafił do Microsoft PowerToys.',
    'about.whatIDo': 'Czym się zajmuję',
    'about.whatIDoText1': 'Większość czasu spędzam pracując z aplikacjami .NET - modernizuję starsze systemy, buduję mikroserwisy i wymyślam jak skalować rzeczy. Pracuję z Dockerem, RabbitMQ, gRPC, event sourcingiem z Marten i różnymi innymi technologiami, które utrzymują systemy rozproszone w ruchu.',
    'about.whatIDoText2': 'Eksperymentuję z .NET 10, Aspire do orkiestracji i testowaniem E2E z Playwright. Ostatnio eksploruję narzędzia AI jak GitHub Copilot i Cursor, żeby zobaczyć jak mogą usprawnić rozwój oprogramowania.',
    'about.projectsBuilt': 'Co zbudowałem',
    'about.wpfuiTitle': 'WPF UI',
    'about.wpfuiText': 'Biblioteka, która sprawia, że aplikacje WPF wyglądają jak nowoczesne aplikacje Windows. Zaczęło się jako osobisty projekt, bo byłem zmęczony przestarzałym wyglądem aplikacji WPF. Została pobrana całkiem sporo razy i jest używana przez Microsoft PowerToys Run. Microsoft nawet ze mną współpracował, żeby przenieść część tego do oficjalnego frameworka .NET.',
    'about.radiographTitle': 'Radiograph',
    'about.radiographText': 'Aplikacja do monitorowania sprzętu w Microsoft Store. Zbudowana z WPF UI i LibreHardwareMonitor do monitorowania temperatury systemu i wydajności. Ma przyzwoitą ocenę i jest zainstalowana na wielu komputerach.',
    'about.mcpTitle': 'Serwery MCP',
    'about.mcpText': 'Zbudowałem dwa serwery Model Context Protocol, które trafiły do oficjalnego repozytorium Dockera: jeden dla silników procesów Camunda, a drugi dla specyfikacji OpenAPI. Pomagają asystentom AI pracować z narzędziami biznesowymi i dokumentacją API.',
    'about.dayJob': 'Praca zawodowa',
    'about.dayJobText': 'Pracuję nad oprogramowaniem enterprise - takim, które obsługuje wielu użytkowników i musi działać non-stop. Głównie sektor energetyczny, praca ze starszymi systemami, które trzeba zmodernizować bez psucia wszystkiego. Dużo architektury rozproszonej i dbania o to, żeby rzeczy się skalowały.',
    'about.otherThings': 'Inne rzeczy',
    'about.otherThingsText1': 'Kontrybuuję do LibreHardwareMonitor kiedy mogę, głównie pracując nad SMBIOS. Utrzymuję rozszerzenia Azure DevOps i pomagam migrować stare serwisy ASP.NET do nowoczesnych architektur.',
    'about.otherThingsText2': 'Mam dyplom informatyka i certyfikat NVIDIA z pracy z NLP. Kiedy nie koduję, gram w gry (duży fan Wiedźmina), projektuję płytki drukowane jako hobby i bawię się Home Assistantem do automatyzacji inteligentnego domu.',
    'about.collaborate': 'Chcesz współpracować?',
    'about.collaborateText': 'Chętnie pracuję nad ciekawymi projektami, szczególnie jeśli dotyczą architektury .NET, systemów rozproszonych lub narzędzi dla programistów. Pracuję z różnymi zespołami nad wyzwaniami technicznymi i lubię rozwiązywać interesujące problemy.',
    'about.findMe': 'Moje projekty znajdziesz na <a href="https://github.com/lepoco" target="_blank" rel="noopener">GitHubie</a> lub <a href="{contactUrl}">napisz do mnie</a> jeśli chcesz porozmawiać o projekcie.',

    // Contact page
    'contact.title': 'Kontakt - Leszek Pomianowski',
    'contact.heading': 'Kontakt',
    'contact.intro': 'Chcesz porozmawiać o projekcie lub współpracować przy czymś fajnym? Chętnie porozmawiam o .NET, systemach rozproszonych lub narzędziach dla programistów.',
    'contact.email': 'Email',
    'contact.emailText': 'Napisz do mnie na: <strong>support at lepo.co</strong>',
    'contact.emailNote': 'Zamień "at" na @ w adresie email. Zwykle odpowiadam w ciągu dnia lub dwóch.',
    'contact.professional': 'Praca zawodowa',
    'contact.professionalText': 'Jeśli potrzebujesz konsultingu lub pomocy technicznej, sprawdź <a href="{supportUrl}">stronę wsparcia</a>, żeby zobaczyć w czym mogę pomóc i czy jestem dostępny.',
    'contact.findOnline': 'Znajdź mnie online',
    'contact.findOnlineText': 'Możesz mnie też znaleźć tutaj:',
    'contact.githubLabel': 'GitHub:',
    'contact.githubDesc': 'Tutaj trzymam swoje projekty',
    'contact.sponsorsLabel': 'GitHub Sponsors:',
    'contact.sponsorsDesc': 'Jeśli chcesz wesprzeć to, co buduję',
    'contact.quickNote': 'Szybka uwaga',
    'contact.quickNoteText': 'Kiedy się zgłaszasz, pomaga jeśli wspomnisz nad czym pracujesz i jakiego rodzaju pomocy szukasz. Dla spraw open-source sprawdź najpierw GitHub Issues - może już jest tam odpowiedź.',

    // Support page
    'support.title': 'Wsparcie - Leszek Pomianowski',
    'support.heading': 'Profesjonalne wsparcie',
    'support.intro': 'Czasami zespoły potrzebują pomocy z .NET, aplikacjami WPF lub systemami rozproszonymi. Mogę w tym pomóc, gdy mój harmonogram na to pozwala.',
    'support.whatICanHelp': 'W czym mogę pomóc',
    'support.consulting': 'Konsulting techniczny',
    'support.consultingText': 'Przeglądy architektury aplikacji .NET, szczególnie jeśli masz do czynienia z mikroserwisami, systemami rozproszonymi lub modernizacją starszego kodu. Mogę pomóc zidentyfikować problemy z wydajnością i zasugerować lepsze podejścia na podstawie tego, co widziałem że działa (i nie działa).',
    'support.guidance': 'Wsparcie rozwoju',
    'support.guidanceText': 'WPF UI, nowoczesny rozwój .NET, praca z technologiami jak Docker, RabbitMQ i gRPC. Code review, gdy potrzebujesz drugiej pary oczu przy czymś złożonym.',
    'support.howItWorks': 'Jak to działa',
    'support.howItWorksText1': 'Zazwyczaj email dla pytań i porad, rozmowy wideo dla bardziej złożonych dyskusji. Odpowiadam w ciągu dnia lub dwóch, w zależności od tego, co jeszcze mam na głowie.',
    'support.howItWorksText2': 'Pracuję zdalnie z zespołami głównie w Polsce i Europie. Przy większych projektach mogę przyjechać, w zależności od tego gdzie jesteś i co jest do zrobienia.',
    'support.whatIDontDo': 'Czego nie robię',
    'support.whatIDontDoText': 'Nie jestem dostępny 24/7 ani do wsparcia awaryjnego. Nie podejmuję się pełnoetatowych zobowiązań ani ekskluzywnych kontraktów. Dla pomocy z projektami open-source użyj GitHub Issues.',
    'support.gettingStarted': 'Jak zacząć',
    'support.gettingStartedText1': 'Napisz do mnie na <strong>support at lepo.co</strong> (zamień "at" na @) z opisem tego nad czym pracujesz i jakiej pomocy potrzebujesz. Dam znać czy mogę pomóc i kiedy zasadniczo będę dostępny.',
    'support.gettingStartedText2': 'Nie każdy projekt pasuje do tego co robię, ale będę szczery czy faktycznie mogę ci pomóc czy nie.',
    'support.tech': 'Technologie, z którymi pracuję',
    'support.techText1': '.NET, C#, mikroserwisy, Docker, WPF, systemy rozproszone, event sourcing, gRPC, testowanie Playwright i różne inne narzędzia, które zebrałem przez lata.',
    'support.techText2': 'To jest wsparcie techniczne, nie zastępowanie twojego zespołu programistycznego. Chodzi o to, żeby pomóc ci uniknąć błędów, które widziałem wcześniej i podejmować lepsze decyzje techniczne.',

    // RSS
    'rss.title': 'Leszek Pomianowski lepo.co kanał RSS',
    'rss.description': 'Motyw inspirowany terminalem dla Astro',
  },
} as const;
