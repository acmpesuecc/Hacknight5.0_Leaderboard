let json_response;

export const load = async ({ fetch }) => {
	try {
		const response = await fetch('http://smaran.ddns.net:3000/leaderboard_mat');
		if (!response.ok) {
			throw new Error('Reddy Anna Is Not Talking');
		} else {
			json_response = await response.json();

			// temp since tech people aren't opening PRs -_-
			// REMOVE BEFORE HACKNIGHT
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'alfadelta10010',
				Current_bounty: 15
			});
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'JoyenBenitto',
				Current_bounty: 25
			});
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'PhoenixFlame101',
				Current_bounty: 19
			});
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'NavinShrinivas',
				Current_bounty: 60
			});
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'mukunddeepak',
				Current_bounty: 20
			});
			json_response.push({
				ID: 3,
				CreatedAt: '0001-01-01T00:00:00Z',
				UpdatedAt: '0001-01-01T00:00:00Z',
				DeletedAt: null,
				Name: 'aadithyakrishnavamshi',
				Current_bounty: 20
			});
			return {
				json_response
			};
		}
	} catch (err) {
		console.log(err);
	}
};
