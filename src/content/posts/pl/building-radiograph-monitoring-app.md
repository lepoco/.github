---
title: 'Jak powstał Radiograph, aplikacja do monitorowania sprzętu'
description: 'Jak zbudowałem Radiograph, narzędzie do monitorowania sprzętu, które jakimś cudem trafiło na ponad 65 000 komputerów.'
pubDate: 2024-09-10
author: 'Leszek Pomianowski'
tags: ['radiograph', 'wpf', 'hardware-monitoring', 'microsoft-store', 'librehardwaremonitor']
---

Radiograph zacząłem robić, bo wkurzały mnie programy do monitorowania sprzętu. Wszystkie wyglądały, jakby powstały w 2005 roku, i działały mniej więcej tak samo. Chciałem czegoś, co wygląda przyzwoicie i pokazuje potrzebne informacje bez dyplomu z informatyki.

## Dlaczego go zbudowałem

Większość takich aplikacji należy do jednej z dwóch grup. Albo są potężne, ale brzydkie, albo wyglądają znośnie, ale nic pożytecznego nie mówią. Regularnie sprawdzam temperatury, kiedy mocno obciążam komputer. Dość miałem mrużenia oczu nad malutkim tekstem i szukania czegokolwiek w niejasnych menu.

Od jakiegoś czasu pracowałem nad WPF UI, więc to była dobra okazja, żeby zrobić coś, co pasuje do nowoczesnego Windowsa. Plan był prosty: ma dobrze działać, ładnie wyglądać i nie być przekombinowane.

## Solidne fundamenty

Do samego monitorowania użyłem LibreHardwareMonitor. To on odwala brudną robotę: rozmawia ze sprzętem i odczytuje dane z czujników. Z czasem dołożyłem do niego kilka poprawek, głównie przy obsłudze SMBIOS i informacjach o płycie głównej.

Interfejs powstał na WPF UI, dzięki czemu ma natywny wygląd Windowsa 11 i nie muszę wymyślać każdej kontrolki od nowa. Motywy ogarnia automatycznie, więc gdy przełączasz się między jasnym a ciemnym trybem, aplikacja idzie za tobą.

## Kontekst projektu

Ten projekt leży tam, gdzie spotyka się kilka rzeczy, nad którymi pracuję. Wkład w LibreHardwareMonitor wziął się z realnych potrzeb przy budowaniu Radiographa. WPF UI zyskał, bo używałem go w prawdziwych aplikacjach. A udana aplikacja w Microsoft Store otworzyła drzwi do innych projektów i współprac.

Open source i praktyczne tworzenie aplikacji napędzają się nawzajem. Kiedy ludzie naprawdę korzystają z tego, co zrobisz, zauważasz problemy i możliwości, których nie zobaczysz, pracując nad bibliotekami w oderwaniu od życia.
