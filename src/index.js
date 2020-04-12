import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// const styles = {
//   display: "flex",
//   flexWrap: "wrap",
//   padding:100
// };

ReactDOM.render(
  <div
    style={{
      textAlign: "center"
    }}
  >
    <div className="bot-img">
      <img
        width="200px"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        src="https://images.discordapp.net/avatars/691528986315980811/f960cd6de30f76c736222039a50b9abf.png?size=512"
        alt=""
      />
    </div>
    <div>
      <h1 style={{}}>Covid Statistics</h1>
      <div>
        <div>
          <a href="https://discordapp.com/api/oauth2/authorize?client_id=691528986315980811&permissions=604368049&scope=bot" class="btn red">
            Invite
          </a>
          <a href="https://top.gg/bot/691528986315980811/vote" class="btn green">
            Upvote
          </a>
          <a href="https://discord.gg/Qjvq4HP" class="btn blue">
            Server
          </a>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
