import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container max-w-4xl mx-auto text-center space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Caremed Connect
          </h2>
          <p className="text-sm text-muted-foreground">
            Connecting you to quality care — fast.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            +234-XXX-XXXXXXX
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            hello@caremedconnect.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Lagos, Nigeria
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          © 2024 Caremed Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
