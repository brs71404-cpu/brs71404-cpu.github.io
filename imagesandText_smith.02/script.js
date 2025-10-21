// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (5 images)
const slides = [
	{ src: 'images/image01.jpg',
	 alt: 'LaurenAndBoyd',
	 caption: 'Two in love connect others,'
	},
	{ src: 'images/image02.jpg',
	 alt: 'HannahAndAlex',
	 caption: 'Distant cousins praising our lives,'
	},
	{ src: 'images/image03.jpg',
	 alt: 'Daryl',
	 caption: 'An expert people-watcher in his element,'
	},
	{ src: 'images/image04.jpg',
	 alt: 'Group',
	 caption: 'Friends of friends of friends of friends,'
	},
	{ src: 'images/image05.jpg',
	 alt: 'Drew',
	 caption: 'The simple man letting loose,'
	},
	{ src: 'images/image06.jpg',
	 alt: 'KirstenAndBen',
	 caption: 'Drinks flow between,'
	},
	{ src: 'images/image07.jpg',
	 alt: 'trio',
	 caption: 'Hometown homebodies,'
	},
	{ src: 'images/image08.jpg',
	 alt: 'Moshpit',
	 caption: 'Lifting with love'
	},
	{ src: 'images/image09.jpg',
	 alt: 'EricaAndRafe',
	 caption: 'The life of the party everytime,'
	},
	{ src: 'images/image10.jpg',
	 alt: 'JoeAndHannah',
	 caption: 'The end of an era'
	}
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src; // replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
	caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
	showSlide(currentIndex);
	mainImage.addEventListener('click', nextSlide);