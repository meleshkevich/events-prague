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
