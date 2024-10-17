<script>
  import Background from "../Background.svelte";
  let innerWidth = 0;
  let dataLoaded = false;
  let repoReleased = true;

  let repos = import.meta.env.VITE_REPOS.split(",");

  let repoNames = [];
  let regex = /\/([A-Za-z0-9_.-]+)$/;
  for (let repo of repos) {
    repoNames.push(repo.match(regex)[1]);
  }

  import { Octokit } from "@octokit/core";
  import { onMount } from "svelte";

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
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

  async function fetchRepoData() {
    const promises = repoNames.map(async (repoName, index) => {
      await getIssueCount(repoName, index);
    });
    
    await Promise.all(promises);
    dataLoaded = true;
  }

  onMount(async () => {
    await fetchRepoData();
  });


  function getInitialText(index) {
    return `${unassignedIssuesArray[index] !== null && totalIssuesArray[index] !== null ? `${unassignedIssuesArray[index]}/${totalIssuesArray[index]} issues available` : "Cannot load issues"}`;
  }

</script>

<svelte:window bind:innerWidth />

<main class="font-Space-Grotesk relative">
  <div class="flex justify-end gap-4 md:gap-10 mx-4 md:mx-32 mt-4 md:mt-6 text-[20px] md:text-[30px]">
    <a href="/" class="underline-effect">Home</a>
    <a href="/leaderboard" class="underline-effect">Leaderboard</a>
  </div>
  <Background />
  <div class="text-center mx-10 font-bold text-[50px] lg:text-[100px]">GitHub Repos</div>

  {#if !repoReleased}
    <div class="text-center my-10 text-white text-[30px]">Waiting for event to start...</div>
  {:else}
      <div class="mx-10 my-5 bg-black bg-opacity-30 py-2 rounded-lg">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          {#each repos as repo, i}
            <a
              href={repo}
              class="repo-card flex justify-between text-center my-3 mx-12 border-[1px] border-[#525252] text-[#fffdf8] pr-4 text-[20px] rounded-lg bg-gradient-to-tr from-neutral-700 via-neutral-800 to-zinc-900 py-3 hover:scale-[1.1] [transition:transform_0.2s_ease,_border-color_0.2s_ease]"
              target="_blank"
            >
              <button class="w-full h-full text-left pl-3 truncate font-medium">
                {repoNames[i]}
              </button>
              {#if dataLoaded}
              <p class="text-[12px]">
                {getInitialText(i)}
              </p>
              {/if}
            </a>
          {/each}
        </div>
      </div>
  {/if}
</main>

<style>

.repo-card {
  font-weight: medium;
  font-family: "Space Grotesk";
  transition: transform 0.2s ease, border-color 0.2s ease;
  border: 1px solid rgba(16, 170, 137, 0.253);
  background: linear-gradient(
    156deg,
    rgba(0, 34, 21, 0.04) 0%,
    rgba(4, 92, 95, 0.438) 92.3%
  );
  backdrop-filter: blur(5px);
}
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
  background-color: #50DA4C;
  transition: width 0.3s ease;
  transform: translateX(-50%);
}

.underline-effect:hover::before {
  width: 100%;
}
</style>