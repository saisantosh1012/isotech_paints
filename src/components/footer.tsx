import Link from "next/link";
import { Icons } from "./icons";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Isotech Painting & Deco Logo" width={30} height={30} className="filter-brightness-0 filter-invert"/>
              <span className="text-xl font-bold text-white"><span className="text-accent">Isotech</span> Painting & Deco</span>
            </Link>
            <p className="text-sm">
              Transforming spaces with color and precision. Your vision, our craft.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#visualizer" className="hover:text-accent transition-colors">AI Visualizer</Link></li>
              <li><Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><p>Bouda Nagar Colony, Hyderabad, Telangana 500067</p></li>
              <li className="flex items-start"><Link href="mailto:info@isotechpaints.com" className="hover:text-accent transition-colors">info@isotechpaints.com</Link></li>
              <li className="flex items-start"><Link href="tel:+919398624736" className="hover:text-accent transition-colors">+91 93986 24736</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Isotech Painting & Deco. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
