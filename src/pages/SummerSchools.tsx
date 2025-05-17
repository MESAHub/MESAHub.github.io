import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { GlArticle } from "gitlanding/GlArticle";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { OnyxiaUi } from "theme";
import mesaLogoPng from "../assets/img/mesa-logo.png";

export function SummerSchools() {
    return (
        <OnyxiaUi>
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
        </OnyxiaUi>
    );
}

function Header() {
    return (
        <GlHeader
            title={
                <a href="https://mesastar.org">
                    <img src={mesaLogoPng} width="180" alt="MESA" />
                </a>
            }
            links={[
                {
                    label: "GitHub",
                    href: "https://github.com/MESAHub/mesa"
                },
                {
                    label: "Documentation",
                    href: "https://docs.mesastar.org"
                },
                {
                    label: "Summer Schools",
                    href: "/summer-schools"
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
            <GlArticle
                title="MESA Summer Schools"
                body={
                    <div>
                        <p>
                            MESA Summer Schools provide intensive week-long training in stellar evolution
                            modeling using the MESA code. These schools are designed for students and
                            researchers who want to learn how to use MESA for their research projects.
                        </p>
                        <p>Each school typically includes:</p>
                        <ul>
                            <li>Hands-on tutorials with MESA</li>
                            <li>Lectures on stellar evolution theory</li>
                            <li>Networking opportunities with the MESA community</li>
                        </ul>
                        <p>Below is a list of past and upcoming MESA Summer Schools.</p>
                        <ul>
                            <li>
                                <a href="https://mesa-leuven.4d-star.org/">MESA Summer School 2025</a> at
                                KU Leuven, Beligum
                            </li>
                            <li>
                                <a href="https://maygpedersen.github.io/mesa-down-under-2024/">
                                    MESA Down Under 2024
                                </a>{" "}
                                at University of Sydney, Australia
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2023/">MESA@Konkoly 2023</a>{" "}
                                at Konkoly Observatory, Hungary
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2022/">
                                    MESA Summer School 2022
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2021/">
                                    MESA Summer School 2021
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2020/">
                                    MESA Summer School 2020
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2019/">
                                    MESA Summer School 2019
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2018/">
                                    MESA Summer School 2018
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2017/">
                                    MESA Summer School 2017
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2016/">
                                    MESA Summer School 2016
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2015/">
                                    MESA Summer School 2015
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2014/">
                                    MESA Summer School 2014
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2013/">
                                    MESA Summer School 2013
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                            <li>
                                <a href="https://mesastar.org/summer-school-2012/">
                                    MESA Summer School 2012
                                </a>{" "}
                                at UC Santa Barbara
                            </li>
                        </ul>
                    </div>
                }
            />

            <GlSectionDivider />

            <GlArticle
                title="Host a Summer School"
                body={
                    <div>
                        <p>
                            If you are interested in hosting a future summer school, the MESA Dev team is
                            happy to help. MESA Summer Schools are typically organized by a local host
                            institution, with support from the MESA Dev team, and can be run anywhere in
                            the world. Please check out the following page for more information on how to
                            host a summer school:
                        </p>
                        <ul>
                            <li>
                                <a href="https://docs.mesastar.org/en/latest/summer_schools.html">
                                    How to Run a MESA Summer School
                                </a>
                            </li>
                        </ul>
                        <p>
                            MESA Summer Schools follow the MESA Code of Conduct, which is designed to
                            create a welcoming and inclusive environment for all participants.
                            https://docs.mesastar.org/en/latest/code_of_conduct.html
                        </p>
                        <ul>
                            <li>
                                <a href="https://docs.mesastar.org/en/latest/code_of_conduct.html">
                                    MESA Code of Conduct
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            />

            <GlSectionDivider />
        </>
    );
}
