import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="w-full pt-4 mt-4 relative">
			<div>
				<div className="xl:absolute xl:w-[20%] bg-[url(/assets/footer-front.png)] xl:z-30 text-white xl:p-6 xl:mx-10 p-6 space-y-4">
					<p className="text-base xl:text-2xl font-black">Hubungi Kami</p>
					<p>
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when
					</p>
					<p>info@gmail.com</p>
					<p>+62 8123456789</p>
				</div>
			</div>
			<div className="w-full bg-[url(/assets/footer-back.png)] text-white p-7 space-y-8 xl:flex xl:flex-row xl:justify-between xl:space-x-10 z-0 xl:my-6">
				<div className="space-y-4 xl:pl-96 z-20">
					<p className="font-black text-lg sm:text-lg xl:text-2xl">
						Kopi Pak Tarno
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
						dicta dolores deserunt, quae consectetur tempora iusto expedita
						dolorum eius, debitis delectus suscipit sit eaque, omnis
						necessitatibus obcaecati non ab doloremque.
					</p>
				</div>
				<div className="z-20">
					<p className="text-base sm:text-base xl:text-lg font-black">
						Follow Us
					</p>
					<div className="flex xl:justify-center space-x-4 mt-4">
						<a href="#" aria-label="Instagram">
							<Instagram className="w-6 h-6 sm:w-6 sm:h-6 xl:w-10 xl:h-10" />
						</a>
						<a href="#" aria-label="Facebook">
							<Facebook className="w-6 h-6 sm:w-6 sm:h-6 xl:w-10 xl:h-10" />
						</a>
						<a href="#" aria-label="Twitter">
							<Twitter className="w-6 h-6 sm:w-6 sm:h-6 xl:w-10 xl:h-10" />
						</a>
						<a href="#" aria-label="Youtube">
							<Youtube className="w-6 h-6 sm:w-6 sm:h-6 xl:w-10 xl:h-10" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
