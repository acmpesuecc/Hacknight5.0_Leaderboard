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
            
            <!-- <div class=" md:ml-40 md:mr-40 md:mt-10 md:mb-10 rounded-2xl pt-4 pb-4 pl-20 pr-20 text-start flex justify-between items-center {index == 1 ? 'bg-[#C3BCC3] text-black' : 'bg-[#655F67]'} ">
                <div class=" text-2xl">
                    {index}
                </div>
                <div class="flex justify-center items-center">
                    <img src="https://github.com/{username}.png" alt="" class="rounded-full shadow-2xl w-28 h-28 md:mr-8">
                    <h2 class=" text-3xl ">
                        {username}
                    </h2>
                </div>
                <div class="contents">
                    
                    <div class=" text-3xl">{points}</div>
                </div>
            </div> -->
            <div class="flex">
                <div class="flex items-center">
                    <div class=" relative">
                        <!-- <img src="card_bg.png" alt="background_img" class=" w-100 h-auto "> -->
                        <img src="background.svg" alt="background_stuff" class=" w-28 h-auto">
                        <div class=" absolute inset-0 flex items-center justify-center">
                            <img src="https://github.com/{username}.png" alt="" class=" rounded-md w-20 absolute rotate-12 h-auto  ">
                        </div>
                    </div>  
                    <div class="contents ">
                        <h1 class=" text-3xl text-center text-[#EFEDEF]">
                            {username} 
                        </h1>
                    </div>
                

            </div>
    </body>
</main>


<style>
    /* put your styles here */
</style>
