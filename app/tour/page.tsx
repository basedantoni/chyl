import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function Tour() {
  return (
    <main className="flex flex-col items-center justify-stretch gap-20 px-5 pt-24 lg:px-40 lg:pt-10 xl:pt-16 h-full pb-24">
      <Script src="https://widgetv3.bandsintown.com/main.min.js"></Script>
      <div className="flex gap-2.5">
        <h1 className="hidden sm:block font-moki self-end uppercase text-xl xl:text-6xl">
          Upcoming Shows
        </h1>
        <h1 className="sm:hidden font-moki self-end uppercase ml-5 text-4xl xl:text-6xl">
          Shows
        </h1>
        <Image
          className="w-16 xl:w-24"
          src="/svg/circuit.svg"
          width={96}
          height={96}
          alt="cover"
        />
      </div>
      <div className="flex w-full flex-col items-stretch gap-16">
        <a className="bit-widget-initializer"
          data-artist-name="id_15505182"
          
          data-background-color="rgba(0,0,0,1)"
          data-separator-color="rgba(255,116,0,1)"
          data-text-color="rgba(255,255,255,1)"
          data-font="Helvetica"
          data-auto-style="true"
          
          data-button-label-capitalization="capitalize"
          data-header-capitalization=""
          data-location-capitalization="capitalize"
          data-venue-capitalization="capitalize"
          data-display-local-dates="true"
          data-local-dates-position="tab"
          data-display-past-dates="true"
          data-display-details="false"
          data-display-lineup="true"
          data-display-start-time=""
          data-social-share-icon="true"
          data-display-limit="all"
          
          data-date-format="MMM. D, YYYY"
          data-date-orientation="horizontal"
          data-date-border-color="#4A4A4A"
          data-date-border-width="1px"
          data-date-capitalization=""
          data-date-border-radius="10px"
          
          data-event-ticket-cta-size="medium"
          data-event-custom-ticket-text=""
          data-event-ticket-text="TICKETS"
          data-event-ticket-icon=""
          data-event-ticket-cta-text-color="#FFFFFF"
          data-event-ticket-cta-bg-color="#4A4A4A"
          data-event-ticket-cta-border-color="#4A4A4A"
          data-event-ticket-cta-border-width="0px"
          data-event-ticket-cta-border-radius="4px"
          
          data-sold-out-button-text-color="#FFFFFF"
          data-sold-out-button-background-color="#4A4A4A"
          data-sold-out-button-border-color="#4A4A4A"
          data-sold-out-button-clickable="true"
          
          data-event-rsvp-position="left"
          data-event-rsvp-cta-size="medium"
          data-event-rsvp-only-show-icon=""
          data-event-rsvp-text="REMIND ME"
          data-event-rsvp-icon=""
          data-event-rsvp-cta-text-color="#4A4A4A"
          data-event-rsvp-cta-bg-color="#FFFFFF"
          data-event-rsvp-cta-border-color="#4A4A4A"
          data-event-rsvp-cta-border-width="1px"
          data-event-rsvp-cta-border-radius="4px"
          
          data-follow-section-position="top"
          data-follow-section-alignment="center"
          data-follow-section-header-text="Get updates on new shows, new music, and more."
          data-follow-section-cta-size="medium"
          data-follow-section-cta-text="FOLLOW"
          data-follow-section-cta-icon="true"
          data-follow-section-cta-text-color="#FFFFFF"
          data-follow-section-cta-bg-color="#4A4A4A"
          data-follow-section-cta-border-color="#4A4A4A"
          data-follow-section-cta-border-width="0px"
          data-follow-section-cta-border-radius="4px"
          
          data-play-my-city-position="bottom"
          data-play-my-city-alignment="Center"
          data-play-my-city-header-text="Don’t see a show near you?"
          data-play-my-city-cta-size="medium"
          data-play-my-city-cta-text="REQUEST A SHOW"
          data-play-my-city-cta-icon="true"
          data-play-my-city-cta-text-color="#FFFFFF"
          data-play-my-city-cta-bg-color="#4A4A4A"
          data-play-my-city-cta-border-color="#4A4A4A"
          data-play-my-city-cta-border-width="0px"
          data-play-my-city-cta-border-radius="4px"
          
          data-optin-font=""
          data-optin-text-color=""
          data-optin-bg-color=""
          data-optin-cta-text-color=""
          data-optin-cta-bg-color=""
          data-optin-cta-border-width=""
          data-optin-cta-border-radius=""
          data-optin-cta-border-color=""
          
          data-language="en"
          data-layout-breakpoint="900"
          data-app-id=""
          data-affil-code=""
          data-bit-logo-position="bottomRight"
          data-bit-logo-color="#CCCCCC"
        ></a>
      </div>
    </main>
  );
}
