"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import styles from "./policy.module.css";
import CtaSection from "@/components/CtaSection";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use the Plantify Tech platform and services. By accessing or using the platform, you agree to the practices described in this policy.",
  },
  {
    id: "personal-information",
    title: "Personal Information",
    content:
      "When you create a Plantify Tech account or interact with our services, we may collect information such as your name, email address, contact details, and account preferences.",
  },
  {
    id: "usage-data",
    title: "Usage Data",
    content:
      "We collect information about how users interact with our platform, including pages visited, features used, device information, and general usage patterns.",
  },
  {
    id: "integration-financial",
    title: "Integration and Financial Data",
    content:
      "If you connect third-party applications, smart plant sensors, or financial integrations (such as for premium subscriptions), certain data may be processed to provide tailored insights, automation, and analytics within the Plantify Tech platform.",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content:
      "We use collected information to improve Plantify Tech and provide a better user experience. This includes:",
    list: [
      "Providing platform functionality and analytics.",
      "Improving performance and developing new features.",
      "Communicating important updates or notifications.",
      "Ensuring system security.",
      "Providing customer support.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your information. This includes encryption, secure infrastructure, and monitoring systems designed to prevent unauthorized access.",
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content:
      "We do not sell your personal information. Information may only be shared with trusted service providers who help operate the Plantify Tech platform, maintain our infrastructure, or provide support services. These partners are strictly required to maintain the confidentiality and security of your data.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content:
      "We retain personal information only for as long as necessary to provide our services, comply with legal obligations, and resolve disputes.",
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    content:
      "Depending on your location, you may have rights related to your personal data, including:",
    list: [
      "Accessing the information we hold about you.",
      "Requesting correction of inaccurate information.",
      "Requesting deletion of your personal data.",
      "Limiting certain data processing.",
    ],
    note: "Requests related to your data privacy can be submitted directly through our support channels.",
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content:
      "Plantify Tech may use cookies and similar technologies to improve the user experience, remember your preferences, and analyze website performance. You can adjust your browser settings to control or disable cookies if preferred.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content:
      "Our platform may integrate with third-party tools, hardware, or financial services. Please note that these services have their own independent privacy policies and data handling practices.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy periodically to reflect changes in our services or legal requirements. Any updated policies will be published directly on this page.",
  },
  {
    id: "contact",
    title: "Contact Us",
    content:
      "If you have questions about this privacy policy or how your data is handled, please contact us.",
    contact: "support@plantify.tech",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={`sky-bg ${styles.main}`}>
        <header className={styles.hero}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className={styles.lastUpdate}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Last update July 15 2026
          </motion.p>
        </header>

        <div className={styles.content}>
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              className={styles.section}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.body}>{section.content}</p>
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, i) => (
                    <li key={i} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && <p className={styles.body}>{section.note}</p>}
              {section.contact && (
                <a href={`mailto:${section.contact}`} className={styles.contactLink}>
                  {section.contact}
                </a>
              )}
            </motion.section>
          ))}
        </div>
        <CtaSection/>
      </main>
      <Footer />
    </>
  );
}
