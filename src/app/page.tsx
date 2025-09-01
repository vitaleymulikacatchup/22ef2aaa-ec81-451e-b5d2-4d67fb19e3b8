use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarStyleApple
        brandName="MemeSpark"
        logoSrc="/images/logo.svg"
        logoAlt="MemeSpark Logo"
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "FAQ", id: "faq" },
          { name: "Footer", id: "footer" },
        ]}
        className="navbar"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to MemeSpark"
          description="Join our energetic community and explore the fun!\"
          primaryButtonText="Join Meme"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About MemeSpark"
          descriptions={[
            "MemeSpark is all about fun and community-driven projects!",
            "We focus on educating our community about the latest in crypto and NFTs!",
            "Join us and be part of the adventure!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the key metrics of MemeSpark"
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "80%", description: "Liquidity" },
            { value: "5%", description: "Team Allocation" },
            { value: "15%", description: "Marketing Fund" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is MemeSpark?", content: "A platform for community-driven crypto education." },
            { title: "How can I buy tokens?", content: "Follow our 3-step guided process above!" },
            { title: "Join the community?", content: "Participate in our discussions and events on Telegram and Discord!" },
            { title: "What is the tokenomics?", content: "Learn more about our token distribution and allocation!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: "Quick Links", items: [ { label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "Tokenomics", onClick: () => {} } ] },
            { title: "Community", items: [ { label: "Join Us", onClick: () => {} }, { label: "Join Meme", onClick: () => {} } ] },
            { title: "Legal", items: [ { label: "Privacy Policy", onClick: () => {} } ] }
          ]}
          copyrightText="© 2023 MemeSpark. All Rights Reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}