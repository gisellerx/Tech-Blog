const commentFormHandler = async function () {
    const post_id = document.querySelector('#title').dataset.id;
    const body = document.querySelector('#comment').value;
    // const post_id = postEl.getAttribute('data-id');
    console.log(post_id);
    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.reload();
            console.log(response);
        } else {
            alert(response.statusText);
        }
    } 
 };
console.log('linked');
 document.querySelector('#commentbutton').addEventListener('click', commentFormHandler);