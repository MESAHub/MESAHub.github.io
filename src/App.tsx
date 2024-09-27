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
            title={<img src={mesaLogoPng} width="300" alt="MESA" />}
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
                            paragraph={`Lorem`}
                            buttonLabel="Code repository"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731995-136d4baf-58a6-4cb3-a72c-b8ddce835b3c.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                nisl nec hendrerit rutrum, 
                mi enim semper arcu, ut imperdiet urna libero non metus.`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png"
                            ]}
                        />
                        <GlLogoCard
                            title="Card title"
                            paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                nisl nec hendrerit rutrum, 
                mi enim semper arcu, ut imperdiet urna libero non metus.`}
                            buttonLabel="Button Label"
                            iconUrls={[
                                "https://user-images.githubusercontent.com/39378411/135731991-3da13e97-c2f7-42b2-88ab-055aff0d6ae9.png",
                                "https://user-images.githubusercontent.com/39378411/135731994-29a3c46a-0d92-4ec8-954e-39bfeeb06534.png",
                                "https://user-images.githubusercontent.com/39378411/135731998-e01a7970-a7c4-4041-b07c-341e075207d2.png",
                                "https://user-images.githubusercontent.com/39378411/135731990-8f64ce8e-d655-4ded-9561-3d7f6893d06e.png"
                            ]}
                            overlapIcons={true}
                        />
                    </>
                }
            </GlCards>

            <GlArticle
                title="Article title"
                body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
        nisl nec hendrerit rutrum, 
        mi enim semper arcu, ut imperdiet urna libero non metus. 
        Donec imperdiet ac nulla sit amet lacinia. 
        Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
        Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
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

            <GlCheckList
                heading="Modules"
                hasAnimation={true}
                elements={[
                    {
                        title: "List element title",
                        setIconColorOverride: colors => ({
                            iconColor: colors.palette.greenSuccess.main
                        }),
                        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `
                    },
                    {
                        title: "List element title",
                        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `
                    },
                    {
                        title: "List element title",
                        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `
                    },
                    {
                        title: "List element title",
                        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `
                    },
                    {
                        description: `(Only description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              nisl nec hendrerit rutrum, 
              mi enim semper arcu, ut imperdiet urna libero non metus. 
              Donec imperdiet ac nulla sit amet lacinia.
            `
                    },
                    {
                        title: "(Only title) List element title"
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
