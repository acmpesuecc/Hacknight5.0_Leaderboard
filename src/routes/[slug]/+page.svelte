<script>
    export let leaderboard_array;
    import { page } from '$app/stores';
    const params = $page.params;
    const username = params.slug;
    console.log(leaderboard_array); // repsonse here 
    // put your js here
</script>


<main>
    <div>This is a dynamic route. you can access the username with {username} in html</div>
    <!-- put your html here -->
</main>


<style>
    /* put your styles here */
</style>
