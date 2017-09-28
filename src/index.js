var element = document.getElementsByTagName("button")
element[0].addEventListener("click", (e) => {
  e.preventDefault()
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( res => render(res) )
  })

function render(res) {
  document.getElementById("fullname").innerText = `${res["results"][0]["name"]["first"]} ${res["results"][0]["name"]["last"]}`
  document.getElementById("email").innerText = `${res["results"][0]["email"]}`
  document.getElementById("street").innerText = `${res["results"][0]["location"]["street"]}`
  document.getElementById("city").innerText = `${res["results"][0]["location"]["city"]}`
  document.getElementById("state").innerText = `${res["results"][0]["location"]["state"]}`
  document.getElementById("postcode").innerText = `${res["results"][0]["location"]["postcode"]}`
  document.getElementById("cell").innerText = `${res["results"][0]["cell"]}`
  document.getElementById("date_of_birth").innerText = `${res["results"][0]["dob"]}`
  document.getElementById("phone").innerText = `${res["results"][0]["phone"]}`
  document.getElementById("profile_picture").src = res["results"][0]["picture"]["large"]
 }
