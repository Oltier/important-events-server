# Important events server
ELTE Web Engineering important events server repo

In order to run the project, you must first install 
- **node**: https://www.scala-sbt.org/download.html
- **mongodb**: https://www.mongodb.com/download-center#community

Once installed and the PATH variable is set up

- Open up a Terminal
- Navigate to the project library (important-events/server)
- Run `npm install` in the terminal
- Run `npm start` from the terminal
- Open up a browser and navigate to `http://localhost:3000`
- You can browse the available API endpoints at `http://localhost:3000/explorer`

The application is using a mongodb, since sqlite connector for loopback is barely supported. I personally wanted to try out something new, instead of just copy&pasting everything. I hope this doesn't cause a problem.
