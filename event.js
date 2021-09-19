import React, { useState, useEffect } from "react";
import { surfers_trestles_2020 } from "../../surfers";
import s100white from "../../lib/assets/s100logowhite.png";
import s100dark from "../../lib/assets/s100logodark.png";
import insta from "../../lib/assets/insta.png";

import {
  Nav,
  PageContainer,
  Main,
  Panel,
  EventDetails,
  MenuBar,
  MenuItem,
  MainSection,
  SubTitle,
  SectionTitle,
  SecondaryText,
  SectionCopy,
  SectionBlock,
  ButtonSecondary,
  MobileView,
  DesktopView,
  StickyScroll,
  IframeContainerSmall,
  IframeContainerBig,
  BodyContainer,
  ExpandButton,
  Title,
  CompetitorRow,
  CompetitorCard,
  Input,
  SocialContainer,
  DesktopNavBar,
  MobileNavBar,
  FAQCard,
  Footer,
  SeeMoreButton,
  EventBanner,
} from "./styles";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("Scoring");
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const emailRegistered = localStorage.getItem("SURF100.email");

    if (emailRegistered) {
      setEmail(emailRegistered);
      setIsRegistered(true);
    }

    if (window.InplayerPaywall) {
      var paywall = new window.InplayerPaywall(
        "23b08bc0-c50c-4bb1-8606-6a2db940919e",
        [
          {
            id: 121240,
          },
        ]
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  const toggle = () => {
    console.log("showing status", isShowing);
    setIsShowing(!isShowing);
  };

  const handleEmailSave = () => {
    // VALIDATE
    if (email.trim().length) {
      // STORE TO LOCAL STORAGE
      localStorage.setItem("SURF100.email", email);
      console.log("handle save email", email);

      setIsRegistered(true);

      // PASS TO PARAMETER TO IFRAME... by using the email value in state.
    } else {
      alert("Please enter a valid email!");
    }
  };

  const renderCTA = () => {
    return (
      <>
        <Title>SURF100:</Title>
        <SubTitle>
          An audience judged 100-minute wave riding demonstration.
        </SubTitle>

        <div className="dates-and-price">
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>6 pm, Thursday
            September 17, California (PST)
          </div>
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>11 am, Friday
            September 18, QLD/NSW/VIC (AEST)
          </div>
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>9 am Friday
            September 18 Western Australia (AWST)
          </div>
          <div className="row">
            <i className="fa fa-ticket" aria-hidden="true"></i>
            $14.99
          </div>
        </div>
      </>
    );
  };

  const renderGiveAway = () => {
    return (
      <>
        <div className="host-banner">
          <div>
            <Title>How to score: </Title>
          </div>
        </div>
        <SecondaryText>
          Clips are scored out of 100 points, so take what you’d give a wave out
          of 10 and move the decimal one to the right. It’s not rocket surgery.
        </SecondaryText>
        <SeeMoreButton href="/event/#giveaway">
          Sign up below to judge and potentially win a 3-board quiver{" "}
        </SeeMoreButton>
      </>
    );
  };

  const renderScoring = () => {
    {
      console.log("stact_url_email", email);
    }

    if (isShowing) {
      return (
        <IframeContainerBig
          style={{
            maxWidth: 875,
            width: "100%",
            height: 925,
            overflow: "auto",
          }}
        >
          <iframe
            id="scaled-frame"
            src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${email}`}
            frameBorder="no"
            allowtransparency="true"
            allowtullscreen="true"
          ></iframe>
        </IframeContainerBig>
      );
    }
    return (
      <IframeContainerSmall
        style={{
          maxWidth: 875,
          width: "100%",
          height: 350,
          overflow: "auto",
        }}
      >
        <iframe
          id="scaled-frame"
          src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${email}`}
          frameBorder="no"
          allowtransparency="true"
          allowtullscreen="true"
        ></iframe>
      </IframeContainerSmall>
    );
  };

  const renderNavMenu = () => {
    return (
      <MenuBar>
        <MenuItem
          href="/event/#concept"
          onClick={() => setActiveTab("Concept")}
          active={activeTab === "Concept"}
        >
          What is SURF100?
        </MenuItem>

        <MenuItem
          href="/event/#giveaway"
          onClick={() => setActiveTab("Giveaway")}
          active={activeTab === "Giveaway"}
        >
          Surfboard Giveaway
        </MenuItem>
        <MenuItem
          href="/event/#competitors"
          onClick={() => setActiveTab("Competitors")}
          active={activeTab === "Competitors"}
        >
          Who are these “surfers”?
        </MenuItem>
        <MenuItem
          href="/event/#faq"
          onClick={() => setActiveTab("FAQ")}
          active={activeTab === "FAQ"}
        >
          FAQs
        </MenuItem>
      </MenuBar>
    );
  };

  return (
    <>
      <Nav>
        <a href="/">
          <img src={s100dark} />
        </a>
        <DesktopNavBar>{renderNavMenu()}</DesktopNavBar>
        <SocialContainer>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.instagram.com/surf100.tv/?hl=en"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://twitter.com/stabmagazine?lang=en"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </SocialContainer>
      </Nav>

      <EventBanner>
        <p>
          Yes! Jack Robinson wins Surf100, North Point Western Australia!{" "}
        </p>
      </EventBanner>

      <PageContainer>
        <BodyContainer>
          <Main>
            <EventDetails>{renderCTA()}</EventDetails>

            <div id="inplayer-121240" className="inplayer-paywall"></div>

            <div>
              <ExpandButton onClick={toggle}>
                {isShowing ? "Collapse Scoring" : "Expand Scoring"}
              </ExpandButton>
              {renderScoring()}
            </div>

            <MobileNavBar>{renderNavMenu()}</MobileNavBar>
            <MobileView>
              {" "}
              <EventDetails>{renderGiveAway()}</EventDetails>
            </MobileView>
            <MainSection>
              <SectionBlock id="concept">
                <SectionTitle>What is SURF100?</SectionTitle>
                <SectionCopy>
                  <ul>
                    <p>
                      Surf100 is a waveriding exposition that takes place over a
                      single, 100-minute period and is judged live, at a later
                      date, by the internet. All of this is done following
                      social distancing guidelines. In this edition, West Oz
                      mainstays Jack Robinson, Jay Davies, Jacob Willcox, and
                      Kael Walsh will paddle out for a 100-minute waveriding
                      demonstration at North Point.
                    </p>
                  </ul>
                </SectionCopy>
              </SectionBlock>
              <SectionBlock id="giveaway">
                <SectionTitle>Surfboard Giveaway</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      All four Surf100 competitors ride for a different
                      surfboard brand, including: Channel Islands, DHD, Arakawa,
                      and Chilli.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      The person whose scores are closest to our head critic’s
                      throughout the event will win the three boards.
                    </li>
                  </ul>
                  {isRegistered ? (
                    <div>
                      <h3>Registration Complete!</h3>
                    </div>
                  ) : (
                    <div>
                      <form>
                        <Input
                          onChange={(e) => setEmail(e.currentTarget.value)}
                          value={email}
                          placeholder="Email address"
                        />

                        <ButtonSecondary onClick={handleEmailSave}>
                          Submit
                        </ButtonSecondary>
                      </form>
                    </div>
                  )}
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="competitors">
                <SectionTitle>Who are these so-called “surfers”?</SectionTitle>
                <CompetitorRow>
                  {surfers_trestles_2020.map((surfer) => (
                    <CompetitorCard key={surfer.name}>
                      <img src={surfer.photo} />
                      <div>
                        <h4>
                          {surfer.name}, {surfer.age}
                        </h4>
                        <h5>{surfer.hometown}</h5>
                        <p>{surfer.bio}</p>
                      </div>
                    </CompetitorCard>
                  ))}
                </CompetitorRow>
              </SectionBlock>

              <SectionBlock id="faq">
                <SectionTitle>FAQs</SectionTitle>
                <SectionCopy>
                  <FAQCard>
                    <h4>When is the event live?</h4>
                    <p>
                      6pm, Thursday September 17, California (PST) & 11am,
                      Friday September 18, QLD/NSW/VIC (AEST)
                    </p>
                  </FAQCard>
                </SectionCopy>
              </SectionBlock>
            </MainSection>
          </Main>
          <Panel>
            <DesktopView>
              <StickyScroll>
                <EventDetails>{renderGiveAway()}</EventDetails>
              </StickyScroll>
            </DesktopView>
          </Panel>
        </BodyContainer>
      </PageContainer>

      <Footer>
        <a href="/">
          <img src={s100white} />
        </a>
        <div>
          <h4>Have more questions?</h4>
          <a href="/contact">Contact Us</a>
        </div>
        <a target="_blank" href="https://www.instagram.com/surf100.tv/?hl=en">
          <img src={insta} />
        </a>
      </Footer>
    </>
  );
};

export default EventPage;