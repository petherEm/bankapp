import Head from "next/head";
import Image from "next/image";
import styles from "../styles";
import { Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials, Mymodal } from "../components"


export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Head>
        <title>PM BankApp</title>
        <meta name="description" content="PM BankApp" />
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>

      <div className={`${styles.paddigX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><Navbar /></div>
      </div>

      {/* Hero */}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Mymodal />
        </div>
      </div>

      {/* Compontents */}

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  );
}
