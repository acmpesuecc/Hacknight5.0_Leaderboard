<script>
  const text_to_repeat = "GLHF*";
  let target_text = "";
  for(let i = 0; i < 200; i++){
    target_text += text_to_repeat; 
  }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap" rel="stylesheet">

<main class="unselect">
  <div class="text-8xl font-extrabold" disabled>{"F*" + target_text}</div>
</main>


<style>
  div{
    position: fixed;
    top: 0;
    left: 0;
    height: 120vh;
    width: 120vw;
    background-color: #0F0913;
    z-index: 0;
    color: #231E25;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: pre-wrap;  /* CSS3 */
    word-wrap: break-word;  /* Internet Explorer 5.5+ */
    z-index:-1;
  }
  .unselect{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

</style>
