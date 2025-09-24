import React from "react";
import { Container } from "./ui/container";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import SponsorBanner from "@/components/sponsor-banner";



export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 py-10">
      {/* Sponsoring */}
      <SponsorBanner
        href="https://www.ambicon.at/"
        src="/data/banner.png"
        alt="Unser Hauptsponsor"
      />
      <Container className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/data/logo.png" alt="Stars Basketball Logo" className="h-8 w-auto" />
            <p className="text-sm font-bold">STARS BASKETBALL</p>
          </div>
          <p className="mt-3 text-sm text-slate-600">
              Basketball in deiner Region.
          </p>
          {/* Socials */}
          <div className="mt-4 flex gap-6 text-slate-600">
            <a
              href="https://www.facebook.com/STARS.Sportverein"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/Starswien"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaTwitter className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/starsbasketballwien/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCffVpf3YQzD6jLwIXw0MkYw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a className="hover:underline" href="/news">News</a></li>
            <li><a className="hover:underline" href="/teams">Teams</a></li>
            <li><a className="hover:underline" href="/media">Media</a></li>
            <li><a className="hover:underline" href="/sponsors">Sponsoring</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:office@stars-basketball.com">office@stars-basketball.com</a></li>
            <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+436766744195">+43 676 674 41 95</a></li>
            <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+436506007285">+43 650 600 72 85</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Bernoullistraße 8, 1220 Wien</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/impressum" className="hover:underline">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:underline">Datenschutz</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Stars Basketball. All rights reserved.
      </Container>
    </footer >
  );
}
