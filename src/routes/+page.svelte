<script>
  let innerWidth = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  // const targetDate = new Date("October 14, 2023 10:00:00").getTime();

  // setInterval(() => {
  //   const now = new Date().getTime();

  //   const remainingTime = targetDate - now;

  //   days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  //   hours = Math.floor(
  //     (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

  //   if (remainingTime < 0) {
  //     clearInterval(this);
  //     console.log("Countdown finished");
  //   }
  // }, 1000);

  let contents =
    "01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100";

  let binaryArray = contents.split(" ");

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  setInterval(() => {
    binaryArray = shuffle(binaryArray);
  }, 200);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,800&display=swap"
  rel="stylesheet"
/>
<svelte:window bind:innerWidth />

<main>
  <body class="min-h-screen flex flex-col justify-between bg-[#0F0913]">
    <div class="numbersWrapper pt-4">
      <div class="binaryNumbers">
        {#each binaryArray as binary}
          <pre class="binaryNumber">{" " + binary + " "}</pre>
        {/each}
      </div>
    </div>
    <div class="grid lg:grid-cols-2 justify-center items-center mt-4 lg:mt-0">
      <div class="w-full flex justify-center items-center">
        <img src="acmlogo.png" alt="acmlogo" class="w-2/3 lg:w-1/2" />
      </div>

      <div class="w-full flex justify-center items-center">
        <img src="horizontal_logo.png" class="w-2/3 lg:w-1/2" alt="logo" />
      </div>
    </div>
    <div
      class="wholeThing flex flex-col justify-around items-center lg:flex-row lg:justify-evenly min-h-[50vh]"
    >
      <div
        class="buttons flex flex-col justify-center items-center text-3xl font-bold md:mb-8"
      >
        <a href="/leaderboard" id="link1" class="links">
          <span class="m-3 lg:text-5xl text-3xl">LEADERBOARD</span>
          <span aria-hidden="true" class="arrow">
            <span id="arrow1">›</span><!--
        --><span id="arrow2">›</span
            ><!--
        --><span id="arrow3">›</span>
          </span>
        </a>

        <a href="/repos" id="link2" class="links">
          <span class="m-3 lg:text-5xl text-3xl">REPOSITORIES</span>
          <span aria-hidden="true" class="arrow">
            <span id="arrow4">›</span><!---
        --><span id="arrow5">›</span
            ><!--
        --><span id="arrow6">›</span>
          </span>
        </a>
      </div>

      <img src="computer.gif" alt="" class="m-4 w-4/12 lg:w-2/12" />
      <div class="countDown flex md:items-center justify-center">
        <div class="countDownElement flex">
          <p class="flex flex-col items-center">
            <span class="text-4xl lg:text-8xl md:text-6xl font-bold p-4"
              >{days.toString().length >= 2 ? days : "0" + days}</span
            >
            Days
          </p>
        </div>
        <div class="countDownElement">
          <p class="flex flex-col items-center">
            <span class="text-4xl lg:text-8xl md:text-6xl font-bold p-4"
              >{hours.toString().length >= 2 ? hours : "0" + hours}</span
            >
            Hours
          </p>
        </div>
        <div class="countDownElement">
          <p class="flex flex-col items-center">
            <span class="text-4xl lg:text-8xl md:text-6xl font-bold p-4"
              >{minutes.toString().length >= 2 ? minutes : "0" + minutes}</span
            >
            Minutes
          </p>
        </div>
      </div>
    </div>

    <div class="wrapper w-screen">
      {#if innerWidth >= 1440}
        <div class="marquee w-full overflow-clip">
          <div class="marquee__content">
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
          </div>
          <div class="marquee__content" aria-hidden="true">
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
            <p
              class=" text-8xl font-extrabold italic items-center text-#FFFFFF mr-4 ml-4"
            >
              Get in the repo, Hacker!
            </p>
            <img
              class="logo"
              src="h_white.svg"
              alt="h10 logo"
              height="100"
              width="100"
            />
          </div>
        </div>
      {/if}

      <div class="numbersWrapper pb-4">
        <div class="binaryNumbers">
          {#each binaryArray as binary}
            <pre class="binaryNumber">{" " + binary + " "}</pre>
          {/each}
        </div>
      </div>
    </div>
  </body>
</main>

<style>
  main {
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", monospace;
  }

  .marquee {
    display: flex;
    animation: movii 25s linear infinite;
    white-space: nowrap;
    align-items: center;
    width: max-content;
  }

  p {
    text-transform: uppercase;
    padding: 10px;
  }

  .marquee__content {
    display: inline-block;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: max-content;
  }

  @keyframes movii {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .logo {
    width: 80px;
    height: auto;
    padding: 60px 0;
    transform: rotate(12deg);
  }

  .binaryNumbers {
    white-space: nowrap;
    overflow: hidden;
    animation: binaryMoving 15s linear infinite;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: max-content;
  }
  .binaryNumber {
    display: inline-block;
  }
  .numbersWrapper {
    background: linear-gradient(
      90deg,
      rgba(236, 66, 55, 0.3) 0%,
      rgba(255, 251, 164, 0.3) 66.15%,
      rgba(51, 182, 216, 0.3) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-wrap: nowrap;
    mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5%,
      rgb(0, 0, 0) 10%,
      rgb(0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 95%
    );
  }

  .buttons {
    height: 50px;
  }

  .links {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }

  .links span[aria-hidden="true"] span:nth-child(1) {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .links span[aria-hidden="true"] span:nth-child(2) {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .links span[aria-hidden="true"] span:nth-child(3) {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .links:hover span[aria-hidden="true"] span:nth-child(1) {
    animation: fadeIn 0.3s forwards;
    color: #33b6d8;
  }

  .links:hover span[aria-hidden="true"] span:nth-child(2) {
    animation: fadeIn 0.3s forwards;
    animation-delay: 0.3s;
    color: #33b6d8;
  }

  .links:hover span[aria-hidden="true"] span:nth-child(3) {
    animation: fadeIn 0.3s forwards;
    animation-delay: 0.6s;
    color: #33b6d8;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .arrow {
    font-size: 1.5rem;
  }
</style>
