import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="services flex min-h-screen min-w-full">
      <div className="services-center mx-16 flex flex-col justify-center gap-20">
        <div className="font-serif text-5xl font-semibold">Services</div>
        <div className="services-cards flex justify-evenly">
          <ServiceCard
            img="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Find your Inspiration"
            text="Explore a variety of wedding experiences, from destination weddings in stunning locales to intimate elopements with your closest loved ones, all designed to make your special day truly unforgettable"
            button="Explore Now"
          />
          <ServiceCard
            img="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Plan your Budget"
            text="Budget Bliss: Simplify wedding finances with real-time tracking, payment schedules, and personalized suggestions. Stress-free wedding planning, now at your fingertips."
            button="Plan Now"
          />
          <ServiceCard
            img="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Create your Checklist"
            text="Organize your wedding seamlessly with real-time task tracking, deadlines, and personalized to-dos. Effortless wedding planning, now in your pocket."
            button="Create Now"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
