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
            
            <div class=" md:ml-40 md:mr-40 md:mt-10 md:mb-10 rounded-2xl pt-4 pb-4 pl-20 pr-20 text-start flex justify-between items-center {index == 1 ? 'bg-[#D2B863] text-black' : 'bg-[#655F67]'} ">
                <div>
                    {index}
                </div>
                <div class="flex justify-center items-center">
                    <img src="https://github.com/{username}.png" alt="" class="rounded-full border border-gray-500 w-28 h-28 md:mr-8">
                    <h2 class="text-xl ">
                        {username}
                    </h2>
                </div>
                <div class="contents">
                    
                    <div class=" ">{points}</div>
                </div>
            </div>
    </body>
</main>


<style>
    /* put your styles here */
</style>
