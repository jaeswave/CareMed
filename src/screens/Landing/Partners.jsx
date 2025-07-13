import React from "react";
import Partner from "../../components/Partner";
import { partnerBenefits } from "../../data";
import Button from "../../components/Button";

const Partners = () => {
  const half = Math.ceil(partnerBenefits.length / 2);
  const col1 = partnerBenefits.slice(0, half);
  const col2 = partnerBenefits.slice(half);

  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gradient-to-br from-[#fff5f5] to-[#e6f0ff] p-5 lg:p-10">
      {" "}
      <div className="w-[90%] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Are you a clinic, diagnostic center, or hospital with available
            capacity? Caremed Connect helps you generate new revenue by making
            your idle time bookable by individuals, employers, and payers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
            <div className="space-y-4">
              {col1.map((item, idx) => (
                <Partner key={idx} text={item} />
              ))}
            </div>
            <div className="space-y-4">
              {col2.map((item, idx) => (
                <Partner key={idx} text={item} />
              ))}
            </div>
          </div>

          <Button
            title={"Book Your Slot Now"}
            className="!bg-white !text-customBlue border-2 border-customBlue"
          />
          <p className="mt-4 italic">
            Partner with us and let your empty slots serve more lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
