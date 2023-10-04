<script>
  import Background from "../Background.svelte";

  export let data;
  let user_details = data.user_details;
</script>

<main>
  <body>
    <Background />
    <div class="flex justify-center items-center my-12">
      <div class="image-container">
        <img
          src="card_background.svg"
          alt="background_image"
          class="w-40 h-auto block"
        />
        <img
          src="https://github.com/{user_details[0].Contributor_name}.png"
          alt=""
          class="rounded-md w-32 h-auto mr-12 overlay-image"
        />
      </div>
      <a
        href="https://github.com/{user_details[0].Contributor_name}"
        class="text-2xl md:text-2xl lg:text-5xl text-[#EFEDEF] font-bold m-4 mb-1 lg:m-4 md:mb-3"
        target="_blank"
      >
        {user_details[0].Contributor_name.toUpperCase()}
      </a>
    </div>
    <div class="text-center text-4xl font-semibold md:text-2xl lg:text-4xl">
      PULL REQUEST HISTORY
    </div>
    <div class="bg-[#0F0913] m-4 lg:m-10 pt-2 pb-2">
      {#each user_details as user}
        <div
          class="card p-6 block md:grid md:grid-cols-3 md:justify-center md:items-center text-center rounded-xl"
        >
          <p class="text-5xl my-auto pb-2 md:pb-0">{user.Points_allotted}</p>
          <div>
            <a
              href="https://github.com/{user.Maintainer_name}"
              class="deets"
              target="_blank">Maintainer: {user.Maintainer_name}</a
            >
            <p class="deets">Timestamp: {user.CreatedAt}</p>
          </div>
          <a href={user.Pullreq_url} class="deets" target="_blank">
            <button
              class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FFFBA4] via-[#D2B863] to-[#AD832D] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                View Pull Request
              </span>
            </button>
          </a>
        </div>
      {/each}
    </div>
    <div class="flex justify-center">
      <img src="acmlogo.png" alt="acmlogo" class="w-1/2 lg:w-1/4" />
    </div>
  </body>
</main>

<style>
  a:hover {
    color: #d2b863;
  }

  .card {
    border: 1px solid rgb(101, 95, 103);
    backdrop-filter: blur(5px);
    border-color: #d2b863;
    margin: 5%;
  }

  .deets {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: large;
  }

  .image-container {
    position: relative;
  }

  .overlay-image {
    position: absolute;
    top: 10%;
    left: 10%;
  }
</style>
