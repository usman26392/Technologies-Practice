// for arbitrary class
(function () {
	// Get the parent div and the toggle button
	const parentDiv = document.getElementById("parent");
	const toggleButton = document.getElementById("toggleButton");

	// Add a click event listener to toggle the 'is-active' class
	toggleButton.addEventListener("click", () => {
		parentDiv.classList.toggle("is-active"); // Add or remove the class
	});
})();

// for arbitrary peers
(function () {
	const emailInput = document.querySelector("#emailPeer");

	// Add the "is-dirty" class when the user types something or interacts
	emailInput.addEventListener("input", function () {
		this.classList.add("is-field-empty");
	});

	emailInput.addEventListener("blur", function () {
		if (this.value.trim() === "") {
			this.classList.remove("is-field-empty");
		}
	});
})();

// dialog open with the help of dialog API
(function () {
	document.addEventListener("DOMContentLoaded", () => {
		const dialog = document.getElementById("myDialog");
		const openDialogButton = document.getElementById("openDialogButton");
		const cancelButton = document.getElementById("cancelButton");

		// Open dialog
		openDialogButton.addEventListener("click", () => {
			dialog.showModal();
		});

		// Close dialog
		cancelButton.addEventListener("click", () => {
			dialog.close();
		});
	});
})();

// Custom tabs
// (function () {
// 	// Get all tabs and contents
//     const tabs = document.querySelectorAll('.tab');
//     const contents = document.querySelectorAll('.tab-content');

//     // Initial setup: Apply hidden class to all except the first content
//     contents.forEach((content, index) => {
//       if (index !== 0) content.classList.add('hidden');
//     });

//     // Function to switch tabs
//     function switchTab(e) {
//       const targetId = e.target.dataset.id;

//       // Deactivate all tabs and hide all contents
//       tabs.forEach(tab => tab.classList.remove('active', 'border-b-2', 'border-blue-500', 'text-blue-500'));
//       contents.forEach(content => content.classList.add('hidden'));

//       // Activate clicked tab and show corresponding content
//       e.target.classList.add('active', 'border-b-2', 'border-blue-500', 'text-blue-500');
//       document.getElementById(targetId).classList.remove('hidden');
//     }

//     // Attach event listeners to all tabs
//     tabs.forEach(tab => tab.addEventListener('click', switchTab));

// })();

(function () {
	// Get all tabs and contents
	const tabs = document.querySelectorAll(".tab-list .group");
	const contents = document.querySelectorAll(".tab-content");

	// Initial setup: Apply hidden class to all except the first content
	contents.forEach((content, index) => {
		if (index !== 0) content.classList.add("hidden");
	});

	// Function to switch tabs
	function switchTab(e) {
		if (e.target.classList.contains("cursor-pointer")) {
			console.log("first");
			const targetId = e.target.closest(".group").dataset.id;
			// Deactivate all tabs and hide all contents
			tabs.forEach((tab) => tab.classList.remove("is-active"));
			contents.forEach((content) => content.classList.add("hidden"));

			// Activate clicked tab and show corresponding content
			e.target.closest(".group").classList.add("is-active");
			document.getElementById(targetId).classList.remove("hidden");
		}
	}

	// Attach event listeners to all tabs
	tabs.forEach((tab) => tab.addEventListener("click", switchTab));
})();

// toggle dark theme manually by class selector.
// (function () {
// 	let toggleDarkTheme = document.querySelector("#toggleDarkTheme"),
// 		root_el = document.querySelector("html");

// 	toggleDarkTheme.addEventListener("click", function () {
// 		root_el.classList.toggle("dark");
// 	});
// })();

// toggle dark theme manually by custom class selector.
// (function () {
// 	const toggleDarkMode = () => {
// 		const root_el = document.documentElement;
// 		if (root_el.getAttribute("data-mode") === "dark") {
// 			root_el.setAttribute("data-mode", "light");
// 		} else {
// 			root_el.setAttribute("data-mode", "dark");
// 		}
// 	};

// 	let toggleDarkThemeBtn2 = document.querySelector("#toggleDarkThemeBtn2");
// 	toggleDarkThemeBtn2.addEventListener("click", toggleDarkMode);
// })();

// Supporting system preference theme and manual selection
(function () {
	// Apply the theme on page load
	function applyTheme() {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}

	// Theme change functions
	function setLightMode() {
		localStorage.theme = "light";
		document.documentElement.classList.remove("dark");
	}

	function setDarkMode() {
		localStorage.theme = "dark";
		document.documentElement.classList.add("dark");
	}

	function setSystemMode() {
		localStorage.removeItem("theme");
		applyTheme();
	}

	// Watch for changes in system preference and update dynamically
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (!("theme" in localStorage)) {
			applyTheme();
		}
	});

	// Add event listeners to buttons
	document.getElementById("light-mode-btn").addEventListener("click", setLightMode);
	document.getElementById("dark-mode-btn").addEventListener("click", setDarkMode);
	// document.getElementById("system-mode-btn").addEventListener("click", setSystemMode);

	// Apply the theme when the page loads
	applyTheme();
})();

// I cant use right now because this code for when theme come from database i.e API
// (async function () {
// 	// Fetch the theme from the database
// 	async function fetchThemeFromDatabase() {
// 		try {
// 			const response = await fetch('/api/get-theme'); // Replace with your actual API endpoint
// 			const data = await response.json();
// 			return data.theme; // e.g., "dark", "light", or "system"
// 		} catch (error) {
// 			console.error("Failed to fetch theme from database:", error);
// 			return null; // Default fallback
// 		}
// 	}

// 	// Apply the theme
// 	function applyTheme(theme) {
// 		if (theme === "dark") {
// 			localStorage.theme = "dark";
// 			document.documentElement.classList.add("dark");
// 		} else if (theme === "light") {
// 			localStorage.theme = "light";
// 			document.documentElement.classList.remove("dark");
// 		} else {
// 			// Remove localStorage theme and fall back to system preference
// 			localStorage.removeItem("theme");
// 			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
// 				document.documentElement.classList.add("dark");
// 			} else {
// 				document.documentElement.classList.remove("dark");
// 			}
// 		}
// 	}

// 	// Theme change functions
// 	function setLightMode() {
// 		localStorage.theme = "light";
// 		document.documentElement.classList.remove("dark");
// 		// Save the preference to the database (optional)
// 		saveThemeToDatabase("light");
// 	}

// 	function setDarkMode() {
// 		localStorage.theme = "dark";
// 		document.documentElement.classList.add("dark");
// 		// Save the preference to the database (optional)
// 		saveThemeToDatabase("dark");
// 	}

// 	function setSystemMode() {
// 		localStorage.removeItem("theme");
// 		applyTheme("system"); // Fallback to system preference
// 		// Save the preference to the database (optional)
// 		saveThemeToDatabase("system");
// 	}

// 	// Save the theme to the database
// 	async function saveThemeToDatabase(theme) {
// 		try {
// 			await fetch('/api/save-theme', {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ theme }),
// 			});
// 		} catch (error) {
// 			console.error("Failed to save theme to database:", error);
// 		}
// 	}

// 	// Fetch and apply theme on page load
// 	const theme = await fetchThemeFromDatabase();
// 	applyTheme(theme);

// 	// Add event listeners to buttons
// 	document.getElementById("light-mode-btn").addEventListener("click", setLightMode);
// 	document.getElementById("dark-mode-btn").addEventListener("click", setDarkMode);
// 	document.getElementById("system-mode-btn").addEventListener("click", setSystemMode);
// })();


