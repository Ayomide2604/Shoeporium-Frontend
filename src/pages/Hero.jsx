import hero1 from "../assets/img/hero/hero-1.jpg";
import hero2 from "../assets/img/hero/hero-2.jpg";
import HeroSlider from "../components/HeroSlider";

const heroSlides = [
	{
		id: 1,
		title: "Summer Collection",
		subTitle: "Fall - Winter Collections 2030",
		description:
			"A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
		backgroundImage: hero1,
	},
	{
		id: 2,
		title: "Summer Collection",
		subTitle: "Fall - Winter Collections 2030",
		description:
			"A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
		backgroundImage: hero2,
	},
];

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__slider owl-carousel">
				<HeroSlider slides={heroSlides} />
			</div>
		</section>
	);
};

export default Hero;
