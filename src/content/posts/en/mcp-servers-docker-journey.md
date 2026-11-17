---
title: 'Building MCP Servers: Making AI Work with Business Tools'
description: 'How I built two Model Context Protocol servers for Camunda and OpenAPI that ended up in Dockers official MCP repository.'
pubDate: 2024-12-01
author: 'Leszek Pomianowski'
tags: ['mcp', 'docker', 'camunda', 'openapi', 'ai', 'automation']
---

I recently built two MCP (Model Context Protocol) servers, and Docker added both to its official MCP repository. I wanted AI assistants to work better with business tools like Camunda process engines and OpenAPI specifications.

## What MCP Solves

The Model Context Protocol lets AI assistants connect to external systems securely. Instead of relying only on training data, the AI can work with live business systems, databases, and APIs in real time.

It's like giving Claude or ChatGPT the ability to check your Camunda workflows, trigger processes, or read your API documentation. You don't have to copy-paste everything into the chat.

## The Two Servers

Both servers are now available as official Docker images.

The Camunda MCP Server (`mcp/camunda`) connects AI assistants to Camunda 7 Community Edition processes. The code is at lepoco/mcp-camunda on GitHub.

The OpenAPI MCP Server (`mcp/openapi`) helps AI assistants understand and work with OpenAPI/Swagger specifications. The code is at lepoco/openapi.client on GitHub.

## Camunda Integration

The Camunda server provides 12 tools for working with process engines. For process management, you can list and monitor BPMN instances. For tasks, you can complete user tasks. You can also monitor and resolve incidents, access process data through variables, and send messages to running processes.

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

The OpenAPI MCP Server is a toolkit for working with API specifications. It provides 5 tools.

### Key Features
- **Specification Analysis**: Validate OpenAPI/Swagger documents
- **Code Generation**: Create C# snippets for any operation
- **cURL Generation**: Generate ready-to-use cURL commands
- **Response Analysis**: Understand possible HTTP responses
- **Operation Discovery**: List all available endpoints

### Practical Applications
- **API Documentation**: Automatically generate client code
- **Testing Workflows**: Create test scripts from specifications
- **Integration Planning**: Understand API capabilities quickly
- **Development Acceleration**: Reduce boilerplate code writing

## Getting Started

Want to try these MCP servers? Here's how.

### Quick Start with Docker
```bash
# Enable Camunda MCP Server
docker mcp server enable camunda

# Enable OpenAPI MCP Server  
docker mcp server enable openapi
```

## Development

The MCP ecosystem is just getting started. You can try the servers in your AI workflows, contribute to the open-source repositories, share feedback and feature requests, or build your own MCP servers.

You can find both projects on GitHub:
- [Camunda MCP Server](https://github.com/lepoco/mcp-camunda)
- [OpenAPI MCP Server](https://github.com/lepoco/openapi.client)

---

*AI-powered development is built on open standards, community collaboration, and shared innovation. I'd love to see what you build.*
