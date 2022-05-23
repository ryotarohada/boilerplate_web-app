#!/bin/bash

# frontend
cd frontend
yarn install

# backend
cd ../backend/api
yarn install

# rootに移動
cd ../../
