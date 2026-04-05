    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=cloud_cover,precipitation,temperature_2m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
// Past Question: Why do I need to convert the below to json? Not already converted?: - verified: very dependent on the situation, in this case, use "response.json"
        .then(response => response.json())
        .then(data => {

        const temp = data.current.temperature_2m;
        const precip = data.current.precipitation;
        const cloud = data.current.cloud_cover;

        document.getElementById("temp").textContent = "Temperature: " + temp + " °F";
        document.getElementById("precip").textContent = "Precipitation: " + precip + " in";
        let cloudEmoji;

        if (cloud < 50) {
          cloudEmoji = "☀️";
        } 
        else {
          cloudEmoji = "☁️";
        }

// Future Question: Does "cloudEmoji" not have to be in quotation marks because it is a declared variable?

        document.getElementById("cloud").textContent = cloudEmoji;
      })
      
      .catch(error => console.error(error));

// Past Question: my spacing is a bit off, is that alright? - verfied: all good!
      