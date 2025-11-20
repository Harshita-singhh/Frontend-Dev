let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;
    document.getElementById("userDetails").innerText = JSON.stringify(user, null, 2);
}

document.body.innerHTML = `
    <form id="userForm" onsubmit="event.preventDefault(); updateUser();">
        <input type="text" id="name" value="${user.name}" placeholder="Name" required />
        <input type="email" id="email" value="${user.email}" placeholder="Email" required />
        <input type="number" id="age" value="${user.age}" placeholder="Age" required />
        <button type="submit">Update User</button>
    </form>
    <pre id="userDetails">${JSON.stringify(user, null, 2)}</pre>
`;
