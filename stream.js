const fs = require("fs");
const file = fs.createWriteStream("./bigfile.txt");

for (let i = 0; i < 1e6; i++) {
  file.write(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n"
  );
}
file.end();

const server = require("http").createServer();
server.on("request", (req, res) => {
  // en read normal trop long / lent
  // fs.readFile("./bigfile.txt", (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });
  // avec le stream
    const src = fs.createReadStream('./bigfile.txt');
    src.pipe(res)

});

server.listen(3001);
