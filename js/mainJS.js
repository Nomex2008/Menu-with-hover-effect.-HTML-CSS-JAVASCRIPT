"use strict"

//serch data-line-effect
const menuLinksWrappers = document.querySelectorAll('[data-line-effect]')

//if we have data-line-effect we start function menuEffect
menuLinksWrappers.length ? menuEffect() : null;

//its function when we start
function menuEffect() {
    menuLinksWrappers.forEach(menuLinksWrappers => {
        //meniLinks its all tags a in menu
        const menuLinks = menuLinksWrappers.querySelectorAll('a')
        // effect spead (ms)
        const effectSpeed = menuLinksWrappers.dataset.lineEffect ? menuLinksWrappers.dataset.lineEffect : 200
        //if we hava a we start function menuEffectItem
        menuLinks.length ? menuEffectItem(menuLinks,effectSpeed) : null;
    });

    //its function when we start
    function menuEffectItem(menuLinks,effectSpeed) {
        //add transform wariant for block in hover
        const effectTransition = `transition : transform ${effectSpeed}ms ease;`;
        const effectHover = `transform : translate3d(0px, 0%, 0px );`;
        const effectTop = `transform : translate3d(0px, -100%, 0px );`;
        const effectBottom = `transform : translate3d(0px, 100%, 0px );`;

        //console.log(effectTransition)
        //console.log(effectHover)
        //console.log(effectTop)
        //console.log(effectBottom)

        //Element Checker and add HTML code for effect
        menuLinks.forEach(menuLink => {
            menuLink.insertAdjacentHTML('beforeend',`
            <span class="hover" style="transform : translate3d(0px, 100%, 0px);">
                <span style="transform :  translate3d(0px, 100%, 0px);" class="hover__text">
                    ${menuLink.textContent}
                </span>
             </span>
            `)
            //if cursor hover menuLink 
            //we start function menuLinlActions()
            menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
        })

        //its function when we start
        function menuLinkActions(e) {
            //const elements
            const menuLink = e.target
            const menuLinkItem = menuLink.querySelector('.hover')
            const menuLinkText = menuLink.querySelector('.hover__text')

            //50% height of element window
            const menuLinkHeaight = menuLink.offsetHeight / 2;
            //console.log(menuLinkHeaight)

            //cursor position
            const menuLinkPos = e.pageY - (menuLink.getBoundingClientRect().top + scrollY)

            //if cursor hover object
            if (e.type === 'mouseenter') {
                //if cursor height = ? we do ...
                menuLinkItem.style.cssText = menuLinkPos > menuLinkHeaight ? effectBottom : effectTop
                menuLinkText.style.cssText = menuLinkPos > menuLinkHeaight ? effectTop : effectBottom
                
                //timeOut for style
                setTimeout(() => {
                    menuLinkItem.style.cssText =effectHover + effectTransition;
                    menuLinkText.style.cssText =effectHover + effectTransition;
                }, 5)
            }
            //if cursor unhover object
            if (e.type === 'mouseleave') {
                 //if cursor height = ? we do ...
                 menuLinkItem.style.cssText = menuLinkPos > menuLinkHeaight ? effectBottom + effectTransition : effectTop + effectTransition
                 menuLinkText.style.cssText = menuLinkPos > menuLinkHeaight ? effectTop + effectTransition : effectBottom + effectTransition
            }
        }
    }
}