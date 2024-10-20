
let user_details;

export async function load({ params, fetch }) {
  let username = params.slug;
  try {
    const response = await fetch(
      import.meta.env.VITE_BOT_ENDPOINT +`/records?user=${username}`
    );
    if (!response.ok) {
      throw new Error(response.status, "Reddy Anna Is Not Talking");
    } else {
      user_details = await response.json();
      return {
        user_details
      };
    }
  } catch (err) {
    console.log(err);
  }
}
