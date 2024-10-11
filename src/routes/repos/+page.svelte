<script>
  import Background from "../Background.svelte";
  let innerWidth = 0;
  let dataLoaded = false;
  let repoReleased = true;
  let repos = [
    "https://github.com/acmpesuecc/Hacknight5.0_Leaderboard",
    "https://github.com/acmpesuecc/e-commerce-website",
    "https://github.com/acmpesuecc/SarcasmDetector",
    "https://github.com/acmpesuecc/riscv-application-profiler",
    "https://github.com/acmpesuecc/Bulls_Cows",
    "https://github.com/acmpesuecc/VantaGreen",
    "https://github.com/acmpesuecc/rock-paper-scissors",
    "https://github.com/acmpesuecc/SolveRR-frontend",
    "https://github.com/acmpesuecc/NEAT-cars",
    "https://github.com/acmpesuecc/SlimeSimulation",
    "https://github.com/acmpesuecc/Snail_Hurdle_Hop",
    "https://github.com/acmpesuecc/flappio",
    "https://github.com/acmpesuecc/AutoVs",
    "https://github.com/acmpesuecc/hand-gesture-control",
    "https://github.com/acmpesuecc/Cash-Tracker",
    "https://github.com/acmpesuecc/GrowPal",
    "https://github.com/jasmcaus/caer",
    "https://github.com/jasmcaus/tau",
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
    "https://github.com/acmpesuecc/Vonic",
    "https://github.com/acmpesuecc/Logic-Gate-Simulation",
    "https://github.com/acmpesuecc/Morse",
    "https://github.com/acmpesuecc/SpotiFetch",
    "https://github.com/acmpesuecc/SystemVerilog-playground",
    "https://github.com/acmpesuecc/Intelligent_Traffic_Light_System",
    "https://github.com/acmpesuecc/7_seg_display",
    "https://github.com/acmpesuecc/rock_paper_scissor",
    "https://github.com/acmpesuecc/hamming_code_1",
    "https://github.com/acmpesuecc/fsm_1",
    "https://github.com/acmpesuecc/Earthquake_Detection",
    "https://github.com/acmpesuecc/3_bit_up",
    "https://github.com/acmpesuecc/simon_says"
  ];

  let repoNames = [];
  let regex = /\/([A-Za-z0-9_.-]+)$/;
  for (let repo of repos) {
    repoNames.push(repo.match(regex)[1]);
  }

  import { Octokit } from "@octokit/core";
  import { onMount } from "svelte";

  const octokit = new Octokit({
    auth: "MY-TOKEN"
  });

  let totalIssuesArray = new Array(repoNames.length);
  let unassignedIssuesArray = new Array(repoNames.length).fill(null);
  let maintainersArray = new Array(repoNames.length).fill(null);

  async function getIssueCount(repoName, index) {
    try {
      const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "acmpesuecc",
        repo: repoName,
        state: "open"
      });
      const issues = response.data.filter((issue) => !issue.pull_request);
      totalIssuesArray[index] = issues.length;
      unassignedIssuesArray[index] = issues.filter((issue) => !issue.assignee).length;
    } catch (error) {
      console.error(`Failed to fetch issue count for ${repoName}`, error);
    }
  }

  async function getMaintainers(repoName, index) {
    try {
      const response = await octokit.request("GET /repos/{owner}/{repo}/contributors", {
        owner: "acmpesuecc",
        repo: repoName
      });
      maintainersArray[index] = response.data[0]?.login || "Unknown";
    } catch (error) {
      console.error(`Failed to fetch maintainers for ${repoName}`, error);
    }
  }

  async function fetchRepoData() {
    const promises = repoNames.map(async (repoName, index) => {
      await getIssueCount(repoName, index);
      await getMaintainers(repoName, index);
    });
    
    await Promise.all(promises);
    dataLoaded = true;
  }

  onMount(async () => {
    await fetchRepoData();
  });

  let hovering = null;

  function getInitialText(index) {
    return `${unassignedIssuesArray[index] !== null && totalIssuesArray[index] !== null ? `${unassignedIssuesArray[index]}/${totalIssuesArray[index]}` : "Loading..."}`;
  }

  function getHoverText(index) {
    return `Available issues: ${unassignedIssuesArray[index]}<br>Total issues: ${totalIssuesArray[index]}<br>Maintainer: ${maintainersArray[index]}`;
  }
</script>

<svelte:window bind:innerWidth />

<main class="font-Space-Grotesk relative">
  <div class="flex justify-end gap-10 mx-32 mt-6 text-[30px]">
    <a href="/" class="underline-effect">Home</a>
    <a href="/leaderboard" class="underline-effect">Leaderboard</a>
  </div>
  <Background />
  <div class="text-center mx-10 font-bold text-[100px]">GitHub Repos</div>

  {#if !repoReleased}
    <div class="text-center my-10 text-white text-[30px]">Waiting for event to start...</div>
  {:else}
      <div class="mx-10 my-5 bg-transparent py-2 rounded-lg">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          {#each repos as repo, i}
            <a
              href={repo}
              class="repo-card flex justify-between text-center my-3 mx-12 border-[2px] border-[solid] text-[#fffdf8] pr-4 text-[20px] rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-500 py-3 hover:scale-[1.4] hover:block hover:h-[fit-content] [transition:transform_0.2s_ease,_border-color_0.2s_ease]"
              target="_blank"
              on:mouseenter={() => (hovering = i)}
              on:mouseleave={() => (hovering = null)}
            >
              <button class="w-full h-full text-left pl-3 truncate font-medium">
                {repoNames[i]}
              </button>
              {#if dataLoaded}
              <p class="text-[12px]">
                {@html hovering === i ? getHoverText(i) : getInitialText(i)}
              </p>
              {/if}
            </a>
          {/each}
        </div>
      </div>
  {/if}
</main>

<style>
.underline-effect {
  position: relative;
  color: white;
  text-decoration: none;
}

.underline-effect::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
  transform: translateX(-50%);
}

.underline-effect:hover::before {
  width: 100%;
}
</style>