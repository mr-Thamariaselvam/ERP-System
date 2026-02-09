#!/usr/bin/env bash

if [ "${1}" = "dev" ]
then
    printf 'The current target branch is a dev.\n'
else
    printf 'The current target branch is not a dev.\n'
    printf "${1}"
    exit 1;
fi
