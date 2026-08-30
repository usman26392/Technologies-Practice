import teamData from "@/app/data/team-card-list.json";



// Define Strapi URL
export const STRAPI_URL = "http://localhost:1337";


export const getGeneralData = async (queryString: any) => {
	try {
		const response = await fetch(`${STRAPI_URL}/api/general?${queryString}`);
		
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


export const getHomeData = async (queryString: any) => {
	try {
		const response = await fetch(`${STRAPI_URL}/api/home?${queryString}`);
		
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



export const getTeamData = async (queryString: any) => {
	try {
		const response = await fetch(`${STRAPI_URL}/api/team?${queryString}`);
		
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

// get team data from API
let teamListData = await getTeamData("populate[team_lists][populate]=Figure_sm");

export async function getTeamDataDetails(slug: string) {
	let obj: any = {};
	// console.log("obj", obj);

	teamListData?.team_lists.map((item: any, idx:number) => {
		// console.log("iterate items", item);
		// return console.log("item id", item?.id);
		let slugNumber:number = parseInt(slug);
		 console.log("numbers aaa:", typeof  (item?.id), typeof slugNumber);
		if (item?.id === (slugNumber)) {
			// put item in obj
			obj = item;
		}
		return console.log("err");
	});

	return obj;

	// console.log("datass", DataItem)

	// // console.log(slug)
	// try {
	// 	// const response = await fetch(`${slug}`)
	// } catch (error) {
	// 	console.log("fetch error", error);
	// }
}



// get team details data from json
export async function getTeamDetails(slug: string) {
	// console.log("check", teamData?.teamCardList[0])
	// console.log("here slug", typeof slug)
	let obj: any = {};

	teamData?.teamCardList.map((item: any, idx) => {
		// console.log("iterate item", item);
		// return console.log("item id", item?.id)
		//  console.log("numbers:", typeof  (item?.id), typeof slug),
		if (item?.id === slug) {
			// put item in obj
			obj = item;
		}
		return console.log("err");
	});

	return obj;

	// console.log("datass", DataItem)

	// // console.log(slug)
	// try {
	// 	// const response = await fetch(`${slug}`)
	// } catch (error) {
	// 	console.log("fetch error", error);
	// }
}
