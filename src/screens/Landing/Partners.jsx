import React from "react";
import Partner from "../../components/Partner";
import { partnerBenefits } from "../../data";

const Partners = () => {
  const half = Math.ceil(partnerBenefits.length / 2);
  const col1 = partnerBenefits.slice(0, half);
  const col2 = partnerBenefits.slice(half);

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
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

          <button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all px-6 py-2 rounded-lg text-sm font-medium mb-4">
            Become a Partner Clinic
          </button>

          <p className="text-muted-foreground italic">
            Partner with us and let your empty slots serve more lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
