#!/usr/bin/env bash

aws s3 sync . s3://foolhearts.com/ --exclude ".git/*" --exclude ".gitignore" --exclude ".DS_Store" --exclude "bower.json" --exclude "README.md" --exclude "circle.yml"
