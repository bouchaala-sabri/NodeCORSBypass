# NodeCORSBypass

## Description
A simple Node.js app to bypass CORS restrictions for development purposes. This app serves as a proxy to make requests to other domains on your behalf.

## Demo
[Check out the live demo here.](https://corss-bypass.onrender.com/http%3A%2F%2Fexample.com)

## Usage
Start the server with `node server.js` and make requests to `http://localhost:3000/{url}` where `{url}` is the URL of the resource you want to access.

### Example
To fetch the content from `http://example.com`, you would use the following URL with your proxy: `https://corss-bypass.onrender.com/http%3A%2F%2Fexample.com`

## Installation
1. Clone this repository: `git clone https://github.com/bouchaala-sabri/NodeCORSBypass.git`
2. Navigate to the project directory: `cd NodeCORSBypass`
3. Install the dependencies: `npm install`

## Contributing
Contributions are welcome! Please read the contributing guidelines before getting started.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
