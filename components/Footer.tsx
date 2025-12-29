"use client"

import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Cognipath</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Connecting students with expert tutors for personalized learning excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} />
                <span>+91 9304217862</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} />
                <span>hello@cognipath.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Find Tutors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a href="/hiring" className="hover:text-primary transition-colors">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Cognipath. All rights reserved. Built with passion for education.
          </p>
        </div>
      </div>
    </footer>
  )
}
