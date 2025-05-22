const apartments = [
    {
        address: "Rostov-on-Don\nLCD admiral",
        area: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request",
        image: "images/image1.png"
    },
    {
        address: "Sochi\nThieves",
        area: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request",
        image: "images/image2.png"
    },
    {
        address: "Rostov-on-Don\nPatriotic",
        area: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request",
        image: "images/image3.png"
    }
];

const info = document.querySelectorAll(".main__list-info");
const image = document.querySelector(".slider__image");
const pagination = document.querySelectorAll(".controls__pagination-button");
const tabs = document.querySelectorAll(".slider__tabs-button");
const tabsGroup = document.querySelector(".slider__tabs");

const fields = ["address", "area", "repairTime", "repairCost"];

function setImage(index) { 
    const apartment = apartments[index];

    fields.forEach((field, i) => { 
        info[i].innerText = apartment[field];
    })

    image.src = apartment.image;

    pagination.forEach((dot) => { dot.classList.remove("controls__pagination-button--active" ) })
    tabs.forEach((tab) => { tab.classList.remove("slider__tabs-button--active" ) })

    pagination[index].classList.add("controls__pagination-button--active");
    tabs[index].classList.add("slider__tabs-button--active");
}

setImage(0);

const prevButton = document.querySelector(".controls__prev-button");
const nextButton = document.querySelector(".controls__next-button");

let index = 0;

prevButton.addEventListener("click", () => { 
    if (index <= 0) {
        index = 2;
    } else { 
        index--;
    }
    setImage(index);
    underlineHandler(tabs[index]);
});

nextButton.addEventListener("click", () => { 
    if (index >= 2) {
        index = 0;
    } else { 
        index++;
    }
    setImage(index);
    underlineHandler(tabs[index]);
});

const underline = document.createElement("span");
underline.classList.add("slider__tabs-underline");

tabs.forEach((tab, i) => { 
    tab.addEventListener("click", () => { 
        index = i;
        setImage(index);
        underlineHandler(tab);
    });

    
    if (tab.classList.contains("slider__tabs-button--active")) {
        underline.style.transition = "none"; 
        underlineHandler(tab); 
        requestAnimationFrame(() => {
            underline.style.transition = "all 0.3s ease";
        });
    }
});

tabsGroup.appendChild(underline);

pagination.forEach((dot, i) => { 
    dot.addEventListener("click", () => { 
        setImage(i);
        underlineHandler(tabs[index]);
    });
})

let resizeTimer;

window.addEventListener("resize", () => {
    underline.style.transition = "none";
    underlineHandler(tabs[index]);

    clearTimeout(resizeTimer);

    
    resizeTimer = setTimeout(() => {
        underline.style.transition = "left 0.3s ease";
    }, 200);
});


function underlineHandler(tab) { 
    const coords = tab.getBoundingClientRect();
    underline.style.top = coords.bottom + 6.68 + "px";
    underline.style.left = coords.left + "px";
    underline.style.width = coords.width + "px";
    underline.style.height = "1px";
}


