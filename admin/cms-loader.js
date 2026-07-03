(function() {
  const CMS_KEY = 'plankraft_cms';
  
  // Define CSS selectors for each editable field in the CMS
  const CMS_MAP = {
    // HOME PAGE
    'home.heroTitle': { selector: '.hero-text', type: 'text' },
    'home.heroSubtitle': { selector: '.hero-subtitle p', type: 'html' },
    'home.heroStat1': { selector: '.hero-stats span:nth-child(1)', type: 'text' },
    'home.heroStat2': { selector: '.hero-stats span:nth-child(3)', type: 'text' },
    'home.heroStat3': { selector: '.hero-stats span:nth-child(5)', type: 'text' },
    
    'home.legacyTitle': { selector: '#latest .latest-title', type: 'text' },
    'home.legacyDesc': { selector: '#latest .latest-desc', type: 'text' },
    'home.legacyPanel1Name': { selector: '#latest .legacy-panel:nth-child(1) h3', type: 'text' },
    'home.legacyPanel1Meta': { selector: '#latest .legacy-panel:nth-child(1) .legacy-panel-meta', type: 'text' },
    'home.legacyPanel2Name': { selector: '#latest .legacy-panel:nth-child(2) h3', type: 'text' },
    'home.legacyPanel2Meta': { selector: '#latest .legacy-panel:nth-child(2) .legacy-panel-meta', type: 'text' },
    'home.legacyPanel3Name': { selector: '#latest .legacy-panel:nth-child(3) h3', type: 'text' },
    'home.legacyPanel3Meta': { selector: '#latest .legacy-panel:nth-child(3) .legacy-panel-meta', type: 'text' },
    
    'home.aboutHeading': { selector: '#about .about-heading', type: 'html' },
    'home.aboutSub': { selector: '#about .about-sub', type: 'text' },
    'home.aboutSpecializing': { selector: '#about .about-col:nth-child(2) p', type: 'html' },
    'home.aboutPrecision': { selector: '#about .about-col:nth-child(3) p', type: 'html' },
    
    'home.servicesLabel': { selector: '#services .section-label', type: 'text' },
    'home.servicesHeading': { selector: '#services .section-title', type: 'text' },
    'home.servicesDesc': { selector: '#services .services-intro p', type: 'html' },
    'home.ceoReviewText': { selector: '#services .ceo-review p', type: 'text' },
    'home.ceoName': { selector: '#services .ceo-author h4', type: 'text' },
    'home.ceoRole': { selector: '#services .ceo-author span', type: 'text' },
    
    'home.svcCard1Title': { selector: '#services .service-card:nth-child(1) h3', type: 'text' },
    'home.svcCard1Desc': { selector: '#services .service-card:nth-child(1) p', type: 'html' },
    'home.svcCard2Title': { selector: '#services .service-card:nth-child(2) h3', type: 'text' },
    'home.svcCard2Desc': { selector: '#services .service-card:nth-child(2) p', type: 'html' },
    'home.svcCard3Title': { selector: '#services .service-card:nth-child(3) h3', type: 'text' },
    'home.svcCard3Desc': { selector: '#services .service-card:nth-child(3) p', type: 'html' },
    'home.svcCard4Title': { selector: '#services .service-card:nth-child(4) h3', type: 'text' },
    'home.svcCard4Desc': { selector: '#services .service-card:nth-child(4) p', type: 'html' },
    
    'home.galleryLabel': { selector: '#gallery .section-label', type: 'text' },
    'home.galleryTitle': { selector: '#gallery .section-title', type: 'text' },
    'home.bentoTag1': { selector: '#gallery .bento-item:nth-child(1) .bento-tag', type: 'text' },
    'home.bentoTitle1': { selector: '#gallery .bento-item:nth-child(1) .bento-title', type: 'text' },
    'home.bentoTag2': { selector: '#gallery .bento-item:nth-child(2) .bento-tag', type: 'text' },
    'home.bentoTitle2': { selector: '#gallery .bento-item:nth-child(2) .bento-title', type: 'text' },
    'home.bentoTag3': { selector: '#gallery .bento-item:nth-child(3) .bento-tag', type: 'text' },
    'home.bentoTitle3': { selector: '#gallery .bento-item:nth-child(3) .bento-title', type: 'text' },
    'home.bentoTag4': { selector: '#gallery .bento-item:nth-child(4) .bento-tag', type: 'text' },
    'home.bentoTitle4': { selector: '#gallery .bento-item:nth-child(4) .bento-title', type: 'text' },
    'home.bentoTag5': { selector: '#gallery .bento-item:nth-child(5) .bento-tag', type: 'text' },
    'home.bentoTitle5': { selector: '#gallery .bento-item:nth-child(5) .bento-title', type: 'text' },
    
    'home.ctaTitle': { selector: '#contact .cta-title', type: 'text' },
    'home.ctaBtn': { selector: '#contact .btn-accent span', type: 'text' },
    
    // ABOUT PAGE
    'about.heroTopText': { selector: '.about-hero .hero-text-top', type: 'html' },
    'about.heroBottomText': { selector: '.about-hero .hero-text-bottom', type: 'html' },
    'about.statementYear': { selector: '.statement-year', type: 'text' },
    'about.statementHeading': { selector: '.statement-heading', type: 'html' },
    'about.visionText': { selector: '.about-grid .col:nth-child(2) p', type: 'html' }, // approx
    'about.missionText': { selector: '.about-grid .col:nth-child(3) p', type: 'html' }, // approx
    'about.step1Title': { selector: '.process-step:nth-child(1) h3', type: 'text' },
    'about.step1Desc': { selector: '.process-step:nth-child(1) p', type: 'html' },
    'about.step2Title': { selector: '.process-step:nth-child(2) h3', type: 'text' },
    'about.step2Desc': { selector: '.process-step:nth-child(2) p', type: 'html' },
    'about.step3Title': { selector: '.process-step:nth-child(3) h3', type: 'text' },
    'about.step3Desc': { selector: '.process-step:nth-child(3) p', type: 'html' },
    'about.step4Title': { selector: '.process-step:nth-child(4) h3', type: 'text' },
    'about.step4Desc': { selector: '.process-step:nth-child(4) p', type: 'html' },
    
    // SERVICES PAGE
    'services.heroTitle': { selector: '.services-hero h1', type: 'text' },
    'services.heroDesc': { selector: '.services-hero p', type: 'html' },
    'services.coreHeading': { selector: '.core-offerings h2', type: 'text' },
    'services.check0Name': { selector: '.checklist-item:nth-child(1) h4', type: 'text' },
    'services.check0Desc': { selector: '.checklist-item:nth-child(1) p', type: 'html' },
    'services.check1Name': { selector: '.checklist-item:nth-child(2) h4', type: 'text' },
    'services.check1Desc': { selector: '.checklist-item:nth-child(2) p', type: 'html' },
    'services.check2Name': { selector: '.checklist-item:nth-child(3) h4', type: 'text' },
    'services.check2Desc': { selector: '.checklist-item:nth-child(3) p', type: 'html' },
    'services.check3Name': { selector: '.checklist-item:nth-child(4) h4', type: 'text' },
    'services.check3Desc': { selector: '.checklist-item:nth-child(4) p', type: 'html' },
    'services.check4Name': { selector: '.checklist-item:nth-child(5) h4', type: 'text' },
    'services.check4Desc': { selector: '.checklist-item:nth-child(5) p', type: 'html' },
    'services.check5Name': { selector: '.checklist-item:nth-child(6) h4', type: 'text' },
    'services.check5Desc': { selector: '.checklist-item:nth-child(6) p', type: 'html' },
    'services.check6Name': { selector: '.checklist-item:nth-child(7) h4', type: 'text' },
    'services.check6Desc': { selector: '.checklist-item:nth-child(7) p', type: 'html' },
    'services.check7Name': { selector: '.checklist-item:nth-child(8) h4', type: 'text' },
    'services.check7Desc': { selector: '.checklist-item:nth-child(8) p', type: 'html' },
    'services.check8Name': { selector: '.checklist-item:nth-child(9) h4', type: 'text' },
    'services.check8Desc': { selector: '.checklist-item:nth-child(9) p', type: 'html' },
    
    // CONTACT PAGE
    'contact.heroTitle': { selector: '.contact-hero h1', type: 'text' },
    'contact.heroDesc': { selector: '.contact-hero p', type: 'html' },
    'contact.sectionTitle': { selector: '.contact-section-title', type: 'text' },
    'contact.servicesList': { selector: '.contact-services-list', type: 'html' },
    'contact.formTitle': { selector: '.contact-form-title', type: 'text' },
    
    // GALLERY PAGES
    'gallery.heroTitle': { selector: '.gallery-hero h1', type: 'text' },
    'gallery.heroDesc': { selector: '.gallery-hero p', type: 'html' },
    'gallery.imgSectionTitle': { selector: '.gallery-img-section h2', type: 'text' },
    'gallery.vidSectionTitle': { selector: '.gallery-vid-section h2', type: 'text' },
    'galleryImages.pageTitle': { selector: '.gallery-images-hero h1', type: 'text' },
    'galleryImages.pageDesc': { selector: '.gallery-images-hero p', type: 'html' },
    'galleryVideos.pageTitle': { selector: '.gallery-videos-hero h1', type: 'text' },
    'galleryVideos.pageDesc': { selector: '.gallery-videos-hero p', type: 'html' },
  };

  function applyCMSData() {
    try {
      const raw = localStorage.getItem(CMS_KEY);
      if (!raw) return;
      const d = JSON.parse(raw);
      
      // 1. Global Settings
      if (d.settings) {
        if (d.settings.siteTitle) {
          document.title = document.title.replace(/PlanKraft/g, d.settings.siteTitle);
          document.querySelectorAll('.logo-text, .footer-logo-text').forEach(el => {
            el.textContent = d.settings.siteTitle;
          });
        }
        
        if (d.settings.metaTitle) {
          document.title = d.settings.metaTitle;
          let metaT = document.querySelector('meta[name="title"]') || document.querySelector('meta[property="og:title"]');
          if (!metaT) { metaT = document.createElement('meta'); metaT.name = 'title'; document.head.appendChild(metaT); }
          metaT.content = d.settings.metaTitle;
        }
        
        if (d.settings.metaDesc) {
          let metaD = document.querySelector('meta[name="description"]') || document.querySelector('meta[property="og:description"]');
          if (!metaD) { metaD = document.createElement('meta'); metaD.name = 'description'; document.head.appendChild(metaD); }
          metaD.content = d.settings.metaDesc;
        }
        
        // Footer Data
        const fDesc = document.querySelector('.footer-desc');
        if (fDesc && d.settings.metaDesc) fDesc.textContent = d.settings.metaDesc; // Use meta as footer desc
        
        const fCopy = document.querySelector('.footer-bottom p');
        if (fCopy && d.settings.copyright) fCopy.textContent = d.settings.copyright;
        
        const cAddr = document.querySelectorAll('.contact-info-block.address p, .footer-address');
        if (cAddr && d.settings.address) cAddr.forEach(el => el.innerHTML = d.settings.address.replace(/\\n|\n/g, '<br>'));
        
        const cPhone = document.querySelectorAll('.contact-info-block.phone a, .footer-phone');
        if (cPhone) cPhone.forEach(el => { el.textContent = d.settings.phone1; el.href = 'tel:' + d.settings.phone1.replace(/[^0-9+]/g, ''); });
        
        const cEmail = document.querySelectorAll('.contact-info-block.email a, .footer-email');
        if (cEmail) cEmail.forEach(el => { el.textContent = d.settings.email; el.href = 'mailto:' + d.settings.email; });

        // Social Links
        const socLinks = document.querySelectorAll('.social-links a');
        if (socLinks.length >= 4) {
          if (d.settings.facebook) socLinks[0].href = d.settings.facebook;
          if (d.settings.instagram) socLinks[1].href = d.settings.instagram;
          if (d.settings.whatsapp) socLinks[2].href = d.settings.whatsapp;
          if (d.settings.youtube) socLinks[3].href = d.settings.youtube;
        }
      }

      // 2. Page Content Mapping
      if (d.pages) {
        Object.keys(CMS_MAP).forEach(key => {
          const [page, field] = key.split('.');
          if (d.pages[page] && d.pages[page][field]) {
            const el = document.querySelector(CMS_MAP[key].selector);
            if (el) {
              const val = d.pages[page][field];
              if (CMS_MAP[key].type === 'html') {
                el.innerHTML = val.replace(/\\n|\n/g, '<br>');
              } else {
                el.textContent = val;
              }
            }
          }
        });
      }

      // 3. Hidden Default Media
      if (d.media && d.media.hidden && d.media.hidden.length > 0) {
        document.querySelectorAll('img').forEach(img => {
           const src = img.getAttribute('src');
           if (src && d.media.hidden.some(h => src.includes(h))) {
             img.style.display = 'none';
             if (img.parentElement && img.parentElement.classList.contains('gallery-item')) {
                img.parentElement.style.display = 'none';
             }
             if (img.parentElement && img.parentElement.classList.contains('bento-item')) {
                img.parentElement.style.display = 'none';
             }
           }
        });
      }

      // 4. Custom Uploaded Media (Inject into Gallery grids if present)
      if (d.media && d.media.uploaded && d.media.uploaded.length > 0) {
         // Gallery Images Page
         const imageGrid = document.querySelector('.images-grid') || document.querySelector('.gallery-images-container');
         if (imageGrid && !imageGrid.dataset.cmsInjected) {
            imageGrid.dataset.cmsInjected = 'true';
            d.media.uploaded.slice().reverse().forEach(media => {
               if (!media.hidden) {
                  const wrapper = document.createElement('div');
                  wrapper.className = 'gallery-item reveal';
                  wrapper.innerHTML = `
                    <div class="gallery-item-inner">
                      <img src="${media.data}" alt="${media.name}" class="img-loaded">
                      <div class="gallery-overlay"><div class="view-btn">View</div></div>
                    </div>
                  `;
                  imageGrid.insertBefore(wrapper, imageGrid.firstChild);
               }
            });
         }
      }

      // 5. Hero Slides Visibility
      if (d.heroSlides) {
         const houses = document.querySelectorAll('.house-wrapper');
         if (houses.length > 0) {
            d.heroSlides.forEach((slide, i) => {
               if (!slide.visible && houses[i]) {
                  houses[i].style.display = 'none';
               }
            });
         }
      }

      // 6. Reviews
      if (d.reviews && d.reviews.length > 0) {
         const reviewContainer = document.querySelector('.reviews-grid') || document.querySelector('.review-cards');
         if (reviewContainer && !reviewContainer.dataset.cmsInjected) {
             reviewContainer.dataset.cmsInjected = 'true';
             reviewContainer.innerHTML = '';
             d.reviews.forEach((r, i) => {
                const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
                reviewContainer.innerHTML += `
                  <div class="review-card reveal stagger-${Math.min(i+1, 5)}">
                    <div class="review-stars" style="color:var(--gold);margin-bottom:1rem;font-size:1.2rem">${stars}</div>
                    <p class="review-text" style="margin-bottom:1.5rem;font-style:italic">"${r.text}"</p>
                    <div class="review-author" style="display:flex;align-items:center;gap:1rem">
                      <div class="author-avatar" style="width:40px;height:40px;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:700">${r.author.charAt(0)}</div>
                      <div class="author-info">
                        <h4 style="margin:0;font-size:1rem">${r.author}</h4>
                        <span style="font-size:0.8rem;color:var(--text-muted)">Client</span>
                      </div>
                    </div>
                  </div>
                `;
             });
         }
         
         const reviewTitle = document.querySelector('.reviews-header h2');
         if (reviewTitle && d.reviewsTitle) reviewTitle.textContent = d.reviewsTitle;
         
         const reviewSubtitle = document.querySelector('.reviews-header p');
         if (reviewSubtitle && d.reviewsSubtitle) reviewSubtitle.textContent = d.reviewsSubtitle;
      }

      // 7. Ticker
      if (d.ticker && d.ticker.length > 0) {
         const tickerTrack = document.querySelector('.ticker-track');
         if (tickerTrack && !tickerTrack.dataset.cmsInjected) {
            tickerTrack.dataset.cmsInjected = 'true';
            const tickerHTML = d.ticker.map(t => `<div class="ticker-item">${t}</div>`).join('<div class="ticker-sep"></div>');
            tickerTrack.innerHTML = `
              <div class="ticker-content">${tickerHTML}</div>
              <div class="ticker-content">${tickerHTML}</div>
            `;
         }
      }

    } catch (e) {
      console.error('CMS Loader Error:', e);
    }
  }

  // Run on DOMContentLoaded to ensure elements exist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyCMSData);
  } else {
    applyCMSData();
  }
})();
