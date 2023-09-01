const userContainer = document.querySelector('.user-list')

// buscar usuários
async function fetchUsers() {
  try {
    const response = await api.get('/users')
    // quando sucesso, o axios retorna os dados no campo data.
    // essa api tem um array data com os usuários
    const users = response.data.data

    console.log(users)

    users.forEach(user => {
      const userCard = document.createElement('div')
      userCard.classList.add('user-card')

      userCard.innerHTML = `
        <img src="${user.avatar}" alt="">
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>${user.email}</p>
      `
      userContainer.appendChild(userCard)
    })

  } catch (error) {
    console.log('Erro ao buscar usuários', error)
  }
}

fetchUsers()