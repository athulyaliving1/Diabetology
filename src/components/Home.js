import React from "react";
import Banner from "./Basic/Banner";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";
import Content from "./Content";
import Grid from "./Grid";
import TestimonialNew from "./TestimonialNew";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
      <Content />
      <Grid />
      <TestimonialNew />
    </div>
  );
}

export default Home;
