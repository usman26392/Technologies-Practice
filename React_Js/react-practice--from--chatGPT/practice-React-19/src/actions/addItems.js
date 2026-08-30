// 1. The Action Function
// It takes the current list (previousState) and adds the new item from the form

export async function addItem(previousState, formData) {
  const newItem = formData.get("item");

  console.log("formData", formData);
  console.log("previous State", previousState);

  // Simulate a quick "database" save
  await new Promise((res) => setTimeout(res, 1500));

  if (!newItem.trim()) return previousState; // Don't add empty items

  // Return the new array (this becomes the new 'state')
  return [...previousState, newItem];
}

