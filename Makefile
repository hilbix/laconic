# I like makefiles

all:
	node minify.js || echo 'probably missing: npm -g install node-minify'
