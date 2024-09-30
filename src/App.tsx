import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHero } from "gitlanding/GlHero/GlHero";
import { GlArticle } from "gitlanding/GlArticle";
import { GlFooter } from "gitlanding/GlFooter";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
/*import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";*/
import { GlCheckList } from "gitlanding/GlCheckList";
/*import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";*/
import { GlHeader } from "gitlanding/GlHeader";
/*import mesaIconPng from "./assets/img/mesa-favicon.png";*/
import mesaLogoPng from "./assets/img/mesa_logo2_200pt.png";
import mesaMp4 from "./assets/videos/mesa1.mp4";
import githubPng from "./assets/img/github.png";
import readthedocsPng from "./assets/img/readthedocs.png";
import zenodoPng from "./assets/img/zenodo.png";
import mailmanPng from "./assets/img/mailman.png";
import pythonPng from "./assets/img/python.png";
import { OnyxiaUi } from "theme";

export function App() {
    return (
        <OnyxiaUi>
            <AppContextualized />
        </OnyxiaUi>
    );
}

function AppContextualized() {
    return (
        <GlTemplate
            hasTopOfPageLinkButton={true}
            headerOptions={{
                position: "sticky",
                isRetracted: "smart"
            }}
            header={<Header />}
            body={<Body />}
            footer={<Footer />}
        />
    );
}

function Header() {
    return (
        <GlHeader
            title={<img src={mesaLogoPng} width="200" alt="MESA" />}
            links={[
                {
                    label: "GitHub",
                    href: "https://github.com/MESAHub/mesa"
                },
                {
                    label: "Documentation",
                    href: "https://docs.mesastar.org"
                }
            ]}
            enableDarkModeSwitch={true}
            githubRepoUrl="https://github.com/MESAHub/mesa"
            githubButtonSize="large"
            showGithubStarCount={true}
        />
    );
}

function Footer() {
    return (
        <GlFooter
            bottomDivContent="© Copyright 2024, The MESA Team. - [GitHub](https://github.com/MESAHub/mesa) - [Documentation](https://docs.mesastar.org) - [Edit this website](https://github.com/MESAHub/MESAHub.github.io)"
            links={[
                {
                    href: "https://github.com/MESAHub/mesa/blob/master/LICENSE",
                    label: <img src="https://img.shields.io/github/license/MESAHub/mesa" alt="" />
                },
                {
                    href: "https://github.com/MESAHub/mesa/releases/latest",
                    label: <img src="https://img.shields.io/github/v/release/MESAHub/mesa" alt="" />
                }
            ]}
        />
    );
}

function Body() {
    return (
        <>
            <GlHero
                title={"Modules for Experiments in Stellar Astrophysics"}
                subTitle={
                    "a versatile open-source software suite to run experiments in stellar evolution"
                }
                hasLinkToSectionBellow={true}
                illustration={{
                    type: "video",
                    hasShadow: false,
                    sources: [
                        {
                            src: mesaMp4,
                            type: "video/mp4"
                        }
                    ]
                }}
                hasAnimation={true}
            />

            <GlCards>
                {
                    <>
                        <GlLogoCard
                            title="Code repository"
                            paragraph={`Source code hosted on GitHub`}
                            buttonLabel="Check out the code"
                            link={{
                                href: "https://github.com/MESAHub/mesa"
                            }}
                            iconUrls={[githubPng]}
                        />
                        <GlLogoCard
                            title="Documentation"
                            paragraph={`How to install and use MESA`}
                            buttonLabel="Read the docs"
                            link={{
                                href: "https://docs.mesastar.org/"
                            }}
                            iconUrls={[readthedocsPng]}
                        />
                        <GlLogoCard
                            title="Zenodo Community"
                            paragraph={`Official release versions, SDKs, and MESA project inlists downloads`}
                            buttonLabel="Go to Zenodo"
                            link={{
                                href: "https://zenodo.org/communities/mesa/records?q=&l=list&p=1&s=10"
                            }}
                            iconUrls={[zenodoPng]}
                        />
                        <GlLogoCard
                            title="MESA Marketplace "
                            paragraph={`Resources for published papers using MESA`}
                            buttonLabel="Go to Marketplace"
                            link={{
                                href: "http://cococubed.com/mesa_market/"
                            }}
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="MESA Users Mailing List"
                            paragraph={`Info about new releases, news items, and requests for help/bug reports`}
                            buttonLabel="Sign up for the mailing list"
                            link={{
                                href: "https://lists.mesastar.org/mailman/listinfo/mesa-users"
                            }}
                            iconUrls={[mailmanPng]}
                        />
                        <GlLogoCard
                            title="mesa_reader"
                            paragraph={`Python module to interact and plot MESA data (pip install mesa_reader)`}
                            buttonLabel="Get mesa_reader"
                            link={{
                                href: "https://github.com/wmwolf/py_mesa_reader"
                            }}
                            iconUrls={[pythonPng]}
                        />
                    </>
                }
            </GlCards>
            {/*
            <GlArticle
                title="Article title"
                body={`Lorem.`}
                buttonLabel="Article Button label"
                buttonLink={{
                    href: "https://example.com"
                }}
                illustration={{
                    type: "video",
                    hasShadow: false,
                    sources: [
                        {
                            src: mesaMp4,
                            type: "video/mp4"
                        }
                    ]
                }}
                hasAnimation={true}
            />

            <GlSectionDivider />

*/}

            <GlCheckList
                heading="Modules"
                hasAnimation={true}
                elements={[
                    {
                        title: "Star (star)",
                        description: `main module for stellar evolution`
                    },
                    {
                        title: "Binary (binary)",
                        description: `module for binary star evolution`
                    },
                    {
                        title: "Atmospheres (atm)",
                        description: `calculates the surface temperature and pressure, to use as boundary conditions`
                    },
                    {
                        title: "Asteroseismology (astero)",
                        description: `calculates asteroseismic variables`
                    },
                    {
                        title: "Automatic Differentiation (auto_diff)",
                        description: `provides automatic calculation of (forward) derivatives using the chain rule`
                    },
                    {
                        title: "Element Data (chem)",
                        description: `provides data on the properties of elements and isotopes`
                    },
                    {
                        title: "Constants (const)",
                        description: `defines a range of mathematical and physical constants`
                    },
                    {
                        title: "Equation of State (eos)",
                        description: `provides the equation of state`
                    },
                    {
                        title: "Opacities (kap)",
                        description: `provides radiative opacities combined with conductive opacities`
                    },
                    {
                        title: "Nuclear Reaction Networks (net)",
                        description: `implements nuclear reaction networks`
                    },
                    {
                        title: "Thermal Neutrinos (neu)",
                        description: `provides the specific rates of energy loss via various thermal neutrino processes`
                    },
                    {
                        title: "Nuclear Reaction Rates (rates)",
                        description: `provides thermonuclear reaction rates and weak reaction rates`
                    },
                    {
                        title: "Turbulence (turb)",
                        description: `provides various mixing theories (semiconvection, thermohaline, mixing length theory, time-dependant convection)`
                    }
                ]}
            />

            <GlSectionDivider />

            <GlArticle
                title="Interested in trying MESA?"
                buttonLabel="Get Started Here"
                buttonLink={{
                    href: "https://docs.mesastar.org/en/24.08.1/quickstart.html"
                }}
                illustration={{
                    type: "image",
                    src: mesaLogoPng,
                    hasShadow: false
                }}
                hasAnimation={true}
            />
        </>
    );
}
