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
import { CopyBlock, dracula } from "react-code-blocks";
import { useEffect, useState } from "react";
import mesaBib from "./assets/txt/mesa.bib.txt";
/*import mesaIconPng from "./assets/img/mesa-favicon.png";*/
import mesaLogoPng from "./assets/img/mesa-logo.png";
import mesaMp4 from "./assets/videos/mesa1.mp4";
import mesaPng from "./assets/img/mesa-favicon.png";
import sdkPng from "./assets/img/sdk.png";
import githubPng from "./assets/img/github.png";
import readthedocsPng from "./assets/img/readthedocs.png";
import zenodoPng from "./assets/img/zenodo.png";
import mailmanPng from "./assets/img/mailman.png";
import pythonPng from "./assets/img/python.png";
import webPng from "./assets/img/web.png";
import schoolPng from "./assets/img/school.png";
import { OnyxiaUi } from "theme";

export function App() {
    return (
        <OnyxiaUi>
            <AppContextualized />
        </OnyxiaUi>
    );
}

function useMesaBibTxt() {
    const [mesaBibTxt, setMesaBibTxt] = useState<string>("");

    useEffect(() => {
        fetch(mesaBib)
            .then(response => response.text())
            .then(text => setMesaBibTxt(text))
            .catch(error => console.error("Error fetching mesa.bib.txt:", error));
    }, []);

    return mesaBibTxt;
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
            title={<img src={mesaLogoPng} width="180" alt="MESA" />}
            links={[
                {
                    label: "Docs",
                    href: "https://docs.mesastar.org"
                },
                {
                    label: "Code",
                    href: "https://github.com/MESAHub/mesa"
                },
                {
                    label: "Zenodo",
                    href: "https://zenodo.org/communities/mesa"
                },
                {
                    label: "Summer Schools",
                    href: "https://mesastar.org/summer-schools/"
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
            bottomDivContent="© Copyright 2025, The MESA Team. - [GitHub](https://github.com/MESAHub/mesa) - [Documentation](https://docs.mesastar.org) - [Edit this website](https://github.com/MESAHub/MESAHub.github.io)"
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

            <GlArticle
                title="Interested in trying MESA?"
                buttonLabel="Install MESA"
                buttonLink={{
                    href: "https://docs.mesastar.org/en/latest/installation.html"
                }}
                illustration={{
                    type: "image",
                    src: mesaLogoPng,
                    hasShadow: false
                }}
                hasAnimation={true}
            />

            <GlCards>
                {
                    <>
                        <GlLogoCard
                            title="MESA"
                            paragraph={`Latest MESA release version`}
                            buttonLabel="Get MESA"
                            link={{
                                href: "https://zenodo.org/records/13353788"
                            }}
                            iconUrls={[mesaPng]}
                        />
                        <GlLogoCard
                            title="MESA SDK"
                            paragraph={`MESA Software Development Kit`}
                            buttonLabel="Get MESA SDK"
                            link={{
                                href: "http://user.astro.wisc.edu/~townsend/static.php?ref=mesasdk"
                            }}
                            iconUrls={[sdkPng]}
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
                            title="Code Repository"
                            paragraph={`Source code hosted on GitHub`}
                            buttonLabel="Check out source code"
                            link={{
                                href: "https://github.com/MESAHub/mesa"
                            }}
                            iconUrls={[githubPng]}
                        />
                        <GlLogoCard
                            title="Zenodo Community"
                            paragraph={`Official release versions, SDKs, and MESA project inlists downloads`}
                            buttonLabel="Go to Zenodo"
                            link={{
                                href: "https://zenodo.org/communities/mesa"
                            }}
                            iconUrls={[zenodoPng]}
                        />
                        <GlLogoCard
                            title="MESA Marketplace "
                            paragraph={`Resources for published papers using MESA`}
                            buttonLabel="Go to Marketplace"
                            link={{
                                href: "https://mesastar.org/marketplace/"
                            }}
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="MESA Users Mailing List"
                            paragraph={`Info about new releases, news items, and requests for help/bug reports`}
                            buttonLabel="Sign up for mailing list"
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
                        <GlLogoCard
                            title="MESA Summer Schools"
                            paragraph={`Materials from past MESA schools and how to host your own`}
                            buttonLabel="Check out MESA summer schools"
                            link={{
                                href: "https://mesastar.org/summer-schools/"
                            }}
                            iconUrls={[schoolPng]}
                        />
                        <GlLogoCard
                            title="MESA-web"
                            paragraph={`Web interface to run MESA experiments`}
                            buttonLabel="Use MESA-web"
                            link={{
                                href: "http://user.astro.wisc.edu/~townsend/static.php?ref=mesa-web-submit"
                            }}
                            iconUrls={[webPng]}
                        />
                    </>
                }
            </GlCards>

            <GlSectionDivider />

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
                        title: "Asteroseismology (astero)",
                        description: `calculates asteroseismic variables`
                    },
                    {
                        title: "Atmospheres (atm)",
                        description: `calculates the surface temperature and pressure, to use as boundary conditions`
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
                        title: "Colors (colors)",
                        description: `calculates on-the-fly colors of stars as observed by different instruments/filters`
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
                title="Cite the MESA papers"
                body={
                    <div style={{ maxHeight: "420px", overflowY: "auto", width: "700px" }}>
                        <CopyBlock
                            language={"bash"}
                            text={useMesaBibTxt()}
                            showLineNumbers={true}
                            theme={dracula}
                            codeBlock
                        />
                    </div>
                }
            />

            <GlSectionDivider />

            <GlArticle
                title="About"
                body={
                    <div style={{ maxWidth: "820px" }}>
                        <p>
                            MESA (Modules for Experiments in Stellar Astrophysics) is an open-source
                            suite for stellar evolution research and education. It combines
                            state-of-the-art physics modules with a flexible framework, enabling users to
                            run reproducible experiments from pre-main-sequence through advanced
                            evolutionary phases.
                        </p>
                        <p>
                            MESA was primarily developed through the concerted efforts of Bill Paxton
                            over a 10-year period with the engagement and deep involvement of many
                            theoretical and computational astrophysicists. Over the past decade, MESA has
                            grown into an international community resource. The project is maintained by
                            the MESA community. To get involved, report issues, or contribute
                            improvements, please visit the Documentation and GitHub links in the header.
                        </p>
                        <p>
                            For more info, see the{" "}
                            <a
                                href="https://docs.mesastar.org/en/latest/about.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                About MESA
                            </a>{" "}
                            page in the documentation.
                        </p>
                    </div>
                }
                hasAnimation={true}
            />
        </>
    );
}
