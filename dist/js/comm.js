$(".card").flip({
  axis: "y",
  trigger: "hover",
});

document.addEventListener("DOMContentLoaded", () => {
  new window["Cursor"]({
    targets: ["a"],
  });
});
