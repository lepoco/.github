---
title: 'Tworzenie serwerów MCP: jak sprawić, by AI działało z narzędziami biznesowymi'
description: 'Jak zbudowałem dwa serwery Model Context Protocol dla Camundy i OpenAPI, które trafiły do oficjalnego repozytorium MCP Dockera.'
pubDate: 2024-12-01
author: 'Leszek Pomianowski'
tags: ['mcp', 'docker', 'camunda', 'openapi', 'ai', 'automation']
---

Niedawno zbudowałem dwa serwery MCP (Model Context Protocol) i Docker dodał oba do swojego oficjalnego repozytorium MCP. Chciałem, żeby asystenci AI lepiej współpracowali z narzędziami biznesowymi, takimi jak silniki procesów Camunda i specyfikacje OpenAPI.

## Jaki problem rozwiązuje MCP

Model Context Protocol pozwala asystentom AI bezpiecznie łączyć się z zewnętrznymi systemami. AI nie opiera się wtedy tylko na danych treningowych. Może na bieżąco pracować z działającymi systemami biznesowymi, bazami danych i API.

To trochę tak, jakby Claude albo ChatGPT mógł zajrzeć do twoich workflow w Camundzie, uruchomić proces albo przeczytać dokumentację API. Nie musisz wklejać wszystkiego do czatu.

## Dwa serwery

Oba serwery są teraz dostępne jako oficjalne obrazy Dockera.

Camunda MCP Server (`mcp/camunda`) łączy asystentów AI z procesami w Camunda 7 Community Edition. Kod jest na GitHubie w lepoco/mcp-camunda.

OpenAPI MCP Server (`mcp/openapi`) pomaga asystentom AI rozumieć specyfikacje OpenAPI/Swagger i z nimi pracować. Kod jest na GitHubie w lepoco/openapi.client.

## Integracja z Camundą

Serwer Camunda udostępnia 12 narzędzi do pracy z silnikami procesów. Przy zarządzaniu procesami możesz wyświetlać i monitorować instancje BPMN. Przy zadaniach możesz kończyć zadania użytkownika. Możesz też monitorować i rozwiązywać incydenty, sięgać do danych procesu przez zmienne oraz wysyłać wiadomości do uruchomionych procesów.

```json
{
  "mcpServers": {
    "camunda": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "CAMUNDA_HOST", "mcp/camunda"],
      "env": {
        "CAMUNDA_HOST": "http://host.docker.internal:8080/"
      }
    }
  }
}
```

## OpenAPI MCP Server

OpenAPI MCP Server to zestaw narzędzi do pracy ze specyfikacjami API. Zawiera 5 narzędzi.

### Najważniejsze funkcje
- **Analiza specyfikacji**: walidacja dokumentów OpenAPI/Swagger
- **Generowanie kodu**: fragmenty kodu w C# dla dowolnej operacji
- **Generowanie cURL**: gotowe do użycia polecenia cURL
- **Analiza odpowiedzi**: możliwe odpowiedzi HTTP
- **Odkrywanie operacji**: lista wszystkich dostępnych endpointów

### Praktyczne zastosowania
- **Dokumentacja API**: automatyczne generowanie kodu klienta
- **Przepływy testowe**: skrypty testowe tworzone ze specyfikacji
- **Planowanie integracji**: szybkie poznanie możliwości API
- **Szybszy development**: mniej pisania boilerplate'u

## Jak zacząć

Chcesz wypróbować te serwery MCP? Oto jak to zrobić.

### Szybki start z Dockerem
```bash
# Enable Camunda MCP Server
docker mcp server enable camunda

# Enable OpenAPI MCP Server  
docker mcp server enable openapi
```

## Rozwój

Ekosystem MCP dopiero się rozkręca. Możesz wypróbować serwery w swoich workflow z AI, dołożyć coś do repozytoriów open source, podzielić się opinią i pomysłami na funkcje albo zbudować własny serwer MCP.

Oba projekty znajdziesz na GitHubie:
- [Camunda MCP Server](https://github.com/lepoco/mcp-camunda)
- [OpenAPI MCP Server](https://github.com/lepoco/openapi.client)

---

*Programowanie z AI opiera się na otwartych standardach, współpracy społeczności i dzieleniu się pomysłami. Chętnie zobaczę, co zbudujesz.*
