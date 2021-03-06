export const newFollow = (authorId, userId ) => (
  $.ajax({
    method: "POST",
    url: `api/authors/${authorId}/follows`,
    data: {user_id: userId, author_id: authorId}
  })
);

export const unFollow = (authorId, followId) => (
  $.ajax({
    method: "DELETE",
    url: `api/authors/${authorId}/follows/${followId}`
  })
);

export const followers = (authorId) => (
  $.ajax({
    method: "GET",
    url: `/api/authors/${authorId}/follows/followers`
  })
);

export const following = (authorId) => (
  $.ajax({
    method: "GET",
    url: `/api/authors/${authorId}/follows/following`
  })
);
