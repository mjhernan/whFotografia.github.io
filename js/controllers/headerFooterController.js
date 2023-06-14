'use strict';

let footer = document.getElementById('footer');
footer.classList.add('verticalFlex');
footer.classList.add('espaciar');
footer.classList.add('centrar');

let header = document.getElementById('header');
header.classList.add('horizontalFlex');
header.classList.add('espaciar');
header.classList.add('centrar');

let quoteButton = document.createElement('button');
quoteButton.addEventListener('click', AbrirFormularioCotizar);

LoadHeader();
LoadFooter();

function LoadHeader() {
    AppendHeaderDropdownMenu();
    AppendMainLogo();

    quoteButton.classList.add('quoteButton');
    quoteButton.type = 'button';
    quoteButton.innerHTML = 'Cotizar';

    header.appendChild(quoteButton);
};

function LoadFooter() {
    footer.classList.add('verticalFlex');
    footer.classList.add('centrar');
    footer.classList.add('espaciar');

    let divSocialMedia = document.createElement('div');
    divSocialMedia.classList.add('footerDiv');
    AppendSocialMediaElement(divSocialMedia, 'https://www.facebook.com/people/WH-Fotograf%C3%ADa/100063620556195/', './img/facebook_white_logo.png');
    AppendSocialMediaElement(divSocialMedia, 'https://instagram.com/whfotografia.cr?igshid=YmMyMTA2M2Y=', './img/instagram_white_logo.png');
    AppendSocialMediaElement(divSocialMedia, 'https://api.whatsapp.com/send/?phone=%2B50683651325&text&type=phone_number&app_absent=0', './img/whatsapp_white_logo.png');

    let divImportantLinks = document.createElement('div');
    divImportantLinks.classList.add('footerDiv');
    AppendImportantLink(divImportantLinks, './cotizarFormulario.html', 'Cotizar');
    AppendImportantLink(divImportantLinks, './portafolio.html', 'Portafolio');
    AppendImportantLink(divImportantLinks, './sobreWH.html', 'Sobre WH Fotografía');

    footer.appendChild(divSocialMedia);
    footer.appendChild(divImportantLinks);
};

function AppendHeaderDropdownMenu() {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('dropDownMenuContainer');

    let menuIcon = document.createElement('img');
    menuIcon.classList.add('logo');
    menuIcon.src = './img/iconoMenu.png';

    let dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdownMenu');
    AppendDropdownOption(dropdownMenu, './cotizarFormulario.html', 'Cotizar');
    AppendDropdownOption(dropdownMenu, './reservarFormulario.html', 'Reservar');
    AppendDropdownOption(dropdownMenu, './portafolio.html', 'Portafolio');
    AppendDropdownOption(dropdownMenu, './resenas.html', 'Reseñas');
    AppendDropdownOption(dropdownMenu, './paquetes.html', 'Paquetes');
    AppendDropdownOption(dropdownMenu, './contacto.html', 'Contacto');
    AppendDropdownOption(dropdownMenu, './sobreWH.html', 'Sobre WH Fotografía');
    AppendDropdownOption(dropdownMenu, './misFotos.html', 'Mis fotografías');
    AppendDropdownOption(dropdownMenu, './administrar.html', 'Administrar');

    menuContainer.appendChild(menuIcon);
    menuContainer.appendChild(dropdownMenu);
    header.appendChild(menuContainer);
};

function AppendDropdownOption(pDiv, pOptionRef, pOptionText) {
    let dropdownOption = document.createElement('a');
    dropdownOption.classList.add('dropdownOption');
    dropdownOption.href = pOptionRef;
    dropdownOption.innerHTML = pOptionText;

    pDiv.appendChild(dropdownOption);
};

function AppendMainLogo() {
    let mainLogoRef = document.createElement('a');
    mainLogoRef.href = 'index.html';

    let mainLogoImage = document.createElement('img');
    mainLogoImage.classList.add('logo');
    mainLogoImage.src = './img/logo-no-background.png';

    mainLogoRef.appendChild(mainLogoImage);
    header.appendChild(mainLogoRef);
};

function AbrirFormularioCotizar() {
    Redireccionar('./cotizarFormulario.html');
};

function AppendSocialMediaElement(pDiv, pLinkRef, pImageSource){
    let mediaLink = document.createElement('a');
    mediaLink.href = pLinkRef;
    mediaLink.target = '_blank';

    let mediaLogo = document.createElement('img');
    mediaLogo.src = pImageSource;
    mediaLogo.classList.add("footerIcon");

    mediaLink.appendChild(mediaLogo);
    pDiv.appendChild(mediaLink);
};

function AppendImportantLink(pDiv, pLinkRef, pText) {
    let importantLink = document.createElement('a');
    importantLink.classList.add('footerText');
    importantLink.href = pLinkRef;
    importantLink.innerHTML = pText;

    pDiv.appendChild(importantLink);
};