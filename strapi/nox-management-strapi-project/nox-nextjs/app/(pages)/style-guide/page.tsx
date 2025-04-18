import Button, { ButtonConnect } from "@/app/components/button";
import Teamcard from "@/app/components/team-card";
import Image from "next/image";
import teamCardData from "@/app/data/team-card.json";
import Partnerlogo from "@/app/components/partner-logo";
import brandLogo from "@/app/data/brand-logo.json";

export default function Page() {
	console.log("style guide page rendered");
	return (
		<section>
			<div className="container">
				<div>
					<h1 className="font-gotham">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h1>
					<h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h2>
					<h3 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h3>
					<h4 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h4>
					<h5 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h5>
					<h6 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h6>

					<h1 className="text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h1>
					<h2 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h2>
					<h3 className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h3>
					<h4 className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h4>
					<h5 className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h5>
					<h6 className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugit!</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sed.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sed.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sed.</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sed.</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, sed.</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe perferendis nihil velit, dolorum
						similique magnam iusto laboriosam aspernatur? Tempora.
					</p>
					<ol>
						<li>Home</li>
						<li>About</li>
						<li>News</li>
					</ol>
					<ul>
						<li>Check</li>
						<li>check2</li>
						<li>
							<ol>
								<li>Nest Home</li>
								<li>Nest About</li>
								<li>Nest News</li>
							</ol>
							<ul>
								<li>Nest Home</li>
								<li>Nest About</li>
								<li>Nest News</li>
							</ul>
						</li>
						<li>About</li>
						<li>News</li>
					</ul>
					<ol>
						<li>Home</li>
						<li>About</li>
						<li>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero laudantium quam excepturi molestiae ducimus
							consectetur praesentium veniam iusto, dolores omnis perspiciatis. Repellat iure natus nam enim, asperiores
							dolor nisi exercitationem, numquam, maxime accusamus id! Animi eum totam asperiores pariatur. Illum culpa,
							consequatur illo doloribus ducimus porro ex aut voluptates provident.{" "}
						</li>
					</ol>

					{/* test sizes attribute */}
					<div className="relative h-96">
						<Image
							src="/images/test-lg.jpg"
							alt=""
							fill
							// width={1920}
							// height={400}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
						/>
					</div>

					{/* team card */}
					<div className="group/team-card block text-center">
						<div className="relative mx-auto mb-[2.1875em] h-[26.25em] w-[26.25em] overflow-hidden rounded-full bg-brown transition">
							<Image
								src="/images/cards/team-1.jpg"
								alt="Team member"
								className="object-cover transition duration-500 group-hover/team-card:scale-105"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							/>
						</div>
						<h4>Nabil Zeineddine</h4>
						<h3 className="text-md text-brown">Chief Investment Officer</h3>
					</div>
					<Teamcard {...teamCardData} />

					{/* partners logoes */}
					<div className="z-1 group/brand-logo relative">
						<Image
							src="/svgs/brands/brand-1-white.svg"
							alt="brand logo"
							width={272}
							height={116}
							className="pointer-events-none h-28 w-auto"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
						/>
						<Image
							src="/svgs/brands/brand-1.svg"
							alt="brand logo"
							width={272}
							height={116}
							className="z-1 absolute left-0 top-0 h-28 w-auto opacity-0 transition duration-500 group-hover/brand-logo:opacity-100"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
						/>
					</div>

					<Partnerlogo {...brandLogo} />

					{/* form input fields */}
					<div className="mb-7">
						<input
							type="text"
							placeholder="User name"
							className="border-b-1 mt-0 block w-full border-x-0 border-t-0 border-solid border-gray-light bg-transparent px-0.5 text-xs font-light text-white placeholder:text-gray-light focus:border-white focus:ring-0"
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="User name"
							className="border-b-1 mt-0 block w-full border-x-0 border-t-0 border-solid border-gray-light bg-transparent px-0.5 text-xs font-light text-white placeholder:text-gray-light focus:border-white focus:ring-0"
						/>
					</div>

					<br />
					<br />
					<br />

					<Button title="news listing" />
					<Button title="Submit" btnElement={true} />

					<ButtonConnect title="Connect to" targetValue="blank"/>


				</div>
			</div>
		</section>
	);
}
