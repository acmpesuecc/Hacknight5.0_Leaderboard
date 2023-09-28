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
            <div class="card flex m-10 bg-[#0F0913] rounded-xl p-2 items-center justify-center {index == 1 ? 'card-gold' : ''} cursor-pointer" onclick="window.location='{username}'">
                <div class="flex flex-col items-center md:flex-row md:justify-between lg:flex-row lg:justify-between ">
                    <div class="relative mt-2 mb-2 md:m-6" >
                        <img src="card_background.svg" alt="background_image" class="w-40 h-auto block">
                        <div class="absolute inset-0 flex items-center justify-center ">
                            <img src="https://github.com/{username}.png" alt="" class="rounded-md w-32 absolute {index % 2 == 0 ? 'rotate-12' : '-rotate-12'} h-auto ">
                        </div>
                    </div>


                    <div class="flex flex-col justify-center items-center m-0 lg:m-16 lg:ml-20 lg:mr-20"> 
                        <h1 class=" text-xl md:text-3xl lg:text-5xl text-[#EFEDEF] font-bold m-4 mb-1 lg:m-4 md:mb-1 {index==1 ? 'text-[#FFFBA4]' :''} ">
                            {username.toUpperCase()}
                        </h1>
                        <div class="score text-3xl mb-2 lg:p-2 {index==1 ? 'text-[#FFFBA4]' :''} ">
                            {points}
                        </div>

                    </div>
                </div>
                    <div class="score font-bold text-[#EFEDEF] text-5xl ml-6 lg:ml-8 md:ml-8 {index==1 ? 'text-[#FFFBA4]' :''} ">
                    {index}
                    </div>
            </div>
    </body>
</main>


<style>

.card{
    border: 1px solid rgb(101, 95, 103);
    background: linear-gradient(156deg, rgba(239, 237, 239, 0.04) 0%, rgba(0, 0, 0, 0.04) 92.3%);
    backdrop-filter: blur(5px);
}

.card-gold{
    border-color: #D2B863;
}
</style>
