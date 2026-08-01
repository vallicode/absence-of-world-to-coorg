document.addEventListener('DOMContentLoaded',()=>{
  AOS.init({duration:850,once:true,offset:60});
  if(!document.querySelector('link[href="css/animations.css"]')){
    const animationStyles=document.createElement('link');
    animationStyles.rel='stylesheet';
    animationStyles.href='css/animations.css';
    document.head.append(animationStyles);
  }
  const nav=document.querySelector('.navbar');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>35));
  setTimeout(()=>document.querySelector('.loader')?.classList.add('hide'),600);

  // Location-specific imagery and Chennai → Coorg route treatment.
  const coorg='https://commons.wikimedia.org/wiki/Special:FilePath/Abbe%20falls.jpg';
  const mist='https://commons.wikimedia.org/wiki/Special:FilePath/Areca%20Paddy%20Mist%20Balamuri%20Coorg%20Feb24%20A7C%2009428.jpg';
  const chennai='https://commons.wikimedia.org/wiki/Special:FilePath/Chennai%20central%20view.jpg';
  const css=document.createElement('style');
  css.textContent=`.hero{background-image:linear-gradient(90deg,rgba(4,24,19,.75),rgba(4,24,19,.22)),url('${coorg}')!important}.page-hero{background-image:linear-gradient(0deg,rgba(5,29,23,.82),rgba(5,29,23,.08)),url('${mist}')!important}.hero-content:before{content:'சென்னை → ಕೂರ್ಗ್';display:block;color:#fff4d6;font-size:.73rem;letter-spacing:3px;font-weight:700;margin-bottom:22px}.route-wrap:before{content:'CHENNAI · BENGALURU · COORG';position:absolute;right:8%;bottom:18px;color:#d7ad63;font-size:.7rem;letter-spacing:2px;z-index:5}.section-title:after{content:'✦';display:block;color:#d7ad63;font-size:1.1rem;margin-top:8px}`;
  document.head.append(css);
  const heroEyebrow=document.querySelector('.hero .eyebrow');
  if(heroEyebrow){
    heroEyebrow.textContent='Chennai → Coorg · 7 — 9 August 2026';
    document.querySelector('.hero p').innerHTML='From Chennai’s vibrant streets to Coorg’s misted coffee hills.<br>Collect memories, not things.';
    document.querySelector('.route-copy p').textContent='From Chennai’s temple-town energy to Kodagu’s misted hills, filter coffee, tumbling falls and the kind of laughter that belongs away from the world.';
    const homeImages=[mist,coorg,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBxMf-1kicLcdVItoGVW3uBQYycT7Ynd8O8-WleNF4o55CfT3LucEdw_r&s=10'];
    document.querySelectorAll('.journey-card img').forEach((img,index)=>{
      img.src=homeImages[index];
      img.onerror=()=>{img.onerror=null;img.src=coorg;};
    });
  }
  const placeImages={
    'MGR Chennai Central':chennai,
    'Mysuru Junction':'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore%20Palace%20at%20night.jpg',
    'River Side Sana Villa':mist,
    'Rainbow Garden':'https://commons.wikimedia.org/wiki/Special:FilePath/Areca%20Paddy%20Mist%20Balamuri%20Coorg%20Feb24%20A7C%2009428.jpg',
    'Abbey Falls':'https://commons.wikimedia.org/wiki/Special:FilePath/Abbey%20Falls%20%2C%20Karnataka%20%2C%20India.jpg',
    "Raja's Seat":'https://commons.wikimedia.org/wiki/Special:FilePath/Mandalpatti%20Peak%2C%20coorg.jpg',
    'Mandalpatti Jeep Ride':'https://commons.wikimedia.org/wiki/Special:FilePath/Mandalpatti%20Peak%2C%20coorg.jpg',
    'Mallalli Falls':'https://commons.wikimedia.org/wiki/Special:FilePath/Mallalli%20Falls.jpg',
    'Dubare Forest':'https://commons.wikimedia.org/wiki/Special:FilePath/Dubare%20Elephant%20Camp.jpg',
    'River Rafting':'https://commons.wikimedia.org/wiki/Special:FilePath/Kaveri%20River%20at%20Dubare.jpg',
    'Harangi Water Sports':'https://commons.wikimedia.org/wiki/Special:FilePath/Harangi%20Dam.jpg',
    'Nisargadhama':'https://commons.wikimedia.org/wiki/Special:FilePath/Kaveri%20Nisargadhama.jpg',
    'Coffee Plantation':'https://commons.wikimedia.org/wiki/Special:FilePath/Coffee%20Robusta%20Pepper%20Vines%20Shade%20Trees%20Balamuri%20Coorg%20Feb24%20R16%2007665.jpg',
    'Golden Temple':'https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20Temple%20Bylakuppe.jpg',
    'Mysore Palace':'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore%20Palace%20at%20night.jpg',
    "St Philomena Church":"https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Philomena%27s%20Church%2C%20Mysore.jpg"
  };
  document.querySelectorAll('.stop-card').forEach(card=>{
    const title=card.querySelector('h3')?.childNodes[0]?.textContent.trim();
    if(placeImages[title]){
      const image=card.querySelector('img');
      image.src=placeImages[title];
      image.onerror=()=>{image.onerror=null;image.src=coorg;};
    }
  });
  const troop=[
    ['Valliyappan K','Journey Curator','1.jpeg'],['Adaikkappan K','Route Captain','2.jpeg'],
    ['Aheesh J','Adventure Lead','3.jpg'],['Sagar','Trail Seeker','4.jpg'],
    ['Periyasamy A','Campfire Host','5.jpeg'],['Lakshmi B','Memory Keeper','6.jpg'],
    ['Bhargavi','Coffee Connoisseur','7.jpg'],['Meghana','Sunset Hunter','8.jpg'],
    ['Meghana (Maggi)','Good Vibes Officer','9.jpg'],['Dasthagiri','Playlist Captain','10.jpg'],
    ['Revanth','Roadtrip Crew','11.jpeg']
  ];
  document.querySelectorAll('.member-dot img').forEach((img,index)=>{
    img.src=`images/members/${troop[index][2]}`;
    img.alt=troop[index][0];
  });
  if(location.pathname.endsWith('members.html')){
    document.querySelectorAll('.member-card').forEach((card,index)=>{
      const [name,role,file]=troop[index];
      card.querySelector('img').src=`images/members/${file}`;
      card.querySelector('img').alt=name;
      card.querySelector('h3').textContent=name;
      card.querySelector('p').textContent=role;
    });
  }
  if(heroEyebrow){
    const essentials=[
      ['Shoes','fa-shoe-prints','https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85'],
      ['Rain coat','fa-cloud-rain','https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85'],
      ['Power bank','fa-battery-full','https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=700&q=85'],
      ['Umbrella','fa-umbrella','https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=700&q=85'],
      ['Sweater / Jerkin','fa-shirt','https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=700&q=85'],
      ['Rain cover for bag','fa-bag-shopping','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85'],
      ['Swimming nylon dress','fa-person-swimming','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85'],
      ['Quick-dry T-shirt & trackpant','fa-person-walking','https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=85']
    ];
    const section=document.createElement('section');
    section.className='section pack-smart';
    section.innerHTML=`<div class="container"><div class="section-title"><p>Coorg monsoon checklist</p><h2>Pack smart. Roam free.</h2><div class="pack-note"><i class="fa-solid fa-circle-check"></i> Have one quick-dry T-shirt and trackpant ready for the journey.</div></div><div class="row g-3">${essentials.map(([name,icon,img])=>`<div class="col-6 col-md-3"><article class="pack-card"><img src="${img}" alt="${name}"><div><i class="fa-solid ${icon}"></i><h3>${name}</h3></div></article></div>`).join('')}</div></div>`;
    document.querySelector('.members-band').before(section);
  }
  const suppliedPlans={
    'day1.html':{hero:'Arrival in Coorg',heading:'Mysuru to Madikeri',date:'Friday · 7 August 2026',items:[
      ['07:30 AM','Mysuru Junction','https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/7/8/6/5896786/0/202311291244521958730.jpg','Meet the troop, load the bags and begin the Coorg escape.'],
      ['08:30 AM','Breakfast','https://content.jdmagicbox.com/comp/mysore/r7/0821px821.x821.211203105318.b9r7/catalogue/-tvafn81as1.jpg','A wholesome Mysuru breakfast before the hill drive.'],
      ['12:00 PM','Coorg Sana Stay, Madikeri','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvw3wZEIF2mVd2VNpK6MSd1ABEn8A5SKryTsczb0EKXQVVQsJH4qnn-QQT&s=10','Check in, settle down and soak in Madikeri’s cool air.'],
      ['01:00 PM','Lunch · Coorg Cuisine, Madikeri','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfosq-WJo3PItCfXO42je11pmW4OycSraQb1lDHjJQ5SmkE_ZArB1ZqQdl&s=10','A taste of comforting Kodava flavours.'],
      ['03:00 PM','Talakaveri Temple','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNGWyRY4BMOoQPk-0gP2YwOsDW4kuefSRQxvgD3cpjTGKWjW9BA80nXYx&s=10','Visit the sacred source of the Kaveri in the Brahmagiri hills.'],
      ['05:00 PM',"Raja's Seat, Madikeri",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeYNS4U8zOpc9WKoM_q0_h0yN6GJHEHxcv7IIlyzmaJiwk2YC6gd742vS&s=10','Golden-hour valley views and a quiet pause together.'],
      ['07:30 PM','Campfire · Coorg Sana Stay','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kIoEDGbOSflH1Hp3Gkc4fIfzW9qDwdrPr9av48sANQ&s=10','Campfire stories, dinner and a relaxed first night in Coorg.']
    ]},
    'day2.html':{hero:'Coorg Adventures',heading:'Mist, falls & coffee',date:'Saturday · 8 August 2026',items:[
      ['08:30 AM','Mandalpatti Jeep Ride & Viewpoint','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkvcWPnSEWB6FJGOLu3BaYWZ9bb3dUQ5fevFUJYuwew&s=10','A bumpy jeep ride to one of Coorg’s most breathtaking viewpoints.'],
      ['10:30 AM','Abbey Falls','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpl4b1ZHvzUxnFwDmArIn4I0u2gyHQp4KyCJfELykqcA&s=10','Feel the mist and hear the powerful falls in the forest.'],
      ['11:30 AM','Mallalli Falls','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMn7REfGSkcfKwKF4yMMRUnOkWjcj4JYFXshyEMHz7yHOSix5QSlu_G9Yc&s=10','A stunning waterfall framed by the green Western Ghats.'],
      ['01:30 PM','Lunch · Bendhoota Kodava Cuisine','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1BQ_3If9ytP2spToM6heaWyn8dEA7iAX9PKFWzj53g&s=10','A delicious Kodava lunch to refuel the crew.'],
      ['03:00 PM','Dubare River Rafting','https://d26dp53kz39178.cloudfront.net/media/uploads/products/64_1-1694411063429.webp','Paddle together and make the river adventure count.'],
      ['04:30 PM','Nisargadhama','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKnpOGxPcVC2UnwAGKGy7BaMhVy4yiDhWoYxo7rXpcFbV_jzik8zINKo&s=10','An easy-going green escape beside the Kaveri.'],
      ['05:00 PM','Harangi Dam, Coorg','https://coorgtourism.co.in/images/tourist-places/harangi-dam-coorg/harangi-dam-coorg-tourism-location-address.jpg','Pause by the reservoir for open water views and a calm Coorg evening.'],
      ['05:30 PM','Mountain View Coffee Plantation','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcGMCYqIx059HED73p_gkY1h5GBwXv1zqHohcfyvMjUuzULyFmlKlMq0&s=10','Take in the mountain views, coffee fragrance and plantation calm.'],
      ['07:00 PM','Coffee Shop','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlfFn03g7g51krZ-8ztPB582Vl3AV1Ddl7WkOA3JKqA&s=10','End the adventure day over a warm Coorg coffee.']
    ]},
    'day3.html':{hero:'A Grand Farewell',heading:'Coorg to Mysuru',date:'Sunday · 9 August 2026',items:[
      ['08:00 AM','Checkout & Breakfast','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl4d0JAw7JrILku-I1D7nWOjytXuIPrgQpxz1oAgyww&s=10','A final breakfast and a warm goodbye to Coorg.'],
      ['09:00 AM','Golden Temple','https://lh3.googleusercontent.com/grass-cs/ACvplmMZuvS9ZT--xtFR4W2bmno1T3Gij-pkOJ4V9vhu-4zrXwq4TSRslGfuWoaikZ46DIfESVdwSsN3mkQgwTdM6WiHtTaz-ex4NtLZLAxdfVbLgPoA5PtXj9TWMo9H2Aq0qJC9idU=w270-h312-n-k-no','A serene stop among the golden pagodas of Bylakuppe.'],
      ['12:00 PM','Start to Mysore','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRxaxxodZbuXDpp4aK0u1sAX5aH-wB4feeRz9iJk-Tg&s=10','The troop hits the road for Mysuru.'],
      ['03:00 PM','Mysore Palace','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBxMf-1kicLcdVItoGVW3uBQYycT7Ynd8O8-WleNF4o55CfT3LucEdw_r&s=10','A regal finale at the city’s famous palace.'],
      ['04:00 PM','Mysore Zoo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKPzDTO45XBvy62wHyF3RdcfYqRwxTr0XaCK0_cfGjf0oN_dMNEQ-p5nV&s=10','A final family-friendly adventure before departure.'],
      ['06:00 PM','Mysore Junction','https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/7/8/6/5896786/0/202311291244521958730.jpg','Thousands of photos & lots of memories.']
    ]}
  };
  const plan=suppliedPlans[location.pathname.split('/').pop()];
  if(plan){
    document.querySelector('.page-hero h1').textContent=plan.hero;
    document.querySelector('.page-hero .date').textContent=plan.date;
    document.querySelector('.section-title h2').textContent=plan.heading;
    document.querySelector('.timeline').innerHTML=plan.items.map(([time,title,image,description],index)=>`<div class="timeline-item" data-aos="fade-up"><div class="time">${time}</div><div class="stop"><div class="stop-card"><img src="${image}" alt="${title}" onerror="this.onerror=null;this.src='https://commons.wikimedia.org/wiki/Special:FilePath/Abbe%20falls.jpg'"><div class="content"><h3>${title}</h3><p>${description}</p><a class="map-btn" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}">Open in Google Maps</a></div></div></div></div>${index===2?'<div class="route-break"><svg class="road" viewBox="0 0 1500 255" preserveAspectRatio="none"><path d="M-40 170 C280 30 430 260 720 145 S1200 40 1540 150" fill="none" stroke="#d7ad63" stroke-width="4" stroke-dasharray="14 12"/></svg><img class="tempo" src="https://cdn-icons-png.flaticon.com/512/744/744465.png" alt="Tempo Traveller"><div class="route-meta"><span>On the road</span><b>More memories ahead</b></div></div>':''}`).join('');
  }
  document.querySelectorAll('.route-wrap,.route-break').forEach(route=>{
    const caravan=document.createElement('div');
    caravan.className='troop-caravan';
    caravan.innerHTML=troop.map(([, ,file])=>`<img src="images/members/${file}" alt="Troop member">`).join('');
    route.append(caravan);
  });
  const homeRoute=document.querySelector('.route-wrap');
  if(homeRoute){
    const story=document.createElement('div');
    story.className='road-story';
    story.innerHTML='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPqtZjwahQLm2ViuXAOR3g8T1m8DyWf0yxyJJNQbEQQ&s=10" alt="Chennai departure"><img src="https://www.shutterstock.com/image-photo/chennai-text-on-marina-beach-260nw-1765681589.jpg" alt="Chennai Marina"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGqxv9SZx9bHhOiaIJ4iNPgr1uo6-eU_qN5yMox9LY6vXM12gX551QZ0&s=10" alt="Train journey"><img src="https://static.toiimg.com/photo/msid-104040249,width-96,height-65.cms" alt="Coorg arrival">';
    homeRoute.append(story);
  }
});
