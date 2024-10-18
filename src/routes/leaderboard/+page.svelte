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
        import.meta.env.VITE_BOT_ENDPOINT + "/leaderboard_mat"
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

  onMount(() => {
    setInterval(async () => {
      await fetchLeaderboardData();
    }, 5000);
  });
</script>

<svelte:window bind:innerWidth />

<main class="font-Space-Grotesk relative">
  {#key leaderboard}
    {#await leaderboard then}
      <Background info={leaderboard} />
    {/await}
  {/key}

  <div class="flex flex-col min-h-screen">
    <div class="flex justify-between items-center px-6 py-4">
      <img
        src="hf_lime_logo.png"
        class="w-20 h-20 object-contain"
        alt="logo"
      />
      <div class="flex gap-10 text-[24px]">
        <a href="/" class="underline-effect">Home</a>
        <a href="/repos" class="underline-effect">Repositories</a>
      </div>
    </div>
    
    <h1 class="text-5xl lg:text-7xl font-bold text-white text-center my-8">LEADERBOARD</h1>

    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center mb-0">
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
        <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6" />
      </div>

      {#await leaderboard}
        <div class="text-center">loading...</div>
      {:then}
        {#key leaderboard}
          {#if leaderboard.length > 0}
            <div class="leaderboard-background rounded-xl mx-4 lg:mx-10 p-5 flex flex-col justify-stretch items-center mt-10">
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
                <div class="grid-wrapper2-3 grid grid-cols-2 items-stretch justify-stretch">
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
    </div>
  </div>
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