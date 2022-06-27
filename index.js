const server = require("./server/server");

const start = async () => {
	try {
		await server.listen({
			port: 5000,
		});
		server.log.info(server.server.address());
		server.log.info("Server is running");
		server.log.info("Server on port 5000");
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

function main() {
	start();
}

main();
