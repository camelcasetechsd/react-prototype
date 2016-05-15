#!/bin/bash

#Install npm
npm update npm
npm install

#Install compass ans use it to compile scss to css 'if webpack is not doing that function'
#Do not forget to add '@import "compass/css3";' at the beginning of .scss files
# sudo gem install compass
# compass compile
