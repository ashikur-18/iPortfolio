
function bodyScrollingToggle(){
	document.body.classList.toggle("stop-scrolling");
}




(() => {

 const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
})();

//hambur btn
(() => {

	const hamburgerBtn = document.querySelector(".hamburger-btn"),
	navMenu = document.querySelector(".nav-menu"),
	closeNavBtn = navMenu.querySelector(".close-nav-menu");

	hamburgerBtn.addEventListener("click", showNavMenu);
	closeNavBtn.addEventListener("click", hideNavMenu);
	

	function showNavMenu(){
		navMenu.classList.add("open");
		//bodyScrollingToggole();
		

	}
	function hideNavMenu(){
		navMenu.classList.remove("open");
		fadeoutEffect();
		//bodyScrollingToggole();
		

	}
	function fadeoutEffect(){
		document.querySelector(".fade-out-effact") .classList.add(".active");
		setTimeout(() =>{
			document.querySelector(".fade-out-effact") .classList.remove(".active");
		},300)
	}
	document.addEventListener("click", (event) =>{
		
		if (event.target.classList.contains('link-item')) {

			if (event.target.hash !=="") {
				event.preventDefault();
				const hash = event.target.hash;

				document.querySelector(".section.active").classList.add("hide");
				document.querySelector(".section.active").classList.remove("active");
			    
			    document.querySelector(hash).classList.add("active");
			    document.querySelector(hash).classList.remove("hide");

			   

			    navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
			    navMenu.querySelector(".active").classList.add("active","inner-shadow");

                 if (navMenu.classList.contains("open")) {
			    event.target.classList.add("active","inner-shadow");
			    event.target.classList.remove("outer-shadow","hover-in-shadow");

			    hideNavMenu();

			}
			else{
				let navItems = navMenu.querySelectorAll(".link-item");
				navItems.forEach((item) =>{
					if (hash === item.hash){
						
						item.classList.add("active","inner-shadow");
						item.classList.remove("outer-shadow","hover-in-shadow");
					}
				})
				fadeoutEffect();
			}
			}

		}
	} )



})();




/* ------ about section tabs---------*/
(() =>{
	const aboutSection = document.querySelector(".about-section"),
	tabsContainer =document.querySelector(".about-tabs");

	tabsContainer.addEventListener("click",(event) =>{
     
		/*if evnent.target contains 'tab-item' class and not contains
		'active' class*/
		if(event.target.classList.contains("tab-item") &&
			!event.target.classList.contains("active")){
			const target = event.target.getAttribute("data-target");
		    //deactivate existing active 'tab-item'
		    tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
		    //active new tab 'tab-item'
		    event.target.classList.add("active","outer-shadow");
		    //deactive exiting avtive 'tab-content'
		    aboutSection.querySelector(".tab-content.active").classList.remove("active");
		    //active new 'tab-content'
		    aboutSection.querySelector(target).classList.add('active');
		}
	})


})();


//hide all section active

(() => {

	const sections = document.querySelectorAll(".section");
	sections.forEach((section) =>{
		if (!section.classList.contains("active")){
			section.classList.add("hide");
		}
	})
 
})();


