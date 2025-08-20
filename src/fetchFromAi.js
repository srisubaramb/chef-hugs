export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const res = await fetch("/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredientsArr }),
    });

    const data = await res.json();
    return data.recipe;
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
  }
}
