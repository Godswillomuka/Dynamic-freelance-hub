import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const sidebarData = [
	{
		title: "Creative Graphic Design",
		links: [
			"Logo Design",
			"Brand Identity Design",
			"Marketing Materials Design",
			"Social Media Graphics",
			"Infographics Design",
			"Event Posters",
			"Product Mockups",
		],
	},
	{
		title: "Vehicle & Fleet Branding",
		links: [
			"Full Vehicle Wraps",
			"Partial Vehicle Wraps",
			"Roadshow Trucks Branding",
			"Delivery Van Branding",
			"Motorcycle Branding",
			"Racing & Safari Rally Cars",
			"Reflective Vehicle Stickers",
		],
	},
	{
		title: "Custom Merchandise & Apparel",
		links: [
			"T-Shirts Printing",
			"Hoodies Printing",
			"Caps Branding",
			"Corporate Gifts",
			"Promotional Products",
			"Tote Bags Printing",
			"Mugs & Water Bottles Printing",
		],
	},
	{
		title: "Business Identity & Stationery",
		links: [
			"Business Cards",
			"Letterheads",
			"Envelopes",
			"Presentation Folders",
			"Company Profiles",
			"Staff ID Cards",
			"Business Stationery Sets",
		],
	},
	{
		title: "Signage & Large Format Displays",
		links: [
			"PVC Flex Banners",
			"Roll-Up Banners",
			"Pop-Up Banners",
			"Backdrops",
			"Billboards",
			"Shop Signage",
			"Window Graphics",
			"Wall Murals",
			"Floor Graphics",
			"Exhibition Stands",
		],
	},
	{
		title: "Product Packaging & Labels",
		links: [
			"Packaging Design",
			"Product Labels",
			"Custom Boxes",
			"Stickers & Decals",
			"Adhesive Solutions",
			"Shelf Display Packaging",
		],
	},
	{
		title: "Marketing & Promotional Print",
		links: [
			"Flyers & Brochures",
			"Posters",
			"Calendars",
			"Menus",
			"Receipt Books",
			"Notebooks & Diaries",
			"Promotional Booklets",
		],
	},
	{
		title: "Corporate Branding & Strategy",
		links: [
			"Brand Strategy Consulting",
			"Corporate Identity Design",
			"Brand Guidelines",
			"Wayfinding Signage",
			"Office Branding",
			"Safety Signage",
			"Corporate Communication Materials",
		],
	},
	{
		title: "Web Design & Software Engineering",
		links: [
			"Website Design & Development",
			"Website UI Layout",
			"Website Maintenance",
			"Search Engine Optimization",
			"Digital Marketing Collateral",
			"Web Applications",
			"Responsive Website Design",
		],
	},
];

export default function Sidebar() {
	const [openIndex, setOpenIndex] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();
	const sidebarRef = useRef(null);

	// add/remove body class so CSS can hide toggle while sidebar is open
	useEffect(() => {
		document.body.classList.toggle("sidebar-open", sidebarOpen);
		return () => document.body.classList.remove("sidebar-open");
	}, [sidebarOpen]);

	// close sidebar on route change (header nav, etc.)
	useEffect(() => {
		setSidebarOpen(false);
		setOpenIndex(null);
	}, [location]);

	// click outside to close (mobile)
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				sidebarOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target)
			) {
				setSidebarOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [sidebarOpen]);

	const toggleSection = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleNavClick = (slug) => {
		setSidebarOpen(false);
		if (process.env.NODE_ENV !== "production")
			console.info("Navigate to:", slug);
	};

	return (
		<>
			{/* Sidebar */}
			<div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
				{/* close button for mobile */}
				<button
					className="close-sidebar"
					aria-label="Close services"
					onClick={() => setSidebarOpen(false)}
				>
					✕
				</button>

				<h2 className="sidebar-title sidebar-logo">Our Services</h2>

				{sidebarData.map((section, index) => (
					<div key={index}>
						<div
							className={`menu-item ${openIndex === index ? "active" : ""}`}
							onClick={() => toggleSection(index)}
						>
							{section.title}
						</div>

						<div className={`submenu ${openIndex === index ? "open" : ""}`}>
							{section.links.map((link, i) => {
								const slug = link
									.replace(/[^a-zA-Z0-9\s]/g, "")
									.trim()
									.replace(/\s+/g, "-")
									.toLowerCase();

								return (
									<NavLink
										to={`/services/${slug}`}
										key={i}
										className={({ isActive }) =>
											isActive ? "active" : ""
										}
										end
										onClick={() => handleNavClick(slug)}
									>
										{link}
									</NavLink>
								);
							})}
						</div>
					</div>
				))}
			</div>

			{/* Overlay appears only on mobile when sidebar is open */}
			{sidebarOpen && (
				<div
					className="sidebar-overlay"
					onClick={() => setSidebarOpen(false)}
					aria-hidden="true"
				/>
			)}

			{/* Toggle button for mobile (floating, bottom-right) */}
			<button
				className="sidebar-toggle"
				onClick={() => setSidebarOpen((s) => !s)}
				aria-label="Toggle sidebar"
			>
				<span style={{ fontSize: "1.1rem", marginRight: 8 }}>☰</span>
				<span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Services</span>
			</button>
		</>
	);
}
