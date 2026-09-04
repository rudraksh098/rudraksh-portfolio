/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "×";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   RECRUITER MODE
========================================= */

const roleButtons =
    document.querySelectorAll(".role-btn");

const skillCards =
    document.querySelectorAll(".skill-card");

const projectCards =
    document.querySelectorAll(".project-card");

const roleStatus =
    document.getElementById("roleStatus");


roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        roleButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const role =
            button.dataset.role;


        /* FILTER SKILLS */

        skillCards.forEach(card => {

            const tags =
                card.dataset.tags
                    ? card.dataset.tags.split(",")
                    : [];

            if (
                role === "all" ||
                tags.includes(role)
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });


        /* FILTER PROJECTS */

        projectCards.forEach(card => {

            const tags =
                card.dataset.tags
                    ? card.dataset.tags.split(",")
                    : [];

            if (
                role === "all" ||
                tags.includes(role)
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });


        /* STATUS TEXT */

        if (role === "all") {

            roleStatus.textContent =
                "Showing all relevant skills and projects.";

        }

        else if (role === "analyst") {

            roleStatus.textContent =
                "Showing skills and projects relevant to Data Analyst roles.";

        }

        else if (role === "scientist") {

            roleStatus.textContent =
                "Showing skills and projects relevant to Data Scientist roles.";

        }

        else if (role === "aiml") {

            roleStatus.textContent =
                "Showing AI, Machine Learning and Computer Vision work.";

        }

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

const projectModal =
    document.getElementById("projectModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalType =
    document.getElementById("modalType");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");


const projectData = {

    spacex: {

        type: "DATA SCIENCE CAPSTONE",

        title:
            "IBM Data Science Capstone — SpaceX Falcon 9",

        description:
            "A complete Data Science project focused on analyzing SpaceX Falcon 9 launch data and predicting first-stage landing outcomes. The project includes data collection, cleaning, exploratory analysis, SQL analysis, visualization and machine learning.",

        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "SQL",
            "Scikit-learn",
            "Plotly",
            "Folium",
            "Dash"
        ]

    },


    ipl: {

        type: "DATA ANALYSIS",

        title:
            "IPL Data Analysis",

        description:
            "An exploratory data analysis project using IPL match data to understand team performance, successful teams, toss impact, matches per season and important trends.",

        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Google Colab"
        ]

    },


    border: {

        type:
            "SIH COLLEGE HACKATHON 2026",

        title:
            "AI-Based Intelligent Video Analytics Platform for Border Surveillance",

        description:
            "An AI-powered video analytics platform designed for border surveillance using existing CCTV infrastructure. My role focused on AI/ML and video analytics development.",

        tech: [
            "Python",
            "OpenCV",
            "YOLO",
            "Deep Learning",
            "Machine Learning",
            "Pandas",
            "NumPy",
            "Flask/FastAPI",
            "SQL"
        ]

    },


    plant: {

        type:
            "PROJECT IN PROGRESS",

        title:
            "Plant Disease Detection",

        description:
            "An AI/ML project currently in progress that focuses on detecting plant diseases from leaf images using computer vision and machine learning techniques.",

        tech: [
            "Python",
            "Machine Learning",
            "AI",
            "Computer Vision"
        ]

    }

};


/* =========================================
   OPEN MODAL
========================================= */

const caseStudyButtons =
    document.querySelectorAll(".case-study-btn");


caseStudyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
            button.dataset.project;

        const data =
            projectData[project];


        if (!data) {
            return;
        }


        modalType.textContent =
            data.type;

        modalTitle.textContent =
            data.title;

        modalDescription.textContent =
            data.description;


        modalTech.innerHTML = "";


        data.tech.forEach(tech => {

            const span =
                document.createElement("span");

            span.textContent =
                tech;

            modalTech.appendChild(span);

        });


        projectModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =========================================
   PROFILE IMAGE CHECK
========================================= */

const profileImage =
    document.querySelector(".profile-image");


if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            console.warn(
                "Profile image not found. Check assets/profile.png"
            );

        }
    );

}