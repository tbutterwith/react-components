import React from "react";
import HeroHeader from "./HeroHeader";
import forest from "../../../assets/images/forest.jpg";
import city from "../../../assets/images/city.jpg";

const options = {
  title: "Components/HeroHeader",
  component: HeroHeader,
};

export default options;

const forestStory = ({ title, subtitle }) => (
  <HeroHeader img={forest} title={title} subtitle={subtitle} />
);

export const Forest = forestStory.bind({});

Forest.args = {
  title: "In the Forest",
  subtitle: "Cool things live here",
};

const cityStory = ({ title, subtitle, color }) => (
  <HeroHeader img={city} title={title} subtitle={subtitle} color={color} />
);

export const City = cityStory.bind({});

City.args = {
  title: "With a city Background",
  subtitle: "So urban, wow.",
  color: "",
};
