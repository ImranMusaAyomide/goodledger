"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const projects = [
	{
		image: "/Akinyele.svg",
		category: "WATER & SANITATION",
		title: "Clean water for Akinyele",
		location: "Akinyele, Oyo State",
		raised: "₦3,500,000",
		goal: "₦5,000,000",
		progress: 70,
	},
	{
		image: "/Project1.svg",
		category: "EDUCATION | PRIMARY",
		title: "A brighter classroom in Zaria",
		location: "Zaria, Kaduna State",
		raised: "₦3,860,000",
		goal: "₦5,000,000",
		progress: 77,
	},
	{
		image: "/Project3.svg",
		category: "HEALTHCARE | FACILITY",
		title: "Care closer to the community",
		location: "Agbado, Ogun State",
		raised: "₦1,800,000",
		goal: "₦3,000,000",
		progress: 60,
	},
];

export default function LandingPage() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="min-h-screen overflow-hidden bg-[#f6f8f6] text-[#173e3a]">
			<header className="relative z-50 mx-auto flex h-[68px] max-w-[1180px] items-center justify-between border-b border-[#173e3a]/8 px-4 md:px-[18px]">
				<a
					href="#"
					className="flex items-center"
					aria-label="Goodledger home"
				>
					<Image
						src="/brand.svg"
						alt="Goodledger"
						width={183}
						height={26}
						priority
						className="h-auto w-[150px] md:w-[183px]"
					/>
				</a>

				<nav
					className="hidden items-center gap-7 text-[12px] md:flex"
					aria-label="Primary navigation"
				>
					<a
						href="#projects"
						className="transition-opacity hover:opacity-60"
					>
						Donate
					</a>
					<a
						href="#organization"
						className="transition-opacity hover:opacity-60"
					>
						Organization
					</a>
					<a
						href="#transparency"
						className="transition-opacity hover:opacity-60"
					>
						Transparency
					</a>
					<a
						href="#about"
						className="transition-opacity hover:opacity-60"
					>
						About us
					</a>
				</nav>

				<div className="flex items-center gap-3">
					<button
						className="hidden text-[8px] tracking-wider lg:block"
						type="button"
						aria-label="Toggle debug mode"
					>
						DEBUG{" "}
						<span className="opacity-40">/</span> NEW
					</button>
					<a
						className="flex h-[38px] items-center justify-center rounded-[5px] bg-[#1f4644] px-4 text-[11px] text-white md:px-[18px]"
						href="#projects"
					>
						Get started
					</a>
					<button
						type="button"
						className="ml-1 flex h-9 w-9 items-center justify-center md:hidden"
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((open) => !open)}
					>
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{menuOpen && (
					<nav
						className="absolute left-4 right-4 top-[60px] flex flex-col rounded-lg border border-[#dfe7e3] bg-white p-4 shadow-xl md:hidden"
						aria-label="Mobile navigation"
					>
						<a
							className="border-b border-[#edf1ef] py-3"
							href="#projects"
							onClick={() => setMenuOpen(false)}
						>
							Donate
						</a>
						<a
							className="border-b border-[#edf1ef] py-3"
							href="#organization"
							onClick={() => setMenuOpen(false)}
						>
							Organization
						</a>
						<a
							className="border-b border-[#edf1ef] py-3"
							href="#transparency"
							onClick={() => setMenuOpen(false)}
						>
							Transparency
						</a>
						<a
							className="py-3"
							href="#about"
							onClick={() => setMenuOpen(false)}
						>
							About us
						</a>
					</nav>
				)}
			</header>

			<main>
				<section className="mx-auto grid max-w-[1180px] items-center gap-8 px-4 py-10 md:min-h-[358px] md:grid-cols-[1fr_360px] md:px-[18px] md:py-[46px] lg:grid-cols-[1fr_420px] lg:gap-[70px]">
					<div>
						<p className="mb-4 text-[9px] font-extrabold tracking-[0.12em] text-[#3a9b80]">
							<span className="border-b border-[#3a9b80] pb-0.5">
								COMMUNITY-LED.
							</span>{" "}
							OPEN BY DESIGN.
						</p>
						<h1 className="text-[43px] leading-[0.98] font-bold tracking-[-0.055em] text-[#123633] sm:text-[48px] lg:text-[67px]">
							Good change.
							<br />An open ledger.
						</h1>
						<p className="mt-5 text-[16px] leading-[1.35] sm:text-[18px]">
							Transparent community funding. Every contribution
							<span className="hidden sm:inline">
								<br />
							</span>
							accounted for.
						</p>
						<p className="mt-4 max-w-[430px] text-[12px] leading-[1.55] text-[#54706d]">
							Track local ideas. Follow every naira. See the evidence
							behind the impact you fund.
						</p>
						<div className="mt-6 flex flex-col gap-[10px] sm:flex-row">
							<a className="flex min-h-[42px] min-w-0 items-center justify-center gap-4 rounded-[5px] bg-[#1f4644] px-5 text-[11px] font-bold text-white sm:min-w-[150px]">
								Explore projects <span className="text-[16px]">→</span>
							</a>
							<a className="flex min-h-[42px] min-w-0 items-center justify-center rounded-[5px] border border-[#e1e7e4] bg-white px-5 text-[11px] font-bold sm:min-w-[150px]">
								Start funding
							</a>
						</div>
						<p className="mt-3 text-[9px] text-[#6e817e]">
							Built for communities. Accountable &amp; everyone.
						</p>
					</div>

					<div
						className="overflow-hidden rounded-[10px] bg-white shadow-[0_12px_30px_rgba(39,65,61,0.12)]"
						aria-label="Featured project"
					>
						<div className="relative h-[190px] w-full sm:h-[220px] lg:h-[230px]">
							<Image
								src="/Akinyele.svg"
								alt="Community members gathering around a clean water project"
								fill
								priority
								sizes="(max-width: 820px) 100vw, 420px"
								className="object-cover"
							/>
						</div>
						<div className="px-4 py-3">
							<div className="flex items-center justify-between">
								<h2 className="text-[14px] font-bold">
									Akinyele clean water
								</h2>
								<span className="rounded-full bg-[#edf4f1] px-2 py-1 text-[8px]">
									Public ledger
								</span>
							</div>
							<div className="mt-[10px] grid grid-cols-3 border-t border-[#edf1ef] pt-[9px]">
								<div className="flex flex-col gap-[5px]">
									<span className="text-[7px] uppercase text-[#77908b]">
										Raised
									</span>
									<strong className="text-[15px] lg:text-[18px]">
										₦3.5m
									</strong>
								</div>
								<div className="flex flex-col gap-[5px]">
									<span className="text-[7px] uppercase text-[#77908b]">
										Deposited onchain
									</span>
									<strong className="text-[15px] lg:text-[18px]">
										₦1.85m
									</strong>
								</div>
								<div className="flex flex-col gap-[5px]">
									<span className="text-[7px] uppercase text-[#77908b]">
										Funds used
									</span>
									<strong className="text-[15px] lg:text-[18px]">
										₦1.75m
									</strong>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto grid min-h-[210px] max-w-[1180px] grid-cols-2 items-center gap-y-6 border-b border-[#e2e8e5] px-4 py-6 sm:min-h-[122px] md:grid-cols-4 md:px-[18px]">
					{[
						["₦48.6m", "Contributed by funding (projected)"],
						["24", "Community-led projects"],
						["1,284", "People globally together"],
						["12", "Nigerian states reached"],
					].map(([value, label]) => (
						<div
							className="flex flex-col items-center gap-[9px] text-center"
							key={label}
						>
							<strong className="text-[25px] tracking-[-0.04em] md:text-[29px]">
								{value}
							</strong>
							<span className="text-[8px] text-[#718783]">
								{label}
							</span>
						</div>
					))}
				</section>

				<section
					className="mx-auto max-w-[1180px] px-4 py-[30px] md:px-[18px] md:py-[34px] md:pb-[46px]"
					id="projects"
				>
					<div className="mb-[18px] flex items-end justify-between">
						<div>
							<p className="mb-2 hidden text-[9px] font-extrabold tracking-[0.12em] text-[#3a9b80] md:block">
								THESE YOUR NEXT IMPACT
							</p>
							<h2 className="max-w-[260px] text-[25px] leading-[1.15] font-bold tracking-[-0.035em] text-[#123633] md:max-w-none">
								Local projects. Real possibilities.
							</h2>
						</div>
						<a
							className="flex h-[42px] w-[42px] items-center justify-center rounded-[5px] border border-[#e1e7e4] bg-white text-[0] md:w-[145px] md:text-[11px] md:font-bold"
							href="#"
						>
							<span className="text-[16px] md:mr-3">→</span>
							<span className="hidden text-[11px] md:inline">
								View all projects
							</span>
						</a>
					</div>

					<div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
						{projects.map((project) => (
							<article
								className="overflow-hidden rounded-[7px] border border-[#edf1ef] bg-white"
								key={project.title}
							>
								<div className="relative h-[180px] sm:h-[210px] md:h-[154px]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 820px) 100vw, 33vw"
										className="object-cover"
									/>
								</div>
								<div className="p-[13px]">
									<p className="mb-[7px] text-[7px] font-extrabold tracking-[0.08em] text-[#4e8e7d]">
										{project.category}
									</p>
									<h3 className="text-[15px] font-bold tracking-[-0.02em]">
										{project.title}
									</h3>
									<p className="mt-1 mb-2 text-[9px] text-[#718783]">
										{project.location}
									</p>
									<div className="h-[5px] overflow-hidden rounded-full bg-[#dbe7e3]">
										<span
											className="block h-full rounded-full bg-[#46a98b]"
											style={{ width: `${project.progress}%` }}
										/>
									</div>
									<p className="mt-2 text-[9px] text-[#718783]">
										<strong className="text-[#173e3a]">
											{project.raised}
										</strong>{" "}
										of {project.goal}
									</p>
									<p className="mt-1 text-[8px] text-[#718783]">
										{project.progress}% funded · 18 days left
									</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section
					className="mx-auto max-w-[1180px] px-4 pb-[34px] md:px-[18px] md:pb-[42px]"
					id="organization"
				>
					<h2 className="text-[25px] leading-[1.15] font-bold tracking-[-0.035em] text-[#123633]">
						A simpler way to give with confidence.
					</h2>
					<div className="mt-[22px] grid grid-cols-1 gap-[10px] md:grid-cols-3">
						{[
							["01", "Discover a cause", "Choose a community project with a clear budget and a verified organization."],
							["02", "Make a contribution", "Support a cause in naira and keep a traceable record of your donation."],
							["03", "Follow the money", "See spend updates, supporting evidence, and milestones as funds move."],
						].map(([number, title, text]) => (
							<article
								className="min-h-[145px] rounded-[7px] bg-white px-5 py-6 md:min-h-[150px]"
								key={number}
							>
								<strong className="text-[20px] text-[#5da792]">
									{number}
								</strong>
								<h3 className="mt-[18px] mb-2 text-[14px] font-bold">
									{title}
								</h3>
								<p className="max-w-[270px] text-[10px] leading-[1.55] text-[#718783]">
									{text}
								</p>
							</article>
						))}
					</div>
				</section>

				<section className="mx-4 grid min-h-[260px] items-center gap-6 rounded-[8px] bg-[#1d4442] px-6 py-8 text-white md:mx-auto md:min-h-[176px] md:max-w-[1144px] md:grid-cols-2 md:gap-10 md:px-[52px]">
					<div>
						<p className="mb-4 text-[7px] font-extrabold tracking-[0.12em] text-[#76aa9e]">
							TRUST YOU CAN INSPECT
						</p>
						<h2 className="text-[29px] leading-[1.12] font-bold tracking-[-0.04em] md:text-[31px]">
							Not just a promise.
							<br />A public financial trail.
						</h2>
					</div>
					<div>
						<h3 className="mb-2 text-[13px] font-bold">
							Requested. Received. Allocated. Spent. Remaining.
						</h3>
						<p className="mb-[14px] max-w-[430px] text-[9px] leading-[1.5] text-[#b5cac6]">
							Every project has an open ledger. See where funds
							originated, what they were allocated for, and whether the
							work is on track.
						</p>
						<a className="flex h-[38px] w-[170px] items-center justify-center gap-[10px] rounded-[5px] bg-white text-[11px] font-bold text-[#173e3a]">
							See transparency in action{" "}
							<span className="text-[16px]">→</span>
						</a>
					</div>
				</section>

				<section className="mx-4 mt-4 grid grid-cols-1 gap-4 md:mx-auto md:mt-[28px] md:max-w-[1144px] md:grid-cols-2">
					<blockquote className="min-h-[125px] rounded-[7px] border border-[#dfe7e3] bg-white p-6 text-[16px] leading-[1.35] md:text-[18px]">
						“I don&apos;t just see what I gave.
						<br />I can see what it made possible.”
						<cite className="mt-4 block text-[8px] leading-[1.5] not-italic text-[#718783]">
							Idris Adelan · Community leader
						</cite>
						<small className="block text-[8px] leading-[1.5] text-[#91a19e]">
							Made possible since 2024
						</small>
					</blockquote>
					<blockquote className="min-h-[125px] rounded-[7px] border border-[#dfe7e3] bg-white p-6 text-[16px] leading-[1.35] md:text-[18px]">
						“Clear reporting helps us earn trust,
						<br />one update at a time.”
						<cite className="mt-4 block text-[8px] leading-[1.5] not-italic text-[#718783]">
							Amara Yusuf · Ngo Aidininal Initiative
						</cite>
						<small className="block text-[8px] leading-[1.5] text-[#91a19e]">
							Community lead since 2024
						</small>
					</blockquote>
				</section>
			</main>

			<footer className="mx-4 mt-7 grid min-h-[138px] grid-cols-1 gap-[22px] border-t border-[#e1e7e4] py-6 md:mx-auto md:max-w-[1144px] md:grid-cols-[1fr_auto_190px] md:items-start md:px-0 md:pb-8" id="about">
				<div>
					<Image src="/brand.svg" alt="Goodledger" width={183} height={26} />
					<p className="mt-2 text-[8px] text-[#718783]">
						A transparent community funding platform.
					</p>
					<p className="mt-2 text-[8px] text-[#718783]">
						Community-led · open · built for Nigeria.
					</p>
				</div>
				<nav
					className="flex flex-wrap gap-[14px_20px] text-[9px] md:mt-3 md:flex-nowrap md:gap-7"
					aria-label="Footer navigation"
				>
					<a href="#projects">Explore projects</a>
					<a href="#organization">For organizations</a>
					<a href="#transparency">Public ledger</a>
				</nav>
				<div className="flex justify-start gap-7 text-[9px] md:mt-3 md:justify-end">
					<a href="#">LinkedIn</a>
					<a href="#">Instagram</a>
				</div>
			</footer>
		</div>
	);
}
