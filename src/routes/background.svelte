<script>



  const text_to_repeat = "GLHF*";
  let target_text = "";
  for(let i = 0; i < 100; i++){
    target_text += text_to_repeat; 
  }
</script>


<main>
  <textarea class="text-8xl font-bold pl-10 pr-10" disabled>{target_text}</textarea>
</main>


<style>
  textarea{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #0F0913;
    z-index: 0;
    color: #3c3a3d;
    overflow: hidden;
    user-select: none;
  }
</style>
