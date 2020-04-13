deps-server:
	npm i

server: deps-server
	npm run dev

deps-client:
	npm i --prefix client

client: deps-client
	npm start --prefix client
