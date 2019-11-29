#!/usr/bin/env bash

for file in $(pwd)/assets/*
do
  if [ -d "$file" ]; then
      echo "copy $file to dist..."
      cp -rf "$file" ./dist
  elif [ -f "$file" ]; then
      echo "$file is file"
  fi
done
