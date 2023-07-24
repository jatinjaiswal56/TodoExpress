var global = window;

const inputelement = document.getElementById("input-box");
console.log("Script is running");
function addhandler(event) {
  console.log("Handler triggered");
  console.log("button clicked");
  const res = inputelement.value;
  console.log(res);
  //if the inputelemt.value is non truth then it should show error notification alert
  if (!res) {
    alert("Text cant be empty");
    return;
  } else {
    fetch("/create-task", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        task: res,
      }),

      headers: { "Content-Type": "application/json" },
    })
      .then((x) => {})
      .catch((err) => {
        console.log(err);
      });
    //making input feild again empty
    inputelement.value = "";
    location.reload();
  }
}

function deleteHandler(id) {
  console.log("delete triggered");
  console.log(id);
  fetch("/delete-task", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      id: id,
    }),

    headers: { "Content-Type": "application/json" },
  });
  location.reload();
}
