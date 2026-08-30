
<!-- FIXME: path will be set all over the website -->
<!-- FIXME: in loader js uncomment code -->




# for installation npm packages
    npm i
    or
    npm install --save-dev


# commands
# --- for development -----
    gulp

# --- for production! -----
    gulp --production


# RTL description example:
body {
    font-family: "Droid Sans", sans-serif #{"/*rtl:prepend:'Droid Arabic Kufi',*/"};
    font-size: 46px #{"/*rtl:8px*/"};
    direction: ltr;
}



# Figma desktop app:
- preference ==> Enable Dev Mode MCP Server


# Visual studio code
setting == find ==> mcp > settings.json

"chat.mcp.discovery.enabled": true,
  "mcp": {
    "servers": {
      "Figma Dev Mode MCP": {
        "type": "sse",
        "url": "http://127.0.0.1:3845/sse"
      }
    }
  },
  "chat.agent.enabled": true



# for cross checking  go to copilot chat tools
- search == should be checked mcp server

# copilot chat
- #get_code figma-url's section


