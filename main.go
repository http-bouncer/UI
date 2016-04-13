package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	// Sets up the handlers and listen on port 8080
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./public/"))))
	http.Handle("/", http.FileServer(http.Dir("./src/views/")))

	// Default to :8080 if not defined via environmental variable.
	var listen string = os.Getenv("LISTEN")

	if listen == "" {
		listen = ":8080"
	}

	log.Println("listening on", listen)
	http.ListenAndServe(listen, nil)
}
