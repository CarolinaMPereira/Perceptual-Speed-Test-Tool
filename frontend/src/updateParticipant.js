export function updateParticipantPSLetterA(ps_score_a, ps_time_a, user_id) {
  fetch("http://localhost:3001/participants/ps-letter-a", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ps_score_a, ps_time_a, user_id }),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // alert(data);
    });
}

export function updateParticipantPSNumbers(
  ps_score_numbers,
  ps_time_numbers,
  user_id
) {
  fetch("http://localhost:3001/participants/ps-numbers", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ps_score_numbers, ps_time_numbers, user_id }),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // alert(data);
    });
}

export function updateParticipantPSShapes(
  ps_score_shapes,
  ps_time_shapes,
  user_id
) {
  fetch("http://localhost:3001/participants/ps-shapes", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ps_score_shapes, ps_time_shapes, user_id }),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // alert(data);
    });
}
