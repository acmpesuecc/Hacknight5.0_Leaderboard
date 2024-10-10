<script>
  import Background from "../Background.svelte";
  let innerWidth = 0;
  let dataLoaded = false;
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
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "acmpesuecc",
      repo: repoName,
      state: "open"
    });
    const issues = response.data.filter((issue) => !issue.pull_request);
    totalIssuesArray[index] = issues.length;
    unassignedIssuesArray[index] = issues.filter(
      (issue) => !issue.assignee
    ).length;
    // console.log(unassignedIssuesArray);
    // console.log(totalIssuesArray);
  }

  async function getMaintainers(repoName, index) {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/contributors",
      {
        owner: "acmpesuecc",
        repo: repoName,
        state: "open"
      }
    );
    maintainersArray[index] = response.data[0].login;
  }

  async function fetchRepoData() {
    repoNames.forEach(async (repoName, index) => {
      await getIssueCount(repoName, index);
      await getMaintainers(repoName, index);
    });
  }

  onMount(async() => {
    await fetchRepoData();
  });

  let hovering = null;

  function getInitialText(index) {
    return `${
      unassignedIssuesArray[index] !== null && totalIssuesArray[index] !== null
        ? `${unassignedIssuesArray[index]}/${totalIssuesArray[index]}`
        : "Loading..."
    }`;
  }

  function getHoverText(index) {
    return `Available issues: ${unassignedIssuesArray[index]}<br>Total issues: ${totalIssuesArray[index]}<br>Maintainer: ${maintainersArray[index]}`;
  }

</script>

<svelte:window bind:innerWidth />

<main>
  <Background />
  <div class="text-center mx-10 font-bold text-[100px]">GitHub Repos</div>
  <div class="mx-10 my-5 bg-black py-2 rounded-lg">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      {#each repos as repo, i}
        <a
          href={repo}
          class="flex justify-between text-center my-3 mx-12 text-[#fffdf8] pr-4 text-[20px] bg-[#1C1C1C] py-3"
          target="_blank"
          on:mouseenter={() => (hovering = i)}
          on:mouseleave={() => (hovering = null)}
        >
          <button class="w-full h-full text-left pl-3 truncate font-medium"
            >{repoNames[i]}</button
          >
          <p class="text-[12px]">
            {@html hovering === i ? getHoverText(i) : getInitialText(i)}
          </p>
        </a>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    font-family: "Space Grotesk";
  }
  a {
    border: 2px solid #ffffff50;
    border-radius: 4px;
    font-weight: medium;
    font-family: "Space Grotesk";
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    transform: scale(1.4);
    display: block;
    height: fit-content;
  }

  main {
    position: relative;
    z-index: 1;
  }
</style>
