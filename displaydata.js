//displaydata js
const data = [
    { "Name": "Ayush Singh", "Gender": "Male", "Epic No.": "1234abcd", "Booth No.": "2", "Polling station": "Government school,JPnagar", "Contact No": "7829284472" },
    // { "Name": "Kruthika", "Gender": "Female", "Epic No.": "54321pqr", "Booth No.": "1", "Polling station": "Government school,KS Layout", "Contact No": "9741875262" },
    // { "Name": "Samanth", "Gender": "Male", "Epic No.": "120710abcd", "Booth No.": "2", "Polling station": "Government school,Banashankari", "Contact No": "8762109021" }
];

function displayData() {
    const dataContainer = document.getElementById('dataContainer');

    data.forEach((person, index) => {
        const personDiv = document.createElement('div');
        personDiv.innerHTML = `
            <h3>Person ${index + 1}</h3>
            <p>Name: ${person.Name}</p>
            <p>Gender: ${person.Gender}</p>
            <p>Epic No.: ${person["Epic No."]}</p>
            <p>Booth No.: ${person["Booth No."]}</p>
            <p>Polling station: ${person["Polling station"]}</p>
            <p><a href="/chatbot.html">chatbot</a></p>
        `;
        dataContainer.appendChild(personDiv);
    });
}

displayData();
