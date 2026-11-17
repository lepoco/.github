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
    '404.description': "This page doesn't exist. It may have moved, been deleted, or the URL has a typo.",
    '404.backHome': 'Back to home page',

    // Index page
    'index.title': 'Leszek Pomianowski - lepo.co',
    'index.hello': 'Hey, welcome!',
    'index.intro': 'I\'m <strong><a href="https://github.com/pomianowski">Leszek Pomianowski</a></strong>. I design architecture, business processes and quality control, then build the systems that run them. After hours I design PCBs and automate my home with Home Assistant.',
    'index.built': 'I made <a href="https://github.com/lepoco/wpfui">WPF UI</a>, modern controls that helped bring Fluent design to WPF, <a href="https://apps.microsoft.com/detail/9nh1p86h06cg">Radiograph</a> for hardware monitoring, <a href="https://github.com/lepoco/mcp-camunda">Camunda MCP</a> for connecting AI to Camunda workflows, and <a href="https://octavam.com">Octavam</a>, an app for learning piano.',
    'index.ai': 'Lately I write specifications, built from domain knowledge and literature, that keep AI models within guardrails.',
    'index.findMe': 'Got a project, an idea or a half-finished prototype? <a href="{contactUrl}">Write to me</a>. You\'ll also find me on <a href="https://github.com/lepoco">GitHub</a> and <a href="https://bsky.app/profile/leszekpomian.bsky.social" target="_blank" rel="noopener">Bluesky</a>, and you can support my work through <a href="https://github.com/sponsors/pomianowski">GitHub Sponsors</a>.',

    // About page
    'about.title': 'About Leszek Pomianowski',
    'about.heading': 'About me',
    'about.intro': 'Hi, I\'m Leszek Pomianowski. I design architecture, business processes and quality control, and I build tools other developers find useful. You may know me from WPF UI, the library that helped bring Fluent design to WPF.',
    'about.whatIDo': 'What I do',
    'about.whatIDoText1': 'Most of my time goes to architecture and domain design: modernizing legacy systems, building microservices and making them scale. I work with .NET, Podman, RabbitMQ, gRPC and event sourcing with Marten.',
    'about.whatIDoText2': 'Lately I\'ve been testing .NET 10, Aspire for orchestration and Playwright for E2E tests. I also try AI tools like GitHub Copilot and Cursor to see how they make development more efficient. My current obsession: specifications built from domain knowledge and literature that keep AI models within guardrails.',
    'about.projectsBuilt': "Projects I've built",
    'about.wpfuiTitle': 'WPF UI',
    'about.wpfuiText': 'A library that makes WPF apps look at home on modern Windows. I started it because I was tired of dated-looking WPF apps. It has plenty of downloads. When Microsoft PowerToys adopted the new Fluent design, WPF UI was its foundation, and it became a blueprint for Fluent UI in WPF. My WPF UI Gallery app inspired Microsoft\'s WPF Gallery, a showcase of WPF controls. Microsoft also worked with me to bring parts of it into .NET.',
    'about.radiographTitle': 'Radiograph',
    'about.radiographText': 'A hardware monitoring app on the Microsoft Store. I built it with WPF UI and LibreHardwareMonitor to track system temperatures and performance. It has a decent rating and runs on many computers.',
    'about.mcpTitle': 'MCP Servers',
    'about.mcpText': "I built two Model Context Protocol servers that landed in Docker's official repository: one for Camunda process engines, one for OpenAPI specifications. They help AI assistants work with business tools and API documentation.",
    'about.octavamTitle': "Octavam",
    'about.octavamText': "An app for learning to play the piano. More at octavam.com.",
    'about.dayJob': 'Day job',
    'about.dayJobText': 'I write enterprise software that has to keep running for many users. Mostly the energy sector: legacy systems that need modernizing without breaking anything, so a lot of distributed architecture and scaling.',
    'about.otherThings': 'Outside of work',
    'about.otherThingsText1': 'I contribute to LibreHardwareMonitor when I can, mostly on SMBIOS. I maintain a few Azure DevOps extensions and help move old ASP.NET services to modern architectures.',
    'about.otherThingsText2': 'I have a CS degree and an NVIDIA certification in NLP. Off the clock I play games (big Witcher fan), design circuit boards and automate my home with Home Assistant. Automation is my favorite kind of problem: from PCBs to smart home, I like it when things run on their own.',
    'about.collaborate': 'Want to work together?',
    'about.collaborateText': "I'm up for interesting projects, especially around architecture, domain design, business processes and developer tools. I work with teams on technical challenges and enjoy a good problem.",
    'about.findMe': 'Browse my work on <a href="https://github.com/lepoco" target="_blank" rel="noopener">GitHub</a>, say hi on <a href="https://bsky.app/profile/leszekpomian.bsky.social" target="_blank" rel="noopener">Bluesky</a>, or <a href="{contactUrl}">write to me</a> if you want to talk about a project.',
    'about.photoAlt': 'Me and my dog, both making a face',
    'about.photoCaption': 'Me and my dog. He is the more photogenic one.',

    // Contact page
    'contact.title': 'Contact - Leszek Pomianowski',
    'contact.heading': 'Contact',
    'contact.intro': "Want to talk about a project or build something together? I'm happy to chat about architecture, business processes, distributed systems, developer tools, automation and electronics.",
    'contact.email': 'Email',
    'contact.emailText': 'Write to me at: <strong>support at lepo.co</strong>',
    'contact.emailNote': 'Replace "at" with @ when you email. I usually reply within a day or two.',
    'contact.professional': 'Business inquiries',
    'contact.professionalText': 'Need consulting or hands-on technical help? See <a href="{supportUrl}">the support page</a> for what I offer and how to start.',
    'contact.findOnline': 'Find me online',
    'contact.findOnlineText': 'You can also find me here:',
    'contact.githubLabel': 'GitHub:',
    'contact.githubDesc': 'Where I keep my projects',
    'contact.sponsorsLabel': 'GitHub Sponsors:',
    'contact.sponsorsDesc': 'If you want to support what I build',
    'contact.blueskyLabel': 'Bluesky:',
    'contact.blueskyDesc': 'Come say hi',
    'contact.quickNote': 'Quick note',
    'contact.quickNoteText': "Tell me what you're working on and what kind of help you need. It speeds things up. For open-source questions, check GitHub Issues first, the answer might already be there.",

    // Support page
    'support.title': 'Support - Leszek Pomianowski',
    'support.heading': 'Professional support for architecture and business processes',
    'support.intro': 'Need help with system architecture, domain-driven design, business processes or quality control? I help teams review their architecture, fix performance problems and make sound technical decisions before mistakes get expensive.',
    'support.cta': 'Have a project in mind? Email <strong>support at lepo.co</strong> and let\'s talk about how I can help.',
    'support.whatICanHelp': 'How I can help',
    'support.consulting': 'Architecture and domain design',
    'support.consultingText': 'I review software architecture: microservices, distributed systems and legacy modernization. I model domains with DDD and track down performance problems. I base my advice on what worked, and what didn\'t, in real projects.',
    'support.guidance': 'Processes and quality',
    'support.guidanceText': 'I design business processes and quality control, from process models to automated tests. I also do code reviews when you want a second pair of eyes on something complex.',
    'support.ai': 'Specifications for AI',
    'support.aiText': 'I connect literature and domain knowledge into coherent specifications for AI models. The goal is models that work within guardrails and a clear spec instead of improvising. If you want AI to follow your business rules, I can help write them down.',
    'support.whyMe': 'Why work with me',
    'support.whyMeText': 'I build enterprise systems in the energy sector. My WPF UI library was the foundation for Fluent design in Microsoft PowerToys and a blueprint for Fluent UI in WPF, and Microsoft worked with me to bring parts of it into .NET. I know both sides: production systems that must not fail and open-source libraries others rely on.',
    'support.howItWorks': 'How we work together',
    'support.howItWorksText1': 'Questions and advice go by email. Complex topics get a video call. I usually reply within a day or two.',
    'support.howItWorksText2': 'I work remotely with teams mostly in Poland and Europe. For larger projects I can also come on site.',
    'support.gettingStarted': 'How to get started',
    'support.gettingStartedText1': 'Email <strong>support at lepo.co</strong> (replace "at" with @). Describe your project and the help you need. I will reply with a proposal for how and when we can start.',
    'support.gettingStartedText2': "Tell me about your project and I'll give you an honest answer on how I can help.",
    'support.tech': 'Tech I work with',
    'support.techText1': 'Architecture, domain-driven design, business processes, quality control, microservices, distributed systems, event sourcing, Podman, RabbitMQ, gRPC and Playwright testing. In code I mostly use .NET and C#, plus WPF for desktop.',
    'support.techText2': "I work alongside your team and bring expertise where it counts most. The goal is to spare you mistakes I've seen before and help you decide better.",

    // RSS
    'rss.title': 'Leszek Pomianowski lepo.co RSS Feed',
    'rss.description': 'Posts by Leszek Pomianowski about .NET, WPF, distributed systems and building things.',
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
    'post.noPosts': 'Brak postów. Zajrzyj tu wkrótce!',
    'post.noPostsForTag': 'Nie znaleziono postów z tym tagiem.',
    'post.postsFor': 'Posty dla:',

    // Pages
    'page.posts': 'Posty',
    'page.tags': 'Tagi',

    // 404
    '404.title': '404 - Nie znaleziono strony',
    '404.heading': '404 - Nie znaleziono strony...',
    '404.description': 'Tej strony nie ma. Mogła zostać przeniesiona, usunięta albo w adresie jest literówka.',
    '404.backHome': 'Powrót do strony głównej',

    // Index page
    'index.title': 'Leszek Pomianowski - lepo.co',
    'index.hello': 'Cześć, miło cię widzieć!',
    'index.intro': 'Jestem <strong><a href="https://github.com/pomianowski">Leszek Pomianowski</a></strong>. Projektuję architekturę, procesy biznesowe i kontrolę jakości, a potem buduję systemy, które to realizują. Po godzinach projektuję płytki PCB i automatyzuję dom w Home Assistant.',
    'index.built': 'Zrobiłem <a href="https://github.com/lepoco/wpfui">WPF UI</a>, nowoczesne kontrolki, które pomogły przenieść design Fluent do WPF, <a href="https://apps.microsoft.com/detail/9nh1p86h06cg">Radiograph</a> do monitorowania sprzętu, <a href="https://github.com/lepoco/mcp-camunda">Camunda MCP</a> łączący AI z procesami Camunda oraz <a href="https://octavam.com">Octavam</a>, aplikację do nauki gry na pianinie.',
    'index.ai': 'Ostatnio piszę specyfikacje oparte na wiedzy domenowej i literaturze, które trzymają modele AI w ustalonych granicach.',
    'index.findMe': 'Masz projekt, pomysł albo prototyp w połowie drogi? <a href="{contactUrl}">Napisz do mnie</a>. Znajdziesz mnie też na <a href="https://github.com/lepoco">GitHubie</a> i <a href="https://bsky.app/profile/leszekpomian.bsky.social" target="_blank" rel="noopener">Bluesky</a>, a moją pracę możesz wesprzeć przez <a href="https://github.com/sponsors/pomianowski">GitHub Sponsors</a>.',

    // About page
    'about.title': 'O Leszku Pomianowskim',
    'about.heading': 'O mnie',
    'about.intro': 'Cześć, jestem Leszek Pomianowski. Projektuję architekturę, procesy biznesowe i kontrolę jakości, a do tego buduję narzędzia dla programistów. Możesz mnie znać z WPF UI, biblioteki, która pomogła przenieść design Fluent do WPF.',
    'about.whatIDo': 'Czym się zajmuję',
    'about.whatIDoText1': 'Większość czasu poświęcam architekturze i projektowaniu domenowemu: modernizuję starsze systemy, buduję mikroserwisy i dbam o skalowanie. Pracuję z .NET, Podmanem, RabbitMQ, gRPC i event sourcingiem w Marten.',
    'about.whatIDoText2': 'Ostatnio testuję .NET 10, Aspire do orkiestracji i Playwrighta do testów E2E. Sprawdzam też, jak narzędzia AI, takie jak GitHub Copilot i Cursor, przyspieszają pracę. Moja obecna obsesja: specyfikacje oparte na wiedzy domenowej i literaturze, które trzymają modele AI w ustalonych granicach.',
    'about.projectsBuilt': 'Co zbudowałem',
    'about.wpfuiTitle': 'WPF UI',
    'about.wpfuiText': 'Biblioteka, dzięki której aplikacje WPF pasują do nowoczesnego Windowsa. Zacząłem ją, bo męczył mnie przestarzały wygląd aplikacji WPF. Ma dużo pobrań. Gdy Microsoft PowerToys przyjmował nowy design Fluent, WPF UI było jego fundamentem i stało się wzorcem dla Fluent UI w WPF. Moja aplikacja WPF UI Gallery zainspirowała Microsoftowe WPF Gallery, czyli pokaz kontrolek WPF. Microsoft współpracował też ze mną, żeby przenieść część biblioteki do .NET.',
    'about.radiographTitle': 'Radiograph',
    'about.radiographText': 'Aplikacja do monitorowania sprzętu w Microsoft Store. Zbudowałem ją na WPF UI i LibreHardwareMonitor, żeby śledzić temperatury i wydajność systemu. Ma przyzwoitą ocenę i działa na wielu komputerach.',
    'about.mcpTitle': 'Serwery MCP',
    'about.mcpText': 'Napisałem dwa serwery Model Context Protocol, które trafiły do oficjalnego repozytorium Dockera: jeden dla silników procesów Camunda, drugi dla specyfikacji OpenAPI. Pomagają asystentom AI korzystać z narzędzi biznesowych i dokumentacji API.',
    'about.octavamTitle': "Octavam",
    'about.octavamText': "Aplikacja do nauki gry na pianinie. Więcej na octavam.com.",
    'about.dayJob': 'W pracy',
    'about.dayJobText': 'Tworzę oprogramowanie enterprise, które musi działać bez przerwy dla wielu użytkowników. Głównie sektor energetyczny: starsze systemy do zmodernizowania bez psucia reszty, czyli dużo architektury rozproszonej i skalowania.',
    'about.otherThings': 'Poza pracą',
    'about.otherThingsText1': 'Kiedy mogę, wspieram LibreHardwareMonitor, głównie w obszarze SMBIOS. Utrzymuję kilka rozszerzeń Azure DevOps i pomagam przenosić stare serwisy ASP.NET na nowoczesne architektury.',
    'about.otherThingsText2': 'Mam dyplom informatyka i certyfikat NVIDIA z NLP. Po pracy gram w gry (jestem wielkim fanem Wiedźmina), projektuję płytki drukowane i automatyzuję dom w Home Assistant. Automatyka to mój ulubiony rodzaj problemów: od PCB po smart home lubię, gdy rzeczy działają same.',
    'about.collaborate': 'Chcesz współpracować?',
    'about.collaborateText': 'Chętnie wezmę udział w ciekawych projektach, szczególnie z architekturą, projektowaniem domenowym, procesami biznesowymi i narzędziami dla programistów. Pracuję z zespołami nad wyzwaniami technicznymi i lubię dobre problemy.',
    'about.findMe': 'Moje projekty znajdziesz na <a href="https://github.com/lepoco" target="_blank" rel="noopener">GitHubie</a>, a na <a href="https://bsky.app/profile/leszekpomian.bsky.social" target="_blank" rel="noopener">Bluesky</a> możesz się przywitać. Jeśli chcesz porozmawiać o projekcie, <a href="{contactUrl}">napisz do mnie</a>.',
    'about.photoAlt': 'Ja i mój pies, obaj robimy minę',
    'about.photoCaption': 'Ja i mój pies. On jest bardziej fotogeniczny.',

    // Contact page
    'contact.title': 'Kontakt - Leszek Pomianowski',
    'contact.heading': 'Kontakt',
    'contact.intro': 'Chcesz porozmawiać o projekcie albo zbudować coś razem? Chętnie pogadam o architekturze, procesach biznesowych, systemach rozproszonych, narzędziach dla programistów, a także o automatyce i elektronice.',
    'contact.email': 'Email',
    'contact.emailText': 'Napisz do mnie na: <strong>support at lepo.co</strong>',
    'contact.emailNote': 'Zamień "at" na @ w adresie. Zwykle odpisuję w ciągu dnia lub dwóch.',
    'contact.professional': 'Współpraca biznesowa',
    'contact.professionalText': 'Potrzebujesz konsultingu albo praktycznej pomocy technicznej? Zajrzyj na <a href="{supportUrl}">stronę wsparcia</a>, gdzie opisuję ofertę i jak zacząć.',
    'contact.findOnline': 'Znajdź mnie online',
    'contact.findOnlineText': 'Możesz mnie też znaleźć tutaj:',
    'contact.githubLabel': 'GitHub:',
    'contact.githubDesc': 'Tu trzymam swoje projekty',
    'contact.sponsorsLabel': 'GitHub Sponsors:',
    'contact.sponsorsDesc': 'Jeśli chcesz wesprzeć to, co buduję',
    'contact.blueskyLabel': 'Bluesky:',
    'contact.blueskyDesc': 'Wpadnij się przywitać',
    'contact.quickNote': 'Szybka uwaga',
    'contact.quickNoteText': 'Napisz, nad czym pracujesz i jakiej pomocy potrzebujesz. Przyspieszy to odpowiedź. W sprawach open-source zajrzyj najpierw do GitHub Issues, odpowiedź może już tam być.',

    // Support page
    'support.title': 'Wsparcie - Leszek Pomianowski',
    'support.heading': 'Profesjonalne wsparcie w architekturze i procesach biznesowych',
    'support.intro': 'Potrzebujesz pomocy przy architekturze systemów, projektowaniu domenowym, procesach biznesowych albo kontroli jakości? Pomagam zespołom przeglądać architekturę, usuwać problemy z wydajnością i podejmować trafne decyzje, zanim błędy zrobią się drogie.',
    'support.cta': 'Masz projekt? Napisz na <strong>support at lepo.co</strong>, a ustalimy, jak mogę pomóc.',
    'support.whatICanHelp': 'W czym mogę pomóc',
    'support.consulting': 'Architektura i projektowanie domenowe',
    'support.consultingText': 'Robię przeglądy architektury oprogramowania: mikroserwisy, systemy rozproszone i modernizacja starszego kodu. Modeluję domeny w DDD i szukam wąskich gardeł wydajności. Radzę na podstawie tego, co w prawdziwych projektach działało, a co nie.',
    'support.guidance': 'Procesy i jakość',
    'support.guidanceText': 'Projektuję procesy biznesowe i kontrolę jakości, od modeli procesów po testy automatyczne. Robię też code review, gdy chcesz mieć drugą parę oczu przy czymś złożonym.',
    'support.ai': 'Specyfikacje dla AI',
    'support.aiText': 'Łączę literaturę i wiedzę domenową w spójne specyfikacje dla modeli AI. Chodzi o modele, które działają w ramach guardrails i jasnej specyfikacji, zamiast improwizować. Jeśli chcesz, żeby AI trzymało się twoich reguł biznesowych, mogę pomóc je spisać.',
    'support.whyMe': 'Dlaczego ja',
    'support.whyMeText': 'Tworzę systemy enterprise w sektorze energetycznym. Moja biblioteka WPF UI była fundamentem designu Fluent w Microsoft PowerToys i wzorcem dla Fluent UI w WPF, a Microsoft współpracował ze mną nad przeniesieniem jej części do .NET. Znam obie strony: systemy produkcyjne, które nie mogą zawieść, i otwarte biblioteki, na których polegają inni.',
    'support.howItWorks': 'Jak współpracujemy',
    'support.howItWorksText1': 'Pytania i porady załatwiamy mailem, a złożone tematy na rozmowie wideo. Odpowiadam zwykle w ciągu dnia lub dwóch.',
    'support.howItWorksText2': 'Pracuję zdalnie, głównie z zespołami z Polski i Europy. Przy większych projektach mogę też przyjechać na miejsce.',
    'support.gettingStarted': 'Jak zacząć',
    'support.gettingStartedText1': 'Napisz na <strong>support at lepo.co</strong> (zamień "at" na @). Opisz projekt i potrzebną pomoc. Odpiszę z propozycją, jak i kiedy możemy ruszyć.',
    'support.gettingStartedText2': 'Opowiedz o projekcie, a szczerze odpowiem, jak mogę pomóc.',
    'support.tech': 'Technologie, z którymi pracuję',
    'support.techText1': 'Architektura, projektowanie domenowe, procesy biznesowe, kontrola jakości, mikroserwisy, systemy rozproszone, event sourcing, Podman, RabbitMQ, gRPC i testy w Playwright. W kodzie głównie .NET i C#, a na desktopie WPF.',
    'support.techText2': 'Pracuję obok twojego zespołu i wnoszę wiedzę tam, gdzie liczy się najbardziej. Chodzi o to, by oszczędzić ci błędów, które już widziałem, i pomóc w lepszych decyzjach.',

    // RSS
    'rss.title': 'Leszek Pomianowski lepo.co kanał RSS',
    'rss.description': 'Wpisy Leszka Pomianowskiego o .NET, WPF, systemach rozproszonych i budowaniu rzeczy.',
  },
} as const;
