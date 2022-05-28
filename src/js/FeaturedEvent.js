class FeatureEvent {
  constructor(event_list) {
    this.event_list = event_list;
    this.createFeaturedEvent();
  }
  //method we use to create new instances from this Class
  createFeaturedEvent = () => {
    const main = document.querySelector("main");
    const newFeaturedEvent = document.createElement("section");
    newFeaturedEvent.setAttribute("class", "featured__event");

    newFeaturedEvent.innerHTML = `
   
        <img
          src="${this.event_list[0].image_url}"
          alt="featured image"
          class="featured__img"
        />
        <div>
          <div class="featured__event_header"> ${this.event_list[0].name}</div>
          <div class="featured__event_description">
           ${this.event_list[0].description}
          </div>
          <button class='featured__event_btn'>Register</button>
        </div>
       `;

    //get event data from API and use for  instance
    main.appendChild(newFeaturedEvent);
  };
}

export default FeatureEvent;
