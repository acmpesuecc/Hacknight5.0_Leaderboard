
let json_response;

export const load = async ({ fetch }) => {
    try {
        const response = await fetch('https://mocki.io/v1/f1a6cc99-ec87-48ca-bd54-aa41dd374675');
        if (!response.ok) {
            throw new Error("Reddy Anna Is Not Talking");
        } else{
        json_response = await response.json();
        return {
            json_response
        };
        }
    } catch (err) {
        console.log(err);
    }
}
