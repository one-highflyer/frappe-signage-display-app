let settings;
let swiper;
let signages;

getSignageSettings();
window.onload = registerSocketListener;

async function getSignageSettings() {
  try {
    const res = await frappe.call('signage_display.signage_display.doctype.signage_settings.signage_settings.get_signage_settings');
    settings = res.message
    initializeSwiper();
  } catch (err) {
    console.log(err);
  }
}
  
function initializeSwiper() {
  
  swiper = new Swiper('.swiper', {
    speed: 2000,
    direction: 'horizontal',
    autoPlay: {
      delay: settings.display_duration,
      disableOnInteraction: false,
    },
    slidesPerView: settings.column_count,
    grid: {
      rows: settings.row_count,
      fill: 'row'
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  
  swiper.autoplay.start();
  
  swiper.on("autoplayStop", () => {
    swiper.autoplay.start();
  });
} 

function updateSignageDisplay() {

  const signageHeight = Math.floor(80 / settings.row_count);

  //Remove old slides and add newly fetched signages
  swiper.removeAllSlides();
  for (let i = 0; i < signages.length; i++) { 
    swiper.appendSlide(createSlide(signages[i], signageHeight));
  }
  swiper.update();
}

function createSlide(signage, height) {

  return `
    <div class="swiper-slide" data-swiper-autoplay="${settings.display_duration}">
      <div class="card" style="height: ${height - 4}vh !important">
        ${signage.display_image ? 
          `<img src="${signage.display_image}" class="card-img" />
           <div class="card-img-overlay p-5">` : 
          `<div class="card-body p-5">`
        } 
          ${signage.show_title ? `<h1 class="card-title">${signage.title}</h1>` : ``}
          ${signage.description ? `<p class="card-text">${signage.description}</p>` : ``}
        </div>
      </div>
    </div>`
}

function registerSocketListener() {
  
  frappe.realtime.on("signage_update", (data) => {
    signages = data.signages;
    updateSignageDisplay();
  });
}