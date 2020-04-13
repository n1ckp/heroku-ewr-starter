server: node_modules
	npm i
	npm run dev

deps-client:
	npm i --prefix client

client: deps-client
	npm start --prefix client
