user = "TWITCH_USER";
pass = "TWITCH_OAUTH";

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command == "song") {
    let query = {
      audible: true,
      url: "https://*.youtube.com/*"
    };
    chrome.tabs.query(query, function(result) {
      console.log(result);
      //   let titleParse = result[0].title.split(" ");
      //   let titleParsed = titleParse.slice(1);
      //   let titleJoin = titleParsed.join(" ");
      let title = result[0].title;
      let url = result[0].url;
      ComfyJS.Say(title + " " + url);
    });
  }
};
ComfyJS.Init(user, pass);
