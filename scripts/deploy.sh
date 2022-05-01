#!/usr/bin/env sh
set -e
npm run build
cd .vuepress/dist

git init
git checkout -b page
git add -A
git commit -m 'VuePress: Deploy'
git push -f git@github.com:jiesou/loliis.top.git page
cd -