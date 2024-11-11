import http.server
import socketserver
hostname = "localhost"
serverport = 8000

## Handles HTTP Requests
class SimpleWeb(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
    
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>Title goes here.</title></head>/html>","utf-8"))
        http.server.SimpleHTTPRequestHandler.do_GET(self)

    
handler = SimpleWeb
if __name__ == "__main__":
    My_Web = socketserver.TCPServer(("",serverport), handler)
    print("Web server started at " + str(hostname) + ":" + str(serverport))
    try:
        My_Web.serve_forever()
    except KeyboardInterrupt:
        pass

    My_Web.server_close()
    print("Server has Stopped")