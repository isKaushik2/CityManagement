import React from "react";
import "./VolunteerPage.css";
import Navbar from "../../NavBar/Navbar";
import VolunteerCard from "./VolunteerCard";
import Footer from "../../Footer/Footer";
function VolunteerPage() {
  const cards = [
    {
      id: 1,
      type: "Environmental",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 2,
      type: "Senior",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 3,
      type: "Comunity",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 4,
      type: "Youth",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 5,
      type: "Senior",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 6,
      type: "Youth",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 7,
      type: "Comunity",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 8,
      type: "Senior",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
    {
      id: 9,
      type: "Comunity",
      description:
        "Help us save environment. Just donate us your kidney. Clean the park do't be like that",
      location: "Banasree,Dhaka",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="Volunteer_bg">
        <div className="head_line">
          <h3>Make a Difference</h3>
          <h3 className="green">In Your City</h3>
          <p>
            Join thousands of citizens shaping the future of our urban
            landscape. Choose a category below and start your journey as
            vilunteer today
          </p>
        </div>
        <div className="card">
          {cards.map((vcard) => (
            <VolunteerCard vcard={vcard} key={vcard.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VolunteerPage;
