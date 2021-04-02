export default function Comment(comment) {
  //console.log(comment);
  const hasNestedComments = comment.comments.length > 0;

  return `
        <div class='nested-comments-${comment.level}'>
            <p class='comment-header'>
                ${comment.user} | ${comment.time_ago}
            </p>
            ${comment.content}
            ${
              hasNestedComments
                ? comment.comments.map((comment) => Comment(comment)).join("")
                : ""
            }
        </div>
    `;
}
//inside nestedComments we are using recursion, calling the Comment Function again will work
// until hasNestedComments is false or less than 0, we are also using in the div class nested-comments
// the ${comment.level} to give it an extra indentation level
