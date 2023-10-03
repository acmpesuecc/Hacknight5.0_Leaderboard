let user_details;

export async function load({ params, fetch }) {
    let username = params.slug;
    console.log(username)
    try {
        const response = await fetch(`http://smaran.ddns.net:3000/records?user=${username}`);
        if (!response.ok) {
            throw new Error(response.status, "Reddy Anna Is Not Talking");
        } else {
            user_details = await response.json();
            console.log(user_details);
            return { 
                user_details 
            };
        }
    } catch (err) {
        console.log(err);
    }
}