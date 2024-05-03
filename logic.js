function fetchInfo() {
    const inputValue = document.getElementById('inputField').value;
    fetch(`http://ip-api.com/json/${inputValue}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('location').textContent = `${data.city},  ${data.country}`;
        document.getElementById('timezone').textContent = `${data.timezone}`;
        document.getElementById('isp').textContent = `${data.isp}`;
        document.getElementById('ipAddress').textContent = inputValue;
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }
  