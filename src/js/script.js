// import { fetchEvents } from "./fetchEvents";
import FeatureEvent from "./FeaturedEvent";
import Event from "./Event";

const feth_url = "https://test-api.codingbootcamp.cz/api/2fe11b3c/events";

const fetchFeaturedEvent = async () => {
  const res = await fetch(feth_url);
  const event_list = await res.json();
  const featuredEvent = new FeatureEvent(event_list);
};
fetchFeaturedEvent();

const fetchEvents = async () => {
  const res = await fetch(feth_url);
  const event_list = await res.json();
  console.log(event_list);
  event_list.forEach((el, i) => {
    const newEvent = new Event(event_list[i]);
  });
};
fetchEvents();

// script for the register form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// script for modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
