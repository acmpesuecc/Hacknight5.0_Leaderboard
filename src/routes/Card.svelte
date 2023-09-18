<script>
    export let username;
    export let points;
    export let index;
    // put your js here
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400;800&display=swap" rel="stylesheet">


<main>
    <body class="text-white">
        <div class="wholeThing ">
            
            <div class="card md:ml-10 md:mr-10 rounded-md text-start">
                <div class="flex-start">{index}<img src="https://github.com/{username}.png" alt="" class="rounded-full border border-gray-500 p-2"></div>
                <div class="contents">
                    <h2>
                       {username}
                    </h2>
                    <div class=" ">{points}</div>
                </div>
            </div>
        </div>
    </body>
</main>


<style>
    /* put your styles here */
</style>
