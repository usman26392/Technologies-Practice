// Define Strapi URL
const STRAPI_URL = "http://localhost:1337";

export const getGeneralData = async () => {
	try {
		const response = await fetch(`${STRAPI_URL}/api/general`);
		// This is to check the prototype of the response object where "ok" is defined
		// const proto = Object.getPrototypeOf(response);
		// console.log("all properties which is in Prototype object:", proto);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const result = await response.json();
		return result?.data;
	} catch (error) {
		console.log("fetch error", error);
	}
};
