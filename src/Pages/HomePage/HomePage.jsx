import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import BestDealCard from "../../components/BestDealCard/BestDealCard";
import SpaItem from "../../components/SpaItem/SpaItem";
import TrendingItem from "../../components/TrendingItem/TrendingItem";
import "./HomePage.css";
function HomePage() {
  const [PopularShop, setPopularShop] = useState([]);
  const [bestDeals, setbestDeals] = useState([]);
  const getdata = () => {
    axios
      .get(`https://spaalon.harij.in/api/shop/PopularShop`)
      .then((res) => {
        console.log(res.data.popularShop);
        setPopularShop(res?.data?.popularShop);
      })
      .catch((err) => console.log(err));
  };
  const getDeals = () => {
    axios
      .get(`https://spaalon.harij.in/api/shop/ShopBestDeal`)
      .then((res) => {
        console.log(res.data);
        setbestDeals(res?.data?.bestshop);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getdata();
    getDeals();
  }, []);

  return (
    <div className="HomePage">
      <div className="Banner">
        <h1>Discover &amp; Book</h1>
        <h2>Looking for Best Spa &amp; Salon Near you ?</h2>
        <div className="searchSection rounded">
          <InputGroup className="bg-white mobileRounded ">
            <Input placeholder="What are you looking for" />
            <InputGroupText className="border-0 bg-transparent">
              <i className="bi bi-search"></i>
            </InputGroupText>
          </InputGroup>
          <div className="d-flex mobileRounded flex-fill bg-white ">
            <InputGroup >
              <Input  placeholder="Enter your Location" />
              <InputGroupText className="border-0 bg-transparent">
                <i className="bi bi-geo-alt-fill"></i>
              </InputGroupText>
            </InputGroup>
            <Button className="rounded-1 m-1 bg-danger border-0 px-4">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="trendingSection ">
        <div className="servicesContainer">
          <div class="services">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" />
            <p>Salon For Women</p>
          </div>
          <div class="services">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png" />
            <p>Hair,Skin &amp; Nails</p>
          </div>
          <div class="services">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" />
            <p>Women's Therapies</p>
          </div>
          <div class="services">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" />
            <p>Salon For Men</p>
          </div>
          <div class="services">
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" />
            <p>Men's Therapy</p>
          </div>
        </div>
        <h1>What's Trending</h1>
        <h2>Let's not wait for the "Perfect Look"</h2>
        <div className="TrendingItems flex-wrap d-flex justify-content-evenly m-5">
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </div>
      </div>

      <div className="popularSpa ">
        <h1>Popular Spa & Salon</h1>
        <h2>We want you to look Fabulous</h2>
        <div className="TrendingItems flex-wrap d-flex justify-content-evenly m-5">
          {PopularShop?.map((item, id) => {
            return <SpaItem {...item} key={id} />;
          })}

          {/* <SpaItem />
          <SpaItem />
          <SpaItem /> */}
        </div>
      </div>

      <div className="banner2">
        <div className="bannerimageContainer">
          <div>
            <h3>SPAALON</h3>
            <h1>More than 3000 Spas &amp; Salons</h1>
            <h2>Book an appointment now within seconds</h2>
            <Button className="bg-danger py-2 px-4">View All</Button>
          </div>
        </div>
      </div>
      <div className="BestDealsBox">
        <h2>Best Deals</h2>{" "}
        <h3 className="text-secondary pb-2">
          Come experience the best haircut and color services
        </h3>
        <div className="bestDeals flex-wrap">
          {bestDeals?.map((item, id) => {
            return <BestDealCard {...item} key={id} />;
          })}

          {/* <BestDealCard />
          <BestDealCard />
          <BestDealCard /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
