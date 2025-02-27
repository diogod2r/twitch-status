const stream = async (streamer) => {
  const clientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";
  const query = `query{user(login:"${streamer}"){stream{id}}}`;
  try {
    const response = await fetch("https://gql.twitch.tv/gql", {
      method: "POST",
      headers: {
        "Client-ID": clientId
      },
      body: JSON.stringify({ query })
    });
    const data = await response.json();
    const status = data.data?.user?.stream?.id ? "online" : "offline";
    console.info(`${streamer} is ${status}`);
    return status;
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
}

// example:
stream("diogod2r");
