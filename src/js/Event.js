class Event {
  constructor(event_list) {
    this.event_list = event_list;

    this.createEvent();
  }
  // create new instance of Ivent with data from API
  createEvent = () => {
    const event_section = document.querySelector(".events");
    const newEvent = document.createElement("div");
    newEvent.setAttribute("class", "event__card");
    newEvent.setAttribute(
      "style",
      `background-image: url('${this.event_list.image_url}');`
    );
    newEvent.innerHTML = `       
          <div class="event__card_name">${this.event_list.name}</div>
          <button class="event__card_btn">Read more</button>
        `;
    event_section.appendChild(newEvent);

    // create button with id = index from data array
    // const see_btn = document.createElement("button");
    // see_btn.setAttribute("id", `${this.data.id}`);

    // see_btn.innerHTML = "See more";

    // newEvent.appendChild(see_btn);
  };
}

export default Event;
