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


<div class="flex flex-col h-[75vh] md:h-[80vh] lg:h-[100vh] justify-between mb-10">
  <div class="header flex justify-center lg:items-left lg:justify-between lg:pl-14 pt-10">
    <img src="acmlogo.png" alt="acmlogo" class="w-1/2 lg:w-1/4"> 
  </div>



  <div class="hero w-screen flex flex-col lg:flex-row justify-between items-center p-2 lg:p-14">
    <h1 class="text-5xl lg:text-9xl font-bold">
    LEADERBOARD
    </h1>
    <img src="h10_icon.png" class="w-4/6 md:w-[50%] lg:w-[30%]" alt="logo">
  </div>

  <div class="flex items-center justify-center xl:justify-between p-2 lg:p-14">
    <img src="lines.svg" alt="lines" class="hidden xl:block">
    <div class="flex items-center justify-items-center">
      <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6"> 
      <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6"> 
      <img src="downarrow.svg" alt="" class="lg:m-2 m-1 w-2/6"> 
    </div>
  </div>

</div>



  <div class="leaderboard-background rounded-xl bg-[#0F0913] m-4 lg:m-10 pt-5 pb-5 flex flex-col">
    {#each leaderboard as person, i}
      <Card index={i+1} username={person.name} points={person.total_points}/>
    {/each}
  </div>


</main>
