# react-prototype
Prototype for ReactJs

Pre-requisites
 * node.js + npm

Run For Production
 * `./deploy/deploy-prod.sh`

Run For Development 'using node.js server instead of php'
 * `./deploy/deploy-dev.sh`
 * Then access project @ [http://demo-react.com:3000/public](http://demo-react.com:3000/public)

Demo expected output
 * helloworld basic example
 * a crud with [add more] function and [add, edit, delete, done] actions, or simpler form
 * style via scss to page
 * webpack compiling for [jsx, es2015 and scss]
 * webpack minify and uglify in production environment
 * webpack reflect changed chunks in browser instantly without a refresh
 * determine best practice [flux, redux, fetch, ...etc] for ajax requests
 * environment built via vagrant
