<script>
  import { onMount, tick } from "svelte";

  export let info;

  function extractInfo(obj) {
    return { id: obj.Name, vals: [obj.Current_bounty] };
  }

  function randInt(upperBound) {
    return Math.floor(Math.random() * upperBound) + 1;
  }

  function binString(iterable) {
    return iterable.map((e) => e.toString(2)).join("");
  }

  function chars(string) {
    return [...string].map((c) => c.charCodeAt(0));
  }

  let binified = info
    .map(extractInfo)
    .map((extracted) => [
      binString(chars(extracted.id).slice(0, randInt(6))),
      binString(extracted.vals)
    ]);

  let innerHeight;
  let background;
  let tilings;

  onMount(() => {
    // TODO(ad-chaos): This closure should be async to make the below logic
    // work, since it is the _correct_ way to do it, but the website hangs when
    // doing an await tick(), no idea why :/
    //
    // await tick();
    // let tileHeight = background.offsetHeight;
    //
    // function calcTilings(viewPortHeight) {
    //   return 5;
    //   return Math.round(viewPortHeight / tileHeight);
    // }
    //
    // tilings = calcTilings(innerHeight)

    tilings = 5
  });
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap"
  rel="stylesheet"
/>

<svelte:window bind:innerHeight />
<main class="unselect">
  <div
    id="tile-bck"
    bind:this={background}
    class="text-4xl font-extrabold"
    disabled
  >
    {#each { length: tilings } as _}
      {#each binified as [name, value]}
        {name}<span class="gradient" >{value}</span>
      {/each}
    {/each}
  </div>
</main>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #0f0913;
    color: #231e25;
    justify-content: center;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: pre-wrap; /* CSS3 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    z-index: -1;
  }

  .unselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .gradient{
    background: linear-gradient(90deg, rgba(236, 66, 55, 0.3) 0%, rgba(255, 251, 164, 0.3) 66.15%, rgba(51, 182, 216, 0.3) 100%) ;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;  
  }
</style>
