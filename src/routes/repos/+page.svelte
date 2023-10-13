<script>
  import Background from "../Background.svelte";
  let innerWidth = 0;
  let releaseRepos = true;
  let repos = [
    // Software_Wave_1_Repos
    "https://github.com/acmpesuecc/riscv-instr-gen",
    "https://github.com/acmpesuecc/Bazaar",
    "https://github.com/acmpesuecc/gameoflife",
    "https://github.com/acmpesuecc/kinto-svelte",
    "https://github.com/acmpesuecc/gegit",
    "https://github.com/acmpesuecc/satisfying-visualizations",
    "https://github.com/acmpesuecc/ResumeMaker",
    "https://github.com/acmpesuecc/timetracker-server",
    "https://github.com/acmpesuecc/scraper",
    "https://github.com/acmpesuecc/pesu-bot-2025",
    "https://github.com/acmpesuecc/ASCII-Camera",
    "https://github.com/acmpesuecc/growpal-flutter",
    "https://github.com/acmpesuecc/qutebits",
    "https://github.com/acmpesuecc/hyper-soar",
    "https://github.com/acmpesuecc/MUNSocWebsite",
    "https://github.com/acmpesuecc/timetracker-frontend",
    "https://github.com/acmpesuecc/Attendance-Register",
    "https://github.com/acmpesuecc/Email-Scraper",
    "https://github.com/acmpesuecc/Misogyny-Detection",
    "https://github.com/acmpesuecc/GrowPal-Web",
    "https://github.com/acmpesuecc/Monopoly-Game",
    "https://github.com/acmpesuecc/aes-128-sysverilog-riscv",
    "https://github.com/acmpesuecc/Dino-bot",
    "https://github.com/acmpesuecc/rundi.nvim",
    "https://github.com/acmpesuecc/ice",
    "https://github.com/acmpesuecc/weatherforecast",
    "https://github.com/acmpesuecc/Employee_Attrition_EDA_Prediction",
    // Hardware_Wave_1
    "https://github.com/acmpesuecc/Intelligent_Traffic_Light_System",
    "https://github.com/acmpesuecc/7_seg_display",
    "https://github.com/acmpesuecc/rock_paper_scissor",
    "https://github.com/acmpesuecc/hamming_code_1",
    "https://github.com/acmpesuecc/fsm_1",
    "https://github.com/acmpesuecc/Earthquake_Detection",
    "https://github.com/acmpesuecc/3_bit_up",
    "https://github.com/acmpesuecc/simon_says",
    "https://github.com/acmpesuecc/was_a_game"
  ];

  let repoNames = [];
  let regex = /\/([A-Za-z0-9_.-]+)$/;

  for (let repo of repos) {
    let match = repo.match(regex);
    repoNames.push(match[1]);
  }
</script>

<svelte:window bind:innerWidth />

<main>
  <Background />
  {#if releaseRepos}
    <div
      class="text-3xl lg:text-7xl font-bold text-center mt-4 lg:mt-6 text-white"
    >
      GitHub Repos List
    </div>
    <div class="bg-[#0F0913] mx-6 my-8 lg:my-10 lg:mx-10">
      <div
        class="grid grid-cols-1 p-2 lg:px-4 lg:py-8 gap-x-8 lg:grid-cols-3 justify-center items-center"
      >
        {#each repos as repo, i}
          <a
            href={repo}
            class="flex justify-center items-center mx-4"
            target="_blank"
          >
            <button
              class="w-full lg:mr-2 mb-4 p-3 break-words border border-[#231e25] hover:border-[#d2b863] active:border-[#d2b863] text-white rounded-md bg-[#231e25]"
            >
              {repoNames[i]}
            </button>
          </a>
        {/each}
      </div>
    </div>
  {:else}
    <div class="flex justify-center items-center h-screen">
      <div class="message text-center text-3xl">Repos not yet released!</div>
    </div>
  {/if}
</main>
