gendiff:
	node bin/gendiff.js

install: deps-install hooks

hooks:
	npx simple-git-hooks

deps-install:
	npm ci --legacy-peer-deps

deps-update:
	npx ncu -u

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .