import {createServer} from 'node:http';

const server = createServer((request, response) => {
    response.write("oi")

    return response.end()
})

server.listen(3331)