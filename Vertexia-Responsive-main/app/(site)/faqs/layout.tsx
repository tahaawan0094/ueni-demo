import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | Ueni",
  description: "Find answers to common questions about Ueni's website design, development, SEO, and done-for-you services.",
  alternates: {
    canonical: "https://ueniagency.com/faqs",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
