#!/usr/bin/env sh
set -e
vuepress build --debug
cd .vuepress/dist

git init
git checkout -b page
git add .
git commit -m 'VuePress: Deploy'
git push -f git@github.com:jiesou/loliis.top.git page
cd -