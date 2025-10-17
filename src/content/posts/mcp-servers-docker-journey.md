---
title: 'Building MCP Servers: Making AI Work with Business Tools'
description: 'How I built two Model Context Protocol servers for Camunda and OpenAPI that ended up in Dockers official MCP repository.'
pubDate: 2024-12-01
author: 'Leszek Pomianowski'
image: 'https://raw.githubusercontent.com/lepoco/mcp-camunda/refs/heads/main/build/icon.png'
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

## 🔍 OpenAPI MCP Server

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

## 🎯 Why MCP Matters

The Model Context Protocol represents a paradigm shift in how we think about AI integration:

### For Developers
- **Seamless Integration**: Connect AI with existing tools and systems
- **Standardized Approach**: Consistent way to expose functionality to AI
- **Security First**: Controlled access to sensitive operations
- **Ecosystem Growth**: Rich marketplace of available servers

### For Organizations  
- **Workflow Automation**: AI-powered process management
- **Knowledge Integration**: Connect AI with internal systems
- **Reduced Development Time**: Pre-built connectors for common tools
- **Scalable Solutions**: Docker-based deployment and management

## 🚀 Technical Implementation

Both servers are built with modern practices in mind:

### Architecture Highlights
- **Docker-first**: Easy deployment and scaling
- **Environment Configuration**: Flexible setup for different environments
- **Error Handling**: Robust error management and reporting
- **Documentation**: Comprehensive tool descriptions and examples

### Security Considerations
- **Isolated Execution**: Docker containers provide process isolation
- **Environment Variables**: Secure configuration management
- **Signed Images**: Docker supply chain security with Cosign
- **MIT Licensed**: Open-source transparency

## 📊 Community Impact

The response from the community has been overwhelming:

- **Camunda MCP**: 452+ pulls from Docker Hub
- **OpenAPI MCP**: 781+ pulls from Docker Hub
- **Multi-platform Support**: Compatible with Claude Desktop, Continue.dev, Cursor, VS Code, and more
- **Active Development**: Regular updates and feature additions

## 🔮 Future Developments

The MCP ecosystem is rapidly evolving, and I'm committed to expanding these tools:

### Planned Enhancements
- **Extended Camunda Support**: Additional process engine versions
- **More Code Generators**: Support for additional programming languages
- **Enhanced Documentation**: Interactive examples and tutorials
- **Performance Optimizations**: Faster response times and lower resource usage

## 💡 Getting Started

Want to try these MCP servers? Here's how:

### Quick Start with Docker
```bash
# Enable Camunda MCP Server
docker mcp server enable camunda

# Enable OpenAPI MCP Server  
docker mcp server enable openapi
```

### Integration Examples
Both servers work seamlessly with popular AI development tools:
- **Claude Desktop**: Direct integration for AI-powered workflows
- **Continue.dev**: Enhanced coding assistance
- **Cursor**: Intelligent code completion
- **VS Code**: Advanced development features

## 🙏 Acknowledgments

This achievement is the result of:
- **Docker's commitment** to the MCP ecosystem
- **Anthropic's vision** for the Model Context Protocol
- **Community feedback** and testing
- **Open-source collaboration** principles

## 🚀 Join the Movement

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
