#!/bin/sh

mkdir -p src/generated
./node_modules/.bin/pbjs -t static-module -w commonjs -o src/generated/engine.js  protos/engine.proto
./node_modules/.bin/pbts -o src/generated/engine.d.ts src/generated/engine.js