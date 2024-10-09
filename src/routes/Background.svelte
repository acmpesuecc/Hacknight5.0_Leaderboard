<script>
  export let info = [
    {
      Name: "Navin Shrinivas",
      Current_bounty: 100
    }
  ];
  export let maintainer = false;

  function extractInfo(obj) {
    return maintainer
      ? { id: obj.Maintainer_name, vals: [obj.Points_allotted] }
      : { id: obj.Name, vals: [obj.Current_bounty] };
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

  let outerHeight;
  let outerWidth;
  let infoChunk;

  function calcRepeats(viewPortHeight, viewPortWidth, infoChunk) {
    if (infoChunk != undefined) {
      //HACK: multiplying 1.5 because probably the areas are not perfect?
      const pixArea = viewPortWidth * viewPortHeight * 1.5;
      const chunkArea = infoChunk.offsetHeight * infoChunk.offsetWidth;
      return Math.ceil(pixArea / chunkArea);
    }
    return 5;
  }
  $: repeats = calcRepeats(outerHeight, outerWidth, infoChunk);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap"
  rel="stylesheet"
/>

<svelte:window bind:outerHeight bind:outerWidth />

<main class="unselect">
  <div class="text-4xl font-extrabold text-center" disabled>
    <span class="chunk" bind:this={infoChunk}
      >{#each binified as [name, value]}{name}<span class="gradient"
          >{value}</span
        >{/each}</span
    >{#each { length: repeats } as _}{@html infoChunk
        ? infoChunk.outerHTML
        : ""}{/each}
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

  .gradient {
    background: linear-gradient(
      90deg,
      rgb(16, 34, 1) 0%,
      rgba(24, 105, 227, 0.3) 66.15%,
      rgba(81, 218, 76, 0.3) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
