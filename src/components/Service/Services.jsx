import React from "react";
import "./Services.css";

// Material Icons
import ChecklistIcon from "@mui/icons-material/Checklist";
import TourIcon from "@mui/icons-material/Tour";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BalanceIcon from "@mui/icons-material/Balance";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Services() {
  return (
    <section className="services" aria-label="Services">
      <div className="services__container">
        
        {/* Hero Section - Content on left, empty on right for balance */}
        <div className="services__hero">
          <div className="services__heroContent">
            <h1 className="services__heroTitle">Senior Transition Guidance and Placement</h1>
            <p className="services__heroDesc">
              Our complete transition support is available at no charge to families throughout 
              Western Washington. We offer compassionate, expert guidance to help seniors move 
              into independent, assisted living, memory care, adult family homes, hospice or 
              respite stays. Every interaction prioritizes dignity, trust, transparency and grace.
            </p>
          </div>
          <div className="services__heroImage">
            <img 
              src="./h1.jpg" 
              alt="Senior living guidance" 
              loading="lazy"
            />
            <div className="services__imageOverlay"></div>
          </div>
        </div>

        {/* Section 1: Personalized Transition Planning - Content left, Image right */}
        <div className="services__section">
          <div className="services__sectionContent">
            <div className="services__sectionHeader">
              <span className="services__sectionNumber">01</span>
              <h2 className="services__sectionTitle">Personalized Transition Planning</h2>
            </div>
            <p className="services__sectionDesc">
              We begin by meeting either in your home or current care setting. You share 
              key information regarding health requirements, daily routines, financial 
              aspects, and family concerns. We then build a clear, step-by-step plan 
              detailing appropriate care options, important milestones, and actionable 
              steps to take, ensuring confidence at every stage.
            </p>
            <div className="services__iconFeature">
              <ChecklistIcon />
              <span>Individualized Approach</span>
            </div>
          </div>
          <div className="services__sectionImage">
            <img 
              src="./h2.jpg" 
              alt="Personalized planning meeting" 
              loading="lazy"
            />
            <div className="services__imageOverlay"></div>
          </div>
        </div>

        {/* Section 2: Guided Community Tours - Image left, Content right */}
        <div className="services__section services__section--reversed">
          <div className="services__sectionImage">
            <img 
              src="./h3.jpg" 
              alt="Community tour with advisor" 
              loading="lazy"
            />
            <div className="services__imageOverlay"></div>
          </div>
          <div className="services__sectionContent">
            <div className="services__sectionHeader">
              <span className="services__sectionNumber">02</span>
              <h2 className="services__sectionTitle">Guided Community Tours with Detailed Review</h2>
            </div>
            <p className="services__sectionDesc">
              You will visit a range of living communities while accompanied by one of our 
              advisors. We diligently observe staff interactions, review safety features 
              and daily programs, and comment on how well the atmosphere aligns with your 
              loved one's style of living. These visits allow you to evaluate each community 
              based on quality, comfort, and fit, rather than just a picture in a brochure.
            </p>
            <div className="services__iconFeature">
              <TourIcon />
              <span>Expert-Led Evaluations</span>
            </div>
          </div>
        </div>

        {/* Section 3: Connected Access - Full width with grid */}
        <div className="services__fullSection">
          <div className="services__fullHeader">
            <div className="services__fullIcon">
              <ConnectWithoutContactIcon />
            </div>
            <h2 className="services__fullTitle">Connected Access to Trusted Professionals</h2>
            <p className="services__fullDesc">
              When specific needs arise outside our direct service area, we introduce you 
              to professionals with deep expertise:
            </p>
          </div>

          <div className="services__grid">
            {/* Row 1 */}
            <div className="services__gridRow">
              <div className="services__gridItem">
                <div className="services__itemIcon">
                  <BalanceIcon />
                </div>
                <h3 className="services__itemTitle">Guardianship Services</h3>
                <p className="services__itemDesc">
                  We connect seniors and families to experienced guardianship providers who 
                  support decision-making, protect rights, and ensure legal certainty in 
                  sensitive situations.
                </p>
              </div>

              <div className="services__gridItem">
                <div className="services__itemIcon">
                  <AccountBalanceIcon />
                </div>
                <h3 className="services__itemTitle">Elder-Law Attorneys</h3>
                <p className="services__itemDesc">
                  When needs include wills, healthcare directives, or power of attorney matters, 
                  we introduce families to skilled elder-law attorneys who bring expertise and 
                  compassion to these conversations.
                </p>
              </div>

              <div className="services__gridItem">
                <div className="services__itemIcon">
                  <HomeWorkIcon />
                </div>
                <h3 className="services__itemTitle">Real-Estate Advisors</h3>
                <p className="services__itemDesc">
                  Our vetted contacts support seniors in selling, downsizing, or relocating 
                  homes. These professionals handle listing, staging, market analysis, and 
                  negotiations with efficiency and respect.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="services__gridRow">
              <div className="services__gridItem">
                <div className="services__itemIcon">
                  <MilitaryTechIcon />
                </div>
                <h3 className="services__itemTitle">Veterans Benefits Counselors</h3>
                <p className="services__itemDesc">
                  We guide eligible veterans to specialists who navigate Aid & Attendance 
                  applications and other benefit programs. These counselors help veterans 
                  secure financial support they have a rightful claim to receive.
                </p>
              </div>

              <div className="services__gridItem">
                <div className="services__itemIcon">
                  <DirectionsCarIcon />
                </div>
                <h3 className="services__itemTitle">Medical Transportation</h3>
                <p className="services__itemDesc">
                  Our trusted non-emergency ambulatory partners deliver you or your loved 
                  one to their personal and medical appointments safely, on-schedule and 
                  without incident.
                </p>
              </div>

              <div className="services__gridItem services__gridItem--highlight">
                <div className="services__itemIcon">
                  <AccountBalanceIcon />
                </div>
                <h3 className="services__itemTitle">Financial Planning Referrals</h3>
                <p className="services__itemDesc">
                  Understanding how to finance senior care can be one of the most challenging 
                  aspects for families. Our financial planning referrals connect you with 
                  trusted professionals who specialize in elder care funding strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="services__financialNote">
            <p>
              Whether it's navigating long-term care insurance, understanding Medicaid or 
              VA benefits, or managing assets to support care needs, we ensure you're 
              guided by experts who prioritize your family's well-being. We collaborate 
              only with reputable financial advisors who offer clear, compassionate guidance 
              tailored to your unique situation. With the right support, families can make 
              confident, informed financial decisions that provide security and peace of mind.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}