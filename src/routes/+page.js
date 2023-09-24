
let json_response;

export const load = async ({ fetch }) => {
    try {
        const response = await fetch('http://smaran.ddns.net:3000/lb_all');
        if (!response.ok) {
            throw new Error("Reddy Anna Is Not Talking");
        } else {
            json_response = await response.json();
            return {
                json_response
            };
        }
    } catch (err) {
        console.log(err);
    }
}
