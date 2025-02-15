console.log("Hello World");

function fetchJoke() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      if ($(document.body).find("h3").length) {
        $(document.body).find("h3").remove();
        $(document.body).find("img").remove();
      }
      $(document.body).append(
        $("<h3>", {
          text: data.value,
        }),

        $("<img>", {
          src: data.icon_url,
        })
      );
    },
    error: function (error) {
      console.log(error);
    },
  });
}

$("#joke").on("click", fetchJoke);
