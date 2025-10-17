---
title: 'Building MCP Servers: Making AI Work with Business Tools'
description: 'How I built two Model Context Protocol servers for Camunda and OpenAPI that ended up in Dockers official MCP repository.'
pubDate: 2024-12-01
author: 'Leszek Pomianowski'
tags: ['mcp', 'docker', 'camunda', 'openapi', 'ai', 'automation']
---

I recently built two MCP (Model Context Protocol) servers that have been added to Docker's official MCP repository. The idea was to make AI assistants work better with business tools like Camunda process engines and OpenAPI specifications.

## What MCP Solves

The Model Context Protocol is a way for AI assistants to connect with external systems securely. Instead of the AI just knowing what's in its training data, it can interact with live business systems, databases, and APIs in real-time.

Think of it like giving Claude or ChatGPT the ability to check your Camunda workflows, trigger processes, or understand your API documentation without you having to copy-paste everything into the chat.

## The Two Servers

Both servers are now available as official Docker images:

**Camunda MCP Server** (`mcp/camunda`) connects AI assistants to Camunda 7 Community Edition processes. You can find the code at lepoco/mcp-camunda on GitHub.

**OpenAPI MCP Server** (`mcp/openapi`) helps AI assistants understand and work with OpenAPI/Swagger specifications. The code is at lepoco/openapi.client on GitHub.

## Camunda Integration

The Camunda server provides 12 tools for interacting with process engines. It handles process management like listing and monitoring BPMN instances, task operations for completing user tasks, incident handling for monitoring and resolving issues, variable management for accessing process data, and message integration for sending messages to running processes.

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

The OpenAPI MCP Server is a comprehensive toolkit for working with API specifications, providing **5 essential tools**:

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

Want to try these MCP servers? Here's how:

### Quick Start with Docker
```bash
# Enable Camunda MCP Server
docker mcp server enable camunda

# Enable OpenAPI MCP Server  
docker mcp server enable openapi
```

## Development

The MCP ecosystem is just getting started. Here's how you can get involved:

- **Try the servers** in your AI workflows
- **Contribute** to the open-source repositories
- **Share feedback** and feature requests
- **Build your own** MCP servers

You can find both projects on GitHub:
- [Camunda MCP Server](https://github.com/lepoco/mcp-camunda)
- [OpenAPI MCP Server](https://github.com/lepoco/openapi.client)

---

*The future of AI-powered development is here, and it's built on open standards, community collaboration, and shared innovation. Let's build something amazing together.*
