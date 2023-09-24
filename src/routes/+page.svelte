<script>
  import Background from './Background.svelte';
  import Card from './Card.svelte';
  export let data;
  console.log(data.json_response);


  let resultObj = data.json_response.reduce((acc, curr) => {
    if (acc[curr.Contributor_name]) {
      acc[curr.Contributor_name] += curr.Points_allotted;
    } else {
      acc[curr.Contributor_name] = curr.Points_allotted;
    }
    return acc;
  }, {});

  let leaderboard = Object.keys(resultObj).map(key => {
    return { name: key, total_points: resultObj[key] };
  });
  leaderboard.sort((a,b) => b.total_points - a.total_points);

</script>

<main>
  <Background />

  <div class="header flex items-left justify-between p-10">
    <img src="acmlogo.png" alt="acmlogo" width="20%"> 
  </div>



  <div class="hero w-screen h-1/6 flex justify-between items-center p-10">
  <h1 class="text-9xl font-bold">
  LEADERBOARD
  </h1>
  <img src="h10_icon.png" class="w-2/6" alt="logo">
  </div>

  <div class="flex items-center justify-around">
    <img src="lines.svg" alt="lines" class="hidden lg:block">
    <div class="flex items-center justify-around">
    <img src="downarrow.svg" alt="" class="m-2"> 
    <img src="downarrow.svg" alt="" class="m-2"> 
    <img src="downarrow.svg" alt="" class="m-2"> 
    </div>

  </div>




  <div class="leaderboard-background rounded-xl bg-[#0F0913] m-10 pt-5 pb-5 flex flex-col">
    {#each leaderboard as person, i}
      <Card index={i+1} username={person.name} points={person.total_points}/>
    {/each}
  </div>


</main>
