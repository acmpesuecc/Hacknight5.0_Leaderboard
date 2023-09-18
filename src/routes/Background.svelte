<script>
  const text_to_repeat = "GLHF*";
  let target_text = "";
  for(let i = 0; i < 100; i++){
    target_text += text_to_repeat; 
  }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap" rel="stylesheet">

<main>
  <textarea class="text-8xl font-extrabold" disabled>{"F*" + target_text}</textarea>
</main>


<style>
  textarea{
    position: fixed;
    top: 0;
    left: 0;
    height: 120vh;
    width: 120vw;
    background-color: #0F0913;
    z-index: 0;
    color: #231E25;
    overflow: hidden;
    user-select: none;
    z-index:-1;
  }

</style>
