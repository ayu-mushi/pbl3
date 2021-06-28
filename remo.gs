function getNatureRemoData(endpoint) {　　　　　
  const REMO_ACCESS_TOKEN = 'sOwmMK4FyAiKhTpFKrEzE6yKvgujLT9g6KnFNUiDFgw.1AX1wPpPzekQEESXkC8XdH9XyTC3Wn9v1_PvdG7gZec'
  const headers = {
    "Content-Type" : "application/json;",
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };

  const options = {
    "method" : "get",
    "headers" : headers,
  };
  
  return JSON.parse(UrlFetchApp.fetch("https://api.nature.global/1/" + endpoint, options));
}