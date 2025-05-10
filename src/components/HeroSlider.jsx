import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroSlider = ({ slides }) => {
	return (
		<div className="hero-slider">
			<Swiper
				slidesPerView={1}
				modules={[Navigation]}
				loop={true}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div
							className="hero__items set-bg"
							style={{
								backgroundImage: `url(${slide.backgroundImage})`,
								objectPosition: "center",
								objectFit: "contain",
							}}
						>
							<div className="container">
								<div className="row">
									<div
										className="swiper-button-prev custom-prev "
										style={{
											fontSize: "2rem",
											color: "lightgrey",
											cursor: "pointer",
											transform: "translateY(-50%)",
										}}
									></div>
									<div
										className="swiper-button-next custom-next "
										style={{
											fontSize: "2rem",
											color: "lightgrey",
											cursor: "pointer",
											transform: "translateY(-50%)",
										}}
									></div>
									<div className="col-xl-5 col-lg-7 col-md-8">
										<div className="hero__text">
											<h6>{slide.title}</h6>
											<h2>{slide.subTitle}</h2>

											<p>{slide.description}</p>
											<Link to="/products" className="primary-btn">
												Shop now <span className="arrow_right"></span>
											</Link>

											<div className="hero__social">
												<a href="#">
													<FaFacebook />
												</a>
												<a href="#">
													<FaTwitter />
												</a>
												<a href="#">
													<FaInstagram />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
