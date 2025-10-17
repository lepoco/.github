---
title: 'Building MCP Servers: From Idea to Official Docker Repository'
description: 'The journey of creating two Model Context Protocol servers - Camunda and OpenAPI - that made it to the official Docker MCP repository.'
pubDate: 2024-12-01
author: 'Leszek Pomianowski'
image: 'https://raw.githubusercontent.com/lepoco/mcp-camunda/refs/heads/main/build/icon.png'
tags: ['mcp', 'docker', 'camunda', 'openapi', 'ai', 'automation']
---

I'm excited to share the story behind my latest open-source contributions: **two MCP (Model Context Protocol) servers** that have been officially published in Docker's MCP repository. This journey represents the intersection of AI, automation, and developer tooling.

## 🤖 What is MCP?

The **Model Context Protocol** is a new standard that enables AI assistants to securely connect with external data sources and tools. It's like giving AI the ability to interact with your existing systems and workflows in a structured, secure way.

## 🐳 Official Docker Recognition

Both of my MCP servers are now part of the **official Docker MCP repository**:

### 1. Camunda MCP Server
- **Docker Image**: `mcp/camunda`
- **GitHub**: [lepoco/mcp-camunda](https://github.com/lepoco/mcp-camunda)
- **Purpose**: Interact with Camunda 7 Community Edition Engine

### 2. OpenAPI MCP Server  
- **Docker Image**: `mcp/openapi`
- **GitHub**: [lepoco/openapi.client](https://github.com/lepoco/openapi.client)
- **Purpose**: Work with OpenAPI/Swagger specifications

## 🔧 Camunda MCP Server

The Camunda MCP Server bridges AI assistants with Camunda's powerful process engine, offering **12 specialized tools**:

### Core Capabilities
- **Process Management**: List, count, and monitor BPMN process instances
- **Task Operations**: Complete user tasks and manage workflows
- **Incident Handling**: Monitor and resolve process incidents
- **Variable Management**: Access and manipulate process variables
- **Message Integration**: Send messages to running processes

### Example Usage
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
