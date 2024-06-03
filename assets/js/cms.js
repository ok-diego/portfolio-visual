import * as prismic from "@prismicio/client";
export default class CMS {
  constructor() {
    // const repositoryName = "https://test-vite-prismic.cdn.prismic.io/api/v2";
    const repositoryName = "https://portfolio-workshop.cdn.prismic.io/api/v2";
    // const repositoryName = process.env.PRISMIC_DEV_API_KEY;

    const client = prismic.createClient(repositoryName);

    const init = async () => {
      const prismicDoc = await client.getSingle("homepage");
      this.populate(prismicDoc.data);
    };
    init();
  }

  populate(data) {
    //? - =========================  global  ========================= -//
    //? - =========================  global  ========================= -//
    //Change CSS variables
    const $html = document.querySelector("html");
    $html.style.setProperty("--color", data.color);
    $html.style.setProperty("--bg", data.bg);
    $html.style.setProperty("--border", data.border);
    $html.style.setProperty("--gray", data.gray);
    $html.style.setProperty("--black", data.black);
    $html.style.setProperty("--white", data.white);

    //? - =========================  welcome  ========================= -//
    //? - =========================  welcome  ========================= -//
    const $welcome_each = document.querySelectorAll(".welcome__text");
    data.welcome_group.forEach((item, index) => {
      $welcome_each[index].innerText = item.text;
    });

    //? - =========================  hero  ========================= -//
    //? - =========================  hero  ========================= -//
    const $hero_span = document.querySelectorAll(".hero__marquee h1 span");
    const $hero_imgs = document.querySelectorAll(".hero__media li img");
    $hero_span.forEach((item) => {
      item.innerText = data.hero_marquee_text;
    });
    $hero_imgs.forEach((item, index) => {
      item.src = data.hero_images[index].img.url;
    });

    // //? - =========================  about  ========================= -//
    // //? - =========================  about  ========================= -//
    const $about_title = document.querySelector(".about__title");
    const $about_subt = document.querySelector(".about__h2");
    const $about_p = document.querySelector(".about__info p");
    const $about_img_light = document.querySelector(".about .photo-light img");
    const $about_img_dark = document.querySelector(".about .photo-dark img");
    const about_p_HTML = prismic.asText(data.about_description);

    $about_title.innerText = data.about_title;
    $about_subt.innerText = data.about_subtitle;
    $about_p.innerText = about_p_HTML;
    $about_img_light.src = data.about_image_light.url;
    $about_img_dark.src = data.about_image_dark.url;

    // //? - =========================  display  ========================= -//
    // //? - =========================  display  ========================= -//
    const $displa_imgs = document.querySelectorAll(".display-imgs__media img");
    $displa_imgs.forEach((item, index) => {
      if (index === 0) {
        item.src = data.display_image_left.url;
      } else if (index === 1) {
        item.src = data.display_image_right.url;
      }
    });

    // //? - =========================  expertises  ========================= -//
    // //? - =========================  expertises  ========================= -//
    const $each_expertise = document.querySelectorAll(".expertises__each");
    $each_expertise.forEach((item, index) => {
      item.querySelector("h3").innerText = data.expertises_group[index].title;
      item.querySelector("p").innerText = data.expertises_group[index].text;
    });

    // //? - =========================  projects  ========================= -//
    // //? - =========================  projects  ========================= -//
    console.log(data.projects_group);
    const $project_each = document.querySelectorAll(".projects__each");
    $project_each.forEach((item, index) => {
      item.querySelector("h3").innerText = data.projects_group[index].title;
      item.querySelector("p").innerText = data.projects_group[index].text;
      item.querySelector("img").src = data.projects_group[index].image.url;
    });

    // //? - =========================  cta  ========================= -//
    // //? - =========================  cta  ========================= -//
    const $cta_title = document.querySelector(".cta__title");
    const $cta_subtitle = document.querySelector(".cta__subtitle");
    const $cta_paragraph = document.querySelector(".cta__parag");
    const $cta_button = document.querySelector(".cta__btn .main-btn__span");
    $cta_title.innerText = data.cta_title;
    $cta_subtitle.innerText = data.cta_subtitle;
    $cta_paragraph.innerHTML = prismic.asText(data.cta_paragraph);
    $cta_button.innerText = data.cta_button_label;
  }
}
