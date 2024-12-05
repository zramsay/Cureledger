#!/bin/bash

PKG_DIR="./packages/nextjs"
OUTPUT_DIR="${PKG_DIR}/.next"
DEST_DIR=${1:-/data}

if [[ -d "$DEST_DIR" ]]; then
  echo "${DEST_DIR} already exists." 1>&2
  exit 1
fi

yarn --cwd ${PKG_DIR} install || exit 1
yarn --cwd ${PKG_DIR} build || exit 1

if [[ ! -d "$OUTPUT_DIR" ]]; then
  echo "Missing output directory: $OUTPUT_DIR" 1>&2
  exit 1
fi

mv "$OUTPUT_DIR" "$DEST_DIR"

