# ReactMB

A message board build on React and Node

Try it out by visiting [http://104.198.225.69/](http://104.198.225.69/). This project was built for demonstration and is not formatted for mobile.

## Installation and Setup

1. Spin up your MySQL server
2. In the command prompt, enter `mysql -u [your username] -p ReactMB < reactmb.sql`
3. Add your MySQL credentials to the app.js file
4. In the ReactMB directory, run `npm install`
5. Open localhost in your browser

Built with:

Go v1.5.1 linux/amd64  
React (with addons) v0.14.1  
Babel v6.2.0 (babel-core 6.2.1) (babel-preset-react 6.1.18)

1. `go version` to check your Go version.
2. Make sure your `GOPATH` environment variable is set.
3. `go get` to get the required Go packages.
4. `go build` to build the binary.
5. `sudo setcap "cap_net_bind_service=+ep" resounden`  
    Allows the binary to bind port 80 (and &lt;1024) as a non-root user.
6. Enter a valid Soundcloud App Client ID in `config.json` and save.
7. `./resounden` to start Resounden.

To compile the resounden.jsx React code into a regular JavaScript file, you must use Babel with the React preset:

1. `cd public/js` to browse to the JavaScript directory.
2. `npm install babel-preset-react` to install the React preset for Babel.
3. `babel --presets "react" -o resounden.js resounden.jsx`