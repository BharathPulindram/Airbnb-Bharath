import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 65 stays • 5 september to 10 september • 2 guest </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancelling Flexibility</Button>
        <Button variant="outlined">Type of place!</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/05/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1-scaled.jpg?fit=2560%2C1707px&ssl=1"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House!"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathroom . wifi . kitchen . Free parking . Washing machine"
        star={4.73}
        price="1000/night"
        total="4500 total"
      />
      <SearchResult
        img="data:image/jpeg;base64,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"
        location="Room in center of Bangalore"
        title="Stay at this Excellent Bengaluru House!"
        description="2 guest . 1 bedroom . 1 bed . 2 shared bathroom . wifi . kitchen . Free parking . Washing machine"
        star={4.5}
        price="1999/night"
        total="3500 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxQDLOhAzMhAv2XeaRBxf1uLGuwaRwZcSEew&usqp=CAU"
        location="Private room in beachside of Goa"
        title="Stay at this spacious Beachside House!"
        description="4 guest . 3 bedroom . 3 bed . 2 shared bathroom . wifi . kitchen . Free parking . Washing machine"
        star={4.93}
        price="3000/night"
        total="5500 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc9olwNmWGb_32uRCanIFf79ozwCB_FXU7lw&usqp=CAU"
        location="Private room in heart of Thailand"
        title="Stay at this kingship Bangkok House!"
        description="2 guest . 2 bedroom . 1 bed . 2 shared bathroom . wifi . kitchen . Free parking . Washing machine"
        star={4.7}
        price="4000/night"
        total="7500 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9HBMSop8-VSgWI09a0c_uVrUYEvWKF-BxEA&usqp=CAU"
        location="Ruvisha Beach Hotel, Negombo – View"
        title="Luxury beach resort to enjoy!"
        description="5 guest . 2 bedroom . 4 bed . 3 shared bathroom . wifi . kitchen . Free parking . Washing machine"
        star={4.85}
        price="2500/night"
        total="6500 total"
      />
    </div>
  );
}

export default SearchPage;
