<script>
  import Background from "../Background.svelte";
  import Card from "./Card.svelte";
  import CardRow from "./CardRow.svelte";
  import { onMount } from "svelte";
  let innerWidth = 0;

  let leaderboard;
  let oldLeaderboard = [];

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch(
        "https://hacknight.navinshrinivas.com/leaderboard_mat"
      );
      if (!response || !response.ok) {
        throw new Error("Reddy Anna Is Not Talking");
      } else {
        let json_response = await response.json();

        json_response.sort((a, b) => b.Current_bounty - a.Current_bounty);
        if (JSON.stringify(json_response) != JSON.stringify(oldLeaderboard)) {
          leaderboard = json_response;
          oldLeaderboard = leaderboard;
        }
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

<main>
  {#key leaderboard}
    {#await leaderboard then}
      <Background info={leaderboard} />
    {/await}
  {/key}

  <div
    class="flex flex-col min-h-[75vh] md:min-h-[80vh] lg:min-h-[100vh] justify-between mb-10"
  >
    <div
      class="header flex justify-center lg:items-left lg:justify-between lg:pl-14 pt-10"
    >
      <img src="acmlogo.png" alt="acmlogo" class="w-1/2 lg:w-1/4 max-w-md" />
    </div>

    <div
      class="hero w-screen flex flex-col xl:flex-row justify-between items-center p-2 lg:p-14"
    >
      <h1 class="text-5xl lg:text-9xl font-bold text-white">LEADERBOARD</h1>
      <img
        src="h10_icon.png"
        class="w-4/6 md:w-[50%] lg:w-[30%] max-w-2xl"
        alt="logo"
      />
    </div>

    <div
      class="flex items-center justify-center xl:justify-between p-2 lg:p-14"
    >
      <img src="lines.svg" alt="lines" class="hidden xl:block" />
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
          class="leaderboard-background rounded-xl m-4 lg:m-10 p-5 flex flex-col justify-stretch items-center backdrop-blur-sm"
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
</style>
