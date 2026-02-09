#!/usr/bin/env bash

if [ "${1}" = "dev" ]
then
    printf 'These are the test cases for dev.\n'
    npm install
    npm run test:ci
    printf 'The test cases are completed.'
fi
