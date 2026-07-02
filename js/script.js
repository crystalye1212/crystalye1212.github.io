const serviceLabels = {
  "shower": {
    title: "Shower Glass",
    description: "Frameless and sliding shower glass installation."
  },
  "storm-door": {
    title: "Storm / Wind Protection Doors",
    description: "Outdoor wind protection and entrance glass systems."
  },
  "closet": {
    title: "Closet Glass Doors",
    description: "Modern sliding glass closet door systems."
  },
  "railing": {
    title: "Glass Railings",
    description: "Glass railings for stairs, balconies, and exterior areas."
  },
  "mirror": {
    title: "Mirror Installation",
    description: "Wall mirrors, gym mirrors, and custom mirror projects."
  },
  "partition": {
    title: "Glass Partitions",
    description: "Interior glass walls and office partition systems."
  },
  "commercial": {
    title: "Commercial Glass",
    description: "Storefront, office, and commercial glass installation."
  }
};

function renderServices() {
  const serviceLinks = document.getElementById("serviceLinks");
  serviceLinks.innerHTML = "";

  Object.keys(serviceLabels).forEach((category) => {
    const item = serviceLabels[category];
    const card = document.createElement("a");
    card.className = "service-card";
    card.href = `#${category}`;
    card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    serviceLinks.appendChild(card);
  });
}

function renderGallery() {
  const root = document.getElementById("galleryRoot");
  root.innerHTML = "";

  Object.keys(serviceLabels).forEach((category) => {
    const photos = galleryData[category] || [];
    if (!photos.length) return;

    const item = serviceLabels[category];
    const section = document.createElement("div");
    section.className = "gallery-section";
    section.id = category;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const gallery = document.createElement("div");
    gallery.className = "gallery";

    photos.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${item.title} project ${index + 1}`;
      img.onclick = () => openLightbox(src);
      gallery.appendChild(img);
    });

    section.appendChild(title);
    section.appendChild(gallery);
    root.appendChild(section);
  });
}

function openLightbox(src) {
  document.getElementById("lightboxImage").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

renderServices();
renderGallery();
