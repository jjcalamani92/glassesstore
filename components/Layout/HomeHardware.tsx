export const HomeHardware = () => {
	return (
		<section className="relative bg-white">
			<img
				className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
				src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/home/home-bg-1_ti0s6k.png"
				alt="Couple on a bed with a dog"
			/>

			<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						La calidad esta{' '}
						<strong className="font-extrabold text-rose-600 sm:block">
							Disponible
						</strong>
					</h1>
					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
					Bienvenido a Ojos de Aviador, el lugar de grandes ofertas en lentes, en Bolivia, en América y en todo el mundo. Explore nuestra selección de más de 70.000 lentes y lentes de sol en línea; estamos seguros de que tendremos algo que te encantará.
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
						<a
							className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-500 sm:w-auto active:bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring"
							href=""
						>
							Ver Productos
						</a>

						<a
							className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-500 sm:w-auto hover:text-rose-600 active:text-rose-500 focus:outline-none focus:ring"
							href=""
						>
							Descuentos
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
