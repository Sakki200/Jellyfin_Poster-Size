const posters = document.querySelectorAll(
  ".cardImageContainer > .cardScalable > .cardBox  > .portraitCard  > .itemsContainer  > .pageTabContent "
);

if (posters.length > 0) {
  posters.forEach((poster) => {
    const newHeight = 600; // Nouvelle hauteur souhaitée
    const newWidth = 400; // Nouvelle largeur souhaitée
    const style = poster.style.backgroundImage;

    const urlMatch = style.match(/url\("([^"]+)"\)/);
    if (!urlMatch) return;

    let url = urlMatch[1];

    // Modification des paramètres de l’URL
    const urlObj = new URL(url);
    if (urlObj.searchParams.has("fillHeight")) {
      urlObj.searchParams.set("fillHeight", newHeight);
    }
    if (urlObj.searchParams.has("fillWidth")) {
      urlObj.searchParams.set("fillWidth", newWidth);
    }

    // Réinjection dans le style
    el.style.backgroundImage = `url("${urlObj.toString()}")`;
  });
}
