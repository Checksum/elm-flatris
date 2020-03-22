import Peer from "peerjs";
import { Elm } from "./Main.elm";

const app = Elm.Main.init({
  node: document.getElementById("root")
});

app.ports.save.subscribe(msg => console.log(msg));

const peer = new Peer();

peer.on("open", id => {
  console.log(id);
});

const conn = peer.connect("another-peers-id");
conn.on("open", () => {
  conn.send("hi!");
});

peer.on("connection", conn => {
  console.log("done");
  conn.on("data", data => {
    // Will print 'hi!'
    console.log(data);
  });
  conn.on("open", () => {
    conn.send("hello!");
  });
});
