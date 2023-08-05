//messageSenderAPI html
const assemblyConstituencies = {
    "Andhra Pradesh": [
        "Assembly 1",
        "Assembly 2",
        "Assembly 3"
    ],
    "Karnataka": [
        "Assembly A",
        "Assembly B",
        "Assembly C"
    ],
    "Tamil Nadu": [
        "Assembly X",
        "Assembly Y",
        "Assembly Z"
    ],
    "Maharashtra": [
        "Assembly M",
        "Assembly N",
        "Assembly O"
    ],
    "Uttar Pradesh": [
        "Assembly U1",
        "Assembly U2",
        "Assembly U3"
    ]
};

function populateAssemblyConstituency() {
    const stateSelect = document.getElementById('state');
    const assemblySelect = document.getElementById('assemblyConstituency');
    
    assemblySelect.innerHTML = '<option value="">Select Assembly Constituency</option>';
    
    const selectedState = stateSelect.value;
    const constituencies = assemblyConstituencies[selectedState] || [];
    
    constituencies.forEach(constituency => {
        const option = document.createElement('option');
        option.value = constituency;
        option.text = constituency;
        assemblySelect.appendChild(option);
    });
}