import React from "react";
import Button from "../../components/Button"

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book your healthcare service today and experience the difference.
        </p>
      <Button title={"Book Your Slot Now"}/>
      </div>
    </section>
  );
};

export default CallToAction;
