<script>
  import { inview } from "svelte-inview";

  export let username;
  export let points;
  export let index;
  let is_scramble_word = true;
  let is_scramble_num = true;
  let usernameText = username;
  points = points.toString();
  let scoreText = points;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890";
  const nums = "1234567890";
  let interval = null;
  let interval_num = null;

  function scrambleLetters() {
    if (is_scramble_word === true) {
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        usernameText = usernameText
          .split("")
          .map((letter, i) => {
            if (i < iteration) {
              return username[i];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iteration >= username.length) {
          is_scramble_word = false;
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }
  }

  function scrambleNumbers() {
    if (is_scramble_num === true) {
      let iteration = 0;
      clearInterval(interval_num);
      interval_num = setInterval(() => {
        scoreText = scoreText
          .split("")
          .map((num, i) => {
            if (i < iteration) {
              return points[i];
            }
            return nums[Math.floor(Math.random() * 10)];
          })
          .join("");
        if (iteration >= points.length) {
          is_scramble_num = false;
          clearInterval(interval_num);
        }
        iteration += 1 / 12;
      }, 30);
    }
  }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400;800&display=swap"
  rel="stylesheet"
/>

<main class={index == 1 ? "lg:w-1/2" : ""}>
  <body class="text-white">
    <div
      class="card flex m-3 p-4 bg-[#0F0913] rounded-xl items-center justify-between {index ==
      1
        ? 'card-gold'
        : ''} cursor-pointer"
      onclick="window.location='{username}'"
    >
      <div
        class="rank font-bold text-[#EFEDEF] text-5xl ml-6 mr-6 lg:ml-8 md:ml-8 {index ==
        1
          ? 'text-[#FFFBA4]'
          : ''} "
      >
        {index}
      </div>

      <div
        class="flex flex-col justify-center items-center m-0 lg:m-5 lg:ml-8 lg:mr-8"
      >
        <div
          use:inview={{ unobserveOnEnter: true, rootMargin: "-10%" }}
          on:change={({ detail }) => {
            if (detail.inView) {
              scrambleLetters();
            }
          }}
        />
        <h1
          class="{'username' +
            index} text-[#EFEDEF] font-bold m-4 mb-1 lg:m-4 md:mb-1 {index == 1
            ? 'text-[#FFFBA4]'
            : ''} {username.length > 12 ? 'text-2xl' : 'md:text-4xl'}"
        >
          {usernameText.toUpperCase()}
        </h1>
        <div
          use:inview={{ unobserveOnEnter: true, rootMargin: "-10%" }}
          on:change={({ detail }) => {
            if (detail.inView) {
              scrambleNumbers();
            }
          }}
        />
        <div
          class="score text-3xl mb-2 lg:p-2 {index == 1
            ? 'text-[#FFFBA4]'
            : ''} "
        >
          {scoreText}
        </div>
      </div>
      <div class="relative m-2">
        <img
          src="card_background.svg"
          alt="background_image"
          class="w-40 h-auto block"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            src="https://github.com/{username}.png"
            alt=""
            class="rounded-md w-32 absolute {index % 2 == 0
              ? 'rotate-12'
              : '-rotate-12'} h-auto"
          />
        </div>
      </div>
    </div>
  </body>
</main>

<style>
  .card {
    border: 1px solid rgb(101, 95, 103);
    background: linear-gradient(
      156deg,
      rgba(239, 237, 239, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 92.3%
    );
    backdrop-filter: blur(5px);
  }

  .card-gold {
    border-color: #d2b863;
  }
</style>
