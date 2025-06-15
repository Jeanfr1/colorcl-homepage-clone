import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const faqData = [
  {
    id: "item-1",
    question: "Are your contact lenses safe to use?",
    answer: "Yes, all our contact lenses are FDA approved and manufactured in certified facilities. They undergo rigorous quality testing to ensure safety and comfort. However, we always recommend consulting with an eye care professional before using any contact lenses."
  },
  {
    id: "item-2", 
    question: "How long can I wear colored contact lenses?",
    answer: "The wear time depends on the type of lens you choose. Daily lenses should be discarded after one use, weekly lenses can be worn for up to 7 days with proper care, and monthly lenses can be worn for up to 30 days. Never exceed the recommended wear time."
  },
  {
    id: "item-3",
    question: "Do I need a prescription for colored contact lenses?",
    answer: "Yes, even if you have perfect vision, colored contact lenses are medical devices that require a valid prescription from an eye care professional. This ensures proper fit and safety for your eyes."
  },
  {
    id: "item-4",
    question: "How do I care for my contact lenses?",
    answer: "Always wash your hands before handling lenses. Use only contact lens solution (never water or saliva) to clean and store your lenses. Replace your lens case every 3 months and follow the specific care instructions for your lens type."
  },
  {
    id: "item-5",
    question: "What if my lenses feel uncomfortable?",
    answer: "Remove the lenses immediately if you experience discomfort, pain, or irritation. Check for damage, debris, or if the lens is inside out. If discomfort persists, consult your eye care professional. Never ignore persistent discomfort."
  },
  {
    id: "item-6",
    question: "Can I sleep in my contact lenses?",
    answer: "No, you should never sleep in contact lenses unless they are specifically designed for extended wear and approved by your eye care professional. Sleeping in lenses can lead to serious eye infections and complications."
  },
  {
    id: "item-7",
    question: "How do I choose the right color for my skin tone?",
    answer: "Consider your natural eye color and skin undertones. Warm undertones work well with honey, brown, and hazel shades. Cool undertones complement blue, gray, and green shades. Our virtual try-on tool can help you visualize different colors."
  },
  {
    id: "item-8",
    question: "What's your return policy?",
    answer: "We offer a 30-day satisfaction guarantee on unopened products. Due to health regulations, opened contact lenses cannot be returned unless defective. If you receive damaged or incorrect products, contact us within 48 hours for a replacement."
  },
  {
    id: "item-9",
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location. All orders are processed within 24 hours of confirmation."
  },
  {
    id: "item-10",
    question: "Can I wear makeup with contact lenses?",
    answer: "Yes, but insert your lenses before applying makeup and remove them before removing makeup. Use oil-free, hypoallergenic products when possible. Avoid getting makeup, hairspray, or perfume on your lenses."
  }
];

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our contact lenses, ordering, and care instructions.
          </p>
        </div>

        {/* Search FAQ */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ..."
              className="w-full p-4 pr-12 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqData.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg bg-card"
            >
              <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left hover:bg-muted/50 transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <svg className="h-5 w-5 text-muted-foreground transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </Accordion.Trigger>
              <Accordion.Content className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Contact Support */}
        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@siesta-lenses.com"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
