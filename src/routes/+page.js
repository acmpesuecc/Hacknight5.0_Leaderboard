export async function load({ fetch, depends }) {
  depends("leaderboard");
  let leaderboard = await fetch(
    `https://hacknight.navinshrinivas.com/leaderboard_mat`
  )
    .then((response) => response.json())
    .then((leaderboard) =>
      leaderboard.sort((a, b) => b.Current_bounty - a.Current_bounty)
    )
    .catch((e) => {
      throw new Error(e.status, "Reddy Anna Is Not Talking");
    });

  return {
    leaderboard
  };
}
