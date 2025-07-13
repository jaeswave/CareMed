import React from "react";
import Button from "../../components/Button";

const CallToAction = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center bg-customBlue text-white p-5 lg:p-10">
      {" "}
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book your healthcare service today and experience the difference.
        </p>
        <Button
          title={"Book Your Slot Now"}
          className="bg-white !text-customBlue "
        />
      </div>
    </section>
  );
};

export default CallToAction;
