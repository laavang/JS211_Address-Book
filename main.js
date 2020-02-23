let contactsArray;


const getContacts = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((users) => {
            contactsArray = users.results;
            displayContacts();
        });
}

const displayContacts = () => {

    const contactsList = document.getElementById("contacts");
    contactsArray.map((user) => {
        console.log(contactsArray[0]);
        const li = document.createElement("li");
        li.className = "contact";
        const contactImg = document.createElement("img");
        contactImg.className = "contact-image";
        contactImg.src = user.picture.medium;
        const text = document.createTextNode(
            `${user.name.last}, ${user.name.first}`
        );
        text.className = "contact-name";

        linebreak = document.createElement("br");
        contactsList.append(li);
        li.appendChild(contactImg);
        li.appendChild(text);
        li.appendChild(linebreak);

        const button = document.createElement("button");
        button.innerHTML = "more info";
        button.onclick = function () {
            const contactDetails = document.createTextNode(
                `  ${user.cell}, ${user.phone}, ${(user.location.street.number,
                    user.location.street.name)}, ${user.location.city}, ${
                user.location.state
                }, ${user.location.postcode}`
            );
            contactDetails.className = "contact-details";
            li.appendChild(linebreak);
            li.appendChild(contactDetails);
        };
        li.appendChild(button);
    });
};

window.onload = () => {
    getContacts();
};



