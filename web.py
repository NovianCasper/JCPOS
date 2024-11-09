import http.server
import socketserver
import cgi
import logging
hostname = "localhost"
serverport = 443

class SimpleWeb(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path =='/':
            self.path = "ordering.html"
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
       
    def do_POST(self):
        logging.error(self.headers)
        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD':'POST',
                     'CONTENT_TYPE':self.headers['Content-Type'],
                     })
        for item in form.list:
            logging.error(item)
        http.server.SimpleHTTPRequestHandler.do_GET(self)

        with open("data.txt", "w") as file:
            for key in form.keys(): 
                file.write(str(form.getvalue(str(key))) + ",")

    
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