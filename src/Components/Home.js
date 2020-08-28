import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire home"
          description="Comfortable private places, with room for friends or family"
          price="1000"
        />
        <Card
          src="https://spaceoptimized.com/wp-content/uploads/2018/03/space-optimized-airbnb-small-apartment-rentals-9.png"
          title="Luxury Bedroom "
          description="Awesome room for enjoyment !! Bangalore "
          price="3000"
        />
        <Card
          src="https://s3.amazonaws.com/xcaliber/images/23/l/add0da0b-3916-4c30-91bf-325bb07cdd86_Superior1.jpg"
          title="Beachside Room"
          description="Patong Beach Hotel | Hotel hot deals from across Asia, Thailand"
          price="5000"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://spaceoptimized.com/wp-content/uploads/2018/03/space-optimized-airbnb-small-apartment-rentals-9.png"
          title="Modern Bedroom design"
          description="Excellent with room for friends or family"
          price="2000"
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Mumbai"
          description="Superhost with a stunning view of beachside in Sunny Mumbai"
          price="5000"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Pent house in London"
          description="Enjoy the amazing sites of London with this stunning penthouse"
          price="3000"
        />
      </div>
    </div>
  );
}

export default Home;
