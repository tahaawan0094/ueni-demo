import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch with Ueni",
  description: "Contact Ueni's team to discuss your website development needs. We're here to help you launch your professional website.",
  alternates: {
    canonical: "https://ueniagency.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
