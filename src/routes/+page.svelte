<script>
  import Background from './Background.svelte';
  import Card from './Card.svelte';
  export let data;
  console.log(data.json_response);


  let leaderboard = [
    {
    name: "cupcake",
    score: 209,
    },
    {
    name: "anuragrao04",
    score: 121,
    },
    {
    name: "VyoJ",
    score: 0,
    },
  ];


</script>

<main>
  <Background />
  {#each leaderboard as person, i}
    <Card index={i+1} username={person.name} points={person.score}/>
  {/each}

  
  
</main>
