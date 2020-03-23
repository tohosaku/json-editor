#!/bin/bash

chmod 600 ~/.ssh/id_rsa
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

git remote add docs git@github.com:$DOC_REPO  >/dev/null 2>&1
git subtree --prefix=docs push docs master  >/dev/null 2>&1
