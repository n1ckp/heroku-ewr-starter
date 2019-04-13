node_modules: package.json
	npm i

frontend/node_modules: frontend/package.json
	npm i --prefix frontend

be: node_modules
	npm start

fe: frontend/node_modules
	npm start --prefix frontend
