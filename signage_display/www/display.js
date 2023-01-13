frappe.call({
    method: 'signage_display.signage_display.doctype.signage_settings.signage_settings.get_signage_settings',
    callback: (res) => {
      settings = res.message
      initializeSwiper(settings);
    }
  })
  
  function initializeSwiper(settings) {

    // const swiperWrapper = document.querySelector(".swiper-wrapper");
    // const signageHeight = Math.ceil(80 / settings.row_count);
    // swiperWrapper.style.height = `${signageHeight}vh !important`;
  
    const swiper = new Swiper('.swiper', {
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
  
    swiper.on("autoplayPause", () => {
      swiper.autoplay.run();
    })
  
    swiper.on("autoplayStop", () => {
      swiper.autoplay.start();
    })
  }
  
  
  // let signages;
  
  // setInterval(() => {
  //   frappe.call({
  //     method: 'signage_display.signage_display.doctype.signage.signage.get_all_signages',
  //     callback: (res) => {
  //       signages = res.message;
  //       console.log(signages)
        
  //       let loadedCount = 0;
  //       signages.forEach(signage => {
  //         let img = new Image();
  //         img.onload = () => {
  //           console.log(loadedCount);
  //           loadedCount++;
  //           if (loadedCount === signages.length) {
  //             swiper.removeAllSlides();
  //             for (let i = 0; i < signages.length; i++) {  
  //               swiper.appendSlide(`
  //                 <div class="swiper-slide" data-swiper-autoplay="20000">
  //                   <div class="card">
  //                       <div class="text-center">
  //                           ${signages[i].img.outerHTML}
  //                       </div>
  //                       <div class="card-body">
  //                           <article>${signages[i].title}</article>
  //                       </div>
  //                   </div>
  //                 </div>
  //               `)
  //             }
  //             swiper.update()
  //           }
  //         }
  //         img.src = signage.display_image;
  //         img.className = "card-img-top";
  //         signage.img = img;
  //       })
  //     }
  //   })
  // }, 40000);
  
  