import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

document.getElementById("comment").onsubmit = (() => {
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);

    (async () => {
        const content = document.getElementById('content').value
        console.log(content)
        if (content) {
            // This is the token for a burner account
            // I am well aware that this is a bad idea
            const octokit = new Octokit({ auth: req.getResponseHeader("nothing-to-see-here") });
            await octokit.request('POST /repos/action-thread-burner/action-thread/dispatches', {
              event_type: 'new-post',
              client_payload: {
                  text: content
              }
            })
        }
        window.location.reload(true) // This is a hack to allow the async function to run before the form submit kills the active execution
    })();
    return false;
})
