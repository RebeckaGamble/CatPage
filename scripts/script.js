function toggleNav() {
  const openMenu = document.getElementById("openNavMenu");
  const navBtn = document.getElementById("openNavBtn");
  let blurBg = document.getElementById("blurBg");

  if (openMenu.style.right === "-200px" || openMenu.style.right === "") {
    openMenu.style.right = "0";
    openMenu.classList.add("open");
    navBtn.style.display = "none";
    blurBg.style.display = "block";
  } else {
    openMenu.style.right = "-200px";
    openMenu.classList.remove("open");
    navBtn.style.display = "block";
    blurBg.style.display = "none";
  }
}

/*close nav on x-btn and when window reach desktop-size 768px */
function closeNavMenu() {
  const openMenu = document.getElementById("openNavMenu");
  const navBtn = document.getElementById("openNavBtn");
  let blurBg = document.getElementById("blurBg");

  if (window.innerWidth >= 768) {
    openMenu.style.right = "-200px";
    openMenu.classList.remove("open");
    navBtn.style.display = "none";
    blurBg.style.display = "none";
  } else {
    navBtn.style.display = "block";
  }
}

let fileInput;

/*add img to catGrid */
function handleImgUpload(e) {
  e.preventDefault();

  let fileInput = document.getElementById("file-upload-button");
  let catGrid = document.getElementById("catGrid");
  let imgUploadForm = document.getElementById("imgUpload");

  let files = fileInput.files;

  if (files.length === 0) {
    if (isSwedish) {
      alert("Välj en bild");
    } else {
      alert("Choose an image!");
    }
    return;
  }

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    if (file.type.startsWith("image")) {
      let newImg = document.createElement("img");
      newImg.className = "sectionThreeImg";
      newImg.alt = "Uploaded cat img";
      let reader = new FileReader();
      reader.onload = function (e) {
        newImg.src = e.target.result;
        catGrid.appendChild(newImg);
      };

      reader.readAsDataURL(file);
    } else {
      if (isSwedish) {
        alert("Vänligen välj en giltig bildfil!");
      } else {
        alert("Please select a valid image file!");
      }
    }
  }
  imgUploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  fileInput.value = "";
}

/*translate/toggle page language*/
let isSwedish = true;
function toggleLanguage() {
  let elementsToTranslate = document.querySelectorAll(".translate");
  let inputSubmitBtn = document.getElementById("inputSubmitBtn");
  let fileInput = document.getElementById("file-upload-button");
  let fileInputLabel = document.getElementById("sectionThreeImgLabel");

  elementsToTranslate.forEach((element) => {
    if (isSwedish) {
      inputSubmitBtn.value = "Add image";
      fileInput.value = "";
      fileInputLabel.textContent = "Add image:";

      element.textContent = getEnglishTranslation(element.id);
    } else {
      inputSubmitBtn.value = "Lägg till";
      fileInput.value = "";
      fileInputLabel.textContent = "Lägg till en bild: ";

      element.textContent = getSwedishTranslation(element.id);
    }
  });

  isSwedish = !isSwedish;
}

function getSwedishTranslation(id) {
  const translations = {
    pageTitle: "Kattsidan",
    startLink: "Start",
    catsLink: "Katter",
    aboutLink: "Om oss",
    contactLink: "Kontakt",
    transLang: "SV / EN",
    sectionOneTitle: "Välkommen till vår kattsida",
    sectionOneFirstText:
      "Här kan du upptäcka spännande fakta om katter och deras beteende. Utforska våra artiklar och bilder och lär dig mer om dessa underbara varelser.",
    sectionOneSecondText:
      "Om du älskar katter lika mycket som vi gör, varför inte gå med i vår kattklubb? Klicka på knappen nedan för att bli medlem!",
    memberBtn: "Bli medlem",
    sectionTwoTitle: "Våra katter",
    sectionTwoFirstText:
      "Här kan du läsa om några av våra underbara katter och deras personligheter. Kolla in bilder på dem nedan.",
    sectionThreeTitle: "Kattbilder",
    sectionThreeFirstText:
      "Kolla in några söta kattbilder här. Du kan lägga till fler bilder nedan.",
    sectionThreeImgLabel: "Ladda upp en bild: ",
    sectionFourTitle: "Om oss",
    sectionFourFirstText:
      "Lite information om vår kattklubb och vår kärlek till katter.",
    sectionFourSecondText:
      "Vi är en grupp kattälskare som älskar att dela vår passion för katter med andra. Vår kattklubb har funnits i flera år och vi är engagerade i att hjälpa katter och främja kattvård.",
    sectionFiveTitle: "Kontakt",
    sectionFiveFirstText:
      "Kontakta oss om du har frågor eller förslag. Vi älskar att höra från våra besökare.",
    sectionFiveSecondText: "Du kan nå oss på följande e-postadress: ",
    copy: " 2023 Kattsidan",
  };
  return translations[id];
}

function getEnglishTranslation(id) {
  const translations = {
    pageTitle: "The Cat Page",
    startLink: "Start",
    catsLink: "Cats",
    aboutLink: "About us",
    contactLink: "Contact",
    transLang: "SW / EN",
    sectionOneTitle: "Welcome to our cat page",
    sectionOneFirstText:
      "Here you can discover exciting facts about cats and their behavior. Explore our articles and images and learn more about them wonderful creatures.",
    sectionOneSecondText:
      "If you love cats as much as we do, why not join our cat club? Click the button below to become a member!",
    memberBtn: "Sign up",
    sectionTwoTitle: "Our cats",
    sectionTwoFirstText:
      "Here you can read about some of our wonderful cats and their personalities. Check out pictures of them below.",
    sectionThreeTitle: "Cat pictures",
    sectionThreeFirstText:
      "Check out some cute cat pictures here. You can add more images below.",
    sectionThreeImgLabel: "Upload an image: ",

    sectionFourTitle: "About us",
    sectionFourFirstText:
      "A little information about our cat club and our love for cats.",
    sectionFourSecondText:
      "We are a group of cat lovers who love to share our passion for cats with others. Our cat club has been around for several years and we are committed to helping cats and promoting cat care.",
    sectionFiveTitle: "Contact",
    sectionFiveFirstText:
      "Contact us if you have questions or suggestions. We love to hear from our visitors.",
    sectionFiveSecondText: "You can reach us at the following email address: ",
    copy: " 2023 The Cat Page",
  };
  return translations[id];
}

document.getElementById("openNavBtn").addEventListener("click", toggleNav);
document.getElementById("closeNavBtn").addEventListener("click", toggleNav);
window.addEventListener("resize", closeNavMenu);

closeNavMenu();
