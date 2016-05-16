# react-prototype
Prototype for ReactJs

Pre-requisites
 * node.js + npm

Run For Production
 * `./deploy/deploy-prod.sh`

Run For Development 'using node.js server to watch for any changes and apply them to browser'
 * `./deploy/deploy-dev.sh`
 * Then access project @ [http://demo-react.com:3000/public](http://demo-react.com:3000/public)

Demo expected output
 * [x] helloworld basic example
 * [ ] a crud with [add more] function and [add, edit, delete, done] actions, or simpler form
 * [x] style via scss using compass compiler
 * [x] webpack compiling for [jsx, es2015]
 * [x] webpack compiling for [scss]
 * [x] webpack minify and uglify in production environment
 * [x] webpack reflect changed chunks in browser instantly without a refresh
 * [x] determine best practice [XMLHttpRequest, fetch, ...etc] for ajax requests -> used fetch polyfill
 * [ ] determine right flow 'flux' and check redux
 * [ ] environment built via vagrant
