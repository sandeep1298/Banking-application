import Image from "next/image";

import { ArrowLink } from "@/components/common/ArrowLink";
import { footerCompany, footerSocials, footerSolutions } from "@/constants/content";

export function Footer() {
  return (
    <footer className="section-dark relative overflow-hidden pb-14 pt-24" id="footer">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 md:grid-cols-[0.35fr_0.65fr] md:px-20">
        <div>
          <Image
            alt="N7"
            className="h-auto w-[min(440px,80vw)]"
            height={233}
            src="/assets/n7-footer-logo.svg"
            width={440}
          />
        </div>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-3">
          <FooterAddress
            body="Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom."
            title="London"
          />
          <FooterAddress
            body="Linktia Infosystems Ltd - CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates."
            title="Dubai"
          />
          <FooterAddress
            body="Linktia Infosystems Ltd - CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India."
            title="London"
          />
          <FooterLinks items={footerSolutions} title="Solutions" />
          <FooterLinks items={footerCompany} title="N7 Banking" />
          <FooterLinks items={footerSocials} title="Our Socials" />

          <p className="relative z-10 col-span-full mt-8 text-center sm:text-left text-sm font-normal leading-[1.4] text-[color:var(--muted)]">
            Copyright &copy; 2022 by Linktia Infosystems Limited &mdash; [CB7 and N7 as Commercial Brand] &mdash;
            [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation
            13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterAddressProps = {
  title: string;
  body: string;
};

function FooterAddress({ title, body }: FooterAddressProps) {
  return (
    <address className="not-italic">
      <h3 className="text-lg font-semibold text-[color:var(--section-ink)]">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{body}</p>
    </address>
  );
}

type FooterLinksProps = {
  title: string;
  items: string[];
};

function FooterLinks({ title, items }: FooterLinksProps) {
  return (
    <nav aria-label={title}>
      <h3 className="text-lg font-semibold text-[color:var(--section-ink)]">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item}>
            <ArrowLink
              arrowHover="up"
              className="min-h-6 text-sm leading-6"
              href="#top"
              showDivider={false}
              variant="muted"
            >
              {item}
            </ArrowLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
