<script>
  import Background from "../Background.svelte";
  let innerWidth = 0;

  let repos = [
    "https://github.com/bun137/kinto-svelte",
    "https://github.com/dscpesu/PES-Wayfinder",
    "https://github.com/samarth-ramesh/accounts-api",
    "https://github.com/devadigapratham/SolveRR-frontend",
    "https://github.com/bun137/Intelligent_Traffic_Light_System",
    "https://github.com/dscpesu/my-first-opensource-contribution",
    "https://github.com/kalaithuli/Snail_Hurdle_Hop",
    "https://github.com/surajkadapa/asm-osdev",
    "https://github.com/surajkadapa/7_seg_display",
    "https://github.com/skudlur/riscv-instr-gen",
    "https://github.com/achyuthcodes30/Bazaar",
    "https://github.com/procub3r/gameoflife",
    "https://github.com/acmpesuecc/Hacknight5.0_Leaderboard",
    "https://github.com/skudlur/gegit",
    "https://github.com/jasmcaus/caer",
    "https://github.com/alfadelta10010/SystemVerilog-playground",
    "https://github.com/inirah02/Knock-Knock-What-s-next-",
    "https://github.com/skudlur/aes-128-sysverilog-riscv",
    "https://github.com/surajkadapa/hamming_code_1",
    "https://github.com/poorvisuparn/SmileNStyle",
    "https://github.com/anuragrao04/GrowPal",
    "https://github.com/bun137/rock-paper-scissors",
    "https://github.com/Vaarun-C/satisfying-visualizations",
    "https://github.com/kalaithuli/Bulls_Cows",
    "https://github.com/nishtha981/hand-gesture-control",
    "https://github.com/Keshav1105/Morse",
    "https://github.com/Saksham-13/ResumeMaker",
    "https://github.com/deepiikaa24/actual",
    "https://github.com/samarth-ramesh/timetracker-server",
    "https://github.com/Vaarun-Kamath/Monopoly-Game",
    "https://github.com/Vaarun-C/ASCII-Camera",
    "https://github.com/anuragrao04/scraper",
    "https://github.com/deepiikaa24/InvenTree",
    "https://github.com/alfadelta10010/pesu-bot-2025",
    "https://github.com/dscpesu/SimpleML",
    "https://github.com/surajkadapa/rock_paper_scissor",
    "https://github.com/vi-r-oy/AutoVs",
    "https://github.com/nikithkb/e-commerce-website",
    "https://github.com/Vaarun-C/NEAT-cars",
    "https://github.com/anuragrao04/growpal-flutter",
    "https://github.com/Advaith-RN/hyper-soar",
    "https://github.com/MUNSoc-PESUECC/MUNSocWebsite",
    "https://github.com/samarth-ramesh/timetracker-frontend",
    "https://github.com/jasmcaus/tau",
    "https://github.com/dscpesu/FlutterFolio",
    "https://github.com/surajkadapa/fsm_1",
    "https://github.com/NavinShrinivas/SysPerf",
    "https://github.com/dscpesu/PseudoSketch",
    "https://github.com/bun137/Earthquake_Detection",
    "https://github.com/Vaarun-Kamath/Attendance-Register",
    "https://github.com/vortex73/Vonic",
    "https://github.com/NavinShrinivas/sapling",
    "https://github.com/dscpesu/Cloud-101.",
    "https://github.com/surajkadapa/simon_says",
    "https://github.com/Vaarun-Kamath/Email-Scraper",
    "https://github.com/surajkadapa/3_bit_up",
    "https://github.com/poorvisuparn/Misogyny-Detection",
    "https://github.com/Advaith-RN/SpotiFetch",
    "https://github.com/anuragrao04/GrowPal-Web",
    "https://github.com/s3dman/SlimeSimulation",
    "https://github.com/vi-r-oy/VantaGreen",
    "https://github.com/dscpesu/PES-BUZZ",
    "https://github.com/Cash-Tracker/Cash-Tracker",
    "https://github.com/dscpesu/resumeLaTeX",
    "https://github.com/nikithkb/Dino-bot",
    "https://github.com/skudlur/waveplot"
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
</main>

