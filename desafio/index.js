async function getAddress() {
  const container = document.querySelector(".container_address")
  try {
    const response = await axios.get("https://viacep.com.br/ws/01001000/jssson/")
    // console.log(response)

    const data = response.data
    console.log(data);
    container.innerHTML = `
    <ul>
    <li>cep: ${data.cep}</li>
    <li>lograudouro: ${data.logradouro}</li>
    <li>complemento${data.complemento}</li>
    <li>bairro : ${data.bairro}</li>
    <li>localidade:${data.localidade}</li>
    <li>uf:${data.uf}</li>
    
  </ul>
    `
  } catch (error) {
    console.log("Error", error)
  }
}

getAddress()