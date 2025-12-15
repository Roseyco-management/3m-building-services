import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyInfo } from "@/data/company";
import { navigationItems } from "@/data/navigation";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-gray text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{companyInfo.tagline}</p>
            <p className="text-gray-400 text-xs">
              Company No: {companyInfo.companyNumber}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-construction-orange transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-construction-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-construction-orange transition-colors"
              >
                <Mail className="h-4 w-4" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {companyInfo.address.street}, {companyInfo.address.city},{" "}
                  {companyInfo.address.postcode}
                </span>
              </div>
              {companyInfo.socialMedia.instagram && (
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-construction-orange transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Follow us on Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {companyInfo.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
