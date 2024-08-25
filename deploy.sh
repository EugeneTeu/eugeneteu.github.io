#!/usr/bin/env sh

# abort on errors
set -e

# build
bun build ./src/routes/index.tsx ==outfile=bundle.js

mv -f bundle.js ./public/bundle.js

# navigate into the build output directory
cd public

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'eugeneteu.me' > CNAME

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:eugeneteu/eugeneteu.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
cd -