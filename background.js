user = "TWITCH_USER";
pass = "TWITCH_OAUTH";

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (command == "song") {
    let query = {
      audible: true,
      url: "https://*.youtube.com/*"
    };
    chrome.tabs.query(query, function(result) {
      console.log(result);
      if (result.length === 0) {
        ComfyJS.Say("There is curently no song playing");
      } else {
        let title = result[0].title;
        let url = result[0].url;
        ComfyJS.Say(title + " " + url);
      }
      //   let titleParse = result[0].title.split(" ");
      //   let titleParsed = titleParse.slice(1);
      //   let titleJoin = titleParsed.join(" ");
    });
  }
};
ComfyJS.Init(user, pass);
