<script>
  import Background from "../Background.svelte";
  import Card from "./Card.svelte";
  import CardRow from "./CardRow.svelte";
  import { onMount } from "svelte";

  let innerWidth = 0;

  let leaderboard;
  let oldLeaderboard = [];

const dummyData = [
  { Name: "yashmithaa", Current_bounty: 1255 },
  { Name: "AlaynaMonteiro", Current_bounty: 1200 },
  { Name: "polarhive", Current_bounty: 1100 },
  { Name: "bwaklog", Current_bounty: 1000 },
  { Name: "anirudhsudhir", Current_bounty: 800},
  { Name: "reema-s1", Current_bounty: 950},
  { Name: "DedLad", Current_bounty: 1350},
  { Name: "procub3r", Current_bounty: 990}
];

  const fetchLeaderboardData = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
    
      let json_response = [...dummyData];
      json_response.sort((a, b) => b.Current_bounty - a.Current_bounty);
    
      if (JSON.stringify(json_response) !== JSON.stringify(oldLeaderboard)) {
        leaderboard = json_response;
        oldLeaderboard = leaderboard;
      }
    } catch (err) {
      console.log(err);
    }
  };

  leaderboard = fetchLeaderboardData();

  // EMERGENCY: COMMENT OUT THE IN CASE OF POLLING SCREWS UP
  onMount(() => {
    setInterval(async () => {
      await fetchLeaderboardData();
    }, 5000);
  });
  //
</script>

<svelte:window bind:innerWidth />

<main class="font-Space-Grotesk relative">
  {#key leaderboard}
    {#await leaderboard then}
      <Background info={leaderboard} />
    {/await}
  {/key}

  <div
    class="flex flex-col min-h-[75vh] md:min-h-[80vh] lg:min-h-[100vh] justify-between mb-10"
  >
    <!--<<div
      class="header flex justify-center lg:items-left lg:justify-between lg:pl-14 pt-10"
    >
      img src="acmlogo.png" alt="acmlogo" class="w-1/2 lg:w-1/4 max-w-md" />
    </div>-->
    <div class="flex justify-end gap-10 mx-32 mt-6 text-[40px] ">
      <a href="/" class="underline-effect">Home</a>
      <a href="/repos" class="underline-effect">Repositories</a>
    </div>
    <div
      class="hero w-screen flex flex-col xl:flex-row justify-between items-center p-2 lg:p-14"
    >
      <h1 class="text-xl lg:text-7xl font-bold text-white">LEADERBOARD</h1>
      <img
        src="hf_lime_logo.png"
        class="w-1/3 md:w-[20%] lg:w-[10%] max-w-lg"
        alt="logo"
      />
    </div>

    <div
      class="flex items-center justify-center xl:justify-between p-2 lg:p-14"
    >
      
      <div class="flex items-center justify-items-center">
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
      </div>
    </div>
  </div>

  {#await leaderboard}
    <div class="text-center">loading...</div>
  {:then}
    {#key leaderboard}
      {#if leaderboard.length > 0}
        <div
          class="leaderboard-background rounded-xl m-4 lg:m-10 p-5 flex flex-col justify-stretch items-center"
        >
          {#if innerWidth <= 672}
            {#each leaderboard as person, i}
              <Card
                index={i + 1}
                username={person.Name}
                points={person.Current_bounty}
              />
            {/each}
          {:else}
            {#if innerWidth >= 1440}
              {#if leaderboard.length >= 1}
                <CardRow
                  index={1}
                  username={leaderboard[0].Name}
                  points={leaderboard[0].Current_bounty}
                />
              {/if}
            {:else if leaderboard.length >= 1}
              <Card
                index={1}
                username={leaderboard[0].Name}
                points={leaderboard[0].Current_bounty}
              />
            {/if}
            <div
              class="grid-wrapper2-3 grid grid-cols-2 items-stretch justify-stretch"
            >
              {#if innerWidth >= 1440}
                {#if leaderboard.length >= 2}
                  <CardRow
                    index={2}
                    username={leaderboard[1].Name}
                    points={leaderboard[1].Current_bounty}
                  />
                {/if}

                {#if leaderboard.length >= 3}
                  <CardRow
                    index={3}
                    username={leaderboard[2].Name}
                    points={leaderboard[2].Current_bounty}
                  />
                {/if}
              {:else}
                {#if leaderboard.length >= 2}
                  <Card
                    index={2}
                    username={leaderboard[1].Name}
                    points={leaderboard[1].Current_bounty}
                  />
                {/if}

                {#if leaderboard.length >= 3}
                  <Card
                    index={3}
                    username={leaderboard[2].Name}
                    points={leaderboard[2].Current_bounty}
                  />
                {/if}
              {/if}
            </div>

            <div class="grid-peeps grid justify-stretch items-center w-full">
              {#each leaderboard as person, i}
                {#if ![0, 1, 2].includes(i)}
                  <Card
                    index={i + 1}
                    username={person.Name}
                    points={person.Current_bounty}
                  />
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      {:else}
        <div class="message text-center text-3xl pb-10">
          We are waiting for our first participant!
        </div>
      {/if}
    {/key}
  {/await}
</main>

<style>
  .grid-peeps {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
    background-color: #50DA4c;
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  .underline-effect:hover::before {
    width: 100%;
  }
</style>
